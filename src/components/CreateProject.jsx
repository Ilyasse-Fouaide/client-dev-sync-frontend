import React from "react";
import { useDropzone } from "react-dropzone";
import { useAuthContext } from "../context/ContextProvier";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useCreateProject from "../hooks/useCreateProject";
import { useNavigate } from "react-router-dom";

function CreateProject() {
	const { data } = useAuthContext();

	const queryClient = useQueryClient();

	const navigate = useNavigate();

	const [projectName, setProjectName] = React.useState("");
	const [projectDescription, setProjectDescription] = React.useState("");
	const [projectIcon, setProjectIcon] = React.useState("");

	const [projectError, setProjectError] = React.useState(null);

	const { mutate, isPending } = useMutation({
		mutationFn: useCreateProject,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["projects"], exact: true });
			navigate("/home");
		},
		onError: (error) => {
			setProjectError(error.response.data);
		},
	});

	const onDrop = React.useCallback((acceptedFiles) => {
		console.log(acceptedFiles);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: { "image/*": [] },
		onDrop,
		multiple: false,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		mutate({
			name: projectName,
			description: projectDescription,
			icon: projectIcon,
		});
	};

	return (
		<div className="flex items-center justify-center min-h-[calc(100vh-54.8px-40px)] px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-md space-y-8">
				<div>
					<h1 className="text-2xl font-semibold text-zinc-900">
						Create a New Project
					</h1>
					<p className="text-sm text-zinc-600">
						Fill in the information below to create your new project.
					</p>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<div className="flex flex-col items-start space-y-6 sm:space-x-2 sm:space-y-0 sm:flex-row sm:items-center">
						<div className="w-full sm:w-[40%]">
							<button
								type="button"
								className="flex items-center justify-start w-full h-full px-3 py-2 border rounded-md border-zinc-300 bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:border-indigo-500"
							>
								<div className="w-[20px] aspect-square bg-black rounded-full mr-2 overflow-hidden">
									<img src={data.image} className="w-full h-full" />
								</div>
								<p className="text-xs font-semibold text-zinc-600 whitespace-nowrap">
									{data?.full_name}
								</p>
							</button>
						</div>
						<div className="w-full sm:w-[60%]">
							<label htmlFor="project-name" className="sr-only">
								Project Name
							</label>
							<input
								disabled={isPending}
								id="project-name"
								name="project-name"
								type="text"
								className={`relative block w-full px-3 py-2 text-zinc-900 placeholder-zinc-500 border rounded-md appearance-none sm:text-sm ${
									projectError && projectError?.name
										? "bg-red-50 placeholder:text-red-400 border-red-400 focus:outline-none"
										: "border-zinc-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
								}`}
								placeholder="Project Name*"
								value={projectName}
								onChange={(e) => {
									setProjectError(null);
									setProjectName(e.target.value);
								}}
							/>
						</div>
					</div>
					<div>
						<label htmlFor="project-description" className="sr-only">
							Project Description
						</label>
						<textarea
							disabled={isPending}
							id="project-description"
							name="project-description"
							className="relative block w-full px-3 py-2 border rounded-md appearance-none text-zinc-900 placeholder-zinc-500 border-zinc-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							placeholder="Project Description"
							rows={4}
							value={projectDescription}
							onChange={(e) => setProjectDescription(e.target.value)}
						></textarea>
						<p className="mt-1 text-xs text-zinc-400">
							Optional brief description of your project and its goals.
						</p>
					</div>
					<div
						{...getRootProps()}
						className={`${
							isDragActive || isPending ? "bg-zinc-100" : "bg-white"
						} flex justify-center px-6 pt-5 pb-6 border-2 border-zinc-300 border-dashed rounded-b-md`}
					>
						<div className="space-y-1 text-center">
							<svg
								className="w-12 h-12 mx-auto text-zinc-400"
								stroke="currentColor"
								fill="none"
								viewBox="0 0 48 48"
								aria-hidden="true"
							>
								<path
									d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<div className="flex items-center text-sm text-zinc-600">
								<label
									htmlFor="file-upload"
									className="relative hidden font-medium text-blue-600 rounded-md cursor-pointer sm:block hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
								>
									<span>Upload a file</span>
									<input {...getInputProps()} />
								</label>
								<p className="flex-grow pl-1 text-center">or drag and drop</p>
							</div>
							<p className="text-xs text-zinc-500">PNG, JPG, GIF up to 1MB</p>
						</div>
					</div>
					<button
						disabled={isPending}
						type="submit"
						className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-zinc-300 disabled:text-zinc-500"
					>
						{isPending ? "Creating..." : "Create Project"}
					</button>
				</form>
			</div>
		</div>
	);
}

export default CreateProject;
