const { ipcRenderer } = require("electron");

document.addEventListener("DOMContentLoaded", () => {
  const logsDiv = document.getElementById("logs");
  const messageInput = document.getElementById("messageInput");
  const sendMessageButton = document.getElementById("sendMessageButton");

  ipcRenderer.on("log-message", (event, message) => {
    const logEntry = document.createElement("div");
    logEntry.textContent = `Received message: ${message}`;
    logsDiv.appendChild(logEntry);
  });

  sendMessageButton.addEventListener("click", () => {
    const message = messageInput.value;
    ipcRenderer.send("send-message", message);
    messageInput.value = "";
  });
});
