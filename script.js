/*  ----------------------------------------------------------------
    Create grid of square divs
*/
function createGrid() {
    const containerDiv = document.getElementById('container');
    const squaresPerSide = 100;
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
        style: 'border: 0.05em solid whitesmoke;'
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
/*  -------------------------------------------------------------------------
    Clear sketch on the grid
*/
function clearGrid() {
    const squares = document.querySelectorAll('.grid-item');
    const newSketchButton = document.querySelector('.new-sketch');
    
    newSketchButton.addEventListener('click', () => {
        console.log('New sketch cliked!');
        squares.forEach(square => 
            square.style.backgroundColor = 'white'
        );
    });
}

function keyPressed(keyCode) {
    // window.addEventListener('keydown', (e) => {
    //     if (e.code === keyCode && spacePressed == false) {
    //         const squares = document.querySelectorAll('.grid-item');
    //         squares.forEach(square => {
    //             square.classList.remove('grid-item');
    //         });
    //         spacePressed = true;
    //     } else if (e.code === keyCode && spacePressed == true) {
    //         const squares = document.querySelectorAll('.grid-item');
    //         squares.forEach(square => {
    //             square.classList.add('grid-item');
    //         });
    //     }
    // });
    return new Promise((resolve) => {
        window.addEventListener('keydown', (e) => {
            const squares = document.querySelectorAll('.grid-item');
            if (e.code == keyCode) {
                if (spacePressed == false) {
                    spacePressed = true;
                    squares.forEach(square => {
                        square.classList.remove('grid-item');
                    });
                } else {
                    spacePressed = false;
                    squares.forEach(square => {
                        square.classList.add('grid-item');
                    });
                }
            }
        })
    });
}
/*  ----------------------------------------------------------------------
    Main program
    ----------------------------------------------------------------------
*/

let spacePressed = false;

createGrid();
keyPressed('Space');
hoverSquares();
clearGrid();

