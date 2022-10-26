import Dom from './dom.js';
import Position from './position.js';
import Ship from './ship.js';
import Game from './main.js';
// you win  😃

// you lost 😢

const Ui = () => {
  const dom = Dom();
  const position = Position();
  const ship = Ship();

  const renderSpeed = 1;

  let blockSize = 42;

  let activeGame;

  let placedShip = false;
  let axis = 'y';

  let mouseBlockLocation = false;

  const createDomElement = (elementName) => document.createElement(elementName);

  const getMousePosition = (offsetX, offsetY) => {
    // console.log(offsetX, offsetY, 'offset x and offset y');

    const xCoord = Math.floor(offsetX / blockSize);
    const yCoord = Math.floor(offsetY / blockSize);

    const mousePosition = position.createPosition(xCoord, yCoord);

    const outOfBounce = position.checkOutOfBounce(mousePosition);

    if (outOfBounce) return false;

    // console.log(mousePosition, 'the current mouse position');

    return mousePosition;
  };

  const findMousePosition = (event) => {
    const currentMousePosition = getMousePosition(event.offsetX, event.offsetY);

    mouseBlockLocation = currentMousePosition;

    // console.log(currentMousePosition, 'the current mouse position');
  };

  // wotk on this function
  const findTouchPosition = (event) => {
    const rect = event.target.getBoundingClientRect();
    const touchOffsetX = event.targetTouches[0].clientX - rect.x;
    const touchOffsetY = event.targetTouches[0].clientY - rect.y;

    const touchPosition = getMousePosition(touchOffsetX, touchOffsetY);
    mouseBlockLocation = touchPosition;

    console.log(mouseBlockLocation, 'the mouse block location');

    event.preventDefault();
  };

  // block size matches the size gridsize of the media query divided by 10
  const changeBlockSize = (matchMedia) => {
    blockSize = 42;
    if (matchMedia('(max-width: 960px)').matches) blockSize = 30;
    if (matchMedia('(max-width: 470px)').matches) blockSize = 21;
    if (matchMedia('(max-width: 320px)').matches) blockSize = 15;
    return blockSize;

    // console.log(matchMedia('(max-width: 320px)'), 'the current match media');
  };

  const createBlockElement = (blockClass, createBlock) => {
    let latestClass = blockClass;

    if (
      latestClass !== 'hitBlock' &&
      latestClass !== 'missBlock' &&
      latestClass !== 'cursorBlock'
    ) {
      latestClass = '';
    }

    const blockElement = createBlock('div');
    blockElement.classList.add('block');
    if (latestClass !== '') blockElement.classList.add(latestClass);

    return blockElement;
  };

  const disableStarterUi = () => true;

  // const renderSelectionBlocks = (mousePosition, latestBlockSize) => {
  //   const element = dom.getElements();

  //   const currentSnakeBlock = createBlockElement();
  //   const realPositionX = Math.floor(mousePosition.xCoord * latestBlockSize);
  //   const realPositionY = Math.floor(mousePosition.yCoord * latestBlockSize);

  //   console.log(mousePosition, 'THE CURRENT MOUSE POSITION');

  //   console.log(realPositionX, 'the real position x');
  //   console.log(realPositionY, 'the real position y');

  //   currentSnakeBlock.style.left = `${realPositionX}px`;
  //   currentSnakeBlock.style.top = `${realPositionY}px`;

  //   element.shipGrid.appendChild(currentSnakeBlock);
  // };

  const createShipBlock = (shipPosition, latestBlockSize, shipType) => {
    const shipBlock = createBlockElement(shipType, createDomElement);

    const realPositionX = Math.floor(shipPosition.xCoord * latestBlockSize);
    const realPositionY = Math.floor(shipPosition.yCoord * latestBlockSize);
    shipBlock.style.left = `${realPositionX}px`;
    shipBlock.style.top = `${realPositionY}px`;

    return shipBlock;
  };

  const renderAlreadyPlacedShips = (shipGrid, latestBlockSize) => {
    const gameValues = activeGame.getGameValues();
    const checkBoardShips =
      gameValues.playerCheckBoard.getValues().currentShips;

    checkBoardShips.forEach((playerCheckShips) => {
      playerCheckShips.forEach((boat) => {
        const shipBlock = createShipBlock(boat, latestBlockSize);
        shipGrid.appendChild(shipBlock);
      });
    });
  };

  const renderPlacedShip = (latestBlockSize) => {
    const element = dom.getElements();
    const { shipGrid } = element;

    if (!placedShip) return placedShip;

    shipGrid.innerHTML = '';

    placedShip.forEach((shipPosition) => {
      const shipBlock = createShipBlock(shipPosition, latestBlockSize);
      shipGrid.appendChild(shipBlock);
    });

    renderAlreadyPlacedShips(shipGrid, latestBlockSize);
  };

  const changeAxis = () => {
    if (axis === 'y') axis = 'x';
    else axis = 'y';
  };

  const moveShipByDirection = (mouseLocation, currentShip, currentAxis) => {
    let latestShip = false;

    if (position.checkOutOfBounce(currentShip[0])) return latestShip;

    const newXPosition = position.createPosition(
      mouseLocation.xCoord,
      0
    ).xCoord;

    const newYPosition = position.createPosition(
      0,
      mouseLocation.yCoord
    ).yCoord;

    let newShipPosition = position.createPosition(
      newXPosition,
      currentShip[0].yCoord
    );

    if (currentAxis === 'x') {
      newShipPosition = position.createPosition(
        currentShip[0].xCoord,
        newYPosition
      );
    }

    latestShip = ship.createShip(
      newShipPosition,
      currentShip.length,
      currentAxis
    );

    return latestShip;
  };

  const placePlayerShip = (latestShip, latestAxis, latestGame) => {
    if (latestShip) latestGame.setupShip(latestShip[0], latestAxis);
    return false;
  };

  const placePlayerShipEvent = () => {
    placePlayerShip(placedShip, axis, activeGame);
  };

  const resetGame = () => {
    const element = dom.getElements();

    element.computerGrid.innerHTML = '';
    element.playerGrid.innerHTML = '';

    element.shipSelection.style.display = 'flex';
    element.gameFinishedSection.style.display = 'none';
    element.gameOverText.innerHTML = '';

    activateUi();
  };

  const addUiEvents = () => {
    const element = dom.getElements();
    element.shipLayer.addEventListener('mousemove', findMousePosition);
    element.shipLayer.addEventListener('touchmove', findTouchPosition);
    element.shipLayer.addEventListener('click', placePlayerShipEvent);

    element.rotateButton.addEventListener('click', changeAxis);
  };

  const removeUiEvents = () => {
    const element = dom.getElements();

    element.shipLayer.removeEventListener('mousemove', findMousePosition);
    element.shipLayer.removeEventListener('touchmove', findTouchPosition);
    element.shipLayer.removeEventListener('click', placePlayerShipEvent);

    element.rotateButton.removeEventListener('click', changeAxis);
  };

  const addEndingEvents = () => {
    const element = dom.getElements();
    element.restart.addEventListener('click', restart);
  };

  const removeEndingEvents = () => {
    const element = dom.getElements();
    element.restart.removeEventListener('click', element.restart);
  };

  const removeGameEvents = () => {
    addEndingEvents();

    const element = dom.getElements();
    window.removeEventListener('mousemove', changeMousePosition);
    element
      .removeEventListener('touchmove', change)
      .addEventListener('mousemove', findMousePosition);
    element.removeEventListener('click', attackShips);
  };

  const getMessage = () => {};

  const addGameEvents = () => {
    removeUiEvents();
    const element = dom.getElements();
    window.addEventListener('mousemove', changeMousePosition);
    element.computerGridLayer.addEventListener('mousemove', findMousePosition);
    element.computerGridLayer.addEventListener('click', attackShips);
  };

  const checkMouseTarget = (elementClass) => {
    // console.log(elementClass, 'the element calss');
    if (elementClass !== 'gridOverlay computerGridOverlay') return false;
    return true;
  };

  const changeMousePosition = (event) => {
    const mouseTarget = checkMouseTarget(event.target.className);
    if (!mouseTarget) mouseBlockLocation = false;
  };

  const attackShips = () => {
    activeGame.attackBoats(mouseBlockLocation);
  };

  const renderShips = (ships, grid, latestBlockSize) => {
    ships.forEach((shipGroup) => {
      shipGroup.forEach((boat) => {
        const shipElement = createShipBlock(boat, latestBlockSize);
        grid.appendChild(shipElement);
      });
    });
  };

  const renderHits = (ships, shipType, grid, latestBlockSize) => {
    ships.forEach((shipPosition) => {
      const shipElement = createShipBlock(
        shipPosition,
        latestBlockSize,
        shipType
      );
      grid.appendChild(shipElement);
    });
  };

  const removeCursorElement = () => {
    const { computerGrid } = dom.getElements();

    console.log(computerGrid.innerHTML);
  };
  const renderGrids = (blockSize2, mousePosition) => {
    const gameValues = activeGame.getGameValues();

    const { playerGrid } = dom.getElements();
    const { computerGrid } = dom.getElements();

    playerGrid.innerHTML = '';
    computerGrid.innerHTML = '';

    const playerBoardValues = gameValues.playerBoard.getValues();
    const computerBoardValues = gameValues.computerBoard.getValues();

    // console.log(playerBoardValues, 'playerBoardValues');
    // console.log(computerBoardValues, 'computerBoardValues');
    // console.log(playerBoardValues, 'the player board values');

    renderShips(playerBoardValues.currentShips, playerGrid, blockSize2);
    renderHits(playerBoardValues.hits, 'hitBlock', playerGrid, blockSize2);
    renderHits(playerBoardValues.misses, 'missBlock', playerGrid, blockSize2);

    renderShips(computerBoardValues.currentShips, computerGrid, blockSize2);

    renderHits(computerBoardValues.hits, 'hitBlock', computerGrid, blockSize2);
    renderHits(
      computerBoardValues.misses,
      'missBlock',
      computerGrid,
      blockSize2
    );

    const mouseShip = ship.createShip(mousePosition, 1, 'x');

    if (mouseShip) {
      renderHits(mouseShip, 'cursorBlock', computerGrid, blockSize2);
    }
  };

  const renderStats = () => {
    const gameValues = activeGame.getGameValues();

    const { playerHits, playerMisses } = dom.getElements();
    const { computerHits, computerMisses } = dom.getElements();

    const playerBoardValues = gameValues.playerBoard.getValues();
    const computerBoardValues = gameValues.computerBoard.getValues();

    playerHits.textContent = `Hits - ${playerBoardValues.hits.length}`;
    playerMisses.textContent = `Misses - ${playerBoardValues.misses.length}`;

    computerHits.textContent = `Hits - ${computerBoardValues.hits.length}`;
    computerMisses.textContent = `Misses - ${computerBoardValues.misses.length}`;
  };

  const renderGame = () => {
    setTimeout(() => {
      const gameStatus = activeGame.gameIsOver();

      const latestBlockSize = changeBlockSize(window.matchMedia);
      renderGrids(latestBlockSize, mouseBlockLocation);
      renderStats();

      if (!gameStatus.gameFinished) renderGame(latestBlockSize);
      else renderGame();
    }, renderSpeed);
  };

  const removeShipSection = () => {
    const elements = dom.getElements();

    elements.overlay.style.display = 'none';
    elements.sectionScreen.style.display = 'none';
    elements.shipGrid.innerHTML = '';
  };

  const startGame = () => {
    removeShipSection();

    activeGame.setupGame();
    addGameEvents();

    renderGame();
  };

  const renderSelectionGrid = () => {
    setTimeout(() => {
      const gameValue = activeGame.getGameValues();
      const checkBoardShips =
        gameValue.playerCheckBoard.getValues().currentShips;

      changeBlockSize(window.matchMedia);

      if (activeGame.checkSetup(gameValue.playerCheckBoard)) disableStarterUi();

      if (mouseBlockLocation) {
        let currentShip = activeGame.arrangeBlocks(mouseBlockLocation, axis);
        if (!currentShip && placedShip) {
          currentShip = moveShipByDirection(
            mouseBlockLocation,
            placedShip,
            axis
          );
        }

        if (currentShip) placedShip = currentShip;

        // console.log(placedShip, 'the current placed ship');

        if (placedShip) renderPlacedShip(blockSize);
      }

      if (!activeGame.checkSetup(checkBoardShips)) renderSelectionGrid();
      else startGame(blockSize);
    }, renderSpeed);
  };

  const getValues = () => ({
    blockSize,
    placedShip,
    axis,
    mouseBlockLocation,
  });

  const activateUi = () => {
    const pageContent = dom.getPage();
    document.body.innerHTML = pageContent;
    activeGame = Game();
    addUiEvents();
    removeEndingEvents();
    renderSelectionGrid();
  };

  return {
    activateUi,
    createBlockElement,
    getMousePosition,
    moveShipByDirection,
    changeBlockSize,
    changeAxis,
    getValues,
  };
};

export default Ui;
