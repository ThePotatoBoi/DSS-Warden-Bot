module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		const textList = [
			"Lazyass Tyrant",
			"Pain and Suffering",
			"It do be like that",
			"To live is to suffer",
			"Vile Degenerate",
			"Do labor!",
			"Slavery!",
			"Uwugaboogaloo",
			"#NoToPurple",
			"Dang panget >:[",
			""
		];
		client.user.setPresence({ status: "online" });
		setInterval(function() {
			var text = textList[Math.floor(Math.random() * textList.length)];
			client.user.setActivity(text, { type: "PLAYING"});
		}, 3000);
	},
};