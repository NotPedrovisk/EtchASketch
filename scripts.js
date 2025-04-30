const container = document.querySelector("div");


//create a loop maybe for creating 16x16 divs, or 256 total
for(i = 0; i < 256; i++){
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


    
   

console.log(container.children.length)