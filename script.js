// square colors for the random animated squares
const squareColors = ["#93fa25", "#52ffe8", "#9d52ff", "#9d52ff"];

//event listener for the moving animated squares
document.addEventListener("DOMContentLoaded", function () {
  //find the container
  const container = document.querySelector(".container");
  //number of squares
  const numberOfSquares = 100;

  //for the number of squares create a new square with a random color and random location on the screen
  // the animation duration is also random, some squares will be faster than others
  for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement("span");
    square.classList.add("square");
    // location
    square.style.left = `${Math.random() * (100 - 50)}vw`;
    square.style.top = `${Math.random() * (100 - 50)}vh`;
    // color
    const bg = squareColors[Math.floor(Math.random() * squareColors.length)];
    square.style.background = bg;
    // animation
    square.style.animationDuration = `${Math.random() * 6 + 1}s`;
    square.style.animationDirection =
      Math.random() < 0.5 ? "normal" : "reverse";

    // when a square is clicked the animation is paused and the color is changed to white
    square.addEventListener("click", function () {
      //pause
      square.style.animationPlayState = "paused";
      //white
      square.style.background = "#ffffff";
    });

    container.appendChild(square);
  }
});

//triangle draggable stuff
let isDragging = false;
let offsetX, offsetY;

// get the shuffling triangle element and get the mouse event
document
  .getElementById("shuffling-triangle")
  .addEventListener("mousedown", startDragging);

// start dragging function which takes an event e
function startDragging(e) {
  // set dragging to true
  isDragging = true;
  // set the offset to where the move is
  offsetX = e.clientX - parseFloat(getComputedStyle(e.target).left);
  offsetY = e.clientY - parseFloat(getComputedStyle(e.target).top);

  // add the event listener for the mouse movement
  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", stopDragging);
}

// drag function that if the drag element is true drag the triangle
function drag(e) {
  if (isDragging) {
    // find the triangle
    const triangle = document.getElementById("shuffling-triangle");
    // set the triangle spot where the client is
    triangle.style.left = e.clientX - offsetX + "px";
    triangle.style.top = e.clientY - offsetY + "px";
  }
}

// stop dragging function that sets the dragging element to false
function stopDragging() {
  isDragging = false;
  // removes the event listener
  document.removeEventListener("mousemove", drag);
  document.removeEventListener("mouseup", stopDragging);
}

//get random color that gets the random color from the original colors above
function getRandomColor() {
  const squareColors = ["#93fa25", "#52ffe8", "#9d52ff", "#9d52ff"];
  const randomIndex = Math.floor(Math.random() * squareColors.length);
  return squareColors[randomIndex];
}

// create a random square function
function createRandomSquare() {
  // find the container and create an element that is the square
  const container = document.querySelector(".container");
  const square = document.createElement("div");
  square.classList.add("draggable-square");
  //random location
  square.style.left = `${Math.random() * (window.innerWidth * 400)}px`;
  square.style.top = `${Math.random() * (window.innerHeight * 400)}px`;
  //random size
  square.style.width = `${Math.random() * 200}px`;
  square.style.height = `${Math.random() * 200}px`;
  // random color
  square.style.background = getRandomColor();
  container.appendChild(square);
}

// function to toggle the hidden text
function showTextAcross() {
  var textSection = document.getElementById("hidden-element-center");
  textSection.style.display =
    textSection.style.display === "none" ? "block" : "none";
}

