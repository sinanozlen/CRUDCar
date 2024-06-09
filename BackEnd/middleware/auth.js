// auth.js

const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/login", (req, res) => {
    // kullanici adi ve sifre
    const { username, password } = req.body;

    // veritabani kontrol
    if (username === "sinan" && password === "1010") {
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
    } else {
        res.status(401).json({ message: "Invalid username or password" });
    }
});

module.exports = router;
