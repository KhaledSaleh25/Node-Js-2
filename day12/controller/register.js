const {UsersData} = require('../models/users');
const {tokenData} = require('../models/token')
const bcrypt = require('bcrypt');


const register = async(req,res) => {
    let {firstName, lastName, username, email, password, role} = req.body;
    if (!firstName || !lastName ||!email || !password || !username) {
        return res.status(400).json({message : "All inputs are required"})
    }
    if(!role){
        role = "user"
    }
    const Checkfound = await UsersData.findOne({email : email})
    if(Checkfound){
        return res.json({message : "this user already exist"})
    }
    const hashpass = await bcrypt.hash(password,10)

    const addUser = new UsersData({
        firstName,
        lastName,
        username,
        email,
        password:hashpass,
        role
    })
    await addUser.save()
    //  await addUser.save()
    //  res.status(201).json({message: "User Added Successfully"})
    const addToken = new tokenData({
        username : addUser.username,
        email : addUser.email,
        role : addUser.role
    })
    
    await addToken.save();
    return res.status(201).json({message: "User Added Successfully"})
  


}




module.exports ={register}