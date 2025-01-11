const API_URL = "http://localhost:3001/bookmarks";

// Fetch bookmarks when the page loads
document.addEventListener("DOMContentLoaded", async () => {
  const bookmarks = await fetchBookmarks();

  bookmarks.forEach((bookmark) => {
    addBookmarkToDOM(bookmark);
  });
});

// Fetch bookmarks from the backend
async function fetchBookmarks() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

// Add a bookmark to the DOM
function addBookmarkToDOM(bookmark) {
  const container = document.createElement("li");
  const url = document.createElement("a");
  const deleteBtn = document.createElement("button");

  url.innerHTML = bookmark.url + " (" + bookmark.alias + ")";
  url.href = bookmark.url;
  url.target = "_blank";
  deleteBtn.innerHTML = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = () => deleteBookmark(bookmark.id);

  container.id = bookmark.id;
  container.appendChild(url);
  container.appendChild(deleteBtn);

  document.getElementById("bookmark-list").prepend(container);
}

// Add a new bookmark
document
  .getElementById("add-bookmark-btn")
  .addEventListener("click", async () => {
    url = document.getElementById("bookmark-url").value;
    alias = document.getElementById("bookmark-category").value;

    if (!url || url.trim() === "" || !alias || alias.trim() === "") {
      alert("Please provide url and category.");
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
          alias,
        }),
      });

      const newBookmark = await response.json();
      addBookmarkToDOM(newBookmark);

      document.getElementById("bookmark-url").value = "";
      document.getElementById("bookmark-category").value = "";
    } catch (error) {
      console.error(error);
    }
  });

// Delete a bookmark
async function deleteBookmark(id) {
  try {
    await fetch(API_URL + "/" + id, {
      method: "DELETE",
    });

    const deletedBookmark = document.getElementById(id);
    deletedBookmark.parentElement.removeChild(deletedBookmark);
  } catch (error) {
    console.error(error);
  }
}
