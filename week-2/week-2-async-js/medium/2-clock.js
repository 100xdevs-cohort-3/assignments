// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

const time=new Date();
//  let hour=time.getHours();
//  let minute=time.getMinutes();
//  let seconds=time.getSeconds();

 setInterval(function(){
    const time=new Date();
    let hour=time.getHours();
    let minutes=time.getMinutes();
    let seconds=time.getSeconds();

    let tertary_operator=hour>12?"PM":"AM";
    console.log(`${hour} : ${minutes} : ${seconds}  ${tertary_operator}`)
 },1000)

