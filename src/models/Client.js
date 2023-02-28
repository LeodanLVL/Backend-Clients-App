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
        required: true,
        unique: true
    },
    providers:[{_id:{
        type: String,
        require:true,
    }}]
     
});

module.exports = model('Client',ClientSchema);