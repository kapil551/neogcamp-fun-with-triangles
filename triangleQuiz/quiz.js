console.log("hello from JavaScript");

// get the quiz form 
const quizForm = document.querySelector(".quiz-form");
// console.log(quizForm);

// get the submit answer button
const submitAnswerButton = document.querySelector("#submit-answers-btn");
// console.log(submitAnswerButton);

// get the output div
const outputMessage = document.querySelector("#output");
// console.log(outputMessage);


//Now, create an array of answers for each question.
// This array is used to compare the correct answer with the user checked answer.
// This array holds the correct answers for each question
const correctAnswers = ["obtuse triangle", "right triangle", "perimeter", "hypotenuse"];

// calculate score of quiz ==> get the selected answers from the form
function calculateScore() {

    let score = 0;
    let index = 0;

    // WHat is formData?
    // https://developer.mozilla.org/en-US/docs/Web/API/FormData

    const fromResults = new FormData(quizForm);
    console.log(fromResults);


    // for.. of in javaScript:
    // for(let ele of arr) ==> here it is the value itself and not the index
    // In for.. of ==> we are iterating over the actual values and not the index.

    // FormData Method ==> FormData.enteries()
    // for(let entry of fromResults.entries()) {
    //     console.log(entry); //objects==> key-value pairs 
    // }

    //FromDate Method ==> FormDate.values()
    for(let value of fromResults.values()) {
        
        // only returns the value
        // console.log(value); 

        // now compare the answer choosen with the correct answer

        if(value === correctAnswers[index]) {
            score = score + 1;
        }

        index = index + 1;


    }

    // console.log("score: ", score);

    outputMessage.innerText = `Your Score is ${score}`;


}

// add click event listener to the submit button
submitAnswerButton.addEventListener("click", calculateScore);
