const Game = require("../../game/__init__");

const preSymbol = '$';

const wolfGameCmd = {
    startGame: ()
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
    await message.react('👍')
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
                        players.push({user: user, id: user.id});
                    }
                })
            })
            if (players.length) {
                let listPlayer = '';
                players.forEach(each => listPlayer += each.user.username + '\n');
                msg.reply(`Game có ${players.length} người chơi.\nList player: \n${listPlayer}`);
                const game = new Game(players);
                await game.start();
            }
        })
        .catch(collected => {
            msg.channel.send(`Không đủ người chơi, bye!`);
        });
}
