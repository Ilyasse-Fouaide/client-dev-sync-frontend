import { useQuery } from "@tanstack/react-query";
import { ChevronDown, PanelLeft, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import useFetchProjects from "../hooks/useFetchProjects";
import ProjectLoading from "./Loading/ProjectLoading";

function MyProjects() {
	const {
		data: projects,
		isLoading,
		error,
		isError,
	} = useQuery({
		queryKey: ["projects"],
		queryFn: useFetchProjects,
		staleTime: 1000 * 10 * 10,
	});

	if (isLoading) {
		return <ProjectLoading />;
	}

	if (isError) {
		console.log("error from /projects [Home page]");
		console.log(error);
		return <strong>ERROR: Check the console from more info</strong>;
	}

	return (
		<div>
			<div className="flex items-center mb-3 group">
				<div className="flex items-center mr-2">
					<button className="pt-[1px]">
						<ChevronDown size={20} className="text-zinc-500" />
					</button>
				</div>
				<div className="font-semibold">My projects</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{projects.map((project, key) => (
					<Link to={`/projects/${project.project._id}`} key={key}>
						<div className="border border-indigo-950/20 rounded-[6px] p-2 hover:shadow-lg hover:border-white">
							<div className="w-full bg-zinc-200 aspect-video rounded-[calc(8px-6px)] mb-2"></div>
							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<PanelLeft size={14} className="mr-2 text-zinc-500" />
									<h2 className="text-[13px] font-semibold text-zinc-800">
										{project.project.name}
									</h2>
								</div>
								<div className="flex items-center justify-center mr-[1px]">
									<button
										className="hover:bg-zinc-200/50 w-full h-full p-1 rounded-[3px]"
										aria-label="Add to favorites"
									>
										<Star size={14} className="text-zinc-500 cursor-pointer" />
									</button>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default MyProjects;
