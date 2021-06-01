// Convert inputted parameter to celsius
const fahrToCelsius = (input) => {
	let toCelsius = (input - 32) * 5/9;
	let toFourDecimalPlaces = toCelsius.toFixed(4)
 	console.log(toFourDecimalPlaces);

 	return toFourDecimalPlaces;
}

// Validates input type then calls the appropriate function
const convertFahrToCelsius = (input) => {
	let convertInputToNumber;
	(Array.isArray(input) && input.length > 0) ? convertInputToNumber = Number(input) : convertInputToNumber = parseInt(input)
	return isNaN(convertInputToNumber) ? errorHandler(input) : fahrToCelsius(input)
}

//Checks invalid parameter type and outputs a message accordingly
const errorHandler = (input) => {
		let errorMessage = ''; 
		(Array.isArray(input)) ?
			errorMessage = `${JSON.stringify(input)} is not a valid number but an array` 
			:
			errorMessage = `${JSON.stringify(input)} is not a valid number but a/an ${typeof(input)}`

		console.log(errorMessage);

	return errorMessage;
}