import { LogOut } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../components/ui/alert-dialog";
import { useLogout } from "./hooks/useLogout";



export const LogoutDialog = () => {

  const {handleLogout} = useLogout()

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="flex min-w-14 flex-col transition-all justify-center py-2 text-sm font-semibold items-center rounded-sm hover:text-amber-400">
          <LogOut /> Sair
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja mesmo encerrar sua sessão?</AlertDialogTitle>
          <AlertDialogDescription>
            Você irá desolgar da sua conta. Caso queira ver suas tarefas, você terá
            que realizar o login novamente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-amber-400 text-white">Cancelar</AlertDialogCancel>
          <AlertDialogAction className="bg-red-400 text-white" onClick={handleLogout}>Sair</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  )
}