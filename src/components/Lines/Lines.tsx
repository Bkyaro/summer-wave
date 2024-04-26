import { useMemo, useRef } from "react";
import { Center } from "@react-three/drei";
import * as THREE from "three";

import vertexShader from "../../shaders/line/vertex.glsl";
import fragmentShader from "../../shaders/line/fragment.glsl";

const Lines = () => {
	const linesRef = useRef(null!);

	const linesCount = useMemo(() => 1, []);
	const linesList = useMemo(() => [...new Array(linesCount)], [linesCount]);

	return (
		<>
			<Center>
				<group ref={linesRef}>
					{linesList.map((_, index) => {
						return (
							<mesh position-z={-index * 0.095}>
								<boxGeometry args={[3, 1, 1, 3, 1, 1]} />
								<shaderMaterial
									vertexShader={vertexShader}
									fragmentShader={fragmentShader}
									wireframe
								/>
							</mesh>
						);
					})}
				</group>
			</Center>
		</>
	);
};

export default Lines;
