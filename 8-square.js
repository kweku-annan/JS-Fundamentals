const { argv }  =  require('node:process');
arg = argv[2];
num = parseInt(arg);

if (!isNaN(num)) {
    let a = 0;
    while (a < num) {
        let char = "X";
        for (let i = 1; i < num; i++) {
            char += char;
        }
        console.log(char);
        a++;
    }
} else {
    console.log("Missing size");
}
