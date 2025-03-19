import dotenv from "dotenv";

dotenv.config();
export const envConfig = {
    PG_PORT: +(process.env.PG_PORT ?? 5432),
    PG_USER: process.env.PG_USER,
    PG_HOST: process.env.PG_HOST,
    PG_DB: process.env.PG_DB,
    PG_PASS: process.env.PG_PASS,
    REDIS_URL: process.env.REDIS_URL,
    APP_PORT: +(process.env.APP_PORT ?? 8080) 
};
