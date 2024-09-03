import { Task } from "src/entities/task.entity";
import { User } from "src/entities/user.entity";
import { generateHash } from "src/utils/generateHash";
import { AppDataSource } from "../config/data-source";

export const seeder = async () => {
    
    const taskRepository = AppDataSource.getRepository(Task);
    const userRepository = AppDataSource.getRepository(User);

    const user1 = new User();
    user1.email = "rodrigo@gmail.com";
    user1.name = "Rodrigo Ribas";
    user1.password = await generateHash("123456");
    await userRepository.save(user1);

    const favoriteStates = [false, true];

    const tasks = [
        {
            title: "Fazer janta",
            description: "Fritar frango, esquentar arroz, cozinhar feijão e preparar suco de laranja",
            user: user1,
            isFavorite: favoriteStates[0],
        },
        {
            title: "Programar",
            description: "Continuar a programar o projeto Jardim Saúde",
            user: user1,
            isFavorite: favoriteStates[1],
        },
        {
            title: "Estudar para prova",
            description: "Revisar todos os tópicos do capítulo 4 ao 7",
            user: user1,
            isFavorite: favoriteStates[0],
        },
        {
            title: "Ler livro",
            description: "Ler pelo menos 30 páginas do livro 'A Arte da Guerra'",
            user: user1,
            isFavorite: favoriteStates[1],
        },
        {
            title: "Limpar a casa",
            description: "Passar aspirador e limpar o pó dos móveis",
            user: user1,
            isFavorite: favoriteStates[0],
        },
        {
            title: "Fazer compras",
            description: "Comprar frutas, vegetais e laticínios para a semana",
            user: user1,
            isFavorite: favoriteStates[1],
        },
        {
            title: "Caminhada no parque",
            description: "Fazer uma caminhada de 5km no parque central",
            user: user1,
            isFavorite: favoriteStates[0],
        },
        {
            title: "Reunião com a equipe",
            description: "Discutir os pontos do projeto e próximos passos",
            user: user1,
            isFavorite: favoriteStates[1],
        },
        {
            title: "Assistir a um filme",
            description: "Escolher um filme para assistir com a família",
            user: user1,
            isFavorite: favoriteStates[0],
        },
        {
            title: "Organizar documentos",
            description: "Organizar arquivos importantes no escritório",
            user: user1,
            isFavorite: favoriteStates[1],
        },
        {
            title: "Fazer exercícios",
            description: "Realizar treino de musculação na academia",
            user: user1,
            isFavorite: favoriteStates[0],
        },
        {
            title: "Preparar apresentação",
            description: "Criar slides e ensaiar apresentação para o trabalho",
            user: user1,
            isFavorite: favoriteStates[1],
        },
        {
            title: "Pagar contas",
            description: "Pagar as contas de luz, água e internet",
            user: user1,
            isFavorite: favoriteStates[0],
        },
        {
            title: "Planejar viagem",
            description: "Organizar o roteiro e reservas para a viagem de férias",
            user: user1,
            isFavorite: favoriteStates[1],
        },
        {
            title: "Revisar código",
            description: "Revisar o código do projeto para otimização",
            user: user1,
            isFavorite: favoriteStates[0],
        },
        {
            title: "Fazer jardinagem",
            description: "Podar plantas e plantar novas sementes no jardim",
            user: user1,
            isFavorite: favoriteStates[1],
        },
        {
            title: "Atualizar CV",
            description: "Adicionar novas experiências e habilidades no currículo",
            user: user1,
            isFavorite: favoriteStates[0],
        },
        {
            title: "Preparar café da manhã",
            description: "Fazer pão fresco, café e preparar frutas",
            user: user1,
            isFavorite: favoriteStates[1],
        },
        {
            title: "Comprar presente",
            description: "Comprar presente para o aniversário de um amigo",
            user: user1,
            isFavorite: favoriteStates[0],
        },
        {
            title: "Fazer tarefas de casa",
            description: "Lavar roupa e passar ferro",
            user: user1,
            isFavorite: favoriteStates[1],
        },
        {
            title: "Participar de webinar",
            description: "Assistir e participar de um webinar sobre tecnologia",
            user: user1,
            isFavorite: favoriteStates[0],
        },
        {
            title: "Escrever blog",
            description: "Escrever e revisar o próximo post do blog pessoal",
            user: user1,
            isFavorite: favoriteStates[1],
        }
    ];

    await taskRepository.save(tasks);

    console.log("Tarefas inseridas com sucesso.");
};
