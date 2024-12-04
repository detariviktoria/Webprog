let slots = [];
let totalMoney = 12000;

const ul = document.querySelector("ul");

//------------------------------------------
function randint(a, b)
{
    return Math.floor(Math.random(b-a+1)) + a;
}



function rollSlots(bet)
{

    /*let egy = getFruit();
    let  ketto = getFruit();
    let harom = getFruit();*/


    for(let i = 0; i< 3; i++)
    {
        let gyumi = getFruit();
        const li = document.createElement("li");
        li.innerHTML = `./fruits/${gyumi}.png`
        slots.push( gyumi);
    }
    /*const li1 = document.createElement("li");
    li1.innerHTML = `./fruits/${egy}.png`
    const li2 = document.createElement("li");
    li2.innerHTML = `./fruits/${ketto}.png`
    const li3 = document.createElement("li");
    li3.innerHTML = `./fruits/${harom}.png`*/

    /*slots.push(egy);
    slots.push(ketto);
    slots.push(harom);*/
    
    let calculatwinning = calculateWinning(bet);
    showStats(winning);
    saveGame(bet, winning) ;
} 

function startGame()
{
    const tet = document.querySelector("input").value;
    if(tet < 100 || tet > totalMoney)
        console.log("Hiba törtent!");
    else
        totalMoney-tet;
        rollSlots(tet) ;
}

const startgame = document.querySelector("#play-btn");
startgame.addEventListener("click", startGame);

function getFruit()
{
    let r = randint(0,2);
    if(r === 0)
    {
        return "cherry";
    }
    else if(r===1)
    {
        return "lemon";
    }
    else 
    return "orange";
}

function calculateWinning(bet)
{
    if(slots[0] === slots[1] && slots[0] === slots[2])
    {
        (totalMoney - bet) + bet * 5;
        return bet*5;
    }
    else
        return 0;
}

function showStats(winning){

}    

function saveGame(bet, winning)
{

}