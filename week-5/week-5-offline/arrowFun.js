const arr=["puja","raman","prash"];

const ans=arr.filter( (n)=>{
    if(n.startsWith("p")){
        return true;
    }else {
        return false;
    }
});

console.log(ans);