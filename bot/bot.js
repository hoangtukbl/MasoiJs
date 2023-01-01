const { token } = require('./config.json');
const normalCommand = require('./command/command');
const bot = require('./config/config');
const slashCommands = require('./command/slashCommand');
const wolfGame = require('./command/wolfGameCmd');

bot.once('ready', () => {
    console.log('Bot is Readyyyyyyyy!');
    // bot.channels.cache.get('940516974180589580').send({ content: "I'm coming back..." });
});

// normalCommand.normalCom(bot);
// slashCommands.slashCommand(bot);
wolfGame.wolfCmd(bot);

bot.login(token).then(r => console.log(r)).catch(err => console.log(err));
