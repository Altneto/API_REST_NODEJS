"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  //criar usuario
  async create(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map(err => err.message)
      });
    }
  }

  //Buscar todos os usuarios
  async index(req, res) {
    try {
      const users = await _User2.default.findAll({attributes: ['id', 'nome', 'email']});
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  //Buscar um Usuario
  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);

      const { id, nome, email } = user;

      return res.json({ id, nome, email });
    } catch (error) {
      return res.json(null);
    }
  }

  //Atualizar o usuario
  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não existe']
        });
      }

      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados
      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map(err => err.message)
      });
    }
  }

  //Deletar usuario
  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não existe']
        });
      }

      await user.destroy();
      return res.json('Usuario deletado')
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map(err => err.message)
      });
    }
  }
}

exports. default = new UserController();
