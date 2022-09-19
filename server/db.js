import { createPool } from 'mysql2/promise';
import { server } from './config.js';

export const pool = createPool({
    host: server.host,
    port: 3306,
    user: server.user,
    password: server.password,
    database: server.database,
});