const server = require("./api/server");

const port = 4000;

server.listen(port, () => {
  console.log(`server running on localhost:${port}`);
});
