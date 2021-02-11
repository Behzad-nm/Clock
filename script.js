const DIGITALCLOCK = document.querySelector("#digital");
const HOURHAND = document.querySelector("#hour-hand");
const MINUTEHAND = document.querySelector("#minute-hand");
const SECONDHAND = document.querySelector("#second-hand");

var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

function runTheClock() {
  DIGITALCLOCK.innerHTML = ("0"+hr).slice(-2) + ":" + ("0"+min).slice(-2) + ":" + ("0"+sec).slice(-2);
  HOURHAND.style.transform = "rotate(" + ((hr*30)+(min/2)+(sec/120)) + "deg)";
  HOURHAND.style.transformOrigin = "50% 50%";
  MINUTEHAND.style.transform = "rotate(" + ((min*6)+(sec/10)) + "deg)";
  MINUTEHAND.style.transformOrigin = "50% 50%";
  SECONDHAND.style.transform = "rotate(" + sec*6 + "deg)";
  SECONDHAND.style.transformOrigin = "50% 50%";
  sec += 1;
  if (sec == 60) {
    sec = 0;
    min += 1;
    if (min == 60) {
      min = 0;
      hr +=1;
      if (hr == 24) {
        hr = 0;
      }
    }
  }
}


var interval = setInterval(runTheClock, 1000);
