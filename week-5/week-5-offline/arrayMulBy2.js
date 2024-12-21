// given an array ,give me back a new array in which every value is multiplied by 2

/*
const inputArray=[1,2,3,4,5];
const newarray=[];

for(let i=0;i<inputArray.length;i++){
    newarray.push(inputArray[i]*2);
}


console.log(newarray);
*/


//other solution using map function present in array


/*
const input=[1,2,3,4,5];

function transform(i){
    return i*4;

}

const ans=input.map(transform);
console.log(ans);
*/


//in short
const input=[1,2,3,4,5];

const ans=input.map(function (i){
    return i *5;
});

console.log(ans);

