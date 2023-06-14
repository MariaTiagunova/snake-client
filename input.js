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
  if (key === 'w') {
  // console.log("Move: up");
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === 'g') {
    connection.write("Say: Hello there!");
  }
  if (key === 'f') {
    connection.write("Say: Haha!");
  }
  if (key === 't') {
    connection.write("Say: GG");
  }
  if (key === 'h') {
    connection.write("Say: hisssssss");
  }
};

module.exports = setupInput;