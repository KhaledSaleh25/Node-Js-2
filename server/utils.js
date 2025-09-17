/**
 * Load tasks from JSON file named "data/tasks.json"
 *
 * @param {string} dbFile
 *     This is the path to the json file
 */
function loadTasks(tasks) {
}

/**
 * Save tasks to JSON file named "data/tasks.json"
 *
 * @param {string} dbFile
 *     This is the path to the json file
 */
function saveTasks(tasks) {
}

/**
 * Load users from JSON file named "data/users.json"
 *
 * @param {string} dbFile
 *     This is the path to the json file
 */
function loadUsers(users) {
}

/**
 * Save users to JSON file named "data/users.json"
 *
 * @param {string} dbFile
 *     This is the path to the json file
 */
function saveUsers(users) {
}

/**
 * This function will save logged in user to a file named "data/loggedInUser.json"
 *
 * @param {{username: string, email: string, role: 'ADMIN' | 'USER'}} user
 *     This is the user object that will be saved to the file
 */
function saveLoggedInUser(user) {
}

/**
 * This function will load logged in user from a file named "data/loggedInUser.json"
 * if file does not exist or file is empty it will return null
 *
 * @returns {{username: string, email: string, role: 'ADMIN' | 'USER'} | null} user
 *     This is the user object that will be loaded from the file or null
 *     if file does not exist or file is empty
 */
function loadLoggedInUser() {
}
