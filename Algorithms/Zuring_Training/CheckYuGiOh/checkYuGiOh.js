// Creates the array
const createArray = (n) => {
	let array = [];
	let newArray = [];
	
	for(let i = 1; i <= n; i++) {
		array.push(i);

		newArray = array.map((value) => {
			let string = '';

				if(value % 2 === 0) {
					string = 'yu';
				}
				if(value % 3 === 0) {
					string = (string) ? `${string}-gi` : 'gi';
				}
				if(value % 5 === 0) {
					string = (string) ? `${string}-oh` : 'oh';
				}

				value = (!string) ? value : string;

			return value;
		})
	}

	console.log(newArray);

	return newArray;
}

// Validate input and calls the appropriate function
const checkYuGiOh = (n) => {
	let inputToNumber = '';
	(Array.isArray(n) && n.length > 0) ? inputToNumber = Number(n) : inputToNumber = parseInt(n);
	return isNaN(inputToNumber) ? errorHandlerFunc(n) : createArray(n);
}

// Outputs error message in case of error
const errorHandlerFunc = (n) => {
	let errorMessage = `Invalid parameter: ${JSON.stringify(n)}`;
	console.log(errorMessage);
	return errorMessage;
}






//PREVIOUS INTERATIONS

//Attempt 1:
// In this approach I tried to solve the task by testing for each possible case and push a string 
// for each case by chaining a long if/else if statement.

// if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
		// 	array.push('yu-gi-oh')
		// } else if(i % 2 === 0 && i % 3 === 0) {
		// 	array.push('yu-gi')
		// } else if(i % 2 === 0 && i % 5 === 0) {
		// 	array.push('yu-oh')
		// } else if(i % 3 === 0 && i % 5 === 0) {
		// 	array.push('gi-oh')
		// } else if(i % 2 === 0) {
		// 	array.push('yu')
		// } else if(i % 3 === 0) {
		// 	array.push('gi')
		// } else if(i % 5 === 0) {
		// 	array.push('oh')
		// } else {
		// 	array.push(i)
		// }