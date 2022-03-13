module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		const textList = ["Lazyass Tyrant", "Hail the Mighty Inspector!", "Dang Panget >:["];
		client.user.setPresence({ status: "online" });
		setInterval(function() {
			var text = textList[Math.floor(Math.random() * textList.length)];
			client.user.setActivity(text, { type: "PLAYING"});
		}, 4000);
	},
};