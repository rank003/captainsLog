const express = require("express");
const app = express();
const mongoose = require("mongoose");




const connectDB= async=>{

  try {
    mongoose.connect(
      //place yours here//,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )

    console.log("Database connected all successfully");
  } catch (error) {

      console.error("Error connecting to database:", error);
  }

  
}


module.exports=connectDB