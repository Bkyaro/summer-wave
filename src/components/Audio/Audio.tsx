import { useEffect, useRef } from "react";
import { PositionalAudio } from "@react-three/drei";
import * as THREE from "three";

import trackPath from "../../assets/track.mp3";
import useStore from "../../store/store";

const Audio = () => {
	const audioRef = useRef<THREE.PositionalAudio>(null!);
	const isMusicPlaying = useStore((state) => state.isMusicPlaying);

	useEffect(() => {
		const audio = audioRef.current;
		if (isMusicPlaying) {
			audio.play();
		} else {
			audio.stop();
		}
	}, [isMusicPlaying]);

	return (
		<PositionalAudio
			ref={audioRef}
			url={trackPath}
			distance={1000000}
			autoplay={false}
		/>
	);
};

export default Audio;
