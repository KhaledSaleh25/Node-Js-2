const {UsersData} = require('../../models/users');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const login = async(req,res) => {
    const {username , password} = req.body;
    if (!username || !password){
        return res.json({message: "Username and Password required"})
    }
    const getUser = await UsersData.findOne({username}); // {}
    if (!getUser){
        return res.json({message: "User not found"})
    }
    const match = await bcrypt.compare(password, getUser.password);
    if (!match) {
        return res.json({message: "Invalid Password"})
    }
    const token = jwt.sign({ firstName: getUser.firstName, lastName: getUser.lastName, email: getUser.email, role: getUser.role }, process.env.JWT_SECRET, { expiresIn: "1m" });
    req.session.token = token;
    
    return res.json({message: "Login Successful", token})
}

module.exports = {login}

const {UsersData} = require('../../models/users');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const register = async(req, res) => {
    try {
        let {firstName, lastName, username, email, password, role} = req.body;
        if (!firstName || !lastName || !username || !email || !password){
            return res.json({message: "All fields are required"})
        }
        if (!role) {
            role = "user"
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
        await addUser.save();
    
        const token = jwt.sign({firstName, lastName, email, role},  process.env.JWT_SECRET, { expiresIn: "1m" });
        req.session.token = token;

        return res.json({message: "User registered successfully"})
    }
    catch (error) {
        return res.json({message: error.message})
    }
    

}


module.exports = {register}