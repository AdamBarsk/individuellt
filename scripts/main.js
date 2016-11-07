/***************************************************************/
/*                          COUNTDOWN                          */
/***************************************************************/
(function countdownOne(){
  var today = new Date();
  var end = new Date(2018, 0, 15);

  var current = today.getTime();
  var event = end.getTime();
  var remaining = event - current;

  var s = Math.floor(remaining / 1000);
  var m = Math.floor(s / 60);
  var h = Math.floor(m / 60);
  var d = Math.floor(h / 24);

  h %= 24;
  m %= 60;
  s %= 60;

  if(h < 10){
    h = "0" + h;
  }
  if(m < 10){
    m = "0" + m;
  }
  if(s < 10){
    s = "0" + s;
  }

  document.getElementById('days').innerText = d;
  document.getElementById('hours').innerText = h;
  document.getElementById('minutes').innerText = m;
  document.getElementById('seconds').innerText = s;

  setTimeout(countdownOne, 1000);

})();

(function countdownTwo(){
  var today = new Date();
  var end = new Date(2018, 4, 31);

  var current = today.getTime();
  var event = end.getTime();
  var remaining = event - current;

  var s = Math.floor(remaining / 1000);
  var m = Math.floor(s / 60);
  var h = Math.floor(m / 60);
  var d = Math.floor(h / 24);

  h %= 24;
  m %= 60;
  s %= 60;

  if(h < 10){
    h = "0" + h;
  }
  if(m < 10){
    m = "0" + m;
  }
  if(s < 10){
    s = "0" + s;
  }

  document.getElementById('daysTwo').innerText = d;
  document.getElementById('hoursTwo').innerText = h;
  document.getElementById('minutesTwo').innerText = m;
  document.getElementById('secondsTwo').innerText = s;

  setTimeout(countdownTwo, 1000);

})();

////////////////////////////////////////////////////////////////////////////////

var hide = document.getElementsByClassName('hide');
for (var i = 0; i < hide.length; i++) {
  hide[i].addEventListener('click', swap);
}

function swap(){
  this.style.display="none";
}