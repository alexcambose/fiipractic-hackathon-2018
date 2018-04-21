const en = require('./en');
const ro = require('./ro');
const Polylang = require('polylang');
const polylang = new Polylang({ defaultLang: 'ro' });

polylang.add('en', en);
polylang.add('ro', ro);

module.exports = polylang;