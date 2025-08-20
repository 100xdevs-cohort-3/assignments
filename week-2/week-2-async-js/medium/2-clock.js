const date = new Date();
setInterval(() => {
    console.log(
        `24 Hour Format - ${date
            .getHours()
            .toString()
            .padStart(2, "0")}:${date
            .getMinutes()
            .toString()
            .padStart(2, "0")}:${date
            .getSeconds()
            .toString()
            .padStart(2, "0")}`
    );
    //12 hour format
    const hour =
        date.getHours() - 12 < 0
            ? date.getHours() == 0
                ? 12
                : date.getHours()
            : date.getHours() - 12;
    const flag = date.getHours() > 11 ? "PM" : "AM";
    console.log(
        `12 Hour Format - ${hour
            .toString()
            .padStart(2, "0")}:${date
            .getMinutes()
            .toString()
            .padStart(2, "0")}:${date
            .getSeconds()
            .toString()
            .padStart(2, "0")} ${flag}`
    );
}, 1000);
