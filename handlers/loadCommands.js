function loadCommands(client) {
    const fs = require("fs");
    const commandFolders = fs.readdirSync("./commands");
    for (const folder of commandFolders) {
        const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(
            function(file) {
                file.endsWith(".js");
            }
        );
        for (const file of commandFiles) {
            const command = require(`../commands/${folder}/${file}`);
            if (command.name) {
                client.commands.set(command.name, command);
                console.log(`Command ${command.name} registed as ${command}!`);
            } else {
                console.log(`A command failed to load!`);
                continue;
            }
        }
    }
}

module.exports = { loadCommands };