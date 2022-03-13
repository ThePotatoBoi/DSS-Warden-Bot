const { DSS_ALTERBLADE_CHANNEL_ID, PREFIX } = require("../config.json");

module.exports = {
	name: 'messageCreate',
	execute(message, client) {
        var x = [message, client];
		if (message.content.startWith(PREFIX)) {
            const channel = client.channels.cache.get(message.channelId);
            channel.send("I received something.");
        }
	},
};