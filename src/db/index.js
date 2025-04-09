

import mongoose from "mongoose";
import {DB_NAME} from "../constant.js";

const connect_DB= async ()=>{
  try{
    const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      console.log(`Mongo DB connected on DB HOST:${connectionInstance.connection. host} `)
  
  }catch(error){
    console.log("Error: ",error);
    process.exit(1);
  }
}

export default connect_DB;