const express = require('express');
const router = express.Router();
const usuarios = require('../controllers/usuarios');

router.get('/', function(req, res){
    usuarios.index(req,res);
});

router.post('/addusuario', function(req, res) {
    usuarios.create(req,res);
});

router.get('/getusuario', function(req, res) {
    usuarios.list(req,res);
});

router.post('/findusuario', function(req, res) {
    console.log("Llegue aqui /findusuario:")
    usuarios.find(req,res);
});

module.exports = router;
