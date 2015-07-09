function log(text) {
    var logEl = document.getElementById("log");
    logEl.innerHTML += text + "<br />";
}

function app() {
    var version = 1;
    var colors = ["red", "blue", "green"];

    var person = {
        name: "Bob",
        age: 73,
        sayHi: function () {
            log("Hello, I'm " + person.name);
        },
        sayFavoriteColors: function () {
            log("My favorite colors are:\n");

            colors.forEach(function (color) {
                log(version + " " + color);
            });
        }
    };

    person.sayHi();
    person.sayFavoriteColors();
}

app();



