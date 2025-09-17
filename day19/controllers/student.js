
const {UsersData} = require('../../models/users')
const bcrypt = require('bcrypt');

const addUser = async (req,res) => {
    if(req.user.role === "user"){
        return res.status(403).json({message: "UnAuthorized11"});
    }
    const {firstName, lastName, username, email, password, role} = req.body;
    if (!firstName || !lastName || !username || !email || !password || !role){
         return res.json({message: "All fields are required"})
    }
    const checkUser = await UsersData.findOne({username});
    if (checkUser) {
        return res.json({message: "Username  already exists"})
    }
    if (password.length < 8) {
        return res.json({message: "Password must be at least 8 characters"})
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const addUser = await new UsersData({
        firstName,
        lastName,
        username,
        email,
        password : hashPassword,
        role
    })

    addUser.save()
    return res.json({message: "User added successfuly"})
        
}




module.exports = {addUser}


const {UsersData} = require('../../models/users')





const deleteUser= async (req,res) => {
    if(req.user.role == "user"){
        return res.status(403).json({message: "UnAuthorized"});
    }
    const {id} = req.params
    if (!id){
        return res.json({messege: "Username is required"})
    }
    const delUser = await UsersData.findByIdAndDelete(id)
    if(!delUser){
        return res.json({message: "Username not found"})
    }
    return res.json({message: "User deleted successfully"})
}





module.exports = {deleteUser}


const {UsersData} = require('../../models/users')





const searchUser = async (req,res) => {
    if(req.user.role == "user"){
        return res.status(403).json({message: "UnAuthorized"});
    }
    const {id} = req.params
    if (!id){
        return res.json({messege: "Id is required"})
    }
    const User = await UsersData.findByIdAndDelete(id)
    if(!User){
        return res.json({message: "User not found"})
    }
    return res.json({message: User})
}





module.exports = {searchUser}


const {UsersData} = require('../../models/users')




const showUsers = async (req,res) => {
    if(req.user.role == "user"){
        return res.status(403).json({message: "UnAuthorized"});
    }
    const show = await UsersData.find()
    if(!show){
        res.json({message: "No Users found"})
    }
    return res.json({Users: show})
}




module.exports = {showUsers}


const {UsersData} = require('../../models/users')





const editUser= async (req,res) => {
    if(req.user.role == "user"){
        return res.status(403).json({message: "UnAuthorized"});
    }
    const {id} = req.params
    const updates = req.body
    const findUser = await UsersData.findOneAndUpdate({ _id: id },updates,{new: true})
    if(!findUser){
        return res.status(404).json({message: "this User Not found"})
    }
    return res.status(200).json({message: "User Updated successfully"})
}





module.exports = {editUser}