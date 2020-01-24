const express = require("express");

const projectsRouter = require("./projects/project-router");
const resourcesRouter = require("./resources/resource-router");
const tasksRouter = require("./tasks/task-router");

const server = express();

server.use(helmet());
server.use(logger);
server.use(express.json());
server.use("/api/resources", resourcesRouter);
server.use(cors());

server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);

function logger(req, res, next) {
  console.log(req.method, req.url, Date.now());
  next();
}
module.exports = server;
