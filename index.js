// Get all drum buttons
var drumButtons = document.querySelectorAll(".drum");
var size = drumButtons.length;

// Function to play sound based on key
function playSound(key) {
    switch (key) {
        case 'w':
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        default:
            console.log("Wrong key pressed");
    }
}

// Function to add animation
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}

// KEYBOARD EVENT - Listen for key presses on the whole document
document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

// CLICK/TOUCH EVENT - Listen for clicks/touches on each button
for (var i = 0; i < size; i++) {
    
    // Mouse click event (no passive option needed for click)
    drumButtons[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
    
    // Touch event for mobile devices - FIXED with proper options
    drumButtons[i].addEventListener("touchstart", function(e) {
        e.preventDefault(); // Prevent default touch behavior
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }, { passive: false }); // ← This eliminates the violation
}

// Alternative approach - if you want to avoid the warning entirely,
// you can use both touch and click events without preventDefault:
/*
for (var i = 0; i < size; i++) {
    // This approach doesn't need preventDefault
    drumButtons[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
    
    // For mobile, click works fine, so you might not need touchstart at all
    // Modern mobile browsers trigger click events on tap
}
*/
