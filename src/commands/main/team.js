const Discord = require("discord.js");

const mockUsers = require("../../mocks");
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
        let maxTeams = 2;
        let maxPlayers = 5;
        let teamNames = [];
        if (!isNaN(args[0])) maxTeams = args[0];
        if (!isNaN(args[1])) maxPlayers = args[1];

        if (!isNaN(args[0]) && !isNaN(args[1]) && args[2]) {
            teamNames = formatTeamNames(args.slice(2, args.length));
        }

        if (!msg.member.voice.channel) {
            return sendBotReplyError(msg, "You are not in a voice channel!");
        }

        const voiceChannel = msg.member.voice.channel;
        const membersInVoice = voiceChannel.members.array().filter((member) => {
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
                .setThumbnail("https://cdn.discordapp.com/embed/avatars/0.png");
            // .setDescription("<@" + msg.member.user.id + ">") Currently unused, but can ping a member in the description

            randomizedUsers[i].forEach((member, index) => {
                teamEmbed.addField(`Player ${index + 1}`, member.user.username);
            });

            msg.channel.send(teamEmbed);
        }
    },
};
