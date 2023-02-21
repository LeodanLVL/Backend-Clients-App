const express = require('express');
require('dotenv').config();
const {dbConnection} = require('./database/config');


const app  = express();

//Conectar la DB
dbConnection();

app.use(express.static('public'));

app.use('/api/clients',require('./routes/clientInfo'));

// app.get('/',(req , res)=>{
//     console.log("Dame el /");
//     res.json({
//         ok: true
//     })
// })

app.listen(process.env.PORT,()=>{
    console.log(`Server port ${process.env.PORT}`);
})