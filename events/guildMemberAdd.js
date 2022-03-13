const { MessageEmbed } = require("discord.js");
const { DSS_WELCOME_CHANNEL_ID } = require("../config.json");

module.exports = {
	name: 'guildMemberAdd',
	execute(member, client) {/*
        const randomFooterText = ["Interested becoming a server slave? Contact the staffs!", "Not reading the rules is a century of bad luck.", "What is yours is ours!", "Oh, have we met?", "We have tanks in the basement!"];

        const channel = member.guild.channels.cache.get(DSS_WELCOME_CHANNEL_ID)
        const welcomeEmbed = new MessageEmbed()
            .setTitle(`Welcome to the Shack ${member.user.tag}!`)
            .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
            .setDescription(
                `Ayooo <@${member.user.id}> just died and got isekaid to the DIO's Soviet Shack <a:dss_portal:944801030292533338>. I repeat, <@${member.user.id}> in the Shack, komrados <:dss_pepe_salute:944606954393862174>!\n\n<a:dss_arrow:944801224761421886> Get verified at <#945175689026494474>.\n<a:dss_arrow:944801224761421886> Please get examined at <#944599585685389312>\n<a:dss_arrow:944801224761421886> Read the server rules at <#944823760140247090>.`
            )
            .setFooter(
                randomFooterText[Math.floor(Math.random() * randomFooterText.length)],
                member.user.displayAvatarURL({dynamic: true, size: 512})
            )
            .setColor('RED');

        member.guild.channels.cache.get(channel).send(welcomeEmbed)*/

	},
};