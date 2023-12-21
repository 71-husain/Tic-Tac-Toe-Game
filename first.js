let body=document.querySelector("body");
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let hide = document.querySelector(".hide");
let newWin = document.querySelector(".newWin");
let newgame = document.querySelector(".newGame");
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
let turnO=true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turnO) {
        //playerO
        box.innerText = "O";
        turnO = false;
      } else {
        //playerX
        box.innerText = "X";
        turnO = true;
      }
        box.disabled=true;
        checkWinner();
    });
  });
  const checkWinner = () => {
    for(let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
             hide.classList.remove("hide");
             newWin.innerText= `Congratulation ${pos1Val} is Winner`;
             disableBoxes();
             reset.classList.add("hide");
            }
            }
    }
  };
  const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
  }
  const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
  }
  const resetgame=()=>{
    turno=true;
    enableBoxes();
  }
  const newGame=()=>{
    turnO=true;
    enableBoxes();
    hide.classList.add("hide");
  }
  reset.addEventListener("click",resetgame);
  newgame.addEventListener("click",newGame);