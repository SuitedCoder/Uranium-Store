const electron = require('electron')
const {app, BrowserWindow, ipcMain, ipcRenderer, remote} = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1152,
    height: 642,
    autoHideMenuBar: true,
    frame: false,
    icon: "build/icon.jpg",
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      contextIsolation: false,
    }
  })
  require('@electron/remote/main').initialize()
  require('@electron/remote/main').enable(win.webContents)
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})