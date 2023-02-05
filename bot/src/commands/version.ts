import {
  ApplicationCommandType,
  Client,
  CommandInteraction,
  EmbedBuilder,
} from 'discord.js'
import { Command } from '../Command'
import {
  embedAttributionFooter,
  embedColor,
  embedThumbnail,
  releaseLink,
  version as botVersion,
} from '../data/embedVariables'

export const version: Command = {
  name: 'version',
  description: 'Shows the current release',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const versionEmbed = new EmbedBuilder()
      .setColor(embedColor)
      .setTitle(`In-house-inator Discord Bot`)
      .setURL(releaseLink)
      .setThumbnail(embedThumbnail)
      .addFields({
        name: 'Current Release',
        value: botVersion,
      })
      .setFooter(embedAttributionFooter)

    await interaction
      .followUp({ embeds: [versionEmbed] })
      .then()
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
