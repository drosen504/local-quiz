'use strict';

const generator = function() {
  return {
    generateQuestionNumber: function() {
      $('#q-num').html(` Question
      ${STORE.currentQuestion + 1} of 5
      `);
    }
  };
}();



