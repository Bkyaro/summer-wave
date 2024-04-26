import { OrbitControls } from "@react-three/drei";

const Scene = () => {
	return (
		<>
			{/* scene background: new THREE.Color("#021119") */}
			<color args={["#021119"]} attach="background"></color>
			<OrbitControls />
			<mesh>
				<boxGeometry />
				<meshStandardMaterial />
			</mesh>
		</>
	);
};

export default Scene;
