const path = require('path');
const Usuario = require('../models/usuarios');

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/InicioUsuario.html'));
};

exports.create = function (req, res) {
    var newUsuario = new Usuario(req.body);
    newUsuario.funcion=0;
    console.log(req.body);
    newUsuario.save(function (err) {
            if(err) {
            res.status(400).send('Unable to save user in database');
        } else {
            res.redirect('/user');
        }
  });
};

// Funcion Find
// Obtenido de en https://www.geeksforgeeks.org/mongoose-exists-function/ y https://mongoosejs.com/docs/queries.html
// Tambien basado en controllers/UsuarioController.js de GUÍA DE LABORATORIO 06 “Desarrollo de aplicación”
// Tambien basado en https://www.geeksforgeeks.org/mongoose-find-function/
// y https://stackoverflow.com/questions/66944226/in-mongoose-model-find-and-model-find-exec-produce-the-same-result-so-why
exports.find = function (req, res) {
        console.log("Llegue aqui .find:")
        //console.log("req:", req) --> me sirvio para saber que se estaba enviando, no era params, era body lo que busco
        console.log("req:", req.body.email)
        console.log("req:", req.body.password)
        Usuario.exists({email:req.body.email, password:req.body.password},function (err,existencia) {
                if(err) {
                        console.log("Existe un error: ", err)
                } else {
                        console.log("existencia", existencia)
                        if(existencia==true){
                                Usuario.findOne({email:req.body.email, password:req.body.password}).exec(function (err,usuario){
                                console.log("Usuario: ", usuario)
                                console.log("Usuario: ", usuario.nombre)
                                // Buscar como pasar el nombre 
                                res.redirect('/user');
                                });
                        }
                }
      });
    };



exports.list = function (req, res) {
        Usuario.find({}).exec(function (err, usuarios) {
                if (err) {
                        return res.send(500, err);
                }
                res.render('getusuario', {
                        usuarios: usuarios
             });
        });
};
