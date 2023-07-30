// each button color is saved in an array, which can be used to compare the user's input with the game's pattern.
const buttonColours = ["red", "blue", "green", "yellow"];

// the game pattern is saved in an array, which can be used to compare the user's input with the game's pattern.
var gamePattern = [];

// the user's input is saved in an array, which can be used to compare with game pattern.
var userClickedPattern = [];

// the game's level is saved in a variable to be displayed on the title.
var level = 0;

// the game's status is saved in a variable to be used to check if the game has started or not.
var started = false;

//StartOver function

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

//Start the game based on user key press space.
document.querySelector("body").addEventListener("keypress", (e) => {
  if (!started && e.key === " ") {
    //Change the title to display the level
    document.querySelector("#level-title").textContent = "Level " + level;

    //call the nextSequence function to add a random color to the game pattern and play the sound of the color.

    //change the status of the game to started.
    started = true;
    nextSequence();
    console.log("started on the keypress function");
    console.log(
      "GamePattern : " +
        gamePattern[level - 1] +
        "\n UserClickPattern :" +
        userClickedPattern[level - 1]
    );
  }
});
//

//Function to play sounds based on input
function playSound(buttonColor) {
  var audio = new Audio("sounds/" + buttonColor + ".mp3");
  audio.play();
}

// add detect click event, on this event user's click is registered and the id of the button is saved in a variable, which can be passed on to other fundtions.
document.addEventListener("click", (e) => {
  if (e.target.matches(".btn")) {
    var userChosenColour = e.target.id;
    //add the user's input to the userClickedPattern array
    userClickedPattern.push(userChosenColour);

    //check if the user's input is the same as the game pattern
    checkAnswer(userClickedPattern.length - 1);

    //play sound based on user's input
    playSound(userChosenColour);

    console.log(
      "This is the click event function, on level " +
        userClickedPattern.length -
        1
    );
  }
});

// A function that will give a random color to the game pattern.
function randomColor() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  return randomChosenColour;
}

// nextSequence function will be called when the game starts or when the user has clicked the correct pattern. This function will add a random color to the game pattern and will play the sound of the color.

function nextSequence() {
  userClickedPattern = [];
  level++;
  document.querySelector("#level-title").textContent = "Level " + level;
  let randomChosenColour = randomColor();
  gamePattern.push(randomChosenColour);
  document
    .querySelector("#" + randomChosenColour)
    .classList.add("patternColor");
  setTimeout(function () {
    document
      .querySelector("#" + randomChosenColour)
      .classList.remove("patternColor");
  }, 400);

  playSound(randomChosenColour);

  console.log(
    "This is the nextSequence function, on level " +
      level +
      "\n" +
      "GamePattern : " +
      gamePattern[level - 1] +
      "\n UserClickPattern :" +
      userClickedPattern[level]
  );
}

// A function that will check if the userClick pattern is the same as the game pattern based on the current level. If the userClicked pattern is the same as the game pattern, then the nextSequence function will be called. else the game will be over. and the game will start over.
function checkAnswer(currentLevel) {
  console.log("This is the checkAnswer function");
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 600);
    }
  } else {
    console.log("wrong");
    playSound("wrong");
    document.querySelector("body").classList.add("game-over");
    setTimeout(function () {
      document.querySelector("body").classList.remove("game-over");
    }, 200);
    document.querySelector("#level-title").textContent =
      "Game Over, Press Space to Restart";
    startOver();
  }
}
