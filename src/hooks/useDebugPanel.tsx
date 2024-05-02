import { useEffect, useState } from "react";

const useDebugPanel = () => {
	const [debugPanel, setDebugPanel] = useState(false);

	useEffect(() => {
		const hashChangeHandler = () => {
			setDebugPanel(window.location.hash === "#debug");
		};
		window.addEventListener("hashchange", hashChangeHandler);
		return () => {
			window.removeEventListener("hashchange", hashChangeHandler);
		};
	}, []);

	return debugPanel;
};

export default useDebugPanel;
