const cors = require('cors');

const corsOptions = {
    origin: ['https://addres.com','https://addres2.com'],
    status: 200
};

module.exports = cors(corsOptions);

