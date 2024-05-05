import { useEffect } from "react";
import { gsap } from "gsap";

const useCursor = () => {
	const cursor = document.getElementById("cursor");
	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		let cursorFocus: gsap.core.Tween;

		const onMouseMove = (event: MouseEvent) => {
			cursor &&
				gsap.to(cursor, {
					x: event.clientX,
					y: event.clientY,
					duration: 0.1,
					ease: "sine.out",
				});
		};

		const onMouseDown = (event: MouseEvent) => {
			if (event.target && (event.target as Element).tagName == "CANVAS") {
				cursorFocus = gsap.to(cursor, {
					scale: 0.6,
					boxShadow: "inset 0px 0px 10px 2px #fff",
					duration: 0.35,
				});
			}
		};

		const onMouseUp = (event: MouseEvent) => {
			gsap.to(cursor, {
				boxShadow: "none",
				duration: 0.35,
				ease: "sine.out",
			});
			if (
				event.target &&
				(event.target as Element).tagName === "CANVAS"
			) {
				gsap.to(cursor, {
					scale: 1,
					boxShadow: "none",
					duration: 0.35,
					ease: "sine.out",
				});
			}
		};

		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mousedown", onMouseDown);
		window.addEventListener("mouseup", onMouseUp);

		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mousedown", onMouseDown);
			window.removeEventListener("mouseup", onMouseUp);
		};
	}, []);
};

export default useCursor;
