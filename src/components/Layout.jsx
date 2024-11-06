import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }) {
	return (
		<SidebarProvider>
			<AppSidebar>{children}</AppSidebar>
			<Toaster />
		</SidebarProvider>
	);
}
