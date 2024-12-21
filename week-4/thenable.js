const thenable ={
    then: function(onFulfilled){
        setTimeout(()=>onFulfilled(42),1000);
    }
};

async function main(){
    await thenable
    console.log("hi there");
}


main();

//Every promise is a thenable
//Every thenable is not a promise
