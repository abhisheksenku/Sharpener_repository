const express = require('express');
const app = express();
const port = 3000;

const productRoutes = require('./routes/productRoutes');
app.use('/products',productRoutes);

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});