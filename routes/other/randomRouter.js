const express = require("express");
const { Router } = require("express");
const randoms = Router();
const numCPUs = require("os").cpus().length;

const PORT = parseInt(process.argv[2]) || 8080;
const logger = require("../../logs/logger");

const random = () => {
  return Math.floor(Math.random() * 1000) + 1;
};

randoms.get("/", function (req, res) {
  const { method } = req;
  const time = new Date().toLocaleString();
  logger.info(`Ruta '/api/randoms' - con metodo: ${method} - time: ${time}`);
  const randomNum = random();
  const info = {
    puerto: PORT,
    num_random: randomNum,
    procesadores: numCPUs,
  }
  res.send(info);  
});

module.exports = randoms;