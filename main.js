const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let window;

function createWindow() {

  window = new BrowserWindow({width: 600, height: 600});
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // window.webContents.openDevTools();

  window.on('closed', () => {
    window = null;
  });

}

app.on('ready', createWindow);
