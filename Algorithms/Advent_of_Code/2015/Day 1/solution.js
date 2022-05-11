
const fs = require('fs');

// -- PART ONE --
//Getting Santa's destination
function checkSantaDestination () {
	console.time('execution_time');
	const santaData = fs.readFileSync('./puzzle_input.txt', (error) => {
		console.log(error);
	})
	const data = santaData.toString();
	let floor = 0;
	for(let i = 0; i < data.length; i++) {
		if (data[i] === '(') {
			floor += 1;
		} else {
			floor -= 1;
		}
	}
	console.timeEnd('execution_time');
	console.log('Destination Floor:', floor);
}

checkSantaDestination();


// -- PART TWO --
// Getting the position of  the first move to the basement
function checkFirstMoveToBasement () {
	console.time('execution_time');
	const santaData = fs.readFileSync('./puzzle_input.txt', (error) => {
		console.log(error);
	})
	const data = santaData.toString();
	let floor = 0;
	let position = 0;
	for(let i = 0; i < data.length; i++) {
		if (data[i] === '(') {
			floor += 1;
		} else {
			if (floor < 0) {
				position = i;
				// return position;
				break;
			}
			floor -= 1;
		}
	}
	console.timeEnd('execution_time');
	console.log('First Move to the Basement was at position:', position);
}

checkFirstMoveToBasement();