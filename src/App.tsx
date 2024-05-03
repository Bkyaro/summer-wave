import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import Texts from "./components/Texts";
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

			<Texts />
		</>
	);
}

export default App;
