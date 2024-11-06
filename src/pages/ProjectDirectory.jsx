import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookCheck, Plus } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import useFetchProjects from "@/hooks/useFetchProjects";
import { Link } from "react-router-dom";

function ProjectDirectory() {
	const {
		data: projects,
		isLoading,
		isError,
		error,
	} = useQuery({
		queryKey: ["projects"],
		queryFn: useFetchProjects,
		refetchOnWindowFocus: false,
	});

	if (isLoading) {
		return "Loading...";
	}

	if (isError) {
		console.log(error);
		return <h1>Error: Check the console for more info</h1>;
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Project Directory</CardTitle>
				{/* <CardDescription>asdhkh</CardDescription> */}
			</CardHeader>
			<CardContent>
				<ul className="flex flex-col divide-y-2">
					{projects.map((project, key) => (
						<li key={key}>
							<Link
								to={`/projects/${project.project._id}`}
								className="flex items-center justify-between py-2"
							>
								<div className="flex items-center">
									<BookCheck size={16} className="mr-3" />
									<span>{project.project.name}</span>
								</div>
								<div className="flex -space-x-1 overflow-hidden">
									<img
										alt=""
										src={project.user.image}
										className="inline-block w-6 h-6 rounded-full ring-2 ring-white"
									/>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</CardContent>
			<CardFooter>
				<Button className="text-xs" variant="outline">
					<Plus />
					Add Project
				</Button>
			</CardFooter>
		</Card>
	);
}

export default ProjectDirectory;
