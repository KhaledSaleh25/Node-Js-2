const express = require('express');
const app = express();
const PORT = 6060;


const tasks = [];
const users = [];
const loggedInUSer = [];

loadTasks(tasks, "data/tasks.json");
loadUsers(users, "data/users.json");
loadLoggedInUser(users, "data/loggedInUser.json");


app.use(express.json());


app.get('/api/tasks', (req, res) => {
    
});

app.get('/api/tasks/search', (req, res) => {
   
});


app.post('/api/tasks', (req, res) => {
   
    const task = {
        title: req.body.title, 
        description: req.body.description, 
        priority: req.body.priority, 
        username: loggedInUser.username,
    }

    
    saveTasks(tasks, "data/tasks.json");
});


app.delete('/api/tasks/', (req, res) => {
    
    const id = req.query.id;

    
    saveTasks(tasks, "data/tasks.json");
});

app.get("/profile", (req, res)  => {
    
});


app.delete("/profile", (req, res)  => {// we 
   
});

app.post("/register", (req, res)  => {
   
    saveUsers(users, "data/users.json");
});

app.post("/login", (req, res)  => {
    

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
