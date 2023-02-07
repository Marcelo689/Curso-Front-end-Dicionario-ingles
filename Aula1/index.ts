var wordlist = require('../node_modules/an-array-of-english-words');
wordlist.sort(function (a, b) { return b.length - a.length; });

var filtro = "hat"
var listaMatchs = wordlist.filter(item => item.indexOf(filtro) != -1);

console.log(listaMatchs);