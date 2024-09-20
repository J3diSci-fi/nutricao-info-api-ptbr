const database = require('../config/database');

exports.listarAlimentos = (page) => {
  const limit = 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const alimentosArray = Object.entries(database.alimentos);
  const totalPages = Math.ceil(alimentosArray.length / limit);

  const alimentosPaginados = alimentosArray
    .slice(startIndex, endIndex)
    .reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});

  return {
    alimentos: alimentosPaginados,
    paginaAtual: page,
    totalPaginas: totalPages,
    itensPorPagina: limit,
    totalItens: alimentosArray.length
  };
};

exports.buscarAlimento = (nome) => {
  return database.alimentos[nome] ? { [nome]: database.alimentos[nome] } : null;
};
