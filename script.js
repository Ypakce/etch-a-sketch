let size = 8;

function form_grid(size){
    const grid = document.querySelector(".grid");
    for(let i=0; i<size; i++){
        const column = document.createElement("div");
        column.classList.add("column");
        for(let j=0; j<size; j++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            column.append(cell);
        }
        grid.append(column);
    }
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell =>{
        cell.addEventListener("mouseover", function(e){
            e.target.style.backgroundColor = "black";
        });
    })
}

form_grid(size);