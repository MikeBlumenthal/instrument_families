const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function() {
  this.instrumentFamilies = [
    {
      name: 'Brass',
      description: 'A brass instrument is a musical instrument that produces sound by sympathetic vibration of air in a tubular resonator in sympathy with the vibration of the player\'s lips',
      instruments: ['trumpet', 'trombone', 'horn', 'tuba', 'bugle'],
      video: '<iframe width="1" height="1" src="https://www.youtube-nocookie.com/embed/fKFbnhcNnjE?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0&amp;start=3" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    },
    {
      name: 'Strings',
      description: 'String instruments, stringed instruments, or chordophones are musical instruments that produce sound from vibrating strings when the performer plays or sounds the strings in some manner.',
      instruments: ['violin', 'double bass', 'guitar', 'sitar', 'hurdy-gurdy']
    },
    {
      name: 'Wind',
      description: 'A wind instrument is a musical instrument that contains some type of resonator (usually a tube), in which a column of air is set into vibration by the player blowing into (or over) a mouthpiece set at or near the end of the resonator.',
      instruments: ['flute', 'clarinet', 'bassoon', 'bagpipes', 'oboe']
    },
    {
      name: 'Percussion',
      description: 'A percussion instrument is a musical instrument that is sounded by being struck or scraped by a beater (including attached or enclosed beaters or rattles); struck, scraped or rubbed by hand; or struck against another similar instrument.',
      instruments: ['timpani', 'snare drum', 'bass drum', 'cymbals', 'triangle', 'tambourine']
    },
    {
      name: 'Keyboard',
      description: 'A keyboard instrument is a musical instrument played using a keyboard, a row of levers which are pressed by the fingers.',
      instruments: ['piano', 'organ', 'electronic keyboard', 'synthesizer']
    }
  ];
};

InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish('InstrumentFamilies:all-info-ready', this.instrumentFamilies);
  PubSub.subscribe('SelectView:choice', (event) => {
    const chosenIndex = event.detail;
    this.publishData(chosenIndex);
  })
};

InstrumentFamilies.prototype.publishData = function (index) {
  const chosenFamily = this.instrumentFamilies[index];
  PubSub.publish('InstrumentFamilies:chosen-family-ready', chosenFamily);
};

module.exports = InstrumentFamilies;
