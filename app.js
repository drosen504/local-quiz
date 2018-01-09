'use strict';

$(function() {
  generator.render();
  $('.intro, .results').on('click', '.js-start-button', handler.handleStart);
  $('.js-quiz-form').on('submit', '#js-option-form', handler.handleSubmission);
  handler.updateQuestion();
});

