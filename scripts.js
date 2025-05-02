const container = document.querySelector("div");


//create a loop maybe for creating 16x16 divs
let currentRow = 16
let currentColumn = 16

function drawGrid(){
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
    currentRow = prompt("Enter new Grid dimension 1-100")
    currentColumn = currentRow
    
    
    changeGrid()
})
document.body.appendChild(popUpButton)
   

function changeGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    drawGrid()


}

drawGrid()
console.log(container.children.length)