const express = require('express');
const cors = require('cors');
const alimentosRoutes = require('./routes/alimentosRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/alimentos', alimentosRoutes);

module.exports = app;
