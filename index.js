const express = require('express');
require('dotenv').config();



const app  = express();

app.use(express.static('public'));

app.get('/',(req , res)=>{
    console.log("Dame el /");
    res.json({
        ok: true
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`Server port ${process.env.PORT}`);
})