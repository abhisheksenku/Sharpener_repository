const path = require('path');
const getProducts = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','product.html'));
}
module.exports={
    getProducts
}