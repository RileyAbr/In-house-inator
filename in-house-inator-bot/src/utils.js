/**
 * Durstenfeld Shuffle
 * Returns an array shuffled
 *
 * @param array {Array} Array to randomize
 */
function shuffleArray(array) {
    tempArray = [...array];

    for (let i = tempArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
    }

    return tempArray;
}

/**
 * Returns an array with arrays of the given size.
 *
 * @param array {Array} Array to split
 * @param chunk {Integer} Size of every group
 */
function chunkArray(array, chunk) {
    var results = [];

    while (array.length) {
        results.push(array.splice(0, chunk));
    }

    return results;
}

/**
 * Parse a string of
 *
 * @param teamNames {Array} Array to split on comma delimiter rather than spaces
 */
function formatTeamNames(teamNames) {
    const teamNameCommaArray = teamNames
        .slice(0, teamNames.length)
        .join("⇄")
        .split(","); //This unique unicode character was chosen to reduce the chances of someone actually using it in a name
    const formattedTeamNames = teamNameCommaArray.map((element) => {
        return element.replace(/⇄/g, " ").trim();
    });

    return formattedTeamNames;
}

/**
 * Prints out an error message.
 *
 * @param msg {any} Discord.js msg object from bot command call
 * @param errorMessage {String} Error message to print
 */
function sendBotError(msg, errorMessage) {
    msg.channel.send(`> **ERROR:** ${errorMessage}`);
}

/**
 * Prints out an error message.
 *
 * @param msg {any} Discord.js msg object from bot command call
 * @param errorMessage {String} Error message to print
 */
function sendBotReplyError(msg, errorMessage) {
    msg.reply(`**ERROR:** ${errorMessage}`);
}

module.exports = {
    shuffleArray,
    chunkArray,
    formatTeamNames,
    sendBotError,
    sendBotReplyError,
};
