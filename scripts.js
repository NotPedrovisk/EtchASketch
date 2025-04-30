const container = document.querySelector("div");


//create a loop maybe for creating 16x16 divs, or 256 total
let currentDimension = 256

function drawGrid(){
    for(i = 0; i < currentDimension; i++){
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "testDivs");
    
        newDiv.addEventListener("mouseenter", ()=>{
            newDiv.style.backgroundColor = "lightgray";
        });
        newDiv.addEventListener("mouseleave", ()=>{
            newDiv.style.backgroundColor = "white";
        })
    
        container.appendChild(newDiv);
    }
}


//used to selecting new grid size
const popUpButton = document.createElement("button");
popUpButton.textContent = "New Grid Size";
popUpButton.addEventListener("click", ()=>{
    currentDimension = prompt("Enter new Grid dimension")
    currentDimension = currentDimension * currentDimension
    changeGrid()
})
document.body.appendChild(popUpButton)
   

function changeGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    drawGrid()


    alert("dun")
}

drawGrid()
console.log(container.children.length)