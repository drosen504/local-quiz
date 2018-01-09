'use strict';
const handler = function() {
  return { 
    handleStart: function() {
      console.log('handleStart ran');     
      STORE.currentQuestion = 0;
      STORE.currentView = 'question';
      STORE.userScore = 0;
      console.log(`after handleStart, we're on question ${STORE.currentQuestion}`);
      generator.renderQuizHtml();
      generator.render();
    },
        
    handleSubmission: function() {
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
      generator.render();
    },
        
    updateQuestion: function() {
      $('.js-feedback').on('click', '.next-question', function() {
        console.log('Next Question Clicked');
        if (STORE.currentQuestion < QUESTIONS.length - 1) {
          STORE.currentQuestion++;
          STORE.currentView = 'question';
          generator.render();
          generator.generateQuestionNumber();
          generator.generateQuestion();
          generator.generateAnswers();
          console.log(`after updateQuestion, we're on question ${STORE.currentQuestion}`);
        } else {
          STORE.currentView = 'results';
          generator.render();
          generator.generateResults();
        }
      });
    }
  };
}();
