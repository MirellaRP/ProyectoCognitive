const express = require('express');
const router = express.Router();
const path = require('path');

router.use (function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/',function(req,res){
  res.sendFile(path.resolve('views/index.html'));
});

// Todo lo anadido basado en https://www.youtube.com/watch?v=bab8b2Ix4K0&ab_channel=Bluuweb

// Anadido : Inicio Sesion
router.use (function (req,res,next) {
  console.log('/iniciosesion' + req.method);
  next();
});


router.get('/iniciosesion',function(req,res){
  res.sendFile(path.resolve('views/IniciarSesion.html'));
});

// Anadido : Registro
router.use (function (req,res,next) {
  console.log('/registro' + req.method);
  next();
});


router.get('/registro',function(req,res){
  res.sendFile(path.resolve('views/Registrarse.html'));
});


module.exports = router;
