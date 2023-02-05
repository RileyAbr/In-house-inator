import { Client } from 'discord.js'
import { Commands } from '../CommandList'

export default (client: Client): void => {
  client.on('ready', async () => {
    if (!client.user || !client.application) {
      return
    }

    await client.application.commands.set(Commands)

    let isHelp = true
    client.user.setActivity('Try /help!')

    setInterval(() => {
      if (isHelp) {
        client?.user?.setActivity('Try /team!')
        isHelp = false
      } else {
        client?.user?.setActivity('Try /help!')
        isHelp = true
      }
    }, 5000)

    console.info(`Logged in as ${client.user.tag}`)
  })
}
