import { InputField, Label } from "../styled"

export const FormSignUp = () => {
    return (
        <form className="">
            <h1 className="text-2xl font-bold">Cadastre-se já!</h1>
            <p className="">Crie sua conta gratuitamente no Tasks</p>

            <InputField>
                <Label htmlFor="name">Nome</Label>
                <input type="text" name="name" id="name" placeholder="João Marcos" />
            </InputField>

            <InputField>
                <Label htmlFor="email">Email</Label>
                <input type="email" name="email" id="email" placeholder="jmcsjoaomarcos@gmail.cm" />
            </InputField>

            <InputField>
                <Label htmlFor="password">Password</Label>
                <input type="password" name="password" id="password" />
            </InputField>

            <div>
                <button>Limpar campos</button>
                <button>Cadastrar</button>
            </div>
        </form>
    )
}