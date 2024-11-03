import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import useFetchProjectRoles from "../hooks/useFetchProjectRoles";
import { ChevronDown, CircleAlert, X } from "lucide-react";
import useClickOutside from "../hooks/useClickOutside";
import LiveSearch from "./LiveSearch";
import { useParams } from "react-router-dom";
import useSendinvitation from "../hooks/useSendinvitation";

function RoleButton({ setIsDropDownOpen, role }) {
	return (
		<button
			className="flex items-center justify-between w-full p-2 transition-colors border rounded-sm hover:bg-gray-50"
			onClick={() => setIsDropDownOpen((prev) => !prev)}
		>
			<div className="flex items-center space-x-2">
				<div className="w-8 h-8 mr-3">
					<img
						src={`http://192.168.1.25:8000${role.icon}`}
						className="w-full h-full"
					/>
				</div>
				<div className="text-left">
					<div className="font-medium capitalize">{role.name}</div>
					<div className="text-xs text-gray-500 max-w-[200px] overflow-hidden text-nowrap text-ellipsis">
						{role.description}
					</div>
				</div>
			</div>
			<ChevronDown size={14} className="mr-1 text-zinc-950" />
		</button>
	);
}

function Invite({ handleCloseModal }) {
	const [selectedRole, setSelectedRole] = React.useState(null);
	const [receipent, setReceipent] = React.useState(null);
	const [sentError, setSentError] = React.useState(null);
	const { projectId } = useParams();
	const [dropDownOpen, setIsDropDownOpen] = React.useState(false);
	const ref = React.useRef();

	useClickOutside(ref, () => {
		setIsDropDownOpen(false);
	});

	const {
		data: roles,
		isLoading: rolesLoading,
		isError: isRolesError,
		error: rolesError,
	} = useQuery({
		queryKey: ["/user-projects-roles"],
		queryFn: useFetchProjectRoles,
		staleTime: 1000 * 10 * 60, // 10min
	});

	const defaultRole = roles?.find((role) => role.name === "member");

	const { mutate, isPending: sending } = useMutation({
		mutationFn: () =>
			useSendinvitation(
				projectId,
				receipent,
				defaultRole?._id || selectedRole?._id
			),
		onSuccess: () => {
			handleCloseModal();
			setReceipent(null);
		},
		onError: (err) => {
			setSentError(err.response.data);
			setReceipent(null);
		},
	});

	if (rolesLoading) {
		return <div>loading...</div>;
	}

	if (isRolesError) {
		console.log(rolesError);
		return <div>Error: Check the console for more info</div>;
	}

	const handleSendInvitation = () => {
		mutate();
	};

	return (
		<div className="w-[350px] sm:w-[400px] p-5">
			<div className="flex items-center justify-between">
				<h1 className="text-[17px] font-medium">
					Add People to Dev/Client sync
				</h1>
				<button className="rounded-sm group" onClick={handleCloseModal}>
					<X className="group-hover:text-red-500 text-slate-500" size={20} />
				</button>
			</div>
			{sentError && (
				<div className="my-5 p-2 border bg-red-100 rounded-[3px] border-red-700">
					<div className="text-xs text-red-700 flex items-center">
						<CircleAlert size={16} className="mr-2" />
						{sentError.message}
					</div>
				</div>
			)}
			<LiveSearch setReceipent={setReceipent} setSentError={setSentError} />
			<div ref={ref} className="relative w-full mt-5">
				<label
					htmlFor="search"
					className="mb-1 text-sm font-medium text-slate-500"
				>
					Role
				</label>
				{selectedRole ? (
					<RoleButton
						role={selectedRole}
						setIsDropDownOpen={setIsDropDownOpen}
					/>
				) : (
					<RoleButton
						role={defaultRole}
						setIsDropDownOpen={setIsDropDownOpen}
					/>
				)}
				{dropDownOpen && (
					<div className="absolute z-10 w-full py-2 mt-1 overflow-hidden bg-white border rounded-sm shadow-lg">
						{roles.map((role, key) => {
							const isMatch = selectedRole
								? selectedRole.name === role.name
								: defaultRole.name === role.name;

							return (
								<div className="relative group" key={key}>
									<div
										onClick={() => {
											setSelectedRole(role);
											setIsDropDownOpen(false);
										}}
										className={`flex items-center px-4 py-2 space-x-2 transition-colors cursor-pointer ${
											isMatch
												? "bg-blue-100/60 hover:bg-blue-100"
												: "hover:bg-gray-100"
										}`}
									>
										<div className="w-5 h-5 mr-3">
											<img
												src={`http://192.168.1.25:8000${role.icon}`}
												className="w-full h-full"
											/>
										</div>
										<div>
											<div
												className={`text-xs font-medium capitalize ${
													isMatch ? "text-blue-700" : ""
												}`}
											>
												{role.name}
											</div>
											<div className="text-xs text-gray-500">
												{role.description}
											</div>
										</div>
									</div>
									<div
										className={`absolute top-0 left-[1px] w-[2px] h-full bg-blue-500 group-hover:block  ${
											isMatch ? "block" : "hidden"
										}`}
									></div>
								</div>
							);
						})}
					</div>
				)}
			</div>
			<div className="flex items-center justify-end mt-5">
				<button
					disabled={sending}
					onClick={handleSendInvitation}
					className="px-3 py-2 text-sm font-medium bg-blue-500 rounded-sm text-slate-50 hover:bg-blue-600 active:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:bg-zinc-300 disabled:text-zinc-500"
				>
					{sending ? "Sending..." : "Add"}
				</button>
			</div>
		</div>
	);
}

export default Invite;
