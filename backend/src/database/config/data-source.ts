import { DataSource } from "typeorm";
import { seeder } from "../seeds/seeder";
import { env } from "../../environment/env";

export const AppDataSource = new DataSource({
    type: "postgres",
    url: env.DATABASE_CONNECTION_STRING,
    entities: ["src/entities/*{.ts,.js}*"],
    // synchronize: true, // Apenas para desenvolvimento
    // logging: true // Para logar todas as queries

});

AppDataSource.initialize()
    .then(async () => {
        console.log("Database connected");

        AppDataSource.entityMetadatas.forEach(metadata => {
            console.log(`Entity: ${metadata.name}, Table: ${metadata.tableName}`);
        });
        // Chame o seeder apenas no ambiente de desenvolvimento, se necessário
        // await seeder();
    })
    .catch((err) => {
        console.error("Database disconnected: ", err);
    });