import multer from "multer";
import multerConfig  from "../config/multerConfig";

import Foto from "../models/Foto";

const upload = multer(multerConfig).single('foto');

class FotoController {
  create(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code]
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const original_name = originalname;
        const file_name = filename;
        const foto = await Foto.create({ original_name, file_name, aluno_id });

        return res.json(foto);
      } catch (error) {
        return res.status(400).json({
          errors: ['Erro no id do aluno']
        });
      }
    });
  }
}

export default new FotoController();
