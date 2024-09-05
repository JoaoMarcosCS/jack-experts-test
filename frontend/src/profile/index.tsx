import { Title, SecondaryText, TextMuted } from "../components/Typography/styled";
import { Link } from "react-router-dom"
import { Loader2, Pen } from "lucide-react";
import { Section } from "../signUp/styled";
import { useUserDataById } from "./hooks/useUserDataById";
import { useUserStore } from "../store/user.store";
import { CardUpdateProfile } from "./components/CardUpdateProfile";
import { useDeleteUser } from "./hooks/useDeleteUser";
import { Button } from "../components/ui/button";

export const Profile = () => {

    const userId = useUserStore((state) => state.user?.id);

    const { data, isLoading } = useUserDataById({ id: userId! })

    const {mutate, isLoading: isDeletingAccount} = useDeleteUser();

    return (
        <Section>
            {isLoading ? (
                <div>
                    <Title>Perfil</Title>
                    <SecondaryText className="font-medium text-amber-400">
                        Estamos carregando sua informações <Loader2 className="animate-spin" />
                    </SecondaryText>
                </div>
            ) : (
                <div>
                    <div className="flex justify-between items-center">
                        <Title>Perfil</Title>

                        <CardUpdateProfile user={data?.user!}/>
                    </div>
                    <SecondaryText className="font-medium text-amber-400">
                        Veja sua informações pessoais
                    </SecondaryText>
                    <div className="mt-6">
                        <TextMuted>Nome</TextMuted>
                        <h1 className="text-2xl font-semibold">{data?.user.name}</h1>
                    </div>

                    <div className="mt-6">
                        <TextMuted>Email</TextMuted>
                        <h1 className="text-2xl font-semibold">{data?.user.email}</h1>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Button className="border-none text-xl text-red-500 font-semibold" variant={'outline'} onClick={() => {
                            mutate({ id: userId! });
                        }}>
                            {isDeletingAccount ? (
                                <Loader2 className="animate-spin" />
                            ) : (
                                "Deletar conta"
                            )}
                        </Button>
                    </div>
                </div>
            )}

        </Section>
    )
}