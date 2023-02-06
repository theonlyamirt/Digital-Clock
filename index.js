const hoursEl=document.getElementById("Hours");
const minuteEl =document.getElementById("Minutes");
const SecondEl=document.getElementById("Seconds");
const ampmEl=document.getElementById("ampm");

function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm ="AM";

    if (h>12){
        h= h - 12;
        ampm = "PM";
    }

   hoursEl.innerText =h;
   minuteEl.innerText=m;
   SecondEl.innerText=s;
   ampmEl.innerText=ampm;

}
updateClock();