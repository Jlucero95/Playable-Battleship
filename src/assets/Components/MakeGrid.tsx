import { GridData } from "./GridData.tsx";
import { FindCellId } from "./FindCellId.tsx";
import { CheckPlacement } from "./CheckPlacement.tsx";
import { ships } from "./ShipData.tsx";

export default function MakeGrid() {
	const board: string[] = [];

	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			board.push(`${GridData[i]}${j + 1}`);
		}
	}

	return (
		<div className="grid">
			{board.map((cells) => {
				return (
					<div
						className={"grid-cell"}
						id={cells}
						key={cells}
						onClick={() => {
							FindCellId(cells);
						}}
					>
						<h1>{cells.slice(0, board.length)}</h1>
					</div>
				);
			})}
		</div>
	);
}

CheckPlacement(ships);
