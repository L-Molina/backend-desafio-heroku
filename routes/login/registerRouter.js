const { Router } = require("express");
const register = Router();

const Contenedor = require("../../controller/register.controller")
const logger = require("../../logs/logger");

register.get("/", (req, res) => {
  const { method } = req;
  const time = new Date().toLocaleString();
  logger.info(`Ruta '/register' - con metodo: ${method} - time: ${time}`);  
  res.render('register'); 
});

register.post("/", (req, res) => {
  
  const { method } = req;
  const time = new Date().toLocaleString();
  logger.info(`Ruta '/register' - con metodo: ${method} - time: ${time}`);

  const {username, password, email} = req.body 
  Contenedor.save({username, password, email}) 
  .then (user => {
    if (user) {      
      return res.render('success')      
    } else {
      res.render('error', {error: 'Usuario ya registrado', url: 'register' }) 
    }      
  })
});

module.exports = register;