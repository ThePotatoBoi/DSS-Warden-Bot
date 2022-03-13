const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'interactionCreate',
	execute(interaction, client) {
		if (!interaction.isCommand()) return;

		const command = client.slashCommands.get(interaction.commandName);
		if (!command) return;
	
		try {
			command.execute(interaction);
		} catch (error) {
			console.error(error);
			interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}

		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
	},
};