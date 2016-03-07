var Player = require('../app/player.js');

describe('player', function() {

  beforeEach(function() {
    player = new Player();
  });

  describe('initialization', function() {

    it('player has a wallet', function() {
      expect(player.wallet).toBeDefined();
    });
  });

  describe('adding funds to wallet', function() {
    
    it('addFunds method is defined', function() {
      expect(player.addFunds).toBeDefined();
    });
  });
});