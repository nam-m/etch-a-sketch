/* ----------------------------------------------------------------
Create grid of square divs
*/
function createGrid() {
    const containerDiv = document.getElementById('container');
    const squaresPerSide = 5;
    const gridAttributes = {
        style: `grid-template-columns: repeat(${squaresPerSide}, 1fr); grid-template-rows: repeat(${squaresPerSide}, 1fr);`
    }
    setMultipleAttributes(containerDiv, gridAttributes);

    // document.body.appendChild(containerDiv);
}

function setMultipleAttributes(element, attributes) {
    Object.keys(attributes).forEach(attr => {
        element.setAttribute(attr, attributes[attr]);
    });
}

function createSquare() {
    const containerDiv = document.getElementsByClassName('container');
    const square = document.createElement('div');
    containerDiv.appendChild(square);
}

createGrid();
