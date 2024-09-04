import { Title, SecondaryText, TextMuted } from "../components/Typography/styled";
import { Link } from "react-router-dom"
import { Loader2, Pen } from "lucide-react";
import { Section } from "../signUp/styled";
import { useUserDataById } from "./hooks/useUserDataById";
import { useUserStore } from "../store/user.store";
import { CardUpdateProfile } from "./components/CardUpdateProfile";

export const Profile = () => {

    const userId = useUserStore((state) => state.user?.id);

    const { data, isLoading } = useUserDataById({ id: userId! })

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
                </div>
            )}

        </Section>
    )
}