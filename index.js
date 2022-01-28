let valorProd = 65;
let valorDescount = 8;

const discount = require("./prod");
let funProd = require("./prod");
let finalValor= discount(valorProd,valorDescount);

console.log(finalValor);