const jwt = require("jsonwebtoken");

// Define the authentication middleware function
const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token || !token.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    const tokenString = token.substring(7);
    const JWT_SECRET = process.env.JWT_SECRET;

    jwt.verify(tokenString, JWT_SECRET, (error, decoded) => {
        if (error) {
            return res.status(400).json({ message: "Invalid token" });
        }
        req.user = decoded;
        next();
    });
};

module.exports = authMiddleware;
