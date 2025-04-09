import 'dotenv/config'

import connect_DB from "./db/index.js";
import express from "express"

const app = express()

connect_DB()
.then().catch((err)=>{})




















// (async ()=>{
//   try{
//     mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error" ,()=>{
//       console.log("error :",error);
//       throw error
//     })

//     app.listen(process.env.PORT,()=>{
//       console.log(`app is listening on port${process.env.PORT}`)
//     })
//   }catch(err){
//     console.log("Error :",err)
//     throw err
//   }
// })()