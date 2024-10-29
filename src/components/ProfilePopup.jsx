import { CircleUser, LogOut } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import logo from "../assets/favicon/0.75x/favicon-v3.png";
import { useAuthContext } from "../context/ContextProvier";

const ITEMS = [
	{
		path: "/profile",
		text: "My profile",
		Icon: <CircleUser size={12} className="mr-2" />,
	},
	{ path: null, text: "Log out", Icon: <LogOut size={12} className="mr-2" /> },
];

function ProfilePopup() {
	const { data } = useAuthContext();

	const handleLogout = (e) => {
		e.preventDefault();
		useLogout().then(() => {
			window.location.reload();
		});
	};

	return (
		<div
			className="absolute top-[calc(30px+12px+1px)] right-0 bg-white w-[220px] p-2 rounded-lg"
			style={{ boxShadow: "0 0px 17px 1px rgba(0,0,0,.1)" }}
		>
			<div className="px-2 my-2 text-xs font-medium text-zinc-500">Account</div>
			<div className="pb-3 mt-3 mb-2 border-b pointer-events-none select-none border-zinc-600/30">
				<div className="flex items-center px-2">
					<div className="mr-2">
						<div className="w-[32px] aspect-square">
							<img
								src={data.image}
								className="w-full h-full overflow-hidden rounded-full"
							/>
						</div>
					</div>
					<div>
						<div className="mb-1 text-xs text-zinc-600">{data?.full_name}</div>
						<div className="text-[9px] text-zinc-600">{data?.email}</div>
					</div>
				</div>
			</div>
			<div className="flex items-center px-2 my-2">
				<img src={logo} alt="" className="h-[14px] mr-2" />
				<div className="text-xs font-medium text-zinc-500">wenday</div>
			</div>
			<ul>
				{ITEMS.map((item, key) => {
					return (
						<li key={key} className="text-xs text-zinc-600">
							{item.path ? (
								<Link
									to={item.path}
									className="flex items-center px-2 py-1 ursor-pointer hover:bg-blue-100/50 rounded-[3px]"
								>
									{item.Icon}
									<span>{item.text}</span>
								</Link>
							) : (
								<form onSubmit={handleLogout}>
									<button
										type="submit"
										className="w-full flex items-center px-2 py-1 ursor-pointer hover:bg-blue-100/50 rounded-[3px]"
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
