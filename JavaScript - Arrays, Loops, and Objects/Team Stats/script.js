const team = {
  _players: [{
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11
  }],
  _games: [{
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
  }],

  get players() {return this._players},
  get games() {return this._games},

  addPlayer(firstName, lastName, age) {
    this._players.push({firstName, lastName, age});
  },

  addGame(opponent, teamPoints, opponentPoints) {
    this._games.push({opponent, teamPoints, opponentPoints});
  }
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team.players);

team.addGame("Majestic", 17, 58);
team.addGame("Oliphants", 72, 28);
team.addGame("Stars", 64, 60);

console.log(team.games);
