import dotenv from 'dotenv'

import connectDB from "./db/index.js";
connectDB()

dotenv.config({
    path:'./env'
})

// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     } catch (error) {
//         console.error("ERROR: ",error)
//         throw err
//     }
// })()