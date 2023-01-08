import {Events} from "discord.js";
import {Init} from "../../game/__init__"

let game:any;

export const wolfGameCmd = {
    wolfCmd: (client: any) => {
        client.on('messageCreate', async (interaction: any) => {
            const message = interaction.content.toLowerCase();
            switch (message) {
                case '$wolf':
                    await startGame(interaction, client);
                    break;
            }
        })
        client.on(Events.InteractionCreate, async (interaction: any) => {
            if (!interaction.isStringSelectMenu()) return;
            const selected = interaction.values[0];
            await game.setProtected(selected);
            await interaction.channel.send(selected);
        });
        client.on(Events.InteractionCreate, async (interaction: any) => {
            if (!interaction.isButton()) return;
            console.log(interaction.customId);
        });
    }
}


const startGame = async (interaction: any, client: any) => {
    const message = await interaction.reply({
        content: 'Game đã sẵn sàng, hãy thả like vào tin nhắn này để join game',
        fetchReply: true
    });
    await message.react('👍');
    const filter = (reaction: any, user: any) => {
        return ['👍', '👎'].includes(reaction.emoji.name);
    };

    message.awaitReactions({max: 20, time: 5000})
        .then(async (collected: any) => {
            const reaction = collected.first();
            const players: any[] = [];
            await reaction.users.fetch().then((users: any) => {
                users.forEach((user: any) => {
                    if (!user.bot) {
                        players.push({name: user, id: '869927501634359357'});
                        players.push({name: user, id: '685822823000047669'});
                        players.push({name: user, id: user.id});
                        players.push({name: user, id: '688796295871201418'});
                        players.push({name: user, id: '710885118444830740'});
                        players.push({name: user, id: '756049190513279027'});
                    }
                })
            })
            if (players.length) {
                let listPlayer = '';
                players.forEach(each => listPlayer += each.name.username + '\n');
                interaction.reply(`Game có ${players.length} người chơi.\nList player: \n${listPlayer}`);
                game = await new Init(players, interaction, client);
                await game.setRole();
                await game.getListPlayerss();
                await game.start();
            }
        })
        .catch((collected: any) => {
            console.log(collected);
            interaction.channel.send(`Không đủ người chơi, bye!`);
        });
}

