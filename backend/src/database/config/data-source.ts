import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { env } from "../../environment/env";

dotenv.config();

const AppDataSource = new DataSource({
    type: "postgres",
    url: env.DATABASE_URL,
    synchronize: true,
    logging: false,
    entities: [],
    subscribers: [],
});

export default AppDataSource.initialize();