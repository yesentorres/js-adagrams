import Adagrams from 'game/adagrams';

class Model {
  constructor(config) {
    if(!config) {
      throw new Error('Model requires a config parameter.');
    }

    this.config = config;

    // Initialize game state
    this.round = 0;
    this.currentPlayer = null;
    this.letterBank = null;

    /* Plays history structure is:
        {
          playerOne: [
            ["APPLE", "PAPA", "LEAP"],    // round 1
            ["WALK", "WALKER", "RAKE"],   // round 2
          ],

          playerTwo: [
            ["PALE", "PELT"],             // round 1
            ["REAL", "WALTER", "TALKER"], // round 2
          ],
        }
    */
    this.plays = this.config.players.reduce((plays, player) => {
      plays[player] = [];
      return plays;
    }, {});
  }

  // Start the next round of the game
  nextRound() {
    this.round++;
    this.currentPlayer = 0;

    // Draw the letter bank
    this.letterBank = Adagrams.drawLetters();
  }
}

export default Model;
