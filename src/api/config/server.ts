import { app } from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT: number = parseInt(process.env.POST ?? '8080', 0);
const HOST = process.env.HOST ?? 'localhost';

app.listen(PORT, HOST, () => {
  // tslint:disable-next-line: no-console
  console.log(`App listening on port ${PORT}`);
})