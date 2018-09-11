const PubSub = require('../helpers/pub_sub.js');

const DisplayView = function (container) {
  this.container = container;
};

DisplayView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:chosen-family-ready', (event) => {
    const family = event.detail;
    this.display(family);
  })
};

DisplayView.prototype.display = function (familyObject) {
  this.container.innerHTML = '';

  const displayHeader = document.createElement('h2');
  displayHeader.textContent = `${familyObject.name}`;
  this.container.appendChild(displayHeader);

  const displayDescription = document.createElement('p');
  displayDescription.textContent = `${familyObject.description}`;
  this.container.appendChild(displayDescription);

  const displayExamplesHeader = document.createElement('h3');
  displayExamplesHeader.textContent = `Instruments include...`;
  this.container.appendChild(displayExamplesHeader);

  const displayExamples = document.createElement('ul');
  displayExamples.id = 'instrument-list';
  this.container.appendChild(displayExamples);
  const list = document.querySelector('#instrument-list');
  familyObject.instruments.forEach( (instrument) => {
    const entry = document.createElement('li');
    entry.textContent = instrument;
    list.appendChild(entry);
  })

  if (familyObject.video){
    const displayVideo = document.createElement('div');
    displayVideo.innerHTML = familyObject.video;
    this.container.appendChild(displayVideo);
  }
};



module.exports = DisplayView;
