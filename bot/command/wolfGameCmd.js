const Game = require("../../game/__init__");

const preSymbol = '$';

let game;

const wolfGameCmd = {
    wolfCmd: (client) => {
        client.on('messageCreate', async (msg) => {
            const message = msg.content.toLowerCase();
            switch (message) {
                case '$wolf':
                    await startGame(msg);
                    break;
            }
        })
    }
}

module.exports = wolfGameCmd;

const startGame = async (msg) => {
    const message = await msg.reply({
        content: 'Game đã sẵn sàng, hãy thả like vào tin nhắn này để join game',
        fetchReply: true
    });
    await message.react('👍');
    const filter = (reaction, user) => {
        return ['👍', '👎'].includes(reaction.emoji.name);
    };

    message.awaitReactions({max: 20, time: 5000})
        .then(async collected => {
            const reaction = collected.first();
            const players = [];
            await reaction.users.fetch().then(users => {
                users.forEach(user => {
                    if (!user.bot) {
                        players.push({name: user, id: user.id});
                    }
                })
            })
            if (players.length) {
                let listPlayer = '';
                players.forEach(each => listPlayer += each.name.username + '\n');
                msg.reply(`Game có ${players.length} người chơi.\nList player: \n${listPlayer}`);
                game = await new Game(players, msg);
                await game.setRole();
                await game.getListPlayerss();
                // await game.start();
                // await start(game, msg);
            }
        })
        .catch(collected => {
            console.log(collected);
            msg.channel.send(`Không đủ người chơi, bye!`);
        });
}

const start = async (game, bot) => {
    // const msgBg = await bot.channel.send({content:"Chọn người để bảo vệ",fetchReply: true});
    // await msgBg.react('1️⃣');
    // await bot.channel.send(game.getListPlayerss());
    const a = game.getListPlayerss();
    console.log(a);
}
