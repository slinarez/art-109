
// function setup() {
//     canvas = createCanvas(windowWidth, windowHeight);
//     canvas.position(0, 0);
//     canvas.style("z-index", -1);

// }



// function windowResize() {
//     resizeCanvas(windowWidth, windowHeight);
// }

// function mouseMoved() {
//     drawTool(mouseX, mouseY);
// }

// function drawTool(_x, _y) {
//     strokeWeight(0);
//     fill(random(200, 255), random(200, 255), random(200, 255));
//     ellipse(mouseX, mouseY, 30, 30);
// }

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    angleMode(DEGREES);

    canvas.position(0, 0);
    canvas.style("z-index", -1);

}

function draw() {
    background(30);

    rotateX(60);

    noFill();
    stroke(255);

    for (var i = 0; i < 50; i++) {
        
        var r = map(sin(frameCount/2), -1, 1, 100, 200);
        var g = map(i, 0, 50, 100, 200);
        var b = map(cos(frameCount), -1, 1, 200, 100);

        stroke(r, g, b);

        rotate(frameCount / 20);
        
        beginShape()
        for (var j = 0; j < 360; j += 60) {
            var rad = i * 3;
            var x = rad * cos(j)
            var y = rad * sin(j)
            var z = sin(frameCount * 2 + i * 5) * 50

            vertex(x, y, z);
        }
        endShape(CLOSE);
    }
}