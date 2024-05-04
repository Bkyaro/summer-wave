import { useMemo, useRef } from "react";
import gsap from "gsap";

import useStore from "../../store";
import { Play } from "../Icons";
import useTextsAnimation from "../../animations";
import { useIsMobile, useCursorHover } from "../../hooks";

const Texts = () => {
	const buttonRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const subTitleRef = useRef<HTMLParagraphElement>(null);
	const footerRef = useRef<HTMLDivElement>(null);
	const setIsMusicPlaying = useStore((state) => state.setIsMusicPlaying);
	const isMobile = useIsMobile();
	const cursorHover = useCursorHover();

	useTextsAnimation(
		buttonRef.current!,
		titleRef.current!,
		subTitleRef.current!,
		footerRef.current!
	);

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
		<>
			{/* cursor effect */}
			{!isMobile && <div id="cursor" />}

			{/* initial State Texts */}
			<div id="intro">
				<h1 className="title" ref={titleRef} {...cursorHover.text}>
					SUMMER WAVE
				</h1>
				<span
					className="sub-title"
					ref={subTitleRef}
					{...cursorHover.text}
				>
					Once you delve into WebGL, it's as deep as the ocean.
				</span>
			</div>
			<footer ref={footerRef}>
				<div id="clarify">
					<span {...cursorHover.text}>* Music by NABI not me.</span>
				</div>
				<div id="source">
					<span {...cursorHover.text}>
						* mimic project, original by{" "}
						<a
							href="https://pouria.dev"
							title="pouria.dev"
							target="_blank"
							{...cursorHover.link}
						>
							pouria.dev
						</a>
					</span>
				</div>
			</footer>

			{/* start button */}
			<div ref={buttonRef} id="button-container">
				<button
					id="play-btn"
					{...cursorHover.link}
					onClick={onClickHandler}
				>
					<Play />
					<span>WAVEY</span>
				</button>
			</div>
		</>
	);
};

export default Texts;
