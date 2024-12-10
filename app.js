const box1 = document.querySelector("#id1")
const box2 = document.querySelector("#id2")
const box3 = document.querySelector("#id3")
const box4 = document.querySelector("#id4")
const box5 = document.querySelector("#id5")
const box6 = document.querySelector("#id6")
const box7 = document.querySelector("#id7")
const box8 = document.querySelector("#id8")
const box9 = document.querySelector("#id9")



let count = 1;

function textShow(){
    let characterO = "O"
    let characterX = "X"
    if (count % 2 === 0) {
        return characterO
    } else {
        return characterX
    }
}


function game(num){
    let text = textShow()
    if (num === 1 && box1.innerHTML==="") {
        box1.innerHTML = text
        count++;
    }
    else if(num === 2 && box2.innerHTML===""){
        box2.innerHTML = text
        count++;
    }
    else if(num ===3 && box3.innerHTML ===""){
        box3.innerHTML = text
        count++;
    }
    else if(num === 4 && box4.innerHTML === ""){
        box4.innerHTML = text
        count++;
    }
    else if(num === 5 && box5.innerHTML === ""){
        box5.innerHTML = text
        count++;
    }
    else if(num === 6 && box6.innerHTML === ""){
        box6.innerHTML = text
        count++;
    }
    else if(num === 7 && box7.innerHTML ===""){
        box7.innerHTML = text
        count++;
    }
    else if(num === 8 && box8.innerHTML ===""){
        box8.innerHTML = text
        count++;
    }
    else if(num === 9 && box9.innerHTML ===""){
        box9.innerHTML = text
        count++;
    }

    win()

        if (count === 10) {
          reset()
        }
}

function reset(){
    box1.innerHTML = "";
    box2.innerHTML = "";
    box3.innerHTML = "";
    box4.innerHTML = "";
    box5.innerHTML = "";
    box6.innerHTML = "";
    box7.innerHTML = "";
    box8.innerHTML = "";
    box9.innerHTML = "";
     count = 1;
}

function messsagePopup(){
    if (count % 2 === 0) {
        alert("X Win")
    } else {
        alert("O Win")
    }
}

function win(){
   let container1 = box1.innerHTML;
   let container2 = box2.innerHTML;
   let container3 = box3.innerHTML;
   let container4 = box4.innerHTML;
   let container5 = box5.innerHTML;
   let container6 = box6.innerHTML;
   let container7 = box7.innerHTML;
   let container8 = box8.innerHTML;
   let container9 = box9.innerHTML;

      if ((container1 === "O" && container2 === "O" && container3 === "O") || (container1 === "X" && container2 === "X" && container3 === "X")) {
        messsagePopup()
        reset()
      }
      else if((container4 === "O" && container5 === "O" && container6 === "O") || (container4 === "X" && container5 === "X" && container6 === "X")){
        messsagePopup();
         reset();
      }
      else if((container7 === "O" && container8 === "O" && container9 === "O") || (container7 === "X" && container8 === "X" && container9 === "X")){
        messsagePopup();
        reset();
      }
      else if((container1 === "O" && container4 === "O" && container7 === "O") || (container1 === "X" && container4 === "X" && container7 === "X")){
        messsagePopup();
         reset();
      }
      else if((container2 === "O" && container5 === "O" && container8 === "O") || (container2 === "X" && container5 === "X" && container8 === "X")){
        messsagePopup();
         reset();
      }
      else if((container3 === "O" && container6 === "O" && container9 === "O") || (container3 === "X" && container6 === "X" && container9 === "X")){
        messsagePopup();
        reset();
      }
      else if((container1 === "O" && container5 === "O" && container9 === "O") || (container1 === "X" && container5 === "X" && container9 === "X")){
        messsagePopup();
        reset();
      }
      else if (
        (container3 === "O" && container5 === "O" && container7 === "O") ||
        (container3 === "X" && container5 === "X" && container7 === "X")
      ) {
        messsagePopup();
         reset();
      }
}