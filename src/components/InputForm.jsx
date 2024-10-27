import React from "react";

const InputForm = React.forwardRef(function InputForm(
	{
		isLoading = false,
		error = undefined,
		isError = false,
		value,
		handleChange = () => {},
		type = "text",
		placeholder = "text input",
		required = false,
	},
	ref
) {
	return (
		<React.Fragment>
			<input
				ref={ref}
				type={type}
				disabled={isLoading}
				placeholder={placeholder}
				required={required}
				className={`w-full px-4 text-sm py-2 border rounded-[3px] outline-none disabled:bg-zinc-100 ${
					isError || error
						? "border-red-500 placeholder:text-red-500"
						: "border-zinc-500/70 placeholder:text-zinc-700/70"
				}`}
				value={value}
				onChange={handleChange}
			/>
			{error && <small className="mt-1 text-xs text-red-500">{error}</small>}
		</React.Fragment>
	);
});

export default InputForm;
