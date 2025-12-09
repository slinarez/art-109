
var socket;

function setup() {
    createCanvas(300, 300);

    socket = io.connect('http://localhost:3000')
}

function draw() {
    background(51);
    ellipse(mouseX, mouseY, 60, 60);
}