const path = require('path');
const Usuario = require('../models/usuarios');

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/InicioUsuario.html'));
};

exports.create = function (req, res) {
    var newUsuario = new Usuario(req.body);
    console.log(req.body);
    newUsuario.save(function (err) {
            if(err) {
            res.status(400).send('Unable to save lab05 to database');
        } else {
            res.redirect('/usuarios/getusuario');
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
