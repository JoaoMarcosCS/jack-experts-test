import { takeInitialLetter } from "../../utils/take-initial-letter";
import { useUserStore } from "../../store/user.store"
import { House, CirclePlus, Star, CircleUserRound, Search } from "lucide-react"
import { NavigationItem } from "../Navigation/NavigationItem";

export const SideMenu = () => {

    const name = useUserStore((state) => state.user?.name);

    const userFirstLetter = name ? takeInitialLetter(name) : "J";

    return (
        <nav className="h-creen flex bg-white max-sm:hidden fixed flex-col border-r-2 w-[90px]">
            <div className="min-h-[70px] flex justify-center items-center bg-amber-400">
                <div className="bg-gray-100 rounded-full p-2">
                    <p className="font-semibold text-lg">{userFirstLetter}</p>
                </div>
            </div>
            <ul className="flex flex-col w-full h-screen justify-start items-center pt-4">
                <NavigationItem direction="right" href="/" text="Home">
                    <House /> Home
                </NavigationItem>
                <NavigationItem direction="right" href="/search" text="Procurar">
                    <Search /> Procurar
                </NavigationItem>
                <NavigationItem direction="right" href="/create" text="Criar">
                    <CirclePlus /> Criar
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