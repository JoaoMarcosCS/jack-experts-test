import { LogOut } from "lucide-react"
import { Logo } from "../Typography/styled"
import { NavigationItem } from "../Navigation/NavigationItem"
import { LogoutDialog } from "../../auth/LogoutDialog"

export const NavBar = () => {
    return (
        <nav className="shadow-md w-full bg-white pr-24 max-sm:pr-0 flex items-center justify-between fixed z-50 px-4">
            <Logo>MyTask</Logo>

            {/* <NavigationItem direction="bottom" href="/diod" text="Sair da conta">
                <LogOut />
                Sair
            </NavigationItem> */}
            
            <LogoutDialog/>
        </nav>
    )
}