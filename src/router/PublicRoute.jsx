import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/ContextProvier";
import LoadingPage from "../pages/LoadingPage";

function PublicRoute({ children }) {
	const { data, isLoading, isError, error } = useAuthContext();

	if (isLoading) {
		return <LoadingPage />;
	}

	if (data) {
		return <Navigate to={"/"} replace={true} />;
	}

	return children;
}

export default PublicRoute;
