import React from "react";
import { createPortal } from "react-dom";
import useClickOutside from "../../hooks/useClickOutside";

const Dialog = React.forwardRef(function Dialog(
	{ setDialogOpen, children },
	ref
) {
	const dialogRef = React.useRef();

	useClickOutside(dialogRef, () => {
		const root = document.getElementById("root");
		dialogRef.current.close();
		setDialogOpen(false);
		root.classList.remove("pointer-events-none");
	});

	React.useImperativeHandle(ref, () => {
		return {
			show() {
				dialogRef.current.show();
			},
			close() {
				dialogRef.current.close();
			},
		};
	});

	return createPortal(
		<dialog open ref={dialogRef} className="inset-0 border rounded-sm">
			{children}
		</dialog>,
		document.body
	);
});

export default Dialog;
