const mongoose=require('mongoose')
const path=require('path')
require('dotenv').config({ path: path.join(__dirname, './.env') })


const connectdb=async()=>{
try{
    const dburl = process.env.Database_URL
    if(!dburl){
        throw new Error("Database URL is not defined")
    }
    await mongoose.connect(dburl)
    console.log("Database connected successfully")
}catch(error){
    console.log(error)
}
}

//module.exports={connectdb}
