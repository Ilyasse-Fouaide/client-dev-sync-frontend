import React from "react";
import Breadcrumb from "./Breadcrumb";
import ProjectNav from "./ProjectNav";

function Projects() {
	return (
		<section>
			<Breadcrumb />
			<header className="flex items-center justify-between">
				<h1 className="pr-5 overflow-hidden text-2xl font-medium text-ellipsis text-nowrap hover:bg-zinc-200">
					Project name
				</h1>
				<ProjectNav />
			</header>
		</section>
	);
}

export default Projects;
