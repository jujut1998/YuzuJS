function log(text) {
  var logEl = document.getElementById("log");
  logEl.innerHTML += text + "<br />";
}

// write a function `forEach` that takes 2 arguments
function forEach() {
// 1) an array
var sports = ["Football", "Soccer", "Basketball", "Volleyball", "Tennis", "Badminton"];

//       sports.forEach(function pop (sports) {
//       log(sports);
//       });
// function getFor() {
  var i = 0;
  var len = sports.length;
  var text = "";
  for (; i < len; i++) {
  var final= text += sports[i] + "<br>";
  log(final); 
  }
  
  
}
// }

// this function has the same behavior as the Array forEach method.

forEach();
