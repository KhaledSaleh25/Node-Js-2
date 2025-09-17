const express = require('express');
const app = express();

app.use(express.json());


const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const groupRoutes = require('./routes/groups');
const reelRoutes = require('./routes/reels');
const userRoutes = require('./routes/users');


app.use('/auth', authRoutes);
app.use('/posts', postRoutes);
app.use('/groups', groupRoutes);
app.use('/reels', reelRoutes);
app.use('/users', userRoutes);


app.get('/', (req, res) => {
  res.send('API Gateway Running 🚀');
});

app.listen(5000, () => {
  console.log('Gateway running on http://127.0.0.1:5000');
});
