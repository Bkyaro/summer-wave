import { useEffect } from "react";

import gsap from "gsap";

const useCursor = () => {
	const cursor = document.getElementById("cursor");
	useEffect(() => {
		const onMouseMove = (event: MouseEvent) => {
			cursor &&
				gsap.to(cursor, {
					x: event.clientX,
					y: event.clientY,
					duration: 0.28,
					ease: "sine.out",
				});
		};

		window.addEventListener("mousemove", onMouseMove);
		return () => {
			window.removeEventListener("mousemove", onMouseMove);
		};
	}, []);
};

export default useCursor;
