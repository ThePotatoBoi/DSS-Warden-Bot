const { DSS_ALTERBLADE_CHANNEL_ID } = require("../config.json");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('creates an Alterblade 0.1 BETA session.')
		.setDescription('Get the avatar URL of the selected user, or your own avatar.')
		.addUserOption(option => option.setName('channel').setDescription('The channel that will serve as the Alterblade channel!')),
	async execute(interaction) {
		
	},
};