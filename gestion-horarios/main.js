const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('src/views/index.html'); // O .pug si lo compilas antes
}

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