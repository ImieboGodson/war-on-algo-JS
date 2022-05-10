

// This is all you need to solve this question
let hash = "#";

while (hash.length <= 7) {
	console.log(hash);
	hash += "#";
}

// I DECIDED TO COMMENT OUT THE APPROACH BELOW BECASUE I FEEL THE ABOVE APPROACH SOLVES THE PRIMARY TARGET.

//In this approach, I decided to wrap it in a function to allow me make the limit value changeable

// const loopATriangle = (limit) => {
// 	let hash = "#";

// 	while (hash.length <= limit) {
// 		console.log(hash);
// 		hash += "#";
// 	}
// }

// loopATriangle(7);