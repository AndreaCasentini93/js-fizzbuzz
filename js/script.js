function fizzBuzz() {
    if (document.getElementById("fizz_buzz").innerHTML == "") {
        for (var i=1 ; i<=100 ; i++ ) {
            if ((i % 3 == 0) && (i % 5 == 0)) {
                document.getElementById("fizz_buzz").innerHTML += "<li>" + "<span id=\"fizzbuzz\">FizzBuzz</span>" + "</li>";
            } else if (i % 3 == 0) {
                document.getElementById("fizz_buzz").innerHTML += "<li>" + "<span id=\"fizz\">Fizz</span>" + "</li>";
            } else if (i % 5 == 0) {
                document.getElementById("fizz_buzz").innerHTML += "<li>" + "<span id=\"buzz\">Buzz</span>" + "</li>";
            } else {
                document.getElementById("fizz_buzz").innerHTML += "<li>" + i + "</li>";
            }
        }
    }
}

function refresh() {
    document.getElementById("fizz_buzz").innerHTML = "";
}

document.getElementById("start").addEventListener("click", fizzBuzz);
document.getElementById("close").addEventListener("click", refresh);