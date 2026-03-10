require('dotenv').config();

const express = require('express');
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use('/contatos', contactRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: 'Rota nao encontrada'
  });
});

app.use(errorHandler);

module.exports = app;
