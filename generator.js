'use strict';

const generator = function() {
  return {
    generateQuestionNumber: function() {
      $('#q-num').html(` Question
      ${STORE.currentQuestion + 1} of 5
      `);
    },
    generateQuestion: function() {
      $('.question').html(` 
      ${QUESTIONS[STORE.currentQuestion].text}<br>
      `);
    },
    generateAnswers: function() {
      $('.js-options').html(`
    <form id="js-option-form">
    <fieldset name="answer-choices">
      <input type="radio" id="choice1" name="answer" value="${QUESTIONS[STORE.currentQuestion].options[0]}" required></input>
      <label for="choice1">${QUESTIONS[STORE.currentQuestion].options[0]}</label><br>
      <input type="radio" id="choice2" name="answer" value="${QUESTIONS[STORE.currentQuestion].options[1]}" required></input>
      <label for="choice2">${QUESTIONS[STORE.currentQuestion].options[1]}</label><br>
      <input type="radio" id="choice3" name="answer" value="${QUESTIONS[STORE.currentQuestion].options[2]}" required></input>
      <label for="choice3">${QUESTIONS[STORE.currentQuestion].options[2]}</label><br>
      <input type="radio" id="choice4" name="answer" value="${QUESTIONS[STORE.currentQuestion].options[3]}" required></input>
      <label for="choice4">${QUESTIONS[STORE.currentQuestion].options[3]}</label>
     </fieldset>
        <br>
    <input id="submit-button" type="submit" name="Submit" role="button" value="Submit!"></input>
      
    </form>`);
    },
    generateFeedback: function() {
      $('.feedback').html(`
      <p>${STORE.feedback}</p>
      <button class="next-question" role="button">Next!</button>`);
    },
    generateScore: function() {
      $('#correct-tally').html(`
        <p>Number correct: ${STORE.userScore}</p>`);
    },
    generateResults: function() {
      $('.js-results').html(`
        <h2>You got ${STORE.userScore} out of 5 right!</h2>
        <p>Try again?</p>
        <button class="start js-start-button" role="button">Yes, Try Again!</button>
        `);
    },
    render: function() {
      console.log('HTML selectors shown/hidden');
    
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
               
    },
    renderQuizHtml: function() {
      console.log('renderQuizHtml ran');
      this.generateQuestionNumber();
      this.generateQuestion();
      this.generateAnswers();
      this.generateScore();
    }

  };
}();

