import { ChangeBackground } from "./ChangeBackground";
import { hit } from "./HitData";
import { ships } from "./ShipData";

export const FindCellId = (id: string) => {
	const fleetCoordinates = ships.flat();
	if (fleetCoordinates.includes(id)) {
		hit.push(id);
	}

	return ChangeBackground(id);
};
