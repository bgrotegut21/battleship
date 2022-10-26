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
    if (!ships) return shipsDoCollide;

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

  const getTypeOfPlacedShip = (shipArray) => {
    if (shipArray.length === 5) return false;

    const shipTypes = [
      { shipType: 'carrier', shipLength: 5 },
      { shipType: 'battleship', shipLength: 4 },
      { shipType: 'destoyer', shipLength: 3 },
      { shipType: 'submarine', shipLength: 3 },
      { shipType: 'gunboat', shipLength: 2 },
    ];

    return shipTypes[shipArray.length];
  };

  const playerPlaceShip = (location, axis) => {
    const currentArray = practical.copyArray(currentShips);

    const shipType = getTypeOfPlacedShip(currentArray);

    const latestShip = ship.createShip(location, shipType.shipLength, axis);

    const isCollided = compareShipsArray(currentArray, latestShip);

    if (shipType && latestShip && !isCollided) {
      currentArray.push(latestShip);
    }

    currentShips = currentArray;
    return currentArray;
  };

  const placeRandomShips = (shipsArray, randomizer, randomAxies) => {
    const latestShipsArray = shipsArray;
    const randomPosition = position.createPosition(randomizer(), randomizer());
    const shipType = getTypeOfPlacedShip(latestShipsArray);
    if (!shipType) {
      // console.log(shipType);
      // console.log(latestShipsArray, 'the latest ships array');

      return latestShipsArray;
    }

    const latestLength = shipType.shipLength;

    const randomShip = ship.createShip(
      randomPosition,
      latestLength,
      randomAxies()
    );

    const shipCollides = compareShipsArray(latestShipsArray, randomShip);
    if (randomShip && !shipCollides) latestShipsArray.push(randomShip);

    return placeRandomShips(latestShipsArray, randomizer, randomAxies);
  };

  const placeShipsRandomly = (randomizer, randomAxies) => {
    const shipsArray = placeRandomShips([], randomizer, randomAxies);
    currentShips = shipsArray;

    return shipsArray;
  };
  const filterAttack = (array, currentAttack) => {
    const currentAttackArray = array.filter(
      (item) =>
        item.xCoord === currentAttack.xCoord &&
        item.yCoord === currentAttack.yCoord
    );

    return currentAttackArray;
  };

  const hasHitShip = (hitPosition, latestHits, latestMisses) => {
    const hasBeenHit = filterAttack(latestHits, hitPosition);
    const hasBeenMiss = filterAttack(latestMisses, hitPosition);

    if (hasBeenHit.length > 0 || hasBeenMiss.length > 0) return true;
    return false;
  };

  const attackShip = (latestPosition, ships, currentHits, currentMisses) => {
    let isHit = false;
    const latestShipsArray = [];
    const latestHits = currentHits;
    const latestMisses = currentMisses;

    if (!latestPosition) return false;
    if (hasHitShip(latestPosition, currentHits, currentMisses)) return false;

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
    if (!result) return false;

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

  const recieveRandomAttack = (randomizer) => {
    const randomPosition = createRandomCoords(randomizer);
    const hasHit = hasHitShip(randomPosition, hits, misses);

    if (hasHit) return recieveRandomAttack(randomizer);

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
