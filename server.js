const express = require("express");
const app = express();
const PORT = 3000;

const userRouter = require("./routes/user")

app.get("/", (req, res) => {
    console.log("Hello express")
    // console.log("reqは", req , "です")
    // res.send("<p>こんにちは</p>")
    // res.sendStatus(404) Not Found
    // res.sendStatus(500) Internal Server Error
    // res.status(500).send("えらーです")
    res.status(500).json({msg:"It is a error"})
});

// Routing write here
app.use("/user", userRouter)

// app.use("/auth", authRouter)
// app.use("customer/", customerRouter)
// app.use("/products", productsRouter)

// app.listen(PORT, () => console.log("サーバーの起動にsuccessしました"))
app.listen(PORT, () => console.log("successfully with open server"))