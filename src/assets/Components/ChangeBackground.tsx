import { hit } from "./HitData";

export const ChangeBackground = (id: string) => {
	const cells = document.getElementById(`${id}`);

	return hit.includes(id)
		? cells?.classList.add("background-green")
		: cells?.classList.add("background-red");
};
