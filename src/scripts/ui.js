import Dom from './dom.js';
import Position from './position.js';
import Ship from './ship.js';
import { activeGame } from './main.js';

const Ui = () => {
  const dom = Dom();
  const position = Position();
  const ship = Ship();

  const renderSpeed = 1;

  const blockSize = 42;

  let placedShip = false;
  let axis = 'y';

  let mouseBlockLocation = false;

  const createDomElement = (elementName) => document.createElement(elementName);

  const getMousePosition = (offsetX, offsetY) => {
    // console.log(offsetX, offsetY, 'offset x and offset y');

    const xCoord = Math.floor(offsetX / blockSize);
    const yCoord = Math.floor(offsetY / blockSize);

    const mousePosition = position.createPosition(xCoord, yCoord);

    if (xCoord < 0 || yCoord < 0) return false;

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
    const touchOffsetX = event.targetTouches[0].pageX - rect.left;
    const touchOffsetY = event.targetTouches[0].pageY - rect.top;

    const touchPosition = getMousePosition(touchOffsetX, touchOffsetY);
    mouseBlockLocation = touchPosition;

    event.preventDefault();
  };

  // block size matches the size gridsize of the media query divided by 10
  const changeBlockSize = (matchMedia) => {
    let blockSize = 42;
    if (matchMedia('(max-width: 960px)').matches) blockSize = 30;
    if (matchMedia('(max-width: 470px)').matches) blockSize = 21;
    if (matchMedia('(max-width: 320px)').matches) blockSize = 15;
    return blockSize;

    // console.log(matchMedia('(max-width: 320px)'), 'the current match media');
  };

  const createBlockElement = (blockClass, createBlock) => {
    let latestClass = blockClass;

    if (latestClass !== 'hitBlock' && latestClass !== 'missBlock') {
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

  const addShips = (ships, shipType, grid, latestBlockSize) => {
    ships.forEach((shipGroup) => {
      shipGroup.forEach((boat) => {
        const shipElement = createShipBlock(boat, latestBlockSize, shipType);
        grid.appendChild(shipElement);
      });
    });
  };

  const renderGrids = (blockSize2) => {
    const gameValues = activeGame.getGameValues();

    const { playerGrid } = dom.getElements();
    const { computerGrid } = dom.getElements();

    playerGrid.innerHTML = '';
    computerGrid.innerHTML = '';

    const playerBoardValues = gameValues.playerBoard.getValues();
    const computerBoardValues = gameValues.computerBoard.getValues();

    // console.log(playerBoardValues, 'playerBoardValues');
    // console.log(computerBoardValues, 'computerBoardValues');

    addShips(playerBoardValues.currentShips, false, playerGrid, blockSize2);
    addShips(playerBoardValues.hits, 'hitBlock', playerGrid, blockSize2);
    addShips(playerBoardValues.misses, 'missBlock', playerGrid, blockSize);

    addShips(computerBoardValues.hits, 'hitBlock', computerGrid, blockSize2);
    addShips(computerBoardValues.misses, 'missBlock', computerGrid, blockSize2);
  };

  const renderGame = (latestBlockSize) => {
    setTimeout(() => {
      const gameStatus = activeGame.gameIsOver();

      renderGrids(latestBlockSize);

      if (!gameStatus.gameFinished) renderGame(latestBlockSize);
    }, renderSpeed);
  };

  const removeShipSection = () => {
    const elements = dom.getElements();

    elements.overlay.style.display = 'none';
    elements.sectionScreen.style.display = 'none';
    elements.shipGrid.innerHTML = '';
  };

  const startGame = (latestBlockSize) => {
    removeShipSection();
    activeGame.setupGame();
    renderGame(latestBlockSize);
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

  const activateUi = () => {
    const pageContent = dom.getPage();
    document.body.innerHTML = pageContent;

    addUiEvents();
    renderSelectionGrid();
  };

  const getValues = () => ({
    blockSize,
    placedShip,
    axis,
    mouseBlockLocation,
  });

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
