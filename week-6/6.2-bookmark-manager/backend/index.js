import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { addBookmark, deleteBookmark, getAllBookmarks, setFavorite } from './routes/bookmarks.js';
export const app = express();
app.use(cors());
app.use(express.json({ limit: '16kb' }));
app.get('/bookmarks/search', getAllBookmarks);
app.get('/bookmarks', getAllBookmarks);
app.post('/bookmarks', addBookmark);
app.delete('/bookmarks/:id', deleteBookmark);
app.patch('/bookmarks/:id/favorite', setFavorite);
app.use(express.static(fileURLToPath(new URL('../frontend', import.meta.url))));
app.use((error, req, res, next) => {
  if (res.headersSent) return next(error);
  res
    .status(error.status || 500)
    .json({ message: error.status === 400 ? 'Invalid JSON' : 'Server error' });
});
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT) || 3003;
  app.listen(port, () => console.log('Open http://localhost:' + port));
}
