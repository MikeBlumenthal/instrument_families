const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const DisplayView = require('./views/display_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const selectElement = document.querySelector('select#instrument-families');
  const familyChoices = new SelectView(selectElement);
  familyChoices.bindEvents();

  const displayDiv = document.querySelector('#display-container');
  const familyInfoDisplay = new DisplayView(displayDiv);
  familyInfoDisplay.bindEvents();

  const instrumentData = new InstrumentFamilies();
  instrumentData.bindEvents();

});
