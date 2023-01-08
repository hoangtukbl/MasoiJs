import {wolfGameCmd} from "./command/wolfGameCmd";
const normalCommand = require('./command/command');
const bot = require('./config/config');
const slashCommands = require('./command/slashCommand');
require('dotenv').config()

bot.once('ready', () => {
    console.log('Bot is Ready!');
    // bot.channels.cache.get('940516974180589580').send({ content: "I'm coming back..." });
});


// normalCommand.normalCom(bot);
// slashCommands.slashCommand(bot);
wolfGameCmd.wolfCmd(bot);

bot.login(process.env.TOKEN_DISCORD).then((data:any) => console.log("Connect")).catch((err:any) => console.log(err));
