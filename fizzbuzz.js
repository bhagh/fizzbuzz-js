// FizzBuzz example of looping through 1-100
// If a multiple of 3, output Fizz.
// If a multiple of 5, output Buzz.
// If a multiple of 15, output FizzBuzz.

const conditions = {3: "Fizz", 5: "Buzz"};

function FizzBuzz (conditions){
    for (i=1; i<=100; i++){
        output = ""
        for (let value in conditions){
            if (i % value == 0){output += conditions[value]};
        }
        if (output == ""){output = i};
        console.log(output);
    } 
}

FizzBuzz(conditions);