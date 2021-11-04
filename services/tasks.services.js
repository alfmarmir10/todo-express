const { writeFile } = require('fs');
const fs = require('fs/promises');
const path = require('path');

const BD_PATH = path.resolve(__dirname, "..", 'bd.json');

const getAllTasks = async () => {
  try {
    const tasks = await fs.readFile(BD_PATH, 'utf-8');
    return JSON.parse(tasks);
  } catch (error) {
    console.error(error);
  }
};

const getTaskById = async (TaskId) => {
  try {
    const tasks = await getAllTasks();
    const task = tasks.find(item => item.Id === Number(TaskId));
    return task;
  } catch (error) {
    console.error(error);
  }
};

const deleteTask = async (TaskId) => {
  try {
    const tasks = await getAllTasks();
    const task = tasks.find(item => item.Id === Number(TaskId));
    const indexTask = tasks.findIndex((item) => item.Id === Number(TaskId));
    tasks.splice(indexTask, 1);
    await writeTasks(tasks);
    return "Task deleted";
  } catch (error) {
    console.error(error);
  }
};

const updateTask = async (id, taskObj) => {
  try {
    const tasks = await getAllTasks();
    const task = tasks.find(item => item.Id === Number(id));
    const indexTask = tasks.findIndex((item) => item.Id === Number(id));
    const newTask = {
      Id: task.Id,
      ...taskObj
    }
    tasks[indexTask] = newTask;
    await writeTasks(tasks);
    return ({
      tasks: taskObj,
      message: "Task updated"
    });
  } catch (error) {
    console.error(error);
  }
};

const setTask = async (taskObj) => {
  try {
    const tasks = await getAllTasks();
    console.log(tasks.length);
    const id = tasks.length + 1;
    const newObj = {
      Id: id,
      ...taskObj
    }
    tasks.push(newObj);
    await writeTasks(tasks);
    return ({
      task: newObj,
      message: "Task added"
    });
  } catch (error) {
    console.error(error);
  }
}

const writeTasks = async (tasks) => {
  try {
    await fs.writeFile(BD_PATH, JSON.stringify(tasks));
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAllTasks,
  setTask,
  getTaskById,
  updateTask,
  deleteTask,
}