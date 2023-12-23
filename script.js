const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";
let noiseScale = 0.02;
let hillAmplitude = 50; // Height of the hills
let clouds = []; // Array to hold cloud data
const word = "cloud";
const numberOfWords = word.length;
const clusterRadius = 5;
function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(10);

  for (let i = 0; i < 5; i++) {
    let wordPositions = [];
    for (let j = 0; j < numberOfWords; j++) {
      let angle = random(TWO_PI);
      let r = random(clusterRadius);
      wordPositions.push({
        xOffset: r * cos(angle),
        yOffset: r * sin(angle)
      });
    }
    clouds.push({
      x: random(width),
      y: random(height / 4),
      speed: random(0.1, 0.3),
      words: wordPositions
    });
  }
}

function draw() {
  background(255);

  makeClouds();

  for (let x = 0; x < width; x += 10) {
    for (let baseY = height / 2; baseY < height; baseY += 10) {
      // Using noise to create undulating hills
      let hillY =
        baseY +
        (noise(x * 0.01, baseY * 0.01, frameCount * 0.01) - 0.5) *
          hillAmplitude;
      hillY = constrain(hillY, height / 2, height);

      let noiseVal = noise(
        x * noiseScale,
        hillY * noiseScale,
        frameCount * 0.01
      );
      let index = floor(map(noiseVal, 0, 1, 0, density.length));
      let char = density.charAt(index);

      // Shading based on noise value
      let shade = map(noiseVal, 0, 1, 0, 255);
      fill(shade);

      // Mouse interaction
      let distToMouse = dist(mouseX, mouseY, x, hillY);
      let pushAmount = max(0, 30 - distToMouse); // Parting effect strength
      let accumulationFactor = 1.5; // Factor to control text accumulation
      let shiftX;

      if (distToMouse < 30) {
        // Accumulate text on either side of the mouse
        if (x < mouseX) {
          shiftX = x - pushAmount * accumulationFactor;
        } else {
          shiftX = x + pushAmount * accumulationFactor;
        }
      } else {
        shiftX = x;
      }

      text(char, shiftX, hillY);
    }
  }
}

function makeClouds() {
  clouds.forEach((cloud) => {
    cloud.words.forEach((word) => {
      text("cloud", cloud.x + word.xOffset, cloud.y + word.yOffset);
    });

    // Move the entire cloud cluster to the right
    cloud.x += cloud.speed;

    // Reset cloud position when it moves off screen
    if (cloud.x > width + clusterRadius) {
      cloud.x = -clusterRadius;
      // Optionally, you can also randomize the cloud's y position
      cloud.y = random(height / 4);
    }
  });
}
