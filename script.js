/* TO-DO:
    add function that resets div elements to default state
    add function that can change div elements grid size
    function should be able to update DOM tree (add/remove) with needed div elements    
*/

makeCanvas(32);
addEventTriggerforCanvas(); 

function newCanvas() {
    let haveNumber = false;
    let userInput = parseInt(prompt("How big should your next canvas be? \nPlease input a whole number \nNew canvas size will be number x number big \nFor performance reasons, please don't make it bigger than 64.", ''));
    //control for new canvas size restrictions and reset canvas
    while (haveNumber === false) {
       if (Number.isInteger(userInput) && userInput <= 64) {
           haveNumber = true;
           resetCanvas(userInput);
       } else { 
           userInput = parseInt(prompt("You naughty child, you! \nYou either did not input a number or the number was too big. \nTry again!", ''));
       }
    };
};

function resetCanvas(size) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    makeCanvas(size);
    addEventTriggerforCanvas(); 
};

function addEventTriggerforCanvas() {
    document.querySelectorAll('.default-state').forEach(item => {
        item.addEventListener('mouseover', event => {
          event.target.className = 'activated';
        })
      });
};

//grid is utilized to setup the drawing area
//a matrix of size x size is generated
//div elements are added as child items to a grid container
//element IDs created follow a matrix based notation
//i = number of rows | j = number of columns
function makeCanvas(size) {
   const container = document.querySelector('#container');
   for (i = 1; i <= size; i++) {
       for (j = 1; j <= size; j++) {
        let div = document.createElement('div');
        div.setAttribute('id', `${'item' + i.toString() + j.toString()}`); 
        div.classList.add('default-state');
        container.appendChild(div);
        setDivAttributes(i,j);
        let p = document.createElement('p');
        div.appendChild(p);
       }
   }
};

function setDivAttributes(DivIdRow,DivIdColumn) {
    document.getElementById(`${'item' + DivIdRow.toString() + DivIdColumn.toString()}`).style.cssText = `grid-column: ${DivIdColumn} / ${DivIdColumn + 1}; grid-row: ${DivIdRow} / ${DivIdRow + 1}`;
   };
