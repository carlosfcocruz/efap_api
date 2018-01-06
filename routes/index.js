const express = require('express');
const app = express();
const config = require('../config');
const users = require('./users');
const products = require('./products');

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/users', users);
app.use('/products', products);

app.listen(config.NODE_PORT, () => console.log(`Example app listening on port ${config.NODE_PORT}!`));
