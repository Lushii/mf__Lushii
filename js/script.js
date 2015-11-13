var days = document.querySelector(".days");
var hours = document.querySelector(".hours");
var minutes = document.querySelector(".minutes");
var seconds = document.querySelector(".seconds");
var meDays = document.querySelector(".measure-days");
var meHours = document.querySelector(".measure-hours");
var meMinutes = document.querySelector(".measure-minutes");
var meSeconds = document.querySelector(".measure-seconds");
var goal = new Date();
goal.setMonth(goal.getMonth() + 1);
goal.setDate(1);
goal.setHours(0, 0, 0, 0);

function getWord(num,arr){
var res;
if (num%100>=11 && num%100<=14){
res=arr[2];
return res;
}
else{
num=num%10;
switch (num) {
case (1): res=arr[0];break;
case (2): 
case (3):
case (4): res=arr[1];break;
default: res=arr[2];
}
return res;
}
}

function countdown () {
var now = new Date();
var sec = 1000;
var min = sec*60;
var hour = min*60;
var day = hour*24;
if (goal>now){
var ms = goal-now;
var d = Math.floor(ms/day);
days.innerHTML = d;
meDays.innerHTML = getWord(d,["день","дня","дней"]);
var h = Math.floor(ms%day/hour);
hours.innerHTML = h;
meHours.innerHTML = getWord(h,["час","часа","часов"]);
var m = Math.floor(ms%day%hour/min);
minutes.innerHTML=m;
meMinutes.innerHTML = getWord(m,["минута","минуты","минут"]);
var s = Math.floor(ms%day%hour%min/sec);
seconds.innerHTML = s;
meSeconds.innerHTML = getWord(s,["секунда","секунды","секунд"]);
}
}
setInterval(countdown, 1000);