const path = require('path');

const getProducts = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','product.html'));
}
const postProducts = (req,res)=>{
    // const productName = req.body.productName;
    // console.log('New product:',productName);
    // res.send(`Product ${productName} has been added successfully`);
    const data = req.body;
    res.json({value:data.productName});
}
module.exports={
    getProducts,
    postProducts
}