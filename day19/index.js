const express = require('express');
const session = require('express-session');
const {connectDB} = require('./config/connDB');
const mongoose = require('mongoose');
require('dotenv').config();
const authRouter = require('./router/AuthRouter');
const StudentRouter = require('./router/StudentRouter');
const {checkAuth} = require('./middleware/checkAuth');


const app = express();
app.use(express.json())


app.use(session({
    secret : process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized : false,
    cookie : {
        maxAge : 1000 * 60,
        httpOnly : true,
        secure : false
    }
}))



app.use('/auth', authRouter)
app.use('/',checkAuth,StudentRouter)







connectDB()



mongoose.connection.once('connected' ,()=>{
    console.log("MongoDB connected..............");
    app.listen(process.env.PORT,()=>console.log('Server Runing...........'))
})

mongoose.connection.on('error', (err)=>{
    console.log(err);
})

module.exports = {app}