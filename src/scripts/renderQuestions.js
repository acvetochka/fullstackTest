import { renderIndicator } from './renderIndicator';

const quiz = document.querySelector('#quiz');
const questions = document.querySelector('#questions');
const btnNext = document.querySelector('.btn-next');
const btnRestart = document.querySelector('.btn-restart');
const counter = document.querySelectorAll('.nav__count');

let correctAnswers = 0;

export const renderQuestions = (module, idx, count, moduleCount) => {
  btnNext.classList.remove('btn_hidden');
  btnRestart.classList.add('btn_hidden');
  const { answers, question, code } = module[idx];
  //   console.log(counter);
  console.log(count);
  //   console.log(`TotalCount: ${count}`);
  //   console.log(moduleCount);
  //   console.log(`ModuleCount: ${moduleCount}`);

  const renderAnswers = () =>
    answers
      .map(
        answer => `
            <li class="quiz__answer">
                <button class="button">${answer.value}</button>
            </li>
            `
      )
      .join('');

  questions.innerHTML = `
    <div class="quiz-questions__item">
        <div class="quiz-questions__title" id="head">${question}<br/><span class="code">${
    code || ''
  }</span></div>
              <ul class="quiz-questions__answerList" id="questions">
            ${renderAnswers()}
        </ul>
    </div>
                `;

  const renderCount = () => {
    counter.forEach(item => {
      if (item.previousElementSibling.classList.contains('current')) {
        item.innerHTML = `${count}/${module.length}`;
      }
    });
    // counter.innerHTML = `${correctAnswers}/${module.length}`;
  };

  renderIndicator(module, idx);

  const handleAnswerClick = e => {
    if (e.target.classList.contains('btn-next')) {
      goNext(module, idx);
    }

    if (e.target.classList.contains('button')) {
      for (const answer of answers) {
        if ((e.target.textContent === answer.value) & answer.correct) {
          //   console.log(answer.value);
          e.target.classList.add('button_correct');
          count += 1;
          correctAnswers += 1;
          renderCount();
        } else {
          e.target.classList.add('button_wrong');
        }
      }
      goNext(module, idx);
    }
  };

  quiz.addEventListener('click', handleAnswerClick);

  const goNext = () => {
    idx += 1;
    quiz.removeEventListener('click', handleAnswerClick);
    // console.log(idx);
    setTimeout(() => {
      if (idx === module.length) {
        questions.innerHTML = `<p>Твій результат: ${count}/${module.length}</p>
            <p>${Math.round((count / module.length) * 100)} %</p>`;
        btnNext.classList.add('btn_hidden');
        btnRestart.classList.remove('btn_hidden');
        moduleCount = correctAnswers;
      } else {
        renderQuestions(module, idx, count, moduleCount);
      }
    }, 1000);
  };
};
