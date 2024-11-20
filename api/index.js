const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require("multer")
const path = require("path");
app.use("/images", express.static(path.join(__dirname, "/images")));


dotenv.config();
app.use(express.json());
mongoose.connect(process.env.MONGO_URL,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(console.log("Connected to Mongodb"))
.catch(err => console.log(err));

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, 'images'); 
    },
    filename: (req,file,cb) =>{
        cb(null,req.body.name)
    },
})

const upload = multer({storage: storage});
app.post("api/upload",upload.single("file"),(req,res) => {
    res.status(200).json("File has been uploaded");
})

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);


// Importing routes
app.listen("5000", ()=>{
    console.log("Backend is running");
})