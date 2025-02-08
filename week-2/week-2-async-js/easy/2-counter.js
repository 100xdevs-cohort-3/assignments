
let count = 0
function counter(n) {
    setTimeout(() => {
        console.log(count);
        count++
        if (count == n) {
            return
        }
        else {
            counter(n)
        }
    }, (1000));
}

counter(10)