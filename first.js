
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  // Choose random color between blue and orange
  let color = random(["#0077be", "#ff6600"]);

  // Draw a circle at a random position with a random size
  let x = random(width);
  let y = random(height);
  let size = random(50, 100);
  fill(color);
  noStroke();
  circle(x, y, size);

  // Move the circle in a random direction
  let dx = random(-5, 5);
  let dy = random(-5, 5);
  x += dx;
  y += dy;

  // Bounce off the edges of the canvas
  if (x < 0 || x > width) {
    dx *= -1;
  }
  if (y < 0 || y > height) {
    dy *= -1;
  }
}
