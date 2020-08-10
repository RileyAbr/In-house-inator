const Discord = require("discord.js");

const mockUsers = require("../../mocks");
const { shuffleArray, chunkArray, sendBotError } = require("../../utils");

module.exports = {
    name: "team",
    description: "Creates a team",
    execute(msg, args) {
        const maxTeams = 2;
        const maxPlayers = 5;
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
                .setTitle(`Team ${i + 1}`)
                .setThumbnail("https://cdn.discordapp.com/embed/avatars/0.png");

            randomizedUsers[i].forEach((member, index) => {
                teamEmbed.addField(`Player ${index + 1}`, member.user.username);
            });

            msg.channel.send(teamEmbed);
        }
    },
};
