import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }) {
	return (
		<SidebarProvider>
			<AppSidebar>{children}</AppSidebar>
		</SidebarProvider>
	);
}
