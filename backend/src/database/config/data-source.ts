import { User } from "../../user/user.entity"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    entities: [User],
    logging: true
})

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected")
    })
    .catch((err) => {
        console.error("Database disconnected: ", err)
    })