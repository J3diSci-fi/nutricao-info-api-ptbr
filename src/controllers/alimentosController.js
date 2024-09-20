const alimentosService = require('../services/alimentosService');

exports.listarAlimentos = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const resultado = alimentosService.listarAlimentos(page);
  res.json(resultado);
};

exports.buscarAlimento = (req, res) => {
  const nome = req.params.nome.toLowerCase();
  const alimento = alimentosService.buscarAlimento(nome);
  
  if (alimento) {
    res.json(alimento);
  } else {
    res.status(404).json({ error: 'Alimento não encontrado' });
  }
};
