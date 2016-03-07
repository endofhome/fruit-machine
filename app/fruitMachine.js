"use strict";

var FruitMachine = function() {
  this.results = ['black', 'white', 'green', 'yellow'];
  this.slots = ['', '', '', ''];
  this.coinBox = 0;
};

FruitMachine.prototype.resultPicker = function() {
  var result = this.results[Math.floor(Math.random()*(this.results.length))];
  return result;
};

FruitMachine.prototype.play = function() {
  var i;
  for (i=0; i<4; i++) {
    this.slots[i] = this.resultPicker();
  }
};

FruitMachine.prototype.jackpot = function() {
  var result = this.coinBox;
  this.coinBox = 0;
  return result;
};

FruitMachine.prototype.checkIfJackpot = function() {
  var result = false, 
      invalid = '', 
      i;

  for (i=1; i<4; i++) {
    if ((this.slots[0] === invalid) || ((this.slots[0] === this.slots[i]) && (this.slots[i] !== invalid))) {
      break;
    }
    result = true;
  };
  return result;
};

module.exports = FruitMachine;