const fs = require('fs');
const path = require('path');

const alimentos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/data.json'), 'utf8'));

module.exports = {
  alimentos
};
