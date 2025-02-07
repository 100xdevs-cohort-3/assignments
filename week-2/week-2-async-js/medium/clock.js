function currentTime(){
    const now = new Date();

    const hr = now.getHours();
    const mins = now.getMinutes().toString().padStart(2, '0');
    const secs = now.getSeconds().toString().padStart(2, '0');

    const ampm = hr >= 12 ? 'PM' : 'AM';
    const ampmhr = (hr - 12).toString()
    const hr12 = ampmhr+":"+mins+":"+secs+" "+ampm;
    const hr24 = hr+":"+mins+":"+secs;

    console.log(hr12);
    console.log(hr24, "\n");

    setTimeout(currentTime, 1000);
}

currentTime();