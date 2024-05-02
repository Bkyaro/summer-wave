import { useControls } from "leva";

// scene
function useSceneControl() {
	const scene = useControls(
		"scene",
		{
			fogAndBg: {
				value: "#021119",
			},
			fogDensity: {
				min: 0,
				max: 100,
				step: 0.01,
				value: 3.5,
			},
		},
		{ collapsed: true }
	);

	return scene;
}

// axes
function useAxesControl() {
	const axes = useControls(
		"axes",
		{
			showAxes: {
				value: false,
			},
			AxesLength: {
				min: 0,
				max: 99,
				step: 0.1,
				value: 5,
			},
		},
		{ collapsed: true }
	);

	return axes;
}

// audio
function useAudioControl() {
	const audio = useControls(
		"audio",
		{
			volume: {
				min: 0,
				max: 1,
				step: 0.01,
				value: 0.5,
			},
		},
		{ collapsed: true }
	);

	return audio;
}

// line
function useLineControl() {
	const line = useControls(
		"line",
		{
			gap: {
				min: 0.01,
				max: 5,
				step: 0.01,
				value: 0.095,
			},
			count: {
				min: 1,
				max: 256,
				step: 1,
				value: 69,
			},
		},
		{ collapsed: true }
	);

	return line;
}

// all controls in one place
function useCustomControls() {
	const scene = useSceneControl();
	const audio = useAudioControl();
	const line = useLineControl();
	const axes = useAxesControl();

	return {
		audio,
		line,
		axes,
		scene,
	} as const;
}

export default useCustomControls;
