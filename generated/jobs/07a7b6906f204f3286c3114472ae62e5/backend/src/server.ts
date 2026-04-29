import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import corsMiddleware from './middleware/cors';
import errorHandler from './middleware/errorHandler';
import apiRouter from './routes/api';

dotenv.config();

const APP_NAME = 'ConnectMe';

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(corsMiddleware);

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', app: APP_NAME });
});

app.use('/api', apiRouter);

app.use(errorHandler);

const port = process.env.PORT ?? 8000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default app;