const onSubmitHandler=(event)=>{
    event.preventDefault();
    const product = event.target.productName.value;
    const obj = {"productName":product};
    axios.post("http://localhost:3000"+"/products",obj).then((result)=>{
        console.log("Value returned from post request"+result.data.value);
    })
}