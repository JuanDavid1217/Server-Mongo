const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();
const port = 8080;
app.use(cors());

// Conexión a la base de datos MongoDB Atlas
mongoose.connect('mongodb+srv://JuanDavid1217:JuanDavid%231712@cluster0.m3ei4fv.mongodb.net/?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'fisicoculturismo' // Reemplaza con el nombre real de tu base de datos
});

// Middleware para analizar datos JSON en las solicitudes
app.use(express.json());
app.use('/api', routes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
