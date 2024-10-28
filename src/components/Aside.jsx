import React from "react";
import { NavLink } from "react-router-dom";
import { CalendarCheck, ChartNoAxesColumn, House } from "lucide-react";

const NAVLINKS = [
	{
		path: "/home",
		text: "Home",
		Icon: <House size={16} className="text-zinc-600" />,
	},
	{
		path: "/my-work",
		text: "My work",
		Icon: <CalendarCheck size={16} className="text-zinc-600" />,
	},
	{
		path: "/dashboard",
		text: "Dashboard",
		Icon: <ChartNoAxesColumn size={16} className="text-zinc-600" />,
	},
];

function Aside({ clicked }) {
	const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);

	React.useEffect(() => {
		const handleResize = () => setInnerWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [innerWidth]);

	return (
		<aside
			className={`bg-indigo-50/40 ${
				clicked ? "" : "w-fit"
			} h-[calc(100vh-54.8px)] py-1 px-3`}
		>
			<ul className="text-xs font-light">
				{NAVLINKS.map(({ path, text, Icon }, key) => {
					return (
						<li
							key={key}
							className={
								clicked ? "" : "md:w-[180px] w-fit hover:bg-blue-100/50"
							}
						>
							<NavLink
								to={path}
								className={
									"flex p-[6px] mb-[3px] items-center rounded-[3px] w-full"
								}
							>
								<span className={`icon ${clicked ? "" : "md:mr-2 mr-0"}`}>
									{Icon}
								</span>
								<span className="md:block hidden text-nowrap">
									{clicked ? "" : text}
								</span>
							</NavLink>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}

export default Aside;
