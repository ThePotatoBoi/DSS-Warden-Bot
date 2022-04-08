const { DSS_ALTERBLADE_CHANNEL_ID } = require("../config.json");
const { AlterbladeGame } = require("../alterblade/alterbladeGame.js");

module.exports = {
	name: 'alterblade',
	execute(client, message, ...args) {
		const user = message.author;
		const targetUser = client.users.get(args[1]);
		console.log(user, targetUser);
		const channel = client.channels.cache.get(message.channelId);

		if (!args[1]) return;

		if (user.id == targetUser.id) {
			channel.send(`You can't play this game with yourself <:dss_pepe_clown_sad:953827871598731325>`);
		} else {
			channel.send(`${user} challenges ${targetUser} into an Alterblade battle!`);
		}
	}
};