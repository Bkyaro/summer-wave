import { useMemo, useRef } from "react";
import { Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import Line from "../Line/Line";

const Lines = () => {
	const linesRef = useRef(null!);

	const linesCount = useMemo(() => 69, []);
	const linesList = useMemo(() => [...new Array(linesCount)], [linesCount]);

	useFrame((state) => {
		const time = state.clock.getElapsedTime();
		const lines = linesRef.current;
		if (!lines) return;

		lines.children.forEach((line) => {
			line.children.forEach((lineOrPlane) => {
				lineOrPlane.material.uniforms.uTime.value = time;
			});
		});
	});

	return (
		<Center>
			<group ref={linesRef}>
				<axesHelper args={[5]}></axesHelper>
				{linesList.map((_, index) => {
					return <Line index={index} />;
				})}
			</group>
		</Center>
	);
};

export default Lines;
