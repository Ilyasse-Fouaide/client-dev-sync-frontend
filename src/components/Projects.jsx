import React from "react";
import Breadcrumb from "./Breadcrumb";
import ProjectNav from "./ProjectNav";
import EditableContent from "./EditableContent";
import { Pencil } from "lucide-react";

function Projects() {
	const [projectName, setProjectName] = React.useState("Project name");
	const ref = React.useRef(null);

	const handlePencilClick = () => {
		ref.current.enterFocusMode();
	};

	return (
		<section>
			<Breadcrumb />
			<header className="flex items-center justify-between">
				<EditableContent
					ref={ref}
					initialText={projectName}
					setInitialText={setProjectName}
					cb={(text) => console.log("cb " + text)}
				/>
				<ProjectNav handlePencilClick={handlePencilClick} />
			</header>
		</section>
	);
}

export default Projects;
