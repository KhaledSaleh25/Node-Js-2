const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});