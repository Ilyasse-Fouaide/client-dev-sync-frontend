import React from "react";
import useClickOutside from "../hooks/useClickOutside";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import { X } from "lucide-react";
import useSearchUsers from "../hooks/useSearchUsers";

const UserItem = ({ user, onSelect }) => (
	<div className="relative group" onClick={onSelect}>
		<div className="flex items-center px-4 py-2 space-x-2 transition-colors cursor-pointer hover:bg-gray-100">
			<img
				src={user.image}
				alt={`${user.full_name}'s avatar`}
				className="w-5 h-5 mr-3"
			/>
			<div>
				<div className="text-xs font-medium">{user.email}</div>
				<div className="text-xs text-gray-500">{user.full_name}</div>
			</div>
		</div>
		<div className="absolute top-0 left-[1px] w-[2px] h-full bg-blue-500 group-hover:block hidden"></div>
	</div>
);

function LiveSearch({ setReceipent, setSentError }) {
	const [selectedEmail, setSelectedEmail] = React.useState(null);
	const [search, setSearch] = React.useState("");
	const [searchDebounced] = useDebounce(search, 1000);
	const ref = React.useRef();

	const { data: users, isLoading } = useQuery({
		queryKey: ["user/search", { search: searchDebounced }],
		queryFn: () => useSearchUsers(searchDebounced),
		enabled: Boolean(searchDebounced),
		staleTime: 1000 * 5 * 60, // 5sec
		refetchOnWindowFocus: false,
	});

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	useClickOutside(ref, () => {
		setSearch("");
	});

	return (
		<div className="flex flex-col mt-5">
			<label
				htmlFor="search"
				className="mb-1 text-sm font-medium text-slate-500"
			>
				Names or emails
			</label>
			<div ref={ref} className="relative">
				{selectedEmail ? (
					<div className="w-full rounded-[3px] border py-[9px] px-3 flex items-center justify-start">
						<button
							className="flex items-center rounded-full text-[10px] bg-green-100 px-2 py-[1px] font-semibold text-green-900 border border-green-900"
							onClick={() => {
								setSelectedEmail(null);
								setSentError(null);
							}}
						>
							{selectedEmail}
							<X size={10} className="ml-2 text-green-900" />
						</button>
					</div>
				) : (
					<input
						type="text"
						id="search"
						name="search"
						placeholder="e.g., name@company.com"
						onChange={handleChange}
						value={search}
						autoComplete="off"
						className="block w-full px-3 py-2 bg-white border rounded-[3px] text-slate-600 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
					/>
				)}

				{searchDebounced && search && (
					<div className="absolute z-[9999] w-full mt-1 border bg-white shadow-lg rounded-[3px]">
						{/* Check the loading state */}
						{isLoading && (
							<div className="h-[48px] flex items-center justify-center">
								<div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-indigo-600 border-current border-e-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
							</div>
						)}
						{/* checking no user returned */}
						{users?.users.length === 0 && (
							<div
								className={`flex items-center px-4 py-2 space-x-2 transition-colors cursor-pointer hover:bg-gray-100`}
							>
								<div className={`text-xs font-medium`}>
									{searchDebounced} Not found
								</div>
							</div>
						)}
						{/* the final result */}
						{users?.users.map((user) => (
							<UserItem
								key={user.email}
								user={user}
								onSelect={() => {
									setSelectedEmail(user.email);
									setReceipent(user.id);
									setSearch("");
								}}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default LiveSearch;
