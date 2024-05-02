import { useMemo, useRef } from "react";
import { Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { analyserRef } from "../Audio/Audio";
import { map, lerp } from "../../utils/utils";
import { useCustomControls } from "../../hooks";

import Line from "../Line/Line";
import useStore from "../../store/store";

const Lines = () => {
	// debug panel values
	const controls = useCustomControls();

	const linesRef = useRef(null!);
	const isMusicPlaying = useStore((state) => state.isMusicPlaying);

	const linesCount = useMemo(
		() => controls.line.count,
		[controls.line.count]
	);
	const linesList = useMemo(() => [...new Array(linesCount)], [linesCount]);

	useFrame((state) => {
		const time = state.clock.getElapsedTime();
		const lines = linesRef.current;
		if (!lines) return;

		const frequencies = analyserRef.current?.getFrequencyData();

		lines.children.forEach((line, index) => {
			line.children.forEach((lineOrPlane) => {
				const uniforms = lineOrPlane.material.uniforms;
				uniforms.uTime.value = time;

				if (isMusicPlaying) {
					const frequency = frequencies?.[index];
					const currentStrength = uniforms.uStrength.value;
					const nextStrength = map(frequency, 0, 255, 0, 1);
					lineOrPlane.material.uniforms.uStrength.value = lerp(
						currentStrength,
						nextStrength,
						0.25
					);
				}
			});
		});
	});

	return (
		<Center>
			<group ref={linesRef}>
				{controls.axes.showAxes && (
					<axesHelper args={[controls.axes.AxesLength]} />
				)}
				{linesList.map((_, index) => {
					return <Line index={index} />;
				})}
			</group>
		</Center>
	);
};

export default Lines;
