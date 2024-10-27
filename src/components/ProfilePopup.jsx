import { CircleUser, LogOut } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const ITEMS = [
	{
		path: "/profile",
		text: "My profile",
		Icon: <CircleUser size={12} className="mr-2" />,
	},
	{ path: null, text: "Log out", Icon: <LogOut size={12} className="mr-2" /> },
];

function ProfilePopup() {
	const handleLogout = (e) => {
		e.preventDefault();
		useLogout().then(() => {
			window.location.reload();
		});
	};

	return (
		<div
			className="absolute top-[calc(30px+6px+1px)] right-0 bg-white w-[220px] h-[300px] p-2 rounded-lg"
			style={{ boxShadow: "0 0px 17px 1px rgba(0,0,0,.1)" }}
		>
			<ul>
				<li className="px-2 my-2 text-xs text-zinc-500">Account</li>
				{ITEMS.map((item, key) => {
					return (
						<li key={key} className="text-xs text-zinc-600">
							{item.path ? (
								<Link
									to={item.path}
									className="flex items-center px-2 py-1 ursor-pointer hover:bg-blue-200/70 rounded-[3px]"
								>
									{item.Icon}
									<span>{item.text}</span>
								</Link>
							) : (
								<form onSubmit={handleLogout}>
									<button
										type="submit"
										className="w-full flex items-center px-2 py-1 ursor-pointer hover:bg-blue-200/70 rounded-[3px]"
									>
										{item.Icon}
										<span>{item.text}</span>
									</button>
								</form>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default ProfilePopup;
