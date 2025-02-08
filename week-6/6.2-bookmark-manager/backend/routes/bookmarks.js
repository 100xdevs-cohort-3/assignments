let bookmarks = [];
let currentId = 1;

// add a new BookMark

export async function addBookmark(req,res,next){
     try{
        const{category,url} = req.body;
        if(!category || !url){
         return res.status(400).json({
            error : "Category and url are required"
         })
        }
        const newBookmark = {id: currentId++, category,url};
        bookmarks.push(newBookmark);
     }catch(error){
        return res.status(500).json({
            error: "An error occurred during adding a new bookmark"
        })
     }
}


// delete a bookmark

export async function deleteBookmark(req,res,next){
    try{
        const {id} = req.params;
        const bookmarkIndex = bookmarks.findIndex( (bk) => bk.id=id);
        if(bookmarkIndex ==-1){
            return res.status(404).json({
                error: "Bookmark not found"
            })
        }

        bookmarks.splice(bookmarkIndex,1);
        return res.status(200).json({
            message: "Deleting a succesfull bookmarks"
        })
    }catch(error){
        return res.status(500).json({
            error : "An error occured during a deleting bookmark"
        })
    }
}

//get All bookmark
export async function getAllBookmarks(req,res,next){
    res.json(bookmarks);
}
