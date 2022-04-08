const { CommandInteraction } = require("discord.js");
const { DSS_ALTERBLADE_CHANNEL_ID, PREFIX } = require("../config.json");

module.exports = {
	name: 'messageCreate',
	execute(message, client) {

        var x = [message, client];
		if (message.content.toLowerCase().startsWith(PREFIX)) {

            const messageStr = message.content.substring(4).split(" ");
            const args = [];

            for (let i = 0; i < messageStr.length; i++) {
                if (messageStr[i] != "") args[i] = messageStr[i];
            }

            const channel = client.channels.cache.get(message.channelId);
            channel.send("I received something: " + args);
            const command = client.commands.get(args[0]);

            if (!command) return;

            try {
                command.execute(client, message, ...args);
            } catch(error) {
                channel.send("There's something wrong just happened...");
            }

        }

	},
};