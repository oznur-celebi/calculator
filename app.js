let dugme = document.querySelectorAll(".button");//
let screen = document.querySelector(".calc-numbers");
let calculator = dugme[18];
let clear_button = dugme[0];
let sign_changer = dugme[1];
let result_screened = false;

if (result_screened = true) {

}
dugme.forEach(element => {
    if (element.innerHTML != "+/-" && element.innerHTML != "AC" && element.innerHTML != "&#129044" && element.innerHTML != "=") {
        element.addEventListener("click", print);
    }
    function print() {
        screen.value += element.innerHTML;
    }
})
calculator.addEventListener("click", () => {
    let array = screen.value.split("");
    screen.value = calculate(array);
    // console.log(array);
    // console.log(array.slice(1,3).join(""));

})

function calculate(array) {
    let i;
    if (array.includes("÷") == true) {
        let i = array.indexOf("÷");
        let x = array.slice(0, i).join("");
        let y = array.slice(i + 1).join("");
        console.log(x);
        console.log(y);
        result_screened = true;
        console.log(result_screened);
        return divide(parseFloat(x), parseFloat(y))
    }
    if (array.includes("x") == true) {
        i = array.indexOf("x");
        let x = array.slice(0, i).join("");
        let y = array.slice(i + 1).join("");
       result_screened = true;
        console.log(result_screened);
        return mul(parseFloat(x), parseFloat(y));
    }
    if (array.includes("-") == true) {
        i = array.indexOf("-");
        let x = array.slice(0, i).join("");
        let y = array.slice(i + 1).join("");
        result_screened = true;
        console.log(result_screened);
        return sub(parseFloat(x), parseFloat(y));
        
    }
    if (array.includes("+") == true) {
        let i = array.indexOf("+");
        let x = array.slice(0, i).join("");
        let y = array.slice(i + 1).join("");
        result_screened = true;
        console.log(result_screened);
        return sum(parseFloat(x), parseFloat(y));
    }

    //  result_screened =1;
    //  console.log(result_screened);
}

function divide(a, b) {
    if (b == 0) {
        return "infinity"
    }
    else {
        return (a / b)
    }
}

function mul(a, b) {
    return (a * b)
}
function sub(a, b) {
    return (a - b)
}
function sum(a, b) {
    return (a + b)
}


clear_button.addEventListener("click", clear);
function clear() {
    screen.value = "0";
}
sign_changer.addEventListener("click", change);
function change() {
    screen.value = screen.value*(-1);
}
