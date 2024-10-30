import React from "react";
import { Link } from "react-router-dom";

function HomeIcon() {
	return (
		<svg
			className="w-3 h-3 me-2.5"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
		>
			<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
		</svg>
	);
}

function Breadcrumb() {
	return (
		<nav className="mb-5">
			<ol className="flex items-center text-xs sm:text-sm text-zinc-500">
				<li>
					<span>
						<HomeIcon />
					</span>
				</li>
				<li className="after:content-['/'] after:mx-2 after:text-xs">
					<Link
						to={"/home"}
						className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						Home
					</Link>
				</li>
				<li className="after:content-['/'] after:mx-2 after:text-xs">
					<Link
						to={"/projects"}
						className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						Projects
					</Link>
				</li>
				<li className="text-nowrap">
					<Link
						to={"#"}
						className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						Project name
					</Link>
				</li>
			</ol>
		</nav>
	);
}

export default Breadcrumb;
