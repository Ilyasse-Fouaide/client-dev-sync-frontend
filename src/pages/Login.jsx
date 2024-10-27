import React from "react";
import InputForm from "../components/InputForm";
import useLogin from "../hooks/useLogin";

function Login() {
	const [isLoading, setIsloading] = React.useState(false);
	const [error, setError] = React.useState(false);

	const emailRef = React.useRef();
	const passwordRef = React.useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		setIsloading(true);
		useLogin(email, password)
			.then((res) => {
				window.location.reload();
			})
			.catch((err) => {
				setError(err.response.data.message);
				emailRef.current.value = "";
				passwordRef.current.value = "";
			})
			.finally(() => {
				setIsloading(false);
			});
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen mx-auto">
			<div className="">
				<form onSubmit={handleSubmit}>
					<div>
						<label className="inline-block pb-1 text-xs text-zinc-500">
							Email
						</label>
						<InputForm
							isError={error}
							ref={emailRef}
							type="email"
							isLoading={isLoading}
							placeholder="name@company.com"
						/>
					</div>

					<div className="mt-3">
						<label className="inline-block pb-1 text-xs text-zinc-500">
							Password
						</label>
						<InputForm
							isError={error}
							isLoading={isLoading}
							ref={passwordRef}
							type="password"
							placeholder="Enter your password"
						/>
					</div>

					{error && (
						<div
							className="relative px-4 py-3 mt-3 text-sm text-red-700 bg-red-100 border border-red-400 rounded"
							role="alert"
						>
							<span class="block sm:inline">{error}</span>
						</div>
					)}

					<div className="mt-5">
						<button
							disabled={isLoading}
							className="text-xs w-full bg-blue-500 text-zinc-50 rounded-[3px] px-4 py-2"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
