const express = require('express');
const cors = require('cors')
require('dotenv').config();

const { dbConnection } = require('./database/config');


const app = express();

// Cors
app.use(cors());

//Conectar la DB
dbConnection();

app.use(express.static('public'));
app.use(express.json());

app.use('/api/providers', require('./src/routes/provider'));
app.use('/api/client', require('./src/routes/client'));

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server port ${process.env.PORT}`);
})