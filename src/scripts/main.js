import Gameboard from './gameboard.js';
import Ship from './ship.js';

import Position from './position.js';

const Game = () => {
  const playerBoard = Gameboard();
  const computerBoard = Gameboard();
  const playerCheckBoard = Gameboard();

  const position = Position();

  const ship = Ship();

  const randomizer = computerBoard.randomize;
  const randomAxies = computerBoard.randomAxis;

  const checkSetup = (playerCheckShips) => {
    if (playerCheckShips.length === 5) return true;
    return false;
  };

  const setupGame = () => {
    const playerCheckValues = playerCheckBoard.getValues();

    if (!checkSetup(playerCheckValues.currentShips)) return false;

    playerBoard.placeAllShips(playerCheckValues.currentShips);
    computerBoard.placeShipsRandomly(randomizer, randomAxies);
    return true;
  };

  const attackBoats = (coords) => {
    const playerCheckValues = playerCheckBoard.getValues();

    if (!checkSetup(playerCheckValues.currentShips)) return false;

    const currentAttack = computerBoard.recieveAttack(coords);
    if (!currentAttack) return false;
    playerBoard.recieveRandomAttack(randomizer);

    return true;
  };

  const setupShip = (location, axis) =>
    playerCheckBoard.playerPlaceShip(location, axis);

  const gameIsOver = () => {
    const playerCheckShips = playerCheckBoard.getValues().currentShips;
    if (!checkSetup(playerCheckShips)) return false;

    if (computerBoard.isAllSunk()) {
      return { message: 'You Won 😃', gameFinished: true };
    }

    if (playerBoard.isAllSunk()) {
      return { message: 'You Lost 😢', gameFinished: true };
    }
    return { gameFinished: false };
  };

  const arrangeBlocks = (mousePosition, currentRotation) => {
    const checkboardObjects = playerCheckBoard.getValues();

    const shipTypeObject = playerCheckBoard.getTypeOfPlacedShip(
      checkboardObjects.currentShips
    );

    const currentShip = ship.createShip(
      mousePosition,
      shipTypeObject.shipLength,
      currentRotation
    );
    return currentShip;
  };

  const getGameValues = () => ({
    playerBoard,
    computerBoard,
    playerCheckBoard,
  });

  return {
    checkSetup,
    attackBoats,
    setupGame,
    gameIsOver,
    setupShip,
    getGameValues,
    arrangeBlocks,
  };
};

export default Game;
