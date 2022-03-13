const { CommandInteraction } = require("discord.js");
const { DSS_ALTERBLADE_CHANNEL_ID, PREFIX } = require("../config.json");

module.exports = {
	name: 'messageCreate',
	execute(message, client) {
        var x = [message, client];

		if (message.content.startsWith(PREFIX)) {

            const messageStr = message.content.substring(4).split(" ");
            const args = [];

            for (let i = 0; i < messageStr.length; i++) {
                if (messageStr[i] != "") args[i] = messageStr[i];
            }

            const channel = client.channels.cache.get(message.channelId);
            channel.send("I received something: " + args);

            const command = client.commands.get(args[0]);

            try {
                command.execute(client, "", "");
            } catch(error) {
                channel.send("KOMRAD! I don't have that command!");
            }

        }

	},
};