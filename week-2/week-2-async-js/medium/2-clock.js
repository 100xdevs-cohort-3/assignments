function formatTime(date, use24Hour = true){

  const hours = 
  use24Hour?
  date.getHours().toString().padStart(2,'0')
  :
  (date.getHours()%12 || 12).toString().padStart(2,'0');


  const minutes = date.getMinutes().toString().padStart(2,'0');

  const seconds = date.getSeconds().toString().padStart(2, '0');

  const ampm = 
  use24Hour ? 
  '' 
  : 
  (date.getHours() >= 12 ? 'PM' : 'AM');

  return `${hours}:${minutes}:${seconds} ${ampm ? (' ' + ampm) : ''}`;

  //if ampm has value (AM/PM) then create a space then write ampm so as to keep space between time and ampm

}

function displayTime() {
  // console.clear();
  // const now = new Date();
  // const hours = now.getHours(); // Get the hour (0-23)
  // const minutes = now.getMinutes(); // Get the minutes (0-59)
  // const seconds = now.getSeconds(); // Get the seconds (0-59)
  // console.log(`${hours}:${minutes}:${seconds}`); 

  // --------------------------------------------------

  const now = new Date();
    const time24 = formatTime(now);
    const time12 = formatTime(now, false);
    
    console.clear();
    console.log(`24-hour format: ${time24}`);
    console.log(`12-hour format: ${time12}`);
  
}

function startClock() {
  displayTime();
  setInterval(displayTime, 1000);
}

startClock();
