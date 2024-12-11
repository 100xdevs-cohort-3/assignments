// axios are external library we have to import it
const axios=require("axios");


//Post
async function main(){
    const response =await fetch("https://www.toptal.com/developers/postbin/1706261117587-5522551864851",
        {
            method:"POST",
            headers:{
                "Authorization":"Bearer 123"
            }
        },
    );
    //resturn tha text
    const textualData=await response.text();
    console.log(textualData);
}


//post
async function main(){
    const response =await axios.post("https://www.toptal.com/developers/postbin/1706261117587-5522551864851",{
        headers:{
                "Authorization":"Bearer 123"
        }
});
    //respomnse .data
    console.log(response.data);
}




main();

