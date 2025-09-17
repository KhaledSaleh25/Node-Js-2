const {app} = require('./index');
const {login} = require('./controllers/loginController')
const {register} = require('./controllers/regiterController')
const {logOut} =  require('./controllers/logoutController')

app.post('/login', login)
app.post('/register', register)
app.post('/logOut', logOut)