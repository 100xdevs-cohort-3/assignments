//counter without using setInterval
let n = 0;
function cnt() {
    if (n <= 10) {
        console.log(n);
        n++;
        setTimeout(cnt, 1000);
    }
}

cnt();

