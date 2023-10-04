export function CheckOverlap(
	shipCoordinate: string[],
	usedCoordinate: Set<string>
) {
	for (const coord of shipCoordinate) {
		if (usedCoordinate.has(coord)) {
			return true;
		}
	}
	return false;
}
