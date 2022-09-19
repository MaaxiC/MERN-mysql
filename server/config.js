import { config } from 'dotenv';

config();
const server = {
    port: process.env.PORT,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
};

export { server };