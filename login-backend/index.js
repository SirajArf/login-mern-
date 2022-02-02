const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//const MONGO_URI="mongodb+srv://siraj:siraj123@cluster0.w3rtc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const port = process.env.PORT || 5000
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() =>{
    console.log("connection successful")
}).catch((e) =>{
    console.log("connection failed")
});


const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const userModel = new mongoose.model("userModel", userSchema);

// app.get("/", (req, res) => {
//     res.send("just trying out")
// })
// app.get("/register", (req, res) => {
//     res.send("just trying out")
// })

app.post("/login", (req, res)=> {
    const { email, password} = req.body
    userModel.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register",  (req, res) => {
    //console.log(req.body)
    const { name, email, password} = req.body;
    userModel.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        }else{
            const user = new userModel ({
                name: name,
                email: email,
                password: password
            })
            user.save(error => {
                if(error){
                    res.send(error)
                }else {
                    res.send({message: "Successfully Registerd"})
                }
            })

        }

    } );
   
})

app.listen(port, () => {
    console.log(process.env.MONGO_URI)
    console.log(`app is listening at port ${port}`)
});