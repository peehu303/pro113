function preload() {}
function setup() {
    canvas = createCanvas(700, 700);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 100, 100, 400, 300);
    
    fill(51, 255, 255);
    stroke(0, 0, 0);
    circle(50, 50, 80);
    circle(590, 50, 80);
    circle(50, 430, 80);
    circle(590, 430, 80);
    fill(51, 51, 255);
    stroke(0, 0, 0);
    rect(90, 40, 460, 20);
    rect(90, 420, 460, 20);
    rect(40, 80, 20, 320);
    rect(580, 80, 20, 320);
}
function take_snapshot() {
    save("simoni.jpg");
}