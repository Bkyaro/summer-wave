import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import Texts from "./components/Texts";
import { Leva } from "leva"; // 引入 useControls 钩子
import { useDebugPanel } from "./hooks";

function App() {
	const isDebugPanelEnable = useDebugPanel();

	return (
		<>
			<Leva flat titleBar={true} hidden={!isDebugPanelEnable} collapsed />
			<Canvas
				camera={{
					fov: 55,
					near: 0.1,
					far: 1000,
					position: [0, 0, -100], // 使用控件中定义的值来更新相机位置
				}}
			>
				<Scene />
			</Canvas>
			<Texts />
		</>
	);
}

export default App;
