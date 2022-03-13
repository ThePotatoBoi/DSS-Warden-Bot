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

            client.commands = new Collection();
            const commandFiles = fs.readdirSync('./slashCommands').filter(file => file.endsWith('.js'));
            
            for (const file of commandFiles) {
                const command = require(`../slashCommands/${file}`);
                client.slashCommands.set(command.data.name, command);
            }

        }

	},
};