const express = require("express");
const tasksRoutes = require('./routes/tasks.routes');
import cors from 'cors';


const app = express();
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
app.use(tasksRoutes);

module.exports = app;