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

};



module.exports = DisplayView;
