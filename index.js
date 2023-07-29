// using document.querySelector to select the element with class of each color.
const green = document.querySelector(".green");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const blue = document.querySelector(".blue");

//assigning audio files to const variables.
const greenSound = new Audio("sounds/green.mp3");
const redSound = new Audio("sounds/red.mp3");
const yellowSound = new Audio("sounds/yellow.mp3");
const blueSound = new Audio("sounds/blue.mp3");

//adding click event listeners to each color button to detect when they are clicked and play the corresponding sound.
green.addEventListener("click", () => {
  playSound("green");
});

red.addEventListener("click", () => {
  playSound("red");
});

yellow.addEventListener("click", () => {
  playSound("yellow");
});

blue.addEventListener("click", () => {
  playSound("blue");
});


//function to play the sound of the corresponding color.
const playSound = (color) => {
  switch (color) {
    case "green":
      greenSound.play();
      break;
    case "red":
      redSound.play();
      break;
    case "yellow":
      yellowSound.play();
      break;
    case "blue":
      blueSound.play();
      break;
  }
};
