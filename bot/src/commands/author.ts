import {
  ApplicationCommandType,
  Client,
  CommandInteraction,
  EmbedBuilder,
} from 'discord.js'
import { Command } from '../Command'
import { embedColor, embedThumbnail } from '../data/embedVariables'

export const author: Command = {
  name: 'author',
  description: 'Provides the author and social links for the bot',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const authorEmbed = new EmbedBuilder()
      .setColor(embedColor)
      .setTitle('In-house-inator Discord Bot')
      .setURL('https://in-house-inator.netlify.app/')
      .setDescription('Created by Riley Abrahamson.')
      .setThumbnail(embedThumbnail)
      .addFields({
        name: "Riley's Website",
        value: 'www.rileyabrahamson.com',
      })
      .addFields({
        name: 'Twitter',
        value: '@RileyAbrahamson',
      })
      .addFields({
        name: 'GitHub',
        value: 'RileyAbr',
      })
      .setFooter({
        text: "Icon 'Machine' by iconcheese from the Noun Project. Icon 'House' by Alex Muravev from the Noun Project.",
      })

    await interaction
      .followUp({ embeds: [authorEmbed] })
      .then()
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
