

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






// add detect click event, on this event user's click is registered and the id of the button is saved in a variable, which can be passed on to other fundtions.

document.addEventListener("click", (e) => {
    if(e.target.matches(".btn")){
        var userChosenColour = e.target.id;

    }
});