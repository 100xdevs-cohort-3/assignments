let bookmarks = []; // in memory space

async function addBookmark(req,res,next){
// write here
    //validate the details
    const {url,category}=req.body;
    if(!url||!category){
        throw new Error("Details required")
    }

    //creating a bookmark
    const bookmark={
        url:url,
        category:category
    }
    //saving the bookmark
    bookmarks.push(bookmark);

    return res.status(201).send({message:"Bookmark created successfully"})
}

async function deleteBookmark(req,res,next){
// write here
    //validate the details
    const id=req.params.id;
    if(id===''){
        throw new Error("Detais required")
    }
    //delete the bookmark
    bookmarks.splice(id,1);

    return res.status(200).send({message:"Boookmark deleted succesfully"})

}

async function getAllBookmarks(req,res,next){
// write here
    return res.status(200).send(bookmarks)
}


module.exports={addBookmark,deleteBookmark,getAllBookmarks}
