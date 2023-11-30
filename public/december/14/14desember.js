function handleResize() {
    const clickLeft = document.getElementsByClassName("clickLeft");
    const clickRight = document.getElementsByClassName("clickRight");

    if (window.innerWidth < 661) {
        clickLeft[0].style.display = "none";
        clickRight[0].style.display = "none";
    } else {
        clickLeft[0].style.display = "block";
        clickRight[0].style.display = "block";
    }
}

/* READ ME:

- Dette er den beste luken som finnes. Ikke fjern koden. Det er virkelig ikke noe du har lyst til å gjøre.
- Bare tenk på hvor morsomt det er.
- Cheater quizzen kommer bare hvis de prøver å jukse!
- Please don't remove :)

*/




let cheater = false;

const cheatingQuestions = [
    { question: "What is the capital of Suriname?", answer: "Paramaribo" },
    { question: "Which chemical element has the highest melting point?", answer: "Tungsten" },
    { question: "What is the largest desert on Earth by area?", answer: "Antarctica" },
    { question: "In what year was the first email sent?", answer: "1971" },
    { question: "Which country has the most time zones?", answer: "France" },
    { question: "What is the rarest blood type?", answer: "AB-negative" },
    { question: "Which Shakespeare play has the fewest words?", answer: "The Comedy of Errors" },
    { question: "In what year was the first photograph taken?", answer: "1826" },
    { question: "What is the longest river in Asia?", answer: "Yangtze" },
    { question: "How many ribs are in the human body?", answer: "24" },
    { question: "Which island is the largest in the Mediterranean Sea?", answer: "Sicily" },
    { question: "What is the most abundant gas in the Earth's atmosphere?", answer: "Nitrogen" },
    { question: "In what year did the Tunguska event occur?", answer: "1908" },
    { question: "What is the smallest prime number?", answer: "2" },
    { question: "Which planet has the highest average surface temperature?", answer: "Venus" },
    { question: "What is the rarest M&M color?", answer: "Brown" },
    { question: "How many syllables are in the word 'syllabicate'?", answer: "4" },
    { question: "What is the world's largest ocean?", answer: "Pacific" },
    { question: "In what year did the Ottoman Empire end?", answer: "1922" },
    { question: "Which chemical element is named after a famous physicist's daughter?", answer: "Curium" },
    { question: "What is the speed of light in a vacuum?", answer: "299,792 kilometers per second" },
    { question: "How many teeth does an adult human typically have?", answer: "32" },
    { question: "Which planet has the longest day?", answer: "Venus" },
    { question: "In what year did the Berlin Wall fall?", answer: "1989" },
    { question: "What is the world's largest lizard?", answer: "Komodo dragon" },
    { question: "How many keys are on a standard piano?", answer: "88" },
    { question: "Which element is represented by the chemical symbol 'Br'?", answer: "Bromine" },
    { question: "What is the most spoken language in the world by the number of native speakers?", answer: "Mandarin Chinese" },
    { question: "In what year did the first modern Olympic Games take place?", answer: "1896" },
    { question: "What is the largest moon in our solar system?", answer: "Ganymede" }
];

const quizQuestions = [
    { question: "What is the best-selling video game?", answer: "Minecraft"},
    { question: "Which publisher always release good 1st party titles?", answer: "Nintendo"},
    { question: "Who is the *mf* that made this stopid quiz?", answer: "Idk"},
    { question: "Hvor mange studiemuligheter er det på skolen?", answer: "46"},
    { question: "Var dette morsomt?", answer: "Ja"},
    { question: "Så bra?", answer: "Så bra"}
];

function startQuiz(definitelyNotAnnoying = false) {
    if (!definitelyNotAnnoying) {
        alert("Please wait! You need to answer this quiz first!");
    }

    const questions = cheater ? cheatingQuestions : quizQuestions;

    function runQuiz() {
        for (let i = 0; i < questions.length; i++) {
            const userAnswer = showModal(questions[i].question);
            if (userAnswer.toLowerCase() !== questions[i].answer.toLowerCase()) {
                alert("Incorrect answer! You need to start over.");
                runQuiz();
                return;
            }
        }
        alert("Congratulations! You answered all questions correctly!");
    }

    runQuiz();
}

function showModal(question) {
    // Display the overlay
    document.getElementById('overlay').style.display = 'block';
    
    // Display the modal
    document.getElementById('modal').style.display = 'block';
    
    // Show the question and get user input
    const userAnswer = prompt(question);
    
    // Hide the modal and overlay
    document.getElementById('modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    
    return userAnswer === null ? "" : userAnswer;
}


function quizzerSmileyFace() {
    if (window.innerWidth > 800 && window.location.href.indexOf('?') === -1) {
        startQuiz();
    }
}

quizzerSmileyFace();


document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
        // The page is not visible (user switched to another tab or minimized the window)
        console.log('Page is not visible');
        cheater = true;
        quizzerSmileyFace();
    } else {
        // The page is visible again
        console.log('Page is visible');
    }
});


handleResize();
window.addEventListener("resize", handleResize);