import { GuildMember } from 'discord.js'

/**
 * Durstenfeld Shuffle
 * Returns an array shuffled
 *
 * @param array {Array} Array to randomize
 */
function shuffleMembers(array: (GuildMember | undefined)[]) {
  if (array.length <= 1) {
    return array
  }

  const tempArray = [...array]

  for (let i = tempArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = tempArray[i]
    tempArray[i] = tempArray[j]
    tempArray[j] = temp
  }

  return tempArray
}

export { shuffleMembers }
