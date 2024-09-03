import { ReactNode } from "react"
import { NavBar } from "./NavBar";
import { SideMenu } from "./SideMenu";
import { FooterMenu } from "./FooterMenu";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface RootLayoutProps {
    children: ReactNode;
}

const queryClient = new QueryClient();

export const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <SideMenu />
            <main className="max-sm:ml-0 ml-[91px] bg-white">
                <NavBar />
                <div className="py-24">
                {children}
                </div>
                <FooterMenu />
            </main>
        </QueryClientProvider>
    )
}