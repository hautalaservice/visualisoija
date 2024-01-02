document.addEventListener('DOMContentLoaded', function () {
    const categories = ['Johto', 'Huolto', 'Myynti', 'Logistiikka'];
    categories.forEach(cat => {
        let score = prompt(`Enter score for ${cat} (1-5):`);
        colorGridItem(cat, score);
    });
});

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
