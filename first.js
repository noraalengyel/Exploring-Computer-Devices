const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let people = [5,4,3,2,1,0];
let s;

console.log("the green light is on");
i=6; 



do{
    rl.question("press the button, yes/no?", s);
    if (s=="yes"){
        console.log("the green light is off, the red light is on");
    }

    rl.question("is any motion sensed by the sensor, yes/no?", (s));
    if (s=="yes"){
        console.log("buzzing, one person died");
        i--;
    } else {
        console.log("good round, nobody died");
    }

    console.log("10 sec red light, then red is off, green is on");
    console.log("number of people being in the game: " + people[i]);
} while (people[i]>0);

if (i==1){
    console.log("the game is over, game over sound buzzing");
}
