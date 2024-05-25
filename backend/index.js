const express= require("express");
const app=express();
const product=require("./routes/product")
const dotenv=require("dotenv");
dotenv.config();
const mongoose=require("mongoose")
// connect db
mongoose.connect("//palcherin17:x9QS8tMCm5KeZ7dU@cluster0.0oo0aq6.mongodb.net/").then(()=>console.log("db connected")).then((err)=>{
    err;
})


const PORT=process.env.PORT;
app.listen(PORT || 3000, () =>{
    console.log(`server is running on port ${PORT}`)
})

// db password:

// url:mongodb+srv://palcherin17:x9QS8tMCm5KeZ7dU@cluster0.0oo0aq6.mongodb.net/


//palcherin17:x9QS8tMCm5KeZ7dU@cluster0.0oo0aq6.mongodb.net/