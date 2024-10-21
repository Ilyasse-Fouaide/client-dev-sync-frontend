import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import DefaultLayout from "../components/DefaultLayout";
import GuestLayout from "../components/GuestLayout";
const router = createBrowserRouter([
	{
		path: "/",
		element: <GuestLayout />,
		children: [
			{
				path: "/",
				element: <Navigate to={"/home"} />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
		],
	},
	{
		path: "/",
		element: <DefaultLayout />,
		children: [
			{
				path: "/home",
				element: <Home />,
			},
		],
	},
]);

export default router;
