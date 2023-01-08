const { Client, GatewayIntentBits, Partials } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions],
    partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

module.exports = client;
