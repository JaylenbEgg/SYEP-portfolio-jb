const reviews = [{
        id: 1, 
        name: "Akheel Dixon",
        img: 'ancle man.jpg',
        job: 'student learning Web developer.',
        info: '"Jaylen. He’s A funny guy who makes a lot of jokes. At crucial times he knows when to sit and focus. He likes to get his stuff finished first then he’s open to help his friends and anyone else who meeds it"',
        date: '2025-8-8'
    },
    {
        id: 2, 
        name: 'Jayden Paulino',
        img: 'jp.jpg',
        job: 'student learning Web developer.',
        info: '"Jaylen is a very smart guy and knows how to pull a team together when its necessary. He provides great leadership and is also very kind and humurous"',
        date: '2025-8-8'
    },
    {
        id: 3, 
        name: 'Eddie hines ',
        img: 'E.jpg',
        job: '',
        info: '"Jaylen is a very reliable, kind, creative and fun guy. Gets along with people easily and, always nice to be around and and someone you can trust. He helps out whenever its needed and is truly a gift to have in life."',
        date: '2025-8-8'
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
    info.textContent = items.info;
});

function showPerson(person){
    const item = reviews[person];
     img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
};

nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.Length -1){
       currentItem = 0;
    }
    showPerson(currentItem);
   });   

prevBtn.addEventListener('click', function (){
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.Length - 1;
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