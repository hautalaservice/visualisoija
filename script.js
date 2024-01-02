// Function to apply color based on score
function colorGridItem(category, score) {
    let element = document.getElementById(category);
    // Remove all color classes before adding new one
    element.classList.remove('deep-red', 'light-red', 'grey', 'light-green', 'deep-green');
    switch (score) {
        case '1': element.classList.add('deep-red'); break;
        case '2': element.classList.add('light-red'); break;
        case '3': element.classList.add('grey'); break;
        case '4': element.classList.add('light-green'); break;
        case '5': element.classList.add('deep-green'); break;
        default: element.classList.add('grey'); // default color if score is not 1-5
    }
}

// Function to update score and color based on user input
function updateScore(category, score) {
    localStorage.setItem(category, score); // Save score to local storage
    colorGridItem(category, score);
}

// Initialize colors based on saved values or default to '3'
document.addEventListener('DOMContentLoaded', function () {
    const categories = ['Johto', 'Huolto', 'Myynti', 'Logistiikka'];
    categories.forEach(cat => {
        let savedScore = localStorage.getItem(cat) || '3'; // Retrieve saved score or default to '3'
        updateScore(cat, savedScore);
        document.getElementById(`${cat}-option`).querySelector('input').value = savedScore; // Update input value
    });
});

