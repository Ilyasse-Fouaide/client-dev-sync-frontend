import { Tooltip } from "react-tooltip";

function TooltipComp({ id, hidden = false }) {
	return (
		<Tooltip
			id={id}
			style={{
				backgroundColor: "#1e3a8a",
				fontSize: "10px",
				padding: "0.20rem 0.50rem",
			}}
			hidden={hidden}
		/>
	);
}

export default TooltipComp;
