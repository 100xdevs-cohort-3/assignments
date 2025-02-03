

function counter() {
    const now = new Date()

    // 24 
    const hours24 = now.getHours().toString().padStart(2,'0')
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds = now.getSeconds().toString().padStart(2,'0')

    //12 
    const hours12 = ((now.getHours()+11)% 12 +1).toString().padStart(2, '0');
    const ampm = (now.getHours()>=12) ? 'PM' : 'AM'

    console.log(`24-hour formet:${hours24}:${minutes}:${seconds}`);
    console.log(`12-hour farmet:${hours12}:${minutes}:${seconds}:${ampm}`);
    
    setTimeout(counter,1000)
}

counter()