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

export const team: Command = {
  name: 'team',
  description:
    'Create a team from users in voice channel. Skips deafened users.',
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'teams',
      description: 'The number of teams. Defaults to 2.',
      type: ApplicationCommandOptionType.Number,
      minValue: 1,
      maxValue: 25,
    },
    {
      name: 'players',
      description: 'The amount of players per team. Defaults to 5.',
      type: ApplicationCommandOptionType.Number,
      min_value: 1,
      maxValue: 25,
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
    const playersInput = interaction.options.get('players')?.value as
      | number
      | undefined

    const maxTeams = teamsInput ? teamsInput : 2
    const maxPlayers = playersInput ? playersInput : 5
    let additionalMessageContent = null

    const membersInVoice = voiceChannel.members
      .filter(member => !member.user.bot && !member.voice.deaf)
      .map(member => member)
    const deafenedInVoice = voiceChannel.members
      .filter(member => !member.user.bot && member.voice.deaf)
      .map(member => member)

    if (membersInVoice.length < maxTeams * maxPlayers) {
      additionalMessageContent =
        '> ⚠ **WARNING:** Not enough users to make balanced teams!'
    }

    const embeds: (APIEmbed | JSONEncodable<APIEmbed>)[] = []

    const randomizeMembersInVoice = shuffleMembers(membersInVoice)

    for (let i = 0; i < maxTeams; i++) {
      if (randomizeMembersInVoice.length > 0) {
        const teamEmbed = new EmbedBuilder()
          .setColor(i % 2 === 0 ? embedColor : secondaryEmbedColor)
          .setTitle(`Team ${i + 1}`)
          .setThumbnail(embedThumbnail)

        for (let j = 0; j < maxPlayers; j++) {
          if (randomizeMembersInVoice.length > 0) {
            const member = randomizeMembersInVoice.pop()
            teamEmbed.addFields({
              name: `Player ${j + 1}`,
              value: member?.nickname || member?.user.username || '',
            })
          }
        }

        embeds.push(teamEmbed)
      }
    }

    if (randomizeMembersInVoice.length > 0) {
      const remainingEmbed = new EmbedBuilder()
        .setColor(embedColor)
        .setTitle(`Remaining Players`)
        .setThumbnail(embedThumbnail)

      randomizeMembersInVoice.forEach((member, index) => {
        remainingEmbed.addFields({
          name: `Player ${index + 1}`,
          value: member?.nickname || member?.user.username || '',
        })
      })

      embeds.push(remainingEmbed)
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
