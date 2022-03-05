const { Client, Collection, MessageEmbed, Intents } = require("discord.js");
const { Routes } = require("discord-api-types/v9");
const { REST } = require("@discordjs/rest");
const { loadCommands } = require("./handlers/loadCommands");
const fs = require("node:fs");

const config = process.env;
const client = new Client( {
        allowedMentions: {
            parse: ["users", "roles"]
        },
        intents: [
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES
        ]
    }
);

client.commands = new Collection();
client.slashCommands = new Collection();

loadCommands(client);

client.login(config["TOKEN"])
    .then(function() {
        console.log(`Successfully logged in as ${client.user.username}#${client.user.discriminator}`);
    }
);