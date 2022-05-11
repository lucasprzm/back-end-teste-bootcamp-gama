const { Usuarios } = require("../models");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const usuariosController = {
  async registro(req, res) {
    const { nome, email, senha } = req.body;
    const errors = validationResult(req);
    const novaSenha = bcrypt.hashSync(senha, 10);

    const novoUsuario = await Usuarios.create({
      nome,
      email,
      senha: novaSenha,
    });
    const usuario = await Usuarios.findOne({
      where: {
        email,
      },
    });
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    if (usuario) {
      return res.status(400).json("Usuário já cadastrado!");
    } else {
      return res.status(201).json(novoUsuario);
    }
  },
};

module.exports = usuariosController;
