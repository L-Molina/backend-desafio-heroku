require('../connection/connection'); 
const Message = require('../models/Message');

const showMessage = async () => {
  try {
    const mensajes = await Message.find();
    return mensajes;
  } catch (error) {
    console.log(error);
  }
}

const saveMessage = async (message) => {
  try {
    const newMensaje = new Message(mensaje); 
    const data = await newMensaje.save();
    return data; 
  } catch (error) {
    console.log(error);
  }
}

module.exports = { showMessage, saveMessage };
