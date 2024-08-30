import { useSignIn } from "../../auth/hooks/useSignIn"
import { Button } from "../../components/ui/button"
import { InputField, Input, Label, ButtonField } from "../styled"

export const FormSignUp = () => {

    return (
        <form className="mt-10 shadow-md rounded-md p-10 ">
            <h1 className="text-2xl font-bold">Cadastre-se já!</h1>
            <p className="font-medium text-amber-400">Crie sua conta gratuitamente no Tasks</p>

            <InputField>
                <Label htmlFor="name">Nome</Label>
                <Input type="text" id="name" name="name" placeholder="João Marcos"/>
            </InputField>

            <InputField>
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="jmcsjoaomarcos@gmail.com"/>
            </InputField>

            <InputField>
                <Label htmlFor="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="123456"/>
            </InputField>

            <ButtonField>
                <Button type="reset" variant={"outline"} className="border-none">Limpar dados</Button>
                <Button type="submit">Cadastrar</Button>
            </ButtonField>
        </form>
    )
}