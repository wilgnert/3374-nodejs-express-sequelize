const db = require('../models');


class PessoaController {
  static async pegaTodas(req, res) {
    try {
      // acessar o modelo
      const pessoas = await db.Pessoa.findAll();
      res.status(200).json(pessoas);
    } catch (error) {
      // erro
    }
  }
}

module.exports = PessoaController;