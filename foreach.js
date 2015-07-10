function log(text) {
    var logEl = document.getElementById("log");
    logEl.innerHTML += text + "<br />";
}

// write a function `forEach` that takes 2 arguments
function forEach(array, fn) {
	for (var i=0; i < array.length; i++) {
		fn(array[i]);
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

var sports = ["Football", "Soccer", "Basketball", "Volleyball", "Tennis", "Badminton"];

log("function should be called " + sports.length + " times.");

function sayHi() {
	log("Hi");
}

forEach(sports, sayHi);

forEach(sports, log);

var ul = document.getElementById("list");

function createListItem(text) {
	ul.innerHTML += "<li>" + text + "</li>";
}

var todos = ["learn js", "code", "take over the world"];
forEach(todos, createListItem);


// 1) an array
// 2) a function that will be called for each item in the array.
// this function has the same behavior as the Array forEach method.
// 3) foreach does not return ANYTHING

// the forEach function performs a for loop on the 1st parameter (array) passed in.
// Inside the for loop it will call the function (the 2nd paramter fn) passing the current item as a parameter

// var colors = ["red", "green", "blue"];
// colors.forEach(myFunc)
// forEach(colors, myFunc)

// example foreach call
/*
var todos = ["learn js", "code", "take over the world"];
forEach(todos, function (todoItem) {
	log(todoItem);
});
*/
