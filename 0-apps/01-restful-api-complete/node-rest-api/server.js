// processes
// require the secret keys and info
/*
require("dotenv/config");
console.log(process.env.DB_PASS);
*/
/////////////////////////////////

const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3001;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Listening to port ${port} ... http://localhost:${port}/`);
});
