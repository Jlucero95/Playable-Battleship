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
			{board.map((cellName) => {
				return (
					<div className="outer-grid-cell">
						<div
							className={"grid-cell"}
							id={cellName}
							key={cellName}
							onClick={() => {
								FindCellId(cellName);
							}}
						></div>
					</div>
				);
			})}
		</div>
	);
}

CheckPlacement(ships);
