const container = document.querySelector('#container');

function makeGrid(rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);

    for (let i = 0; i < rows * columns; i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    }
    hoverColor();
}

makeGrid(4, 4);

function hoverColor() {
    let cells = document.querySelectorAll('.grid-item');

    cells.forEach(cell => {
        cell.addEventListener('mouseover', event => {
            cell.style.backgroundColor = pickRandomColor();
        });
    });
}

function pickRandomColor() {
    return colorArray[Math.floor(Math.random() * 50)];
}

const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', () => {
    console.log('Yay!');
    let cells = document.querySelectorAll('.grid-item');

    cells.forEach(cell => {
        cell.style.backgroundColor = '#FFFFFF';
    });
});

const sizeChangeButton = document.querySelector('#change-size');

sizeChangeButton.addEventListener('click', () => {
    const size = parseInt(prompt('What should be the size of the grid?'));

    container.innerHTML = '';

    makeGrid(size, size);
});

const colorArray = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D',
    '#80B300',
    '#809900',
    '#E6B3B3',
    '#6680B3',
    '#66991A',
    '#FF99E6',
    '#CCFF1A',
    '#FF1A66',
    '#E6331A',
    '#33FFCC',
    '#66994D',
    '#B366CC',
    '#4D8000',
    '#B33300',
    '#CC80CC',
    '#66664D',
    '#991AFF',
    '#E666FF',
    '#4DB3FF',
    '#1AB399',
    '#E666B3',
    '#33991A',
    '#CC9999',
    '#B3B31A',
    '#00E680',
    '#4D8066',
    '#809980',
    '#E6FF80',
    '#1AFF33',
    '#999933',
    '#FF3380',
    '#CCCC00',
    '#66E64D',
    '#4D80CC',
    '#9900B3',
    '#E64D66',
    '#4DB380',
    '#FF4D4D',
    '#99E6E6',
    '#6666FF'
];