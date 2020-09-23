const Discord = require("discord.js");

module.exports = {
    name: "version",
    description: "Shows the current release",
    execute(msg, args) {
        const versionEmbed = new Discord.MessageEmbed()
            .setTitle("In-house-inator Discord Bot")
            .setURL("https://in-house-inator.netlify.app/")
            .setThumbnail(
                "https://raw.githubusercontent.com/RileyAbr/In-house-inator/main/in-house-inator_logo.png"
            )
            .addFields({
                name: "Current Release",
                value: "v2.0.0",
            })
            .setFooter(
                "In-house-inator created by Riley Abrahamson",
                "https://avatars3.githubusercontent.com/u/32375220?s=460&u=a375968682555bb66226556bf7ee33d6d35b7961&v=4"
            );

        msg.channel.send(versionEmbed);
    },
};
