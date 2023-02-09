import { Command } from './Command'
import { author } from './commands/author'
import { help } from './commands/help'
import { split } from './commands/split'
import { team } from './commands/team'
import { version } from './commands/version'

export const Commands: Command[] = [team, split, author, version, help]
