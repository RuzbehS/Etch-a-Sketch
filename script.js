/* TO-DO:
    Implement DOM queries for div elements 
    add event listeners to div elements
    event listener types should notice the mouse hovering over div elements
    write functions that switch css of div elements on triggered event
    add function that resets div elements to default state
    add function that can change div elements grid size
    function should be able to update DOM tree (add/remove) with needed div elements    
*/


// this function should take a integer number as a size and make a number x number sized grid of div elements
// for performance reasons, grid size should not be greater than 64x64 
// the div elements are grid items and their attributes (where they start and end) should also be set 
// set attributes of grid items with 
//     grid-coloumn-start: <grid line number> 
//     grid-column-end
//     grid-row-start
// grid-row-end



makeGridSystem(64); 
// setDivAttributes(2);

function makeGridSystem(size) {
   const container = document.querySelector('#container');
   for (i = 1; i <= size; i++) {
       for (j = 1; j <= size; j++) {
        let div = document.createElement('div');
        div.setAttribute('id', `${'item' + i.toString() + j.toString()}`); 
        container.appendChild(div);
        setDivAttributes(i,j);
        let p = document.createElement('p');
        div.appendChild(p);

       }
    
      
      
   }
      
};

function setDivAttributes(DivIdRow,DivIdColumn) {
    document.getElementById(`${'item' + DivIdRow.toString() + DivIdColumn.toString()}`).style.cssText = `grid-column: ${DivIdColumn} / ${DivIdColumn + 1}; grid-row: ${DivIdRow} / ${DivIdRow + 1}`;
   }
