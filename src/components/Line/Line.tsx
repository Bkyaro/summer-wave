import { useMemo, FC } from "react";
import * as THREE from "three";

import vertexShader from "../../shaders/line/vertex.glsl";
import fragmentShader from "../../shaders/line/fragment.glsl";
import planeShader from "../../shaders/plane/fragment.glsl";

const lineGeometry = new THREE.BoxGeometry(5, 0.03, 0.02, 128, 1, 1);
const planeGerometry = new THREE.PlaneGeometry(5, 1.5, 128, 1);

interface Props {
	index: number;
}

const Line: FC<Props> = (props) => {
	const uniforms = useMemo(() => {
		return {
			uOffset: { value: props.index * 11 },
		};
	}, [props.index]);

	return (
		<>
			<mesh position-z={-props.index * 0.095} geometry={lineGeometry}>
				<shaderMaterial
					vertexShader={vertexShader}
					fragmentShader={fragmentShader}
					uniforms={uniforms}
				/>
			</mesh>
			<mesh
				position-z={-props.index * 0.095}
				position-y={-0.75}
				geometry={planeGerometry}
			>
				<shaderMaterial
					vertexShader={vertexShader}
					fragmentShader={planeShader}
					uniforms={uniforms}
					side={THREE.DoubleSide}
				/>
			</mesh>
		</>
	);
};

export default Line;
