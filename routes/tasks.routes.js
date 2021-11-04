const { Router } = require('express');
const { getTasks_controller, setTask_controller, getTask_controller, updateTask_controller, deleteTask_controller } = require('../controllers/tasks.controller');

const router = Router();

router.get('/tasks', getTasks_controller);
router.post('/tasks', setTask_controller);
router.get('/tasks/:id', getTask_controller);
router.put('/tasks/:id', updateTask_controller);
router.delete('/tasks/:id', deleteTask_controller);

module.exports = router;