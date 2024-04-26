import { OrbitControls } from "@react-three/drei";

const Scene = () => {
	return (
		<>
			<OrbitControls />
			<mesh>
				<boxGeometry />
				<meshStandardMaterial />
			</mesh>
		</>
	);
};

export default Scene;
