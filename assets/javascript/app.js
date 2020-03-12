$(document).ready(function () {
    // variable to set timer to 60
    var countDown = 60;
    //  Variable that will hold our interval ID when we execute the "run" function
    var intervalId;
    // questions, answer choices, and correct answer 
    var questions = [
        {
            question: "What is Jess' last name?",
            choices: ["Deschanel", "Day", "Miller"],
            correctAnswer: "Day",
        },
        {
            question: "In the second episode of season four, Schmidt coached Jess on how to use what dating app?",
            choices: ["Dice", "Bumble", "Swipe"],
            correctAnswer: "Dice",
        },
        {
            question: "In the season 4 episode Julie Berkman is My Sister, the guys try to help Schmidt land an account marketing what household product?",
            choices: ["Paper towels", "Soap", "Sponges"],
            correctAnswer: "Sponges",
        },
        {
            question: "What musical instrument does Jess play?",
            choices: ["Handbells", "Ukulele", "Harmonica"],
            correctAnswer: "Handbells",
        },
        {
            question: "In the series pilot, Jess moved in with three men. Which roommate left after the pilot and was replaced by Winston?",
            choices: ["Jerry", "CeCe", "Coach"],
            correctAnswer: "Coach",
        },
        {
            question: "Where does Jess find the guy's roommate ad?",
            choices: ["Facebook Marketplace", "Craigslist", "Newspaper"],
            correctAnswer: "Craigslist",
        },
        {
            question: "In what state did Jess grow up?",
            choices: ["California", "Orgeon", "Kansas"],
            correctAnswer: "Orgeon",
        },
        {
            question: "Who played secretary when a landline phone was installed in the loft?",
            choices: ["Winston", "Schmidt", "Nick"],
            correctAnswer: "Nick",
        },
        {
            question: " In season two, Jess dated a doctor played by David Walton. What was his name?",
            choices: ["Sam", "Robby", "Spencer"],
            correctAnswer: "Sam",
        },
        {
            question: "What does Jess do for a living?",
            choices: ["Meteorologist", "Teacher", "Nurse"],
            correctAnswer: "Teacher",
        },
        {
            question: "What is Schmidt deathly afraid of?",
            choices: ["Mice", "Dogs", "Spiders"],
            correctAnswer: "Spiders",
        },
        {
            question: "What is the name of Winston's cat?",
            choices: ["Furguson", "Furmeister", "Furgal"],
            correctAnswer: "Furguson",
        },
        {
            question: "Who did Jess break up with before moving in at the loft?",
            choices: ["Sam", "Spencer", "Robby"],
            correctAnswer: "Spencer",
        },
        {
            question: "What is Winston's surname?",
            choices: ["Pope", "Reverand", "Bishop"],
            correctAnswer: "Bishop",
        },
        {
            question: "What did Nick study at college?",
            choices: ["Law", "Math", "History"],
            correctAnswer: "Law",
        },
    ]



    // function that brings about the start button
    function renderStart() {
        $("#start").append("<button class=button>" + "Start" + "</button>");
    }
    //function that brings about the done button
    function renderDoneBtn() {
        $("#doneBtn").append("<button class=button>" + "Done" + "</button>");
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
        $("#timer").html("<h4>" + "Time Remaining: " + countDown + "</h4>");

        //  if countdown hits zero...
        if (countDown === 0) {
            //  then, run the stop function.
            stop();
            // check the answers
            checkAnswers();
            // hide done button
            $("#doneBtn").hide();
        }
    }
    // function to check if answers are correct, incorrect, or unanswered
    function checkAnswers() {
        // stop();

        // variables to hold correct, incorrect, and unaswered questions
        var correctAnswers = 0;
        var unanswered = 0;
        var incorrectAnswers = 0;

        // loop through questions array 
        for (var i = 0; i < questions.length; i++) {

            // use :checked and val() method to check answer selected and set to variable checked
            var checked = $("input[name =" + i + "]:checked").val();

            // if user answer is equal to correct answer in questions array
            if (checked === questions[i].correctAnswer) {

                // then increase correctAnswers variable
                correctAnswers++;

                // then check if checked is "undefined"
            } else if (typeof checked == "undefined") {
                // then increase unanswered variable
                unanswered++;

                // last, check all else 
            } else {

                // and increase incorrectAnswers variable
                incorrectAnswers++;
            }
            // console.log variables to show what each variable is returning
            console.log("correctanswer: " + questions[i].correctAnswer);
            console.log("correctA " + correctAnswers);
            console.log("incorrectA " + incorrectAnswers);
            console.log("unansw " + unanswered);
            console.log("index: " + i);
            console.log("checked: " + checked);
            $("#myForm").hide();
        }
        // create div variable to grab the start tag, and replace with checkAnswers results
        var div = $("#timer").html(`<h3>All Done!</h3>`);
        div.append("<h5>" + "Correct Answers: " + correctAnswers + "</h5>");
        div.append("<h5>" + "Incorrect Answers: " + incorrectAnswers + "</h5>");
        div.append("<h5>" + "Unanswered: " + unanswered + "</h5>");
    }

    // function to stop the timer
    function stop() {
        // clears the intervalId
        clearInterval(intervalId);
    }
    // This function handles events where the start button is clicked
    $("#start").on("click", function (event) {
        $("#start").hide();
        // Once the button is clicked, start timer
        runClock();
        // call the decrement function to start the timer countdown and display
        decrement();
        // variable to hold questions and options rendered
        myQuestion = "";

        // function to loop through questions array and display to screen
        questions.forEach(function (obj, idx) {
            // grab questions
            myQuestion = myQuestion + "<p class='quest'>" + obj.question + "</p>";
            // grab choices
            obj.choices.forEach(function (choice) {
                myQuestion = myQuestion + "<input type='radio' class='radio-inline' name = " + idx + " value= " + choice + ">" + " " + choice + "<br />";
            })
            
        })
        // appends myQuestion variable to screen
        $("#myForm").append(myQuestion);
        //calling renderDontBtn
        renderDoneBtn();
    });
    // adds event listener for done button
    $("#doneBtn").on("click", function (event) {
        stop();
        checkAnswers();
        $("#doneBtn").hide();

    });

}); 


