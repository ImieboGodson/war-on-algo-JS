

const fizzbuzz = (input) => {
    let convertToNumber;
    // console.log(input.length);
    convertToNumber = (Array.isArray(input) && input.length > 1) ? Number(input) : parseInt(input);
    return (isNaN(convertToNumber)) ? errorHandler(input) : checkForDivisibility(convertToNumber);
}


const checkForDivisibility = (num) => {
    let value;

    for(let i = 1; i <= num; i++) {
        let string = "";
        value = i;

        if(i % 3 === 0) string = "Fizz";
        if(i % 5 === 0) string = (string) ? `${string}Buzz` : "Buzz";

        value = (string) ? string : value;

        console.log(value);
    }
}


const errorHandler = (input) => {
    let typeOfValue;
    let errorMessage;
    typeOfValue =  (Array.isArray(input)) ? "Array" : typeof(input);
    errorMessage = `${JSON.stringify(input)} is not a valid Number but a/an ${typeOfValue}`;
    console.log(errorMessage);
}

fizzbuzz(50);