const config = require('../config');
const mongoose = require('mongoose');

mongoose.connect(config.MONGO_DB.URI);

const db = mongoose.connection;

db.on('error', function(message) {
  console.error('connection error :: ', message);
});

db.once('open', function() {
  console.log('************************\n' +
    'MONGO_DB IS CONNECTED!' +
    '\n************************');
});
