import React from "react";
import { Outlet } from "react-router-dom";
import { useAuthContext } from "../context/ContextProvier";
import LoadingSpinner from "./LoadingSpinner";
import NavBar from "./NavBar";
import Aside from "./Aside";

function DefaultLayout() {
	const [clicked, setClicked] = React.useState(() => {
		return localStorage.getItem("aside_open") === "yes" ? false : true;
	});

	React.useEffect(() => {
		console.log("lS " + localStorage.getItem("aside_open"));
		console.log("clicked " + clicked);

		if (clicked) {
			localStorage.setItem("aside_open", "no");
		} else {
			localStorage.setItem("aside_open", "yes");
		}
	}, [clicked]);

	const { error, isError, isLoading } = useAuthContext();

	if (isError) {
		console.log("Defult Layout error");
		if (error.status && error.status === 401) {
			window.location.href = "/login";
			return;
		}
	}

	if (isLoading) {
		return <LoadingSpinner />;
	}

	return (
		<div>
			<NavBar setClicked={setClicked} clicked={clicked} />
			<div className="flex">
				<Aside clicked={clicked} setClicked={setClicked} />
				<div className="w-full p-5">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default DefaultLayout;
