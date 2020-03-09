$(document).ready(function () {
    // function to start my game
    // function to render my start button
    // once the start button is clicked, start timer and render questions
    // make each answer option clickable, but only one per question
    // score function that counts up correct and incorrect answers

    // variable to hold number of correct answers
    var correctAnswers = 0;
    // variable to hold number of incorrect answers
    var incorrectAnswers = 0;
    // variable to hold unanswered questions
    var unanswered = 0;
    // variable to set timer to 30
    var countDown = 30;
    //  Variable that will hold our interval ID when we execute the "run" function
    var intervalId;


    // function that brings about the start button
    function renderStart() {
        $("#start").append("<button>" + "Start" + "</button>");
    }

    // calling renderStart function 
    renderStart();
    

    // function to start the timer 
    function runClock() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    // function that counts the clock down
    function decrement() {
        //  Decrease number by one.
        countDown--;
        //  Show the number in the #timer tag.
        $("#start").html("<h4>" + "Time Remaining: " + countDown + "</h4>");

        //  if countdown hits zero...
        if (countDown === 0) {
            //  then, run the stop function.
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            // **** run function to bring about "All done! and correct/incorrect answers"
            var div = $("#start").html(`<h3>All Done!</h3>`);
            div.append("<h5>" + "Correct Answers: " + correctAnswers + "</h5>");
            div.append("<h5>" + "Incorrect Answers: " + incorrectAnswers + "</h5>");
            div.append("<h5>" + "Unanswered: " + unanswered + "</h5>");
        }
    }

    // function to stop the timer
    function stop() {
        // clears the intervalId
        clearInterval(intervalId);
    }

    // function to render questions to the screen 
    // function renderQuestions() {
        
    // }

    // This function handles events where the start button is clicked
    $("#start").on("click", function (event) {
        // Once the button is clicked, start timer
        runClock();
        // Once the button is clicked, render questions

    });

})