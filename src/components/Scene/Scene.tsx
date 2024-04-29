import { OrbitControls } from "@react-three/drei";
import Lines from "../Lines/Lines";

const Scene = () => {
	return (
		<>
			{/* scene background: new THREE.Color("#021119") */}
			<color args={["#021119"]} attach="background"></color>
			<OrbitControls />
			<fogExp2 attach="fog" color="#021119" density={0.035} />
			<Lines />
		</>
	);
};

export default Scene;
