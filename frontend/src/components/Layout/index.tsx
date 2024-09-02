import { ReactNode } from "react"
import { NavBar } from "./NavBar";
import { SideMenu } from "./SideMenu";
import { FooterMenu } from "./FooterMenu";

interface RootLayoutProps {
    children: ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <>
            <SideMenu />
            <main className="max-sm:ml-0 ml-[91px] bg-white">
                <NavBar />
                <div className="py-24">
                {children}
                </div>
                <FooterMenu />
            </main>
        </>
    )
}