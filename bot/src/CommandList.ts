import { Command } from './Command'
import { author } from './commands/author'
import { evil } from './commands/evil/evil'
import { help } from './commands/help'
import { split } from './commands/split'
import { team } from './commands/team'
import { version } from './commands/version'

export const Commands: Command[] = [team, split, author, evil, version, help]
