import React from "react";
import useFetchSingleProject from "@/hooks/useFetchSingleProject";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import EditableContent from "../components/EditableContent";
import { EllipsisVertical, Trash2 } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import useUpdateProject from "@/hooks/useUpdateProject";
import { useToast } from "@/hooks/use-toast";

const DeletButton = () => {
	const deleteProject = () => {
		console.log("delete");
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex items-center transition-colors hover:bg-muted justify-center rounded-full w-8 h-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=open]:bg-muted">
				<EllipsisVertical size={18} className="text-foreground" />
			</DropdownMenuTrigger>
			<DropdownMenuContent align={"end"}>
				<AlertDialog>
					<AlertDialogTrigger asChild>
						<DropdownMenuItem
							onSelect={(e) => e.preventDefault()}
							className="text-red-500"
						>
							<Trash2 />
							Delete
						</DropdownMenuItem>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
							<AlertDialogDescription>
								This action cannot be undone. This will permanently delete the
								project and remove your data from our servers.
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>Cancel</AlertDialogCancel>
							<AlertDialogAction
								className="bg-red-500 hover:bg-red-600"
								onClick={deleteProject}
							>
								Continue
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

const ProjectName = ({ projectId, projectName }) => {
	const { toast } = useToast();

	const { mutate } = useMutation({
		mutationFn: (data) => useUpdateProject(projectId, data),
		onSuccess: () => {
			toast({
				description: "The project name updated successfully",
			});
		},
		onError: (err) => {
			console.log(err);
		},
	});

	const updateName = (newText) => {
		if (newText === projectName || newText === "") {
			return;
		}
		mutate({ name: newText });
	};

	return <EditableContent initialText={projectName} cb={updateName} />;
};

function SingleProject() {
	const { projectId } = useParams();

	const {
		data: project,
		isLoading,
		isError,
		error,
	} = useQuery({
		queryKey: ["projects", projectId],
		queryFn: () => useFetchSingleProject(projectId),
		refetchOnWindowFocus: false,
	});

	if (isLoading) {
		return "Loading...";
	}

	return (
		<div>
			<header className="flex items-center justify-between h-8">
				<ProjectName projectId={projectId} projectName={project.project.name} />
				<nav>
					<ul className="flex items-center space-x-3">
						<li>
							<DeletButton />
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}

export default SingleProject;
