import { config } from 'dotenv';

config();
const server = {
    port: process.env.PORT || 4000,
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || 'password',
    database: process.env.DATABASE || 'testdb',
    db_port: process.env.DB_PORT || 3306,
};

export { server };