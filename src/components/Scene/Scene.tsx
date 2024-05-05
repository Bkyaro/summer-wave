import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Lines from "../Lines";
import Audio from "../../components/Audio";
import { useCustomControls, useCursor, useDebugPanel } from "../../hooks";
import Loader from "../../components/Loader";
import { Perf } from "r3f-perf";

const Scene = () => {
	const controls = useCustomControls();
	const isDebugPenal = useDebugPanel();
	useCursor();

	return (
		<>
			<Suspense fallback={<Loader />}>
				<color
					args={[controls.scene.fogAndBg]}
					attach="background"
				></color>
				{isDebugPenal && (
					<Perf position="top-left" showGraph={false} minimal />
				)}
				<OrbitControls />
				<fogExp2
					attach="fog"
					color={controls.scene.fogAndBg}
					density={controls.scene.fogDensity / 100}
				/>
				<Audio />
				<Lines />
			</Suspense>
		</>
	);
};

export default Scene;
