function sleep(milliseconds) {
    return new Promise((resolve) => {
        let startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliseconds);
        resolve();
    });
}

module.exports = sleep;