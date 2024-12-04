const slots = [];
const totalMoney = 12000;
const ul = document.querySelector("ul");

function startGame()
{
    const tet = document.querySelector("label");
    const value = tet.value;
    if(value < 100 || value > totalMoney)
    {
        console.log("Hiba tortent");
    }
    else
    {
        totalMoney-value;
        rollSlots(tet);
    }
}

const play = document.querySelector("#play-btn");
play.addEventListener("click", startGame);


function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

function getFruit()
{
    const r = randint(0,2);
    if(r === 0)
    {
        return "cherry";
    }
    else if(r === 1)
    {
        return "lemon";
    }
    else 
    {
        return "orange";
    }
}

function rollSlots(bet) 
{
    for(let i = 0; i<3;i++)
    {
        getFruit();
        const li = document.createElement("li");
        ul.innerHTML = li.value + ".png";
    }
}