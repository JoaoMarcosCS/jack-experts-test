
import { DataSource } from "typeorm"
import { seeder } from "../seeds/seeder";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    entities: ["src/entities/*{.ts,.js}*"],
    //configuração de ambiente de desenvolvimento
    // synchronize: true,
    // logging: true
})

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected");
        //configuração usada apenas no ambiente desenvolvimento
        // seeder();
    })
    .catch((err) => {
        console.error("Database disconnected: ", err)
    })