const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//add and sub
rl.question('Please enter the first number : ', (answer1) => {
    rl.question('Please enter the second number : ', (answer2) => {
        var result = (+answer1) + (+answer2);
        var result2=(+answer1) - (+answer2);
        console.log(`The sum of above two numbers is`+result +"\ndiff between two nums is "+result2);
        rl.close();
    });
});


//greatest of 3 numbers
rl.question('enter the first number : ', (a) => {
    rl.question('enter the second number : ', (b) => {
        rl.question('third num :', (c) => {
            if(a>b && a>c){
                console.log(a+'is greater.');
            }
            else if(b>c){
                console.log(b+'is greater');
            }
            else{
                console.log(c+'is greater');
            }
            rl.close();
        });
    });
});


//reverse a string
rl.question('enter the array : ', (a) => {

    var b="";
    for(var i=a.length-1;i>=0;i--){
    var b = b + a[i];
    }
    console.log(b);
    rl.close();
});

