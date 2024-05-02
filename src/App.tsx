import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene/Scene";
import PlayButton from "./components/Button/Button";
import { Leva } from "leva";

function App() {
	return (
		<>
			<Leva
				flat
				titleBar={true}
				hidden={false}
				collapsed
			/>
			<Canvas
				camera={{
					fov: 55,
					near: 0.1,
					far: 1000,
					position: [0, 4, -18],
				}}
			>
				<Scene></Scene>
			</Canvas>

			<PlayButton />
		</>
	);
}

export default App;
