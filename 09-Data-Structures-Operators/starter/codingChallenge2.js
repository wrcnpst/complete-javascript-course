const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

// from codeium

const averageOdd =
  Object.values(game.odds).reduce((acc, value) => acc + value, 0) /
  Object.values(game.odds).length;
console.log(averageOdd);

// what does .reduce do? ans => reduce the array into a single value
// .reduce example: [1,2,3,4].reduce((acc, value) => acc + value, 0); // 10

const oddsValue = Object.values(game.odds);
let sumOdd = 0;
for (const odd of oddsValue) sumOdd += odd;
console.log(`avg odds: ${sumOdd / oddsValue.length}`);

// 3. Print the 3 odds teams to the console, along with the average odd (Print the average odd of each team)

const oddsEntries = Object.entries(game.odds);
for (const [team, odd] of oddsEntries) {
  teamName = game[team] ?? 'draw';
  console.log(`Odd of ${teamName}: ${odd}`);
}

/*
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const scorers = {};
for (player of game.scored) {
  scorers[player] = scorers[player] ? scorers[player] + 1 : 1;
}
console.log(scorers);
