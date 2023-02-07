//import wordlist from 'wordlist-english'; // ES Modules
var wordlist = require('../node_modules/an-array-of-english-words');
//console.log(wordlist);
wordlist.sort(function (a, b) { return b.length - a.length; });
console.log(wordlist);
var filtro = "hat"
var listaMatchs = wordlist.filter(item => item.indexOf(filtro) != -1);

console.log(listaMatchs);