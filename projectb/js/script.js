let emotionButtons = document.getElementsByClassName("button");

emotionButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let emotion = e.target.innerText;
    let canvasDiv = document.getElementById(emotion);
    canvasDiv.style = "display: block";
    canvas.parent(emotion);
  });
});

// p5

let circleSize = 200; // Initial size of the circle
let maxSize = 200; // Maximum size of the circle
let minSize = 130; // Minimum size of the circle
let growing = true; // circle is growing or shrinking
let growAmount = 0.2;
let r, g, b;
let colorgrow = 90;
function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent("Sad");
  //background(r, g, b);
}

function draw() {
  background(r, g, b);
  r = 203;
  g = 4;
  b = 165;
  //203, 4, 165)

  let bgColor = color(
    r + frameCount,
    (g * frameCount) % 155,
    b + frameCount * 2
  );

  background(bgColor);

  // limit the value in the range 0 to 255
  r = constrain(r, 0, 255);
  g = constrain(g, 0, 300);
  b = constrain(b, 0, 300);

  // Update the circle's size based on the frameCount
  if (growing) {
    circleSize += growAmount;
    if (circleSize >= maxSize) {
      growing = false;
    }
  } else {
    circleSize -= growAmount;
    if (circleSize <= minSize) {
      growing = true;
    }
  }

  if (mouseIsPressed) {
    r = 255;
    g = 100;
    b = 0;
  }

  if (mouseX > 100) {
    textSize(12);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("let the breath lead the way", 20, 50);
  }

  if (mouseX > 150) {
    textSize(22);
    fill(255);
    stroke(1);
    strokeWeight(4);
    text("Just keep breathing ", 150, 80);
  }

  if (mouseY > 0) {
    textSize(12);
    fill("orange");
    stroke(0);
    strokeWeight(4);
    text("Let it go", 300, 150);
  }
  // have a gradual change of color

  //refer to the nflx a bit more - start using image rather than circle

  //press buttons instead of keys (label the buttons as different feelings), using html

  //fullscreen

  //add quotes

  //add sound

  //let startcol = 50 + colorgrow

  // circle
  fill(147, 4, 6);
  noStroke();
  ellipse(width / 2, height / 2, circleSize, circleSize);
  noFill(); //smile
  stroke(0);
  arc(width / 2, height / 2, 25, 25, radians(0), radians(180));
  arc(width * 0.4375, height * 0.4375, 15, 35, radians(5), radians(180));
  arc(width * 0.5625, height * 0.4375, 15, 35, radians(5), radians(180));

  if (mouseIsPressed) {
    r = 350;
    g = 200;
    b = 0;
  }
}

function keyTyped() {
  if (key === "s") {
    growAmount = 0.1;
    colorgrow = 3;
  } else if (key === "h") {
    growAmount = 0.5;
    colorgrow = 10;
  }
}
