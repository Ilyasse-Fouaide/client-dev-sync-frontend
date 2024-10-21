import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axiosClient from "../api/axios";

function Login() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");

		try {
			await axiosClient.post("/login", formData);
			window.location.reload();
		} catch (error) {
			console.log(error);
			// setError(error.response?.data?.message || "Login failed");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			{error && <div style={{ color: "red" }}>{error}</div>}
			<input
				type="email"
				value={formData.email}
				onChange={(e) =>
					setFormData((prev) => ({ ...prev, email: e.target.value }))
				}
				placeholder="Email"
			/>
			<input
				type="password"
				value={formData.password}
				onChange={(e) =>
					setFormData((prev) => ({ ...prev, password: e.target.value }))
				}
				placeholder="Password"
			/>
			<button type="submit">Login</button>
		</form>
	);
}

export default Login;
