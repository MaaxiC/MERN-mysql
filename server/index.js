import express from 'express';
import { server } from './config.js';
import indexRoutes from './routes/index.routes.js';
import tasksRoutes from './routes/tasks.routes.js';
import cors from 'cors';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, '../client/dist')))
app.use(indexRoutes);
app.use(tasksRoutes);

app.listen(server.port);
console.log(`Server is running on port ${server.port}`);