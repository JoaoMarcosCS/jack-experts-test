import { Logo, TextMuted, Title } from "../components/Typography/styled"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import { ButtonField, Form, Input, InputField, Label, LabelError } from "../components/Form/styled"
import {  Content, Nav, Section } from "./styled"
import { useCreateUserFormHandlers } from "./hooks/useCreateUserFormHandler"

export const SignUp = () => {

    const { register, errors, handleSubmit, mutate, handleCreateUser } = useCreateUserFormHandlers();
    
    return (
        <Section>
            <Nav>
                <Logo className="text-amber-400">Task</Logo>
            </Nav>
   
            <Form className="shadow-lg" onSubmit={handleSubmit(handleCreateUser)}>
            <h1 className="text-2xl font-bold">Cadastre-se já!</h1>
            <p className="font-medium text-amber-400">Crie sua conta gratuitamente no Tasks</p>

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
                <Button type="submit" className="bg-amber-400 text-base">Cadastrar</Button>
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