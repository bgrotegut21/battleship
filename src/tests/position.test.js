import Position from '../scripts/position';

const position = Position();

describe('Position', () => {
  it('createPosition', () => {
    expect(position.createPosition(1, 2)).toEqual({
      xCoord: 1,
      yCoord: 2,
    });
  });

  it('addPosition', () => {
    const vector1 = position.createPosition(2, 3);
    const vector2 = position.createPosition(3, 4);

    const vector3 = position.createPosition(1, 8);
    const vector4 = position.createPosition(9, 7);

    const vector5 = position.createPosition(5, 7);
    const vector6 = position.createPosition(6, 5);

    const vector7 = position.createPosition(8, 8);

    expect(position.addPosition(vector1, vector2)).toEqual(vector5);
    expect(position.addPosition(vector6, vector1)).toEqual(vector7);

    expect(position.addPosition(vector3, vector2)).toBe(false);
    expect(position.addPosition(vector3, vector4)).toBe(false);
    expect(position.addPosition(vector3, false)).toBe(false);
  });

  it('multiplyPosition', () => {
    const vector1 = position.createPosition(2, 3);
    const vector2 = position.createPosition(3, 4);

    const vector3 = position.createPosition(1, 2);
    const vector4 = position.createPosition(2, 4);
    const vector5 = position.createPosition(2, 8);
    const vector6 = position.createPosition(1, 1);

    expect(position.multiplyPosition(vector3, vector4)).toEqual(vector5);
    expect(position.multiplyPosition(vector6, vector5)).toEqual(vector5);

    expect(position.multiplyPosition(vector1, vector2)).toEqual(false);
    expect(position.multiplyPosition(vector4, vector5)).toEqual(false);
    expect(position.multiplyPosition(false, vector5)).toEqual(false);
  });

  it('check out of bounce', () => {
    expect(position.checkOutOfBounce(position.createPosition(10, 10))).toBe(
      true
    );
    expect(position.checkOutOfBounce(position.createPosition(-1, -1))).toBe(
      true
    );

    expect(position.checkOutOfBounce(position.createPosition(9, 9))).toBe(
      false
    );
  });

  it('comparePosition', () => {
    const vector1 = position.createPosition(2, 3);
    const vector2 = position.createPosition(1, 4);

    const vector3 = position.createPosition(1, 2);
    const vector4 = position.createPosition(3, 4);

    expect(position.comparePosition(vector1, vector2)).toBe(true);
    expect(position.comparePosition(vector3, vector4)).toBe(false);
  });
});
