"use strict";

var Player = function() {
  this.wallet = 0;
};

Player.prototype.addFunds = function(money) {
  this.wallet += money;
};

module.exports = Player;
