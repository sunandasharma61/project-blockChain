const express=require("express");
const mongoose=require("mongoose")
const route =require("./route/route.js");
const app=express();


app.use(express.json());


mongoose.connect("mongodb+srv://cryptoUser:YukJGuxtzktPyirP@cluster0.kcc7xh8.mongodb.net/crypto",{
useNewUrlParser: true
})
.then(()=>console.log("MongoDB is connected"))
.catch((error)=>console.log(error));


app.use("/",route);

app.listen( 3000, function () {
    console.log("Express App Running on Port 3000");
  });