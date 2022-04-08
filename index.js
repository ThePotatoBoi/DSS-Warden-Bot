const { Client, Collection, MessageEmbed, Intents } = require("discord.js");
const { Routes } = require("discord-api-types/v9");
const { REST } = require("@discordjs/rest");
const fs = require("node:fs");
const { loadSlashCommands } = require("./handlers/loadSlashCommands");
const { loadCommands } = require("./handlers/loadCommands");
const { loadEvents } = require("./handlers/loadEvents");

const client = new Client({
    allowedMentions: {
        parse: ["users", "roles"]
    }, intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

loadSlashCommands(client);
loadEvents(client);
loadCommands(client);

client.login(TOKEN)
    .then(function() {
        console.log(`Successfully logged in as ${client.user.username}#${client.user.discriminator}`);
    });