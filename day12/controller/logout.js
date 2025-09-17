

const {tokenData} = require('../models/token')

const logOut= async(req,res) => {
    try{
        const {username , password} = req.body;
        if (!username || !password){
            return res.json({message: "Username and Password required"})   
        }
        const foundUser = await tokenData.findOne({username}); // {}
        if (!foundUser) {
            return res.json({ message: "User not found" });
        }

        await tokenData.deleteOne({ username });
        return res.json({ message: "User logged out successfully" });
    }catch(err){
        return res.json({message:err.message})
    }
}

module.exports = {logOut}