// console.log("Node.js 2nd")
const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.send("<p>congratulation !! You accessed user page</p>")
});

router.get("/info", (req, res) => {
    res.send("<p>congratulation !! You accessed user info page</p>")
});
// console.log("ああああ" , router);


module.exports = router;