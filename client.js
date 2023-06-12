const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data and console.log it for the player
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
// send string to the server
  conn.on("connect", () => {
    conn.write("Name: MT");
  });
  return conn;
};

module.exports = connect;