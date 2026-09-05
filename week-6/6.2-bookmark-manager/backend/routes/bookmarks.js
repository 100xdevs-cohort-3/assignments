let bookmarks = [];
let nextId = 1;
export function getAllBookmarks(req, res) {
  const query = typeof req.query.q === 'string' ? req.query.q.toLowerCase() : '';
  res.json(
    bookmarks.filter(
      (bookmark) =>
        (!query || (bookmark.category + ' ' + bookmark.url).toLowerCase().includes(query)) &&
        (req.query.favorite !== 'true' || bookmark.favorite),
    ),
  );
}
export function addBookmark(req, res) {
  const { category, url } = req.body;
  if (
    typeof category !== 'string' ||
    !category.trim() ||
    category.length > 80 ||
    typeof url !== 'string' ||
    url.length > 2000
  )
    return res.status(400).json({ message: 'Category and a valid URL are required' });
  let parsed;
  try {
    parsed = new URL(url);
    if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error();
  } catch {
    return res.status(400).json({ message: 'Use an http or https URL' });
  }
  const bookmark = { id: nextId++, category: category.trim(), url: parsed.href, favorite: false };
  bookmarks.push(bookmark);
  res.status(201).json(bookmark);
}
export function deleteBookmark(req, res) {
  const index = bookmarks.findIndex((bookmark) => bookmark.id === Number(req.params.id));
  if (index < 0) return res.status(404).json({ message: 'Bookmark not found' });
  bookmarks.splice(index, 1);
  res.status(204).end();
}
export function setFavorite(req, res) {
  const bookmark = bookmarks.find((bookmark) => bookmark.id === Number(req.params.id));
  if (!bookmark) return res.status(404).json({ message: 'Bookmark not found' });
  if (typeof req.body.favorite !== 'boolean')
    return res.status(400).json({ message: 'favorite must be boolean' });
  bookmark.favorite = req.body.favorite;
  res.json(bookmark);
}
