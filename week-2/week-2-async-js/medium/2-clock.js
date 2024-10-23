function counter (){
    let counter = 0
    setInterval(() => {
     counter ++ 
     let date = new Date() 
     let hours = date.getHours();
     let seconds = date.getSeconds();
     let minutes = date.getMinutes();
     let newformat = hours >= 12 ? 'PM' : 'AM';
     hours = hours % 12;
     console.log(`${hours}:${minutes}:${seconds} ${newformat}`) 
    }, 1000);


}

counter()