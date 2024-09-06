import { DataSource } from "typeorm";
import { seeder } from "../seeds/seeder";
import { env } from "../../environment/env";
import { User } from "../../entities/user.entity";
import { Task } from "../../entities/task.entity";

export const AppDataSource = new DataSource({
    type: "mysql",
    url: env.DATABASE_URI,
    entities: [User, Task], // Verifique se esse caminho está correto
    // synchronize: true, // Apenas para desenvolvimento
    logging: true // Para logar todas as queries
});

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected");

        const entityMetadatas = AppDataSource.entityMetadatas;
        console.log("Entities loaded:", entityMetadatas.map(meta => meta.name));

        const userEntity = entityMetadatas.find(meta => meta.name === "User");
        if (userEntity) {
            console.log("User entity loaded successfully");
        } else {
            console.error("User entity not found!");
        }

        // Chame o seeder apenas no ambiente de desenvolvimento, se necessário
        // seeder();
    })
    .catch((err) => {
        console.error("Database disconnected: ", err);
    });