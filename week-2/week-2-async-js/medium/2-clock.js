function addZero(value) {
    return value.toString().padStart(2, "0");
}

function displayTime() {
    const now = new Date();

    const hours24 = addZero(now.getHours());
    const minutes = addZero(now.getMinutes());
    const seconds = addZero(now.getSeconds());
    const time24 = `${hours24}:${minutes}:${seconds}`;

    console.log(`${time24}`);
}

setInterval(displayTime, 1000);
