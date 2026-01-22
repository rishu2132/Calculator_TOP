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
            console.log(`algebraic ${number}`)
            num1 = parseFloat(number.split(operation)[0]);
            num2 = parseFloat(number.split(operation)[1]);
            console.log(`num1 ${num1}`);
            console.log(`num2 ${num2}`)
            showDisplay();
        })
    })

operatorButton.forEach(button =>{
    button.addEventListener("click",()=>{
        
        number = number + button.innerText;
        let nextOperation = button.innerText;
        console.log(`opeartion ${number}`)
        operatorCount+=1;
        if (operatorCount === 2){
            number = calculate();
            if(number === undefined) {
                clearAll();
                showDisplay();
            }
            else {
                number = number.toString() + nextOperation;
                operatorCount = 1;
            }
            console.log(number);
            
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
            if(num2 === 0) {
                alert("Do not try to divide a number by 0")
                return 
            };
            total = num1/num2;
            total = parseFloat((total).toFixed(2));
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

clearButton.addEventListener("click",() => {
    clearAll();
    showDisplay();
    
    
})


function clearAll(){
    number = '';
    operation = '';
    operatorCount = 0;
}

