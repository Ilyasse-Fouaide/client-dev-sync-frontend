import { Tooltip } from "react-tooltip";

function TooltipComp({ id }) {
	return (
		<Tooltip
			id={id}
			style={{
				backgroundColor: "#1e3a8a",
				fontSize: "10px",
				padding: "0.20rem 0.50rem",
			}}
		/>
	);
}

export default TooltipComp;
