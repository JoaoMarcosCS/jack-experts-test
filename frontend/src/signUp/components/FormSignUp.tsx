import { InputField } from "../styled"

export const FormSignUp = () => {
    return (
        <form className="">
            <h1 className="">Cadastre-se já!</h1>
            <p className="">Crie sua conta gratuitamente no Tasks</p>
            
            <InputField>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" id="name" placeholder="João Marcos" />
            </InputField>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="jmcsjoaomarcos@gmail.cm" />
            </div>

            <div>
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" />
            </div>

            <div>
                <button>Limpar campos</button>
                <button>Cadastrar</button>
            </div>
        </form>
    )
}