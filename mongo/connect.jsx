const express = require("express");
const app = express();
const mongoose = require("mongoose");




const connectDB= async=>{

  try {
    mongoose.connect(
      "mongodb+srv://frank:mmsmhbb6lWi4vrDj@cluster0.5l7jdhc.mongodb.net/Elles?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )

    console.log("Database connected all successfully");
  } catch (error) {

      console.error("Error connecting to database:", error);
  }

  
}


module.exports=connectDB