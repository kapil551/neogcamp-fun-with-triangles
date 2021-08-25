
// get the base input
const baseInput = document.querySelector("#base-input");
// console.log(baseInput);

// get the height input
const heightInput = document.querySelector("#height-input");
// console.log(heightInput);

// get the calculate area button
const calculateAreaBtn = document.querySelector("#calculate-area-btn");
// console.log(calculateAreaBtn);

// get the output div
const ouputMessage = document.querySelector(".output");
// console.log(ouputMessage);


function productOfBaseAndHeight(base, height) {

    const calculateProduct = base*height;

    return calculateProduct;
}

function calculateAreaOfTriangle() {

    // console.log("CLicked");
    
    ouputMessage.style.display = "none";

    const baseLength = Number(baseInput.value);
    const heightLength = Number(heightInput.value);
    
    if(baseLength > 0 && heightLength > 0) {

        const calculateProduct = productOfBaseAndHeight(baseLength, heightLength);

        const AreaOfTriangle = calculateProduct/2;
        const str = "2";

        ouputMessage.style.display = "block";
        ouputMessage.innerText = `The area of triangle is ${AreaOfTriangle} square centimeter`;

    } else {

        ouputMessage.style.display = "block";
        ouputMessage.innerText = `The base and height should be greater than zero.`;
    }

}



calculateAreaBtn.addEventListener("click", calculateAreaOfTriangle);