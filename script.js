/* global strokeWeight, image, array, createGraphics, createVector, color, line, keyCode, createCanvas, colorMode, HSB, background, rect, ellipse, width, height, random, mouseX, mouseY, stroke, fill, mouseIsPressed */

let brushHue, brushSat, brushBright, strokeSize, val;
let priorX, priorY, v, len, back;

function setup() {
  createCanvas(700, 700);
  back = createGraphics(700, 700);
  back.clear();
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  brushSat = 50;
  brushBright = 50;
  strokeWeight(6);
  background('none');

  priorX = 0;
  priorY = 0;
  strokeSize = 5;
  val = 1;
}

function draw() {
  chooseColors();
  back.strokeWeight(strokeSize);
  if (mouseIsPressed) {
    back.line(priorX, priorY, mouseX, mouseY);
    back.line(
      width / 2 + (width / 2 - priorX),
      priorY,
      width / 2 + (width / 2 - mouseX),
      mouseY
    );
    back.line(
      priorX,
      height / 2 + (height / 2 - priorY),
      mouseX,
      height / 2 + (height / 2 - mouseY)
    );
    back.line(
      width / 2 + (width / 2 - priorX),
      height / 2 + (height / 2 - priorY),
      width / 2 + (width / 2 - mouseX),
      height / 2 + (height / 2 - mouseY)
    );
    if (strokeSize > 15) {
      val = -1;
    } else if (strokeSize < 5) {
      val = 1;
    }
    strokeSize += val;
  }

  priorX = mouseX;
  priorY = mouseY;
  
  image(back, 0, 0);
}

function chooseColors() {
  back.stroke(brushHue, brushSat, brushBright);
  back.fill(brushHue, 50, 80);
}

function keyPressed() {
  if (keyCode == 32) {
    brushHue += 10;
    brushHue %= 360;
  }
  if (keyCode == 8) {
    background('none');
    back.background('none');
    back.clear();
  }
  if (keyCode == 16) {
    brushHue = random(360);
  }
  if (keyCode == 38) {
    brushBright += 5;
    //up
  }
  if (keyCode == 40) {
    brushBright -= 5;
    //down
  }
  if (keyCode == 39) {
    brushSat += 5;
    //left
  }
  if (keyCode == 37) {
    brushSat -= 5;
    //right
  }
  if (brushBright > 100) {
    brushBright = 100;
  } else if (brushBright < 0) {
    brushBright = 0;
  }
  if (brushSat < 0) {
    brushSat = 0;
  } else if (brushSat > 100) {
    brushSat = 100;
  }
  if (keyCode == 66) {
    background(random(360),70 ,90);
  }
}
