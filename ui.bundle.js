"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["ui"],{

/***/ "./src/scripts/dom.js":
/*!****************************!*\
  !*** ./src/scripts/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_refreshLogo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/refreshLogo.svg */ "./src/images/refreshLogo.svg");


var Dom = function Dom() {
  var getElements = function getElements() {
    return {
      overlay: document.querySelector('.overlay'),
      sectionScreen: document.querySelector('.sectionScreen'),
      shipText: document.querySelector('.shipText'),
      shipGrid: document.querySelector('.shipGrid'),
      shipLayer: document.querySelector('.shipLayer'),
      rotateButton: document.querySelector('.rotateButton'),
      grids: Array.from(document.querySelectorAll('.grid')),
      hits: Array.from(document.querySelectorAll('.hits')),
      misses: Array.from(document.querySelectorAll('.misses')),
      playerGrid: document.querySelector('.playerGrid'),
      playerHits: document.querySelector('.playerHits'),
      playerMisses: document.querySelector('.playerMisses'),
      computerGrid: document.querySelector('.computerGrid'),
      computerHits: document.querySelector('.computerHits'),
      computerMisses: document.querySelector('.computerMisses'),
      content: document.querySelector('.content')
    };
  };

  var getPage = function getPage() {
    var content = "    <div class=\"content\">\n                            <div class=\"overlay\"></div>\n                            <div class=\"sectionScreen\">\n                              <div class=\"shipSelection\">\n                                <h1 class=\"shipTitle\">BATTLESHIP</h1>\n                                <h2 class=\"shipText\">Place your Battleship</h2>\n                                <div class=\"shipLayer\">\n                                  <div class=\"shipOverlay\"></div>\n                                  <div class=\"shipGrid\"></div>\n                              </div>\n                                <div class=\"rotateButton\">\n                                  <img\n                                    class=\"rotateImage\"\n                                    src=\"".concat(_images_refreshLogo_svg__WEBPACK_IMPORTED_MODULE_0__, "\"\n                                    alt=\"Rotate Image\"\n                                  />\n                                </div>\n                              </div>\n                            </div>\n\n                            <main class=\"mainSection\">\n                              <div class=\"mainTitle\"><h1>BATTLESHIP</h1></div>\n                              <div class=\"centerSection\">\n                                <div class=\"playerBoard board\">\n                                  <h2 class=\"boardTitle\">Player Board</h2>\n                                  <div class=\"playerGrid grid\"></div>\n                                  <div class=\"playerStats stats\">\n                                    <h2 class=\"playerHits hits\">Hits 0</h2>\n                                    <h2 class=\"playerMisses misses\">Misses 0</h2>\n                                  </div>\n                                </div>\n\n                                <div class=\"computerBoard board\">\n                                  <h2 class=\"boardTitle\">Computer Board</h2>\n\n                                  <div class=\"computerGrid grid\"></div>\n                                  <div class=\"computerStats stats\">\n                                    <h2 class=\"computerHits hits\">Hits 0</h2>\n\n                                    <h2 class=\"computerMisses misses\">Misses 0</h2>\n                                  </div>\n                                </div>\n                              </div>\n                            </main>\n                            <div class=\"footer\">\n                              <h2 class=\"copyrightMessage\">\n                                Website and code are made by Brayden Grotegut\n                              </h2>\n                            </div>\n                          </div>");
    return content;
  };

  return {
    getPage: getPage,
    getElements: getElements
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);

/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _position_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./position.js */ "./src/scripts/position.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/scripts/ship.js");
/* harmony import */ var _practical_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./practical.js */ "./src/scripts/practical.js");




var Gameboard = function Gameboard() {
  var position = (0,_position_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var practical = (0,_practical_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var currentShips = [];
  var hits = [];
  var misses = [];

  var randomize = function randomize() {
    return Math.floor(Math.random() * 10);
  };

  var randomAxis = function randomAxis() {
    var axies = ['x', 'y'];
    return axies[Math.floor(Math.random() * axies.length)];
  };

  var placeAllShips = function placeAllShips(shipsArray) {
    currentShips = shipsArray;
    return currentShips;
  };

  var compareShipsArray = function compareShipsArray(latestShipsArray, ships) {
    var shipsDoCollide = false; // console.log(latestShipsArray, 'the curreent ships array');
    // console.log(ships, 'the current ships');

    latestShipsArray.forEach(function (latestShips) {
      latestShips.forEach(function (boat) {
        ships.forEach(function (latestBoat) {
          if (position.comparePosition(boat, latestBoat)) {
            shipsDoCollide = true;
          }
        });
      });
    });
    return shipsDoCollide;
  };

  var playerPlaceShip = function playerPlaceShip(location, axis) {
    var latestPosition = location;
    var currentArray = practical.copyArray(currentShips);
    var shiplength = 5 - currentArray.length;
    if (shiplength === 2) shiplength = 3;
    if (shiplength === 1) shiplength = 2;
    var currentShip = ship.createShip(latestPosition, shiplength, axis);
    var isCollided = compareShipsArray(currentArray, currentShip);

    if (!isCollided && !currentArray.length === 5 && !currentShip) {
      currentArray.push(currentShip);
      currentShips = currentArray;
      return currentArray;
    }

    return currentArray;
  };

  var placeRandomShips = function placeRandomShips(length, shipsArray, randomizer, randomAxies) {
    var latestShipsArray = shipsArray;
    var latestLength = length;
    var randomPosition = position.createPosition(randomizer(), randomizer());
    var randomShip = ship.createShip(randomPosition, latestLength, randomAxies());

    if (randomShip) {
      var shipCollides = compareShipsArray(latestShipsArray, randomShip);

      if (!shipCollides) {
        if (latestLength > 2) latestLength -= 1;
        if (shipsArray.length < 5) latestShipsArray.push(randomShip);

        if (shipsArray.length === 5) {
          return latestShipsArray;
        }
      }
    }

    return placeRandomShips(latestLength, latestShipsArray, randomizer, randomAxies);
  };

  var placeShipsRandomly = function placeShipsRandomly(randomizer, randomAxies) {
    var shipsArray = placeRandomShips(5, [], randomizer, randomAxies);
    currentShips = shipsArray;
    return shipsArray;
  };

  var attackShip = function attackShip(latestPosition, ships, currentHits, currentMisses) {
    var isHit = false;
    var latestShipsArray = [];
    var latestHits = currentHits;
    var latestMisses = currentMisses;
    ships.forEach(function (shipArray) {
      var positionsArray = practical.copyArray(shipArray);
      var hit = ship.hit(positionsArray, latestPosition);

      if (hit.hitArray.length !== 0) {
        isHit = true;
        positionsArray = hit.shipArrays;
        latestHits.push(hit.hitArray[0]);
      }

      latestShipsArray.push(positionsArray);
    });
    if (!isHit) latestMisses.push(latestPosition);
    var finalObject = {
      isHit: isHit,
      latestShipsArray: latestShipsArray,
      latestHits: latestHits,
      latestMisses: latestMisses
    };
    return finalObject;
  };

  var recieveAttack = function recieveAttack(latestPosition) {
    var result = attackShip(latestPosition, currentShips, hits, misses);
    currentShips = result.latestShipsArray;
    hits = result.latestHits;
    misses = result.latestMisses;
    return result;
  };

  var createRandomCoords = function createRandomCoords(randomizer) {
    var randomPosition;

    if (randomizer.isMockRandom) {
      randomPosition = randomizer.callRandomizer();
    } else {
      var randomX = randomizer();
      var randomY = randomizer();
      randomPosition = position.createPosition(randomX, randomY);
    }

    return randomPosition;
  };

  var filterAttack = function filterAttack(array, currentAttack) {
    var currentAttackArray = array.filter(function (item) {
      return item.xCoord === currentAttack.xCoord && item.yCoord === currentAttack.yCoord;
    });
    return currentAttackArray;
  };

  var getTypeOfPlacedShip = function getTypeOfPlacedShip() {
    if (currentShips.length === 5) return false;
    var shipTypes = [{
      shipType: 'carrier',
      shipLength: 5
    }, {
      shipType: 'battleship',
      shipLength: 4
    }, {
      shipType: 'destoyer',
      shipLength: 3
    }, {
      shipType: 'submarine',
      shipLength: 3
    }, {
      shipType: 'gunboat',
      shipLength: 2
    }];
    return shipTypes[currentShips.length];
  };

  var recieveRandomAttack = function recieveRandomAttack(randomizer) {
    var randomPosition = createRandomCoords(randomizer);
    var hasBeenHit = filterAttack(hits, randomPosition);
    var hasBeenMiss = filterAttack(misses, randomPosition);

    if (hasBeenHit.length > 0 || hasBeenMiss.length > 0) {
      return recieveRandomAttack(randomizer);
    }

    return recieveAttack(randomPosition);
  };

  var isAllSunk = function isAllSunk() {
    var hasSunked = true;
    currentShips.forEach(function (ships) {
      if (!ship.isSunk(ships)) {
        hasSunked = false;
      }
    });
    return hasSunked;
  };

  var getValues = function getValues() {
    return {
      currentShips: currentShips,
      hits: hits,
      misses: misses
    };
  };

  return {
    attackShip: attackShip,
    recieveAttack: recieveAttack,
    isAllSunk: isAllSunk,
    placeShipsRandomly: placeShipsRandomly,
    playerPlaceShip: playerPlaceShip,
    placeAllShips: placeAllShips,
    randomize: randomize,
    recieveRandomAttack: recieveRandomAttack,
    randomAxis: randomAxis,
    getValues: getValues,
    getTypeOfPlacedShip: getTypeOfPlacedShip
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game),
/* harmony export */   "activeGame": () => (/* binding */ activeGame)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/scripts/gameboard.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/scripts/ship.js");
/* harmony import */ var _position_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./position.js */ "./src/scripts/position.js");




var Game = function Game() {
  var playerBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var computerBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var playerCheckBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var position = (0,_position_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var randomizer = computerBoard.randomize;
  var randomAxies = computerBoard.randomAxis;

  var checkSetup = function checkSetup(playerCheckShips) {
    if (playerCheckShips.length === 5) return true;
    return false;
  };

  var setupGame = function setupGame() {
    var playerCheckValues = playerCheckBoard.getValues();
    if (!checkSetup(playerCheckValues.currentShips)) return false;
    playerBoard.placeAllShips(playerCheckValues.currentShips);
    computerBoard.placeShipsRandomly(randomizer, randomAxies);
    return true;
  };

  var attackBoats = function attackBoats(coords) {
    var playerCheckValues = playerCheckBoard.getValues();
    if (!checkSetup(playerCheckValues.currentShips)) return false;
    computerBoard.recieveAttack(coords);
    playerBoard.recieveRandomAttack(randomizer);
    return true;
  };

  var setupShip = function setupShip(location, axis) {
    return playerCheckBoard.playerPlaceShip(location, axis);
  };

  var gameIsOver = function gameIsOver() {
    // console.log(playerBoardValues.currentShips, 'the current ships');
    if (computerBoard.isAllSunk()) {
      return {
        message: 'You Won',
        gameFinished: true
      };
    }

    if (playerBoard.isAllSunk()) {
      return {
        message: 'You Lost',
        gameFinished: true
      };
    }

    return {
      gameFinished: false
    };
  };

  var arrangeBlocks = function arrangeBlocks(mousePosition, currentRotation) {
    var shipTypeObject = playerCheckBoard.getTypeOfPlacedShip(); // console.log(shipTypeObject, 'the ship type object');
    // console.log(mousePosition, 'the mouse position');
    // console.log(currentRotation, 'the current rotation');

    var currentShip = ship.createShip(mousePosition, shipTypeObject.shipLength, currentRotation); // console.log(currentShip, 'the most up to date ships');

    return currentShip;
  };

  var getGameValues = function getGameValues() {
    return {
      playerBoard: playerBoard,
      computerBoard: computerBoard,
      playerCheckBoard: playerCheckBoard
    };
  };

  return {
    checkSetup: checkSetup,
    attackBoats: attackBoats,
    setupGame: setupGame,
    gameIsOver: gameIsOver,
    setupShip: setupShip,
    getGameValues: getGameValues,
    arrangeBlocks: arrangeBlocks
  };
};

var activeGame = Game();


/***/ }),

/***/ "./src/scripts/position.js":
/*!*********************************!*\
  !*** ./src/scripts/position.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Position = function Position() {
  var createPosition = function createPosition(xCoord, yCoord) {
    return {
      xCoord: xCoord,
      yCoord: yCoord
    };
  };

  var checkOutOfBounce = function checkOutOfBounce(newPosition) {
    if (newPosition.xCoord > 9 || newPosition.yCoord > 9) return true;
    if (newPosition.xCoord < 0 || newPosition.yCoord < 0) return true;
    return false;
  };

  var addPosition = function addPosition(position1, position2) {
    if (position1 === false || position2 === false) return false;
    var newPosition = createPosition(position1.xCoord, position1.yCoord);
    newPosition.xCoord += position2.xCoord;
    newPosition.yCoord += position2.yCoord;
    if (checkOutOfBounce(newPosition)) return false;
    return newPosition;
  };

  var multiplyPosition = function multiplyPosition(position1, position2) {
    if (position1 === false || position2 === false) return false;
    var newPosition = createPosition(position1.xCoord, position1.yCoord);
    newPosition.xCoord *= position2.xCoord;
    newPosition.yCoord *= position2.yCoord;
    if (checkOutOfBounce(newPosition)) return false;
    return newPosition;
  };

  var comparingPositionConditional = function comparingPositionConditional(position1, position2, axis) {
    if (position1[axis] === position2[axis] + 1) return true;
    if (position1[axis] === position2[axis]) return true;
    if (position1[axis] === position2[axis] - 1) return true;
    return false;
  };

  var comparePosition = function comparePosition(position1, position2) {
    if (!comparingPositionConditional(position1, position2, 'xCoord')) {
      return false;
    }

    if (!comparingPositionConditional(position1, position2, 'yCoord')) {
      return false;
    }

    return true;
  };

  return {
    createPosition: createPosition,
    addPosition: addPosition,
    multiplyPosition: multiplyPosition,
    comparePosition: comparePosition,
    checkOutOfBounce: checkOutOfBounce
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Position);

/***/ }),

/***/ "./src/scripts/practical.js":
/*!**********************************!*\
  !*** ./src/scripts/practical.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var Practical = function Practical() {
  var copyArray = function copyArray(array) {
    var newArray = [];
    array.forEach(function (item) {
      newArray.push(item);
    });
    return newArray;
  };

  var isObject = function isObject(currentObject) {
    if (_typeof(currentObject) === 'object' && currentObject !== null) {
      return true;
    }

    return false;
  };

  var checkObject = function checkObject(object1, object2) {
    var index = 0;
    var secondIndex = 0;
    var objectIsEqual = true;
    var currentObject = object1;
    var currentObject2 = object2;
    var currentObjectValues = Object.values(currentObject);
    var currentObject2Values = Object.values(currentObject2);
    var objectKeys = Object.keys(currentObject);
    var objectKeys2 = Object.keys(currentObject2);
    objectKeys.forEach(function (key) {
      if (key !== objectKeys2[index]) objectIsEqual = false;
      index += 1;
    });
    if (!objectIsEqual) return false;
    if (objectKeys.length !== objectKeys2.length) return false; // console.log(currentObject, 'the current object');
    // console.log(currentObject2, 'the current object2');

    currentObjectValues.forEach(function (item) {
      var item2 = currentObject2Values[secondIndex];

      if (isObject(item) && isObject(item2)) {
        var checkObjectBool = checkObject(item, item2);
        if (!checkObjectBool) objectIsEqual = false;
      } else if (item !== item2) {
        objectIsEqual = false;
      }

      secondIndex += 1;
    });
    return objectIsEqual;
  };

  return {
    copyArray: copyArray,
    checkObject: checkObject
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Practical);

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _position_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./position.js */ "./src/scripts/position.js");


var Ship = function Ship() {
  var position = (0,_position_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

  var getAddedPosition = function getAddedPosition(axis) {
    var addedPosition;
    if (axis === 'x') addedPosition = position.createPosition(1, 0);else addedPosition = position.createPosition(0, 1);
    return addedPosition;
  };

  var createShip = function createShip(position1, length1, axis) {
    if (length1 === 0 || length1 > 5) return false;
    if (position.checkOutOfBounce(position1)) return false;

    var populateShips = function populateShips(currentPosition, latestLength, latestArray) {
      var currentArray = latestArray;
      var newPosition = currentPosition;
      if (currentPosition === false) return false;
      if (latestLength === 0) return currentArray;

      if (latestLength === length1) {
        currentArray.push(currentPosition);
        return populateShips(currentPosition, latestLength - 1, currentArray);
      }

      var addedPosition = getAddedPosition(axis);
      newPosition = position.addPosition(newPosition, addedPosition);
      if (!newPosition) return newPosition;
      currentArray.push(newPosition);
      var arrayLength = currentArray.length - 1;
      return populateShips(currentArray[arrayLength], latestLength - 1, currentArray);
    };

    return populateShips(position1, length1, [], false);
  };

  var isSunk = function isSunk(shipArray) {
    if (shipArray.length === 0) return true;
    return false;
  };

  var hit = function hit(positionsArray, position) {
    var hitArray = positionsArray.filter(function (pos) {
      if (pos.xCoord === position.xCoord && pos.yCoord === position.yCoord) {
        return true;
      }

      return false;
    });
    var shipArrays = positionsArray.filter(function (pos) {
      if (pos.xCoord === position.xCoord && pos.yCoord === position.yCoord) {
        return false;
      }

      return true;
    });
    return {
      hitArray: hitArray,
      shipArrays: shipArrays
    };
  };

  return {
    createShip: createShip,
    hit: hit,
    isSunk: isSunk
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/scripts/ui.js":
/*!***************************!*\
  !*** ./src/scripts/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/scripts/dom.js");
/* harmony import */ var _position_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./position.js */ "./src/scripts/position.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship.js */ "./src/scripts/ship.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.js */ "./src/scripts/main.js");





var Ui = function Ui() {
  var dom = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var position = (0,_position_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var renderSpeed = 1;
  var blockSize = 42;
  var placedShip = false;
  var axis = 'y';
  var mouseBlockLocation = false;

  var createDomElement = function createDomElement(elementName) {
    return document.createElement(elementName);
  };

  var getMousePosition = function getMousePosition(offsetX, offsetY) {
    // console.log(offsetX, offsetY, 'offset x and offset y');
    var xCoord = Math.floor(offsetX / blockSize);
    var yCoord = Math.floor(offsetY / blockSize);
    var mousePosition = position.createPosition(xCoord, yCoord);
    if (xCoord < 0 || yCoord < 0) return false;
    return mousePosition;
  };

  var findMousePosition = function findMousePosition(event) {
    var currentMousePosition = getMousePosition(event.offsetX, event.offsetY);
    mouseBlockLocation = currentMousePosition; // console.log(currentMousePosition, 'the current mouse position');
  }; // wotk on this function


  var findTouchPosition = function findTouchPosition(event) {
    var rect = event.target.getBoundingClientRect();
    var touchOffsetX = event.targetTouches[0].pageX - rect.left;
    var touchOffsetY = event.targetTouches[0].pageY - rect.top;
    var touchPosition = getMousePosition(touchOffsetX, touchOffsetY);
    mouseBlockLocation = touchPosition;
    event.preventDefault();
  }; // block size matches the size gridsize of the media query divided by 10


  var changeBlockSize = function changeBlockSize(matchMedia) {
    var blockSize = 42;
    if (matchMedia('(max-width: 960px)').matches) blockSize = 30;
    if (matchMedia('(max-width: 470px)').matches) blockSize = 21;
    if (matchMedia('(max-width: 320px)').matches) blockSize = 15;
    return blockSize; // console.log(matchMedia('(max-width: 320px)'), 'the current match media');
  };

  var createBlockElement = function createBlockElement(blockClass, createBlock) {
    var latestClass = blockClass;

    if (latestClass !== 'hitBlock' && latestClass !== 'missBlock') {
      latestClass = '';
    }

    var blockElement = createBlock('div');
    blockElement.classList.add('block');
    if (latestClass !== '') blockElement.classList.add(latestClass);
    return blockElement;
  };

  var disableStarterUi = function disableStarterUi() {
    return true;
  }; // const renderSelectionBlocks = (mousePosition, latestBlockSize) => {
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


  var createShipBlock = function createShipBlock(shipPosition, latestBlockSize, shipType) {
    var shipBlock = createBlockElement(shipType, createDomElement);
    var realPositionX = Math.floor(shipPosition.xCoord * latestBlockSize);
    var realPositionY = Math.floor(shipPosition.yCoord * latestBlockSize);
    shipBlock.style.left = "".concat(realPositionX, "px");
    shipBlock.style.top = "".concat(realPositionY, "px");
    return shipBlock;
  };

  var renderAlreadyPlacedShips = function renderAlreadyPlacedShips(shipGrid, latestBlockSize) {
    var gameValues = _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.getGameValues();
    var checkBoardShips = gameValues.playerCheckBoard.getValues().currentShips;
    checkBoardShips.forEach(function (playerCheckShips) {
      playerCheckShips.forEach(function (boat) {
        var shipBlock = createShipBlock(boat, latestBlockSize);
        shipGrid.appendChild(shipBlock);
      });
    });
  };

  var renderPlacedShip = function renderPlacedShip(latestBlockSize) {
    var element = dom.getElements();
    var shipGrid = element.shipGrid;
    if (!placedShip) return placedShip;
    shipGrid.innerHTML = '';
    placedShip.forEach(function (shipPosition) {
      var shipBlock = createShipBlock(shipPosition, latestBlockSize);
      shipGrid.appendChild(shipBlock);
    });
    renderAlreadyPlacedShips(shipGrid, latestBlockSize);
  };

  var changeAxis = function changeAxis() {
    if (axis === 'y') axis = 'x';else axis = 'y';
  };

  var moveShipByDirection = function moveShipByDirection(mouseLocation, currentShip, currentAxis) {
    var latestShip = false;
    if (position.checkOutOfBounce(currentShip[0])) return latestShip;
    var newXPosition = position.createPosition(mouseLocation.xCoord, 0).xCoord;
    var newYPosition = position.createPosition(0, mouseLocation.yCoord).yCoord;
    var newShipPosition = position.createPosition(newXPosition, currentShip[0].yCoord);

    if (currentAxis === 'x') {
      newShipPosition = position.createPosition(currentShip[0].xCoord, newYPosition);
    }

    latestShip = ship.createShip(newShipPosition, currentShip.length, currentAxis);
    return latestShip;
  };

  var placePlayerShip = function placePlayerShip(latestShip, latestAxis, latestGame) {
    if (latestShip) latestGame.setupShip(latestShip[0], latestAxis);
    return false;
  };

  var placePlayerShipEvent = function placePlayerShipEvent() {
    placePlayerShip(placedShip, axis, _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame);
  };

  var addShips = function addShips(ships, shipType, grid, latestBlockSize) {
    ships.forEach(function (shipGroup) {
      shipGroup.forEach(function (boat) {
        var shipElement = createShipBlock(boat, latestBlockSize, shipType);
        grid.appendChild(shipElement);
      });
    });
  };

  var renderGrids = function renderGrids(blockSize2) {
    var gameValues = _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.getGameValues();

    var _dom$getElements = dom.getElements(),
        playerGrid = _dom$getElements.playerGrid;

    var _dom$getElements2 = dom.getElements(),
        computerGrid = _dom$getElements2.computerGrid;

    playerGrid.innerHTML = '';
    computerGrid.innerHTML = '';
    var playerBoardValues = gameValues.playerBoard.getValues();
    var computerBoardValues = gameValues.computerBoard.getValues(); // console.log(playerBoardValues, 'playerBoardValues');
    // console.log(computerBoardValues, 'computerBoardValues');

    addShips(playerBoardValues.currentShips, false, playerGrid, blockSize2);
    addShips(playerBoardValues.hits, 'hitBlock', playerGrid, blockSize2);
    addShips(playerBoardValues.misses, 'missBlock', playerGrid, blockSize);
    addShips(computerBoardValues.hits, 'hitBlock', computerGrid, blockSize2);
    addShips(computerBoardValues.misses, 'missBlock', computerGrid, blockSize2);
  };

  var renderGame = function renderGame(latestBlockSize) {
    setTimeout(function () {
      var gameStatus = _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.gameIsOver();
      renderGrids(latestBlockSize);
      if (!gameStatus.gameFinished) renderGame(latestBlockSize);
    }, renderSpeed);
  };

  var removeShipSection = function removeShipSection() {
    var elements = dom.getElements();
    elements.overlay.style.display = 'none';
    elements.sectionScreen.style.display = 'none';
    elements.shipGrid.innerHTML = '';
  };

  var startGame = function startGame(latestBlockSize) {
    removeShipSection();
    _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.setupGame();
    renderGame(latestBlockSize);
  };

  var renderSelectionGrid = function renderSelectionGrid() {
    setTimeout(function () {
      var gameValue = _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.getGameValues();
      var checkBoardShips = gameValue.playerCheckBoard.getValues().currentShips;
      changeBlockSize(window.matchMedia);
      if (_main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.checkSetup(gameValue.playerCheckBoard)) disableStarterUi();

      if (mouseBlockLocation) {
        var currentShip = _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.arrangeBlocks(mouseBlockLocation, axis);

        if (!currentShip && placedShip) {
          currentShip = moveShipByDirection(mouseBlockLocation, placedShip, axis);
        }

        if (currentShip) placedShip = currentShip; // console.log(placedShip, 'the current placed ship');

        if (placedShip) renderPlacedShip(blockSize);
      }

      if (!_main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.checkSetup(checkBoardShips)) renderSelectionGrid();else startGame(blockSize);
    }, renderSpeed);
  };

  var activateUi = function activateUi() {
    var pageContent = dom.getPage();
    document.body.innerHTML = pageContent;
    addUiEvents();
    renderSelectionGrid();
  };

  var getValues = function getValues() {
    return {
      blockSize: blockSize,
      placedShip: placedShip,
      axis: axis,
      mouseBlockLocation: mouseBlockLocation
    };
  };

  var addUiEvents = function addUiEvents() {
    var element = dom.getElements();
    element.shipLayer.addEventListener('mousemove', findMousePosition);
    element.shipLayer.addEventListener('touchmove', findTouchPosition);
    element.shipLayer.addEventListener('click', placePlayerShipEvent);
    element.rotateButton.addEventListener('click', changeAxis);
  };

  var removeUiEvents = function removeUiEvents() {
    var element = dom.getElements();
    element.shipLayer.removeEventListener('mousemove', findMousePosition);
    element.shipLayer.removeEventListener('touchmove', findTouchPosition);
    element.shipLayer.removeEventListener('click', placePlayerShipEvent);
    element.rotateButton.removeEventListener('click', changeAxis);
  };

  return {
    activateUi: activateUi,
    createBlockElement: createBlockElement,
    getMousePosition: getMousePosition,
    moveShipByDirection: moveShipByDirection,
    changeBlockSize: changeBlockSize,
    changeAxis: changeAxis,
    getValues: getValues
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ui);

/***/ }),

/***/ "./src/images/refreshLogo.svg":
/*!************************************!*\
  !*** ./src/images/refreshLogo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2527eb5cededc1d06632.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/ui.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UkQ7O0VBVUEsT0FBTztJQUNMOEIsVUFBVSxFQUFWQSxVQURLO0lBRUxwRCxrQkFBa0IsRUFBbEJBLGtCQUZLO0lBR0x0QixnQkFBZ0IsRUFBaEJBLGdCQUhLO0lBSUw2QyxtQkFBbUIsRUFBbkJBLG1CQUpLO0lBS0wxQixlQUFlLEVBQWZBLGVBTEs7SUFNTHlCLFVBQVUsRUFBVkEsVUFOSztJQU9MN0csU0FBUyxFQUFUQTtFQVBLLENBQVA7QUFTRCxDQTNURDs7QUE2VEEsaUVBQWV3RCxFQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcHJhY3RpY2FsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVmcmVzaGluZ0xvZ28gZnJvbSAnLi4vaW1hZ2VzL3JlZnJlc2hMb2dvLnN2Zyc7XG5cbmNvbnN0IERvbSA9ICgpID0+IHtcbiAgY29uc3QgZ2V0RWxlbWVudHMgPSAoKSA9PiAoe1xuICAgIG92ZXJsYXk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JyksXG4gICAgc2VjdGlvblNjcmVlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25TY3JlZW4nKSxcbiAgICBzaGlwVGV4dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBUZXh0JyksXG4gICAgc2hpcEdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwR3JpZCcpLFxuICAgIHNoaXBMYXllcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBMYXllcicpLFxuICAgIHJvdGF0ZUJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZUJ1dHRvbicpLFxuICAgIGdyaWRzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkJykpLFxuICAgIGhpdHM6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpdHMnKSksXG4gICAgbWlzc2VzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5taXNzZXMnKSksXG4gICAgcGxheWVyR3JpZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckdyaWQnKSxcbiAgICBwbGF5ZXJIaXRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVySGl0cycpLFxuICAgIHBsYXllck1pc3NlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllck1pc3NlcycpLFxuICAgIGNvbXB1dGVyR3JpZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyR3JpZCcpLFxuICAgIGNvbXB1dGVySGl0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVySGl0cycpLFxuICAgIGNvbXB1dGVyTWlzc2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXJNaXNzZXMnKSxcbiAgICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLFxuICB9KTtcblxuICBjb25zdCBnZXRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBTZWxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwic2hpcFRpdGxlXCI+QkFUVExFU0hJUDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInNoaXBUZXh0XCI+UGxhY2UgeW91ciBCYXR0bGVzaGlwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBMYXllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwT3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwR3JpZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3RhdGVCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdGF0ZUltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIiR7cmVmcmVzaGluZ0xvZ299XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlJvdGF0ZSBJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzPVwibWFpblNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluVGl0bGVcIj48aDE+QkFUVExFU0hJUDwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyQm9hcmQgYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJib2FyZFRpdGxlXCI+UGxheWVyIEJvYXJkPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyR3JpZCBncmlkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllclN0YXRzIHN0YXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwbGF5ZXJIaXRzIGhpdHNcIj5IaXRzIDA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicGxheWVyTWlzc2VzIG1pc3Nlc1wiPk1pc3NlcyAwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXB1dGVyQm9hcmQgYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJib2FyZFRpdGxlXCI+Q29tcHV0ZXIgQm9hcmQ8L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXB1dGVyR3JpZCBncmlkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXB1dGVyU3RhdHMgc3RhdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvbXB1dGVySGl0cyBoaXRzXCI+SGl0cyAwPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY29tcHV0ZXJNaXNzZXMgbWlzc2VzXCI+TWlzc2VzIDA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjb3B5cmlnaHRNZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlYnNpdGUgYW5kIGNvZGUgYXJlIG1hZGUgYnkgQnJheWRlbiBHcm90ZWd1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfTtcblxuICByZXR1cm4geyBnZXRQYWdlLCBnZXRFbGVtZW50cyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9tO1xuIiwiaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCBQcmFjdGljYWwgZnJvbSAnLi9wcmFjdGljYWwuanMnO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcbiAgY29uc3QgcHJhY3RpY2FsID0gUHJhY3RpY2FsKCk7XG5cbiAgbGV0IGN1cnJlbnRTaGlwcyA9IFtdO1xuICBsZXQgaGl0cyA9IFtdO1xuICBsZXQgbWlzc2VzID0gW107XG5cbiAgY29uc3QgcmFuZG9taXplID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gIGNvbnN0IHJhbmRvbUF4aXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXhpZXMgPSBbJ3gnLCAneSddO1xuICAgIHJldHVybiBheGllc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBheGllcy5sZW5ndGgpXTtcbiAgfTtcblxuICBjb25zdCBwbGFjZUFsbFNoaXBzID0gKHNoaXBzQXJyYXkpID0+IHtcbiAgICBjdXJyZW50U2hpcHMgPSBzaGlwc0FycmF5O1xuICAgIHJldHVybiBjdXJyZW50U2hpcHM7XG4gIH07XG5cbiAgY29uc3QgY29tcGFyZVNoaXBzQXJyYXkgPSAobGF0ZXN0U2hpcHNBcnJheSwgc2hpcHMpID0+IHtcbiAgICBsZXQgc2hpcHNEb0NvbGxpZGUgPSBmYWxzZTtcbiAgICAvLyBjb25zb2xlLmxvZyhsYXRlc3RTaGlwc0FycmF5LCAndGhlIGN1cnJlZW50IHNoaXBzIGFycmF5Jyk7XG4gICAgLy8gY29uc29sZS5sb2coc2hpcHMsICd0aGUgY3VycmVudCBzaGlwcycpO1xuXG4gICAgbGF0ZXN0U2hpcHNBcnJheS5mb3JFYWNoKChsYXRlc3RTaGlwcykgPT4ge1xuICAgICAgbGF0ZXN0U2hpcHMuZm9yRWFjaCgoYm9hdCkgPT4ge1xuICAgICAgICBzaGlwcy5mb3JFYWNoKChsYXRlc3RCb2F0KSA9PiB7XG4gICAgICAgICAgaWYgKHBvc2l0aW9uLmNvbXBhcmVQb3NpdGlvbihib2F0LCBsYXRlc3RCb2F0KSkge1xuICAgICAgICAgICAgc2hpcHNEb0NvbGxpZGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaGlwc0RvQ29sbGlkZTtcbiAgfTtcblxuICBjb25zdCBwbGF5ZXJQbGFjZVNoaXAgPSAobG9jYXRpb24sIGF4aXMpID0+IHtcbiAgICBjb25zdCBsYXRlc3RQb3NpdGlvbiA9IGxvY2F0aW9uO1xuICAgIGNvbnN0IGN1cnJlbnRBcnJheSA9IHByYWN0aWNhbC5jb3B5QXJyYXkoY3VycmVudFNoaXBzKTtcblxuICAgIGxldCBzaGlwbGVuZ3RoID0gNSAtIGN1cnJlbnRBcnJheS5sZW5ndGg7XG5cbiAgICBpZiAoc2hpcGxlbmd0aCA9PT0gMikgc2hpcGxlbmd0aCA9IDM7XG4gICAgaWYgKHNoaXBsZW5ndGggPT09IDEpIHNoaXBsZW5ndGggPSAyO1xuXG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAobGF0ZXN0UG9zaXRpb24sIHNoaXBsZW5ndGgsIGF4aXMpO1xuXG4gICAgY29uc3QgaXNDb2xsaWRlZCA9IGNvbXBhcmVTaGlwc0FycmF5KGN1cnJlbnRBcnJheSwgY3VycmVudFNoaXApO1xuXG4gICAgaWYgKCFpc0NvbGxpZGVkICYmICFjdXJyZW50QXJyYXkubGVuZ3RoID09PSA1ICYmICFjdXJyZW50U2hpcCkge1xuICAgICAgY3VycmVudEFycmF5LnB1c2goY3VycmVudFNoaXApO1xuICAgICAgY3VycmVudFNoaXBzID0gY3VycmVudEFycmF5O1xuICAgICAgcmV0dXJuIGN1cnJlbnRBcnJheTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudEFycmF5O1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUmFuZG9tU2hpcHMgPSAobGVuZ3RoLCBzaGlwc0FycmF5LCByYW5kb21pemVyLCByYW5kb21BeGllcykgPT4ge1xuICAgIGNvbnN0IGxhdGVzdFNoaXBzQXJyYXkgPSBzaGlwc0FycmF5O1xuICAgIGxldCBsYXRlc3RMZW5ndGggPSBsZW5ndGg7XG4gICAgY29uc3QgcmFuZG9tUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihyYW5kb21pemVyKCksIHJhbmRvbWl6ZXIoKSk7XG4gICAgY29uc3QgcmFuZG9tU2hpcCA9IHNoaXAuY3JlYXRlU2hpcChcbiAgICAgIHJhbmRvbVBvc2l0aW9uLFxuICAgICAgbGF0ZXN0TGVuZ3RoLFxuICAgICAgcmFuZG9tQXhpZXMoKVxuICAgICk7XG5cbiAgICBpZiAocmFuZG9tU2hpcCkge1xuICAgICAgY29uc3Qgc2hpcENvbGxpZGVzID0gY29tcGFyZVNoaXBzQXJyYXkobGF0ZXN0U2hpcHNBcnJheSwgcmFuZG9tU2hpcCk7XG4gICAgICBpZiAoIXNoaXBDb2xsaWRlcykge1xuICAgICAgICBpZiAobGF0ZXN0TGVuZ3RoID4gMikgbGF0ZXN0TGVuZ3RoIC09IDE7XG4gICAgICAgIGlmIChzaGlwc0FycmF5Lmxlbmd0aCA8IDUpIGxhdGVzdFNoaXBzQXJyYXkucHVzaChyYW5kb21TaGlwKTtcblxuICAgICAgICBpZiAoc2hpcHNBcnJheS5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICByZXR1cm4gbGF0ZXN0U2hpcHNBcnJheTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwbGFjZVJhbmRvbVNoaXBzKFxuICAgICAgbGF0ZXN0TGVuZ3RoLFxuICAgICAgbGF0ZXN0U2hpcHNBcnJheSxcbiAgICAgIHJhbmRvbWl6ZXIsXG4gICAgICByYW5kb21BeGllc1xuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwc1JhbmRvbWx5ID0gKHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKSA9PiB7XG4gICAgY29uc3Qgc2hpcHNBcnJheSA9IHBsYWNlUmFuZG9tU2hpcHMoNSwgW10sIHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKTtcbiAgICBjdXJyZW50U2hpcHMgPSBzaGlwc0FycmF5O1xuXG4gICAgcmV0dXJuIHNoaXBzQXJyYXk7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrU2hpcCA9IChsYXRlc3RQb3NpdGlvbiwgc2hpcHMsIGN1cnJlbnRIaXRzLCBjdXJyZW50TWlzc2VzKSA9PiB7XG4gICAgbGV0IGlzSGl0ID0gZmFsc2U7XG4gICAgY29uc3QgbGF0ZXN0U2hpcHNBcnJheSA9IFtdO1xuICAgIGNvbnN0IGxhdGVzdEhpdHMgPSBjdXJyZW50SGl0cztcbiAgICBjb25zdCBsYXRlc3RNaXNzZXMgPSBjdXJyZW50TWlzc2VzO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcEFycmF5KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb25zQXJyYXkgPSBwcmFjdGljYWwuY29weUFycmF5KHNoaXBBcnJheSk7XG4gICAgICBjb25zdCBoaXQgPSBzaGlwLmhpdChwb3NpdGlvbnNBcnJheSwgbGF0ZXN0UG9zaXRpb24pO1xuXG4gICAgICBpZiAoaGl0LmhpdEFycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpc0hpdCA9IHRydWU7XG4gICAgICAgIHBvc2l0aW9uc0FycmF5ID0gaGl0LnNoaXBBcnJheXM7XG4gICAgICAgIGxhdGVzdEhpdHMucHVzaChoaXQuaGl0QXJyYXlbMF0pO1xuICAgICAgfVxuICAgICAgbGF0ZXN0U2hpcHNBcnJheS5wdXNoKHBvc2l0aW9uc0FycmF5KTtcbiAgICB9KTtcbiAgICBpZiAoIWlzSGl0KSBsYXRlc3RNaXNzZXMucHVzaChsYXRlc3RQb3NpdGlvbik7XG5cbiAgICBjb25zdCBmaW5hbE9iamVjdCA9IHtcbiAgICAgIGlzSGl0LFxuICAgICAgbGF0ZXN0U2hpcHNBcnJheSxcbiAgICAgIGxhdGVzdEhpdHMsXG4gICAgICBsYXRlc3RNaXNzZXMsXG4gICAgfTtcblxuICAgIHJldHVybiBmaW5hbE9iamVjdDtcbiAgfTtcblxuICBjb25zdCByZWNpZXZlQXR0YWNrID0gKGxhdGVzdFBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXR0YWNrU2hpcChsYXRlc3RQb3NpdGlvbiwgY3VycmVudFNoaXBzLCBoaXRzLCBtaXNzZXMpO1xuXG4gICAgY3VycmVudFNoaXBzID0gcmVzdWx0LmxhdGVzdFNoaXBzQXJyYXk7XG4gICAgaGl0cyA9IHJlc3VsdC5sYXRlc3RIaXRzO1xuICAgIG1pc3NlcyA9IHJlc3VsdC5sYXRlc3RNaXNzZXM7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVJhbmRvbUNvb3JkcyA9IChyYW5kb21pemVyKSA9PiB7XG4gICAgbGV0IHJhbmRvbVBvc2l0aW9uO1xuXG4gICAgaWYgKHJhbmRvbWl6ZXIuaXNNb2NrUmFuZG9tKSB7XG4gICAgICByYW5kb21Qb3NpdGlvbiA9IHJhbmRvbWl6ZXIuY2FsbFJhbmRvbWl6ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmFuZG9tWCA9IHJhbmRvbWl6ZXIoKTtcbiAgICAgIGNvbnN0IHJhbmRvbVkgPSByYW5kb21pemVyKCk7XG4gICAgICByYW5kb21Qb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHJhbmRvbVgsIHJhbmRvbVkpO1xuICAgIH1cblxuICAgIHJldHVybiByYW5kb21Qb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJBdHRhY2sgPSAoYXJyYXksIGN1cnJlbnRBdHRhY2spID0+IHtcbiAgICBjb25zdCBjdXJyZW50QXR0YWNrQXJyYXkgPSBhcnJheS5maWx0ZXIoXG4gICAgICAoaXRlbSkgPT5cbiAgICAgICAgaXRlbS54Q29vcmQgPT09IGN1cnJlbnRBdHRhY2sueENvb3JkICYmXG4gICAgICAgIGl0ZW0ueUNvb3JkID09PSBjdXJyZW50QXR0YWNrLnlDb29yZFxuICAgICk7XG5cbiAgICByZXR1cm4gY3VycmVudEF0dGFja0FycmF5O1xuICB9O1xuXG4gIGNvbnN0IGdldFR5cGVPZlBsYWNlZFNoaXAgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRTaGlwcy5sZW5ndGggPT09IDUpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHNoaXBUeXBlcyA9IFtcbiAgICAgIHsgc2hpcFR5cGU6ICdjYXJyaWVyJywgc2hpcExlbmd0aDogNSB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2JhdHRsZXNoaXAnLCBzaGlwTGVuZ3RoOiA0IH0sXG4gICAgICB7IHNoaXBUeXBlOiAnZGVzdG95ZXInLCBzaGlwTGVuZ3RoOiAzIH0sXG4gICAgICB7IHNoaXBUeXBlOiAnc3VibWFyaW5lJywgc2hpcExlbmd0aDogMyB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2d1bmJvYXQnLCBzaGlwTGVuZ3RoOiAyIH0sXG4gICAgXTtcblxuICAgIHJldHVybiBzaGlwVHlwZXNbY3VycmVudFNoaXBzLmxlbmd0aF07XG4gIH07XG5cbiAgY29uc3QgcmVjaWV2ZVJhbmRvbUF0dGFjayA9IChyYW5kb21pemVyKSA9PiB7XG4gICAgY29uc3QgcmFuZG9tUG9zaXRpb24gPSBjcmVhdGVSYW5kb21Db29yZHMocmFuZG9taXplcik7XG5cbiAgICBjb25zdCBoYXNCZWVuSGl0ID0gZmlsdGVyQXR0YWNrKGhpdHMsIHJhbmRvbVBvc2l0aW9uKTtcbiAgICBjb25zdCBoYXNCZWVuTWlzcyA9IGZpbHRlckF0dGFjayhtaXNzZXMsIHJhbmRvbVBvc2l0aW9uKTtcblxuICAgIGlmIChoYXNCZWVuSGl0Lmxlbmd0aCA+IDAgfHwgaGFzQmVlbk1pc3MubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHJlY2lldmVSYW5kb21BdHRhY2socmFuZG9taXplcik7XG4gICAgfVxuICAgIHJldHVybiByZWNpZXZlQXR0YWNrKHJhbmRvbVBvc2l0aW9uKTtcbiAgfTtcblxuICBjb25zdCBpc0FsbFN1bmsgPSAoKSA9PiB7XG4gICAgbGV0IGhhc1N1bmtlZCA9IHRydWU7XG4gICAgY3VycmVudFNoaXBzLmZvckVhY2goKHNoaXBzKSA9PiB7XG4gICAgICBpZiAoIXNoaXAuaXNTdW5rKHNoaXBzKSkge1xuICAgICAgICBoYXNTdW5rZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBoYXNTdW5rZWQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsdWVzID0gKCkgPT4gKHtcbiAgICBjdXJyZW50U2hpcHMsXG4gICAgaGl0cyxcbiAgICBtaXNzZXMsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgYXR0YWNrU2hpcCxcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIGlzQWxsU3VuayxcbiAgICBwbGFjZVNoaXBzUmFuZG9tbHksXG4gICAgcGxheWVyUGxhY2VTaGlwLFxuICAgIHBsYWNlQWxsU2hpcHMsXG4gICAgcmFuZG9taXplLFxuICAgIHJlY2lldmVSYW5kb21BdHRhY2ssXG4gICAgcmFuZG9tQXhpcyxcbiAgICBnZXRWYWx1ZXMsXG4gICAgZ2V0VHlwZU9mUGxhY2VkU2hpcCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcblxuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuXG5jb25zdCBHYW1lID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IHBsYXllckNoZWNrQm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG5cbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcblxuICBjb25zdCByYW5kb21pemVyID0gY29tcHV0ZXJCb2FyZC5yYW5kb21pemU7XG4gIGNvbnN0IHJhbmRvbUF4aWVzID0gY29tcHV0ZXJCb2FyZC5yYW5kb21BeGlzO1xuXG4gIGNvbnN0IGNoZWNrU2V0dXAgPSAocGxheWVyQ2hlY2tTaGlwcykgPT4ge1xuICAgIGlmIChwbGF5ZXJDaGVja1NoaXBzLmxlbmd0aCA9PT0gNSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwR2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJDaGVja1ZhbHVlcyA9IHBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCk7XG5cbiAgICBpZiAoIWNoZWNrU2V0dXAocGxheWVyQ2hlY2tWYWx1ZXMuY3VycmVudFNoaXBzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcGxheWVyQm9hcmQucGxhY2VBbGxTaGlwcyhwbGF5ZXJDaGVja1ZhbHVlcy5jdXJyZW50U2hpcHMpO1xuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tCb2F0cyA9IChjb29yZHMpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJDaGVja1ZhbHVlcyA9IHBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCk7XG5cbiAgICBpZiAoIWNoZWNrU2V0dXAocGxheWVyQ2hlY2tWYWx1ZXMuY3VycmVudFNoaXBzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5yZWNpZXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgcGxheWVyQm9hcmQucmVjaWV2ZVJhbmRvbUF0dGFjayhyYW5kb21pemVyKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwU2hpcCA9IChsb2NhdGlvbiwgYXhpcykgPT5cbiAgICBwbGF5ZXJDaGVja0JvYXJkLnBsYXllclBsYWNlU2hpcChsb2NhdGlvbiwgYXhpcyk7XG5cbiAgY29uc3QgZ2FtZUlzT3ZlciA9ICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJCb2FyZFZhbHVlcy5jdXJyZW50U2hpcHMsICd0aGUgY3VycmVudCBzaGlwcycpO1xuXG4gICAgaWYgKGNvbXB1dGVyQm9hcmQuaXNBbGxTdW5rKCkpIHtcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdZb3UgV29uJywgZ2FtZUZpbmlzaGVkOiB0cnVlIH07XG4gICAgfVxuXG4gICAgaWYgKHBsYXllckJvYXJkLmlzQWxsU3VuaygpKSB7XG4gICAgICByZXR1cm4geyBtZXNzYWdlOiAnWW91IExvc3QnLCBnYW1lRmluaXNoZWQ6IHRydWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZ2FtZUZpbmlzaGVkOiBmYWxzZSB9O1xuICB9O1xuXG4gIGNvbnN0IGFycmFuZ2VCbG9ja3MgPSAobW91c2VQb3NpdGlvbiwgY3VycmVudFJvdGF0aW9uKSA9PiB7XG4gICAgY29uc3Qgc2hpcFR5cGVPYmplY3QgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFR5cGVPZlBsYWNlZFNoaXAoKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHNoaXBUeXBlT2JqZWN0LCAndGhlIHNoaXAgdHlwZSBvYmplY3QnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhtb3VzZVBvc2l0aW9uLCAndGhlIG1vdXNlIHBvc2l0aW9uJyk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFJvdGF0aW9uLCAndGhlIGN1cnJlbnQgcm90YXRpb24nKTtcblxuICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgbW91c2VQb3NpdGlvbixcbiAgICAgIHNoaXBUeXBlT2JqZWN0LnNoaXBMZW5ndGgsXG4gICAgICBjdXJyZW50Um90YXRpb25cbiAgICApO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRTaGlwLCAndGhlIG1vc3QgdXAgdG8gZGF0ZSBzaGlwcycpO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRTaGlwO1xuICB9O1xuXG4gIGNvbnN0IGdldEdhbWVWYWx1ZXMgPSAoKSA9PiAoe1xuICAgIHBsYXllckJvYXJkLFxuICAgIGNvbXB1dGVyQm9hcmQsXG4gICAgcGxheWVyQ2hlY2tCb2FyZCxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjaGVja1NldHVwLFxuICAgIGF0dGFja0JvYXRzLFxuICAgIHNldHVwR2FtZSxcbiAgICBnYW1lSXNPdmVyLFxuICAgIHNldHVwU2hpcCxcbiAgICBnZXRHYW1lVmFsdWVzLFxuICAgIGFycmFuZ2VCbG9ja3MsXG4gIH07XG59O1xuXG5jb25zdCBhY3RpdmVHYW1lID0gR2FtZSgpO1xuXG5leHBvcnQgeyBHYW1lLCBhY3RpdmVHYW1lIH07XG4iLCJjb25zdCBQb3NpdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgY3JlYXRlUG9zaXRpb24gPSAoeENvb3JkLCB5Q29vcmQpID0+ICh7IHhDb29yZCwgeUNvb3JkIH0pO1xuXG4gIGNvbnN0IGNoZWNrT3V0T2ZCb3VuY2UgPSAobmV3UG9zaXRpb24pID0+IHtcbiAgICBpZiAobmV3UG9zaXRpb24ueENvb3JkID4gOSB8fCBuZXdQb3NpdGlvbi55Q29vcmQgPiA5KSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAobmV3UG9zaXRpb24ueENvb3JkIDwgMCB8fCBuZXdQb3NpdGlvbi55Q29vcmQgPCAwKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYWRkUG9zaXRpb24gPSAocG9zaXRpb24xLCBwb3NpdGlvbjIpID0+IHtcbiAgICBpZiAocG9zaXRpb24xID09PSBmYWxzZSB8fCBwb3NpdGlvbjIgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGNyZWF0ZVBvc2l0aW9uKHBvc2l0aW9uMS54Q29vcmQsIHBvc2l0aW9uMS55Q29vcmQpO1xuICAgIG5ld1Bvc2l0aW9uLnhDb29yZCArPSBwb3NpdGlvbjIueENvb3JkO1xuICAgIG5ld1Bvc2l0aW9uLnlDb29yZCArPSBwb3NpdGlvbjIueUNvb3JkO1xuXG4gICAgaWYgKGNoZWNrT3V0T2ZCb3VuY2UobmV3UG9zaXRpb24pKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gbmV3UG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgbXVsdGlwbHlQb3NpdGlvbiA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMikgPT4ge1xuICAgIGlmIChwb3NpdGlvbjEgPT09IGZhbHNlIHx8IHBvc2l0aW9uMiA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gY3JlYXRlUG9zaXRpb24ocG9zaXRpb24xLnhDb29yZCwgcG9zaXRpb24xLnlDb29yZCk7XG4gICAgbmV3UG9zaXRpb24ueENvb3JkICo9IHBvc2l0aW9uMi54Q29vcmQ7XG4gICAgbmV3UG9zaXRpb24ueUNvb3JkICo9IHBvc2l0aW9uMi55Q29vcmQ7XG5cbiAgICBpZiAoY2hlY2tPdXRPZkJvdW5jZShuZXdQb3NpdGlvbikpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBuZXdQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yLCBheGlzKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uMVtheGlzXSA9PT0gcG9zaXRpb24yW2F4aXNdICsgMSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHBvc2l0aW9uMVtheGlzXSA9PT0gcG9zaXRpb24yW2F4aXNdKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAocG9zaXRpb24xW2F4aXNdID09PSBwb3NpdGlvbjJbYXhpc10gLSAxKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgY29tcGFyZVBvc2l0aW9uID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yKSA9PiB7XG4gICAgaWYgKCFjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsKHBvc2l0aW9uMSwgcG9zaXRpb24yLCAneENvb3JkJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsKHBvc2l0aW9uMSwgcG9zaXRpb24yLCAneUNvb3JkJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVQb3NpdGlvbixcbiAgICBhZGRQb3NpdGlvbixcbiAgICBtdWx0aXBseVBvc2l0aW9uLFxuICAgIGNvbXBhcmVQb3NpdGlvbixcbiAgICBjaGVja091dE9mQm91bmNlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zaXRpb247XG4iLCJjb25zdCBQcmFjdGljYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNvcHlBcnJheSA9IChhcnJheSkgPT4ge1xuICAgIGNvbnN0IG5ld0FycmF5ID0gW107XG5cbiAgICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBuZXdBcnJheS5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld0FycmF5O1xuICB9O1xuXG4gIGNvbnN0IGlzT2JqZWN0ID0gKGN1cnJlbnRPYmplY3QpID0+IHtcbiAgICBpZiAodHlwZW9mIGN1cnJlbnRPYmplY3QgPT09ICdvYmplY3QnICYmIGN1cnJlbnRPYmplY3QgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tPYmplY3QgPSAob2JqZWN0MSwgb2JqZWN0MikgPT4ge1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IHNlY29uZEluZGV4ID0gMDtcblxuICAgIGxldCBvYmplY3RJc0VxdWFsID0gdHJ1ZTtcblxuICAgIGNvbnN0IGN1cnJlbnRPYmplY3QgPSBvYmplY3QxO1xuICAgIGNvbnN0IGN1cnJlbnRPYmplY3QyID0gb2JqZWN0MjtcblxuICAgIGNvbnN0IGN1cnJlbnRPYmplY3RWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGN1cnJlbnRPYmplY3QpO1xuICAgIGNvbnN0IGN1cnJlbnRPYmplY3QyVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50T2JqZWN0Mik7XG5cbiAgICBjb25zdCBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMoY3VycmVudE9iamVjdCk7XG4gICAgY29uc3Qgb2JqZWN0S2V5czIgPSBPYmplY3Qua2V5cyhjdXJyZW50T2JqZWN0Mik7XG5cbiAgICBvYmplY3RLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGtleSAhPT0gb2JqZWN0S2V5czJbaW5kZXhdKSBvYmplY3RJc0VxdWFsID0gZmFsc2U7XG4gICAgICBpbmRleCArPSAxO1xuICAgIH0pO1xuXG4gICAgaWYgKCFvYmplY3RJc0VxdWFsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG9iamVjdEtleXMubGVuZ3RoICE9PSBvYmplY3RLZXlzMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRPYmplY3QsICd0aGUgY3VycmVudCBvYmplY3QnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50T2JqZWN0MiwgJ3RoZSBjdXJyZW50IG9iamVjdDInKTtcblxuICAgIGN1cnJlbnRPYmplY3RWYWx1ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgaXRlbTIgPSBjdXJyZW50T2JqZWN0MlZhbHVlc1tzZWNvbmRJbmRleF07XG5cbiAgICAgIGlmIChpc09iamVjdChpdGVtKSAmJiBpc09iamVjdChpdGVtMikpIHtcbiAgICAgICAgY29uc3QgY2hlY2tPYmplY3RCb29sID0gY2hlY2tPYmplY3QoaXRlbSwgaXRlbTIpO1xuXG4gICAgICAgIGlmICghY2hlY2tPYmplY3RCb29sKSBvYmplY3RJc0VxdWFsID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0gIT09IGl0ZW0yKSB7XG4gICAgICAgIG9iamVjdElzRXF1YWwgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgc2Vjb25kSW5kZXggKz0gMTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmplY3RJc0VxdWFsO1xuICB9O1xuXG4gIHJldHVybiB7IGNvcHlBcnJheSwgY2hlY2tPYmplY3QgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByYWN0aWNhbDtcbiIsImltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uLmpzJztcblxuY29uc3QgU2hpcCA9ICgpID0+IHtcbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuXG4gIGNvbnN0IGdldEFkZGVkUG9zaXRpb24gPSAoYXhpcykgPT4ge1xuICAgIGxldCBhZGRlZFBvc2l0aW9uO1xuXG4gICAgaWYgKGF4aXMgPT09ICd4JykgYWRkZWRQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKDEsIDApO1xuICAgIGVsc2UgYWRkZWRQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKDAsIDEpO1xuXG4gICAgcmV0dXJuIGFkZGVkUG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlU2hpcCA9IChwb3NpdGlvbjEsIGxlbmd0aDEsIGF4aXMpID0+IHtcbiAgICBpZiAobGVuZ3RoMSA9PT0gMCB8fCBsZW5ndGgxID4gNSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwb3NpdGlvbi5jaGVja091dE9mQm91bmNlKHBvc2l0aW9uMSkpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHBvcHVsYXRlU2hpcHMgPSAoY3VycmVudFBvc2l0aW9uLCBsYXRlc3RMZW5ndGgsIGxhdGVzdEFycmF5KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50QXJyYXkgPSBsYXRlc3RBcnJheTtcbiAgICAgIGxldCBuZXdQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbjtcblxuICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbiA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmIChsYXRlc3RMZW5ndGggPT09IDApIHJldHVybiBjdXJyZW50QXJyYXk7XG4gICAgICBpZiAobGF0ZXN0TGVuZ3RoID09PSBsZW5ndGgxKSB7XG4gICAgICAgIGN1cnJlbnRBcnJheS5wdXNoKGN1cnJlbnRQb3NpdGlvbik7XG4gICAgICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKGN1cnJlbnRQb3NpdGlvbiwgbGF0ZXN0TGVuZ3RoIC0gMSwgY3VycmVudEFycmF5KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFkZGVkUG9zaXRpb24gPSBnZXRBZGRlZFBvc2l0aW9uKGF4aXMpO1xuICAgICAgbmV3UG9zaXRpb24gPSBwb3NpdGlvbi5hZGRQb3NpdGlvbihuZXdQb3NpdGlvbiwgYWRkZWRQb3NpdGlvbik7XG5cbiAgICAgIGlmICghbmV3UG9zaXRpb24pIHJldHVybiBuZXdQb3NpdGlvbjtcbiAgICAgIGN1cnJlbnRBcnJheS5wdXNoKG5ld1Bvc2l0aW9uKTtcblxuICAgICAgY29uc3QgYXJyYXlMZW5ndGggPSBjdXJyZW50QXJyYXkubGVuZ3RoIC0gMTtcblxuICAgICAgcmV0dXJuIHBvcHVsYXRlU2hpcHMoXG4gICAgICAgIGN1cnJlbnRBcnJheVthcnJheUxlbmd0aF0sXG4gICAgICAgIGxhdGVzdExlbmd0aCAtIDEsXG4gICAgICAgIGN1cnJlbnRBcnJheVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHBvcHVsYXRlU2hpcHMocG9zaXRpb24xLCBsZW5ndGgxLCBbXSwgZmFsc2UpO1xuICB9O1xuXG5cblxuICBjb25zdCBpc1N1bmsgPSAoc2hpcEFycmF5KSA9PiB7XG4gICAgaWYgKHNoaXBBcnJheS5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBoaXQgPSAocG9zaXRpb25zQXJyYXksIHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgaGl0QXJyYXkgPSBwb3NpdGlvbnNBcnJheS5maWx0ZXIoKHBvcykgPT4ge1xuICAgICAgaWYgKHBvcy54Q29vcmQgPT09IHBvc2l0aW9uLnhDb29yZCAmJiBwb3MueUNvb3JkID09PSBwb3NpdGlvbi55Q29vcmQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgY29uc3Qgc2hpcEFycmF5cyA9IHBvc2l0aW9uc0FycmF5LmZpbHRlcigocG9zKSA9PiB7XG4gICAgICBpZiAocG9zLnhDb29yZCA9PT0gcG9zaXRpb24ueENvb3JkICYmIHBvcy55Q29vcmQgPT09IHBvc2l0aW9uLnlDb29yZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IGhpdEFycmF5LCBzaGlwQXJyYXlzIH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVTaGlwLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0IERvbSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IHsgYWN0aXZlR2FtZSB9IGZyb20gJy4vbWFpbi5qcyc7XG5cbmNvbnN0IFVpID0gKCkgPT4ge1xuICBjb25zdCBkb20gPSBEb20oKTtcbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuICBjb25zdCBzaGlwID0gU2hpcCgpO1xuXG4gIGNvbnN0IHJlbmRlclNwZWVkID0gMTtcblxuICBjb25zdCBibG9ja1NpemUgPSA0MjtcblxuICBsZXQgcGxhY2VkU2hpcCA9IGZhbHNlO1xuICBsZXQgYXhpcyA9ICd5JztcblxuICBsZXQgbW91c2VCbG9ja0xvY2F0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgY3JlYXRlRG9tRWxlbWVudCA9IChlbGVtZW50TmFtZSkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XG5cbiAgY29uc3QgZ2V0TW91c2VQb3NpdGlvbiA9IChvZmZzZXRYLCBvZmZzZXRZKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cob2Zmc2V0WCwgb2Zmc2V0WSwgJ29mZnNldCB4IGFuZCBvZmZzZXQgeScpO1xuXG4gICAgY29uc3QgeENvb3JkID0gTWF0aC5mbG9vcihvZmZzZXRYIC8gYmxvY2tTaXplKTtcbiAgICBjb25zdCB5Q29vcmQgPSBNYXRoLmZsb29yKG9mZnNldFkgLyBibG9ja1NpemUpO1xuXG4gICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHhDb29yZCwgeUNvb3JkKTtcblxuICAgIGlmICh4Q29vcmQgPCAwIHx8IHlDb29yZCA8IDApIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBtb3VzZVBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGZpbmRNb3VzZVBvc2l0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY3VycmVudE1vdXNlUG9zaXRpb24gPSBnZXRNb3VzZVBvc2l0aW9uKGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuXG4gICAgbW91c2VCbG9ja0xvY2F0aW9uID0gY3VycmVudE1vdXNlUG9zaXRpb247XG5cbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50TW91c2VQb3NpdGlvbiwgJ3RoZSBjdXJyZW50IG1vdXNlIHBvc2l0aW9uJyk7XG4gIH07XG5cbiAgLy8gd290ayBvbiB0aGlzIGZ1bmN0aW9uXG4gIGNvbnN0IGZpbmRUb3VjaFBvc2l0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB0b3VjaE9mZnNldFggPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgIGNvbnN0IHRvdWNoT2Zmc2V0WSA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgLSByZWN0LnRvcDtcblxuICAgIGNvbnN0IHRvdWNoUG9zaXRpb24gPSBnZXRNb3VzZVBvc2l0aW9uKHRvdWNoT2Zmc2V0WCwgdG91Y2hPZmZzZXRZKTtcbiAgICBtb3VzZUJsb2NrTG9jYXRpb24gPSB0b3VjaFBvc2l0aW9uO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICAvLyBibG9jayBzaXplIG1hdGNoZXMgdGhlIHNpemUgZ3JpZHNpemUgb2YgdGhlIG1lZGlhIHF1ZXJ5IGRpdmlkZWQgYnkgMTBcbiAgY29uc3QgY2hhbmdlQmxvY2tTaXplID0gKG1hdGNoTWVkaWEpID0+IHtcbiAgICBsZXQgYmxvY2tTaXplID0gNDI7XG4gICAgaWYgKG1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDk2MHB4KScpLm1hdGNoZXMpIGJsb2NrU2l6ZSA9IDMwO1xuICAgIGlmIChtYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA0NzBweCknKS5tYXRjaGVzKSBibG9ja1NpemUgPSAyMTtcbiAgICBpZiAobWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMzIwcHgpJykubWF0Y2hlcykgYmxvY2tTaXplID0gMTU7XG4gICAgcmV0dXJuIGJsb2NrU2l6ZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDMyMHB4KScpLCAndGhlIGN1cnJlbnQgbWF0Y2ggbWVkaWEnKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVCbG9ja0VsZW1lbnQgPSAoYmxvY2tDbGFzcywgY3JlYXRlQmxvY2spID0+IHtcbiAgICBsZXQgbGF0ZXN0Q2xhc3MgPSBibG9ja0NsYXNzO1xuXG4gICAgaWYgKGxhdGVzdENsYXNzICE9PSAnaGl0QmxvY2snICYmIGxhdGVzdENsYXNzICE9PSAnbWlzc0Jsb2NrJykge1xuICAgICAgbGF0ZXN0Q2xhc3MgPSAnJztcbiAgICB9XG5cbiAgICBjb25zdCBibG9ja0VsZW1lbnQgPSBjcmVhdGVCbG9jaygnZGl2Jyk7XG4gICAgYmxvY2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrJyk7XG4gICAgaWYgKGxhdGVzdENsYXNzICE9PSAnJykgYmxvY2tFbGVtZW50LmNsYXNzTGlzdC5hZGQobGF0ZXN0Q2xhc3MpO1xuXG4gICAgcmV0dXJuIGJsb2NrRWxlbWVudDtcbiAgfTtcblxuICBjb25zdCBkaXNhYmxlU3RhcnRlclVpID0gKCkgPT4gdHJ1ZTtcblxuICAvLyBjb25zdCByZW5kZXJTZWxlY3Rpb25CbG9ja3MgPSAobW91c2VQb3NpdGlvbiwgbGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gIC8vICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gIC8vICAgY29uc3QgY3VycmVudFNuYWtlQmxvY2sgPSBjcmVhdGVCbG9ja0VsZW1lbnQoKTtcbiAgLy8gICBjb25zdCByZWFsUG9zaXRpb25YID0gTWF0aC5mbG9vcihtb3VzZVBvc2l0aW9uLnhDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG4gIC8vICAgY29uc3QgcmVhbFBvc2l0aW9uWSA9IE1hdGguZmxvb3IobW91c2VQb3NpdGlvbi55Q29vcmQgKiBsYXRlc3RCbG9ja1NpemUpO1xuXG4gIC8vICAgY29uc29sZS5sb2cobW91c2VQb3NpdGlvbiwgJ1RIRSBDVVJSRU5UIE1PVVNFIFBPU0lUSU9OJyk7XG5cbiAgLy8gICBjb25zb2xlLmxvZyhyZWFsUG9zaXRpb25YLCAndGhlIHJlYWwgcG9zaXRpb24geCcpO1xuICAvLyAgIGNvbnNvbGUubG9nKHJlYWxQb3NpdGlvblksICd0aGUgcmVhbCBwb3NpdGlvbiB5Jyk7XG5cbiAgLy8gICBjdXJyZW50U25ha2VCbG9jay5zdHlsZS5sZWZ0ID0gYCR7cmVhbFBvc2l0aW9uWH1weGA7XG4gIC8vICAgY3VycmVudFNuYWtlQmxvY2suc3R5bGUudG9wID0gYCR7cmVhbFBvc2l0aW9uWX1weGA7XG5cbiAgLy8gICBlbGVtZW50LnNoaXBHcmlkLmFwcGVuZENoaWxkKGN1cnJlbnRTbmFrZUJsb2NrKTtcbiAgLy8gfTtcblxuICBjb25zdCBjcmVhdGVTaGlwQmxvY2sgPSAoc2hpcFBvc2l0aW9uLCBsYXRlc3RCbG9ja1NpemUsIHNoaXBUeXBlKSA9PiB7XG4gICAgY29uc3Qgc2hpcEJsb2NrID0gY3JlYXRlQmxvY2tFbGVtZW50KHNoaXBUeXBlLCBjcmVhdGVEb21FbGVtZW50KTtcblxuICAgIGNvbnN0IHJlYWxQb3NpdGlvblggPSBNYXRoLmZsb29yKHNoaXBQb3NpdGlvbi54Q29vcmQgKiBsYXRlc3RCbG9ja1NpemUpO1xuICAgIGNvbnN0IHJlYWxQb3NpdGlvblkgPSBNYXRoLmZsb29yKHNoaXBQb3NpdGlvbi55Q29vcmQgKiBsYXRlc3RCbG9ja1NpemUpO1xuICAgIHNoaXBCbG9jay5zdHlsZS5sZWZ0ID0gYCR7cmVhbFBvc2l0aW9uWH1weGA7XG4gICAgc2hpcEJsb2NrLnN0eWxlLnRvcCA9IGAke3JlYWxQb3NpdGlvbll9cHhgO1xuXG4gICAgcmV0dXJuIHNoaXBCbG9jaztcbiAgfTtcblxuICBjb25zdCByZW5kZXJBbHJlYWR5UGxhY2VkU2hpcHMgPSAoc2hpcEdyaWQsIGxhdGVzdEJsb2NrU2l6ZSkgPT4ge1xuICAgIGNvbnN0IGdhbWVWYWx1ZXMgPSBhY3RpdmVHYW1lLmdldEdhbWVWYWx1ZXMoKTtcbiAgICBjb25zdCBjaGVja0JvYXJkU2hpcHMgPVxuICAgICAgZ2FtZVZhbHVlcy5wbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpLmN1cnJlbnRTaGlwcztcblxuICAgIGNoZWNrQm9hcmRTaGlwcy5mb3JFYWNoKChwbGF5ZXJDaGVja1NoaXBzKSA9PiB7XG4gICAgICBwbGF5ZXJDaGVja1NoaXBzLmZvckVhY2goKGJvYXQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcEJsb2NrID0gY3JlYXRlU2hpcEJsb2NrKGJvYXQsIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgICAgIHNoaXBHcmlkLmFwcGVuZENoaWxkKHNoaXBCbG9jayk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJQbGFjZWRTaGlwID0gKGxhdGVzdEJsb2NrU2l6ZSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICBjb25zdCB7IHNoaXBHcmlkIH0gPSBlbGVtZW50O1xuXG4gICAgaWYgKCFwbGFjZWRTaGlwKSByZXR1cm4gcGxhY2VkU2hpcDtcblxuICAgIHNoaXBHcmlkLmlubmVySFRNTCA9ICcnO1xuXG4gICAgcGxhY2VkU2hpcC5mb3JFYWNoKChzaGlwUG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHNoaXBCbG9jayA9IGNyZWF0ZVNoaXBCbG9jayhzaGlwUG9zaXRpb24sIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgICBzaGlwR3JpZC5hcHBlbmRDaGlsZChzaGlwQmxvY2spO1xuICAgIH0pO1xuXG4gICAgcmVuZGVyQWxyZWFkeVBsYWNlZFNoaXBzKHNoaXBHcmlkLCBsYXRlc3RCbG9ja1NpemUpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUF4aXMgPSAoKSA9PiB7XG4gICAgaWYgKGF4aXMgPT09ICd5JykgYXhpcyA9ICd4JztcbiAgICBlbHNlIGF4aXMgPSAneSc7XG4gIH07XG5cbiAgY29uc3QgbW92ZVNoaXBCeURpcmVjdGlvbiA9IChtb3VzZUxvY2F0aW9uLCBjdXJyZW50U2hpcCwgY3VycmVudEF4aXMpID0+IHtcbiAgICBsZXQgbGF0ZXN0U2hpcCA9IGZhbHNlO1xuXG4gICAgaWYgKHBvc2l0aW9uLmNoZWNrT3V0T2ZCb3VuY2UoY3VycmVudFNoaXBbMF0pKSByZXR1cm4gbGF0ZXN0U2hpcDtcblxuICAgIGNvbnN0IG5ld1hQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKFxuICAgICAgbW91c2VMb2NhdGlvbi54Q29vcmQsXG4gICAgICAwXG4gICAgKS54Q29vcmQ7XG5cbiAgICBjb25zdCBuZXdZUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihcbiAgICAgIDAsXG4gICAgICBtb3VzZUxvY2F0aW9uLnlDb29yZFxuICAgICkueUNvb3JkO1xuXG4gICAgbGV0IG5ld1NoaXBQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKFxuICAgICAgbmV3WFBvc2l0aW9uLFxuICAgICAgY3VycmVudFNoaXBbMF0ueUNvb3JkXG4gICAgKTtcblxuICAgIGlmIChjdXJyZW50QXhpcyA9PT0gJ3gnKSB7XG4gICAgICBuZXdTaGlwUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihcbiAgICAgICAgY3VycmVudFNoaXBbMF0ueENvb3JkLFxuICAgICAgICBuZXdZUG9zaXRpb25cbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGF0ZXN0U2hpcCA9IHNoaXAuY3JlYXRlU2hpcChcbiAgICAgIG5ld1NoaXBQb3NpdGlvbixcbiAgICAgIGN1cnJlbnRTaGlwLmxlbmd0aCxcbiAgICAgIGN1cnJlbnRBeGlzXG4gICAgKTtcblxuICAgIHJldHVybiBsYXRlc3RTaGlwO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUGxheWVyU2hpcCA9IChsYXRlc3RTaGlwLCBsYXRlc3RBeGlzLCBsYXRlc3RHYW1lKSA9PiB7XG4gICAgaWYgKGxhdGVzdFNoaXApIGxhdGVzdEdhbWUuc2V0dXBTaGlwKGxhdGVzdFNoaXBbMF0sIGxhdGVzdEF4aXMpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVBsYXllclNoaXBFdmVudCA9ICgpID0+IHtcbiAgICBwbGFjZVBsYXllclNoaXAocGxhY2VkU2hpcCwgYXhpcywgYWN0aXZlR2FtZSk7XG4gIH07XG5cbiAgY29uc3QgYWRkU2hpcHMgPSAoc2hpcHMsIHNoaXBUeXBlLCBncmlkLCBsYXRlc3RCbG9ja1NpemUpID0+IHtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwR3JvdXApID0+IHtcbiAgICAgIHNoaXBHcm91cC5mb3JFYWNoKChib2F0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBFbGVtZW50ID0gY3JlYXRlU2hpcEJsb2NrKGJvYXQsIGxhdGVzdEJsb2NrU2l6ZSwgc2hpcFR5cGUpO1xuICAgICAgICBncmlkLmFwcGVuZENoaWxkKHNoaXBFbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckdyaWRzID0gKGJsb2NrU2l6ZTIpID0+IHtcbiAgICBjb25zdCBnYW1lVmFsdWVzID0gYWN0aXZlR2FtZS5nZXRHYW1lVmFsdWVzKCk7XG5cbiAgICBjb25zdCB7IHBsYXllckdyaWQgfSA9IGRvbS5nZXRFbGVtZW50cygpO1xuICAgIGNvbnN0IHsgY29tcHV0ZXJHcmlkIH0gPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAgIHBsYXllckdyaWQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29tcHV0ZXJHcmlkLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgcGxheWVyQm9hcmRWYWx1ZXMgPSBnYW1lVmFsdWVzLnBsYXllckJvYXJkLmdldFZhbHVlcygpO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmRWYWx1ZXMgPSBnYW1lVmFsdWVzLmNvbXB1dGVyQm9hcmQuZ2V0VmFsdWVzKCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJCb2FyZFZhbHVlcywgJ3BsYXllckJvYXJkVmFsdWVzJyk7XG4gICAgLy8gY29uc29sZS5sb2coY29tcHV0ZXJCb2FyZFZhbHVlcywgJ2NvbXB1dGVyQm9hcmRWYWx1ZXMnKTtcblxuICAgIGFkZFNoaXBzKHBsYXllckJvYXJkVmFsdWVzLmN1cnJlbnRTaGlwcywgZmFsc2UsIHBsYXllckdyaWQsIGJsb2NrU2l6ZTIpO1xuICAgIGFkZFNoaXBzKHBsYXllckJvYXJkVmFsdWVzLmhpdHMsICdoaXRCbG9jaycsIHBsYXllckdyaWQsIGJsb2NrU2l6ZTIpO1xuICAgIGFkZFNoaXBzKHBsYXllckJvYXJkVmFsdWVzLm1pc3NlcywgJ21pc3NCbG9jaycsIHBsYXllckdyaWQsIGJsb2NrU2l6ZSk7XG5cbiAgICBhZGRTaGlwcyhjb21wdXRlckJvYXJkVmFsdWVzLmhpdHMsICdoaXRCbG9jaycsIGNvbXB1dGVyR3JpZCwgYmxvY2tTaXplMik7XG4gICAgYWRkU2hpcHMoY29tcHV0ZXJCb2FyZFZhbHVlcy5taXNzZXMsICdtaXNzQmxvY2snLCBjb21wdXRlckdyaWQsIGJsb2NrU2l6ZTIpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckdhbWUgPSAobGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBnYW1lU3RhdHVzID0gYWN0aXZlR2FtZS5nYW1lSXNPdmVyKCk7XG5cbiAgICAgIHJlbmRlckdyaWRzKGxhdGVzdEJsb2NrU2l6ZSk7XG5cbiAgICAgIGlmICghZ2FtZVN0YXR1cy5nYW1lRmluaXNoZWQpIHJlbmRlckdhbWUobGF0ZXN0QmxvY2tTaXplKTtcbiAgICB9LCByZW5kZXJTcGVlZCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlU2hpcFNlY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAgIGVsZW1lbnRzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbGVtZW50cy5zZWN0aW9uU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZWxlbWVudHMuc2hpcEdyaWQuaW5uZXJIVE1MID0gJyc7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRHYW1lID0gKGxhdGVzdEJsb2NrU2l6ZSkgPT4ge1xuICAgIHJlbW92ZVNoaXBTZWN0aW9uKCk7XG4gICAgYWN0aXZlR2FtZS5zZXR1cEdhbWUoKTtcbiAgICByZW5kZXJHYW1lKGxhdGVzdEJsb2NrU2l6ZSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU2VsZWN0aW9uR3JpZCA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGdhbWVWYWx1ZSA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuICAgICAgY29uc3QgY2hlY2tCb2FyZFNoaXBzID1cbiAgICAgICAgZ2FtZVZhbHVlLnBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCkuY3VycmVudFNoaXBzO1xuXG4gICAgICBjaGFuZ2VCbG9ja1NpemUod2luZG93Lm1hdGNoTWVkaWEpO1xuXG4gICAgICBpZiAoYWN0aXZlR2FtZS5jaGVja1NldHVwKGdhbWVWYWx1ZS5wbGF5ZXJDaGVja0JvYXJkKSkgZGlzYWJsZVN0YXJ0ZXJVaSgpO1xuXG4gICAgICBpZiAobW91c2VCbG9ja0xvY2F0aW9uKSB7XG4gICAgICAgIGxldCBjdXJyZW50U2hpcCA9IGFjdGl2ZUdhbWUuYXJyYW5nZUJsb2Nrcyhtb3VzZUJsb2NrTG9jYXRpb24sIGF4aXMpO1xuICAgICAgICBpZiAoIWN1cnJlbnRTaGlwICYmIHBsYWNlZFNoaXApIHtcbiAgICAgICAgICBjdXJyZW50U2hpcCA9IG1vdmVTaGlwQnlEaXJlY3Rpb24oXG4gICAgICAgICAgICBtb3VzZUJsb2NrTG9jYXRpb24sXG4gICAgICAgICAgICBwbGFjZWRTaGlwLFxuICAgICAgICAgICAgYXhpc1xuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFNoaXApIHBsYWNlZFNoaXAgPSBjdXJyZW50U2hpcDtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGFjZWRTaGlwLCAndGhlIGN1cnJlbnQgcGxhY2VkIHNoaXAnKTtcblxuICAgICAgICBpZiAocGxhY2VkU2hpcCkgcmVuZGVyUGxhY2VkU2hpcChibG9ja1NpemUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2ZUdhbWUuY2hlY2tTZXR1cChjaGVja0JvYXJkU2hpcHMpKSByZW5kZXJTZWxlY3Rpb25HcmlkKCk7XG4gICAgICBlbHNlIHN0YXJ0R2FtZShibG9ja1NpemUpO1xuICAgIH0sIHJlbmRlclNwZWVkKTtcbiAgfTtcblxuICBjb25zdCBhY3RpdmF0ZVVpID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9tLmdldFBhZ2UoKTtcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IHBhZ2VDb250ZW50O1xuXG4gICAgYWRkVWlFdmVudHMoKTtcbiAgICByZW5kZXJTZWxlY3Rpb25HcmlkKCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsdWVzID0gKCkgPT4gKHtcbiAgICBibG9ja1NpemUsXG4gICAgcGxhY2VkU2hpcCxcbiAgICBheGlzLFxuICAgIG1vdXNlQmxvY2tMb2NhdGlvbixcbiAgfSk7XG5cbiAgY29uc3QgYWRkVWlFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZpbmRNb3VzZVBvc2l0aW9uKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmaW5kVG91Y2hQb3NpdGlvbik7XG4gICAgZWxlbWVudC5zaGlwTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGFjZVBsYXllclNoaXBFdmVudCk7XG5cbiAgICBlbGVtZW50LnJvdGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUF4aXMpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVVpRXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAgIGVsZW1lbnQuc2hpcExheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZpbmRNb3VzZVBvc2l0aW9uKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmaW5kVG91Y2hQb3NpdGlvbik7XG4gICAgZWxlbWVudC5zaGlwTGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGFjZVBsYXllclNoaXBFdmVudCk7XG5cbiAgICBlbGVtZW50LnJvdGF0ZUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUF4aXMpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWN0aXZhdGVVaSxcbiAgICBjcmVhdGVCbG9ja0VsZW1lbnQsXG4gICAgZ2V0TW91c2VQb3NpdGlvbixcbiAgICBtb3ZlU2hpcEJ5RGlyZWN0aW9uLFxuICAgIGNoYW5nZUJsb2NrU2l6ZSxcbiAgICBjaGFuZ2VBeGlzLFxuICAgIGdldFZhbHVlcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVpO1xuIl0sIm5hbWVzIjpbInJlZnJlc2hpbmdMb2dvIiwiRG9tIiwiZ2V0RWxlbWVudHMiLCJvdmVybGF5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VjdGlvblNjcmVlbiIsInNoaXBUZXh0Iiwic2hpcEdyaWQiLCJzaGlwTGF5ZXIiLCJyb3RhdGVCdXR0b24iLCJncmlkcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoaXRzIiwibWlzc2VzIiwicGxheWVyR3JpZCIsInBsYXllckhpdHMiLCJwbGF5ZXJNaXNzZXMiLCJjb21wdXRlckdyaWQiLCJjb21wdXRlckhpdHMiLCJjb21wdXRlck1pc3NlcyIsImNvbnRlbnQiLCJnZXRQYWdlIiwiUG9zaXRpb24iLCJTaGlwIiwiUHJhY3RpY2FsIiwiR2FtZWJvYXJkIiwicG9zaXRpb24iLCJzaGlwIiwicHJhY3RpY2FsIiwiY3VycmVudFNoaXBzIiwicmFuZG9taXplIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tQXhpcyIsImF4aWVzIiwibGVuZ3RoIiwicGxhY2VBbGxTaGlwcyIsInNoaXBzQXJyYXkiLCJjb21wYXJlU2hpcHNBcnJheSIsImxhdGVzdFNoaXBzQXJyYXkiLCJzaGlwcyIsInNoaXBzRG9Db2xsaWRlIiwiZm9yRWFjaCIsImxhdGVzdFNoaXBzIiwiYm9hdCIsImxhdGVzdEJvYXQiLCJjb21wYXJlUG9zaXRpb24iLCJwbGF5ZXJQbGFjZVNoaXAiLCJsb2NhdGlvbiIsImF4aXMiLCJsYXRlc3RQb3NpdGlvbiIsImN1cnJlbnRBcnJheSIsImNvcHlBcnJheSIsInNoaXBsZW5ndGgiLCJjdXJyZW50U2hpcCIsImNyZWF0ZVNoaXAiLCJpc0NvbGxpZGVkIiwicHVzaCIsInBsYWNlUmFuZG9tU2hpcHMiLCJyYW5kb21pemVyIiwicmFuZG9tQXhpZXMiLCJsYXRlc3RMZW5ndGgiLCJyYW5kb21Qb3NpdGlvbiIsImNyZWF0ZVBvc2l0aW9uIiwicmFuZG9tU2hpcCIsInNoaXBDb2xsaWRlcyIsInBsYWNlU2hpcHNSYW5kb21seSIsImF0dGFja1NoaXAiLCJjdXJyZW50SGl0cyIsImN1cnJlbnRNaXNzZXMiLCJpc0hpdCIsImxhdGVzdEhpdHMiLCJsYXRlc3RNaXNzZXMiLCJzaGlwQXJyYXkiLCJwb3NpdGlvbnNBcnJheSIsImhpdCIsImhpdEFycmF5Iiwic2hpcEFycmF5cyIsImZpbmFsT2JqZWN0IiwicmVjaWV2ZUF0dGFjayIsInJlc3VsdCIsImNyZWF0ZVJhbmRvbUNvb3JkcyIsImlzTW9ja1JhbmRvbSIsImNhbGxSYW5kb21pemVyIiwicmFuZG9tWCIsInJhbmRvbVkiLCJmaWx0ZXJBdHRhY2siLCJhcnJheSIsImN1cnJlbnRBdHRhY2siLCJjdXJyZW50QXR0YWNrQXJyYXkiLCJmaWx0ZXIiLCJpdGVtIiwieENvb3JkIiwieUNvb3JkIiwiZ2V0VHlwZU9mUGxhY2VkU2hpcCIsInNoaXBUeXBlcyIsInNoaXBUeXBlIiwic2hpcExlbmd0aCIsInJlY2lldmVSYW5kb21BdHRhY2siLCJoYXNCZWVuSGl0IiwiaGFzQmVlbk1pc3MiLCJpc0FsbFN1bmsiLCJoYXNTdW5rZWQiLCJpc1N1bmsiLCJnZXRWYWx1ZXMiLCJHYW1lIiwicGxheWVyQm9hcmQiLCJjb21wdXRlckJvYXJkIiwicGxheWVyQ2hlY2tCb2FyZCIsImNoZWNrU2V0dXAiLCJwbGF5ZXJDaGVja1NoaXBzIiwic2V0dXBHYW1lIiwicGxheWVyQ2hlY2tWYWx1ZXMiLCJhdHRhY2tCb2F0cyIsImNvb3JkcyIsInNldHVwU2hpcCIsImdhbWVJc092ZXIiLCJtZXNzYWdlIiwiZ2FtZUZpbmlzaGVkIiwiYXJyYW5nZUJsb2NrcyIsIm1vdXNlUG9zaXRpb24iLCJjdXJyZW50Um90YXRpb24iLCJzaGlwVHlwZU9iamVjdCIsImdldEdhbWVWYWx1ZXMiLCJhY3RpdmVHYW1lIiwiY2hlY2tPdXRPZkJvdW5jZSIsIm5ld1Bvc2l0aW9uIiwiYWRkUG9zaXRpb24iLCJwb3NpdGlvbjEiLCJwb3NpdGlvbjIiLCJtdWx0aXBseVBvc2l0aW9uIiwiY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbCIsIm5ld0FycmF5IiwiaXNPYmplY3QiLCJjdXJyZW50T2JqZWN0IiwiY2hlY2tPYmplY3QiLCJvYmplY3QxIiwib2JqZWN0MiIsImluZGV4Iiwic2Vjb25kSW5kZXgiLCJvYmplY3RJc0VxdWFsIiwiY3VycmVudE9iamVjdDIiLCJjdXJyZW50T2JqZWN0VmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY3VycmVudE9iamVjdDJWYWx1ZXMiLCJvYmplY3RLZXlzIiwia2V5cyIsIm9iamVjdEtleXMyIiwia2V5IiwiaXRlbTIiLCJjaGVja09iamVjdEJvb2wiLCJnZXRBZGRlZFBvc2l0aW9uIiwiYWRkZWRQb3NpdGlvbiIsImxlbmd0aDEiLCJwb3B1bGF0ZVNoaXBzIiwiY3VycmVudFBvc2l0aW9uIiwibGF0ZXN0QXJyYXkiLCJhcnJheUxlbmd0aCIsInBvcyIsIlVpIiwiZG9tIiwicmVuZGVyU3BlZWQiLCJibG9ja1NpemUiLCJwbGFjZWRTaGlwIiwibW91c2VCbG9ja0xvY2F0aW9uIiwiY3JlYXRlRG9tRWxlbWVudCIsImVsZW1lbnROYW1lIiwiY3JlYXRlRWxlbWVudCIsImdldE1vdXNlUG9zaXRpb24iLCJvZmZzZXRYIiwib2Zmc2V0WSIsImZpbmRNb3VzZVBvc2l0aW9uIiwiZXZlbnQiLCJjdXJyZW50TW91c2VQb3NpdGlvbiIsImZpbmRUb3VjaFBvc2l0aW9uIiwicmVjdCIsInRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvdWNoT2Zmc2V0WCIsInRhcmdldFRvdWNoZXMiLCJwYWdlWCIsImxlZnQiLCJ0b3VjaE9mZnNldFkiLCJwYWdlWSIsInRvcCIsInRvdWNoUG9zaXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZUJsb2NrU2l6ZSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiY3JlYXRlQmxvY2tFbGVtZW50IiwiYmxvY2tDbGFzcyIsImNyZWF0ZUJsb2NrIiwibGF0ZXN0Q2xhc3MiLCJibG9ja0VsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXNhYmxlU3RhcnRlclVpIiwiY3JlYXRlU2hpcEJsb2NrIiwic2hpcFBvc2l0aW9uIiwibGF0ZXN0QmxvY2tTaXplIiwic2hpcEJsb2NrIiwicmVhbFBvc2l0aW9uWCIsInJlYWxQb3NpdGlvblkiLCJzdHlsZSIsInJlbmRlckFscmVhZHlQbGFjZWRTaGlwcyIsImdhbWVWYWx1ZXMiLCJjaGVja0JvYXJkU2hpcHMiLCJhcHBlbmRDaGlsZCIsInJlbmRlclBsYWNlZFNoaXAiLCJlbGVtZW50IiwiaW5uZXJIVE1MIiwiY2hhbmdlQXhpcyIsIm1vdmVTaGlwQnlEaXJlY3Rpb24iLCJtb3VzZUxvY2F0aW9uIiwiY3VycmVudEF4aXMiLCJsYXRlc3RTaGlwIiwibmV3WFBvc2l0aW9uIiwibmV3WVBvc2l0aW9uIiwibmV3U2hpcFBvc2l0aW9uIiwicGxhY2VQbGF5ZXJTaGlwIiwibGF0ZXN0QXhpcyIsImxhdGVzdEdhbWUiLCJwbGFjZVBsYXllclNoaXBFdmVudCIsImFkZFNoaXBzIiwiZ3JpZCIsInNoaXBHcm91cCIsInNoaXBFbGVtZW50IiwicmVuZGVyR3JpZHMiLCJibG9ja1NpemUyIiwicGxheWVyQm9hcmRWYWx1ZXMiLCJjb21wdXRlckJvYXJkVmFsdWVzIiwicmVuZGVyR2FtZSIsInNldFRpbWVvdXQiLCJnYW1lU3RhdHVzIiwicmVtb3ZlU2hpcFNlY3Rpb24iLCJlbGVtZW50cyIsImRpc3BsYXkiLCJzdGFydEdhbWUiLCJyZW5kZXJTZWxlY3Rpb25HcmlkIiwiZ2FtZVZhbHVlIiwid2luZG93IiwiYWN0aXZhdGVVaSIsInBhZ2VDb250ZW50IiwiYm9keSIsImFkZFVpRXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZVVpRXZlbnRzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=