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

  var functionKeysEventHandler = new gamesense.GameEventHandler(gamesense.DeviceType.RGB_PER_KEY_ZONES, gamesense.RgbPerKeyZone.FUNCTION_KEYS, gradient);
  functionKeysEventHandler.mode = gamesense.VisualizationMode.PERCENT;

  return client.bindEvent(progressEvent, [functionKeysEventHandler]);
}

function startProgressUpdates() {
  setInterval(updateProgress, 200);
}

function updateProgress() {
  progressEvent.value = progressEvent.value + 5;
  if (progressEvent.value > progressEvent.maxValue) {
    progressEvent.value = progressEvent.minValue;
  }

  client.sendGameEventUpdate(progressEvent).catch(logError);
}

/**
 * Logs error to console.
 */

function logError(error) {
  console.error(error);
}