import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ContextProvier from "./context/ContextProvier.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Create a client
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus:
				window.location.pathname === "/register" ? false : true,
		},
	},
});

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ContextProvier>
				<App />
			</ContextProvier>
			{/* <ReactQueryDevtools /> */}
		</QueryClientProvider>
	</StrictMode>
);
