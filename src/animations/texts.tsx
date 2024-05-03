import { useEffect, useState } from "react";
import useStore from "../store";
import gsap from "gsap";

const useTextsAnimation = (
	buttonRef: HTMLDivElement,
	titleRef: HTMLHeadingElement,
	subTitleRef: HTMLParagraphElement,
	footerRef: HTMLDivElement
) => {
	const isMusicPlaying = useStore((state) => state.isMusicPlaying);
	const [mimicRender, setMimicRender] = useState(0);

	useEffect(() => {
		if (!titleRef || !subTitleRef || !footerRef || !buttonRef) {
			setTimeout(() => {
				setMimicRender((count) => count + 1);
			}, 1);
			return;
		}

		console.log("running...", isMusicPlaying);
		console.log("titleRef", titleRef);
		if (isMusicPlaying) {
			gsap.to([titleRef, subTitleRef, footerRef, buttonRef], {
				opacity: 0,
				duration: 1,
				ease: "power2.out",
			});
		} else {
			const delay = 1.5;
			// title animation
			gsap.set(titleRef, { display: "block", y: "-300%" });
			gsap.to(titleRef, {
				opacity: 1,
				duration: 2,
				ease: "power2.in",
				delay,
			});
			gsap.to(titleRef, {
				y: 0,
				duration: 2,
				ease: "power2.out",
				delay,
			});
			// subtitle animiation
			gsap.set(subTitleRef, { display: "block", y: "-250%" });
			gsap.to(subTitleRef, {
				opacity: 0.9,
				duration: 2,
				ease: "power2.in",
				delay: delay + 0.5,
			});
			gsap.to(subTitleRef, {
				y: 40,
				duration: 2,
				ease: "power2.out",
				delay: delay + 0.5,
			});
			// button animiation
			gsap.set(buttonRef, { display: "flex", y: "300%" });
			gsap.to(buttonRef, {
				opacity: 1,
				duration: 2,
				ease: "power2.in",
				delay: delay + 0.5,
			});
			gsap.to(buttonRef, {
				y: 0,
				duration: 2,
				ease: "power2.out",
				delay: delay + 0.5,
			});
			// footer animiation
			gsap.to(footerRef, {
				opacity: 1,
				duration: 2,
				ease: "power2.in",
				delay: delay + 1,
			});
		}
	}, [isMusicPlaying, mimicRender]);
};

export default useTextsAnimation;
