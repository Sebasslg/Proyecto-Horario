const { app, BrowserWindow } = require('electron');
const path = require('path');

// ...existing code...
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const api = express();
api.use(cors());
api.use(bodyParser.json());

// Ejemplo de endpoint de prueba
api.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// Puedes agregar más endpoints aquí

const PORT = 3000;
api.listen(PORT, () => {
  console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});
// ...existing code...

// ...existing code...
function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Cambia index.html por login.html
  win.loadFile('src/views/login.html');
}
// ...existing code...

app.whenReady().then(() => {
  createWindow();
});
// en main.js o un script de inicialización
const sequelize = require('./db/database');
const Horario = require('./db/models/Horario');

sequelize.sync({ force: false }).then(() => {
  console.log('Base de datos sincronizada');
});
x