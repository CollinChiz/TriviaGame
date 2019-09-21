// initial variables
var counter = 20;
var currentQuestion = 0;
var score = 0;
var losses = 0;
var timer;

function nextQuestion() {

    var isQuestionOver = (golfQuestions.length - 1) === (currentQuestion);
    if(isQuestionOver) {
        console.log("Game is over!")
        displayResult();

    } else {
        currentQuestion++;
        loadQuestion();
    }

}


function timeUp() {
    clearInterval(timer)
    losses++;
    nextQuestion();
}

function countDown() {
    counter--;

    $("#time").html("Timer: " + counter);

    if(counter=== 0) {
        timeUp();
    }
}
  
function loadQuestion() {
    counter = 10;
    timer = setInterval(countDown, 1000);

    var question = golfQuestions[currentQuestion].question;
    var choices = golfQuestions[currentQuestion].choice;

    $("#time").html("Timer: " + counter);
    $("#game").html("<h4>" + question + "</h4>" + loadChoices(choices));
   

function loadChoices(choices) {
    var result = "";

    for(i=0; i<choices.length; i++) {
        result += `<p class= "choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }
    return result;
}}

$(document).on("click", ".choice", function() {
    clearInterval(timer);
    var selectedAnswer = $(this).attr("data-answer");
    var correctAnswer = golfQuestions[currentQuestion].validAnswer;
    if(selectedAnswer === correctAnswer) {
        console.log("correct!");
        score++;
        nextQuestion();
    }
    else {
        console.log("incorrect")
        losses++;
        nextQuestion();

    }
    console.log(selectedAnswer)
    
})

function displayResult() {
    var result = `
    <p>You got ${score} question(s) right</p>
    <p>You missed ${losses} question(s) </p>
    <p>Total questions ${golfQuestions.length} question(s)</p>
    <button class="btn btn-primary" id="reset">Reset Game</button
    `;

    $("#game").html(result);
}

$(document).on("click", "#reset", function() {
 counter = 10;
 currentQuestion = 0;
 score = 0;
 losses = 0;
 timer = null;

 loadQuestion();
})
$(document).on("click", "#startGame", function() {
    loadQuestion();
})
// loadQuestion();