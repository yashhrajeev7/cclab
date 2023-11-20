let seq = 0;

// SCENE 1
let rad = 60; // Width of the shape
let x, y; // Starting position of shape
let size = 75;
let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 0; // Top to Bottom

let angle = 1;

// SCENE 2

function setup() {
  createCanvas(1000, 600);

  setupScene1();
  setupScene2();
  setupScene3();
}

function draw() {
  if (seq == 0) {
    // intro
    drawScene0_intro();
  } else if (seq == 1) {
    // frog ?
    drawScene1();
  } else if (seq == 2) {
    // bird
    drawScene2();
  } else if (seq == 3) {
    // monkey
    drawScene3();
  }
}

function keyPressed() {
  if (key == " ") {
    seq++;
  }
  if (seq > 3) {
    seq = 0;
  }
}

function drawScene0_intro() {
  background(100);
  textAlign(CENTER);
  text("Intro", width / 2, height / 2);
  textSize(30);
}

function setupScene1() {
  stroke(2);
  x = width / 2;
  y = height / 2;
}

function drawScene1() {
  background("blue");

  //shape position
  x = x + xspeed * xdirection;
  y = y + yspeed * ydirection;

  if (x > width - rad || x < rad) {
    xdirection *= -1;
  }
  if (y > height - rad || y < rad) {
    xdirection *= -1;
  }
  if (mouseIsPressed == true) {
    size = size + 1;
    rad = rad + 1;
  }

  
  if (size > 110){
    size = size -1;
    rad= rad-1;
  }
  // Draw the shape
  stroke('black');
  fill("red");
  ellipse(x, y, size, rad);
  fill("orange");
  ellipse(x - 45, y + 10, 45, rad * 0.4);
  fill("black");
  ellipse(x + 15, y - 5, 25, rad * 0.5);
  fill("white");
  ellipse(x + 15, y, 15, rad * 0.3);
  //triangle(30, 75, 58, 20, 86, 75);
}

let treeHeight;
let monkeyX, monkeyY;
let climbingUp = true;

function setupScene2() {
  treeHeight = height - 200;
  monkeyX = width / 2;
  monkeyY = treeHeight;
}

function drawScene2() {
  background("blue");

  // Draw the tree trunk
  fill(139, 69, 19);
  rect(width / 2 - 20, treeHeight, 30, height);

  // Draw the monkey
  strokeWeight(1);
  stroke("black");
  fill(139, 69, 19);
  ellipse(monkeyX, monkeyY, 50, 50);
  ellipse(monkeyX - 25, monkeyY - 20, 25, 25);
  ellipse(monkeyX + 25, monkeyY - 20, 25, 25);
  ellipse(monkeyX, monkeyY + 40, 75, 60);
  stroke("green");
  strokeWeight(8);
  noFill();
  circle(500, 330, 330);
  // Update monkey's position
  if (climbingUp) {
    monkeyY -= 1;
  } else {
    monkeyY += 1;
  }

  // Change direction when the monkey reaches the top or bottom
  if (monkeyY <= treeHeight - 50) {
    climbingUp = false;
  } else if (monkeyY >= treeHeight + 30) {
    climbingUp = true;
  }
}




  

let birdX, birdY;
let wingFlap = false;

function setupScene3() {
  birdX = -50;
  birdY = height / 2;
}

function drawScene3() {
  background(135, 206, 235); // Light blue sky

  //sun
  stroke('black');
  strokeWeight(2);
  fill(255, 204, 0);
  ellipse(50, 50, 50, 50);

  // bird
  fill(255);
  ellipse(birdX, birdY, 30, 20);

  // Make the bird's wings flap
  if (wingFlap) {
    line(birdX - 15, birdY, birdX - 30, birdY - 10);
    line(birdX - 30, birdY - 10, birdX - 45, birdY);
  } else {
    line(birdX - 15, birdY, birdX - 30, birdY + 10);
    line(birdX - 30, birdY + 10, birdX - 45, birdY);
  }

  wingFlap = !wingFlap;

  // Move the bird across the canvas
  birdX += 1.5;

  // Reset bird's position when it flies off the screen
  if (birdX > width + 30) {
    birdX = -30;
    birdY = random(height / 2, height - 50);
  }
}


