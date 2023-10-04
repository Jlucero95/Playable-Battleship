import { CheckOverlap } from "./CheckOverlap";
import { PositionShips } from "./PositionShips";
import { ships } from "./ShipData";

export function CheckPlacement(arr: string[][]) {
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
			if (CheckOverlap(ship, usedCoordinates)) {
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

	console.log(ships.flat());
}
CheckPlacement(ships);
