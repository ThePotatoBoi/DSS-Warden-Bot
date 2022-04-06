function loadCommands(client) {
    const { Collection } = require("discord.js");
    const fs = require("node:fs");

    client.commands = new Collection();
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    
    for (const file of commandFiles) {
        const command = require(`../commands/${file}`);
        client.slashCommands.set(command.name, command);
    }
}

module.exports = { loadCommands };