

// setInterval(()=>{console.log("after few seconds");
// },10000)

function count() {
    console.log("after one second the fuction called againg");
    setTimeout(count,10000)
}

count()