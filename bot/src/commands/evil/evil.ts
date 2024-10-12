import {
  ApplicationCommandOptionType,
  ApplicationCommandType,
  Client,
  CommandInteraction,
  EmbedBuilder,
} from 'discord.js'
import { Command } from 'src/Command'
import {
  embedAttributionFooter,
  embedColor,
  embedThumbnail,
} from '../../data/embedVariables'
import { leagueOfLegends } from './leagueOfLegends'

export const evil: Command = {
  name: 'evil',
  description: 'Prompt an EVIL draft pick for a selected game',
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: leagueOfLegends.name,
      description: leagueOfLegends.description,
      type: ApplicationCommandOptionType.Subcommand,
    },
  ],
  run: async (client: Client, interaction: CommandInteraction) => {
    const subCommand = interaction.options.data[0].name

    switch (subCommand) {
      case leagueOfLegends.name:
        leagueOfLegends.run(client, interaction)
        break
      default:
        const evilEmbed = new EmbedBuilder()
          .setColor(embedColor)
          .setTitle('"EVIL" Draft')
          .setThumbnail(embedThumbnail)
          .setFooter(embedAttributionFooter)

        await interaction
          .followUp({ embeds: [evilEmbed] })
          .then()
          .catch(error => console.error(`ERROR: ${error}`))
    }
  },
}
