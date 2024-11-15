// Select the elements
const playPauseButton = document.getElementById("playPauseButton");
const notification = document.getElementById("notification");

// Initially set the player status to 'paused'
let isPlaying = false;

// Function to handle play/pause toggle
playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        // Pause the music (you can add functionality to pause actual music if integrated with a player)
        playPauseButton.textContent = "Play";  // Update the button text
        notification.textContent = "Music Paused";  // Display notification
        isPlaying = false;
    } else {
        // Play the music (you can add functionality to play actual music if integrated with a player)
        playPauseButton.textContent = "Pause";  // Update the button text
        notification.textContent = "Music Playing";  // Display notification
        isPlaying = true;
    }
});

