import express from 'express';
import morgan from 'morgan';
import { startScraper } from './crawler';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  morgan('dev', {
    skip: (_, res) => res.statusCode < 400,
    stream: process.stderr,
  })
);

app.get('/', (_, res) => {
  res.sendStatus(200);
});

startScraper();

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
