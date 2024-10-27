import React from "react";

function LoadingSpinner() {
	return (
		<div className="flex items-center justify-center w-full h-screen">
			<div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-current border-e-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
		</div>
	);
}

export default LoadingSpinner;
