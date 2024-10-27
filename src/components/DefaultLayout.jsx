import React from "react";
import { Outlet } from "react-router-dom";
import { useAuthContext } from "../context/ContextProvier";
import LoadingSpinner from "./LoadingSpinner";

function DefaultLayout() {
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
			DefaultLayout
			<Outlet />
		</div>
	);
}

export default DefaultLayout;
