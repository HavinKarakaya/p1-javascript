let button = document.getElementById('button');
let button3 = document.getElementById('text');
console.log(button);

let count = 0;
console.log(count);



function counter() {
    document.body.style.backgroundColor="red"
    count += 1;
    console.log(count)
    button.innerText = count+ "keer op geklikt"
}


let button2 = document.getElementById('button2');
function counter2() {
    document.body.style.backgroundColor="blue"
    count -= 1;
    console.log(count)
    button2.innerText = count+ "keer op geklikt"
}