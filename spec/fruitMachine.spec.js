var FruitMachine = require('../app/fruitMachine.js');

describe('fruit machine', function() {
  var fruitMachine;
  var resultsMock = ['black', 'white', 'green', 'yellow'];

  beforeEach(function() {
    fruitMachine = new FruitMachine();
  });

  it('stores possible results in an array', function() {
    expect(fruitMachine.results).toEqual(resultsMock);
  });
});