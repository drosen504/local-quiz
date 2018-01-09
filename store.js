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