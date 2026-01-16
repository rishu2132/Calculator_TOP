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
const result = document.getElementById("result")
let number = 0
let digit = '';
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains("btn")){
        // console.log(typeof(e.target.innerText));
        const data = e.target.innerText;

        while (true){
            
            digit = digit + data;
            console.log(digit);
            number = parseInt(digit);
            console.log(number)
            break
        }
        
        
    }
})





