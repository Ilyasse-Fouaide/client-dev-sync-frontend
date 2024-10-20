import React from "react";
import { Outlet } from "react-router-dom";

function Navbar() {
	return (
		<React.Fragment>
			<nav>Navbar</nav>
			<main>
				<Outlet />
			</main>
		</React.Fragment>
	);
}

export default Navbar;
