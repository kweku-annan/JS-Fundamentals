const { argv }  =  require('node:process');
arg = argv[2];
num = parseInt(arg);

if (!isNaN(num)) {
    let a = 0;
    while (a < num) {
        let char = "";
        for (let i = 0; i < num; i++) {
            char += "X";
        }
        console.log(char);
        a++;
    }
} else {
    console.log("Missing size");
}
