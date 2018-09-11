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

SelectView.prototype.populate = function () {

};

module.exports = SelectView;
