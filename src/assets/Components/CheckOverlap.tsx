import { PositionShips } from "./PositionShips";
import { ships } from "./ShipData";

function checkOverlap(shipCoords: string[], usedCoords: Set<string>) {
	for (const coord of shipCoords) {
		if (usedCoords.has(coord)) {
			return true;
		}
	}
	return false;
}

function checkPlacement(arr: string[][]) {
	const usedCoordinates = new Set<string>();

	while (arr.flat().length < 17) {
		arr.length = 0;
		PositionShips(2);
		PositionShips(3);
		PositionShips(3);
		PositionShips(4);
		PositionShips(5);
		let overlaps = false;
		for (const ship of arr) {
			if (checkOverlap(ship, usedCoordinates)) {
				overlaps = true;
				break;
			} else {
				for (const coordinate of ship) {
					usedCoordinates.add(coordinate);
				}
			}
		}
		if (overlaps) {
			arr.length = 0;
			usedCoordinates.clear();
		}
	}

	console.log(ships);
}
checkPlacement(ships);
