const Discord = require("discord.js");

const {
    shuffleArray,
    chunkArray,
    formatTeamNames,
    sendBotError,
    sendBotReplyError,
} = require("../../utils");

module.exports = {
    name: "team",
    description: "Creates a team",
    execute(msg, args) {
        if (!msg.member.voice.channel) {
            return sendBotReplyError(msg, "You are not in a voice channel!");
        }

        let maxTeams = 2;
        let maxPlayers = 5;
        let teamNames = [];
        if (!isNaN(args[0])) maxTeams = args[0];
        if (maxTeams > 25) {
            return sendBotReplyError(msg, "Cannot have greater than 25 teams!");
        }

        if (!isNaN(args[1])) maxPlayers = args[1];
        if (maxPlayers > 25) {
            return sendBotReplyError(
                msg,
                "Cannot have greater than 25 players per team!"
            );
        }

        if (!isNaN(args[0]) && !isNaN(args[1]) && args[2]) {
            teamNames = formatTeamNames(args.slice(2, args.length));
        }

        const membersInVoice = msg.member.voice.channel.members
            .array()
            .filter((member) => {
                return member.user.bot == false && !member.voice.mute;
            });

        const randomizedUsers = chunkArray(
            shuffleArray(membersInVoice),
            maxPlayers
        );

        if (membersInVoice.length < maxTeams * maxPlayers) {
            sendBotError(msg, "Not enough users to make balanced teams!");
        }

        for (let i = 0; i < maxTeams; i++) {
            let teamEmbed = new Discord.MessageEmbed()
                .setTitle(teamNames[i] ? teamNames[i] : `Team ${i + 1}`)
                .setThumbnail(
                    "https://raw.githubusercontent.com/RileyAbr/In-house-inator/master/assets/in-house-inator.jpg"
                );
            // .setDescription("<@" + msg.member.user.id + ">") Currently unused, but can ping a member in the description

            randomizedUsers[i].forEach((member, index) => {
                teamEmbed.addField(`Player ${index + 1}`, member.user.username);
            });

            msg.channel.send(teamEmbed);
        }
    },
};
