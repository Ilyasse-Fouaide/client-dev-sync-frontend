import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/ContextProvier";

function GuestLayout() {
	console.log("check if the user authenticate, if true navigate to /home");
	const { data, error, isError, isLoading } = useAuthContext();

	if (isLoading) {
		return "Loading...";
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
