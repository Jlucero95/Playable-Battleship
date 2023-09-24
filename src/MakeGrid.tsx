import { useState } from "react";
import { GridData } from "./GridAndShipData";

export default function MakeGrid() {
	const [background, setBackground] = useState("");
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
						className={`grid-cell ${background}`}
						id={cells}
						key={cells}
						onClick={() => {
							setBackground("background-green");
						}}
					>
						<h1>{cells.slice(0, board.length)}</h1>
					</div>
				);
			})}
		</div>
	);
}
