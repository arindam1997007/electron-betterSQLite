const { contextBridge } = require("electron")
const personDB = require("./Database/PersonManager")

contextBridge.exposeInMainWorld("sqlite", {
  personDB,
})
