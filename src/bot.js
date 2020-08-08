const Discord = require("discord.js");

// Utilizes local bot key if not in production
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

// Command to activate the bot
const PREFIX = "!in";

// Create the bot and set up it's commands
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require("./commands/index");

Object.keys(botCommands).map((key) => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
});

// When bot connects to server
bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}`);
    bot.user.setActivity(`${PREFIX} help`);
});

// // Logs when the bot is invited to a new server
// bot.on("guildCreate", (guild) => {
//     console.info(`Added to a new server! ${guild.name}`);
// });

// Messager parser
bot.on("message", (msg) => {
    // Ignore bot messages
    if (msg.author.bot) return;

    const args = msg.content.split(/ +/);
    const firstWord = args.shift().toLowerCase();

    // Process command issued
    if (firstWord == PREFIX) {
        // Checks which command was specified
        const command = args.length > 0 ? args.shift().toLowerCase() : "fact";

        try {
            bot.commands.get(command).execute(msg, args);
        } catch (error) {
            msg.reply(`Need help? Try \`${PREFIX} help\`.`);
        }
    }
});

// Bot logs in to remote server
bot.login(process.env.BOT_TOKEN);
