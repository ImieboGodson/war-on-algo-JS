const fs = require('fs');

// Reads the data from the puzzle_input.txt file.
const getData = fs.readFileSync('./puzzle_input.txt', (error) => {
	console.log(error);
})

// Encodes the data gotten from the puzzle_input.txt
const dataToString = getData.toString();

// Splits the items in the data gotten into an array so that we can easily move through the data.
const dataArray = dataToString.split('\r\n');

let totalSquareFeetArray = [];

// Calculates the total surface area for each of the wrapppings
function calculateTotalSurfaceArea (l, w, h) {
		let rectangleOne = l*w;
		let rectangleTwo = w*h;
		let rectangleThree = h*l;

		let min = Math.min(rectangleOne, rectangleTwo, rectangleThree);
		let area = Number((2*rectangleOne) + (2*rectangleTwo)  + (2*rectangleThree));
		let totalSquareFeet = area + min;

		return totalSquareFeet;
}

// Sums the total of the square feets from each of the wrappings
function sumTotal (array){
	let finalTotal = 0
	for (let i = 0; i < array.length; i++) {
		finalTotal += array[i];
	}
	return finalTotal;
};


// Goes through each of the dimensions given, splits it into an array 
// and passes the values to the totalSquareFeetArray function to get 
// the total surface area of each of the wrappings.
dataArray.forEach((item)=> {
	let values = item.split('x');
	
	let length = values[0];
	let width = values[1];
	let height = values[2];
	
	totalSquareFeetArray.push(calculateTotalSurfaceArea(length, width, height));
});

console.log('Total Square Feet:', sumTotal(totalSquareFeetArray));