import React from "react";

function EditableContent({ initialText, setInitialText, cb = () => {} }) {
	const [isEditing, setIsEditing] = React.useState(false);
	const editableRef = React.useRef(null);

	const handleProjectNameClick = () => {
		setIsEditing(true);
	};

	const handleInputBlur = (e) => {
		setIsEditing(false);
		const newText = e.currentTarget.textContent.trim();
		setInitialText(newText);
		cb(newText);
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			setIsEditing(false);
			const newText = e.currentTarget.textContent.trim();
			setInitialText(newText);
			cb(newText); // Pass the new text to the callback function
		}
	};

	// Focus on the editable div when editing starts
	React.useEffect(() => {
		if (isEditing && editableRef.current) {
			editableRef.current.focus();
			document.execCommand("selectAll", false, null);
		}
	}, [isEditing]);

	return (
		<div
			ref={editableRef}
			onClick={handleProjectNameClick}
			className="mr-3 overflow-hidden text-2xl font-medium rounded-sm h-fit text-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
			contentEditable={isEditing}
			suppressContentEditableWarning={true}
			onBlur={handleInputBlur}
			onKeyDown={handleKeyPress}
		>
			{initialText}
		</div>
	);
}

export default EditableContent;
