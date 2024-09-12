let counter = 0; 


const updateCounter = () => {
  counter++; 
  console.log(counter);
};

setInterval(updateCounter, 1000);
