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
      spyOn(Math,'random').and.returnValue(0.24);
      expect(fruitMachine.resultPicker()).toEqual('black');
    });

    it('randomly selects white sometimes', function() {
      spyOn(Math,'random').and.returnValue(0.49);
      expect(fruitMachine.resultPicker()).toEqual('white');
    });

    it('randomly selects green sometimes', function() {
      spyOn(Math,'random').and.returnValue(0.74);
      expect(fruitMachine.resultPicker()).toEqual('green');
    });

    it('randomly selects yellow sometimes', function() {
      spyOn(Math,'random').and.returnValue(0.99);
      expect(fruitMachine.resultPicker()).toEqual('yellow');
    });
  });

  describe('play', function() {

    it('play method exists', function() {
      expect(fruitMachine.play).toBeDefined();
    });

    it('fills the four slots with results', function() {
      spyOn(Math,'random').and.returnValue(0.24);
      fruitMachine.play();
      expect(fruitMachine.slots).toEqual(['black', 'black', 'black', 'black']);
    });

    it('returns the contents of the coin box if jackpot', function() {
      fruitMachine.coinBox = 10;
      spyOn(Math,'random').and.returnValue(0.24);
      expect(fruitMachine.play()).toEqual(10);
    });

    it('returns nothing if not jackpot', function() {
      spyOn(Math,'random').and.returnValues(0.24, 0.49, 0.74, 0.99);
      expect(fruitMachine.play()).toEqual(undefined);
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

    it('isJackpot method exists', function() {
      expect(fruitMachine.isJackpot).toBeDefined();
    });

    it('returns false if slots are empty', function() {
      expect(fruitMachine.isJackpot()).toEqual(false);
    });

    it ('will return true if slots are all same colour', function() {
      spyOn(Math,'random').and.returnValue(0.24);
      fruitMachine.play();
      expect(fruitMachine.isJackpot()).toEqual(true);
    });

    it ('will return false if two matching colours and then two other colours are picked', function() {
      spyOn(Math,'random').and.returnValues(0.24, 0.24, 0.74, 0.99);
      fruitMachine.play();
      expect(fruitMachine.isJackpot()).toEqual(false);
    });

    it ('will return false if three matching colours and then one other colour are picked', function() {
      spyOn(Math,'random').and.returnValues(0.24, 0.24, 0.24, 0.99);
      fruitMachine.play();
      expect(fruitMachine.isJackpot()).toEqual(false);
    });

    it ('will return false if one colour and then three matching colours are picked', function() {
      spyOn(Math,'random').and.returnValues(0.24, 0.99, 0.99, 0.99);
      fruitMachine.play();
      expect(fruitMachine.isJackpot()).toEqual(false);
    });

    it ('will return false if different colours are picked', function() {
      spyOn(Math,'random').and.returnValues(0.24, 0.49, 0.74, 0.99); 
      fruitMachine.play();
      expect(fruitMachine.isJackpot()).toEqual(false);
    });
  });

});