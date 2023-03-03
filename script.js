let initial_size = 8;

const grid = document.querySelector(".grid");
function form_grid(size){
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    for(let i=0; i<size; i++){
        const column = document.createElement("div");
        column.classList.add("column");
        for(let j=0; j<size; j++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseover", function(e){
                e.target.style.backgroundColor = "black";
            });
            column.append(cell);
        }
        grid.append(column);
    }
}

const slider = document.querySelector("#slider");
const grid_size = document.querySelector(".grid-size");
slider.addEventListener("input", resize);

const reset = document.querySelector(".reset");
reset.addEventListener("click", resize);

function resize(){
    let val = slider.value;
    form_grid(val);
    grid_size.textContent = val + "x" + val;
}

form_grid(initial_size);