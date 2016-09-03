const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var menu = "Select\t1 : Print Hello\n" +
            "\t2 : Print Goodbye\n" +
            "\t3 : Print YEAH\n>";

rl.question(menu, (answer) => {
    switch(answer) {
        case "1":
            console.log("Hello");
            break;
        case "2":
            console.log("Goodbye");
            break;
        case "3":
            console.log("YEAH");
            break;
        default: 
            console.log("Please select 1, 2, or 3");
    }

process.exit(0);

});


