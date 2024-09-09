import { House, CirclePlus, Star, CircleUserRound, Search } from "lucide-react"
import { NavigationItem } from "../Navigation/NavigationItem";

export const FooterMenu = () => {
    return (
        <nav className="w-full fixed bottom-0 z-50 hidden max-sm:flex py-2 px-3 border-t-2 border-slate-200 bg-white shadow">
            <ul className="flex w-full justify-between items-center" >
                <NavigationItem direction="right" href="/" text="Home">
                    <House /> Home
                </NavigationItem>
                <NavigationItem direction="right" href="/search" text="Procurar">
                    <Search /> Procurar
                </NavigationItem>
                <NavigationItem direction="right" href="/create" text="Criar">
                    <CirclePlus size={30} /> Criar
                </NavigationItem>
                <NavigationItem direction="right" href="/favorites" text="Favoritos">
                    <Star /> Favoritos
                </NavigationItem>
                <NavigationItem direction="right" href="/profile" text="Perfil">
                    <CircleUserRound /> Perfil
                </NavigationItem>
            </ul>
        </nav>
    )
}