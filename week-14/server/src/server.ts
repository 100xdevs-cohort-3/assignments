import 'dotenv/config';
import express, { ErrorRequestHandler } from 'express';
import cors from 'cors';
import path from 'node:path';
import { connectToDatabase } from './models';
import { accountRoutes } from './routes/accounts';
import { adminCourses, userCourses } from './routes/courses';
export const app = express();
app.use(cors());
app.use(express.json({ limit: '32kb' }));
app.get('/healthy', (req, res) => res.json({ status: 'ok' }));
app.use('/admin', accountRoutes('admin'), adminCourses);
app.use('/users', accountRoutes('user'), userCourses);
app.use(express.static(path.join(__dirname, '../../client/dist')));
const errors: ErrorRequestHandler = (error, req, res, next) => {
  if (res.headersSent) {
    next(error);
    return;
  }
  const status =
    error.status ||
    (error.code === 11000
      ? 409
      : ['ValidationError', 'CastError'].includes(error.name)
        ? 400
        : 500);
  res
    .status(status)
    .json({
      message:
        status === 409
          ? 'Username already exists'
          : status === 500
            ? 'Server error'
            : error.message,
    });
};
app.use(errors);
export async function start() {
  if (!process.env.JWT_SECRET) throw new Error('Set JWT_SECRET in .env');
  await connectToDatabase();
  const port = Number(process.env.PORT) || 3014;
  return app.listen(port, () => console.log('Coursify API: http://localhost:' + port));
}
if (require.main === module)
  start().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
