import React, { useEffect } from "react";
import { Trash } from "lucide-react";
import DeleteProjectModal from "./modals/DeleteProjectModal";

function ProjectOptionsDropDown({ setOptionClicked }) {
	const [dialogOpen, setDialogOpen] = React.useState(false);

	return (
		<React.Fragment>
			<div className="absolute right-0 z-10 w-40 p-2 bg-white top-[calc(32px+10px)] rounded-lg shadow-popup border">
				<ul>
					<li className="text-xs text-zinc-600">
						<button
							onClick={() => {
								console.log("delee clicked");
								const root = document.getElementById("root");
								setDialogOpen(true);
								// setOptionClicked(false);
								root.classList.add("pointer-events-none");
							}}
							className="w-full flex items-center px-2 py-1 ursor-pointer hover:bg-blue-100/50 rounded-[3px] active-button"
						>
							<Trash size={12} className="mr-2" />
							<span>Delete</span>
						</button>
					</li>
				</ul>
			</div>
		</React.Fragment>
	);
}

export default ProjectOptionsDropDown;
