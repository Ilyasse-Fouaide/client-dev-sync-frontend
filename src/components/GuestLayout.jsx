import React from "react";
import { Outlet } from "react-router-dom";
import { useAuthContext } from "../context/ContextProvier";
import LoadingSpinner from "./LoadingSpinner";

function GuestLayout() {
	console.log("check if the user authenticate, if true navigate to /home");
	const { data, isLoading } = useAuthContext();

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (data) {
		console.log("Defult Layout data");
		window.location.href = "/home";
		return;
	}

	return (
		<div>
			<Outlet />
		</div>
	);
}

export default GuestLayout;
