// given an input array, give me back all the enev values from it
//eg [1,2,3,4,5,6,7,8]=>[2,4,6,8]

/*
const arr=[1,2,3,4,5,6];

const newArray=[];

for(let i=0;i<arr.length;i++){
    if( arr[i]% 2==0){
        newArray.push(arr[i]);
    }
}


console.log(newArray);

*/


//other using filter
/*
const arr=[1,2,3,4,5,6];

function filterLogic(n){
    if(n%2==0){
        return true;
    }else {
        return false;
    }
}

const ans=arr.filter(filterLogic);

console.log(ans);
*/

const arr=["puja","raman","prash"];

const ans=arr.filter (function(n){
    if(n.startsWith("p")){
        return true;
    }else {
        return false;
    }
});

console.log(ans);

