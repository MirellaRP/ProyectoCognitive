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

// Anadido : Usuario normal
router.use (function (req,res,next) {
  console.log('/user' + req.method);
  next();
});

router.get('/user',function(req,res){
  res.sendFile(path.resolve('views/InicioUsuario.html'));
});

// Anadido : Piso 1
router.use (function (req,res,next) {
  console.log('/user/piso1' + req.method);
  next();
});

router.get('/user/piso1',function(req,res){
  res.sendFile(path.resolve('views/InformacionPiso1.html'));
});


// Anadido : Usuario admin
router.use (function (req,res,next) {
  console.log('/admin' + req.method);
  next();
});


router.get('/admin',function(req,res){
  res.sendFile(path.resolve('views/InicioAdministrador.html'));
});

// Anadido : Reporte Usuarios
router.use (function (req,res,next) {
  console.log('/admin/reporteusuarios' + req.method);
  next();
});


router.get('/admin/reporteusuarios',function(req,res){
  res.sendFile(path.resolve('views/ReporteUsuarios.html'));
});





module.exports = router;
