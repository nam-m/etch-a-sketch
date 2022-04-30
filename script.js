/*  ----------------------------------------------------------------
    Create grid of square divs
*/
function createGrid() {
    const containerDiv = document.getElementById('container');
    const squaresPerSide = 10;
    for (let i = 1; i < squaresPerSide ** 2; i++) {
        createSquare();
    }
    const gridAttributes = {
        style: `grid-template-columns: repeat(${squaresPerSide}, 1fr); grid-template-rows: repeat(${squaresPerSide}, 1fr);`
    }
    setMultipleAttributes(containerDiv, gridAttributes);
}

function setMultipleAttributes(element, attributes) {
    Object.keys(attributes).forEach(attr => {
        element.setAttribute(attr, attributes[attr]);
    });
}

/*  -------------------------------------------------------------------
    Create square grid item inside grid container
*/
function createSquare() {
    const containerDiv = document.getElementById('container');
    const square = document.createElement('div');
    square.classList.add('grid-item');
    square.setAttribute('style', 'border: 0.1rem solid blue;');
    containerDiv.appendChild(square);
}

createGrid();
