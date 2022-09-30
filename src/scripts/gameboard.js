import Position from './position.js';
import Ship from './ship.js';
import Practical from './practical.js';

const Gameboard = () => {
  const position = Position();
  const ship = Ship();
  const practical = Practical();

  let currentShips = [];
  let hits = [];
  let misses = [];

  const randomize = () => Math.floor(Math.random() * 10);

  const randomAxis = () => {
    const axies = ['x', 'y'];
    return axies[Math.floor(Math.random() * axies.length)];
  };

  const placeAllShips = (shipsArray) => {
    currentShips = shipsArray;
    return currentShips;
  };

  const compareShipsArray = (latestShipsArray, ships) => {
    let shipsDoCollide = false;
    // console.log(latestShipsArray, 'the curreent ships array');
    // console.log(ships, 'the current ships');

    latestShipsArray.forEach((latestShips) => {
      latestShips.forEach((boat) => {
        ships.forEach((latestBoat) => {
          if (position.comparePosition(boat, latestBoat)) {
            shipsDoCollide = true;
          }
        });
      });
    });

    return shipsDoCollide;
  };

  const playerPlaceShip = (location, axis) => {
    const latestPosition = location;
    const currentArray = practical.copyArray(currentShips);

    let shiplength = 5 - currentArray.length;

    if (shiplength === 2) shiplength = 3;
    if (shiplength === 1) shiplength = 2;

    const currentShip = ship.createShip(latestPosition, shiplength, axis);

    const isCollided = compareShipsArray(currentArray, currentShip);

    if (!isCollided && !currentArray.length === 5 && !currentShip) {
      currentArray.push(currentShip);
      currentShips = currentArray;
      return currentArray;
    }

    return currentArray;
  };

  const placeRandomShips = (length, shipsArray, randomizer, randomAxies) => {
    const latestShipsArray = shipsArray;
    let latestLength = length;
    const randomPosition = position.createPosition(randomizer(), randomizer());
    const randomShip = ship.createShip(
      randomPosition,
      latestLength,
      randomAxies()
    );

    if (randomShip) {
      const shipCollides = compareShipsArray(latestShipsArray, randomShip);
      if (!shipCollides) {
        if (latestLength > 2) latestLength -= 1;
        if (shipsArray.length < 5) latestShipsArray.push(randomShip);

        if (shipsArray.length === 5) {
          return latestShipsArray;
        }
      }
    }

    return placeRandomShips(
      latestLength,
      latestShipsArray,
      randomizer,
      randomAxies
    );
  };

  const placeShipsRandomly = (randomizer, randomAxies) => {
    const shipsArray = placeRandomShips(5, [], randomizer, randomAxies);
    currentShips = shipsArray;

    return shipsArray;
  };

  const attackShip = (latestPosition, ships, currentHits, currentMisses) => {
    let isHit = false;
    const latestShipsArray = [];
    const latestHits = currentHits;
    const latestMisses = currentMisses;

    ships.forEach((shipArray) => {
      let positionsArray = practical.copyArray(shipArray);
      const hit = ship.hit(positionsArray, latestPosition);

      if (hit.hitArray.length !== 0) {
        isHit = true;
        positionsArray = hit.shipArrays;
        latestHits.push(hit.hitArray[0]);
      }
      latestShipsArray.push(positionsArray);
    });
    if (!isHit) latestMisses.push(latestPosition);

    const finalObject = {
      isHit,
      latestShipsArray,
      latestHits,
      latestMisses,
    };

    return finalObject;
  };

  const recieveAttack = (latestPosition) => {
    const result = attackShip(latestPosition, currentShips, hits, misses);

    currentShips = result.latestShipsArray;
    hits = result.latestHits;
    misses = result.latestMisses;

    return result;
  };

  const createRandomCoords = (randomizer) => {
    let randomPosition;

    if (randomizer.isMockRandom) {
      randomPosition = randomizer.callRandomizer();
    } else {
      const randomX = randomizer();
      const randomY = randomizer();
      randomPosition = position.createPosition(randomX, randomY);
    }

    return randomPosition;
  };

  const filterAttack = (array, currentAttack) => {
    const currentAttackArray = array.filter(
      (item) =>
        item.xCoord === currentAttack.xCoord &&
        item.yCoord === currentAttack.yCoord
    );

    return currentAttackArray;
  };

  const getTypeOfPlacedShip = () => {
    if (currentShips.length === 5) return false;

    const shipTypes = [
      { shipType: 'carrier', shipLength: 5 },
      { shipType: 'battleship', shipLength: 4 },
      { shipType: 'destoyer', shipLength: 3 },
      { shipType: 'submarine', shipLength: 3 },
      { shipType: 'gunboat', shipLength: 2 },
    ];

    return shipTypes[currentShips.length];
  };

  const recieveRandomAttack = (randomizer) => {
    const randomPosition = createRandomCoords(randomizer);

    const hasBeenHit = filterAttack(hits, randomPosition);
    const hasBeenMiss = filterAttack(misses, randomPosition);

    if (hasBeenHit.length > 0 || hasBeenMiss.length > 0) {
      return recieveRandomAttack(randomizer);
    }
    return recieveAttack(randomPosition);
  };

  const isAllSunk = () => {
    let hasSunked = true;
    currentShips.forEach((ships) => {
      if (!ship.isSunk(ships)) {
        hasSunked = false;
      }
    });

    return hasSunked;
  };

  const getValues = () => ({
    currentShips,
    hits,
    misses,
  });

  return {
    attackShip,
    recieveAttack,
    isAllSunk,
    placeShipsRandomly,
    playerPlaceShip,
    placeAllShips,
    randomize,
    recieveRandomAttack,
    randomAxis,
    getValues,
    getTypeOfPlacedShip,
  };
};

export default Gameboard;
