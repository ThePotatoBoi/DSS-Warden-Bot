const { SlashCommandBuilder } = require('@discordjs/builders');
const { AlterbladeGame } = require('../alterblade/alterbladeGame.js');
const isGameActive = false;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('alterblade')
        .setDescription('Play an Alterblade with a another player!')
        .addUserOption(option => option.setName('target').setDescription('The player to play Alterblade with!').setRequired(true)),
    async execute(interaction) {
        const targetUser = interaction.options.getUser('target');
        if (targetUser.bot || targetUser.id == interaction.user.id) {
            await interaction.reply('Are you okay? You targeted an invalid player <:dss_pepe_clown_sad:953827871598731325>');
            return;
        }

        const filter = response => {
            return response.content.toLowerCase() == 'accept' || response.content.toLowerCase() == 'yes';
        };
        
        interaction.reply(`${interaction.user} challenges ${targetUser} to an Alterblade battle! ${targetUser}, do you accept?`, { fetchReply: true })
            .then(() => {
                interaction.channel.awaitMessages({ filter, max: 1, time: 15000, errors: ['time'] })
                    .then(collected => {
                        if (collected.first().author.id == targetUser.id) {
                            interaction.followUp(`${collected.first().author} accepts the challange!`);
                            const channel = interaction.member.guild.channels.cache.get(interaction.channelId);
                            const game = new AlterbladeGame(channel, interaction.user, targetUser);
                        }
                    })
                    .catch(collected => {
                        interaction.followUp('Looks like someone doesn\'t want to play with you. Dsrv <:dss_pepe_clown_sad:953827871598731325>');
                    });
            });
    },
};