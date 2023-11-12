const clock = document.querySelector("#clock");
const toDayDate = document.querySelector("#date")
let today = new Date(); 

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
    
}

getClock();
setInterval(getClock, 1000);

let year = today.getFullYear(); 
let month = today.getMonth() + 1;  
let date = today.getDate();  
let day = today.getDay();  

if(day===0) {
    day = 'Sun.'
} else if(day===1) {
    day = 'Mon.'
} else if(day===2) {
    day = 'Tue'
} else if(day===3) {
    day = 'Wed'
} else if(day===4) {
    day = 'Thu'
} else if(day===5) {
    day = 'Fri'
} else if(day===6) {
    day = 'Sat'
} 

toDayDate.innerText = `${year}년 ${month}월 ${date}일 ${day}`