 const express=require('express')
 const path=require('path')
 const { connectdb } = require('./config')
const app=express()
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))
app.use(express.static(path.join(__dirname, './public')))




connectdb()

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
     app.listen(process.env.port,()=>{
    console.log(`Server is running on port ${process.env.port}`)
})


})





















