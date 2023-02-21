const {Schema , model} = require('mongoose')
const Provider = require('./Provider')

const ClientSchema = Schema({

    name:{
        type: String,
        require:true,
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    phone:{
        type: String,
        require: true,
        unique: true
    },
    providers:[Provider]
     
});

module.exports = model('Client',ClientSchema);