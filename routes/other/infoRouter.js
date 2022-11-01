const express = require("express");
const { Router } = require("express");
const info = Router();

const logger = require("../../logs/logger");

const data = {
  Argumentos: process.argv.slice(2),
  Nombre_de_Plataforma: process.platform,
  Version_Node: process.version,
  Path_de_Ejecucion: process.execPath,
  Process_id: process.pid,  
  Carpet_de_Proyecto: process.cwd(),  
}

info.get("/", (req, res) => { 
  const { method } = req;
  const time = new Date().toLocaleString();
  logger.info(`Ruta '/Info' - con metodo: ${method} - time: ${time}`);
});

module.exports = info;