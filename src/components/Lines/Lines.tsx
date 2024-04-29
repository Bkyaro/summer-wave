import { useMemo, useRef } from "react";
import { Center } from "@react-three/drei";

import Line from "../Line/Line";

const Lines = () => {
	const linesRef = useRef(null!);

	const linesCount = useMemo(() => 69, []);
	const linesList = useMemo(() => [...new Array(linesCount)], [linesCount]);

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
