import {wolfGameCmd} from "./command/wolfGameCmd";
const { token } = require('./config.json');
const normalCommand = require('./command/command');
const bot = require('./config/config');
const slashCommands = require('./command/slashCommand');

bot.once('ready', () => {
    console.log('Bot is Ready!');
    // bot.channels.cache.get('940516974180589580').send({ content: "I'm coming back..." });
});


// normalCommand.normalCom(bot);
// slashCommands.slashCommand(bot);
wolfGameCmd.wolfCmd(bot);

bot.login(token).then((data:any) => console.log(data)).catch((err:any) => console.log(err));
