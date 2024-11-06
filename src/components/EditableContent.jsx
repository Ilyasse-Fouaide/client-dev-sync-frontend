import React from "react";

const EditableContent = React.forwardRef(function EditableContent(
	{ initialText, cb = () => {} },
	ref
) {
	const [isEditing, setIsEditing] = React.useState(false);
	const editableRef = React.useRef();

	const handleProjectNameClick = () => {
		setIsEditing(true);
	};

	const handleInputBlur = (e) => {
		setIsEditing(false);
		const newText = e.currentTarget.textContent.trim();
		cb(newText);
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			setIsEditing(false);
			const newText = e.currentTarget.textContent.trim();
			cb(newText);
		}
	};

	React.useEffect(() => {
		if (isEditing && editableRef.current) {
			editableRef.current.focus();
			document.execCommand("selectAll", false, null);
		}
	}, [isEditing]);

	React.useImperativeHandle(
		ref,
		() => {
			return {
				enterFocusMode: () => {
					setIsEditing(true);
				},
			};
		},
		[]
	);

	return (
		<div
			ref={editableRef}
			onClick={handleProjectNameClick}
			className="mr-3 overflow-hidden text-2xl font-medium transition-colors rounded-sm h-fit text-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:bg-zinc-200"
			contentEditable={isEditing}
			suppressContentEditableWarning={true}
			onBlur={handleInputBlur}
			onKeyDown={handleKeyPress}
			role="textbox"
			id="editable-content"
			aria-label="Edit field"
		>
			{initialText}
		</div>
	);
});

export default EditableContent;
