<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        
#container{
    padding-top: 600px;
    align-items: center;
    display: flex;
    
    justify-content: center;

}

#Red{
    background-color: red;
    color: white;
    border-radius: 10px;
   border-width: 0cap;
   padding-inline: 12px;
    padding-block: 5px;
}
#Green{
    background-color: green;
    color: white;
    padding-inline: 12px;
    border-width: 0cap;
    padding-block: 5px;
    border-radius: 10px;
   
}
#Blue{
    background-color: blue;
    color: white;
    padding-inline: 12px;
    border-width: 0cap;
    padding-block: 5px;
    border-radius: 10px;
}

#Purple{
    background-color: purple;
    color: white;
    border-width: 0cap;
    padding-inline: 12px;
    padding-block: 5px;
    border-radius: 10px;
}
#Black{
    background-color: black;
    color: white;
    border-width: 0cap;
    padding-inline: 12px;
    padding-block: 5px;
    border-radius: 10px;
}
#Default{
    background-color: white;
    color: black;
    border-width: 0cap;
    padding-inline: 12px;
    padding-block: 5px;
    border-radius: 10px;
}
.sub{
    margin: 5px;

    cursor: pointer;
}
    </style>
</head>
<body>
    <div id="container">
        <button id="Red" class="sub" onclick="colourred()">Red</button> 
        <button id="Green" class="sub" onclick="colourgreen()">Green</button>
        <button id="Blue" class="sub" onclick="colourblue()">Blue</button>
        <button id="Black" class="sub" onclick="colourblack()">Black</button>
        <button id="Purple" class="sub" onclick="colourpurple()">Purple</button>
        <button id="Default" class="sub" onclick="colourdefault()">Default</button>
    </div>
</body>
<script>
    
function colourred() {
    document.body.style.backgroundColor = "red";
}
function colourgreen() {
    document.body.style.backgroundColor = "green";
}
function
colourblue() {
    document.body.style.backgroundColor = "blue";
}
function colourpurple() {
    document.body.style.backgroundColor = "purple";
}
function colourblack() {
    document.body.style.backgroundColor = "black";
}
function colourdefault() {
    document.body.style.backgroundColor = "white";
}

</script>
</html>
