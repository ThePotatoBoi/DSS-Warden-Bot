const { Client, Collection, MessageEmbed, Intents } = require("discord.js");
const { Routes } = require("discord-api-types/v9");
const { REST } = require("@discordjs/rest");
const fs = require("node:fs");
const { loadCommands } = require("./handlers/loadCommands");
const { CLIENT_ID, GUILD_ID, TOKEN } = require("./config.json");

const client = new Client({
    allowedMentions: {
        parse: ["users", "roles"]
    }, intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

loadCommands(client);

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

client.login(TOKEN)
    .then(function() {
        console.log(`Successfully logged in as ${client.user.username}#${client.user.discriminator}`);
    });

client.once('ready', function() {
    console.log('Ready!');
});
    
client.on('interactionCreate', async function(interaction) {
	if (!interaction.isCommand()) return;
	const command = client.commands.get(interaction.commandName);
	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});