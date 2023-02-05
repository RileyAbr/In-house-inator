import { Command } from './Command'
import { author } from './commands/author'
import { version } from './commands/version'

export const Commands: Command[] = [author, version]
