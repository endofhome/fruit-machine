"use strict";

var FruitMachine = function() {
  this.results = ['black', 'white', 'green', 'yellow'];
  this.slots = ['', '', '', ''];
};

FruitMachine.prototype.resultPicker = function (){
  var result = this.results[Math.floor(Math.random()*(this.results.length))];
  return result;
};

module.exports = FruitMachine;