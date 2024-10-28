import React from "react";

function ProjectLoading() {
	return (
		<div>
			<h1 className="animate-pulse mb-3 h-[24px] bg-zinc-200 w-[150px]"></h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
				{[...Array(3).keys()].map((_, key) => (
					<div key={key} className="animate-pulse bg-zinc-200 p-2">
						<div className="animate-pulse w-full bg-zinc-100 aspect-video rounded-[calc(8px-6px)] mb-2"></div>
						<div className="animate-pulse h-[20px] bg-zinc-100"></div>
					</div>
				))}
			</div>
		</div>
	);
}

export default ProjectLoading;
