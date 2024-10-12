import {
  ApplicationCommandType,
  Client,
  CommandInteraction,
  EmbedBuilder,
} from 'discord.js'
import { Command } from 'src/Command'
import champions from '../../data/champions.json'
import { embedColor } from '../../data/embedVariables'
import veigarQuotes from '../../data/veigarQuotes.json'

export const leagueOfLegends: Command = {
  name: 'league-of-legends',
  description: 'Gives an EVIL League of Legends champion pick',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const randomChampionID = Math.floor(Math.random() * champions.length)

    const evilLeagueEmbed = new EmbedBuilder()
      .setColor(embedColor)
      .setThumbnail(
        'https://ddragon.leagueoflegends.com/cdn/14.20.1/img/champion/Veigar.png',
      )
      .setImage(
        `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
          champions[randomChampionID].image.full.split('.')[0]
        }_0.jpg`,
      )
      .setTitle(veigarQuotes[Math.floor(Math.random() * veigarQuotes.length)])
      .setDescription("_Veigar's evil pick is..._ \n ")
      .addFields(
        {
          name: ' ',
          value: ' ',
        },
        {
          name: ' ',
          value: ' ',
        },
        {
          name: ' ',
          value: ' ',
        },
        {
          name: champions[randomChampionID].name,
          value: `> ${champions[randomChampionID].title}`,
        },
      )

    await interaction
      .followUp({ embeds: [evilLeagueEmbed] })
      .then()
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
