function loadCommands(client) {
    const { Collection } = require("discord.js");
    const fs = require("node:fs");

    client.slashCommands = new Collection();
    const commandFiles = fs.readdirSync('./slashCommands').filter(file => file.endsWith('.js'));
    
    for (const file of commandFiles) {
        const command = require(`../slashCommands/${file}`);
        client.slashCommands.set(command.data.name, command);
    }
}

module.exports = { loadCommands };