const { Client, Collection, MessageEmbed, Intents } = require("discord.js");
const { Routes } = require("discord-api-types/v9");
const { REST } = require("@discordjs/rest");
const fs = require("node:fs");
const { loadCommands } = require("./handlers/loadSlashCommands");
const { CLIENT_ID, GUILD_ID, TOKEN } = require("./config.json");
const { loadEvents } = require("./handlers/loadEvents");

const client = new Client({
    allowedMentions: {
        parse: ["users", "roles"]
    }, intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

loadCommands(client);
loadEvents(client);

client.login(TOKEN)
    .then(function() {
        console.log(`Successfully logged in as ${client.user.username}#${client.user.discriminator}`);
    });