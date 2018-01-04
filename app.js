'use strict';


const QUESTIONS = [
    {
        qNum: 'Question 1 of 5',
        text: 'What do you get when you mix salt and water?',
        options: ['Lemonade', 'Taco surprise', 'Salt water', 'Glue'],
        correctAns: 'Salt water'
    },
    {
        qNum: 'Question 2 of 5',
        text: 'How are spiders made?',
        options: ['Spider eggs', 'Mixing ants and caterpillars', 'Stepping on M&Ms', 'Asking nicely'],
        correctAns: 'Spider eggs'
    },
    {
        qNum: 'Question 3 of 5',      
        text: 'What is my middle name?',
        options: ['Alexander', 'Lewis', 'No clue', 'Richard'],
        correctAns: 'No clue'
    },
    {
        qNum: 'Question 4 of 5',
        text: 'What happens during a solar eclipse?',
        options: ['Water vapor from the ocean extinguishes the sun', 'The moon blocks our view of the sun', 'There is no such thing as a solar eclipse', 'The moon gets jealous and does something about it'],
        correctAns: 'The moon blocks our view of the sun'
    },
    {
        qNum: 'Question 5 of 5',
        text: 'Where do fish live?',
        options: ['The sky', 'In water', 'In volcanoes', 'In a tree',],
        correctAns: 'In water'
    }
];

const STORE = {
    currentView: 'start',
    currentQuestion: null,
    userAnswer: null,
    feedback: null,
    userScore: 0
};


//Event Listeners

//Event Listeners/Handlers
const handleStart = function() {
    $('.intro').on('click', '.js-start-button', event => {
        event.preventDefault();
        console.log('handleStart ran');     
        STORE.currentQuestion = 0;
        STORE.currentView = 'question';
        renderQuiz();
        render();
    });
};

const handleSubmission = function() {
    $('.js-quiz-form').on('submit', '#js-option-form', event => {
        event.preventDefault();
        const userAnswer = $('input[name=answer]:checked').val();
        console.log(userAnswer);
        
    });
    
};


//Render-related Functions

const render = function() {
    // hideClasses();
    console.log('renderer ran!');

    if (STORE.currentView === 'start'){
        $('.js-intro').show();
        $('.js-question').hide();
        $('.js-feedback').hide();
        $('.js-results').hide();
    }
    else if (STORE.currentView === 'question'){
        $('.js-question').show();
        $('.js-intro').hide();
        $('.js-feedback').hide();
        $('.js-results').hide();
    }
    else if (STORE.currentView === 'feedback'){
        $('.js-feedback').show();
        $('.js-intro').hide();
        $('.js-question').hide();
        $('.js-results').hide();
    }
    else if (STORE.currentView === 'results'){
        $('.js-results').show();
        $('.js-intro').hide();
        $('.js-question').hide();
        $('.js-feedback').hide();
    }
           
};

//HTML Renderer
function generateQNum() {
    $('.q-num').html(` Question
    ${STORE.currentQuestion + 1} of 5
    `);
}

function generateQuestion() {
    console.log('generateQuestions firing');
    $('.question').html(`
    ${QUESTIONS[STORE.currentQuestion].text}<br>
    `);
}

function generateAnswers() {
    console.log('generateAnswers fired');
    $('.options').html(`
    <form id="js-option-form">
        <input type="radio" id="choice1" name="answer" value="0" required></input>
        <label for="choice1">${QUESTIONS[STORE.currentQuestion].options[0]}</label><br>
        <input type="radio" id="choice2" name="answer" value="1"></input>
        <label for="choice1">${QUESTIONS[STORE.currentQuestion].options[1]}</label><br>
        <input type="radio" id="choice3" name="answer" value="2"></input>
        <label for="choice1">${QUESTIONS[STORE.currentQuestion].options[2]}</label><br>
        <input type="radio" id="choice4" name="answer" value="3"></input>
        <label for="choice1">${QUESTIONS[STORE.currentQuestion].options[3]}</label><br>

        <input type="submit" name="Submit" value="Submit!"></input>
    </form>`);
}


// const optionTemplate = function(answer) {
//     return 
//       <li class="answer-item">
//         <input type="radio" name="answers" value="${answer}" />
//         <span class="answer-text">${answer}</span>
//       </li>
//     ;
// };

// const feedbackTemplate = function(feedback) {
//     return 
//       <p>${feedback}</p>
//       <button class="continue js-continue">Continue</button>
//     ;
// };


//Etc
// function updateQuestion() {
//     if (STORE.currentQuestion < questions.length - 1) {
//         STORE.currentQuestion++;
//         return STORE.currentQuestion;
//     } else {
//         return null;
//     }
// } 


function renderQuiz() {
    console.log('renderQuiz ran');
    generateQNum();
    generateQuestion();
    generateAnswers();
    
}
//after DOM loads
$(function() {
    render();
    handleStart();
    handleSubmission();
});

// $(() => {
//     render();
  
//     $('.js-intro, .js-outro').on('click', '.js-start', handleStart);
//     $('.js-question').on('submit', handleSubmitAnswer);
//     $('.js-question-feedback').on('click', '.js-continue', handleNextQuestion);
// });
  

