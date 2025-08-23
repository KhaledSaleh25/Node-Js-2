// Express Server Entry Point
const express = require('express');
const { loadTasks, loadUsers, saveTasks } = require('./bouns');

const app = express();
const PORT = 6060;

// Local Database
const tasks = [];
const users = [];

loadTasks(tasks, "data/tasks.json");
loadUsers(users, "data/users.json");

// Middleware
app.use(express.json());

// Routes
app.get('/api/tasks', (req, res) => {
    res.json(tasks);

    // should get all tasks from tasks array
});

app.get('/api/tasks/search', (req, res) => {
    const { keyword } = req.query;
    if (!keyword) {
        return res.status(400).json({ error: 'Keyword is required' });
    }

    const results = tasks.filter(task =>
        task.title.includes(keyword) || task.description.includes(keyword)
    );

    res.json(results);
});

app.post('/api/tasks', (req, res) => {
    const { title, description, priority } = req.body;

    if (!title || !description || !priority) {
        return res.status(400).json({ error: 'Title, description, and priority are required' });
    }

    const newTask = { id: tasks.length + 1, title, description, priority };
    tasks.push(newTask);

    // KEEP THIS CODE AFTER ADDING TASK TO TASKS ARRAY
    saveTasks(tasks, "data/tasks.json");
    res.status(201).json(newTask);

});

app.get("/profile", (req, res)  => {
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
    }

    const user = users.find(u => u.id === parseInt(userId));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
});

app.post("/register", (req, res)  => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Username, email, and password are required' });
    }

    const newUser = { id: users.length + 1, username, email, password };
    users.push(newUser);

    // KEEP THIS CODE AFTER ADDING USER TO USERS ARRAY
    saveTasks(users, "data/users.json");
    res.status(201).json(newUser);
});

app.post("/login", (req, res)  => {
    const { usernameOrEmail, password } = req.body;

    if (!usernameOrEmail || !password) {
        return res.status(400).json({ error: 'Username or email and password are required' });
    }

    const user = users.find(u => (u.username === usernameOrEmail || u.email === usernameOrEmail) && u.password === password);
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', user });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});
    