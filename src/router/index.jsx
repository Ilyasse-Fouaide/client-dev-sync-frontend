import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import MyWork from "../pages/MyWork";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import ProjectDirectory from "../pages/ProjectDirectory";
import SingleProject from "../pages/SingleProject";
const router = createBrowserRouter([
	{
		path: "/login",
		element: (
			<PublicRoute>
				<Login />
			</PublicRoute>
		),
	},
	{
		path: "/register",
		element: (
			<PublicRoute>
				<Register />,
			</PublicRoute>
		),
	},
	{
		path: "/",
		element: (
			<ProtectedRoute>
				<Home />
			</ProtectedRoute>
		),
		children: [
			{
				path: "/",
				element: <ProjectDirectory />,
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
				path: "/projects/:projectId",
				element: <SingleProject />,
			},
		],
	},
]);

export default router;
