const mongoose = require("mongoose");
//Write missing code 
mongoose.connect("mongodb+srv://mehja2002:Mehjabin123@cluster0.kxbrw1z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });