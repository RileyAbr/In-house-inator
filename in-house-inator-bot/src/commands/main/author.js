const Discord = require("discord.js");

module.exports = {
    name: "author",
    description: "Provides author and metadata for the bot",
    execute(msg, args) {
        const authorEmbed = new Discord.MessageEmbed()
            .setTitle("In-house-inator Discord Bot")
            .setURL("https://in-house-inator.netlify.app/")
            .setDescription("Created by Riley Abrahamson.")
            .setThumbnail(
                "https://raw.githubusercontent.com/RileyAbr/In-house-inator/master/assets/in-house-inator.jpg"
            )
            .addFields({
                name: "Riley's Website",
                value: "www.rileyabrahamson.com",
            })
            .addFields({
                name: "Twitter",
                value: "@RileyAbrahamson",
            })
            .addFields({
                name: "GitHub",
                value: "RileyAbr",
            })
            .setFooter(
                "Icon 'Machine' by iconcheese from the Noun Project. Icon 'House' by Alex Muravev from the Noun Project."
            );

        msg.channel.send(authorEmbed);
    },
};
