
import { DataSource } from "typeorm"
import { seeder } from "../seeds/seeder";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    entities: ["src/entities/*{.ts,.js}*"],
    logging: true
})

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected");
        seeder();
    })
    .catch((err) => {
        console.error("Database disconnected: ", err)
    })