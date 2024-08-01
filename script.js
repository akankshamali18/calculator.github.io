let input = document.getElementById("input");
let display = "";

const btnID = document.getElementById("btnID");

function handleInput(text) {
    if (text === "AC" || text === "C" || text === "=") {
        if (text === "AC") {
            display = "";
        } else if (text === "C") {
            display = display.slice(0,-1); 
        } else if (text === "=") {
            try {
                display = eval(display); 
            } catch (error) {
                display = "Error";
            }
        }
    } else {
        display += text;
    }
    input.value = display;
}

btnID.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        let text = event.target.textContent;
        handleInput(text);
    }
});


document.addEventListener('keydown', (event) => {
    let key = event.key;
    if (key === 'Enter') {
        handleInput("=");
    } else if (key === 'Backspace') {
        handleInput("AC");
    } else if (key === 'Delete') {
        handleInput("AC");
    } else if (!isNaN(key) || ['+', '-', '*', '/', '%', '.'].includes(key)) {
        handleInput(key);
    }
});
