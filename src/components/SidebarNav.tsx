import { SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "@/components/ui/sidebar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"

export default function SidebarNav() {
    return (
        <div>
            <SidebarProvider>
            <Sidebar>
                <SidebarHeader>
                    Main Menu
                </SidebarHeader>

                <SidebarContent>
                <SidebarGroup />
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg">
                            Course Data
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                <SidebarGroup />
                </SidebarContent>
                <SidebarFooter />
            </Sidebar>
            </SidebarProvider>
        </div>
    );
}