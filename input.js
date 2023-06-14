const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MESSAGE_MAPPINGS } = require("./constants");

// setup interface to handle user input from stdin
let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  // WASD movement
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  // checks if the pressed key exists as a property in the MESSAGE_MAPPINGS object
  if (Object.prototype.hasOwnProperty.call(MESSAGE_MAPPINGS, key)) {
    // retrieves the corresponding message and sends it to the server
    const message = MESSAGE_MAPPINGS[key];
    connection.write(`Say: ${message}`);
  }
};

module.exports = setupInput;