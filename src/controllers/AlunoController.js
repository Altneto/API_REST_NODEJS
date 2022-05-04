import Aluno from "../models/Aluno";
import Foto from "../models/Foto";

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: [ "id", "nome", "sobrenome", "email", "idade", "peso", "altura"],
      include: {
        model: Foto,
        attributes: ['url', 'file_name']
      }
    });
    res.json(alunos);
  }

  async create(req, res) {
    try {
      const aluno = await Aluno.create(req.body)

      console.log(aluno);

      return res.json({ aluno });
    } catch (error) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando o id']
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        });
      }

      const alunoAtualizado = await aluno.update(req.body);
      return res.json(alunoAtualizado);
    } catch (error) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando o id']
        });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: [ "id", "nome", "sobrenome", "email", "idade", "peso", "altura"],
        include: {
          model: Foto,
          attributes: ['url', 'file_name']
        }
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        });
      }

      return res.json(aluno);
    } catch (error) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando o id']
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        });
      }

      await aluno.destroy();
      return res.json("Aluno deletado")
    } catch (error) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }
}

export default new AlunoController();
