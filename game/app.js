const fs = require('fs');

const commandFiles = fs.readdirSync('./roles').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name,command);
}
console.log(commandFiles);
