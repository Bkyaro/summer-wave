import { useMemo, useRef } from "react";
import gsap from "gsap";

import useStore from "../../store";
import { Play } from "../Icons";
import useTextsAnimation from "../../animations";

const Texts = () => {
	const buttonRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const subTitleRef = useRef<HTMLParagraphElement>(null);
	const footerRef = useRef<HTMLDivElement>(null);
	const setIsMusicPlaying = useStore((state) => state.setIsMusicPlaying);

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
			<div id="intro">
				<h1 className="title" ref={titleRef}>
					SUMMER WAVE
				</h1>
				<span className="sub-title" ref={subTitleRef}>
					Once you delve into WebGL, it's as deep as the ocean.
				</span>
			</div>

			<footer ref={footerRef}>
				<div id="clarify">
					<span>* Music by NABI not me.</span>
				</div>
				<div id="source">
					<span>
						* mimic project, original by{" "}
						<a
							href="https://pouria.dev"
							title="pouria.dev"
							target="_blank"
						>
							pouria.dev
						</a>
					</span>
				</div>
			</footer>

			<div ref={buttonRef} id="button-container" onClick={onClickHandler}>
				<button id="play-btn">
					<Play />
					<span>WAVEY</span>
				</button>
			</div>
		</>
	);
};

export default Texts;
