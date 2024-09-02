import { Logo, SecondaryText, TextMuted, Title } from "../components/Typography/styled"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import { ButtonField, Form, Input, InputField, Label, LabelError } from "../components/Form/styled"
import { Content, Nav, Section } from "./styled"
import { useSignIn } from "@/auth/hooks/useSignIn"
import { useSignInUserFormHandler } from "./hooks/useSignInUserFormHandler"
import { Loader2 } from "lucide-react"

export const SignIn = () => {

    const { register, errors, handleSubmit, handleSignInUser, isLoading } = useSignInUserFormHandler();
    
    return (
        <Section>
            <Nav>
                <Logo className="text-amber-400">MyTask</Logo>
            </Nav>
            <Form className="shadow-lg" onSubmit={handleSubmit(handleSignInUser)}>
                <Title className="text-2xl font-bold">Faça login!</Title>
                <SecondaryText className="font-medium text-amber-400">Faça login para acessar suas tarefas</SecondaryText>
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
                            "Login"
                        )}
                    </Button>
                </ButtonField>

                <Content align="center">
                    <TextMuted>
                        Não possui uma conta ainda?
                        <Link to="/signup" className="text-sky-400"> Faça seu Cadastro</Link>
                    </TextMuted>
                </Content>
            </Form>
        </Section>
    )
}