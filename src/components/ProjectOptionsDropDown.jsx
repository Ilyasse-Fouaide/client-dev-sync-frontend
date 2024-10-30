import React from "react";
import { Trash } from "lucide-react";

function ProjectOptionsDropDown({ setOptionClicked, dialogRef }) {
	const ITEMS = [
		{
			type: "button",
			text: "Delete",
			Icon: <Trash size={12} className="mr-2" />,
			submit: (e) => {
				e.preventDefault();
				setOptionClicked(false);
				dialogRef.current.show();
			},
		},
	];

	return (
		<div className="absolute right-0 z-10 w-40 p-2 bg-white top-[calc(32px+10px)] rounded-lg shadow-popup border">
			<ul>
				{ITEMS.map((item, key) => (
					<li key={key} className="text-xs text-zinc-600">
						{item.type === "button" ? (
							<form onSubmit={item.submit}>
								<button
									type="submit"
									className="w-full flex items-center px-2 py-1 ursor-pointer hover:bg-blue-100/50 rounded-[3px] active-button"
								>
									{item.Icon}
									<span>{item.text}</span>
								</button>
							</form>
						) : (
							""
						)}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ProjectOptionsDropDown;
