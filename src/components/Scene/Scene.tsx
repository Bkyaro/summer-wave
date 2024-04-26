import { OrbitControls } from "@react-three/drei";
import Lines from "../Lines/Lines";

const Scene = () => {
	return (
		<>
			{/* scene background: new THREE.Color("#021119") */}
			<color args={["#021119"]} attach="background"></color>
			<OrbitControls />
			<Lines />
		</>
	);
};

export default Scene;
