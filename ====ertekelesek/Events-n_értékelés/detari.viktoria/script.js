const n = 8;
let m = [];
let increment = 1;
const table = document.querySelector("table");
const pos = { x: null, y: null }; 

function createMatrix(value) {
    m = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(value);
        }
        m.push(row);
    }
}
createMatrix(5);

function isBlack(i, j) {
    return (i + j) % 2 === 0;
}

function randint(a, b)
{
    return Math.floor(Math.random() * (b-a+1)) + a;
}

// -------------------------------------

// F1
function showTable(){
    table.innerHTML  = "";
    for(let i = 0; i<n; i++)
    {
        const tr = document.createElement("tr");
        for(let j =0; j<n; j++)
        {
            const td = document.createElement("td");
            if(isBlack(i,j))
            {
                td.classList("black");
            }
            td.innerText = m[i][j].value;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}


// F2
function OneCell(e){
    const td = e.Target;
    if(!td.matches("td")) return;
    const x = e.value;
    x

    showTable();
}

table.addEventListener("click", OneCell);


// F3

function Jobbeger(e)
{
    const td = e.Target;
    if(!td.matches("td")) return;
    pos.x = td.cellIndex;
    pos.y = td.parentNode.rowIndex;
}

table.addEventListener("contextmenu",Jobbeger);


// F4
function Rbetu(e)
{
    if(e.key === "r" || e.key === "R")
    {
        increment = randint(3,9);
    }
}

window.addEventListener("keyup", Rbetu);

