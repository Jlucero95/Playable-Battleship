import "./App.css";
import MakeGrid from "./assets/Components/MakeGrid";

function App() {
	return (
		<>
			<div className="top-numbers">
				<h3>1</h3>
				<h3>2</h3>
				<h3>3</h3>
				<h3>4</h3>
				<h3>5</h3>
				<h3>6</h3>
				<h3>7</h3>
				<h3>8</h3>
				<h3>9</h3>
				<h3>10</h3>
			</div>

			<div className="left-letters">
				<h3>A</h3>
				<h3>B</h3>
				<h3>C</h3>
				<h3>D</h3>
				<h3>E</h3>
				<h3>F</h3>
				<h3>G</h3>
				<h3>H</h3>
				<h3>I</h3>
				<h3>J</h3>
			</div>
			<MakeGrid />
			<div className="right-letters">
				<h3>A</h3>
				<h3>B</h3>
				<h3>C</h3>
				<h3>D</h3>
				<h3>E</h3>
				<h3>F</h3>
				<h3>G</h3>
				<h3>H</h3>
				<h3>I</h3>
				<h3>J</h3>
			</div>
			<div className="bottom-numbers">
				<h3>1</h3>
				<h3>2</h3>
				<h3>3</h3>
				<h3>4</h3>
				<h3>5</h3>
				<h3>6</h3>
				<h3>7</h3>
				<h3>8</h3>
				<h3>9</h3>
				<h3>10</h3>
			</div>
		</>
	);
}

export default App;
