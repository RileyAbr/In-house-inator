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
 * Prints out an error message.
 *
 * @param msg {any} Discord.js msg object from bot command call
 * @param errorMessage {String} Error message to print
 */
function sendBotError(msg, errorMessage) {
    msg.channel.send(`> **ERROR:** ${errorMessage}`);
}

module.exports = { shuffleArray, chunkArray, sendBotError };
