var golfQuestions = [{
    question: "In Golf the player that has the best score on the last hole tees off of the following hole first",
    choice: [true, false],
    validAnswer: "true"
}, {
    question: "In golf GIR stands for 'Green In Repair'",
    choice: [true, false],
    validAnswer: "false"

}, {
    question: "One shot under par is a birdie",
    choice: [Boolean],
    validAnswer: "true"
}, {
    question: "A sand trap is a hazard",
    choice: [Boolean],
    validAnswer: "true"
}, {
    question: "A provisional is a 3 stroke penalty",
    choice: [Boolean],
    validAnswer: "false"
}]
var i;
for(i=0; i<golfQuestions.length; i++){
   console.log(golfQuestions[i].validAnswer);
}
var userPick = false;
var losses = 0;
var wins = 0;
var i;
$("button").click(function() {
userPick = $(this).attr("id");
console.log(userPick)
golfQuestions[i].validAnswer;

if(userPick !== golfQuestions[i].validAnswer) {

    losses++
    console.log("losses " + losses)
}
else if(userPick == golfQuestions[i].validAnswer) {
    wins++;
    console.log("wins: " + wins);
}
})

$("#question1").html("<p>" + golfQuestions[0].question + "</p>")
$("#question2").html("<p>" + golfQuestions[1].question + "</p>")
$("#question3").html("<p>" + golfQuestions[2].question + "</p>")
$("#question4").html("<p>" + golfQuestions[3].question + "</p>")
$("#question5").html("<p>" + golfQuestions[4].question + "</p>")
console.log(golfQuestions[0].question)
console.log(golfQuestions[0].validAnswer)


