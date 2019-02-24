// create  array with objects containing questions and answers and correct answer 

var questions = [{
        question: '',
        answers: ['', '', '', ''],
        correctAnswer: ''
    },

    {
        question: '',
        answers: ['', '', '', ''],
        correctAnswer: ''
    },

    {
        question: '',
        answers: ['', '', '', ''],
        correctAnswer: ''
    },
    {
        question: '',
        answers: ['', '', '', ''],
        correctAnswer: ''
    },
    {
        question: '',
        answers: ['', '', '', ''],
        correctAnswer: ''
    },
    {
        question: '',
        answers: ['', '', '', ''],
        correctAnswer: ''
    },
    {
        question: '',
        answers: ['', '', '', ''],
        correctAnswer: ''
    },

]


var number = 30;
var intervalId;

//user clicks start button to initiate the game
$("#start").on("click", run);
//create the timer that counts down from 30 seconds 

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#seconds-remaining").html("<h2>" + number + "</h2>");

    if (number === 0) {

        //  ...run the stop function.
        stop();
    }

}

function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
}


run();