
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    entities: ["src/entities/*{.ts,.js}*"],
    logging: true
})

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected")
    })
    .catch((err) => {
        console.error("Database disconnected: ", err)
    })