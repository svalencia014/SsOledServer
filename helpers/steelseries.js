const gamesense = require('gamesense-client');

global client;

async function initGamesenseClient() {
  /**
   * @type {gamesense.ServerEndpoint}
  */
  //todo: find and pass server endpoint
  var endpoint = new gamesense.ServerEndpoint();

  /**
   * @type {gamesense.Game}
   */
  var game = new gamesense.Game("SsOledServer", "Steelseries OLED Server", gamesense.GameColor.SILVER);

  /**
   * @type { gamesense.GameClient}
   */
  var client = new gamesense.GameClient(game, endpoint);

}
