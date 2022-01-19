const gridContainer = document.querySelector("#gridContainer");
const colors = ["blue", "red", "green"];


newGridOfSize(16,16);

function newGridOfSize(rows, columns){
    for (let i = 1; i <= rows; i++){
        for(let j = 1; j <= columns; j++){
            const newDiv = document.createElement("div");
    
            newDiv.style.gridColumnStart = `${i}`;
            newDiv.style.gridColumnEnd = `${i+1}`;
            newDiv.style.gridRowStart = `${j}`;
            newDiv.style.gridRowEnd = `${j+1}`;
            newDiv.style.backgroundColor = "black";
            newDiv.addEventListener("mouseover", paintIt)
            //newDiv.addEventListener("mouseleave", unPaintIt);
            
            gridContainer.appendChild(newDiv);
        }
    }
}


function paintIt(ev){
    ev.target.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
}

function unPaintIt(ev){
    ev.target.style.backgroundColor = "black";
}


const resetButton = document.querySelector("button");
resetButton.addEventListener("click", resetGrid);

function resetGrid(ev){
    Array.from(gridContainer.childNodes).forEach((e)=> gridContainer.removeChild(e))
    let sideQuantity = parseInt(window.prompt("Ingrese la cantidad de filas"));
    let squareSide = Math.floor(1000/sideQuantity);
    gridContainer.style.cssText = `display: grid; 
                                   grid-template-columns: repeat(${sideQuantity}, ${squareSide}px);
                                   grid-template-rows: repeat(${sideQuantity}, ${squareSide}px);`;
    newGridOfSize(sideQuantity, sideQuantity);
    
}