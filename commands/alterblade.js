const { DSS_ALTERBLADE_CHANNEL_ID } = require("../config.json");

module.exports = {
	name: 'alterblade',
	execute(client, channel, player1Id, player2Id) {
		channel.send("Ey!");
	}
};