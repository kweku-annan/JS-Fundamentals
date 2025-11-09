const { argv } = require('node:process');

let arg1 = argv[2];
let arg2 = argv[3];
let strCat = arg1 + " is " + arg2;
console.log(strCat);

