const { getAllTasks, setTask, getTaskById, updateTask, deleteTask } = require('../services/tasks.services');

const getTasks_controller = async (req, res) => {
  const tasks = await getAllTasks();
  res.json(tasks);
}

const getTask_controller = async (req, res) => {
  const { id } = req.params;
  const response = await getTaskById(id);
  res.json(response);
}

const deleteTask_controller = async (req, res) => {
  const { id } = req.params;
  const response = await deleteTask(id);
  res.json(response);
}

const setTask_controller = async (req, res) => {
  const objTask = req.query;
  const response = await setTask(objTask);
  res.json(response);
}

const updateTask_controller = async (req, res) => {
  const { id } = req.params;
  const taskObj = req.query;
  const response = await updateTask(id, taskObj);
  res.json(response);
}

module.exports = {
  getTasks_controller,
  setTask_controller,
  getTask_controller,
  updateTask_controller,
  deleteTask_controller,
}