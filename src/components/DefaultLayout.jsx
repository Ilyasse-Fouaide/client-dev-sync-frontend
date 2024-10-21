import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/ContextProvier";

function DefaultLayout() {
	const { data, error, isError, isLoading } = useAuthContext();

	if (isError) {
		console.log("Defult Layout error");
		console.log(error);
		if (error.status && error.status === 401) {
			window.location.href = "/login";
			return;
		}
	}

	if (isLoading) {
		return "Loading...";
	}

	if (data) {
		console.log("Defult Layout data");
		console.log(data);
	}

	return (
		<div>
			DefaultLayout
			<Outlet />
		</div>
	);
}

export default DefaultLayout;
