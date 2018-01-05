'use strict';

const QUESTIONS = [
  {
    qNum: 'Question 1 of 5',
    text: 'What do you get when you mix salt and water?',
    options: ['Lemonade', 'Taco surprise', 'Salt water', 'Glue'],
    correctAnswer: 'Salt water'
  },
  {
    qNum: 'Question 2 of 5',
    text: 'How are spiders made?',
    options: ['Spider eggs', 'Mixing ants and caterpillars', 'Stepping on M&Ms', 'Asking nicely'],
    correctAnswer: 'Spider eggs'
  },
  {
    qNum: 'Question 3 of 5',      
    text: 'What is my middle name?',
    options: ['Alexander', 'Lewis', 'No clue', 'Richard'],
    correctAnswer: 'No clue'
  },
  {
    qNum: 'Question 4 of 5',
    text: 'What happens during a solar eclipse?',
    options: ['Water vapor from the ocean extinguishes the sun', 'The moon blocks our view of the sun', 'There is no such thing as a solar eclipse', 'The moon gets jealous and does something about it'],
    correctAnswer: 'The moon blocks our view of the sun'
  },
  {
    qNum: 'Question 5 of 5',
    text: 'Where do fish live?',
    options: ['The sky', 'In water', 'In volcanoes', 'In a tree',],
    correctAnswer: 'In water'
  }
];

const STORE = {
  currentView: 'start',
  currentQuestion: null,
  userAnswer: null,
  feedback: null,
  userScore: 0,
};

//Event Listeners/Handlers
const handleStart = function() {
  // $('.intro').on('click', '.js-start-button', event => {
  console.log('handleStart ran');     
  STORE.currentQuestion = 0;
  STORE.currentView = 'question';
  STORE.userScore = 0;
  renderQuiz();
  render();
    
};

const handleSubmission = function() {
  $('.js-quiz-form').on('submit', '#js-option-form', event => {
    event.preventDefault();
    const selection = $('input:checked').val();
    console.log(`user chose ${selection}`);
    STORE.userAnswer = selection;

    if (STORE.userAnswer === QUESTIONS[STORE.currentQuestion].correctAnswer) {
      STORE.feedback = 'That is correct!';
      STORE.userScore++;
    }
    else {
      STORE.feedback = `Sorry. The correct answer was: ${QUESTIONS[STORE.currentQuestion].correctAnswer}`;
    }
    STORE.currentView = 'feedback';
    generator.generateFeedback();
    generator.generateScore();
    render();
  });
};

const updateQuestion = function() {
  $('.js-feedback').on('click', '.next-question', function() {
    console.log('Next Question Clicked');
    if (STORE.currentQuestion < QUESTIONS.length - 1) {
      STORE.currentQuestion++;
      STORE.currentView = 'question';
      render();
      generator.generateQuestionNumber();
      generator.generateQuestion();
      generator.generateAnswers();
    } else {
      STORE.currentView = 'results';
      render();
      generateResults();
    }
  });
};
const startOver = function() {
  $('.js-results').on('click', function() {
    STORE.userScore = 0;
    handleStart();
  });
};
    

//Render-related Functions

const render = function() {
  // hideClasses();
  console.log('renderer ran!');

  if (STORE.currentView === 'start'){
    $('.js-intro').show();
    $('.js-quiz-form').hide();
    $('.js-feedback').hide();
    $('.js-results').hide();
  }
  else if (STORE.currentView === 'question'){
    $('.js-quiz-form').show();
    $('.js-intro').hide();
    $('.js-feedback').hide();
    $('.js-results').hide();
    $('.js-options').show();
  }
  else if (STORE.currentView === 'feedback'){
    $('.js-feedback').show();
    $('.js-intro').hide();
    $('.js-quiz-form').show();
    $('.js-results').hide();
    $('.js-options').hide();
  }
  else if (STORE.currentView === 'results'){
    $('.js-results').show();
    $('.js-intro').hide();
    $('.js-quiz-form').hide();
    $('.js-feedback').hide();
  }
           
};





const generateResults = function() {
  $('.js-results').html(`
    <h2>You got ${STORE.userScore} out of 5 right!</h2>
    <p>Try again?</p>
    <button class="start js-start-button">Yes, Try Again!</button>
    `);
};


function renderQuiz() {
  console.log('renderQuiz ran');
  generator.generateQuestionNumber();
  generator.generateQuestion();
  generator.generateAnswers();
  updateQuestion();
  startOver();
    
}
//after DOM loads
$(function() {
  render();
  $('.intro').on('click', '.js-start-button', handleStart);
  handleSubmission();
});


//Listeners:
//Click on start button
//Click 
//Click on next button
//Click on start over button (same as start)
// $('.intro').on('click', '.js-start-button', handleStart);
// $('.js-quiz-form').on('submit', '#js-option-form', handleSubmission);
// $('.js-feedback').on('click', '.next-question', updateQuestion);
// $('.js-results').on('click', handleStart);




