//your JS code here. If required.

const buttons = document.querySelectorAll(".btn");
const stop = document.querySelector(".stop");

let currentAudio = null;

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Stop previous audio
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Get sound name
        let soundName = button.innerText.toLowerCase();

        // Create audio
        currentAudio = new Audio(`sounds/${soundName}.mp3`);

        // Play audio
        currentAudio.play();

    });

});

// Stop button functionality
stop.addEventListener("click", function() {

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

});
