const express = require('express');
const router = express.Router();
const multer = require('../multer-config');
const equiposControllador =  require("../controller/equiposControlador");

router.post('/form',multer, equiposControllador.agregarEquipo);

router.get('/equipos', equiposControllador.obtenerListaEquipos);

router.get('/equipos/:tlaEquipo', equiposControllador.obtenerEquipo);

router.put('/form/:tlaEquipo', multer, equiposControllador.modificarEquipo);

router.delete('/delete/:tlaEquipo', equiposControllador.eliminarEquipo);

module.exports = router;