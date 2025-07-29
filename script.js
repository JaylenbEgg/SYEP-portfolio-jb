console.log("Hello world");

let Chicken = 123;
console.log(Chicken); 
console.log(typeof Chicken);

console.log(10+" eggs");
console.log(10+ 8+" eggs");
console.log(" eggs "+ 10 + 8);

console.log( 25 < 39);
//both conditions need to be true
console.log(7>3)&&(8>5);

//only one condition needs to be true
console.log(10>3)||(5>10);

// if the statement is logical or not 
console.log(!5>3);

const hour = new Date().getHours();
let greetings = ""

if (hour<12){
    greeting = "good morning";
} else if (hour<18){
    greeting = "good afternoon";
} else {
    greeting = "good evening";
}

document.getElementById("greeting").innerText = greeting;