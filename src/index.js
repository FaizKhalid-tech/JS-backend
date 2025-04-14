import 'dotenv/config'

import connect_DB from "./db/index.js";
import express from "express"

const app = express()

connect_DB()
.then(()=>{
  app.listen(process.env.PORT || 8000,() =>{
    console.log(`Server is running on port${process.env.PORT}`)
  })
}).catch((err)=>{
  console.log("MONGO db connection is failed!!!",err);
})




















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