import React from "react";
import { NavLink } from "react-router-dom";
import { CalendarCheck, House } from "lucide-react";

const NAVLINKS = [
	{ path: "/home", text: "Home", Icon: <House size={16} /> },
	{ path: "/my-work", text: "My work", Icon: <CalendarCheck size={16} /> },
];

function Aside({ clicked }) {
	return (
		<aside
			className={`bg-indigo-50/40 ${
				clicked ? "" : "w-[180px]"
			} h-[calc(100vh-42.8px)] py-1 px-3`}
		>
			<ul className="text-xs font-light">
				{NAVLINKS.map(({ path, text, Icon }, key) => {
					return (
						<li key={key}>
							<NavLink
								to={path}
								className={
									"flex p-[6px] mb-[3px] items-center rounded-[3px] w-full focus:outline-2 focus:outline-indigo-500"
								}
							>
								<span className={`${clicked ? "" : "mr-2"}`}>{Icon}</span>
								{clicked ? "" : text}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}

export default Aside;
