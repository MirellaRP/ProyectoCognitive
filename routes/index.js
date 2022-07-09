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


// Anadido : Inicio Sesion error
router.use (function (req,res,next) {
  console.log('/iniciosesionerror' + req.method);
  next();
});


router.get('/iniciosesionerror',function(req,res){
  res.sendFile(path.resolve('views/IniciarSesionError.html'));
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

// Anadido : Piso 6
router.use (function (req,res,next) {
  console.log('/user/piso6' + req.method);
  next();
});

router.get('/user/piso6',function(req,res){
  res.sendFile(path.resolve('views/InformacionPiso6.html'));
});

// Anadido : Piso 11
router.use (function (req,res,next) {
  console.log('/user/piso11' + req.method);
  next();
});

router.get('/user/piso11',function(req,res){
  res.sendFile(path.resolve('views/InformacionPiso11.html'));
});

// Anadido : Piso 1 Info
router.use (function (req,res,next) {
  console.log('/user/piso1/semana' + req.method);
  next();
});

router.get('/user/piso1/semana',function(req,res){
  res.sendFile(path.resolve('views/InfoSemanaPiso1.html'));
});

// Anadido : Piso 6 Info
router.use (function (req,res,next) {
  console.log('/user/piso6/semana' + req.method);
  next();
});

router.get('/user/piso6/semana',function(req,res){
  res.sendFile(path.resolve('views/InfoSemanaPiso6.html'));
});

// Anadido : Piso 11 Info
router.use (function (req,res,next) {
  console.log('/user/piso11/semana' + req.method);
  next();
});

router.get('/user/piso11/semana',function(req,res){
  res.sendFile(path.resolve('views/InfoSemanaPiso11.html'));
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

// Anadido : Basededatos
router.use (function (req,res,next) {
  console.log('/admin/basededatos' + req.method);
  next();
});


router.get('/admin/basededatos',function(req,res){
  res.sendFile(path.resolve('views/BaseDeDatos.html'));
});


// Anadido : Lista de Usuarios
router.use (function (req,res,next) {
  console.log('/admin/listausuarios' + req.method);
  next();
});


router.get('/admin/listausuarios',function(req,res){
  res.sendFile(path.resolve('views/ListaUsuarios.html'));
});



// Anadido : Sensores
router.use (function (req,res,next) {
  console.log('/admin/sensores' + req.method);
  next();
});


router.get('/admin/sensores',function(req,res){
  res.sendFile(path.resolve('views/Sensores.html'));
});



//Error 404
// Codigo obtenido de https://www.codegrepper.com/code-examples/javascript/how+to+make+a+404+page+nodejs
router.use(function(req, res, next){
  res.status(404);
  if (req.accepts('html')) {
    res.render('Error404', { url: req.url });
    return;
  }
});


module.exports = router;
