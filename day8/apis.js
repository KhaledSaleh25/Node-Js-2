const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const e = require('express');

const rl = readline.createInterface({ input, output });

const BASE_URL = "http://127.0.0.1:3000";




function showMenu() {
    console.log("\nMenu:");
    console.log("1. Register");
    console.log("2. Login");
    console.log("3. View Users");
    console.log("4. Exit");
}
rl.question("Choose an option (1-4): ", (answer) => {
    const trimmed = answer.trim();


if(trimmed === "1") {
    rl.question("Enter username: ", (username) => {
        rl.question("Enter password: ", (password) => {
            rl.question("Enter email: ", (email) => {
                fetch(`${BASE_URL}/register`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ username, password, email })
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data.message);
                });
                showMenu();
            });
        });
    });
}else if(trimmed === "2") {
    rl.question("Enter username: ", (username) => {
        rl.question("Enter password: ", (password) => {
            fetch(`${BASE_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data.message);
            });
            showMenu();
        });
    });

    }
    else if(trimmed === "3") {
        fetch(`${BASE_URL}/users`)
            .then(response => response.json())
            .then(users => {
                console.log("Registered Users:");
                users.forEach(user => {
                    console.log(`Username: ${user.username}, Email: ${user.email}`);
                });
            });
        showMenu();
    } else if (trimmed === "4") {

            fetch(`${BASE_URL}/exit`, { method: "POST" })
                .then(() => rl.close())
                .catch(() => rl.close());

        } else {
            console.log("Invalid choice, try again.");
            showMenu();
        }
    });
showMenu();
   