const express = require('express');
const sequelize = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/tasks', taskRoutes);

sequelize.sync()
  .then(() => {
    console.log('Database connected and models synchronized');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.error('Database connection error', err));
