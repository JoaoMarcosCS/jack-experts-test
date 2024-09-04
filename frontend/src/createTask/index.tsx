import { SecondaryText, Title } from "../components/Typography/styled"
import { Button } from "../components/ui/button"
import { ButtonField, Form, Input, InputField, Label, LabelError } from "../components/Form/styled"
import { Section } from "../signUp/styled"
import { Loader2 } from "lucide-react"
import { useCreateTaskFormHandler } from "../tasks/hooks/useCreateTaskFormHandler"
import { api } from "../services/axios"

export const CreateTask = () => {

    const { register, errors, handleSubmit, handleCreateTask, isLoading } = useCreateTaskFormHandler();
    return (
        <Section>
            <Form className="shadow-lg" onSubmit={handleSubmit(handleCreateTask)}>
                <Title className="text-2xl font-bold">Criar tarefa</Title>
                <SecondaryText className="font-medium text-amber-400">Crie uma nova tarefa</SecondaryText>
                <InputField>
                    <Label htmlFor="title">Título</Label>
                    <Input type="text" id="title" placeholder="Ir ao mercado, comprar frutas..."
                     {...register("title")} />
                    <LabelError className="text-red-400">{errors.title?.message}</LabelError>
                </InputField>

                <InputField>
                    <Label htmlFor="description">Descrição</Label>
                    <Input type="text" id="description" placeholder="Tenho que ir ao mercado as 17h comprar pão"
                     {...register("description")} />
                    <LabelError>{errors.description?.message}</LabelError>
                </InputField>

                <ButtonField>
                    <Button type="reset" variant={"outline"} className="border-none">Limpar dados</Button>
                    <Button type="submit" className="bg-amber-400 text-base">
                        {isLoading ? (
                            <Loader2 className="animate-spin" />
                        ) : (
                            "Criar"
                        )}
                    </Button>
                </ButtonField>

            </Form>
        </Section>
    )
}