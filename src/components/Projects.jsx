import { Ellipsis } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function HomeIcon() {
	return (
		<svg
			class="w-3 h-3 me-2.5"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
		>
			<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
		</svg>
	);
}

function Projects() {
	return (
		<section>
			<nav className="mb-5">
				<ol className="flex items-center text-xs sm:text-sm text-zinc-500">
					<li>
						<div className="flex items-center">
							<span>
								<HomeIcon />
							</span>
							<span className="after:content-['>'] after:mx-2">Home</span>
						</div>
					</li>
					<li
						className="after:content-['>'] after:mx-2"
						aria-current="/projects"
					>
						Projects
					</li>
					<li className="text-nowrap">Project name</li>
				</ol>
			</nav>
			<header className="flex items-center justify-between">
				<h1 className="overflow-hidden text-2xl font-medium text-ellipsis text-nowrap">
					Project name
				</h1>
				{/* <h1 className="text-base font-medium sm:text-2xl text-nowrap">
					Project name
				</h1> */}
				<nav>
					<ul className="flex items-center space-x-3">
						<li>
							<button className="flex items-center justify-center h-8 px-2.5 bg-zinc-200 hover:bg-zinc-300 rounded-[3px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
								<span className="text-xs font-medium text-zinc-800 text-nowrap">
									Invite / 1
								</span>
							</button>
						</li>
						<li>
							<button className="flex items-center justify-center h-8 px-1.5 bg-zinc-200 hover:bg-zinc-300 rounded-[3px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
								<span className="text-zinc-800">
									<Ellipsis size={20} />
								</span>
							</button>
						</li>
					</ul>
				</nav>
			</header>
		</section>
	);
}

export default Projects;
