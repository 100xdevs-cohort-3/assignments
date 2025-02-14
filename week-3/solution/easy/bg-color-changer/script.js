document.addEventListener('DOMContentLoaded', function() {
    const colorPicker = document.getElementById("colorPicker");
    const whiteButton = document.getElementById("white");
    const blackButton = document.getElementById("black");

    function changeBackgroundColor(color) {
        document.body.style.backgroundColor = color;
    }

    colorPicker.addEventListener("input", function(e) {
        const color = e.target.value;
        changeBackgroundColor(color);
    });

    whiteButton.addEventListener("click", function() {
        changeBackgroundColor("white");
    });

    blackButton.addEventListener("click", function() {
        changeBackgroundColor("black");
    });

});