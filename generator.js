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
        <input type="radio" id="choice1" name="answer" value="${QUESTIONS[STORE.currentQuestion].options[0]}" required></input>
        <label for="choice1">${QUESTIONS[STORE.currentQuestion].options[0]}</label><br>
        <input type="radio" id="choice2" name="answer" value="${QUESTIONS[STORE.currentQuestion].options[1]}"></input>
        <label for="choice1">${QUESTIONS[STORE.currentQuestion].options[1]}</label><br>
        <input type="radio" id="choice3" name="answer" value="${QUESTIONS[STORE.currentQuestion].options[2]}"></input>
        <label for="choice1">${QUESTIONS[STORE.currentQuestion].options[2]}</label><br>
        <input type="radio" id="choice4" name="answer" value="${QUESTIONS[STORE.currentQuestion].options[3]}"></input>
        <label for="choice1">${QUESTIONS[STORE.currentQuestion].options[3]}</label><br>
        <br>
        <input type="submit" name="Submit" value="Submit!"></input>
    </form>`);
    },
    generateFeedback: function() {
      $('.feedback').html(`
      <p>${STORE.feedback}</p>
      <button class="next-question">Next!</button>`);
    },
    generateScore: function() {
      $('.correct-tally').html(`
        <p>Number correct: ${STORE.userScore}</p>`);
    },
    generateResults: function() {
      $('.js-results').html(`
        <h2>You got ${STORE.userScore} out of 5 right!</h2>
        <p>Try again?</p>
        <button class="start js-start-button">Yes, Try Again!</button>
        `);
    },
  };
}();

