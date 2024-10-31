import React from "react";
import Breadcrumb from "./Breadcrumb";
import ProjectNav from "./ProjectNav";
import EditableContent from "./EditableContent";

function Projects() {
	const [projectName, setProjectName] = React.useState("Project name");

	return (
		<section>
			<Breadcrumb />
			<header className="flex items-center justify-between">
				<EditableContent
					initialText={projectName}
					setInitialText={setProjectName}
					cb={(text) => console.log("cb " + text)}
				/>
				<ProjectNav />
			</header>
		</section>
	);
}

export default Projects;
