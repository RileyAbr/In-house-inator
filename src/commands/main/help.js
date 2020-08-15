const Discord = require("discord.js");

module.exports = {
    name: "help",
    description: "Shows all of the commands available",
    execute(msg, args) {
        const helpEmbed = new Discord.MessageEmbed()
            .setTitle("!in commands")
            .setThumbnail(
                "https://raw.githubusercontent.com/RileyAbr/In-house-inator/master/assets/in-house-inator.jpg"
            )
            .setDescription(
                `All commands begin with \`!in\`. Any command with \`{}\` indicates extra options for the command.`
            );
        addFields({
            name: "!in",
            value: "Shorthand for !in team",
        });
        addFields({
            name: "!in team {# teams} {# of players} {teamA, teamB, ...}",
            value:
                "Creates an in-house match. Defaults to 2 teams of 5. Can specifiy number of teams, players, and provide a list of team names.",
        });
        addFields({
            name: "!in help",
            value: "Lists all of the commands available",
        });
        addFields({
            name: "!in version",
            value: "Shows the current release",
        });
        addFields({
            name: "!in author",
            value: "Provides author and metadata for the bot",
        });
        setFooter(
            "In-house-inator created by Riley Abrahamson",
            "https://avatars3.githubusercontent.com/u/32375220?s=460&u=a375968682555bb66226556bf7ee33d6d35b7961&v=4"
        );

        msg.channel.send(helpEmbed);
    },
};
