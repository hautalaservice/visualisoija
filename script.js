// Function to update score and color based on user input
function updateScore(category, score) {
    let element = document.getElementById(category);
    // Remove all color classes before adding new one
    element.classList.remove('deep-red', 'light-red', 'grey', 'light-green', 'deep-green');
    colorGridItem(category, score);
}

// Function to apply color based on score
function colorGridItem(category, score) {
    let element = document.getElementById(category);
    switch (score) {
        case '1': element.classList.add('deep-red'); break;
        case '2': element.classList.add('light-red'); break;
        case '3': element.classList.add('grey'); break;
        case '4': element.classList.add('light-green'); break;
        case '5': element.classList.add('deep-green'); break;
        default: element.classList.add('grey'); // default color if score is not 1-5
    }
}
