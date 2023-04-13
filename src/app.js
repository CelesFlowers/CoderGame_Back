const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes/index')
// Middlewares
const app = express()


app.use(cors());

app.use(express.json());
app.use(morgan('dev'));
app.use('/', router);

module.exports = app;
