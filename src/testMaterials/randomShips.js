import Ship from '../scripts/ship.js';
import Position from '../scripts/position.js';

const randomMaterial = () => {
  const ship = Ship();
  const position = Position();

  const randomLettersPosition = ['y', 'x', 'y', 'x', 'x'];

  const numberPositions = [1, 1, 4, 4, 9, 6, 5, 7, 4, 1];

  const randomShipPosition1 = position.createPosition(1, 1);
  const randomShipPosition2 = position.createPosition(4, 4);
  const randomShipPosition3 = position.createPosition(9, 6);
  const randomShipPosition4 = position.createPosition(5, 7);
  const randomShipPosition6 = position.createPosition(4, 1);
  const randomShipPosition7 = position.createPosition(5, 1);

  const randomHitPostion1 = position.createPosition(1, 2);
  const randomHitPosition2 = position.createPosition(5, 4);

  const randomShip1 = ship.createShip(randomShipPosition1, 5, 'y');
  const randomShip2 = ship.createShip(randomShipPosition2, 4, 'x');
  const randomShip3 = ship.createShip(randomShipPosition3, 3, 'y');
  const randomShip4 = ship.createShip(randomShipPosition4, 3, 'x');
  const randomShip5 = ship.createShip(randomShipPosition6, 2, 'x');

  const randomShip6 = ship.createShip(randomShipPosition6, 1, 'x');
  const randomShip7 = ship.createShip(randomShipPosition7, 1, 'x');

  const randomHitBoat1 = ship.createShip(randomHitPostion1, 4, 'y');
  const randomHitBoat2 = ship.createShip(randomHitPosition2, 3, 'x');

  const randomShipsArray = [
    randomShip1,
    randomShip2,
    randomShip3,
    randomShip4,
    randomShip5,
  ];

  const randomShipsArray2 = [
    randomShip1,
    randomShip2,
    randomShip3,
    randomShip4,
    randomShip6,
  ];

  const randomHitShipsArray1 = [
    randomHitBoat1,
    randomHitBoat2,
    randomShip3,
    randomShip4,
    randomShip5,
  ];

  return {
    randomLettersPosition,
    numberPositions,
    randomShipPosition1,
    randomShipPosition2,
    randomShipPosition3,
    randomShipPosition4,
    randomShipPosition6,
    randomShipPosition7,
    randomShip1,
    randomShip2,
    randomShip3,
    randomShip4,
    randomShip5,
    randomShip6,
    randomShip7,
    randomShipsArray,
    randomShipsArray2,
    randomHitShipsArray1,
  };
};

export default randomMaterial;
