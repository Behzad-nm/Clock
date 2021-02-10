const DIGITALCLOCK = document.querySelector("#digital");

var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

function runTheClock() {
  DIGITALCLOCK.innerHTML = ("0"+hr).slice(-2) + ":" + ("0"+min).slice(-2) + ":" + ("0"+sec).slice(-2);
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
