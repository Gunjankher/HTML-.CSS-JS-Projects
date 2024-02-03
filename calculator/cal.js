let string = ""
let buttons = document.querySelectorAll(".button")

// DEFINING THE FUNCTION THAT ARE GOING TO USE IN CALCUALTOR
function handletheButton(buttonText) {
    if (buttonText == "=") {
        string = eval(string)
        document.querySelector('input').value = string
    }
    else if (buttonText == "Ac") {
        string = ""
        document.querySelector('input').value = string
    }
    else if (buttonText == "⌫") {
        string = string.slice(0, -1);
        document.querySelector('input').value = string;
    }
    else if (buttonText == "π") {
        let pi = "3.1415926539897"
        let result = parseFloat(string) * pi
        string = result.toString()
        document.querySelector('input').value = string;
    }
    else if (buttonText == "sin") {
        const numvalue = parseFloat(string);
        if (!isNaN(numvalue)) {
            // Calculate the sine of the value and update the input
            const result = Math.sin(numvalue);
            string = result.toString();
            document.querySelector('input').value = string;
        } else {
            // Handle the case where the input is not a valid number
            // You can display an error message or take other appropriate action
            console.log("Invalid input for sine function.");
        }
    }
    else if (buttonText == "cos") {
        const numvalue = parseFloat(string);
        if (!isNaN(numvalue)) {
            // Calculate the sine of the value and update the input
            const result = Math.cos(numvalue);
            string = result.toString();
            document.querySelector('input').value = string;
        } else {
            // Handle the case where the input is not a valid number
            // You can display an error message or take other appropriate action
            console.log("Invalid input for sine function.");
        }
    }
    else if (buttonText == "tan") {
        const numvalue = parseFloat(string);
        if (!isNaN(numvalue)) {
            // Calculate the sine of the value and update the input
            const result = Math.tan(numvalue);
            string = result.toString();
            document.querySelector('input').value = string;
        } else {
            // Handle the case where the input is not a valid number
            // You can display an error message or take other appropriate action
            console.log("Invalid input for sine function.");
        }
    }
    
    else if (buttonText == "log") {
        const numvalue = parseFloat(string);
        if (!isNaN(numvalue)) {
            const result = Math.log10(numvalue);
            string = result.toString();
            document.querySelector('input').value = string;
        } else {
            // Handle invalid input or negative numbers
            console.log("Invalid input for natural logarithm.");
        }
    }
    else if (buttonText == "ln") {
        const numvalue = parseFloat(string);
        if (!isNaN(numvalue) && numvalue > 0) {
            const result = Math.log(numvalue); // Calculate the natural logarithm
            string = result.toString();
            document.querySelector('input').value = string;
        } else {
            // Handle invalid input (negative number or zero)
            console.log("Invalid input for natural logarithm.");
        }
    }else if (buttonText == "!") {
        const numvalue = parseInt(string);
        if (!isNaN(numvalue) && numvalue >= 0) {
            // Calculate the factorial
            let result = 1;
            for (let i = 1; i <= numvalue; i++) {
                result *= i;
            }
            string = result.toString();
            document.querySelector('input').value = string;
        } else {
            // Handle invalid input (negative number or non-integer)
            console.log("Invalid input for factorial.");
        }
    }
else if (buttonText=="e"){
    const numvalue = parseFloat(string)
    const result = Math.E
    string = result.toString()
    document.querySelector('input').value = string;
}
    
    else if (buttonText=="inv"){
        const numvalue= parseFloat(string)
        const result = Math.sqrt(numvalue)
        string = result.toString()
        document.querySelector('input').value = string
    }
    else {
        console.log(buttonText)
        string = string + buttonText
        document.querySelector('input').value = string
    }
}

// CLICK EVENT LISTNER
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        handletheButton(e.target.innerHTML)
    })
    // ENTER EVENT LISTNER 
    button.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            string = eval(string)
            document.querySelector('input').value = string;
        }
        else if (e.key === "Backspace") {
            string = string.slice(0, -1)
            document.querySelector('input').value = string
        }
    })
})

// Select the "sin" button specifically
// const sinButton = document.querySelector('#sin-button');

// sinButton.addEventListener('click', () => {
//     handletheButton("sin");
// });

// const cosButton = document.querySelector('#cos-button');

// cosButton.addEventListener('click', () => {
//     handletheButton("cos");
// });

// const tanButton = document.querySelector('#tan-button');

// tanButton.addEventListener('click', () => {
//     handletheButton("tan");
// });

// const logButton = document.querySelector('#log-button');

// logButton.addEventListener('click', () => {
//     handletheButton("log");
// });

// const lnButton = document.querySelector('#ln-button');


