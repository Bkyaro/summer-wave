import { useMemo, useRef } from "react";
import { Center } from "@react-three/drei";

import vertexShader from "../../shaders/line/vertex.glsl";
import fragmentShader from "../../shaders/line/fragment.glsl";

const Lines = () => {
	const linesRef = useRef(null!);

	const linesCount = useMemo(() => 69, []);
	const linesList = useMemo(() => [...new Array(linesCount)], [linesCount]);

	return (
		<Center>
			<group ref={linesRef}>
				<axesHelper args={[5]}></axesHelper>
				{linesList.map((_, index) => {
					return (
						<mesh position-z={index * 0.095}>
							<boxGeometry args={[5, 0.03, 0.02, 128, 1, 1]} />

							<shaderMaterial
								vertexShader={vertexShader}
								fragmentShader={fragmentShader}
								// wireframe
							/>
						</mesh>
					);
				})}
			</group>
		</Center>
	);
};

export default Lines;
