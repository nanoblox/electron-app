const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.webContents.openDevTools();

  win.setIcon(path.join(__dirname, "assets/images/Nanoblox.png"));
  win.setMenu(null);

  //win.loadURL("http://localhost:3000");
  win.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);
}

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
