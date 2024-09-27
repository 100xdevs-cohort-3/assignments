const API_URL = 'http://localhost:3001/bookmarks';

// Fetch bookmarks when the page loads
document.addEventListener('DOMContentLoaded', () => {
//   start here
    fetchBookmarks();
});

// Fetch bookmarks from the backend
function fetchBookmarks() {
    //  start here
    fetch(`${API_URL}`)
    .then(res=>res.json())
    .then(data=>{
        const bookmarkList=document.getElementById('bookmark-list');
        data.foreach(bookmark=>{
            console.log(bookmark);
            const divEl=document.createElement('div');
            divEl.innerHTML=`${bookmark.url}+(+${bookmark.category}+)`;
            bookmarkList.appendChild(divEl);
            
            
        })
    })
}

// Add a bookmark to the DOM
function addBookmarkToDOM(bookmark) {
    //  start here
}

// Add a new bookmark
document.getElementById('add-bookmark-btn').addEventListener('click', () => {
      //  start here
});

// Delete a bookmark
function deleteBookmark(id) {
     //  start here;
}
