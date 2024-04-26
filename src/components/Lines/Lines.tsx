import { useMemo, useRef } from "react";
import { Center } from "@react-three/drei";
import * as THREE from "three";

const Lines = () => {
	const linesRef = useRef(null!);

	const linesCount = useMemo(() => 69, []);
	const linesList = useMemo(() => [...new Array(linesCount)], [linesCount]);

	return (
		<>
			<Center>
				<group ref={linesRef}>
					{linesList.map((_, index) => {
						return (
							<mesh position-z={-index * 0.095}>
								<boxGeometry args={[5, 0.03, 0.02]} />
								<meshBasicMaterial />
							</mesh>
						);
					})}
				</group>
			</Center>
		</>
	);
};

export default Lines;
