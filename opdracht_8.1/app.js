let title = document.getElementById('title');
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

function multiply(){
    if(input1.value < 1 || input2.value < 1) {
        title.innerText = "het getal is te laag"
    }else {
        let answer = input1.value * input2.value
        title.innerText = answer;
    }
 

}
function devide(){
    if(input1.value < 1 || input2.value < 1) {
        title.innerText = "het getal is te laag"
    }else {
    let answer = input1.value / input2.value
    title.innerText = answer;
    }
}
function add(){
    if(input1.value < 1 || input2.value < 1) {
        title.innerText = "het getal is te laag"
    } else{
    let answer = Number(input1.value) + Number(input2.value)
    title.innerText = answer;
    }
}
function minus(){
    if(input1.value < 1 || input2.value < 1) {
        title.innerText = "het getal is te laag"
    } else{

    
    let answer = input1.value - input2.value
    title.innerText = answer;
    }

}