const express = require('express');
const db = require('./utilities/sql');
const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');
const app = express();
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello");
})

app.use("/users",userRoutes);
app.use("/bus",busRoutes);

app.listen(3000,()=>{
    console.log('Server is created')
})