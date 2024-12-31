if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}


const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');
const tasksRoutes = require('./apis/tasksRoutes')
const cors = require('cors')

const dbUrl = process.env.dbUrl

mongoose.connect(dbUrl)
.then(()=>console.log('open connection'))
.catch((err)=>console.log(err));



app.get('/hello' , (req,res)=>{
    res.status(200).json({msg:'hello from task manager server'})
})

// here im seeding dummy data just once
// seedDB();

// cors will help the react to send request to the backend server i.e helps send request from local 3000 to localhost 8000
app.use(cors());


//here it will parse the data
app.use(express.json());


app.use(tasksRoutes);


const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`server started at ${port}`)
})





