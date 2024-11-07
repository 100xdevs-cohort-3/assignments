let bookmarks = []; // in memory space
let currentId = 1; // Counter for unique IDs

// Add a new Bookmark
export async function addBookmark(req, res, next) {
    try {
        const { category, url } = req.body;
        if (!category || !url) {
            return res.status(400).json({ error: 'Category and Url are required' });
        }

        const newBookmark = { id: currentId++, category, url }; // Use the same ID counter as todos
        bookmarks.push(newBookmark);
        return res.status(201).json(newBookmark);
    } catch (error) {
        return res.status(500).json({ error: "An error occurred while adding the bookmark" });
    }
}

// Delete a Bookmark
export async function deleteBookmark(req, res, next) {
    try {
        const { id } = req.params;
        const bookmarkIndex = bookmarks.findIndex(bookmark => bookmark.id == id); // Use 'id' for consistency
        if (bookmarkIndex === -1) {
            return res.status(404).json({ error: 'Bookmark not found' });
        }
        bookmarks.splice(bookmarkIndex, 1);
        return res.status(200).json({ message: 'Bookmark deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: "An error occurred while deleting the bookmark" });
    }
}

// Get all Bookmarks
export async function getAllBookmarks(req, res, next) {
    res.json(bookmarks);
}
