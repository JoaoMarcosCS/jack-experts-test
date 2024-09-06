
import { DataSource } from "typeorm"
import { seeder } from "../seeds/seeder";
import { env } from "../../environment/env";


export const AppDataSource = new DataSource({
    type: "mysql",
    // database: "db.sqlite",
    url: env.DATABASE_URI,
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