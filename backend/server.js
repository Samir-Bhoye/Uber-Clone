// ber-Clone/backend/server.js
const http = require("http");
const app = require("./app"); // Import app from app.js
const { initializeSocket } = require("./socket"); // Import initializeSocket from socket.js

const port = process.env.PORT || 4000;

const server = http.createServer(app);

initializeSocket(server); // Call initializeSocket with the server

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
