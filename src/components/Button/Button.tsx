import useStore from "../../store/store";
import { Play } from "../Icons";

const PlayButton = () => {
	const setIsMusicPlaying = useStore((state) => state.setIsMusicPlaying);
	return (
		<div id="button-container">
			<button id="play-btn" onClick={() => setIsMusicPlaying(true)}>
				<Play />
				<span>LOSE CONTROL</span>
			</button>
		</div>
	);
};

export default PlayButton;
