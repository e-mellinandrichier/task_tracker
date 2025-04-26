const Task = require('../models/Task');

exports.getAllTasks = async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const { title, description, dueDate } = req.body;
  const task = await Task.create({ title, description, dueDate });
  res.json(task);
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, isDone, dueDate } = req.body;
  const task = await Task.findByPk(id);
  if (task) {
    await task.update({ title, description, isDone, dueDate });
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);
  if (task) {
    await task.destroy();
    res.json({ message: 'Task deleted' });
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
};
