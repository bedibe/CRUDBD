import express from 'express';
import listaRoutes from './routes/lista.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', listaRoutes);

app.listen(8800);