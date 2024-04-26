import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene/Scene";

function App() {
	return (
		<Canvas>
			<Scene></Scene>
		</Canvas>
	);
}

export default App;
