import { useMemo, useRef } from "react";
import { Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { analyserRef } from "../Audio/Audio";
import { map } from "../../utils/map";

import Line from "../Line/Line";
import useStore from "../../store/store";

const Lines = () => {
	const linesRef = useRef(null!);
	const isMusicPlaying = useStore((state) => state.isMusicPlaying);

	const linesCount = useMemo(() => 69, []);
	const linesList = useMemo(() => [...new Array(linesCount)], [linesCount]);

	useFrame((state) => {
		const time = state.clock.getElapsedTime();
		const lines = linesRef.current;
		if (!lines) return;

		const frequencies = analyserRef.current?.getFrequencyData();

		lines.children.forEach((line, index) => {
			line.children.forEach((lineOrPlane) => {
				lineOrPlane.material.uniforms.uTime.value = time;

				if (isMusicPlaying) {
					const frequency = frequencies?.[index];
					const strength = map(frequency, 0, 255, 0, 1);
					lineOrPlane.material.uniforms.uStrength.value = strength;
				}
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
