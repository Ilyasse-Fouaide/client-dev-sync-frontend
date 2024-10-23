import React from "react";
import InputForm from "./InputForm";
import useRegister from "../hooks/useRegister";

function AdditionalInfo({
	email,
	full_name,
	password,
	setLocation: _setLocation,
	setBirthday: _setBirthday,
}) {
	const [location, setLocation] = React.useState("");
	const [birthday, setBirthday] = React.useState("");

	const [isLoading, setIsLoading] = React.useState(false);

	const handleLocationChange = (e) => setLocation(e.target.value);
	const handleBirthdayChange = (e) => setBirthday(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);

		//create user
		useRegister(email, full_name, password, location, birthday)
			.then(() => {
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="relative w-[90%] h-[80%]">
				<h1 className="text-xl font-semibold">Create your account</h1>
				<form onSubmit={handleSubmit}>
					<div className="mt-3 w-[70%]">
						<label className="inline-block pb-1 text-xs text-zinc-500">
							Location
						</label>
						<InputForm
							isLoading={isLoading}
							type="text"
							placeholder="Enter your Location"
							handleChange={handleLocationChange}
							required
							value={location}
						/>
					</div>

					<div className="mt-2 w-[70%]">
						<label className="inline-block pb-1 text-xs text-zinc-500">
							Birthday
						</label>
						<InputForm
							isLoading={isLoading}
							type="date"
							required
							placeholder="Create your password"
							handleChange={handleBirthdayChange}
							value={birthday}
						/>
					</div>

					<div className="absolute bottom-0 right-0">
						<button
							disabled={isLoading}
							className="text-xs bg-blue-500 text-zinc-50 rounded-[3px] px-4 py-2"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AdditionalInfo;
