const areaOfSquare = require('../');

describe('Calculate area of square', () => {
  test('passed the value 3, it should return 9', () => {
    expect(areaOfSquare(3)).tobe(9);
  });
});
