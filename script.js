/*  ----------------------------------------------------------------
    Create grid of square divs
*/
function createGrid() {
    const containerDiv = document.getElementById('container');
    const squaresPerSide = 7;
    for (let i = 1; i <= squaresPerSide ** 2; i++) {
        createSquare();
    }
    const gridAttributes = {
        style: `grid-template-columns: repeat(${squaresPerSide}, 1fr); grid-template-rows: repeat(${squaresPerSide}, 1fr);`
    };
    setMultipleAttributes(containerDiv, gridAttributes);
}

/*  -------------------------------------------------------------------
    Create square grid item inside grid container
*/
function createSquare() {
    const containerDiv = document.getElementById('container');
    const square = document.createElement('div');
    const squareAttributes = {
        class: 'grid-item',
        style: 'border: 0.1rem solid blue;'
    };
    setMultipleAttributes(square, squareAttributes);
    containerDiv.appendChild(square);
}

function hoverSquares() {
    const squares = document.querySelectorAll('.grid-item');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.setAttribute('style', 'background-color: black');
        })
    })
}

function setMultipleAttributes(element, attributes) {
    Object.keys(attributes).forEach(attr => {
        element.setAttribute(attr, attributes[attr]);
    });
}

/*  ----------------------------------------------------------------------
    Main program
    ----------------------------------------------------------------------
*/
createGrid();
hoverSquares();