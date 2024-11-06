import { Loader2 } from "lucide-react";
import React from "react";

function LoadingPage() {
	return (
		<div className="flex items-center justify-center w-full h-screen">
			<div className="flex flex-col items-center space-y-4">
				<Loader2 className="text-slate-500 animate-spin dark:text-slate-400" />
				<p className="text-slate-500 dark:text-slate-400">Loading...</p>
			</div>
		</div>
	);
}

export default LoadingPage;
