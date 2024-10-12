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
} from '../data/embedVariables'
import { author } from './author'
import { evil } from './evil/evil'
import { split } from './split'
import { team } from './team'
import { version } from './version'
const helpName = 'help'
const helpDescription =
  'Lists all of the commands available to the in-house-inator'

export const help: Command = {
  name: helpName,
  description: helpDescription,
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const helpEmbed = new EmbedBuilder()
      .setColor(embedColor)
      .setTitle('`in-house-inator` commands')
      .setURL('https://in-house-inator.netlify.app/')
      .setThumbnail(embedThumbnail)
      .setDescription(
        `All command are invoked with \`/\`. Any command with \`{}\` indicates extra options for the command. 
                
                Full documentation available at: https://in-house-inator.netlify.app/`,
      )
      .addFields(
        {
          name: '/' + team.name + ' {teams} {players}',
          value: team.description,
        },
        {
          name: '/' + split.name + ' {teams}',
          value: split.description,
        },
        {
          name: '/' + evil.name + ' {game}',
          value: evil.description,
        },
        {
          name: '/' + author.name,
          value: author.description,
        },
        {
          name: '/' + version.name,
          value: version.description,
        },
        {
          name: '/' + helpName,
          value: helpDescription,
        },
      )
      .setFooter(embedAttributionFooter)

    await interaction
      .followUp({ embeds: [helpEmbed] })
      .then()
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
