var express = require("express");
const usuariosController = require("../controllers/usuariosController");
const validarCriacaoUsuario = require("../validations/usuarios/create");
const { body } = require("express-validator");
const authController = require("../controllers/authController");
var router = express.Router();

// Registro de novo usuário
router.post("/new", validarCriacaoUsuario, usuariosController.registro);

// Login de usuário
router.post("/login", authController.login);

module.exports = router;
