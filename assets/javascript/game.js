var golfQuestions = [{
    question: "In Golf the player that has the best score on the last hole tees off of the following hole first",
    choice: [true, false],
    validAnswer: true
}, {
    question: "In golf GIR stands for 'Green In Repair'",
    choice: [true, false],
    validAnswer: false

}]
$("#question-div").html("<p>" + golfQuestions[0].question + "</p>")

console.log(golfQuestions[0].question)
console.log(golfQuestions[0].validAnswer)




