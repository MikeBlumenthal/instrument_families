const PubSub = require('../helpers/pub_sub.js');

const DisplayView = function (container) {
  this.container = container;
};

DisplayView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:chosen-family-ready', (event) => {
    const family = event.detail;
    console.log(family);
  })
};


module.exports = DisplayView;
