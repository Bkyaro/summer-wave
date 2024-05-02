import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene/Scene";
import PlayButton from "./components/Button/Button";
import { Leva } from "leva";
import { useDebugPanel } from "./hooks";

function App() {
	const isDebugPanelEnbale = useDebugPanel();
	return (
		<>
			<Leva flat titleBar={true} hidden={!isDebugPanelEnbale} collapsed />
			<Canvas
				camera={{
					fov: 55,
					near: 0.1,
					far: 1000,
					position: [0, 0, -20],
				}}
			>
				<Scene></Scene>
			</Canvas>

			<PlayButton />
		</>
	);
}

export default App;
