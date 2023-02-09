Command:

`!in team {# of teams} {# of players} {teamA, teamB, ...}`

or

`!in`

Creates teams from the members in the user's voice chat channel. Teams are seeded completely randomly from members who are available in the channel. To be considered available, the user must not be muted or deafened. The command can handle up to 25 teams and up to 25 players.

<br>

By default, the command will run to create two teams of five players.

<br>

# Optional Parameters

<br>

`{# of teams}`

This parameter specifies how many teams should be generated from available users. It accepts any whole number from 1-25.

<br>

`{# of players}`

This parameter specifies how many players should assigned to each team. It accepts any whole number from 1-25.

<br>

`{teamA, teamB, ...}`

This parameter accepts a list of custom names that will appear for each generated group. The names will map to the order that teams are generated, with the first word matching the first team created. This parameter accepts any names--including those with spaces--up to the number of teams that have been specified.
