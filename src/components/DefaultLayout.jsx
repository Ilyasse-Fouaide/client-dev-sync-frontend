import React from "react";
import { Outlet } from "react-router-dom";
import { useAuthContext } from "../context/ContextProvier";
import LoadingSpinner from "./LoadingSpinner";
import NavBar from "./NavBar";
import Aside from "./Aside";

function DefaultLayout() {
	const [clicked, setClicked] = React.useState(false);
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
				<Aside clicked={clicked} />
				<div className="p-2">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default DefaultLayout;
