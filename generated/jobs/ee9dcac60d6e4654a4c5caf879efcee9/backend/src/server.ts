import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

// Dummy route
app.get('/api/test', (_req, res) => {
  res.status(200).send('API is working!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


For `routes/api.ts`, you would typically have something like this:


import express from 'express';
import { Router } from 'express';

const router = express.Router();

// Dummy route
router.get('/test', (_req, res) => {
  res.status(200).send('API is working!');
});

export default router;


And then in `server.ts`, you would import and use the `api` router:


import express from 'express';
import apiRouter from './routes/api';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});