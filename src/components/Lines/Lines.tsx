import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const Lines = () => {
	const linesRef = useRef<{ children: THREE.Line[] }>(null!);

	useEffect(() => {
		if (!linesRef.current) return;
		linesRef.current.children.forEach((line) => {
			const geometry = line.geometry;
			const points = [
				new THREE.Vector3(-1, 0, 0),
				new THREE.Vector3(1, 0, 0),
			];
			geometry.setFromPoints(points);
		});
	}, []);

	const linesCount = useMemo(() => 69, []);
	const linesList = useMemo(() => [...new Array(linesCount)], [linesCount]);

	return (
		<>
			<group ref={linesRef} position-z={-linesCount / 20 / 2}>
				{linesList.map((_, index) => {
					return (
						<line position-z={index / 20}>
							<bufferGeometry />
							<lineBasicMaterial />
						</line>
					);
				})}
			</group>
		</>
	);
};

export default Lines;
