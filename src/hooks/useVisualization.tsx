import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";

import useStore from "../store";

const useVisualization = (linesRef: any) => {
	const isMusicPlaying = useStore((state) => state.isMusicPlaying);
	const fog = useThree((three) => three.scene.fog);
	const camera = useThree((three) => three.camera);

	// camera initail stage
	useEffect(() => {
		gsap.to(camera.position, {
			x: 0,
			y: 0,
			z: -20,
			duration: 3.5,
			// ease: "back.out",
		});
	}, []);

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

				linesRef.current?.children.forEach(
					(group: any, index: number) => {
						gsap.to(group.position, {
							z: -index * gap,
							duration: 3,
							ease: "power1.inOut",
						});
					}
				);

				gsap.to(fog, {
					density: 0.01,
					duration: 2.5,
					ease: "power1.inOut",
				});

				gsap.to(camera.position, {
					x: -1,
					y: 1.5,
					z: -gap * linesCount + 5,
					duration: 2.5,
					ease: "power1.inOut",
					onComplete: () => {
						gsap.to(camera.position, {
							x: -0.5,
							y: 2,
							z: -10,
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
