import React from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarGroupAction,
	SidebarMenuAction,
	SidebarTrigger,
	SidebarInset,
	useSidebar,
} from "@/components/ui/sidebar";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import { NavLink } from "react-router-dom";

function SidebarmenuItem({ item, isMobile, toggleSidebar }) {
	return (
		<React.Fragment>
			<SidebarMenuItem key={item.title}>
				<SidebarMenuButton asChild tooltip={item.title}>
					<NavLink
						aria-label="none"
						to={item.url}
						onClick={() => {
							if (isMobile) {
								toggleSidebar();
							}
						}}
					>
						<item.icon />
						<span>{item.title}</span>
					</NavLink>
				</SidebarMenuButton>
			</SidebarMenuItem>
		</React.Fragment>
	);
}

export default SidebarmenuItem;
