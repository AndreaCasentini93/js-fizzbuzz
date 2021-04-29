// 1) Scrivi un programma che stampi i numeri da 1 a 100
for ( i=1 ; i<=100 ; i++ ) {

    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

}

// 2) Per i multipli di 3 stampa "Fizz" al posto del numero


// 3) Per i multipli di 5 stampa "Buzz" al posto del numero


// 4) Per i numeri che sono sia multipli di 3 che di 5 stampa FizzBuzz

