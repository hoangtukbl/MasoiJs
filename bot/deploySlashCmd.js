const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId, guildId, token } = require('./config.json');


const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
    new SlashCommandBuilder().setName('help').setDescription('Replies with help1'),
    new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
    new SlashCommandBuilder().setName('user').setDescription('Replies with user info!').addUserOption(option =>
        option.setName('target').setDescription('get user').setRequired(true)),
    new SlashCommandBuilder().setName(`exit`).setDescription('Delete spam @everyone'),
    new SlashCommandBuilder().setName('kick').setDescription('Kick user from voice channel').addUserOption(option =>
        option.setName('user').setDescription('username you want to kick').setRequired(true)
    ),
    new SlashCommandBuilder()
        .setName('info')
        .setDescription('Get info about a user or a server!')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Info about a user')
                .addUserOption(option => option.setName('target').setDescription('The user')))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Info about the server')),
    new SlashCommandBuilder().setName('schedule').setDescription('Set schedule').addStringOption(option =>
        option.setName('name').setDescription('name schedule').setRequired(true)
    ),
    new SlashCommandBuilder().setName("asd").setDescription("asd")
]
    .map(command => command.toJSON());


const rest = new REST({ version: '10' }).setToken(token);
rest.put(Routes.applicationGuildCommands(process.env.botAppId, process.env.guildId), { files: null, body: commands })
    .then((commands) => console.log(`Successfully registered ${commands.length} application commands.`))
    .catch(console.error);
