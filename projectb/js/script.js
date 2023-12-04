let emotionButtons = document.getElementsByClassName("button");
let emotion;
let canvas;

let circleSize = 200; // Initial size of the circle
let maxSize = 200; // Maximum size of the circle
let minSize = 130; // Minimum size of the circle
let growing = true; // circle is growing or shrinking
let growAmount = 0.2;
let r, g, b;
let colorgrow = 90;
let mySound;
//let textToShow = "";

emotionButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    mySound.stop();
    emotion = e.target.innerText;
    let canvasDiv = document.getElementById(emotion);
    canvasDiv.style = "display: block";
    canvas.parent(emotion);
    mySound.play();
  });
});

// p5

function preload() {
  mySound = loadSound("/js/assets/yogaMusic.mp3");
}

function setup() {
  canvas = createCanvas(400, 400);
  //background(r, g, b);
}

function draw() {
  if (emotion == "Tired") {
    drawTired();
  } else if (emotion == "Angry") {
    drawAngry();
  } else if (emotion == "Sad") {
    drawSad();
  } else if (emotion == "Stressed") {
    drawStressed();
  }
}

function keyTyped() {
  if (key === "s") {
    growAmount = 0.1;
    colorgrow = 3;
  } else if (key === "h") {
    growAmount = 0.5;
    colorgrow = 10;
  } else {
    if (key === "p");
    growAmount = 0;
  }
}

function drawTired() {
  background(r, g, b);

  r = 203;
  g = 4;
  b = 165;
  //203, 4, 165)
  // use map function
  //Use waves
  let bgColor = color(
    r + frameCount / 10,
    g + (frameCount % 70),
    frameCount * 7
  );

  background(bgColor);

  if (mouseIsPressed === true) {
    textSize(16);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("Inhale as the circle is growing", 10, 350);
    text("Exhale as it shrinks", 10, 370);
  }

  // limit the value in the range 0 to 255
  r = constrain(r, 0, 255);
  g = constrain(g, 0, 300);
  b = constrain(b, 0, 300);

  if (growing) {
    circleSize += growAmount;
    if (circleSize >= maxSize) {
      growing = false;
      textToShow = "Exhale"; // Set textToShow when growing stops
    }
  } else {
    circleSize -= growAmount;
    if (circleSize <= minSize) {
      growing = true;
      textToShow = "Inhale"; // Set textToShow when shrinking stops
    }
  }

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

  if (mouseX > 100) {
    textSize(25);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("let the breath lead the way", 20, 50);
  }

  if (mouseX > 250) {
    textSize(22);
    fill(255);
    stroke(1);
    strokeWeight(4);
    text("Just keep breathing ", 150, 80);
  }

  if (mouseY > 100) {
    textSize(12);
    fill("orange");
    stroke(0);
    strokeWeight(4);
    text("Let it go", 300, 150);
  }

  if (mouseY > 200) {
    textSize(12);
    fill("orange");
    stroke(0);
    strokeWeight(4);
    text("Clear your mind", 100, 100);
  }

  // have a gradual change of color

  //refer to the nflx a bit more - start using image rather than circle

  //press buttons instead of keys (label the buttons as different feelings), using html

  //fullscreen

  //add quotes

  //add sound

  //let startcol = 50 + colorgrow

  // circle
  fill("orange");
  noStroke();
  rect(115, 110, circleSize, circleSize);
  noFill; //smile
  stroke(0);
  arc(200, 200, 25, 25, radians(0), radians(180));
  arc(175, 175, 15, 35, radians(5), radians(180)); //left eye
  arc(225, 175, 15, 35, radians(5), radians(180)); //right eye
  stroke(50);
  // arc(205, 170, 105, 35, radians(180), radians(0));
}

function drawAngry() {
  background(r, g, b);

  r = 203;
  g = 4;
  b = 165;
  //203, 4, 165)
  // use map function
  //Use waves
  let bgColor = color(
    r + frameCount / 10,
    g + (frameCount % 70),
    frameCount * 3
  );

  background(bgColor);

  if (mouseIsPressed === true) {
    textSize(16);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("Inhale as the circle is growing", 10, 350);
    text("Exhale as it shrinks", 10, 370);
  }

  // limit the value in the range 0 to 255
  r = constrain(r, 0, 255);
  g = constrain(g, 0, 300);
  b = constrain(b, 0, 300);

  if (growing) {
    circleSize += growAmount;
    if (circleSize >= maxSize) {
      growing = false;
      textToShow = "Exhale"; // Set textToShow when growing stops
    }
  } else {
    circleSize -= growAmount;
    if (circleSize <= minSize) {
      growing = true;
      textToShow = "Inhale"; // Set textToShow when shrinking stops
    }
  }

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

  if (mouseX > 100) {
    textSize(25);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("let the breath lead the way", 20, 50);
  }

  if (mouseX > 250) {
    textSize(22);
    fill(255);
    stroke(1);
    strokeWeight(4);
    text("Just keep breathing ", 150, 80);
  }

  if (mouseY > 100) {
    textSize(12);
    fill("orange");
    stroke(0);
    strokeWeight(4);
    text("Let it go", 300, 150);
  }

  if (mouseY > 200) {
    textSize(12);
    fill("orange");
    stroke(0);
    strokeWeight(4);
    text("Clear your mind", 100, 100);
  }

  // have a gradual change of color

  //refer to the nflx a bit more - start using image rather than circle

  //press buttons instead of keys (label the buttons as different feelings), using html

  //fullscreen

  //add quotes

  //add sound

  //let startcol = 50 + colorgrow

  // circle
  fill("purple");
  noStroke();
  ellipse(width / 2, height / 2, circleSize, circleSize);
  noFill; //smile
  stroke(0);
  arc(200, 200, 25, 25, radians(0), radians(180));
  arc(175, 175, 15, 35, radians(5), radians(180)); //left eye
  arc(225, 175, 15, 35, radians(5), radians(180)); //right eye
  stroke(50);
  // arc(205, 170, 105, 35, radians(180), radians(0));
}

function drawSad() {
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

function drawStressed() {
  background(r, g, b);

  r = 203;
  g = 4;
  b = 165;
  //203, 4, 165)
  // use map function
  //Use waves
  let bgColor = color(
    r + frameCount / 10,
    g + (frameCount % 70),
    frameCount * 3
  );

  background(bgColor);

  if (mouseIsPressed === true) {
    textSize(16);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("Inhale as the circle is growing", 10, 350);
    text("Exhale as it shrinks", 10, 370);
  }

  // limit the value in the range 0 to 255
  r = constrain(r, 0, 255);
  g = constrain(g, 0, 300);
  b = constrain(b, 0, 300);

  if (growing) {
    circleSize += growAmount;
    if (circleSize >= maxSize) {
      growing = false;
      textToShow = "Exhale"; // Set textToShow when growing stops
    }
  } else {
    circleSize -= growAmount;
    if (circleSize <= minSize) {
      growing = true;
      textToShow = "Inhale"; // Set textToShow when shrinking stops
    }
  }

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

  if (mouseX > 100) {
    textSize(25);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("let the breath lead the way", 20, 50);
  }

  if (mouseX > 250) {
    textSize(22);
    fill(255);
    stroke(1);
    strokeWeight(4);
    text("Just keep breathing ", 150, 80);
  }

  if (mouseY > 100) {
    textSize(12);
    fill("orange");
    stroke(0);
    strokeWeight(4);
    text("Let it go", 300, 150);
  }

  if (mouseY > 200) {
    textSize(12);
    fill("orange");
    stroke(0);
    strokeWeight(4);
    text("Clear your mind", 100, 100);
  }

  // have a gradual change of color

  //refer to the nflx a bit more - start using image rather than circle

  //press buttons instead of keys (label the buttons as different feelings), using html

  //fullscreen

  //add quotes

  //add sound

  //let startcol = 50 + colorgrow

  // circle
  fill("yellow");
  noStroke();
  ellipse(width / 2, height / 2, circleSize, circleSize);
  noFill; //smile
  stroke(0);
  arc(200, 200, 25, 25, radians(0), radians(180));
  arc(175, 175, 15, 35, radians(5), radians(180));
  arc(225, 175, 15, 35, radians(5), radians(180));
  stroke(50);
  arc(205, 170, 105, 35, radians(180), radians(0));
}
