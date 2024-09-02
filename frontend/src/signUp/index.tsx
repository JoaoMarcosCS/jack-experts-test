import { Logo, SecondaryText, TextMuted, Title } from "../components/Typography/styled"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import { ButtonField, Form, Input, InputField, Label, LabelError } from "../components/Form/styled"
import { Content, Nav, Section } from "./styled"
import { useCreateUserFormHandlers } from "./hooks/useCreateUserFormHandler"
import { Loader2 } from "lucide-react"

export const SignUp = () => {

    const { register, errors, handleSubmit, handleCreateUser, isError, isLoading } = useCreateUserFormHandlers();
    return (
        <Section>
            <Nav>
                <Logo className="text-amber-400">MyTask</Logo>
            </Nav>
            <Form className="shadow-lg" onSubmit={handleSubmit(handleCreateUser)}>
                <Title className="text-2xl font-bold">Cadastre-se já!</Title>
                <SecondaryText className="font-medium text-amber-400">Crie sua conta gratuitamente no Tasks</SecondaryText>
                <InputField>
                    <Label htmlFor="name">Nome</Label>
                    <Input type="text" id="name" placeholder="João Marcos" {...register("name")} />
                    <LabelError className="text-red-400">{errors.name?.message}</LabelError>
                </InputField>

                <InputField>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="jmcsjoaomarcos@gmail.com" {...register("email")} />
                    <LabelError>{errors.email?.message}</LabelError>
                </InputField>

                <InputField>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" placeholder="123456" {...register("password")} />
                    <LabelError>{errors.password?.message}</LabelError>
                </InputField>

                <ButtonField>
                    <Button type="reset" variant={"outline"} className="border-none">Limpar dados</Button>
                    <Button type="submit" className="bg-amber-400 text-base">
                        {isLoading ? (
                            <Loader2 className="animate-spin"/>
                        ) : (
                            "Cadastrar"
                        )}
                    </Button>
                </ButtonField>

                <Content align="center">
                    <TextMuted>
                        Possui alguma conta?
                        <Link to="/signin" className="text-sky-400"> Faça login</Link>
                    </TextMuted>
                </Content>
            </Form>
        </Section>
    )
}