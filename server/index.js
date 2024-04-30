import  express   from "express";
import signup from './routes/user.routes.js'
import mongoose from "mongoose";
import dotenv from 'dotenv'
// initialize dotenv
dotenv.config();
// connect mongodb
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to mongo')
}
   
).catch((error)=>{
    console.log(error)

});

const app = express();


app.use('/signup',signup)
app.listen(3000,()=>{
    console.log('listening port 3000')
})