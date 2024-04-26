import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene/Scene";

function App() {
	return (
		<Canvas camera={{
      fov: 45,
      near: 0.1,
      far: 300,
      position: [0, 4, -4]
    }}>
			<Scene></Scene>
		</Canvas>
	);
}

export default App;
