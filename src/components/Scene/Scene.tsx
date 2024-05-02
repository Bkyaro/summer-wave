import { OrbitControls } from "@react-three/drei";
import Lines from "../Lines/Lines";
import Audio from "../../components/Audio/Audio";
import { useCustomControls } from "../../hooks";

const Scene = () => {
	const controls = useCustomControls();

	return (
		<>
			{/* scene background: new THREE.Color("#021119") */}
			<color args={[controls.scene.fogAndBg]} attach="background"></color>
			<OrbitControls />
			<fogExp2
				attach="fog"
				color={controls.scene.fogAndBg}
				density={controls.scene.fogDensity / 100}
			/>
			<Audio />
			<Lines />
		</>
	);
};

export default Scene;
