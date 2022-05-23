var canvas = new fabric.Canvas("myCanvas");
var height = 30;
var width = 30;
var player_y = 10;
var player_x = 10;
var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(width);
        block_image_object.scaleToHeight(height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        up();
    }
    if (keyPressed == "40") {
        down();
    }
    if (keyPressed == "39") {
        right();
    }
    if (keyPressed == "37") {
        left();
    }
    if (keyPressed == "67") {
        new_image("cloud.jpg");
    }
    if (keyPressed == "68") {
        new_image("dark_green.png")
    }
    if (keyPressed == "71") {
        new_image("ground.png")
    }
    if (keyPressed == "76") {
        new_image("light_green.png")
    }
    if (keyPressed == "82") {
        new_image("roof.jpg")
    }
    if (keyPressed == "84") {
        new_image("trunk.jpg")
    }
    if (keyPressed == "85") {
        new_image("unique.png")
    }
    if (keyPressed == "87") {
        new_image("wall.jpg")
    }
    if (keyPressed == "89") {
        new_image("yellow_wall.png")
    }

if (e.shiftKey == true && keyPressed == '80') {
    console.log("p and shift pressed together");
    width = width + 10;
    height = height + 10;
    document.getElementById("width").innerHTML = width;
    document.getElementById("height").innerHTML = height;
}
}
function up(){
if(player_y>=0)
{player_y=player_y-height};
canvas.remove(player_object);
player_update();
}
function down(){
    if(player_y<=750)
    {player_y=player_y+height};
    canvas.remove(player_object);
    player_update();
    }
    function left(){
        if(player_x>=0)
        {player_x=player_x-width};
        canvas.remove(player_object);
        player_update();
        }
        function right(){
            if(player_x<=900)
            {player_x=player_x+width};
            canvas.remove(player_object);
            player_update();
            }