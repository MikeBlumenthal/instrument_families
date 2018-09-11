const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:all-info-ready', (event) => {
    const allFamilies = event.detail;
    this.populate(allFamilies);
  })
};

SelectView.prototype.populate = function (dataArray) {
  dataArray.forEach( ( family, index ) => {
    const option = document.createElement('option');
    option.textContent = family.name;
    option.value = index;
    this.element.appendChild(option);
    })
};

module.exports = SelectView;
