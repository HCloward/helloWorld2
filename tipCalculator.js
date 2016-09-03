const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var menu = "Select\t1 : Calculate 10% tip\n" +
            "\t2 : Calculate 20% tip\n" +
            "\t3 : Calculate 30% tip\n>" +
            "Then enter a space, and your bill amount.\n";

var askQuestion = function askQuestion(){
    rl.question(menu, (answer) => {

        var inputs = answer.split(" ");
        var elseStatement = "Please select 1, 2, or 3. Then enter a space and your bill amount."
        var before = "You should leave $"
        var after = " for your tip."

        switch(inputs[0]) {
            case "1":
                if(inputs[1]){
                    console.log(before + ((inputs[1]) * .1).toFixed(2) + after);
                } else {
                    console.log(elseStatement);
                }
                break;
            case "2":
                if(inputs[1]) {
                console.log(before + ((inputs[1]) * .2).toFixed(2) + after);
                } else {
                    console.log(elseStatement);
                }
                break;
            case "3":
                if(inputs[1]) {
                    console.log(before + ((inputs[1]) * .3).toFixed(2) + after);
                } else {
                    console.log(elseStatement);
                }
                break;
            case "4":
                console.log("Exiting Program");
                process.exit(0);
            default:
                console.log("Please select 1, 2, or 3. Then enter a space and your bill amount.");
        }
        askQuestion();
    });
}

askQuestion();
            //comment