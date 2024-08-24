function wait(n) {
    let p = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, n * 1000);
    });
    return p;
}

module.exports = wait;