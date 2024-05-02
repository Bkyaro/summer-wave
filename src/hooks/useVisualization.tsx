import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";

import useStore from "../store/store";

const useVisualization = () => {
	const isMusicPlaying = useStore((state) => state.isMusicPlaying);
	const camera = useThree((three) => three.camera);

	useEffect(() => {
		if (!isMusicPlaying) return;

		gsap.to(camera.position, {
			y: 7,
			z: -8,
			duration: 18,
			ease: "none",
			delay: 1.5,
		});
	}, [isMusicPlaying]);
};

export default useVisualization;
