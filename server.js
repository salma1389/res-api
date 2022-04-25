const express=require ("express");
const app=express();
require('dotenv').config({path:"./config/.env"})
const connectDb= require ("./config/connectDb")
connectDb()
const User=require("./model/User")
app.use(express.json())


//post a data in database
app.post("/post", async (req, res) => {
    const { fullName, email, phone } = req.body;
    try {
    //   const newUser = await User({ fullName, email, phone });
    // ca marche aussi sans await
      const newUser =  User({ fullName, email, phone });
      await newUser.save();
      res.send(newUser);
    } catch (error) {
      res.send(error.message);
    }
  });

  //get all data from database to be affiched
app.get("/get", async(req, res) => {
    try {
        const allUsers = await User.find();
        res.send(allUsers);
    } catch (error) {
        res.send(error.message);
    }
})

//get one user
app.get("/get/:id", async(req, res) => {
    try {
        const oneUser = await User.findById(req.params.id);
        res.send(oneUser);
    } catch (error) {
        res.send(error.message);
    }
});

// delete one user
app.delete("/delete/:id", async(req, res) => {
    try {
        const DeletedUser = await User.findByIdAndDelete(req.params.id);
        res.send("user deleted success");
    } catch (error) {
        res.send(error.message);
    }
});

// update user
app.put("/update/:id", async(req, res) => {
    try {
       const updatedUser = await User.findByIdAndUpdate(req.params.id, {...req.body}, {new:true});
       res.send(updatedUser); 
    } catch (error) {
        res.send(error.message);
    }
})

const PORT=process.env.PORT||4000;
app.listen(PORT,err=>err?console.log(err):console.log(`server is running on port ${PORT}`))
