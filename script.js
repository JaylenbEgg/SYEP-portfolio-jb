const reviews = [
    {
        id: 1, 
        name: 'burger bob',
        img: '#',
        text: 'AAAAAAAAAAAAAAAA',
    },
{
        id: 2, 
        name: 'EEEEEE',
        img: '#',
        text: 'AAAAAAAAAAAAAAAA'
    },
{
        id: 3, 
        name: 'EEERRRR',
        img: '#',
        text: 'AAAAAAAAAAAAAAAA'
    },
]

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;
window.addEventListener('DOMContentLoaded', function() {
    const items = reviews[currentItem];
    img.src = items.img;
    author.textContent = items.name;
    job.textContent = items.job;
    info.textContent = items.text;
});

function showPerson(person){
    const Item = reviews[Person];
     img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.Length -1){
       currentItem = 0;
    }
    showPerson(currentItem);
   }
);   

prevBtn.addEventListener('click', function (){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.Length -1;
    }
    showPerson(currentItem);

});

















// console.log("Hello world");

// let Chicken = 123;
// console.log(Chicken); 
// console.log(typeof Chicken);

// console.log(10+" eggs");
// console.log(10+ 8+" eggs");
// console.log(" eggs "+ 10 + 8);

// console.log( 25 < 39);
// //both conditions need to be true
// console.log(7>3)&&(8>5);

// //only one condition needs to be true
// console.log(10>3)||(5>10);

// // if the statement is logical or not 
// console.log(!5>3);

// const hour = new Date().getHours();
// let greetings = ""

// if (hour<12){
//     greeting = "good morning";
// } else if (hour<18){
//     greeting = "good afternoon";
// } else {
//     greeting = "good evening";
// }

// document.getElementById("greeting").innerText = greeting;