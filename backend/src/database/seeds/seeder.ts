import { Task } from "../../entities/task.entity";
import { User } from "../../entities/user.entity";
import { generateHash } from "../../utils/generateHash";
import { AppDataSource } from "../config/data-source";

export const seeder = async () => {
    console.log("Iniciando seed\n\n")
    const taskRepository = AppDataSource.getRepository(Task);
    const userRepository = AppDataSource.getRepository(User);

    const user1 = new User();
    user1.email = "jmcsjoaomarcos@gmail.com";
    user1.name = "João Marcos";
    user1.password = await generateHash("123456");
    await userRepository.save(user1);

    const tasks = [
        {
            title: "Fazer janta",
            description: "Fritar frango, esquentar arroz, cozinhar feijão e preparar suco de laranja",
            user: user1,
            isFavorite: false,
        },
        {
            title: "Programar",
            description: "Continuar a programar o projeto Jardim Saúde",
            user: user1,
            isFavorite: true,
        },
        {
            title: "Estudar para prova",
            description: "Revisar todos os tópicos do capítulo 4 ao 7",
            user: user1,
            isFavorite: false,
        },
        {
            title: "Ler livro",
            description: "Ler pelo menos 30 páginas do livro 'A Arte da Guerra'",
            user: user1,
            isFavorite: true,
        },
        {
            title: "Limpar a casa",
            description: "Passar aspirador e limpar o pó dos móveis",
            user: user1,
            isFavorite: false,
        },
        {
            title: "Fazer compras",
            description: "Comprar frutas, vegetais e laticínios para a semana",
            user: user1,
            isFavorite: true,
        },
        {
            title: "Caminhada no parque",
            description: "Fazer uma caminhada de 5km no parque central",
            user: user1,
            isFavorite: false,
        },
        {
            title: "Reunião com a equipe",
            description: "Discutir os pontos do projeto e próximos passos",
            user: user1,
            isFavorite: true,
        },
        {
            title: "Assistir a um filme",
            description: "Escolher um filme para assistir com a família",
            user: user1,
            isFavorite: false,
        },
        {
            title: "Organizar documentos",
            description: "Organizar arquivos importantes no escritório",
            user: user1,
            isFavorite: true,
        },
        {
            title: "Fazer exercícios",
            description: "Realizar treino de musculação na academia",
            user: user1,
            isFavorite: false,
        },
        {
            title: "Preparar apresentação",
            description: "Criar slides e ensaiar apresentação para o trabalho",
            user: user1,
            isFavorite: true,
        },
        {
            title: "Pagar contas",
            description: "Pagar as contas de luz, água e internet",
            user: user1,
            isFavorite: false,
        },
        {
            title: "Planejar viagem",
            description: "Organizar o roteiro e reservas para a viagem de férias",
            user: user1,
            isFavorite: true,
        },
        {
            title: "Revisar código",
            description: "Revisar o código do projeto para otimização",
            user: user1,
            isFavorite: false,
        },
        {
            title: "Fazer jardinagem",
            description: "Podar plantas e plantar novas sementes no jardim",
            user: user1,
            isFavorite: true,
        },
        {
            title: "Atualizar CV",
            description: "Adicionar novas experiências e habilidades no currículo",
            user: user1,
            isFavorite: false,
        },
        {
            title: "Preparar café da manhã",
            description: "Fazer pão fresco, café e preparar frutas",
            user: user1,
            isFavorite: true,
        },
        {
            title: "Comprar presente",
            description: "Comprar presente para o aniversário de um amigo",
            user: user1,
            isFavorite: false,
        },
        {
            title: "Fazer tarefas de casa",
            description: "Lavar roupa e passar ferro",
            user: user1,
            isFavorite: true,
        },
        {
            title: "Participar de webinar",
            description: "Assistir e participar de um webinar sobre tecnologia",
            user: user1,
            isFavorite: false,
        },
        {
            title: "Escrever blog",
            description: "Escrever e revisar o próximo post do blog pessoal",
            user: user1,
            isFavorite: true,
        }
    ];

    await AppDataSource.createQueryBuilder().insert().into(Task).values(tasks).execute();

    console.log("\n\nSeed finalizado\n\n");
};
