let counter = 0;

const Clock = () => {
    const now = new Date();

    //24
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const seconds = now.getSeconds().toString().padStart(2, '0')

    //12
    const hours12 = ((now.getHours() + 11) % 12 + 1).toString().padStart(2, '0')
    const AmPm = now.getHours() >= 12 ? 'PM' : 'AM';

    console.log(`24 Hrs Format Clock: ${hours}:${minutes}:${seconds}`);
    console.log(`12 Hrs Format Clock: ${hours12}:${minutes}:${seconds}:${AmPm}`);

    setTimeout(Clock, 1000)
}

Clock()