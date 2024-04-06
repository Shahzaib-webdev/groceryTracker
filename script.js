let grocery1;
let grocery2;
let grocery3;

function groceryCalc(){
    grocery1 = parseFloat(document.getElementById("firstGrocery").value);
    grocery2 = parseFloat(document.getElementById("second-grocery").value);
    grocery3 = parseFloat(document.getElementById("third-grocery").value);
    let sum ;
    sum = grocery1 + grocery2 + grocery3;
    document.getElementById("result").innerHTML= `Total bill is ${sum}`;
}
