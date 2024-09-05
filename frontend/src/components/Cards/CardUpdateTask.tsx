import { Pen } from "lucide-react";
import { AlertDialogCancel } from "../../components/ui/alert-dialog";
import { Button } from "../../components/ui/button"
import { ButtonField, Form, Input, InputField, Label, LabelError } from "../../components/Form/styled"
import { Loader2 } from "lucide-react"
import { Task } from "../../interfaces/task.interface";
import { useUpdateTaskFormHandler } from "../../tasks/hooks/useUpdateTaskFormHandler";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

interface UpdateTaskeCard {
  task: Task
}

export const CardUpdateTask = ({ task }: UpdateTaskeCard) => {

  const { register, errors, handleSubmit, handleUpdateTask, isLoading } = useUpdateTaskFormHandler(task);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex min-w-14 flex-col transition-all justify-center py-2 text-sm font-semibold items-center rounded-sm hover:text-amber-400">
          <Pen />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar informaçoes da tarefa</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <Form className="shadow-lg" onSubmit={handleSubmit(handleUpdateTask)}>
          <InputField>
            <Label htmlFor="title">Título</Label>
            <Input type="text" id="title" {...register("title")} />
            <LabelError className="text-red-400">{errors.title?.message}</LabelError>
          </InputField>

          <InputField>
            <Label htmlFor="description">Descrição</Label>
            <Input type="text" id="description" {...register("description")} />
            <LabelError>{errors.description?.message}</LabelError>
          </InputField>

          <ButtonField>
            <DialogClose className="bg-red-400 text-white">Cancelar</DialogClose>
            <Button type="submit" className="bg-amber-400 text-base">
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Atualizar"
              )}
            </Button>
          </ButtonField>
        </Form>
      </DialogContent>
    </Dialog>

  )
}