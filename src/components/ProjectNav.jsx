import React from "react";
import { Ellipsis, Pencil } from "lucide-react";
import useClickOutside from "../hooks/useClickOutside";
import ProjectOptionsDropDown from "./ProjectOptionsDropDown";
import DeleteProjectModal from "./modals/DeleteProjectModal";
import InviteButton from "./modals/InviteButton";

function ProjectNav({ handlePencilClick }) {
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
					<button
						className="flex items-center justify-center w-8 h-8 rounded-full active-button hover:bg-zinc-100"
						onClick={handlePencilClick}
					>
						<span className="text-zinc-800">
							<Pencil size={14} />
						</span>
					</button>
				</li>
				<li>
					<InviteButton />
				</li>
				<li ref={ref} className="relative">
					<button
						className="active-button flex items-center justify-center h-8 w-8 bg-zinc-200 hover:bg-zinc-300 rounded-[3px]"
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

export default ProjectNav;
