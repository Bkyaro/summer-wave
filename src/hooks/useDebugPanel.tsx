import { useEffect, useState } from "react";

export default function useDebugPanel() {
	const [hash, setHash] = useState(window.location.hash);
	const [useDebugPanel, setUseDebugPanel] = useState(false);

	useEffect(() => {
		if (hash === "#debug") {
			setUseDebugPanel(true);
		} else {
			setUseDebugPanel(false);
		}
		const hashChangeHandler = () => {
			setHash(window.location.hash);
		};
		addEventListener("hashchange", hashChangeHandler);
		return () => {
			removeEventListener("hashchange", hashChangeHandler);
		};
	}, [hash]);

	return useDebugPanel;
}
