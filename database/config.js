const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true
        });
        console.log('DB Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error inciajndo la DB');
    }
}

module.exports = {
    dbConnection
}