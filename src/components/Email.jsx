import React from "react";
import useEmailFetch from "../hooks/useEmailFetch";
import InputForm from "./InputForm";

function Email({ setEmail: _setEmail, setCurrentStep }) {
	const [email, setEmail] = React.useState("");
	const [error, setError] = React.useState("");
	const [isLoading, setIsloading] = React.useState(false);

	const handleChange = (e) => {
		setEmail(e.target.value);
		setError("");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsloading(true);
		useEmailFetch(email)
			.then(() => {
				setCurrentStep(2);
				_setEmail(email);
			})
			.catch((error) => {
				setError(error?.response?.data?.message);
			})
			.finally(() => {
				setIsloading(false);
			});
	};

	return (
		<div className="flex w-full h-full itmes-center">
			<div className="w-[350px] m-auto p-2">
				<div>
					<h1 className="text-2xl font-semibold text-center">
						Welcome to wen.com
					</h1>
					<p className="mt-1 text-sm text-center">
						Get Started — it's free. No credit card needed.
					</p>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="mt-10">
						<InputForm
							type="email"
							isLoading={isLoading}
							placeholder={"name@company.com"}
							error={error}
							value={email}
							handleChange={handleChange}
						/>
					</div>
					<div className="mt-2">
						<button
							disabled={isLoading}
							className="w-full py-2 bg-blue-500 rounded-[3px] text-zinc-50 text-sm font-base disabled:bg-zinc-300"
						>
							Continue
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Email;
