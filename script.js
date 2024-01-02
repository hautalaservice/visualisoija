// ...existing functions...

// Function to update score and color based on user input
function updateScore(category, score) {
    let element = document.getElementById(category);
    // Remove all color classes before adding new one
    element.classList.remove('deep-red', 'light-red', 'grey', 'light-green', 'deep-green');
    colorGridItem(category, score);
}
