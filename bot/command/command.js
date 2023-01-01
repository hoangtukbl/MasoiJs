const {PermissionFlagsBits, Events} = require('discord.js');
const moment = require('moment');
const {GuildScheduledEventEntityType} = require("discord-api-types/v8");
const Game = require("../../game/__init__");

const command = {
    normalCom: (client) => {
        client.on('messageCreate', async (msg) => {
            const commandName = msg.content.toLowerCase();
            if (commandName === '$hello') {
                await msg.reply(`Good morning ${msg.author.username}!`);
                await msg.author.send("ok");
            } else if (commandName === '$ping') {
                await msg.reply(`Ping của kênh "${msg.channel.name}" thuộc máy chủ "${msg.guild.name}": ${client.ws.ping} ms`);
            } else if (commandName === '$server') {
                await msg.reply(`Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`);
            } else if (commandName === '$user') {
                const checkAdmin = msg.member.permissions.has(PermissionFlagsBits.Administrator);
                const imageURL = msg.author.avatarURL();
                await msg.reply({
                    content: `\`\`\`Your name: ${msg.author.tag}\nAdmin: ${checkAdmin ? "True" : "False"} \nMention: ${msg.author}\nYour id: ${msg.author.id}\nCreated at: ${moment(msg.author.createdAt).format("ll")}\nYour avatar:\`\`\``,
                    files: [imageURL],
                });

            } else if (commandName === '$dis-voice') {
                await msg.member.voice.disconnect();
            }  else if (commandName.split(' ')[0] === '$spam') {
                for (let i = 0; i < parseInt(commandName.split(' ')[1]); ++i) {
                    setTimeout(() => msg.channel.send('$s'), 5000);
                }
            } else if (commandName === '$rickroll') {
                const im = "https://images4.fanpop.com/image/photos/22700000/Rick-Rolling-Win-rickrolld-22704848-250-217.gif";
                const a = "https://stream.nixcdn.com/Sony_Audio59/NeverGonnaGiveYouUp-RickAstley-5890955.mp3?st=OLR48deuiWZTedRu3PUT8w&e=1662707548&t=1662621108041";
                await msg.channel.send({content: "I'm coming back...", files: [im, a]});
            } else if (commandName === "$wolf") {
                const message = await msg.reply({ content: 'Game đã sẵn sàng, hãy thả like vào tin nhắn này để join game', fetchReply: true });
                await message.react('👍')
                const filter = (reaction, user) => {
                    return ['👍', '👎'].includes(reaction.emoji.name);
                };

                message.awaitReactions({  max: 20, time: 5000})
                    .then(async collected => {
                        const reaction = collected.first();
                        const players = [];
                        await reaction.users.fetch().then(users => {
                            users.forEach(user => {
                                if(!user.bot){
                                    players.push({user: user, id: user.id});
                                }
                            })
                        })
                        if(players.length){
                            let listPlayer = '';
                            players.forEach(each => listPlayer+= each.user.username+'\n');
                            msg.reply(`Game có ${players.length} người chơi.\nList player: \n${listPlayer}`);
                        }
                    })
                    .catch(collected => {
                        msg.channel.send(`Không đủ người chơi, bye!`);
                    });
            }
        });
    }
}

module.exports = command;

// client.on(Events.MessageReactionAdd, async (reaction, user) => {
//     if (reaction.partial) {
//         try {
//             await reaction.fetch();
//         } catch (error) {
//             console.error('Something went wrong when fetching the message:', error);
//             return;
//         }
//     }
//
//     console.log(`${reaction}'s message "${reaction.message.content}" gained a reaction!`);
//     console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
// });
// ==============================Schedule==============================
//else if (commandName.split(' ')[0] === '$lich') {
//                 const guild = msg.guild;
//                 const idChannel = '882088542535290891'; //id voicechat 'code' máy chủ 'Hội gaming NĐC'
//                 const raw = commandName.split(' ');
//                 const nameEvent = raw[1];
//                 let dateInput = raw[2];
//                 const elementDatehasTime = raw[2].split('/' ?? '-');
//                 const time = elementDatehasTime[2].split('T');
//                 const dateFormated = `${time[0]}-${elementDatehasTime[1]}-${elementDatehasTime[0]}T${time[1]}`;
//                 let dateEnd = commandName.split(' ')[3] ?? null;
//                 const description = commandName.split(' ')[4] ?? null;
//                 let dateStart = null;
//                 const banner = msg.author.avatarURL();
//                 try {
//                     dateStart = Date.parse(dateFormated);
//                     dateEnd = Date.parse(dateEnd);
//                 } catch (err) {
//                     msg.reply('1Structure: $lich <name> <dateStart> <dateEnd(OPTIONAL)>');
//                 }
//                 try {
//                     await guild.scheduledEvents.create({
//                         entityType: GuildScheduledEventEntityType.Voice,
//                         channel: idChannel,
//                         privacyLevel: 2,
//                         name: nameEvent,
//                         description: description,
//                         scheduledStartTime: dateStart,
//                         scheduledEndTime: dateEnd,
//                         image: banner
//                     });
//                     msg.reply(`'${nameEvent}' event scheduled\nStart date: ${dateInput.split('T')[1]} - ${dateInput.split('T')[0]}\n` +
//                         `Voice channel: ${msg.channel.name}\n${description ? `Description: ${description}` : ''}`);
//                 } catch (err) {
//                     console.log(err);
//                     msg.reply('Structure: $lich <name> <dateStart> <dateEnd(OPTIONAL)>');
//                 }
//             }
