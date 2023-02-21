const {Schema , model} = require('mongoose');

const ProviderSchema = Schema({
    name:{
        type: String,
        required: true
    }
});

module.exports = model('Provider', ProviderSchema);