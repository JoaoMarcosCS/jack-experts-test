import app from "./app";
import { env } from "./environment/env";

app.listen(env.APP_PORT, () => {
  console.log("Servidor rodando: http://localhost:" + env.APP_PORT);
});