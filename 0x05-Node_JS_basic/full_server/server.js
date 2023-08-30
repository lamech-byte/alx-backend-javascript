import express from 'express';
import routes from './routes';
import path from 'path';
import { readDatabase } from './utils';

const app = express();
const port = 1245;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

const databaseFilename = process.argv[2];
const dbPath = path.join(__dirname, databaseFilename);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
