import express from "express";
import cors from 'cors';
import IndexRouter from './routes/index'

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

const PORT = 8080;

app.use('/', IndexRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
});