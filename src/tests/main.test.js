import Game from '../scripts/main.js';
import randomMaterial from '../testMaterials/randomShips.js';
import Position from '../scripts/position.js';
import Practical from '../scripts/practical.js';
import Ship from '../scripts/ship.js';

describe('main', () => {
  const randomShip = randomMaterial();
  const position = Position();
  const practial = Practical();
  const ship = Ship();

  const boatPositions = [
    position.createPosition(1, 1),
    position.createPosition(4, 4),
    position.createPosition(4, 1),
    position.createPosition(9, 6),

    position.createPosition(5, 7),
  ];

  const boatAxies = ['y', 'x', 'x', 'y', 'x'];

  it('checkSetup', () => {
    const game = Game();

    expect(game.checkSetup([])).toEqual(false);
    expect(game.checkSetup(randomShip.randomShipsArray)).toEqual(true);
  });

  it('setupGame', () => {
    const game = Game();
    const game2 = Game();

    const boatPositions2 = practial.copyArray(boatPositions);
    boatPositions2[3] = position.createPosition(7, 6);
    boatPositions2[4] = position.createPosition(6, 9);

    setupShips(boatPositions, boatAxies, game);
    setupShips(boatPositions2, boatAxies, game2);

    expect(game.setupGame()).toEqual(true);
    expect(game2.setupGame()).toEqual(false);
  });

  it('arrange Blocks', () => {
    const game = Game();
    const game2 = Game();

    const assertArrangeBlocks = (currentGame, mousePos, shipLength, axis) => {
      const testResult = ship.createShip(mousePos, shipLength, axis, true);

      expect(currentGame.arrangeBlocks(mousePos, axis)).toEqual(testResult);
      game.setupShip(mousePos, axis);
    };

    assertArrangeBlocks(game, position.createPosition(1, 1), 5, 'y');
    assertArrangeBlocks(game, position.createPosition(4, 4), 4, 'x');
    assertArrangeBlocks(game, position.createPosition(4, 1), 3, 'x');
    assertArrangeBlocks(game, position.createPosition(9, 6), 3, 'y');
    assertArrangeBlocks(game, position.createPosition(5, 7), 2, 'x');

    assertArrangeBlocks(game2, position.createPosition(9, 9), 5, 'y');
  });

  const setupShips = (currentBoatPosition, axies, currentGameClass) => {
    let index = 0;

    while (index < currentBoatPosition.length) {
      const boatPosition = currentBoatPosition[index];
      const boatAxis = axies[index];

      currentGameClass.setupShip(boatPosition, boatAxis);

      index += 1;
    }
  };

  it('gameIsOver', () => {
    const game = Game();
    const game2 = Game();
    const game3 = Game();

    setupShips(boatPositions, boatAxies, game);
    game.setupGame();

    setupShips(boatPositions, boatAxies, game2);
    game2.setupGame();

    setupShips(boatPositions, boatAxies, game3);
    game3.setupGame();

    const game2Values = game2.getGameValues();
    const game3Values = game3.getGameValues();

    const { playerBoard } = game2Values;
    playerBoard.placeAllShips([]);

    const { computerBoard } = game3Values;
    computerBoard.placeAllShips([]);

    expect(game.gameIsOver()).toEqual({ gameFinished: false });
    expect(game2.gameIsOver()).toEqual({
      message: 'You Lost 😢',
      gameFinished: true,
    });

    expect(game3.gameIsOver()).toEqual({
      message: 'You Won 😃',
      gameFinished: true,
    });
  });
});
