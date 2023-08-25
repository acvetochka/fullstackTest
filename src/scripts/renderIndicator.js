const pagesElem = document.querySelector('#pages');

export const renderIndicator = (module, currentStep) => {
  pagesElem.innerHTML = `${currentStep + 1} / ${module.length}`;
};
