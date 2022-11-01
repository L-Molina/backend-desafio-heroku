const express = require("express");
const { Router } = require("express");
const productsList = Router();

const Contenedor = require("../../controller/products.controller") 
const logger = require("../../logs/logger");

productsList.get("/", (req, res) => { 
  try {
    Contenedor.list()
    .then((data) => {  
    res.status(200).send(data);  
  })
  } catch(error) {
    const { method } = req;
    const time = new Date().toLocaleString();
    logger.error(`Ruta '/productosp - con metodo: ${method} - time: ${time} - error: ${error}`);
    console.log(error); 
  }
});

module.exports = productsList;