const Discord = require("discord.js");

module.exports = {
    name: "help",
    description: "Shows all of the commands available",
    execute(msg, args) {
        const helpEmbed = new Discord.MessageEmbed()
            // .setColor("")
            .setTitle("!in commands")
            // .setThumbnail()
            .addFields({
                name: "!in help",
                value: "Lists all of the commands available",
            })
            .setFooter(
                "In-house-inator created by Riley Abrahamson",
                "https://avatars3.githubusercontent.com/u/32375220?s=460&u=a375968682555bb66226556bf7ee33d6d35b7961&v=4"
            );

        msg.channel.send(helpEmbed);
    },
};
