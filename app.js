var questions = [
    {
        question: 'What is the baby of a Moth known as?',
        choices: ['baby', 'infant', 'kit', 'larva'],
        correctAnswer: 3
    },
    {
        question: 'What is the adult of a kid called?',
        choices: ['calf', 'doe', 'goat', 'chick'],
        correctAnswer: 2
    },
    {
        question: 'What is the young of buffalo called?',
        choices: ['calf', 'baby', 'pup', 'cow'],
        correctAnswer: 0
    },
    {
        question: 'What is a baby alligator called?',
        choices: ['baby', 'gator', 'hatchling', 'calf'],
        correctAnswer: 1
    },
    {
        question: 'What is a baby Goose called?',
        choices: ['gooser', 'gosling', 'gup', 'pup'],
        correctAnswer: 1
    }
];

correctAnswers = 0;
currentQuestion = 0;
var quizover = false;

window.addEventListener('DOMContentLoaded', function(e) {
    showQuestion();
var quizMessage = document.querySelector('.quizMessage')
quizMessage.style.display = "none";


const nextBtn = document.querySelector('.nextButton');
nextBtn.addEventListener('click', function(){
    if(!quizover){
        var RadiosBtnChecked = document.querySelector('input[type=radio]:checked');
        if(RadiosBtnChecked === null){
            quizMessage.innerText = "please select an answer";
            quizMessage.style.display = "block";
            // return false;
        }else{
            console.log(RadiosBtnChecked.value)
            quizMessage.style.display = "none";
        if(parseInt(RadiosBtnChecked.value) === questions[currentQuestion].correctAnswer){
            correctAnswers++;
            // return true;
        }
        currentQuestion++ ;

        if(currentQuestion < questions.length){
            showQuestion();
        }   
        else{
               showScore()
               nextBtn.innerText = "play again"
               quizover = true;
        }
    }
}else {
        quizOver = false;
        document.querySelector('.nextButton').innerText = 'Next Question';
        resetQuiz();
        showQuestion();
        hideScore();
    }

});

});
function showQuestion() {
        
    
var choicesCont = document.querySelector('.quizContainer >.choiceList')
    var questionCont = document.querySelector('.quizContainer >.question')
console.log(choicesCont)
    var currentQ = questions[currentQuestion].question;
    var numChoices = questions[currentQuestion].choices.length;

    questionCont.innerText = currentQ
    choicesCont.innerHTML = "";

    var choice;
    for(i = 0; i < numChoices; i++){
       choice = questions[currentQuestion].choices[i];
       var li = document.createElement('li');
       li.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>'
       choicesCont.appendChild(li)
    //    choicesCont.style.display = 'block'
    }

};
function showScore(){
    document.querySelector('.result').innerText = "you scored " + correctAnswers+ " out of " + questions.length;
    
    document.querySelector('.result').style.display = "block"
};
function hideScore(){
    
    document.querySelector('.result').innerText = ""
};
function resetQuiz(){
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

// question"></div>
//     <ul class="choiceList"></ul>
//     <div class="quizMessage"></div>
//     <div class="result"></div>
//     <div class="nextButton">Next Question</div>
//     <br></br>











