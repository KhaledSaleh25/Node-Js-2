/**
 * Load tasks from JSON file named "data/tasks.json"
 *
 * @param {string} dbFile
 *     This is the path to the json file
 */

const fs = require('fs');

function loadTasks(tasks, dbFile) {
    try {

        if (!fs.existsSync(dbFile)) return []

        const Data = fs.readFileSync(dbFile, 'utf8').trim();
        if (!Data) return []
        const Jsontasksfile = JSON.parse(Data)
        tasks.push(...Jsontasksfile)
    }
    catch (err) {
        console.error(err)
    }
}

/**
 * Save tasks to JSON file named "data/tasks.json"
 *
 * @param {string} dbFile
 *     This is the path to the json file
 */


function saveTasks(tasks, dbFile) {
    try {
        const Data = JSON.stringify(tasks);
        fs.writeFileSync(dbFile, Data,'utf8')
    }
    catch (err) {
        console.log(err)
    }
}

/**
 * Load users from JSON file named "data/users.json"
 *
 * @param {string} dbFile
 *     This is the path to the json file
 */
function loadUsers(users, dbFile) {
    try {
        if (!fs.existsSync(dbFile)) return []
        const Data = fs.readFileSync(dbFile, 'utf8').trim()
        if (!Data) return []
        const Jsonusersfile = JSON.parse(Data)
        users.push(...Jsonusersfile)
    }
    catch (err){
        console.error(err)
    }
}

/**
 * Save users to JSON file named "data/users.json"
 *
 * @param {string} dbFile
 *     This is the path to the json file
 */
function saveUsers(users, dbFile) {
    try {
        const Data = JSON.stringify(users)
        fs.writeFileSync(dbFile, Data,'utf8')
    }
    catch (err) {
        console.log(err)
    }
}

/**
 * This function will save logged in user to a file named "data/loggedInUser.json"
 *
 * @param {{username: string, email: string, role: 'ADMIN' | 'USER'}} user
 *     This is the user object that will be saved to the file
 */
function saveLoggedInUser(user, dbFile) {
    try {
        const Data = JSON.stringify(user);
        fs.writeFileSync(dbFile, Data, 'utf8');
    } catch (err) {
        console.log(err);
    }
}
/**
 * This function will load logged in user from a file named "data/loggedInUser.json"
 * if file does not exist or file is empty it will return null
 *
 * @returns {{username: string, email: string, role: 'ADMIN' | 'USER'} | null} user
 *     This is the user object that will be loaded from the file or null
 *     if file does not exist or file is empty
 */
function loadLoggedInUser(dbFile) {
    try {
        if (!fs.existsSync(dbFile)) return null;
        const Data = fs.readFileSync(dbFile, 'utf8').trim();
        if (!Data) return null;
        return JSON.parse(Data)
    } catch (err) {
        console.log(err);
        return null;
    }
}



module.exports = {
    loadUsers,
    loadTasks,
    saveTasks,
    saveUsers,
    saveLoggedInUser,
    loadLoggedInUser
};
