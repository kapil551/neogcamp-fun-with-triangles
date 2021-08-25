// get the input sides
const inputSides = document.querySelectorAll(".side-input");
// console.log(inputSides);

// get the calculate hypotenuse button
const calculateHypotenuseBtn = document.querySelector("#hypotenuse-btn");
// console.log(calculateHypotenuseBtn);

// get the ouput div
const outputMessage = document.querySelector(".output");
// console.log(outputMessage);


function calculateSumOfSquares(a, b) {

    const sumOfSquares = a*a + b*b;

    // console.log(sumOfSquares);
    return sumOfSquares;
}

function calculateHypotenuse() {

    // console.log("Clicked");

    outputMessage.style.display = "none";

    // get the value and also typecast it to number
    let sideA = Number(inputSides[0].value);
    let sideB = Number(inputSides[1].value);
    
    if(sideA > 0 && sideB > 0) {

        // How to find square root of a number in javaScript?
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt

        let sumOfSquares = calculateSumOfSquares(sideA, sideB);
        let hypotenuseLength =  Math.sqrt(sumOfSquares);

        outputMessage.style.display = "block";
        outputMessage.innerText = `The length of hypotenuse is ${hypotenuseLength}`;

    } else {

        outputMessage.style.display = "block";
        outputMessage.innerText = `a and b should be greater than zero!`;
    }
}

// add click event listener to the calcualate hypotenuse button
calculateHypotenuseBtn.addEventListener("click", calculateHypotenuse);