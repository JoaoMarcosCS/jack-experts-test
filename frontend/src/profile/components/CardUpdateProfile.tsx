import { Pen } from "lucide-react";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../../components/ui/alert-dialog";
import { User } from "../../interfaces/user.interface";
import { Button } from "../../components/ui/button"
import { ButtonField, Form, Input, InputField, Label, LabelError } from "../../components/Form/styled"
import { Loader2 } from "lucide-react"
import { useUpdateUserFormHandler } from "../hooks/useUpdateUserFormHandler";

interface UpdateProfileCard {
  user: User
}

export const CardUpdateProfile = ({ user }: UpdateProfileCard) => {

  const { handleUpdateUser, isUpdatingUserData, register, errors, handleSubmit}  = useUpdateUserFormHandler(user);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="flex min-w-14 flex-col transition-all justify-center py-2 text-sm font-semibold items-center rounded-sm hover:text-amber-400">
          <Pen />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Editar informaçoes do perfil</AlertDialogTitle>
          <AlertDialogDescription>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Form className="shadow-lg" onSubmit={handleSubmit(handleUpdateUser)}>
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
            <AlertDialogCancel className="bg-red-400 text-white">Cancelar</AlertDialogCancel> 
            <Button type="submit" className="bg-amber-400 text-base">
              {isUpdatingUserData ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Atualizar"
              )}
            </Button>
          </ButtonField>
        </Form>
      </AlertDialogContent>
    </AlertDialog>

  )
}