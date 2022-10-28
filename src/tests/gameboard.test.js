import Gameboard from '../scripts/gameboard.js';
import Ship from '../scripts/ship.js';
import Position from '../scripts/position.js';
import randomMaterial from '../testMaterials/randomShips.js';

function* randomPositions(array) {
  let index = 0;

  while (index < array.length) {
    yield array[index];
    index += 1;
  }
}

const gameboard = Gameboard();
const ship = Ship();
const position = Position();
const randomItem = randomMaterial();

const shipPosition1 = position.createPosition(1, 1);
const shipPosition2 = position.createPosition(0, 0);
const shipPosition3 = position.createPosition(5, 1);
const shipPosition4 = position.createPosition(2, 2);
const shipPosition5 = position.createPosition(2, 1);

const shipPosition8 = position.createPosition(4, 4);

const ship2 = ship.createShip(shipPosition2, 1, 'x');
const ship3 = ship.createShip(shipPosition3, 3, 'x');
const ship4 = ship.createShip(shipPosition4, 2, 'y');
const shipArray5 = [ship2, ship3, ship4];

const hitPosition1 = position.createPosition(6, 1);
const hitPosition2 = position.createPosition(7, 1);

const shipArrayHit5Before = [[], ship3, ship4];
const shipArrayHit5 = [[], [hitPosition1, hitPosition2], ship4];

describe('gameboard', () => {
  it('attackShip', () => {
    expect(gameboard.attackShip(shipPosition2, shipArray5, [], [])).toEqual({
      isHit: true,
      latestShipsArray: [[], ship3, ship4],
      latestHits: [shipPosition2],
      latestMisses: [],
    });

    expect(
      gameboard.attackShip(
        shipPosition2,
        [[], ship3, ship4],
        [shipPosition2],
        []
      )
    ).toEqual(false);

    expect(
      gameboard.attackShip(false, [[], ship3, ship4], [shipPosition2], [])
    ).toEqual(false);

    expect(
      gameboard.attackShip(shipPosition5, shipArray5, [], [shipPosition1])
    ).toEqual({
      isHit: false,
      latestShipsArray: shipArray5,
      latestHits: [],
      latestMisses: [shipPosition1, shipPosition5],
    });

    expect(
      gameboard.attackShip(
        shipPosition3,
        shipArrayHit5Before,
        [shipPosition2],
        [shipPosition1, shipPosition5]
      )
    ).toEqual({
      isHit: true,
      latestShipsArray: shipArrayHit5,
      latestHits: [shipPosition2, shipPosition3],
      latestMisses: [shipPosition1, shipPosition5],
    });
  });

  it('isAllSunk', () => {
    const testBoard = Gameboard();
    const testBoard2 = Gameboard();
    testBoard.placeAllShips(randomItem.randomShipsArray);

    expect(testBoard.isAllSunk()).toBe(false);
    expect(testBoard2.isAllSunk()).toBe(true);
  });

  it('recieveRandomAttack', () => {
    const randomHitPositions = [
      shipPosition1,
      shipPosition1,
      shipPosition2,
      shipPosition2,
      shipPosition8,
    ];
    const randomHit = randomPositions(randomHitPositions);
    const randomBoard = Gameboard();
    randomBoard.placeAllShips(randomItem.randomShipsArray);
    let index = 0;
    let expectedResult;

    const randomize = {
      isMockRandom: true,
      callRandomizer: jest.fn(() => randomHit.next().value),
    };

    const result = {
      isHit: true,
      latestShipsArray: randomItem.randomHitShipsArray1,
      latestHits: [randomHitPositions[0], randomHitPositions[4]],
      latestMisses: [randomHitPositions[2]],
    };

    while (index < randomHitPositions.length - 2) {
      expectedResult = randomBoard.recieveRandomAttack(randomize);
      index += 1;
    }

    expect(expectedResult).toEqual(result);
  });

  it('recieveAttack', () => {
    const attackPosition = position.createPosition(5, 1);
    const attackPosition2 = position.createPosition(9, 9);
    const playerBoard = Gameboard();
    playerBoard.placeAllShips(randomItem.randomShipsArray);

    const attackedPieaces = playerBoard.recieveAttack(attackPosition);
    const attackedPieaces2 = playerBoard.recieveAttack(attackPosition2);
    const playerBoardValues = playerBoard.getValues();

    expect(playerBoardValues.currentShips).toEqual(
      randomItem.randomShipsArray2
    );

    expect(attackedPieaces).toEqual({
      isHit: true,
      latestShipsArray: randomItem.randomShipsArray2,
      latestHits: [attackPosition],
      latestMisses: [attackPosition2],
    });

    expect(playerBoardValues.currentShips).toEqual(
      randomItem.randomShipsArray2
    );
    expect(playerBoardValues.hits).toEqual([attackPosition]);
    expect(playerBoardValues.misses).toEqual([attackPosition2]);
  });

  it('placeAllShips', () => {
    const gameboard = Gameboard();
    const placingShips = gameboard.placeAllShips(randomItem.randomShipsArray);
    const gameboardValues = gameboard.getValues();

    expect(gameboardValues.currentShips).toEqual(randomItem.randomShipsArray);
    expect(placingShips).toEqual(randomItem.randomShipsArray);
  });

  it('placeShipsRandomly', () => {
    const randomPos = randomPositions(randomItem.numberPositions);
    const randomAxiesPos = randomPositions(randomItem.randomLettersPosition);

    const randomizer = jest.fn(() => randomPos.next().value);
    const randomAxies = jest.fn(() => randomAxiesPos.next().value);

    const randomShipPlacement = gameboard.placeShipsRandomly(
      randomizer,
      randomAxies
    );

    const randomShipPlacementValues = gameboard.getValues();

    expect(randomShipPlacementValues.currentShips).toEqual(
      randomItem.randomShipsArray
    );
    expect(randomShipPlacement).toEqual(randomItem.randomShipsArray);
  });

  it('playerPlaceShip', () => {
    const playerBoard = Gameboard();

    const assertPlayerPlaceShip = (location, axis, result) => {
      const recieved = playerBoard.playerPlaceShip(location, axis);

      expect(recieved).toEqual(result);
    };

    assertPlayerPlaceShip(position.createPosition(1, 1), 'y', [
      ship.createShip(position.createPosition(1, 1), 5, 'y'),
    ]);

    assertPlayerPlaceShip(position.createPosition(9, 9), 'x', [
      ship.createShip(position.createPosition(1, 1), 5, 'y'),
    ]);

    assertPlayerPlaceShip(position.createPosition(4, 4), 'x', [
      ship.createShip(position.createPosition(1, 1), 5, 'y'),
      ship.createShip(position.createPosition(4, 4), 4, 'x'),
    ]);

    assertPlayerPlaceShip(position.createPosition(4, 4), 'y', [
      ship.createShip(position.createPosition(1, 1), 5, 'y'),
      ship.createShip(position.createPosition(4, 4), 4, 'x'),
    ]);

    assertPlayerPlaceShip(position.createPosition(4, 1), 'x', [
      ship.createShip(position.createPosition(1, 1), 5, 'y'),
      ship.createShip(position.createPosition(4, 4), 4, 'x'),
      ship.createShip(position.createPosition(4, 1), 3, 'x'),
    ]);

    assertPlayerPlaceShip(position.createPosition(9, 6), 'y', [
      ship.createShip(position.createPosition(1, 1), 5, 'y'),
      ship.createShip(position.createPosition(4, 4), 4, 'x'),
      ship.createShip(position.createPosition(4, 1), 3, 'x'),
      ship.createShip(position.createPosition(9, 6), 3, 'y'),
    ]);

    assertPlayerPlaceShip(position.createPosition(5, 7), 'x', [
      ship.createShip(position.createPosition(1, 1), 5, 'y'),
      ship.createShip(position.createPosition(4, 4), 4, 'x'),
      ship.createShip(position.createPosition(4, 1), 3, 'x'),
      ship.createShip(position.createPosition(9, 6), 3, 'y'),
      ship.createShip(position.createPosition(5, 7), 2, 'x'),
    ]);

    assertPlayerPlaceShip(position.createPosition(1, 9), 'x', [
      ship.createShip(position.createPosition(1, 1), 5, 'y'),
      ship.createShip(position.createPosition(4, 4), 4, 'x'),
      ship.createShip(position.createPosition(4, 1), 3, 'x'),
      ship.createShip(position.createPosition(9, 6), 3, 'y'),
      ship.createShip(position.createPosition(5, 7), 2, 'x'),
    ]);
  });

  test('get type of ship', () => {
    const placeShipBoard = Gameboard();

    const assertShip = (shipObject, location, axis) => {
      placeShipBoard.playerPlaceShip(location, axis);

      const playerBoardValues = placeShipBoard.getValues();

      expect(
        placeShipBoard.getTypeOfPlacedShip(playerBoardValues.currentShips)
      ).toEqual(shipObject);
    };

    expect(placeShipBoard.getTypeOfPlacedShip([])).toEqual({
      shipType: 'carrier',
      shipLength: 5,
    });

    assertShip(
      { shipType: 'battleship', shipLength: 4 },
      position.createPosition(1, 1),

      'y'
    );
    assertShip(
      { shipType: 'destoyer', shipLength: 3 },
      position.createPosition(4, 4),
      'x'
    );
    assertShip(
      { shipType: 'submarine', shipLength: 3 },
      position.createPosition(4, 1),
      'x'
    );
    assertShip(
      { shipType: 'gunboat', shipLength: 2 },
      position.createPosition(9, 6),

      'y'
    );
    assertShip(false, position.createPosition(0, 9), 'x');
  });
});
