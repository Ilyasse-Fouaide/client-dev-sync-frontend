import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import MyWork from "../pages/MyWork";
import Dashboard from "../pages/Dashboard";
import DefaultLayout from "../components/DefaultLayout";
import GuestLayout from "../components/GuestLayout";
import CreateProject from "../components/CreateProject";
import Projects from "../components/Projects";
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
			{
				path: "/my-work",
				element: <MyWork />,
			},
			{
				path: "/dashboard",
				element: <Dashboard />,
			},
			{
				path: "/new",
				element: <CreateProject />,
			},
			{
				path: "/projects/:projectId",
				element: <Projects />,
			},
		],
	},
]);

export default router;
