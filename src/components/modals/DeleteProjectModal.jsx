import React from "react";
import { createPortal } from "react-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useDeletProject from "../../hooks/useDeletProject";
import { useNavigate, useParams } from "react-router-dom";
import Dialog from "./Dialog";

function Spin() {
	return (
		<svg
			className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle
				className="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				strokeWidth="4"
			></circle>
			<path
				className="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			></path>
		</svg>
	);
}

function CloseIcon({ onClick }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="float-right w-3 cursor-pointer fill-gray-400 hover:fill-red-500"
			viewBox="0 0 320.591 320.591"
			onClick={onClick}
		>
			<path
				d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
				data-original="#000000"
			></path>
			<path
				d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
				data-original="#000000"
			></path>
		</svg>
	);
}

function DeleteIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="inline w-14 fill-red-500"
			viewBox="0 0 24 24"
		>
			<path
				d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
				data-original="#000000"
			/>
			<path
				d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
				data-original="#000000"
			/>
		</svg>
	);
}

function DeleteProjectModal({ setDialogOpen }) {
	const { projectId } = useParams();
	const navigate = useNavigate();

	const dialogRef = React.useRef();

	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationFn: useDeletProject,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["projects"], exact: true });
			navigate("/home");
		},
		onError: (error) => {
			console.log(error);
		},
	});

	const handleDelete = () => {
		mutate(projectId);
	};

	const onClick = () => dialogRef.current.close();

	return (
		<Dialog ref={dialogRef} setDialogOpen={setDialogOpen}>
			<div className="relative w-full max-w-[300px] sm:max-w-md p-6 bg-white">
				<CloseIcon onClick={onClick} />

				<div className="my-8 text-center">
					<DeleteIcon />
					<h4 className="mt-4 text-lg font-semibold text-gray-800">
						Are you sure you want to delete it?
					</h4>
					<p className="mt-4 text-sm text-gray-600">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
						auctor arcu, at fermentum dui. Maecenas
					</p>
				</div>

				<div className="flex flex-col space-y-2">
					<button
						onClick={handleDelete}
						type="button"
						className="flex items-center justify-center px-4 py-2 text-sm tracking-wide text-white bg-red-500 rounded-lg hover:bg-red-600 active:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:bg-red-300"
						disabled={isPending}
					>
						{isPending ? <Spin /> : "Delete"}
					</button>
					<button
						type="button"
						className="px-4 py-2 text-sm tracking-wide text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-300 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
						onClick={onClick}
					>
						Cancel
					</button>
				</div>
			</div>
		</Dialog>
	);
}

export default DeleteProjectModal;
