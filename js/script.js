function functionFizzBuzz() {

    if (document.getElementById("fizz_buzz").innerHTML == "") {

        for ( i=1 ; i<=100 ; i++ ) {

            if ((i % 3 == 0) && (i % 5 == 0)) {
                document.getElementById("fizz_buzz").innerHTML += "<span id=\"fizzbuzz\">FizzBuzz</span>" + "<br>";
            } else if (i % 3 == 0) {
                document.getElementById("fizz_buzz").innerHTML += "<span id=\"fizz\">Fizz</span>" + "<br>";
            } else if (i % 5 == 0) {
                document.getElementById("fizz_buzz").innerHTML += "<span id=\"buzz\">Buzz</span>" + "<br>";
            } else {
                document.getElementById("fizz_buzz").innerHTML += i + "<br>";
            }
        
        }

    } else {
        document.getElementById("fizz_buzz").innerHTML = "";
    }

}

function refresh() {

    document.getElementById("fizz_buzz").innerHTML = "";

}