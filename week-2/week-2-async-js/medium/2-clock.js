// <!-- Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM) -->


function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
}

function displayTime() {
    const now = new Date();

    // Extract hours, minutes, and seconds
    let hours = now.getHours();
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());

    // Format for 24-hour clock (HH:MM:SS)
    const time24Hour = `${formatTime(hours)}:${minutes}:${seconds}`;

    // Format for 12-hour clock (HH:MM:SS AM/PM)
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;  // Convert 24-hour format to 12-hour format
    const time12Hour = `${formatTime(hours)}:${minutes}:${seconds} ${period}`;

    console.log(`24-hour format: ${time24Hour}`);
    console.log(`12-hour format: ${time12Hour}`);
}

// Call displayTime every second
setInterval(displayTime, 1000);
