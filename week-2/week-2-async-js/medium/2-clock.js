/*Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

function formatTime(date) {
    const hh24 = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');
    const time24 = `${hh24}:${mm}:${ss}`;

    const hours12 = date.getHours() % 12 || 12; 
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    const time12 = `${String(hours12).padStart(2, '0')}:${mm}:${ss} ${ampm}`;

    return { time24, time12 };
}

function showClock() {
    const now = new Date();
    const { time24, time12 } = formatTime(now);

    console.clear(); 
    console.log("24-hour format:", time24);
    console.log("12-hour format:", time12);
}

setInterval(showClock, 1000);

showClock();
