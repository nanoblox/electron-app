const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
  rootPath: __dirname.replace(/\\/g, "/"),
});
