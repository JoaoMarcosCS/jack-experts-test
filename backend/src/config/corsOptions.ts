import { whiteList } from "./whiteList";

export const corsOptions = 
    {
        origin: 'http://localhost:3000', // O domínio do seu front-end
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
        allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
        credentials: true // Habilite isso se você precisar enviar cookies junto com as requisições
    }
