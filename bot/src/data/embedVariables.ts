import { EmbedFooterOptions } from 'discord.js'

const logoPurple = '#6f2dbd'
const logoGreen = '#6bd425'

export const embedColor = logoPurple
export const secondaryEmbedColor = logoGreen

export const embedThumbnail =
  'https://raw.githubusercontent.com/RileyAbr/In-house-inator/main/in-house-inator_logo.png'

export const embedAttributionFooter: EmbedFooterOptions = {
  text: 'In-house-inator created by Riley Abrahamson',
  iconURL:
    'https://avatars3.githubusercontent.com/u/32375220?s=460&u=a375968682555bb66226556bf7ee33d6d35b7961&v=4',
}

export const version = require('../../package.json').version
export const repoUrl = 'https://github.com/RileyAbr/In-house-inator/'
export const releaseLink = `${repoUrl}releases/tag/v${version}`
