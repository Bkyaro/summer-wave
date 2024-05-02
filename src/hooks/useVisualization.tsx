import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";

import useStore from "../store/store";

const useVisualization = (linesRef) => {
	const isMusicPlaying = useStore((state) => state.isMusicPlaying);
	const fog = useThree((three) => three.scene.fog);
	const camera = useThree((three) => three.camera);

	useEffect(() => {
		if (!isMusicPlaying) return;

		gsap.to(camera.position, {
			y: 7,
			z: -8,
			duration: 15.5,
			ease: "none",
			delay: 2,
			onComplete: () => {
				const gap = 2.8;
				const linesCount = linesRef.current!.children.length;

				linesRef.current?.children.forEach((group, index) => {
					gsap.to(group.position, {
						z: -index * gap,
						duration: 3,
						ease: "power1.inOut",
					});
				});

				gsap.to(fog, {
					density: 0.01,
					duratioN: 3,
					ease: "power1.inOut",
				});

				gsap.to(camera.position, {
					x: -1,
					y: 1.5,
					z: -gap * linesCount + 5,
					duration: 3,
					ease: "power1.inOut",
					onComplete: () => {
						gsap.to(camera.position, {
							x: -0.5,
							y: 2,
							z: -30,
							duration: 18,
							ease: "sine.out",
						});
					},
				});
			},
		});
	}, [isMusicPlaying]);
};

export default useVisualization;
