import { useMemo, FC } from "react";
import * as THREE from "three";

import vertexShader from "../../shaders/line/line.vertex.glsl";
import fragmentShader from "../../shaders/line/line.fragment.glsl";
import planeShader from "../../shaders/plane/plane.fragment.glsl";
import { useCustomControls } from "../../hooks";

const lineGeometry = new THREE.BoxGeometry(5, 0.03, 0.02, 128, 1, 1);
const planeGerometry = new THREE.PlaneGeometry(5, 0.8, 128, 1);

interface Props {
	index: number;
}

const Line: FC<Props> = (props) => {
	const controls = useCustomControls();

	const uniforms = useMemo(() => {
		return {
			uOffset: { value: props.index * 11 },
			uTime: { value: 0 },
			uStrength: { value: 1 },
			...THREE.UniformsLib["fog"],
		};
	}, [props.index]);

	return (
		<group position-z={-props.index * controls.line.gap}>
			<mesh geometry={lineGeometry}>
				<shaderMaterial
					vertexShader={vertexShader}
					fragmentShader={fragmentShader}
					uniforms={uniforms}
					fog
				/>
			</mesh>
			<mesh position-y={-0.42} geometry={planeGerometry}>
				<shaderMaterial
					vertexShader={vertexShader}
					fragmentShader={planeShader}
					uniforms={uniforms}
					side={THREE.DoubleSide}
					fog
				/>
			</mesh>
		</group>
	);
};

export default Line;
