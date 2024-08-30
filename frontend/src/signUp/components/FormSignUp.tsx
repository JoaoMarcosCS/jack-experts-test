import { useSignIn } from "../../auth/hooks/useSignIn"
import { Button } from "../../components/ui/button"
import { useCreateUserFormHandlers } from "../hooks/useCreateUserFormHandler"
import { InputField, Input, Label, ButtonField } from "../styled"

export const FormSignUp = () => {

    const {register, errors, handleSubmit, mutate, handleCreateUser} = useCreateUserFormHandlers();

    return (
        <form className="mt-10 shadow-md rounded-md p-10 max-sm:shadow-md" onSubmit={handleSubmit(handleCreateUser)}>
            <h1 className="text-2xl font-bold">Cadastre-se já!</h1>
            <p className="font-medium text-amber-400">Crie sua conta gratuitamente no Tasks</p>

            <InputField>
                <Label htmlFor="name">Nome</Label>
                <Input type="text" id="name"  placeholder="João Marcos" {...register("name")}/>
                <p>{errors.name?.message}</p>
            </InputField>

            <InputField>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="jmcsjoaomarcos@gmail.com" {...register("email")}/>
                <p>{errors.email?.message}</p>
            </InputField>

            <InputField>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="123456" {...register("password")}/>
                <p>{errors.password?.message}</p>
            </InputField>

            <ButtonField>
                <Button type="reset" variant={"outline"} className="border-none">Limpar dados</Button>
                <Button type="submit">Cadastrar</Button>
            </ButtonField>
        </form>
    )
}