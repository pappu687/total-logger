const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  onLogMessage: (callback) => ipcRenderer.on("log-message", callback),
});
