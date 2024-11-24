

var heightElem = document.getElementById("height");
var formElem = document.getElementById("draw-form");

// set a handler function for the form's submission event
formElem.onsubmit = function(event) {

    // QUIZ -
    // what happens if we don't do this?
    // the program will break due to the form attempting to send its data to server which does not exist. what actually happens is it will display the pyramid for a split second before dissapearing.
    event.preventDefault();

    // QUIZ - done
    // what happens if we don't do this?
    // the text and color indicating that their is an error will continue to display.
    clearError();

    // figure out the height the user typed
    heightStr = heightElem.value;

    // TODO 1 - done
    // if they didn't type anything at all, give a different error message,
    // something like "Please provide a height"
    if (heightStr == ""){
        displayError("Please enter height.");
        return;
    }


    // convert the string to an int
    height = parseInt(heightStr);

    // if the height is not-a-number, yell at them and exit early
    // TODO 2 - done
    // negative numbers and zero should also be rejected here
    
    if (isNaN(height)) {
        displayError("That's not a number.");
        return;

    }
    if (height < 0) {
        displayError("Im not digging for you (negative entered).");
        return;
    }
    if (height == 0) {
        displayError("Thats just a floor");
        return;
    }
    // if the height is absurdly tall, yell at them and exit early
    var tooTall = 100;
    if (height > tooTall) {
        displayError("Are you cray? I can't build a pyramid that tall.");
        return;
    }

    // draw pyramid with the specified height
    drawPyramid(height);
}


/**
 * displayError
 *
 * Displays an error message on the text input, and colors it red
 */
function displayError(message) {
    heightElem.className = "invalid-field";
    document.querySelector(".error-message").innerHTML = message;
}


/*
 * clearError
 *
 * Undisplays the error message and removes the red CSS style
 */
function clearError(message) {
    heightElem.className = "valid-field";
    document.querySelector(".error-message").innerHTML = "";
    // TODO 3 - done
    // implement this function.
}



/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}