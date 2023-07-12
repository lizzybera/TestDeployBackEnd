import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const URL: string = process.env.APPLICATION_STRINGII!

const db = (()=>{
    mongoose.connect(URL).then(()=>{
        console.log("connected");
        
    })
})

export default db