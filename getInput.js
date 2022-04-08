function getInput(user, timer) {
    const collector = interaction.channel.createMessageCollector({ time: timer });
    collector.on("collect", function(message) {
        return message;
    });
}

module.exports = { getInput };