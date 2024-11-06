import {
	Calendar,
	Home,
	Inbox,
	ChartNoAxesColumn,
	Sparkles,
	BadgeCheck,
	CreditCard,
	Plus,
	Bell,
	ChevronsUpDown,
	LogOut,
} from "lucide-react";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarGroupAction,
	SidebarTrigger,
	SidebarInset,
	useSidebar,
	SidebarMenuItem,
	SidebarMenuSkeleton,
	SidebarProvider,
	SidebarHeader,
	SidebarSeparator,
	SidebarFooter,
	SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/nav-bar";

import React from "react";
import SidebarmenuItem from "./SidebarmenuItem";
import { useAuthContext } from "../context/ContextProvier";
import useLogout from "@/hooks/useLogout";
import { useMutation } from "@tanstack/react-query";

// Menu items.
const sidebarLefttData = [
	// Group 1
	[
		{
			title: "Home",
			url: "/",
			icon: Home,
		},
		{
			title: "Inbox",
			url: "/inbox",
			icon: Inbox,
		},
		{
			title: "My work",
			url: "/my-work",
			icon: Calendar,
		},
		{
			title: "Dashboard",
			url: "/dashboard",
			icon: ChartNoAxesColumn,
		},
	],
	// Group 2
	[
		{
			title: "My projects",
			url: "/projects",
			icon: Home,
		},
	],
];

const sidebarRightData = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
};

const SidebarMain = ({
	sidebarLefttData,
	index,
	label,
	isMobile,
	toggleSidebar,
}) => {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>{label}</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{sidebarLefttData[index].map((item, key) => (
						<SidebarmenuItem
							key={key}
							item={item}
							isMobile={isMobile}
							toggleSidebar={toggleSidebar}
						/>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
};

const SidebarLeft = () => {
	const { isMobile, toggleSidebar } = useSidebar();

	const isLoading = true;
	return (
		<Sidebar collapsible="icon">
			<SidebarContent>
				<SidebarMain
					sidebarLefttData={sidebarLefttData}
					index={0}
					label={"Application"}
					isMobile={isMobile}
					toggleSidebar={toggleSidebar}
				/>
				<SidebarMain
					sidebarLefttData={sidebarLefttData}
					index={1}
					label={"Projects"}
					isMobile={isMobile}
					toggleSidebar={toggleSidebar}
				/>
			</SidebarContent>
			<SidebarFooter>{isMobile && <NavUser align={"end"} />}</SidebarFooter>
		</Sidebar>
	);
};

function SidebarRight({ ...props }) {
	return (
		<Sidebar
			collapsible="none"
			className="sticky top-0 hidden border-l lg:flex h-svh"
			{...props}
		>
			<SidebarHeader className="h-16 border-b border-sidebar-border">
				<NavUser align="start" />
			</SidebarHeader>
			<SidebarContent>
				{/* Content */}
				<SidebarSeparator className="mx-0" />
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton>
							<Plus />
							<span>New Task</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}

function NavUser({ align }) {
	const { isMobile } = useSidebar();
	const { data: user } = useAuthContext();

	const { mutate } = useMutation({
		mutationFn: useLogout,
		onSuccess: () => {
			window.location.reload();
		},
	});

	const logout = () => {
		mutate();
	};

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<Avatar className="w-8 h-8 rounded-lg">
								<AvatarImage src={user.image} alt={user.full_name} />
								<AvatarFallback className="rounded-lg">CN</AvatarFallback>
							</Avatar>
							<div className="grid flex-1 text-sm leading-tight text-left">
								<span className="font-semibold truncate">{user.full_name}</span>
								<span className="text-xs truncate">{user.email}</span>
							</div>
							<ChevronsUpDown className="ml-auto size-4" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
						side={isMobile ? "bottom" : "right"}
						align={align}
						sideOffset={4}
					>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<Avatar className="w-8 h-8 rounded-lg">
									<AvatarImage src={user.image} alt={user.full_name} />
									<AvatarFallback className="rounded-lg">CN</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-sm leading-tight text-left">
									<span className="font-semibold truncate">
										{user.full_name}
									</span>
									<span className="text-xs truncate">{user.email}</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<Sparkles />
								Upgrade to Pro
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<BadgeCheck />
								Account
							</DropdownMenuItem>
							<DropdownMenuItem>
								<CreditCard />
								Billing
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Bell />
								Notifications
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem onClick={logout}>
							<LogOut />
							Log out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}

export function AppSidebar({ children }) {
	return (
		<React.Fragment>
			<SidebarLeft />
			<SidebarInset>
				<header className="sticky top-0 flex items-center gap-2 h-14 shrink-0 bg-background">
					<div className="flex items-center flex-1 gap-2 px-3">
						<SidebarTrigger />
						<Separator orientation="vertical" className="h-4 mr-2" />
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem>
									<BreadcrumbPage className="line-clamp-1">
										Project Management & Task Tracking
									</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</header>
				<div className="flex flex-col flex-1 gap-4 p-4">
					<div className="w-full max-w-3xl mx-auto">{children}</div>
				</div>
			</SidebarInset>
			<SidebarRight />
		</React.Fragment>
	);
}
