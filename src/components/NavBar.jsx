import React from "react";
import { Link } from "react-router-dom";
import { Grip, Inbox, User } from "lucide-react";
import header_logo from "../assets/header/1x/header-v3.png";
import useClickOutside from "../hooks/useClickOutside";
import ProfilePopup from "./ProfilePopup";

function NavBar({ clicked, setClicked }) {
	const [profileClicked, setProfileClicked] = React.useState(false);
	const ref = React.useRef();

	const handleProfileClick = () => {
		setProfileClicked((prev) => !prev);
	};

	useClickOutside(ref, () => {
		setProfileClicked(false);
	});

	return (
		<nav className="py-[6px] px-3 bg-indigo-50 flex justify-between border-b border-indigo-200">
			<ul className="flex items-center">
				<li>
					<button
						className={`mr-3 focus:outline-2 focus:outline-indigo-500 w-[30px] aspect-square flex items-center justify-center ${
							clicked ? "bg-indigo-600 text-indigo-50" : ""
						} rounded-full cursor-pointer`}
						onClick={() => setClicked((prev) => !prev)}
					>
						<Grip size={20} />
					</button>
				</li>
				<li>
					<Link
						to={"/home"}
						className="focus:outline-2 focus:outline-indigo-500"
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
			<ul className="flex items-center space-x-4">
				<li className="relative cursor-pointer">
					<span className="absolute w-[6px] rounded-full aspect-square bg-red-500 right-0 top-0"></span>
					<Link to={"#"} className="focus:outline-2 focus:outline-indigo-500">
						<Inbox size={16} />
					</Link>
				</li>
				<li className="relative" ref={ref}>
					<button
						onClick={handleProfileClick}
						className="w-[30px] h-[30px] flex items-center justify-center bg-indigo-600 rounded-full cursor-pointer focus:outline-2 focus:outline-indigo-800"
					>
						<User size={16} className="text-indigo-50" />
					</button>
					{profileClicked && <ProfilePopup />}
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
