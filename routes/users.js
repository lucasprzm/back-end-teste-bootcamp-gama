var express = require("express");
const usuariosController = require("../controllers/usuariosController");
const authController = require("../controllers/authController");
const validarCriacaoUsuario = require("../validations/usuarios/create");
var router = express.Router();
const checkToken = require("../helpers/validaJwt");
const res = require("express/lib/response");

// Registro de novo usuário
router.post("/new", usuariosController.registro);

// Login de usuário
router.post("/login", authController.login);
router.get("/testeAuth", checkToken, (req, res) => res.json("Deu bom!"));
module.exports = router;
