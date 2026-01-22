function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function division(a,b){
    return a/b
}

function operate(op,a,b){
    return op(a,b)
}
const result = document.querySelector("[data-result]");
const numberButton = document.querySelectorAll("[data-number]");
const operatorButton = document.querySelectorAll("[data-operator]");
const clearButton = document.querySelector("[data-clear]");
const equalButton = document.querySelector("[data-equal]");



let number = '';
let operation = undefined;
let num1,num2;
let operatorCount = 0;


numberButton.forEach(button =>{
        button.addEventListener("click", () =>{
            if (button.innerText === '.' && number.includes(".")) return
            number = number + button.innerText;
            num1 = parseFloat(number.split(operation)[0]);
            num2 = parseFloat(number.split(operation)[1]);
            
            showDisplay();
        })
    })

operatorButton.forEach(button =>{
    button.addEventListener("click",()=>{
        
        number = number + button.innerText;
        let nextOperation = button.innerText;
        
        operatorCount+=1;
        if (operatorCount === 2){
            number = calculate();
            number = number.toString() + nextOperation;
            operatorCount = 1;
        }
        operation = button.innerText;
        
        
        showDisplay();
        
    })

})

function calculate(){
    let total;

    switch(operation){
        case '+':
            total = num1+num2;
            break
        case '-':
            total = num1-num2;
            break
        case '*':
            total = num1*num2;
            break
        case '/':
            total = num1/num2;
            break
        default:
            return
        
    
    }
  
    console.log(total)
    return total
}

function showDisplay(){
    result.innerText = number;
}

equalButton.addEventListener("click",() => {

    if (num1 !== undefined || num2 !== undefined){
        number = calculate();
        showDisplay();
    }
    else alert("add a valid expression ! ")
}
)

function deleteText(){

}




// const result = document.getElementById("result")
// let number = 0
// let digit = '';
// document.addEventListener('click',(e)=>{
//     if(e.target.classList.contains("btn")){
//         // console.log(typeof(e.target.innerText));
//         const data = e.target.innerText;

//         while (true){
            
//             digit = digit + data;
//             console.log(digit);
//             number = parseInt(digit);
//             console.log(number)
//             break
//         }
        
        
//     }
// })





