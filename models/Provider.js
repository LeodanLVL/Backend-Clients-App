const {Schema , model} = require('mongoose');

const ProviderSchema = Schema({
    id:{
        type: Number,
        require: true,
        unique: true
    },
    name:{
        type: String,
        require: true
    }
});

module.exports = model('Provider', ProviderSchema);