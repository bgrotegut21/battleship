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

// imported modules
const gameboard = Gameboard();
const ship = Ship();
const position = Position();
const randomItem = randomMaterial();
// randomHit Positions

// random array and positions

// const randomLettersPosition = ['y', 'x', 'y', 'x', 'x'];

// const numberPositions = [1, 1, 4, 4, 9, 6, 5, 7, 4, 1];

// const randomShipPosition1 = position.createPosition(1, 1);
// const randomShipPosition2 = position.createPosition(4, 4);
// const randomShipPosition3 = position.createPosition(9, 6);
// const randomShipPosition4 = position.createPosition(5, 7);
// const randomShipPosition6 = position.createPosition(4, 1);
// const randomShipPosition7 = position.createPosition(5, 1);

// const randomShip1 = ship.createShip(randomShipPosition1, 5, 'y');
// const randomShip2 = ship.createShip(randomShipPosition2, 4, 'x');
// const randomShip3 = ship.createShip(randomShipPosition3, 3, 'y');
// const randomShip4 = ship.createShip(randomShipPosition4, 2, 'x');
// const randomShip5 = ship.createShip(randomShipPosition6, 2, 'x');

// const randomShip6 = ship.createShip(randomShipPosition6, 1, 'x');
// const randomShip7 = ship.createShip(randomShipPosition7, 1, 'x');

// const randomShipsArray = [
//   randomShip1,
//   randomShip2,
//   randomShip3,
//   randomShip4,
//   randomShip5,
// ];

// const randomShipsArray2 = [
//   randomShip1,
//   randomShip2,
//   randomShip3,
//   randomShip4,
//   randomShip6,
// ];

// ship and hit positions
const shipPosition1 = position.createPosition(1, 1);
const shipPosition2 = position.createPosition(0, 0);
const shipPosition3 = position.createPosition(5, 1);
const shipPosition4 = position.createPosition(2, 2);
const shipPosition5 = position.createPosition(2, 1);

const shipPosition8 = position.createPosition(4, 4);
const shipPosition9 = position.createPosition(9, 6);
const shipPosition10 = position.createPosition(8, 1);

const ship1 = ship.createShip(shipPosition1, 3, 'x');
const ship2 = ship.createShip(shipPosition2, 1, 'x');
const ship3 = ship.createShip(shipPosition3, 3, 'x');
const ship4 = ship.createShip(shipPosition4, 2, 'y');
const ship5 = ship.createShip(shipPosition5, 3, 'y');

const shipArray1 = [ship1];
const shipArray3 = [ship2];
const shipArray4 = [ship2, ship3];
const shipArray5 = [ship2, ship3, ship4];

const hitPosition1 = position.createPosition(6, 1);
const hitPosition2 = position.createPosition(7, 1);

const shipArrayHit5Before = [[], ship3, ship4];
const shipArrayHit5 = [[], [hitPosition1, hitPosition2], ship4];
const shipArray6 = [ship4];

const emptyArrays = [[], []];

// 1,1 hit
// 0,0 miss
// 4,1 hit

// random hit positions

describe('gameboard', () => {
  it('attackShip', () => {
    expect(gameboard.attackShip(shipPosition2, shipArray5, [], [])).toEqual({
      isHit: true,
      latestShipsArray: [[], ship3, ship4],
      latestHits: [shipPosition2],
      latestMisses: [],
    });

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

  // 1,1 hit
  // 0,0 miss
  // 4,4 hit

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

    // the loops only iterates twice because the function will run the result recursively
    while (index < randomHitPositions.length - 2) {
      expectedResult = randomBoard.recieveRandomAttack(randomize);
      index += 1;
    }

    console.log(result, 'the current result');
    console.log(expectedResult, 'the expected result');

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

  // WORK ON THIS
  it('playerPlaceShip', () => {
    const playerBoard = Gameboard();

    const assertPlayerPlaceShip = (location, axis, result) => {
      const recieved = playerBoard.playerPlaceShip(location, axis);
      expect(recieved).toEqual(result);
    };

    assertPlayerPlaceShip(position.createPosition(1, 1), 'y', [
      position.createPosition(1, 1),
    ]);

    assertPlayerPlaceShip(position.createPosition(9, 9), 'x', [
      position.createPosition(1, 1),
    ]);

    assertPlayerPlaceShip(position.createPosition(4, 4), 'x', [
      position.createPosition(1, 1),
      position.createPosition(4, 4),
    ]);

    assertPlayerPlaceShip(position.createPosition(4, 4), 'y', [
      position.createPosition(1, 1),
      position.createPosition(4, 4),
    ]);

    assertPlayerPlaceShip(position.createPosition(4, 1), 'x', [
      position.createPosition(1, 1),
      position.createPosition(4, 4),
      position.createPosition(4, 1),
    ]);

    assertPlayerPlaceShip(position.addPosition.createPosition(6, 9), 'y', [
      position.createPosition(1, 1),
      position.createPosition(4, 4),
      position.createPosition(4, 1),
      position.createPosition(9, 6),
    ]);

    assertPlyerShip(position.addPosition.createPosition(), 'x', [
      position.createPosition(1, 1),
      position.createPosition(4, 4),
      position.createPosition(4, 1),
      position.createPosition(9, 6),
      p,
    ]);
  });

  // getting type of ship should only be used when the game is placing the ships

  test('get type of ship', () => {
    const placeShipBoard = Gameboard();

    const assertShip = (shipObject, location, axis) => {
      placeShipBoard.playerPlaceShip(location, axis);

      expect(placeShipBoard.getTypeOfPlacedShip()).toEqual(shipObject);
    };

    expect(placeShipBoard.getTypeOfPlacedShip()).toEqual({
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