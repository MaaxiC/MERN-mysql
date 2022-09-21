import { createPool } from 'mysql2/promise';
import { server } from './config.js';

export const pool = createPool({
    host: server.host,
    port: server.db_port,
    user: server.user,
    password: server.password,
    database: server.database,
});