song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("1.mp3");
    song2 = loadSound("09 09.mp3");
}
function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();
    canvas.position(515, 250);
    cam = createCapture(VIDEO);
    cam.hide();
}
function draw()
{
    image(cam, 0, 0, 400, 400);
}