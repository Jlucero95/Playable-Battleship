import { GridData } from "./GridData";
import { ships } from "./ShipData";

function grid() {
	const board: string[][] = [];
	for (let i = 0; i < 10; i++) {
		board.push([]);
		for (let j = 0; j < 10; j++) {
			board[i].push(`${GridData[i]}${j + 1}`);
		}
	}
	return board;
}

const coordinates = grid();

let direction = "Horizontal";

export const PositionShips = (shipLength: number) => {
	const newShip: string[] = [];
	const randomRow = coordinates[Math.floor(Math.random() * coordinates.length)];

	const randomCoordinate =
		randomRow[Math.floor(Math.random() * randomRow.length)];

	const [letter, ...number] = randomCoordinate;

	const coordinateNumber = parseInt(number.join(""));

	if (coordinateNumber + shipLength <= GridData.length) {
		for (let i = 0; i < shipLength; i++) {
			newShip.push(`${letter}${coordinateNumber + i}`);
		}
	} else {
		direction = "Vertical";
	}
	if (
		direction === "Vertical" &&
		coordinateNumber + shipLength > GridData.length
	) {
		for (let i = 0; i < shipLength; i++) {
			if (letter === "undefined") {
				PositionShips(shipLength);
			} else
				newShip.push(
					`${GridData[letter.indexOf(letter) + i]}${coordinateNumber}`
				);
		}
	}

	ships.push(newShip);
};
