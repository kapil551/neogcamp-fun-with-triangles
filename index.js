// get all the three angle input tags
const angleInputs = document.querySelectorAll(".input-angle");
console.log(angleInputs); // this returns an array/list of all the angle input tags

// get the is traingle button
const isTriangleButton = document.querySelector("#is-triangle-btn");
console.log(isTriangleButton);

// get the output div
const outputMessage = document.querySelector("#output");
console.log(outputMessage);

// get the error message div
const errorMessage = document.querySelector("#error-message");
console.log(errorMessage);



// check if the angles form a triangle or not
function isTriangle() {

    console.log("Clicked");

    // reset the ouput div for the next user inputs
    outputMessage.style.display = "none";

    // reset the error message div for the next user inputs
    errorMessage.style.display = "none";

    // access the values of each input field
    // by default the value of input fields is string so, for addition opeation we need to typecast it to number.
    const angle1 = Number(angleInputs[0].value);
    console.log(angle1);

    const angle2 = Number(angleInputs[1].value);
    console.log(angle2);

    const angle3 = Number(angleInputs[2].value);
    console.log(angle3);

    // error handling ==> angle validation
    if(angle1 > 0 && angle2 > 0 && angle3 > 0) {

        // the angles form a triangle if the sum of them is 180.
        const sumOfAngles = angle1 + angle2 + angle3;
        console.log(sumOfAngles);

        if(sumOfAngles === 180) {

            console.log("The angles form a triangle");

            outputMessage.style.display = "block";
            outputMessage.innerText = "The angles form a triangle";

        }
        else {
            console.log("The angles don't form a triangle");

            outputMessage.style.display = "block";
            outputMessage.innerText = "The angles don't form a triangle";
        }



    }

    else {
        
        errorMessage.style.display = "block";
        errorMessage.innerText = "All the input fields should have values greater than zero";
    }

   

}


// add click event listener on the istriangle button
isTriangleButton.addEventListener("click", isTriangle);