const http = require("http");
const routes = require("./Routes/route");

const server = http.createServer(routes);

server.listen(3000, () => {
    console.log("Listening on port no 3000 on localhost");
});  