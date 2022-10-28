import Position from '../scripts/position.js';
import Ship from '../scripts/ship.js';

const position = Position();
const ship = Ship();

describe('Ship', () => {
  it('createShip', () => {
    const assertCreateShip = (
      shipPosition,
      shiplength,
      axis,
      positionsArray
    ) => {
      const latestShipPosition = ship.createShip(
        shipPosition,
        shiplength,
        axis
      );

      expect(latestShipPosition).toEqual(positionsArray);
    };

    assertCreateShip(position.createPosition(1, 1), 3, 'y', [
      position.createPosition(1, 1),
      position.createPosition(1, 2),
      position.createPosition(1, 3),
    ]);

    assertCreateShip(position.createPosition(1, 1), 2, 'x', [
      position.createPosition(1, 1),
      position.createPosition(2, 1),
    ]);

    assertCreateShip(position.createPosition(1, 1), 0, 'x', false);
    assertCreateShip(position.createPosition(10, 10), 2, 'y', false);
    assertCreateShip(position.createPosition(1, 1), 7, 'x', false);
    assertCreateShip(position.createPosition(9, 9), 2, 'x', false);
  });

  it('hit', () => {
    const position1 = position.createPosition(4, 5);
    const position2 = position.createPosition(4, 6);

    const position3 = position.createPosition(4, 7);

    const position4 = position.createPosition(3, 7);
    const position5 = position.createPosition(2, 5);
    const position6 = position.createPosition(1, 6);

    const positionsArray = [position1, position2, position3];
    const secondPositionArray = [position4, position5, position6];

    const shipHit = ship.hit(positionsArray, position1);
    const shipHit2 = ship.hit(secondPositionArray, position5);
    const shipHit3 = ship.hit(positionsArray, position4);

    expect(shipHit).toEqual({
      hitArray: [position1],
      shipArrays: [position2, position3],
    });

    expect(shipHit2).toEqual({
      hitArray: [position5],
      shipArrays: [position4, position6],
    });

    expect(shipHit3).toEqual({
      hitArray: [],
      shipArrays: [position1, position2, position3],
    });
  });

  it('isSunk', () => {
    const array1 = [];
    const position1 = position.createPosition(4, 5);
    const array2 = [position1];

    expect(ship.isSunk(array1)).toBe(true);
    expect(ship.isSunk(array2)).toBe(false);
  });
});
