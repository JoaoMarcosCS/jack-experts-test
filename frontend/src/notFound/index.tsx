import { Title } from "../components/Typography/styled"
import { Link } from "react-router-dom"

export const NotFound  = () => {
    return(
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <Title>Ops! Página não encontrada :(</Title>
            <Link to="/" className="text-amber-400 font-semibold text-lg">
                Clique aqui para voltar à página home
            </Link>
        </div>
    )
}