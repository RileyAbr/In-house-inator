import {
  APIEmbed,
  ApplicationCommandOptionType,
  ApplicationCommandType,
  Client,
  CommandInteraction,
  EmbedBuilder,
  GuildMember,
  JSONEncodable,
} from 'discord.js'
import { Command } from '../Command'
import {
  embedColor,
  embedThumbnail,
  secondaryEmbedColor,
} from '../data/embedVariables'
import { shuffleMembers } from '../utils'

export const split: Command = {
  name: 'split',
  description:
    'Splits the users in voice channel into even teams. Skips deafened users.',
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'teams',
      description: 'The number of teams. Defaults to 2.',
      type: ApplicationCommandOptionType.Number,
      minValue: 2,
      maxValue: 20,
    },
  ],
  run: async (client: Client, interaction: CommandInteraction) => {
    const invokingMember = interaction.member as GuildMember

    if (!invokingMember.voice.channel) {
      await interaction
        .followUp({ content: '🚨 **ERROR:** You are not in a voice channel!' })
        .then()
        .catch(error => console.error(`ERROR: ${error}`))

      return
    }

    const voiceChannel = invokingMember.voice.channel

    const teamsInput = interaction.options.get('teams')?.value as
      | number
      | undefined

    const maxTeams = teamsInput ? teamsInput : 2
    let additionalMessageContent = null

    const membersInVoice = voiceChannel.members
      .filter(member => !member.user.bot && !member.voice.deaf)
      .map(member => member)
    const deafenedInVoice = voiceChannel.members
      .filter(member => !member.user.bot && member.voice.deaf)
      .map(member => member)

    if (membersInVoice.length % maxTeams !== 0) {
      additionalMessageContent =
        '> ⚠ **WARNING:** Not enough users to make balanced teams!'
    }

    const embeds: (APIEmbed | JSONEncodable<APIEmbed>)[] = []

    const randomizeMembersInVoice = shuffleMembers(membersInVoice)
    const splitIndex = Math.ceil(membersInVoice.length / maxTeams)

    for (let i = 0; i < maxTeams; i++) {
      const teamEmbed = new EmbedBuilder()
        .setColor(i % 2 === 0 ? embedColor : secondaryEmbedColor)
        .setTitle(`Team ${i + 1}`)
        .setThumbnail(embedThumbnail)

      const splitTeam = randomizeMembersInVoice.splice(-splitIndex)

      for (let j = 0; j < splitTeam.length; j++) {
        if (splitTeam.length > 0) {
          teamEmbed.addFields({
            name: `Player ${j + 1}`,
            value: splitTeam[j]?.nickname || splitTeam[j]?.user.username || '',
          })
        }
      }

      embeds.push(teamEmbed)
    }

    if (
      !deafenedInVoice.every(member => member === undefined) &&
      deafenedInVoice.length > 0
    ) {
      const deafenedEmbed = new EmbedBuilder()
        .setColor(secondaryEmbedColor)
        .setTitle(`Deafened Players`)
        .setThumbnail(embedThumbnail)

      deafenedInVoice.forEach(member => {
        deafenedEmbed.addFields({
          name: '\u200B',
          value: member?.nickname || member?.user.username || '',
        })
      })

      embeds.push(deafenedEmbed)
    }

    await interaction
      .followUp({
        content: additionalMessageContent ? additionalMessageContent : '',
        embeds: embeds,
      })
      .then()
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
