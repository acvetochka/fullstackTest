import htmlTest from '../src/data/html.json';
import js from '../src/data/js.json';
import react from '../src/data/react.json';
import node from '../src/data/node.json';

import { renderQuestions } from './scripts/renderQuestions';

const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav__link');
// const headElem = document.getElementById("head");
const quiz = document.querySelector('#quiz');
const questions = document.querySelector('#questions');
// const buttonsElem = document.getElementById('buttons');

let count = 0;
let totalHTML = 0;
let totalJs = 0;
let totalReact = 0;
let totalNode = 0;

nav.addEventListener('click', e => {
  e.preventDefault();

  navLink.forEach(item => {
    if (item.classList.contains('current')) {
      item.classList.remove('current');
    }
  });
  // navLink.classList.contains('current');
  console.log(e.target.textContent);

  e.target.classList.add('current');
  switch (e.target.textContent) {
    case 'HTML':
      count = 0;
      renderQuestions(htmlTest, 0, count, totalHTML);
      // console.log(totalHTML);
      break;
    case 'JavaScript':
      count = 0;
      renderQuestions(js, 0, count, totalJs);
      break;
    case 'React':
      count = 0;
      renderQuestions(react, 0, count, totalReact);
      break;
    case 'Node':
      count = 0;
      renderQuestions(node, 0, count, totalNode);
      break;
    default:
      break;
  }
});
