let bookmarks = []; // in memory space

async function addBookmark(req,res,next){
// write here
    //validate the details
   try {
    const {url,category}=req.body;
    if(!url||!category){
        const err=new Error("Details required");
        err.status=400;
        throw err;
        // return res.status(401).send({message:"Details required"})
    }

    //creating a bookmark
    const bookmark={
        url:url,
        category:category,
        favorite:0
    }
    //saving the bookmark
    bookmarks.push(bookmark);

    return res.status(201).send(bookmarks)
   } catch (error) {
    next(error)
   }
}

async function deleteBookmark(req,res,next){
// write here
   try {
     //validate the details
     const id=req.params.id;
     if(id===''){
         const err=new Error("Details required");
         err.status=400;
         throw err;
     }

     if(id>bookmarks.length){
        const err=new Error("Invalid information");
        err.status=400;
        throw err;
     }
     //delete the bookmark
     bookmarks.splice(id,1);
 
     return res.status(200).send(bookmarks)
   } catch (error) {
    next(error)
   }

}

async function getAllBookmarks(req,res,next){
// write here
    return res.status(200).send(bookmarks)
}

const favoriteBookmark=async(req,res,next)=>{
    try {
        //get details from frontend
        //validate the details
        //update the bookmark
    
        const id=req.params.id;
        if(id===''){
            const err=new Error("Details required");
            err.status=400;
            throw err;
        }

        if(id>bookmarks.length){
            const err=new Error("Invalid information");
            err.status=400;
            throw err;
         }
         
        bookmarks[id].favorite=!bookmarks[id].favorite;
        return res.status(200).send({message:"Marked succcessfully"});
    } catch (error) {
        next(error)
    }
}

const getBookmark=async (req,res,next)=>{
   try {
     //get details from frontend
     //validate the details
     //search for bookmark in bookmarks
     //if find then return bookmark
 
     const url=req.body.url;
     const category=req.body.category;
    
     if(!url||!category){
         const err=new Error("Details required");
         err.status=400;
         throw err;
     }
     
     let searchedBookmarks=[];
     bookmarks.forEach(bookmark=>{
         if(bookmark.url===url&&bookmark.category===category){
             searchedBookmarks.push(bookmark);
         }
     })
 
     if(searchedBookmarks.length===0){
        const err=new Error("Not found");
        err.status=404;
        throw err;
     }

     return res.status(200).send(searchedBookmarks);

   } catch (error) {
    next(error)
   }
}


module.exports={addBookmark,deleteBookmark,getAllBookmarks,getBookmark,favoriteBookmark}
