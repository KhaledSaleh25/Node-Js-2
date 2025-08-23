const express=require('express')
const app=express()
app.use(express.json())


const users = []

app.post("/register",(req,res)=>{
    const {username,password,email}= req.body;
    if(!username || !password || !email){
        return res.status(400).json({message:"All fields are required"})
    }
    if(users.find(user=>user.username===username)){
        return res.status(400).json({message:"User already exists"})
    }
    users.push({username,password,email})
    return res.status(201).json({message:"User registered successfully"})
})

app.post("/login",(req,res)=>{
    const {username,password}= req.body;
    if(!username || !password){
        return res.status(400).json({message:"All fields are required"})
    }
    const user= users.find(user=>user.username===username && user.password===password)
    if(!user){
        return res.status(401).json({message:"Invalid credentials"})
    }
    return res.status(200).json({message:"Login successful"})
})
app.get("/users",(req,res)=>{
    return res.status(200).json(users)
})

app.post("/exit",(req,res)=>{

    res.json({message:"server exited successfully"})  
    process.exit(0);
})



app.listen(3000,()=>{

    console.log('Server is running on port 3000')
})


