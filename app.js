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

//Event Listeners

//Event Listeners/Handlers
const handleStart = function() {
    $('.intro').on('click', '.js-click-start', event => {
        event.preventDefault();
        store = defaultStore;
        store.currentQuestion = 0;
        render();
}

//Renderer

//HTML Templates

//Etc

//after DOM loads
$(function() {
    render();

    defaultStore();


});