const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
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
    conn.write("Name: SNK");
  });
  return conn;
};

module.exports = connect;