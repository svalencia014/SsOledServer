const gamesense = require('gamesense-client');

var client;

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
  client = new gamesense.GameClient(game, endpoint);
  client.registerGame()
    .then(bindProgressHandler)
    .then(startProgressUpdates)
    .catch(logError);
}

/**
 * Binds progress handler
 * @returns {Promise}
*/

function bindProgressHandler() {
  var blue = new gamesense.Color(0,0,255);
  var red = new gamesense.Color(255,0,0);
  var gradient = new gamesense.GradientColor(red, blue);

  /**
   * Setup of event handler for keyboard device
   * @type {gamesense.GameEventHandler} 
  */

  //* Continue from here
  //* https://github.com/DaanWet/gamesense-client/blob/master/examples/progressBar.js#L65
}
