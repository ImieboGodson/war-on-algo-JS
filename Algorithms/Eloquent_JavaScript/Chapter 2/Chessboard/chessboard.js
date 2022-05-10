const createChessBoard = (width,height) => {
	console.time('execution_time');
	let chessString = "";

	for (let columnCount = 0; columnCount < height; columnCount++) {
		for (let rowCount = 0; rowCount < width; rowCount++) {
			let row = "";
			if (columnCount % 2 === 0) {
				if (rowCount % 2 === 0) {
					row += " ";
				} else {
					row += "#";
				}
			} else {
				if (rowCount % 2 === 0) {
					row += "#";
				} else {
					row += " ";
				}
			}
				
			chessString += row;
			}
		chessString = chessString + "\n";
	}

	console.log(chessString);
	console.timeEnd('execution_time');
}

createChessBoard(8, 8);