var FruitMachine = require('../app/fruitMachine.js');

describe('fruit machine', function() {
  var fruitMachine;
  var resultsMock = ['black', 'white', 'green', 'yellow'];
  var slotsMock = ['', '', '', ''];

  beforeEach(function() {
    fruitMachine = new FruitMachine();
  });


  describe('initialization', function() {

    it('stores possible results in an array', function() {
      expect(fruitMachine.results).toEqual(resultsMock);
    });

    it('has four empty slots', function() {
      expect(fruitMachine.slots).toEqual(slotsMock);
    });

    it('contains money', function() {
      expect(fruitMachine.coinBox).toEqual(0);
    });
  });


  describe('resultPicker', function() {

    it('randomly selects black sometimes', function() {
      spyOn(Math,'random').andReturn(0.24);
      expect(fruitMachine.resultPicker()).toEqual('black');
    });

    it('randomly selects white sometimes', function() {
      spyOn(Math,'random').andReturn(0.49);
      expect(fruitMachine.resultPicker()).toEqual('white');
    });

    it('randomly selects green sometimes', function() {
      spyOn(Math,'random').andReturn(0.74);
      expect(fruitMachine.resultPicker()).toEqual('green');
    });

    it('randomly selects yellow sometimes', function() {
      spyOn(Math,'random').andReturn(0.99);
      expect(fruitMachine.resultPicker()).toEqual('yellow');
    });
  });

  describe('play', function() {

    it('play method exists', function() {
      expect(fruitMachine.play).toBeDefined();
    });

    it('fills the four slots with results', function() {
      spyOn(Math,'random').andReturn(0.24);
      fruitMachine.play();
      expect(fruitMachine.slots).toEqual(['black', 'black', 'black', 'black']);
    });
  });

  describe('jackpot', function() {

    beforeEach(function() {
      fruitMachine.coinBox = 10;
    });

    it('jackpot method exists', function() {
      expect(fruitMachine.jackpot).toBeDefined();
    });

    it('contents of coin box are returned', function() {
      expect(fruitMachine.jackpot()).toEqual(10);
    });

    it('coin box is emptied', function() {
      fruitMachine.jackpot();
      expect(fruitMachine.coinBox).toEqual(0);
    });
  });

  describe('check if jackpot', function(){

    it('checkIfJackpot method exists', function() {
      expect(fruitMachine.checkIfJackpot).toBeDefined();
    });

    it('returns false if slots are empty', function() {
      expect(fruitMachine.checkIfJackpot()).toEqual(false);
    });

    it ('will return true if slots are all same colour', function() {
      spyOn(Math,'random').andReturn(0.24);
      fruitMachine.play();
      expect(fruitMachine.checkIfJackpot()).toEqual(true);
    });

    it ('will return false if diffrent colours are picked', function() {
      fruitMachine.slots = resultsMock;
      expect(fruitMachine.checkIfJackpot()).toEqual(false);
    });
  });

});