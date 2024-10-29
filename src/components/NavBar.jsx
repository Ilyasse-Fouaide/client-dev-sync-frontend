import React from "react";
import { Link } from "react-router-dom";
import { Inbox, Menu, Plus } from "lucide-react";
import header_logo from "../assets/header/1x/header-v3.png";
import useClickOutside from "../hooks/useClickOutside";
import ProfilePopup from "./ProfilePopup";
import { useAuthContext } from "../context/ContextProvier";

function NavBar({ clicked, setClicked }) {
	const { data } = useAuthContext();

	const [profileClicked, setProfileClicked] = React.useState(false);
	const ref = React.useRef();

	const handleProfileClick = () => {
		setProfileClicked((prev) => !prev);
	};

	useClickOutside(ref, () => {
		setProfileClicked(false);
	});

	return (
		<nav className="py-[12px] px-3 bg-indigo-50 flex justify-between border-b border-indigo-200">
			<ul className="flex items-center">
				<li className="hidden md:block">
					<button
						className={`mr-2 focus:outline-2 focus:outline-blue-500 w-[30px] aspect-square flex items-center justify-center rounded-[3px] cursor-pointer ${
							clicked ? "bg-blue-200 text-blue-800" : ""
						}`}
						onClick={() => setClicked((prev) => !prev)}
					>
						<Menu size={20} />
					</button>
				</li>
				<li>
					<Link
						to={"/home"}
						className="flex items-center justify-center focus:outline-2 focus:outline-indigo-500 h-[30px] px-2"
					>
						<img
							loading="lazy"
							src={header_logo}
							className="h-[20px]"
							alt="header"
						/>
					</Link>
				</li>
			</ul>
			<ul className="flex items-center space-x-2">
				{/* Create project button */}
				<li>
					<Link
						to={"/new"}
						className="focus:outline-2 focus:outline-indigo-500"
					>
						<div className="border w-[30px] h-[30px] flex items-center justify-center rounded-[3px] border-blue-500 hover:bg-blue-100">
							<Plus size={16} className="text-zinc-800" />
						</div>
					</Link>
				</li>
				{/* display all the inboxes button */}
				<li>
					<Link to={"#"} className="focus:outline-2 focus:outline-indigo-500">
						<div className="relative border w-[30px] h-[30px] flex items-center justify-center rounded-[3px] border-blue-500 hover:bg-blue-100">
							<span className="absolute w-[8px] rounded-full aspect-square bg-red-500 right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
							<Inbox size={16} className="text-zinc-800" />
						</div>
					</Link>
				</li>
				<li className="relative" ref={ref}>
					<button
						onClick={handleProfileClick}
						className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer focus:outline-2 focus:outline-blue-800"
					>
						{/* <User size={16} className="text-blue-50" /> */}
						<img
							src={data.image}
							alt=""
							className="object-center w-full h-full rounded-full"
						/>
					</button>
					{profileClicked && <ProfilePopup />}
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
