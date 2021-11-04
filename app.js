const express = require("express");
const tasksRoutes = require('./routes/tasks.routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
app.use(tasksRoutes);

module.exports = app;