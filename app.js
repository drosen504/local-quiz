'use strict';
/*global*/

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

const defaultStore = function() {
    return {
        currentView: 'start',
        currentQuestion: null,
        userAnswers: [],
        feedback: null
    };
};
let store = defaultStore;
//Event Listeners

//Event Listeners/Handlers
const handleStart = function() {
    $('.intro').on('click', '.js-start-button', event => {
        event.preventDefault();
        console.log('handleStart ran');     
        store.currentQuestion = 0;
        store.currentView = 'question';
        render();
    });
};


//Render-related Functions
// const hideClasses = function(){
//     $('.js-intro').hide();
//     $('.js-question').hide();
//     $('.js-feedback').hide();
//     $('.js-results').hide();
// };

const render = function() {
    // hideClasses();
    console.log('renderer ran!');

    if (defaultStore.currentView === 'start'){
        $('.js-intro').show();
        $('.js-question').hide();
        $('.js-feedback').hide();
        $('.js-results').hide();
    }
    else if (defaultStore.currentView === 'question'){
        $('.js-question').show();
        $('.js-intro').hide();
        $('.js-feedback').hide();
        $('.js-results').hide();
    }
    else if (defaultStore.currentView === 'feedback'){
        $('.js-feedback').show();
        $('.js-intro').hide();
        $('.js-question').hide();
        $('.js-results').hide();
    }
    else if (defaultStore.currentView === 'results'){
        $('.js-results').show();
        $('.js-intro').hide();
        $('.js-question').hide();
        $('.js-feedback').hide();
    }
           
};

//HTML Renderer
function generateQuiz() {
    $('.js-question').html(`<h2 class ="q-num"></h2>
    <form id="quiz-form">
        <p class="question"</p>
            <input id='answer' class="answer-button button" type="submit" value="Select">
        </form>
    
    <p>Current Score</p>
    <p class="current-score"></p>`);
}

function generateQNum() {
    $('.q-num').html(`
    ${defaultStore.currentQuestion + 1}
    `);
}

// const optionTemplate = function(answer) {
//     return `
//       <li class="answer-item">
//         <input type="radio" name="answers" value="${answer}" />
//         <span class="answer-text">${answer}</span>
//       </li>
//     `;
// };

// const feedbackTemplate = function(feedback) {
//     return `
//       <p>${feedback}</p>
//       <button class="continue js-continue">Continue</button>
//     `;
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

//after DOM loads
$(function() {
    render();
    handleStart();
    defaultStore();
    


});


