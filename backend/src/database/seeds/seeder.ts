import { Task } from "src/entities/task.entity";
import { User } from "src/entities/user.entity"
import { generateHash } from "src/utils/generateHash";

export const seeder = async () => {
    const user1 = new User();

    user1.email = "rodrigo@gmail.com";
    user1.name = "Rodrigo Ribas";
    user1.password = await generateHash("123456");

    const task1 = new Task();
    const task2 = new Task();
    const task3 = new Task();
    const task4 = new Task();
    const task5 = new Task();
    const task6 = new Task();
    const task7 = new Task();
    const task8 = new Task();
    const task9 = new Task();

    task1.title = "Fazer janta"
    task1.description = " Fritar frango, esquentar arroz, cozinhar feijão e preparar sucoc de laranja";
    task1.user = user1;

    task2.title = "Programar"
    task2.description = "Preci";
    task2.user = user1;
    task2.isFavorite = true;

    task1.title = "Fazer teste técnico"
    task1.description = " Fritar frango, esquentar arroz, cozinhar feijão e preparar sucoc de laranja";
    task1.user = user1;

    task1.title = "Fazer janta"
    task1.description = " Fritar frango, esquentar arroz, cozinhar feijão e preparar sucoc de laranja";
    task1.user = user1;

    task1.title = "Fazer janta"
    task1.description = " Fritar frango, esquentar arroz, cozinhar feijão e preparar sucoc de laranja";
    task1.user = user1;

    task1.title = "Fazer janta"
    task1.description = " Fritar frango, esquentar arroz, cozinhar feijão e preparar sucoc de laranja";
    task1.user = user1;

    task1.title = "Fazer janta"
    task1.description = " Fritar frango, esquentar arroz, cozinhar feijão e preparar sucoc de laranja";
    task1.user = user1;

    task1.title = "Fazer janta"
    task1.description = " Fritar frango, esquentar arroz, cozinhar feijão e preparar sucoc de laranja";
    task1.user = user1;
    
}