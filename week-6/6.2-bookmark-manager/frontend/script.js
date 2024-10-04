const API_URL = "http://localhost:3001/bookmarks";

// Fetch bookmarks when the page loads
document.addEventListener("DOMContentLoaded", () => {
  //   start here
  fetchBookmarks();
});

// Fetch bookmarks from the backend
function fetchBookmarks() {
  //  start here
  fetch(`${API_URL}`)
    .then((res) => res.json())
    .then((data) => {
        let i=0;
      data.forEach(function (bookmark) {
        addBookmarkToDOM(bookmark,i);
        i++;
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

// Add a bookmark to the DOM
function addBookmarkToDOM(bookmark, id) {
  //  start here

  const bookmarkList = document.getElementById("bookmark-list");
//   bookmarkList.innerHTML='';

    const divEl=document.createElement('div');

{/* <i class="fa-regular fa-heart"></i> */}
    const iEl=document.createElement('i');
    iEl.setAttribute('id',`${id}`)
    console.log(iEl.id);
    
    iEl.setAttribute('class','fa-regular fa-heart')
    if(bookmark.favorite)
        iEl.setAttribute('class','fa-solid fa-heart')
    iEl.addEventListener('click',()=>{
        if(iEl.classList[0]==='fa-regular')
        iEl.setAttribute('class','fa-solid fa-heart')
        else
        iEl.setAttribute('class','fa-regular fa-heart')
        fetch(`${API_URL}/${id}`,{
            headers:{
                'content-type':'application/json'
            },
            method:"PUT"
        })
        .catch(err=>{
            console.log(err);
            alert(err.message);
        })
    })

  const liEl = document.createElement("li");
//   liEl.setAttribute("class", `${id}`);

  const aEl = document.createElement("a");
  aEl.innerHTML = `${bookmark.url}(${bookmark.category})`;
  aEl.setAttribute("href", `${bookmark.url}`);
//   aEl.setAttribute('class',`${id}`);

  const delEl = document.createElement("button");
  delEl.innerHTML = "Delete";
  delEl.setAttribute('id',`${id}`);
  delEl.addEventListener('click',()=>{
    deleteBookmark(id);
  })

  divEl.appendChild(iEl);
  divEl.appendChild(aEl);
  liEl.appendChild(divEl);
  liEl.appendChild(delEl);

  bookmarkList.appendChild(liEl);
}

// Add a new bookmark
document.getElementById("add-bookmark-btn").addEventListener("click", () => {
  //  start here
  //get the details
  //trigger the request
  //get the resonse
  //add the bookmarks to DOM
  const bookmarkUrl=document.getElementById('bookmark-url');
  const bookmarkCategory=document.getElementById('bookmark-category');
  const url=bookmarkUrl.value;
  const category=bookmarkCategory.value;
  bookmarkUrl.value='';
  bookmarkCategory.value='';
  fetch(`${API_URL}`,{
    headers:{
        'content-type':'application/json'
    },
    method:"POST",
    body:JSON.stringify({
        url:url,
        category:category
    })
  })
  .then(res=>{
    if(!res.ok){
        const err=new Error(`${res.message}`);
        err.status=res.status;
        throw err;
    }
    return res.json()
  })
  .then(data=>{
    let i=0;
    const bookmarkList=document.getElementById('bookmark-list');
    bookmarkList.innerHTML='';
    data.forEach(bookmark=>{
        addBookmarkToDOM(bookmark,i);
        i++;
    })
  })
  .catch(err=>{
    console.log(err);
    alert(err.message);
})
});

// Delete a bookmark



function deleteBookmark(id) {
  //  start here;
  //capture the button click
  //then trigger the api with id
  //get bookmark array in response
  //add bookmarks to DOM
  fetch(`${API_URL}/${id}`, {
    headers: {
      "content-type": "application/json",
    },

    method: "Delete",
  })
    .then((res) => res.json())
    .then((data) => {
        const bookmarkList=document.getElementById('bookmark-list');
        bookmarkList.innerHTML='';
        let i = 0;
        data.forEach(function (bookmark) {
            addBookmarkToDOM(bookmark, i);
            i++;
      });
    })
    .catch((err) => {
      console.log(err);
    });
}



document.getElementById('search-bookmark-btn').addEventListener('click',()=>{
    const bookmarkUrl=document.getElementById('search-url');
    const bookmarkCategory=document.getElementById('search-category');
    const url=bookmarkUrl.value;
    const category=bookmarkCategory.value;
    bookmarkUrl.value='';
    bookmarkCategory.value='';

    fetch(`${API_URL}/search`,{
        headers:{
            'content-type':'application/json'
        },
        method:'POST',
        body:JSON.stringify({
            url:url,
            category:category
        })
    })
    .then(res=>{
        if(!res.ok){
            throw new Error(`${res.statusText}`)
        }
        return res.json()
    })
    .then(data=>{
        const bookmarkList=document.getElementById('bookmark-list');
        bookmarkList.innerHTML='';
        let i=0;
        data.forEach(bookmark=>{

            const liEl = document.createElement("li");

            const aEl = document.createElement("a");
            aEl.innerHTML = `${bookmark.url}(${bookmark.category})`;
            aEl.setAttribute("href", `${bookmark.url}`);

            liEl.appendChild(aEl);

            bookmarkList.appendChild(liEl);
        })
    })
    .catch(err=>{
        alert(err.message);
    })
})
