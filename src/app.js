// app.js
'use strict';

const defaultEvents = [
  {
    name: 'TIFF',
    description: 'Toronto International Fil Festival',
    date: '2015-09-10'
  },
  {
    name: 'The Martian Premiere',
    description: 'The Martian cames to theatres.',
    date: '2015-10-02'
  },
  {
    name: 'SXSW',
    description: 'Music, film and interactive festival in Austin, TX.',
    date: '2016-03-11'
  }
];

new Vue({

  el: '#events',

  data: {
    event: { name: '', description: '', date: '' },
    events: [] // Arrays will be wrapped by Vue.
  },

  ready() {
    this.events = defaultEvents;
  }
});
