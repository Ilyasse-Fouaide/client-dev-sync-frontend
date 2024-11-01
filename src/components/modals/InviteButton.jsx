import React from "react";
import Dialog from "./Dialog";
import Invite from "../Invite";

function InviteButton() {
	const [dialogOpen, setDialogOpen] = React.useState(false);
	const inviteDialogRef = React.useRef();

	const handleXButton = () => {
		inviteDialogRef.current.close();
	};

	const handleInviteClickedClick = () => {
		const root = document.getElementById("root");
		// inviteDialogRef.current.show();
		root.classList.add("pointer-events-none");
		setDialogOpen(true);
	};

	return (
		<React.Fragment>
			<button
				className="active-button flex items-center justify-center h-8 px-2.5 bg-zinc-200 hover:bg-zinc-300 rounded-[3px]"
				onClick={handleInviteClickedClick}
			>
				<span className="text-xs font-semibold text-zinc-800 text-nowrap">
					Invite / 1
				</span>
			</button>
			{dialogOpen && (
				<Dialog ref={inviteDialogRef} setDialogOpen={setDialogOpen}>
					<Invite handleXButton={handleXButton} />
				</Dialog>
			)}
		</React.Fragment>
	);
}

export default InviteButton;
