import express from 'express';
import cors from 'cors';
import {
  addBookmark,
  deleteBookmark,
  getAllBookmarks,
  searchBookmarks,
  favoriteBookmark,
  unfavoriteBookmark
} from './routes/bookmarks.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Get all bookmarks
app.get('/bookmarks', getAllBookmarks);

// Search bookmarks
app.get('/bookmarks/search', searchBookmarks);

// Add a new bookmark
app.post('/bookmarks', addBookmark);

// Favorite a bookmark
app.patch('/bookmarks/:id/favorite', favoriteBookmark);

// Unfavorite a bookmark
app.patch('/bookmarks/:id/unfavorite', unfavoriteBookmark);

// Delete a bookmark
app.delete('/bookmarks/:id', deleteBookmark);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
