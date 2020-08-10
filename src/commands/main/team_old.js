const Discord = require("discord.js");

const mockUsers = require("../../mocks");
const shuffleArray = require("../../utils");

module.exports = {
    name: "team_old",
    description: "Creates a team",
    execute(msg, args) {
        const voiceChannel = msg.member.voice.channel;
        const membersInVoice = voiceChannel.members;

        const maxTeams = 2;
        const maxPlayers = 5;

        const randomizedUsers = shuffleArray(mockUsers);
        let teams = [];
        let teamCounter = 0;
        let counter = 0;

        randomizedUsers.forEach((user, index) => {
            if (teamCounter < maxTeams) {
                teams.push({
                    name: `Team ${teamCounter + 1}`,
                    value: user.username,
                });

                if (
                    (index + 1) % 5 == 0 &&
                    index != maxPlayers * maxTeams - 1
                ) {
                    teams.push({ name: "\u200B", value: "\u200B" });
                    teamCounter++;
                }
            } else {
                teams.push({
                    name: `None`,
                    value: user.username,
                });
            }
        });

        const teamEmbed = new Discord.MessageEmbed()
            .setTitle("Here are the teams!")
            .setThumbnail("https://cdn.discordapp.com/embed/avatars/0.png")
            .addFields(teams);

        msg.channel.send(teamEmbed);
    },
};
