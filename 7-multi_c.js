const { argv } = require('node:process');

arg = argv[2];
num = parseInt(arg);

if (!isNaN(num)) {
    for (let i = 0; i < num; i++) {
        console.log("C is fun");
    }
} else {
   console.log("Missing number of occurrences");
}
