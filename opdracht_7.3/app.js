let title = document.getElementById("title");

let getal = 0;

function add(){

  if(getal == 10) {
    getal = -1;
  } else { 
    getal += 1;
    title.innerText = getal;
  }


}