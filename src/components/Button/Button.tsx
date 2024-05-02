import { useMemo, useRef } from "react";
import gsap from "gsap";

import useStore from "../../store/store";
import { Play } from "../Icons";

const PlayButton = () => {
	const buttonRef = useRef<HTMLDivElement>(null);
	const setIsMusicPlaying = useStore((state) => state.setIsMusicPlaying);

	const onClickHandler = useMemo(
		() => () => {
			gsap.to(buttonRef.current, {
				opacity: 0,
				duration: 1,
				ease: "power2.in",
				onComplete: () => {
					gsap.set(buttonRef.current, {
						display: "none",
					});
					setIsMusicPlaying(true);
				},
			});
		},
		[setIsMusicPlaying]
	);

	return (
		<div ref={buttonRef} id="button-container" onClick={onClickHandler}>
			<button id="play-btn">
				<Play />
				<span>LOSE CONTROL</span>
			</button>
		</div>
	);
};

export default PlayButton;
