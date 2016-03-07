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

  describe('play', function(){

    it('play method exists', function() {
      expect(fruitMachine.play).toBeDefined();
    });

    it('fills the four slots with results', function() {
      spyOn(Math,'random').andReturn(0.24);
      fruitMachine.play();
      expect(fruitMachine.slots).toEqual(['black', 'black', 'black', 'black']);
    });
  });
});
