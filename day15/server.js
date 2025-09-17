const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/students');
const userRoutes = require('./routes/users');

const app = express();
app.use(bodyParser.json());


app.use('/auth', authRoutes);
app.use('/students', studentRoutes);
app.use('/users', userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
