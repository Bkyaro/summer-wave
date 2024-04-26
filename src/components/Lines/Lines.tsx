import { useEffect, useRef } from "react";
import * as THREE from "three";

const Lines = () => {
	const linesRef = useRef(null!);

	useEffect(() => {
		if (!linesRef.current) return;
		const line = linesRef.current as THREE.Line;
		const geometry = line.geometry;
		const points = [
			new THREE.Vector3(-1, 0, 0),
			new THREE.Vector3(1, 0, 1),
		];
		geometry.setFromPoints(points);
	}, []);
	return (
		<>
			<line ref={linesRef}>
				<bufferGeometry />
				<lineBasicMaterial />
			</line>
		</>
	);
};

export default Lines;
