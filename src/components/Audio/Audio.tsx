import { MutableRefObject, createRef, useEffect, useRef } from "react";
import { PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import { useCustomControls } from "../../hooks";

import trackPath from "../../assets/track.mp3";
import useStore from "../../store";

export const analyserRef = createRef() as MutableRefObject<THREE.AudioAnalyser>;

const Audio = () => {
	// controls
	const controls = useCustomControls();

	const audioRef = useRef<THREE.PositionalAudio>(null!);
	const isMusicPlaying = useStore((state) => state.isMusicPlaying);

	useEffect(() => {
		const audio = audioRef.current;
		if (isMusicPlaying) {
			analyserRef.current = new THREE.AudioAnalyser(audio, 512);
			audio.play();
		} else {
			audio.stop();
		}
	}, [isMusicPlaying]);

	// set volume from debug control
	useEffect(() => {
		if (!audioRef.current) return;
		audioRef.current?.setVolume(controls.audio.volume);
	}, [controls.audio.volume]);

	return (
		<PositionalAudio
			ref={audioRef}
			url={trackPath}
			distance={10000000}
			autoplay={false}
		/>
	);
};

export default Audio;
