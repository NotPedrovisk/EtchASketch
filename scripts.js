const container = document.querySelector("div");


//used for generating grid
let currentRow = 16
let currentColumn = 16


function drawGrid(){
    const containerSize = 600;
    const cellSize = containerSize/currentRow;

    for(let i = 0; i < currentRow; i++){
        const newRow = document.createElement("div");
        newRow.setAttribute("class", "row");
        
        for(let n = 0; n < currentColumn; n++){
            const newColumn = document.createElement("div");
            newColumn.setAttribute("class", "column");
           

            newColumn.addEventListener("mouseenter", ()=>{
                newColumn.style.backgroundColor = "black";
            });

            newRow.appendChild(newColumn);
            console.log("1")

        }

        container.appendChild(newRow);
    }

}


//used to selecting new grid size
const popUpButton = document.createElement("button");
popUpButton.textContent = "New Grid Size";
popUpButton.addEventListener("click", ()=>{
    let input = prompt("Enter new Grid dimension 1-100");
    let size = parseInt(input);

    if (!Number.isInteger(size) || size <1 || size >100){
        alert("Invalid input. Please enter number between 1 and 100");
        return;
    }

    currentRow = size;
    currentColumn = size;
    
    
    changeGrid()
})
document.body.appendChild(popUpButton)
   
//deletes old grid and draws new one
function changeGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    drawGrid()


}

drawGrid()
