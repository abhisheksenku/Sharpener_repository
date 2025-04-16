const express = require('express');
const db = require('./utilities/sql');
const studentRoutes = require('./routes/studentRoutes');


require('./models')
const app = express();
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello");
})

app.use("/students",studentRoutes);
db.sync({force:false}).then(()=>{   
    app.listen(3000,()=>{
        console.log('Server is created')
    })
}).catch((err)=>{
    console.log(err);
})
