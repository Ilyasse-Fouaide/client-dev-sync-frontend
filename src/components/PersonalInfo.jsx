import React from "react";
import InputForm from "./InputForm";

function PersonalInfo({
	full_name,
	password,
	setPassword,
	setFullName,
	setCurrentStep,
}) {
	const handleFullNameChange = (e) => setFullName(e.target.value);
	const handlePasswordChange = (e) => setPassword(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(full_name);
		console.log(password);
		debugger;
		setCurrentStep(3);
	};

	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="relative w-[90%] h-[80%]">
				<h1 className="text-xl font-semibold">Create your account</h1>
				<form onSubmit={handleSubmit}>
					<div className="mt-3 w-[70%]">
						<label className="inline-block pb-1 text-xs text-zinc-500">
							Full name
						</label>
						<InputForm
							type="text"
							placeholder="Enter your full name"
							handleChange={handleFullNameChange}
							required
							value={full_name}
						/>
					</div>

					<div className="mt-2 w-[70%]">
						<label className="inline-block pb-1 text-xs text-zinc-500">
							Password
						</label>
						<InputForm
							type="password"
							required
							placeholder="Create your password"
							handleChange={handlePasswordChange}
							value={password}
						/>
					</div>

					<div className="absolute bottom-0 right-0">
						<button className="text-xs bg-blue-500 text-zinc-50 rounded-[3px] px-4 py-2">
							Continue {">"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default PersonalInfo;
