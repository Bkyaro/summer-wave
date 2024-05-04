import gsap from "gsap";
const useCursorHover = () => {
	const cursor = document.getElementById("cursor");

	const onMouseEnterText = () => {
		cursor &&
			gsap.to(cursor, {
				background: "rgba(255,255,255,1)",
				scale: 0.5,
				duration: 0.28,
				ease: "back",
			});
	};
	const onMouseLeaveText = () => {
		cursor &&
			gsap.to(cursor, {
				scale: 1,
				background: "rgba(255,255,255,0)",
				duration: 0.28,
				ease: "back",
			});
	};
	const onMouseEnterLink = () => {
		cursor &&
			gsap.to(cursor, {
				scale: 0.2,
				background: "rgba(255,255,255,1)",
				duration: 0.28,
				ease: "back",
			});
	};
	const onMouseLeaveLink = () => {
		cursor &&
			gsap.to(cursor, {
				scale: 1,
				background: "rgba(255,255,255,0)",
				duration: 0.28,
				ease: "back",
			});
	};

	return {
		text: {
			onMouseEnter: () => {
				onMouseEnterText();
			},
			onMouseLeave: () => {
				onMouseLeaveText();
			},
		},
		link: {
			onMouseEnter: () => {
				onMouseEnterLink();
			},
			onMouseLeave: () => {
				onMouseLeaveLink();
			},
		},
	};
};

export default useCursorHover;
