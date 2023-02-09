# In-house-inator

![Ray gun next to text displaying "In-house-inator"](https://raw.githubusercontent.com/RileyAbr/In-house-inator/main/assets/In-house-inator%20social.jpg)

The `In-house-inator` is a Discord bot designed to help faciliate in-house matches for gaming communities. The bot can build teams on the spot using members in voice chat to streamline the lobby-making process. With a robust set of commands available, the `In-house-inator` is ready for your next LAN party.

📚 Read the commands wiki [https://in-house-inator.netlify.app/](https://in-house-inator.netlify.app/)

🎧 Add to your Discord! [Click Here!](https://discord.com/oauth2/authorize?client_id=717139360272613526&permissions=0&scope=bot)

---

## In-house-inator Bot

The `bot` folder contains all of the code used to run the Discord bot. The bot is built in **Node** using the [Discord.js library](https://discord.js.org/#/).

### Features

-   Builds in-house teams directly in Discord, no external service needed!
-   Can compose teams of scaling sizes with easy-to-input parameters
-   Discord embeds create clean message blocks to link to or pin for later
-   A cute lil' ray gun logo 🔫

### Commands

All commands are slash commands! This means they are invoked with `/`

-   `/team {teams} {players}`
    -   Create a team from users in voice channel. Skips deafened users.
-   `/split {teams}`
    -   Splits the users in voice channel into even teams. Skips deafened users.
-   `/help`
    -   Lists all of the commands available to the in-house-inator It also provides a link to the wiki site for the In-house-inator.
-   `/author`
    -   Provides author and metadata creation of the bot. Includes links to the author's website and social links--including Twitter and GitHub.
-   `/version`
    -   Shows the bot's latest release.

---

## In-house-inator Site

The `site` folder contains the project files for the documentation website for the bot. The wiki site is built as a **React** SPA with [React Router](https://reactrouter.com/). For styling, it uses [Chakra UI](https://github.com/chakra-ui/chakra-ui) as a base component library with a custom theme, plenty of custom styles, and [styled-components](https://styled-components.com/) to fill in gaps as needed.

### Features

-   Dynamically loads in command pages from Markdown files via a custom CMS-like architecture
    -   Thanks, [https://github.com/rexxars/react-markdown](https://github.com/rexxars/react-markdown)!
-   Built with modern React Hooks and ES6 Javascript
-   Full suite of tests using [Testing Library](https://testing-library.com/) and [Jest](https://jestjs.io/)
-   Supports accessibility features and [A11y](https://www.a11yproject.com/) principles
-   Fully responsive design for all devices
-   Some animations here and there to spruce up the site 👋
-   A slick, mad scientist color scheme to charm any _-in-ator_ fanatic 🔬

---

## Challenges & Hurdles 🏃‍♂️🏃‍♀️

1. The `In-house-inator` bot has to process a LOT of error states for the team seeding process. By allowing the bot to accept user input in the format that I did (simply providing inputs after the base command) it lead to a lot of edge cases to cover. I believe this makes it a more-robust project though as well as more user friendly!
2. After the `v1.0.0` release of the Discord bot, I decided to build the companion wiki site to supplement the `!in help` command. During this process, I rolled the two repositories into a single mono-repo. This proved to cause some headaches during the deploy process for both Netlify and Heroku. Netlify can be fixed simply enough via a native `netlify.toml` config file to specify a new source folder. For Heroku, I needed a more comprehensive solution. I went with a Git subtree for the `in-house-inator-bot` folder. For future reference, the command to push a subtree to heroku is:
    - `git subtree push --prefix {project_name} heroku {heroku_branch}`
    - NOTE: with the `v3.0.0` release the bot is no longer hosted on heroku.
3. Chakra UI is a FANTASTIC component and UI library and one I will definitely be recommending in the future. An oversight on my end is that Chakra UI components do not feature much support out-of-the-box 📦 for animations. In order to make effects like my hand-waving invite button on the home page work, I had to spin up some styled-components in place and integrate them with the Chakra UI theme ecosystem. Overall, I think it worked great! Something to keep in mind for future projects though are options like [React Transition Group](https://reactcommunity.org/react-transition-group/) or [react-spring](https://www.react-spring.io/) would be more comprehensive solutions.

---

## About the Author

Feel free to message me with questions, comments, or improvements for the bot!

**Riley Abrahamson**

Website: [https://www.rileyabrahamson.com/](https://www.rileyabrahamson.com/)

Twitter: [@RileyAbrahamson](https://twitter.com/RileyAbrahamson)

GitHub: [RileyAbr](https://github.com/RileyAbr)
