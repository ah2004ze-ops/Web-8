const display = document.getElementById("display");

function appendValue(value) {
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function deleteLast() {
    if (display.value.length <= 1 || display.value === "Error") {
        display.value = "0";
    } else {
        display.value = display.value.slice(0, -1);
    }
}

function calculateResult() {
    try {
        let result = eval(display.value);
        if (result === Infinity || result === -Infinity || isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event) {
    const key = event.key;

    if ((key >= "0" && key <= "9") || key === "." || key === "+" || key === "-" || key === "*" || key === "/" || key === "%") {
        appendValue(key);
    } else if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculateResult();
    } else if (key === "Escape") {
        clearDisplay();
    } else if (key === "Backspace") {
        deleteLast();
    }
});
