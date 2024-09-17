let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let count=0;
let countg=0;
let turnO=true;

const resetGame=()=>
{
    enableboxes();
    msgContainer.classList.add("hide");
};
newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);

let winpattern=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

const enableboxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
        count=0;
    }
};
const disableboxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};


boxes.forEach((box)=>
{   
    box.addEventListener("click",()=>
    {
        console.log("Button got clicked");
        if(turnO===true)
        {
            box.classList.add("blue");
            box.classList.remove("red");
            box.innerText="O";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            box.classList.add("red");
            box.classList.remove("blue");
            turnO=true;
        }
        box.disabled = true;
        checkwinner();
        count++;
        let isWinner = checkwinner();
        if (count === 9 && !isWinner) {
            msg.innerText = "Match Draw";
            msgContainer.classList.remove("hide");
            disableboxes();
        }
    });
});


const checkwinner=()=>
{
    for(let pattern of winpattern)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !== "" && pos2val !== "" && pos3val !== ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner!!!", "is", pos1val);
                showWinner(pos1val);
            }
        }
    }
}

const showWinner=(Winner)=>{
    disableboxes();
    msg.innerText=`Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    count=0;
    countg++;
    if(Winner==="O")
    {
        turnO=true;
    }
    else
    {
        turnO=false;
    }
};