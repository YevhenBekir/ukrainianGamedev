const express = require("express");
const jsonServer = require("json-server");
const path = require("path");

const server = express();

const apiServer = jsonServer.create();
const apiRouter = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

apiServer.use(middlewares);
apiServer.use(apiRouter);
apiServer.listen(process.env.PORT || 3001);

server.use(express.static(path.join(__dirname, "build")));

server.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

server.listen(process.env.PORT || 3000);
