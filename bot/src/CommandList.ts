import { Command } from './Command'
import { author } from './commands/author'
import { team } from './commands/team'
import { version } from './commands/version'

export const Commands: Command[] = [team, author, version]
