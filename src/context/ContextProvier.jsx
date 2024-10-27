import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import { useQuery } from "@tanstack/react-query";
import useFetchProfile from "../hooks/useFetchProfile";

function ContextProvier({ children }) {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["profile"],
		queryFn: useFetchProfile,
		retry: false,
		refetchOnWindowFocus: false,
	});

	return (
		<AuthContext.Provider value={{ data, isLoading, isError, error }}>
			{children}
		</AuthContext.Provider>
	);
}

export default ContextProvier;

export const useAuthContext = () => useContext(AuthContext);
