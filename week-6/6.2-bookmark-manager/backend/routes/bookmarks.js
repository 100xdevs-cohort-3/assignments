let bookmarks = []; // in memory space
let currentId = 0;

export async function addBookmark(req, res, next) {
  const { url, alias } = req.body;

  if (!url || !alias) {
    return res.status(400).json({ error: "Please provide url." });
  }

  const newBookmark = {
    id: currentId++,
    url,
    alias,
  };

  bookmarks.push(newBookmark);

  res.status(200).json(newBookmark);
}

export async function deleteBookmark(req, res, next) {
  const id = parseInt(req.params.id);

  const bookmarkIndex = bookmarks.findIndex((bookmark) => bookmark.id === id);

  if (bookmarkIndex === -1) {
    return res.status(400).json({ error: "Invalid bookmark id." });
  }

  bookmarks.splice(bookmarkIndex, 1);

  res.status(200).json({ msg: "Bookmark deleted successfully." });
}

export async function getAllBookmarks(req, res, next) {
  res.status(200).json(bookmarks);
}
