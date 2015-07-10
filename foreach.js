function log(text) {
    var logEl = document.getElementById("log");
    logEl.innerHTML += text + "<br />";
}

var itemCall = function (array) {    
	var text = "";
		for (i=0; i < array.length; i++) { 
	    	text += "<br />" + array[i] + "<br />";
		}
	return text;
};
// write a function `forEach` that takes 2 arguments
function forEach(array, itemCall) {
	return itemCall(array);
}
  
var sports = ["Football", "Soccer", "Basketball", "Volleyball", "Tennis", "Badminton"];

log(forEach(sports, itemCall));

	// 1) an array
	// 2) a function that will be called for each item in the array.
	// this function has the same behavior as the Array forEach method.

	// var colors = ["red", "green", "blue"];
	// colors.forEach(myFunc)
	// forEach(colors, myFunc)