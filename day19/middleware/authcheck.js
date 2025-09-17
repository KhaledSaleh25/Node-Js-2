const jwt = require("jsonwebtoken");





const checkAuth = (req, res, next) => {
    const getToken = req.session.token; 
    if (!getToken) {
        return res.status(401).json({ message: "Unauthorized00" });
    } else {
        jwt.verify(getToken, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(401).json({ message: "Unauthorized22" });
            } else {
                req.user = decode;
                next();
            }
        });
        
    }
}


module.exports = {checkAuth}