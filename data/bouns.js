/**
 * Load users from JSON file
 *
 * @param {string} dbFile
 * 
 *     This is the path to the json file
 */
function loadUsers(users, dbFile) {
    if (require('fs').existsSync(dbFile)) {
const data = require('fs').readFileSync(dbFile, 'utf-8');
        const parsedUsers = JSON.parse(data);
        parsedUsers.forEach(user => users.push(user));
}
}


/**
 * Load tasks from JSON file
 *
 * @param {string} dbFile
 *     This is the path to the json file
 */
function loadTasks(tasks, dbFile) {
    if (require('fs').existsSync(dbFile)) {
        const data = require('fs').readFileSync(dbFile, 'utf-8');
        const parsedTasks = JSON.parse(data);
        parsedTasks.forEach(task => tasks.push(task));
    }

}

/**
 * Save tasks to JSON file
 *
 * @param {string} dbFile
 *     This is the path to the json file
 */
function saveTasks(tasks, dbFile) {
    require('fs').writeFileSync(dbFile, JSON.stringify(tasks, null, 2));
}

/**
 * Save users to JSON file
 *
 * @param {string} dbFile
 *     This is the path to the json file
 */
function saveUsers(users, dbFile) {
    require('fs').writeFileSync(dbFile, JSON.stringify(users, null, 2));
}

module.exports = {
    loadUsers,
    loadTasks,
    saveTasks,
    saveUsers
};
