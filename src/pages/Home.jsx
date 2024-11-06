import React from "react";
import Layout from "@/components/Layout";
import { Outlet } from "react-router-dom";

function Home() {
	return (
		<div className="">
			<Layout>
				<Outlet />
			</Layout>
		</div>
	);
}

export default Home;
