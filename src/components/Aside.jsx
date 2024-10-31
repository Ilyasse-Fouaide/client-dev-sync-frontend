import React from "react";
import { NavLink } from "react-router-dom";
import { CalendarCheck, ChartNoAxesColumn, House } from "lucide-react";
import TooltipComp from "./TooltipComp";

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

function Aside({ clicked, setClicked }) {
	const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);

	React.useEffect(() => {
		const handleResize = () => {
			setInnerWidth(window.innerWidth);
			if (innerWidth < 768) {
				setClicked(true);
			} else {
				setClicked(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [innerWidth]);

	return (
		<aside
			className={`bg-indigo-50/40 h-full ${clicked ? "" : "w-fit"} py-1 px-3`}
		>
			<ul className="text-xs font-light">
				{NAVLINKS.map(({ path, text, Icon }, key) => {
					return (
						<li
							key={key}
							className={`hover:bg-blue-100/50 ${
								clicked ? "" : "md:w-[180px] w-fit"
							}`}
						>
							<NavLink
								to={path}
								className={
									"flex p-[6px] mb-[3px] items-center rounded-[3px] w-full active-button"
								}
								data-tooltip-id={path}
								data-tooltip-content={text}
								data-tooltip-place="right"
							>
								<span className={`icon ${clicked ? "" : "md:mr-2 mr-0"}`}>
									{Icon}
								</span>
								<span className="hidden md:block text-nowrap">
									{clicked ? "" : text}
								</span>
							</NavLink>
							<TooltipComp id={path} hidden={!clicked} />
						</li>
					);
				})}
			</ul>
		</aside>
	);
}

export default Aside;
