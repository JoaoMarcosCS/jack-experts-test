import { DataSource } from "typeorm";
import { seeder } from "../seeds/seeder";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database:"db.sqlite",
    entities: ["src/entities/*{.ts,.js}*"],
    synchronize: true, // Apenas para desenvolvimento
    logging: true // Para logar todas as queries
});

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected");

        // Chame o seeder apenas no ambiente de desenvolvimento, se necessário
        // seeder();
    })
    .catch((err) => {
        console.error("Database disconnected: ", err);
    });