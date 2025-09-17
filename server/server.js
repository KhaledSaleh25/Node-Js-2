// Express Server Entry Point
const express = require('express');
const app = express();
const PORT = 6060;

// Local Database
const tasks = [];
const users = [];

loadTasks(tasks, "data/tasks.json");
loadUsers(users, "data/users.json");
const loggedInUSer = loadLoggedInUser(users, "data/loggedInUser.json");

// Middleware
app.use(express.json());

// Routes
app.get('/api/tasks', (req, res) => {
    // should get all tasks from tasks array
});

app.get('/api/tasks/search', (req, res) => {
    // query string should contain keyword and we should search in tasks array using this keyword
    // If the keyword exists on title or description we should respond with this task
});

// YOU MUST BE LOGGED IN TO DO IT
app.post('/api/tasks', (req, res) => {
    // body should contain these info title, description
    // priority(high, low, medium) + the username who created the task
    const task = {
        title: "", // GET TITLE VALUE FROM request body,
        description: "", // GET DESCRIPTION VALUE FROM request body,
        priority: "", // GET PRIORTY VALUE FROM request body,
        username: "", // GET USERNAME FROM THE USER CURRENTLY LOGGED IN
    }

    // KEEP THIS CODE AFTER ADDING TASK TO TASKS ARRAY
    saveTasks(tasks, "data/tasks.json");
});

// YOU MUST BE LOGGED IN TO DO IT OR YOU ARE THE CREATOR OF THE TASK
app.delete('/api/tasks/', (req, res) => {
    // request should contain id of task to delete
    const id = req.query.id;

    // KEEP THIS CODE AFTER ADDING TASK TO TASKS ARRAY
    saveTasks(tasks, "data/tasks.json");
});

app.get("/profile", (req, res)  => {
    // we get query string from req and search user in users array
});

// YOU MUST BE LOGGED IN AND HAVE ADMIN ROLE TO DO IT
app.delete("/profile", (req, res)  => {
    // we get query string from req and search user in users array then delete this user
});

app.post("/register", (req, res)  => {
    // body should contain these info username, email, password, role (ADMIN or USER)

    // KEEP THIS CODE AFTER ADDING USER TO USERS ARRAY
    saveUsers(users, "data/users.json");
});

app.post("/login", (req, res)  => {
    // body should contain these info username or email, password
    // After logging user data will be saved into a file named "data/loggedInUser.json"
    // And we will use this file to check authentication for users in specifiec routes

    const user = users.find(user => user.username === req.body.username || user.email === req.body.username);
    if (!user) {
        return res.status(401).json({ message: "User Not Found" });
    }
    if (user.password !== req.body.password) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    saveLoggedInUser(user);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
