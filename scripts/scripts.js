//Calculate quiz score and display a result to the user

var quizScore = 0;

function GetScore() {
    var answer1 = $('input[name=question1]:checked').val();
    var answer2 = $('input[name=question2]:checked').val();
    var answer3 = $('input[name=question3]:checked').val();
    var answer4 = $('input[name=question4]:checked').val();
    var answer5 = $('input[name=question5]:checked').val();
    var answer6 = $('input[name=question6]:checked').val();
    var answer7 = $('input[name=question7]:checked').val();
    var answer8 = $('input[name=question8]:checked').val();
    var answer9 = $('input[name=question9]:checked').val();
    var answer10 = $('input[name=question10]:checked').val();

    if (answer1 == null ||
        answer2 == null ||
        answer3 == null ||
        answer4 == null ||
        answer5 == null ||
        answer6 == null ||
        answer7 == null ||
        answer8 == null ||
        answer9 == null ||
        answer10 == null
    ) {
        alert("You did not answer all questions! Please make sure you answered them all.");
    } else {
        $(".quiz-container").hide();
        if (answer1 == "E") {
            quizScore++;
        }
        if (answer2 == "B") {
            quizScore++;
        }
        if (answer3 == "E") {
            quizScore++;
        }
        if (answer4 == "A") {
            quizScore++;
        }
        if (answer5 == "D") {
            quizScore++;
        }
        if (answer6 == "B") {
            quizScore++;
        }
        if (answer7 == "C") {
            quizScore++;
        }
        if (answer8 == "C") {
            quizScore++;
        }
        if (answer9 == "D") {
            quizScore++;
        }
        if (answer10 == "C") {
            quizScore++;
        }
        document.getElementById("score").innerHTML = "Your score is " + quizScore + " out of 10.";
        document.getElementById("answer1data").innerHTML = "For question 1, you answered " +
            answer1 +
            ". The answer was E.";
        document.getElementById("answer2data").innerHTML = "For question 2, you answered " +
            answer2 +
            ". The answer was B.";
        document.getElementById("answer3data").innerHTML = "For question 3, you answered " +
            answer3 +
            ". The answer was E.";
        document.getElementById("answer4data").innerHTML = "For question 4, you answered " +
            answer4 +
            ". The answer was A.";
        document.getElementById("answer5data").innerHTML = "For question 5, you answered " +
            answer5 +
            ". The answer was D.";
        document.getElementById("answer6data").innerHTML = "For question 6, you answered " +
            answer6 +
            ". The answer was B.";
        document.getElementById("answer7data").innerHTML = "For question 7, you answered " +
            answer7 +
            ". The answer was C.";
        document.getElementById("answer8data").innerHTML = "For question 8, you answered " +
            answer8 +
            ". The answer was C.";
        document.getElementById("answer9data").innerHTML = "For question 9, you answered " +
            answer9 +
            ". The answer was D.";
        document.getElementById("answer10data").innerHTML = "For question 10, you answered " +
            answer10 +
            ". The answer was C.";
    }

    
}

