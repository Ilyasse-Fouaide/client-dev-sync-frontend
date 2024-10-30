import { Ellipsis } from "lucide-react";
import React from "react";
import Breadcrumb from "./Breadcrumb";
import useClickOutside from "../hooks/useClickOutside";
import ProjectOptionsDropDown from "./ProjectOptionsDropDown";
import DeleteProjectModal from "./DeleteProjectModal";

function ProjectNav() {
	const [optionClicked, setOptionClicked] = React.useState(false);
	const dialogRef = React.useRef();

	const ref = React.useRef();

	const handleProfileClick = () => {
		setOptionClicked((prev) => !prev);
	};

	useClickOutside(ref, () => {
		setOptionClicked(false);
	});

	return (
		<nav>
			<ul className="flex items-center space-x-3">
				<li>
					<button className="active-button flex items-center justify-center h-8 px-2.5 bg-zinc-200 hover:bg-zinc-300 rounded-[3px] ">
						<span className="text-xs font-semibold text-zinc-800 text-nowrap">
							Invite / 1
						</span>
					</button>
				</li>
				<li ref={ref} className="relative">
					<button
						className="active-button flex items-center justify-center h-8 px-1.5 bg-zinc-200 hover:bg-zinc-300 rounded-[3px]"
						onClick={handleProfileClick}
					>
						<span className="text-zinc-800">
							<Ellipsis size={20} />
						</span>
					</button>
					{optionClicked && (
						<ProjectOptionsDropDown
							dialogRef={dialogRef}
							setOptionClicked={setOptionClicked}
						/>
					)}
				</li>
			</ul>
			<DeleteProjectModal ref={dialogRef} />
		</nav>
	);
}

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
