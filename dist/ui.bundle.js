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
      shipSelection: document.querySelector('.shipSelection'),
      computerMisses: document.querySelector('.computerMisses'),
      content: document.querySelector('.content'),
      computerGridLayer: document.querySelector('.computerGridLayer'),
      restart: document.querySelector('.restart'),
      gameOverText: document.querySelector('.gameOverText'),
      gameFinishedSection: document.querySelector('.gameFinishedSection')
    };
  };

  var getPage = function getPage() {
    var content = "    <div class=\"content\">\n                            <div class=\"overlay\"></div>\n                            <div class=\"sectionScreen\">\n                            <div class=\"gameFinishedSection\">\n                            <h1 class=\"gameOverText\">You Win \uD83D\uDE03</h1>\n                  \n                            <button class=\"restart\">Restart</button>\n                          </div>\n\n                              <div class=\"shipSelection\">\n\n\n\n                                <h1 class=\"shipTitle\">BATTLESHIP</h1>\n                                <h2 class=\"shipText\">Place your ship</h2>\n                                <div class=\"shipLayer\">\n                                  <div class=\"shipOverlay\"></div>\n                                  <div class=\"shipGrid\"></div>\n                              </div>\n                                <div class=\"rotateButton\">\n                                  <img\n                                    class=\"rotateImage\"\n                                    src=\"".concat(_images_refreshLogo_svg__WEBPACK_IMPORTED_MODULE_0__, "\"\n                                    alt=\"Rotate Image\"\n                                  />\n                                </div>\n                              </div>\n                            </div>\n\n                            <main class=\"mainSection\">\n                              <div class=\"mainTitle\"><h1>BATTLESHIP</h1></div>\n                              <div class=\"centerSection\">\n                                <div class=\"playerBoard board\">\n                                  <h2 class=\"boardTitle\">Player Board</h2>\n                                  <div class=\"gridLayer playerGridLayer\">\n                                    <div class=\"gridOverlay\"></div>\n                                    <div class=\"playerGrid grid\"></div>\n                                  </div>\n                                  <div class=\"playerStats stats\">\n                                    <h2 class=\"playerHits hits\">Hits 0</h2>\n                                    <h2 class=\"playerMisses misses\">Misses 0</h2>\n                                  </div>\n                                </div>\n\n                                <div class=\"computerBoard board\">\n                                  <h2 class=\"boardTitle\">Computer Board</h2>\n                                  <div class=\"gridLayer computerGridLayer\">\n                                    <div class=\"gridOverlay computerGridOverlay\"></div>\n                                    <div class=\"computerGrid grid\"></div>\n                                  </div>\n                                  <div class=\"computerStats stats\">\n                                    <h2 class=\"computerHits hits\">Hits 0</h2>\n\n                                    <h2 class=\"computerMisses misses\">Misses 0</h2>\n                                  </div>\n                                </div>\n                              </div>\n                            </main>\n                            <div class=\"footer\">\n                              <h2 class=\"copyrightMessage\">\n                                Website and code are made by Brayden Grotegut\n                              </h2>\n                            </div>\n                          </div>");
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
    var shipsDoCollide = false;
    if (!ships) return shipsDoCollide;
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

  var getTypeOfPlacedShip = function getTypeOfPlacedShip(shipArray) {
    if (shipArray.length === 5) return false;
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
    return shipTypes[shipArray.length];
  };

  var playerPlaceShip = function playerPlaceShip(location, axis) {
    var currentArray = practical.copyArray(currentShips);
    var shipType = getTypeOfPlacedShip(currentArray);
    var latestShip = ship.createShip(location, shipType.shipLength, axis);
    var isCollided = compareShipsArray(currentArray, latestShip);

    if (shipType && latestShip && !isCollided) {
      currentArray.push(latestShip);
    }

    currentShips = currentArray;
    return currentArray;
  };

  var placeRandomShips = function placeRandomShips(shipsArray, randomizer, randomAxies) {
    var latestShipsArray = shipsArray;
    var randomPosition = position.createPosition(randomizer(), randomizer());
    var shipType = getTypeOfPlacedShip(latestShipsArray);
    if (!shipType) return latestShipsArray;
    var latestLength = shipType.shipLength;
    var randomShip = ship.createShip(randomPosition, latestLength, randomAxies());
    var shipCollides = compareShipsArray(latestShipsArray, randomShip);
    if (randomShip && !shipCollides) latestShipsArray.push(randomShip);
    return placeRandomShips(latestShipsArray, randomizer, randomAxies);
  };

  var placeShipsRandomly = function placeShipsRandomly(randomizer, randomAxies) {
    var shipsArray = placeRandomShips([], randomizer, randomAxies);
    currentShips = shipsArray;
    return shipsArray;
  };

  var filterAttack = function filterAttack(array, currentAttack) {
    var currentAttackArray = array.filter(function (item) {
      return item.xCoord === currentAttack.xCoord && item.yCoord === currentAttack.yCoord;
    });
    return currentAttackArray;
  };

  var hasHitShip = function hasHitShip(hitPosition, latestHits, latestMisses) {
    var hasBeenHit = filterAttack(latestHits, hitPosition);
    var hasBeenMiss = filterAttack(latestMisses, hitPosition);
    if (hasBeenHit.length > 0 || hasBeenMiss.length > 0) return true;
    return false;
  };

  var attackShip = function attackShip(latestPosition, ships, currentHits, currentMisses) {
    var isHit = false;
    var latestShipsArray = [];
    var latestHits = currentHits;
    var latestMisses = currentMisses;
    if (!latestPosition) return false;
    if (hasHitShip(latestPosition, currentHits, currentMisses)) return false;
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
    if (!result) return false;
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

  var recieveRandomAttack = function recieveRandomAttack(randomizer) {
    var randomPosition = createRandomCoords(randomizer);
    var hasHit = hasHitShip(randomPosition, hits, misses);
    if (hasHit) return recieveRandomAttack(randomizer);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
    var currentAttack = computerBoard.recieveAttack(coords);
    if (!currentAttack) return false;
    playerBoard.recieveRandomAttack(randomizer);
    return true;
  };

  var setupShip = function setupShip(location, axis) {
    return playerCheckBoard.playerPlaceShip(location, axis);
  };

  var gameIsOver = function gameIsOver() {
    var playerCheckShips = playerCheckBoard.getValues().currentShips;
    if (!checkSetup(playerCheckShips)) return false;

    if (computerBoard.isAllSunk()) {
      return {
        message: 'You Won 😃',
        gameFinished: true
      };
    }

    if (playerBoard.isAllSunk()) {
      return {
        message: 'You Lost 😢',
        gameFinished: true
      };
    }

    return {
      gameFinished: false
    };
  };

  var arrangeBlocks = function arrangeBlocks(mousePosition, currentRotation) {
    var checkboardObjects = playerCheckBoard.getValues();
    var shipTypeObject = playerCheckBoard.getTypeOfPlacedShip(checkboardObjects.currentShips);
    var currentShip = ship.createShip(mousePosition, shipTypeObject.shipLength, currentRotation);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

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
    if (objectKeys.length !== objectKeys2.length) return false;
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
  var activeGame = (0,_main_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var placedShip = false;
  var axis = 'y';
  var mouseBlockLocation = false;

  var createDomElement = function createDomElement(elementName) {
    return document.createElement(elementName);
  };

  var getMousePosition = function getMousePosition(offsetX, offsetY) {
    var xCoord = Math.floor(offsetX / blockSize);
    var yCoord = Math.floor(offsetY / blockSize);
    var mousePosition = position.createPosition(xCoord, yCoord);
    var outOfBounce = position.checkOutOfBounce(mousePosition);
    if (outOfBounce) return false;
    return mousePosition;
  };

  var findMousePosition = function findMousePosition(event) {
    var currentMousePosition = getMousePosition(event.offsetX, event.offsetY);
    mouseBlockLocation = currentMousePosition;
  };

  var findTouchPosition = function findTouchPosition(event) {
    var rect = event.target.getBoundingClientRect();
    var touchOffsetX = event.targetTouches[0].clientX - rect.x;
    var touchOffsetY = event.targetTouches[0].clientY - rect.y;
    var touchPosition = getMousePosition(touchOffsetX, touchOffsetY);
    mouseBlockLocation = touchPosition;
    event.preventDefault();
  };

  var changeBlockSize = function changeBlockSize(matchMedia) {
    blockSize = 42;
    if (matchMedia('(max-width: 960px)').matches) blockSize = 30;
    if (matchMedia('(max-width: 470px)').matches) blockSize = 21;
    if (matchMedia('(max-width: 320px)').matches) blockSize = 15;
    return blockSize;
  };

  var createBlockElement = function createBlockElement(blockClass, createBlock) {
    var latestClass = blockClass;

    if (latestClass !== 'hitBlock' && latestClass !== 'missBlock' && latestClass !== 'cursorBlock') {
      latestClass = '';
    }

    var blockElement = createBlock('div');
    blockElement.classList.add('block');
    if (latestClass !== '') blockElement.classList.add(latestClass);
    return blockElement;
  };

  var disableStarterUi = function disableStarterUi() {
    return true;
  };

  var createShipBlock = function createShipBlock(shipPosition, latestBlockSize, shipType) {
    var shipBlock = createBlockElement(shipType, createDomElement);
    var realPositionX = Math.floor(shipPosition.xCoord * latestBlockSize);
    var realPositionY = Math.floor(shipPosition.yCoord * latestBlockSize);
    shipBlock.style.left = "".concat(realPositionX, "px");
    shipBlock.style.top = "".concat(realPositionY, "px");
    return shipBlock;
  };

  var renderAlreadyPlacedShips = function renderAlreadyPlacedShips(shipGrid, latestBlockSize) {
    var gameValues = activeGame.getGameValues();
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
    placePlayerShip(placedShip, axis, activeGame);
  };

  var resetGame = function resetGame() {
    var element = dom.getElements();
    element.computerGrid.innerHTML = '';
    element.playerGrid.innerHTML = '';
    element.sectionScreen.style.display = 'flex';
    element.shipSelection.style.display = 'flex';
    element.gameFinishedSection.style.display = 'none';
    element.gameOverText.innerHTML = '';
    restartGame();
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

  var addEndingEvents = function addEndingEvents() {
    var element = dom.getElements();
    element.restart.addEventListener('click', resetGame);
  };

  var removeEndingEvents = function removeEndingEvents() {
    var element = dom.getElements();
    element.restart.removeEventListener('click', element.restart);
  };

  var removeGameEvents = function removeGameEvents() {
    addEndingEvents();
    var element = dom.getElements();
    window.removeEventListener('mousemove', changeMousePosition);
    element.computerGridLayer.removeEventListener('mousemove', findMousePosition);
    element.computerGridLayer.removeEventListener('click', attackShips);
  };

  var addGameEvents = function addGameEvents() {
    removeUiEvents();
    var element = dom.getElements();
    window.addEventListener('mousemove', changeMousePosition);
    element.computerGridLayer.addEventListener('mousemove', findMousePosition);
    element.computerGridLayer.addEventListener('click', attackShips);
  };

  var checkMouseTarget = function checkMouseTarget(elementClass) {
    if (elementClass !== 'gridOverlay computerGridOverlay') return false;
    return true;
  };

  var changeMousePosition = function changeMousePosition(event) {
    var mouseTarget = checkMouseTarget(event.target.className);
    if (!mouseTarget) mouseBlockLocation = false;
  };

  var attackShips = function attackShips() {
    activeGame.attackBoats(mouseBlockLocation);
  };

  var renderShips = function renderShips(ships, grid, latestBlockSize) {
    ships.forEach(function (shipGroup) {
      shipGroup.forEach(function (boat) {
        var shipElement = createShipBlock(boat, latestBlockSize);
        grid.appendChild(shipElement);
      });
    });
  };

  var renderHits = function renderHits(ships, shipType, grid, latestBlockSize) {
    ships.forEach(function (shipPosition) {
      var shipElement = createShipBlock(shipPosition, latestBlockSize, shipType);
      grid.appendChild(shipElement);
    });
  };

  var renderGrids = function renderGrids(blockSize2, mousePosition) {
    var gameValues = activeGame.getGameValues();

    var _dom$getElements = dom.getElements(),
        playerGrid = _dom$getElements.playerGrid;

    var _dom$getElements2 = dom.getElements(),
        computerGrid = _dom$getElements2.computerGrid;

    playerGrid.innerHTML = '';
    computerGrid.innerHTML = '';
    var playerBoardValues = gameValues.playerBoard.getValues();
    var computerBoardValues = gameValues.computerBoard.getValues();
    renderShips(playerBoardValues.currentShips, playerGrid, blockSize2);
    renderHits(playerBoardValues.hits, 'hitBlock', playerGrid, blockSize2);
    renderHits(playerBoardValues.misses, 'missBlock', playerGrid, blockSize2);
    renderHits(computerBoardValues.hits, 'hitBlock', computerGrid, blockSize2);
    renderHits(computerBoardValues.misses, 'missBlock', computerGrid, blockSize2);
    var mouseShip = ship.createShip(mousePosition, 1, 'x');

    if (mouseShip) {
      renderHits(mouseShip, 'cursorBlock', computerGrid, blockSize2);
    }
  };

  var renderStats = function renderStats() {
    var gameValues = activeGame.getGameValues();

    var _dom$getElements3 = dom.getElements(),
        playerHits = _dom$getElements3.playerHits,
        playerMisses = _dom$getElements3.playerMisses;

    var _dom$getElements4 = dom.getElements(),
        computerHits = _dom$getElements4.computerHits,
        computerMisses = _dom$getElements4.computerMisses;

    var playerBoardValues = gameValues.playerBoard.getValues();
    var computerBoardValues = gameValues.computerBoard.getValues();
    playerHits.textContent = "Hits - ".concat(playerBoardValues.hits.length);
    playerMisses.textContent = "Misses - ".concat(playerBoardValues.misses.length);
    computerHits.textContent = "Hits - ".concat(computerBoardValues.hits.length);
    computerMisses.textContent = "Misses - ".concat(computerBoardValues.misses.length);
  };

  var displayGameOverUi = function displayGameOverUi(status) {
    var elements = dom.getElements();
    elements.computerGrid.innerHTML = '';
    elements.playerGrid.innerHTML = '';
    removeGameEvents();
    addEndingEvents();
    elements.gameOverText.innerHTML = status.message;
    elements.shipSelection.style.display = 'none';
    elements.sectionScreen.style.display = 'flex';
    elements.gameFinishedSection.style.display = 'flex';
    elements.overlay.style.display = 'block';
  };

  var renderGame = function renderGame() {
    setTimeout(function () {
      var gameStatus = activeGame.gameIsOver();
      var latestBlockSize = changeBlockSize(window.matchMedia);
      renderGrids(latestBlockSize, mouseBlockLocation);
      renderStats();
      if (!gameStatus.gameFinished) renderGame(latestBlockSize);else displayGameOverUi(gameStatus);
    }, renderSpeed);
  };

  var removeShipSection = function removeShipSection() {
    var elements = dom.getElements();
    elements.overlay.style.display = 'none';
    elements.sectionScreen.style.display = 'none';
    elements.shipGrid.innerHTML = '';
  };

  var startGame = function startGame() {
    removeShipSection();
    activeGame.setupGame();
    addGameEvents();
    renderGame();
  };

  var renderSelectionGrid = function renderSelectionGrid() {
    setTimeout(function () {
      var gameValue = activeGame.getGameValues();
      var checkBoardShips = gameValue.playerCheckBoard.getValues().currentShips;
      changeBlockSize(window.matchMedia);
      if (activeGame.checkSetup(gameValue.playerCheckBoard)) disableStarterUi();

      if (mouseBlockLocation) {
        var currentShip = activeGame.arrangeBlocks(mouseBlockLocation, axis);

        if (!currentShip && placedShip) {
          currentShip = moveShipByDirection(mouseBlockLocation, placedShip, axis);
        }

        if (currentShip) placedShip = currentShip;
        if (placedShip) renderPlacedShip(blockSize);
      }

      if (!activeGame.checkSetup(checkBoardShips)) renderSelectionGrid();else startGame(blockSize);
    }, renderSpeed);
  };

  var getValues = function getValues() {
    return {
      blockSize: blockSize,
      placedShip: placedShip,
      axis: axis,
      mouseBlockLocation: mouseBlockLocation
    };
  };

  var restartGame = function restartGame() {
    removeEndingEvents();
    renderSelectionGrid();
    blockSize = 42;
    activeGame = (0,_main_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    placedShip = false;
    axis = 'y';
    mouseBlockLocation = false;
    addUiEvents();
  };

  var activateUi = function activateUi() {
    var pageContent = dom.getPage();
    document.body.innerHTML = pageContent;
    restartGame();
  };

  return {
    activateUi: activateUi,
    createBlockElement: createBlockElement,
    getMousePosition: getMousePosition,
    moveShipByDirection: moveShipByDirection,
    changeBlockSize: changeBlockSize,
    changeAxis: changeAxis
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcHJhY3RpY2FsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVmcmVzaGluZ0xvZ28gZnJvbSAnLi4vaW1hZ2VzL3JlZnJlc2hMb2dvLnN2Zyc7XG5cbmNvbnN0IERvbSA9ICgpID0+IHtcbiAgY29uc3QgZ2V0RWxlbWVudHMgPSAoKSA9PiAoe1xuICAgIG92ZXJsYXk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JyksXG4gICAgc2VjdGlvblNjcmVlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25TY3JlZW4nKSxcbiAgICBzaGlwVGV4dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBUZXh0JyksXG4gICAgc2hpcEdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwR3JpZCcpLFxuICAgIHNoaXBMYXllcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBMYXllcicpLFxuICAgIHJvdGF0ZUJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZUJ1dHRvbicpLFxuICAgIGdyaWRzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkJykpLFxuICAgIGhpdHM6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpdHMnKSksXG4gICAgbWlzc2VzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5taXNzZXMnKSksXG4gICAgcGxheWVyR3JpZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckdyaWQnKSxcbiAgICBwbGF5ZXJIaXRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVySGl0cycpLFxuICAgIHBsYXllck1pc3NlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllck1pc3NlcycpLFxuICAgIGNvbXB1dGVyR3JpZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyR3JpZCcpLFxuICAgIGNvbXB1dGVySGl0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVySGl0cycpLFxuICAgIHNoaXBTZWxlY3Rpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwU2VsZWN0aW9uJyksXG4gICAgY29tcHV0ZXJNaXNzZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlck1pc3NlcycpLFxuICAgIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JyksXG4gICAgY29tcHV0ZXJHcmlkTGF5ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlckdyaWRMYXllcicpLFxuICAgIHJlc3RhcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXJ0JyksXG4gICAgZ2FtZU92ZXJUZXh0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZU92ZXJUZXh0JyksXG4gICAgZ2FtZUZpbmlzaGVkU2VjdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVGaW5pc2hlZFNlY3Rpb24nKSxcbiAgfSk7XG5cbiAgY29uc3QgZ2V0UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gYCAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25TY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZUZpbmlzaGVkU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImdhbWVPdmVyVGV4dFwiPllvdSBXaW4g8J+YgzwvaDE+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVzdGFydFwiPlJlc3RhcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwU2VsZWN0aW9uXCI+XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInNoaXBUaXRsZVwiPkJBVFRMRVNISVA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJzaGlwVGV4dFwiPlBsYWNlIHlvdXIgc2hpcDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwTGF5ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcE92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcEdyaWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm90YXRlQnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3RhdGVJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIke3JlZnJlc2hpbmdMb2dvfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJSb3RhdGUgSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWFpbiBjbGFzcz1cIm1haW5TZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblRpdGxlXCI+PGgxPkJBVFRMRVNISVA8L2gxPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlclNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllckJvYXJkIGJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYm9hcmRUaXRsZVwiPlBsYXllciBCb2FyZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRMYXllciBwbGF5ZXJHcmlkTGF5ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkT3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllckdyaWQgZ3JpZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXJTdGF0cyBzdGF0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicGxheWVySGl0cyBoaXRzXCI+SGl0cyAwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInBsYXllck1pc3NlcyBtaXNzZXNcIj5NaXNzZXMgMDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wdXRlckJvYXJkIGJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYm9hcmRUaXRsZVwiPkNvbXB1dGVyIEJvYXJkPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZExheWVyIGNvbXB1dGVyR3JpZExheWVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZE92ZXJsYXkgY29tcHV0ZXJHcmlkT3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXB1dGVyR3JpZCBncmlkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXB1dGVyU3RhdHMgc3RhdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvbXB1dGVySGl0cyBoaXRzXCI+SGl0cyAwPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY29tcHV0ZXJNaXNzZXMgbWlzc2VzXCI+TWlzc2VzIDA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjb3B5cmlnaHRNZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlYnNpdGUgYW5kIGNvZGUgYXJlIG1hZGUgYnkgQnJheWRlbiBHcm90ZWd1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfTtcblxuICByZXR1cm4geyBnZXRQYWdlLCBnZXRFbGVtZW50cyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9tO1xuIiwiaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCBQcmFjdGljYWwgZnJvbSAnLi9wcmFjdGljYWwuanMnO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcbiAgY29uc3QgcHJhY3RpY2FsID0gUHJhY3RpY2FsKCk7XG5cbiAgbGV0IGN1cnJlbnRTaGlwcyA9IFtdO1xuICBsZXQgaGl0cyA9IFtdO1xuICBsZXQgbWlzc2VzID0gW107XG5cbiAgY29uc3QgcmFuZG9taXplID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gIGNvbnN0IHJhbmRvbUF4aXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXhpZXMgPSBbJ3gnLCAneSddO1xuICAgIHJldHVybiBheGllc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBheGllcy5sZW5ndGgpXTtcbiAgfTtcblxuICBjb25zdCBwbGFjZUFsbFNoaXBzID0gKHNoaXBzQXJyYXkpID0+IHtcbiAgICBjdXJyZW50U2hpcHMgPSBzaGlwc0FycmF5O1xuICAgIHJldHVybiBjdXJyZW50U2hpcHM7XG4gIH07XG5cbiAgY29uc3QgY29tcGFyZVNoaXBzQXJyYXkgPSAobGF0ZXN0U2hpcHNBcnJheSwgc2hpcHMpID0+IHtcbiAgICBsZXQgc2hpcHNEb0NvbGxpZGUgPSBmYWxzZTtcbiAgICBpZiAoIXNoaXBzKSByZXR1cm4gc2hpcHNEb0NvbGxpZGU7XG5cbiAgICBsYXRlc3RTaGlwc0FycmF5LmZvckVhY2goKGxhdGVzdFNoaXBzKSA9PiB7XG4gICAgICBsYXRlc3RTaGlwcy5mb3JFYWNoKChib2F0KSA9PiB7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKGxhdGVzdEJvYXQpID0+IHtcbiAgICAgICAgICBpZiAocG9zaXRpb24uY29tcGFyZVBvc2l0aW9uKGJvYXQsIGxhdGVzdEJvYXQpKSB7XG4gICAgICAgICAgICBzaGlwc0RvQ29sbGlkZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBzRG9Db2xsaWRlO1xuICB9O1xuXG4gIGNvbnN0IGdldFR5cGVPZlBsYWNlZFNoaXAgPSAoc2hpcEFycmF5KSA9PiB7XG4gICAgaWYgKHNoaXBBcnJheS5sZW5ndGggPT09IDUpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHNoaXBUeXBlcyA9IFtcbiAgICAgIHsgc2hpcFR5cGU6ICdjYXJyaWVyJywgc2hpcExlbmd0aDogNSB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2JhdHRsZXNoaXAnLCBzaGlwTGVuZ3RoOiA0IH0sXG4gICAgICB7IHNoaXBUeXBlOiAnZGVzdG95ZXInLCBzaGlwTGVuZ3RoOiAzIH0sXG4gICAgICB7IHNoaXBUeXBlOiAnc3VibWFyaW5lJywgc2hpcExlbmd0aDogMyB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2d1bmJvYXQnLCBzaGlwTGVuZ3RoOiAyIH0sXG4gICAgXTtcblxuICAgIHJldHVybiBzaGlwVHlwZXNbc2hpcEFycmF5Lmxlbmd0aF07XG4gIH07XG5cbiAgY29uc3QgcGxheWVyUGxhY2VTaGlwID0gKGxvY2F0aW9uLCBheGlzKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEFycmF5ID0gcHJhY3RpY2FsLmNvcHlBcnJheShjdXJyZW50U2hpcHMpO1xuXG4gICAgY29uc3Qgc2hpcFR5cGUgPSBnZXRUeXBlT2ZQbGFjZWRTaGlwKGN1cnJlbnRBcnJheSk7XG5cbiAgICBjb25zdCBsYXRlc3RTaGlwID0gc2hpcC5jcmVhdGVTaGlwKGxvY2F0aW9uLCBzaGlwVHlwZS5zaGlwTGVuZ3RoLCBheGlzKTtcblxuICAgIGNvbnN0IGlzQ29sbGlkZWQgPSBjb21wYXJlU2hpcHNBcnJheShjdXJyZW50QXJyYXksIGxhdGVzdFNoaXApO1xuXG4gICAgaWYgKHNoaXBUeXBlICYmIGxhdGVzdFNoaXAgJiYgIWlzQ29sbGlkZWQpIHtcbiAgICAgIGN1cnJlbnRBcnJheS5wdXNoKGxhdGVzdFNoaXApO1xuICAgIH1cblxuICAgIGN1cnJlbnRTaGlwcyA9IGN1cnJlbnRBcnJheTtcbiAgICByZXR1cm4gY3VycmVudEFycmF5O1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUmFuZG9tU2hpcHMgPSAoc2hpcHNBcnJheSwgcmFuZG9taXplciwgcmFuZG9tQXhpZXMpID0+IHtcbiAgICBjb25zdCBsYXRlc3RTaGlwc0FycmF5ID0gc2hpcHNBcnJheTtcbiAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHJhbmRvbWl6ZXIoKSwgcmFuZG9taXplcigpKTtcbiAgICBjb25zdCBzaGlwVHlwZSA9IGdldFR5cGVPZlBsYWNlZFNoaXAobGF0ZXN0U2hpcHNBcnJheSk7XG4gICAgaWYgKCFzaGlwVHlwZSkgcmV0dXJuIGxhdGVzdFNoaXBzQXJyYXk7XG5cbiAgICBjb25zdCBsYXRlc3RMZW5ndGggPSBzaGlwVHlwZS5zaGlwTGVuZ3RoO1xuXG4gICAgY29uc3QgcmFuZG9tU2hpcCA9IHNoaXAuY3JlYXRlU2hpcChcbiAgICAgIHJhbmRvbVBvc2l0aW9uLFxuICAgICAgbGF0ZXN0TGVuZ3RoLFxuICAgICAgcmFuZG9tQXhpZXMoKVxuICAgICk7XG5cbiAgICBjb25zdCBzaGlwQ29sbGlkZXMgPSBjb21wYXJlU2hpcHNBcnJheShsYXRlc3RTaGlwc0FycmF5LCByYW5kb21TaGlwKTtcbiAgICBpZiAocmFuZG9tU2hpcCAmJiAhc2hpcENvbGxpZGVzKSBsYXRlc3RTaGlwc0FycmF5LnB1c2gocmFuZG9tU2hpcCk7XG5cbiAgICByZXR1cm4gcGxhY2VSYW5kb21TaGlwcyhsYXRlc3RTaGlwc0FycmF5LCByYW5kb21pemVyLCByYW5kb21BeGllcyk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwc1JhbmRvbWx5ID0gKHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKSA9PiB7XG4gICAgY29uc3Qgc2hpcHNBcnJheSA9IHBsYWNlUmFuZG9tU2hpcHMoW10sIHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKTtcbiAgICBjdXJyZW50U2hpcHMgPSBzaGlwc0FycmF5O1xuXG4gICAgcmV0dXJuIHNoaXBzQXJyYXk7XG4gIH07XG4gIGNvbnN0IGZpbHRlckF0dGFjayA9IChhcnJheSwgY3VycmVudEF0dGFjaykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRBdHRhY2tBcnJheSA9IGFycmF5LmZpbHRlcihcbiAgICAgIChpdGVtKSA9PlxuICAgICAgICBpdGVtLnhDb29yZCA9PT0gY3VycmVudEF0dGFjay54Q29vcmQgJiZcbiAgICAgICAgaXRlbS55Q29vcmQgPT09IGN1cnJlbnRBdHRhY2sueUNvb3JkXG4gICAgKTtcblxuICAgIHJldHVybiBjdXJyZW50QXR0YWNrQXJyYXk7XG4gIH07XG5cbiAgY29uc3QgaGFzSGl0U2hpcCA9IChoaXRQb3NpdGlvbiwgbGF0ZXN0SGl0cywgbGF0ZXN0TWlzc2VzKSA9PiB7XG4gICAgY29uc3QgaGFzQmVlbkhpdCA9IGZpbHRlckF0dGFjayhsYXRlc3RIaXRzLCBoaXRQb3NpdGlvbik7XG4gICAgY29uc3QgaGFzQmVlbk1pc3MgPSBmaWx0ZXJBdHRhY2sobGF0ZXN0TWlzc2VzLCBoaXRQb3NpdGlvbik7XG5cbiAgICBpZiAoaGFzQmVlbkhpdC5sZW5ndGggPiAwIHx8IGhhc0JlZW5NaXNzLmxlbmd0aCA+IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tTaGlwID0gKGxhdGVzdFBvc2l0aW9uLCBzaGlwcywgY3VycmVudEhpdHMsIGN1cnJlbnRNaXNzZXMpID0+IHtcbiAgICBsZXQgaXNIaXQgPSBmYWxzZTtcbiAgICBjb25zdCBsYXRlc3RTaGlwc0FycmF5ID0gW107XG4gICAgY29uc3QgbGF0ZXN0SGl0cyA9IGN1cnJlbnRIaXRzO1xuICAgIGNvbnN0IGxhdGVzdE1pc3NlcyA9IGN1cnJlbnRNaXNzZXM7XG5cbiAgICBpZiAoIWxhdGVzdFBvc2l0aW9uKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGhhc0hpdFNoaXAobGF0ZXN0UG9zaXRpb24sIGN1cnJlbnRIaXRzLCBjdXJyZW50TWlzc2VzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcEFycmF5KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb25zQXJyYXkgPSBwcmFjdGljYWwuY29weUFycmF5KHNoaXBBcnJheSk7XG4gICAgICBjb25zdCBoaXQgPSBzaGlwLmhpdChwb3NpdGlvbnNBcnJheSwgbGF0ZXN0UG9zaXRpb24pO1xuXG4gICAgICBpZiAoaGl0LmhpdEFycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpc0hpdCA9IHRydWU7XG4gICAgICAgIHBvc2l0aW9uc0FycmF5ID0gaGl0LnNoaXBBcnJheXM7XG4gICAgICAgIGxhdGVzdEhpdHMucHVzaChoaXQuaGl0QXJyYXlbMF0pO1xuICAgICAgfVxuICAgICAgbGF0ZXN0U2hpcHNBcnJheS5wdXNoKHBvc2l0aW9uc0FycmF5KTtcbiAgICB9KTtcbiAgICBpZiAoIWlzSGl0KSBsYXRlc3RNaXNzZXMucHVzaChsYXRlc3RQb3NpdGlvbik7XG5cbiAgICBjb25zdCBmaW5hbE9iamVjdCA9IHtcbiAgICAgIGlzSGl0LFxuICAgICAgbGF0ZXN0U2hpcHNBcnJheSxcbiAgICAgIGxhdGVzdEhpdHMsXG4gICAgICBsYXRlc3RNaXNzZXMsXG4gICAgfTtcblxuICAgIHJldHVybiBmaW5hbE9iamVjdDtcbiAgfTtcblxuICBjb25zdCByZWNpZXZlQXR0YWNrID0gKGxhdGVzdFBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXR0YWNrU2hpcChsYXRlc3RQb3NpdGlvbiwgY3VycmVudFNoaXBzLCBoaXRzLCBtaXNzZXMpO1xuICAgIGlmICghcmVzdWx0KSByZXR1cm4gZmFsc2U7XG5cbiAgICBjdXJyZW50U2hpcHMgPSByZXN1bHQubGF0ZXN0U2hpcHNBcnJheTtcbiAgICBoaXRzID0gcmVzdWx0LmxhdGVzdEhpdHM7XG4gICAgbWlzc2VzID0gcmVzdWx0LmxhdGVzdE1pc3NlcztcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUmFuZG9tQ29vcmRzID0gKHJhbmRvbWl6ZXIpID0+IHtcbiAgICBsZXQgcmFuZG9tUG9zaXRpb247XG5cbiAgICBpZiAocmFuZG9taXplci5pc01vY2tSYW5kb20pIHtcbiAgICAgIHJhbmRvbVBvc2l0aW9uID0gcmFuZG9taXplci5jYWxsUmFuZG9taXplcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByYW5kb21YID0gcmFuZG9taXplcigpO1xuICAgICAgY29uc3QgcmFuZG9tWSA9IHJhbmRvbWl6ZXIoKTtcbiAgICAgIHJhbmRvbVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24ocmFuZG9tWCwgcmFuZG9tWSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmRvbVBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IHJlY2lldmVSYW5kb21BdHRhY2sgPSAocmFuZG9taXplcikgPT4ge1xuICAgIGNvbnN0IHJhbmRvbVBvc2l0aW9uID0gY3JlYXRlUmFuZG9tQ29vcmRzKHJhbmRvbWl6ZXIpO1xuICAgIGNvbnN0IGhhc0hpdCA9IGhhc0hpdFNoaXAocmFuZG9tUG9zaXRpb24sIGhpdHMsIG1pc3Nlcyk7XG5cbiAgICBpZiAoaGFzSGl0KSByZXR1cm4gcmVjaWV2ZVJhbmRvbUF0dGFjayhyYW5kb21pemVyKTtcblxuICAgIHJldHVybiByZWNpZXZlQXR0YWNrKHJhbmRvbVBvc2l0aW9uKTtcbiAgfTtcblxuICBjb25zdCBpc0FsbFN1bmsgPSAoKSA9PiB7XG4gICAgbGV0IGhhc1N1bmtlZCA9IHRydWU7XG4gICAgY3VycmVudFNoaXBzLmZvckVhY2goKHNoaXBzKSA9PiB7XG4gICAgICBpZiAoIXNoaXAuaXNTdW5rKHNoaXBzKSkge1xuICAgICAgICBoYXNTdW5rZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBoYXNTdW5rZWQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsdWVzID0gKCkgPT4gKHtcbiAgICBjdXJyZW50U2hpcHMsXG4gICAgaGl0cyxcbiAgICBtaXNzZXMsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgYXR0YWNrU2hpcCxcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIGlzQWxsU3VuayxcbiAgICBwbGFjZVNoaXBzUmFuZG9tbHksXG4gICAgcGxheWVyUGxhY2VTaGlwLFxuICAgIHBsYWNlQWxsU2hpcHMsXG4gICAgcmFuZG9taXplLFxuICAgIHJlY2lldmVSYW5kb21BdHRhY2ssXG4gICAgcmFuZG9tQXhpcyxcbiAgICBnZXRWYWx1ZXMsXG4gICAgZ2V0VHlwZU9mUGxhY2VkU2hpcCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcblxuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuXG5jb25zdCBHYW1lID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IHBsYXllckNoZWNrQm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG5cbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcblxuICBjb25zdCByYW5kb21pemVyID0gY29tcHV0ZXJCb2FyZC5yYW5kb21pemU7XG4gIGNvbnN0IHJhbmRvbUF4aWVzID0gY29tcHV0ZXJCb2FyZC5yYW5kb21BeGlzO1xuXG4gIGNvbnN0IGNoZWNrU2V0dXAgPSAocGxheWVyQ2hlY2tTaGlwcykgPT4ge1xuICAgIGlmIChwbGF5ZXJDaGVja1NoaXBzLmxlbmd0aCA9PT0gNSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwR2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJDaGVja1ZhbHVlcyA9IHBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCk7XG5cbiAgICBpZiAoIWNoZWNrU2V0dXAocGxheWVyQ2hlY2tWYWx1ZXMuY3VycmVudFNoaXBzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcGxheWVyQm9hcmQucGxhY2VBbGxTaGlwcyhwbGF5ZXJDaGVja1ZhbHVlcy5jdXJyZW50U2hpcHMpO1xuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tCb2F0cyA9IChjb29yZHMpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJDaGVja1ZhbHVlcyA9IHBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCk7XG5cbiAgICBpZiAoIWNoZWNrU2V0dXAocGxheWVyQ2hlY2tWYWx1ZXMuY3VycmVudFNoaXBzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgY3VycmVudEF0dGFjayA9IGNvbXB1dGVyQm9hcmQucmVjaWV2ZUF0dGFjayhjb29yZHMpO1xuICAgIGlmICghY3VycmVudEF0dGFjaykgcmV0dXJuIGZhbHNlO1xuICAgIHBsYXllckJvYXJkLnJlY2lldmVSYW5kb21BdHRhY2socmFuZG9taXplcik7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBzZXR1cFNoaXAgPSAobG9jYXRpb24sIGF4aXMpID0+XG4gICAgcGxheWVyQ2hlY2tCb2FyZC5wbGF5ZXJQbGFjZVNoaXAobG9jYXRpb24sIGF4aXMpO1xuXG4gIGNvbnN0IGdhbWVJc092ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQ2hlY2tTaGlwcyA9IHBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCkuY3VycmVudFNoaXBzO1xuICAgIGlmICghY2hlY2tTZXR1cChwbGF5ZXJDaGVja1NoaXBzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKGNvbXB1dGVyQm9hcmQuaXNBbGxTdW5rKCkpIHtcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdZb3UgV29uIPCfmIMnLCBnYW1lRmluaXNoZWQ6IHRydWUgfTtcbiAgICB9XG5cbiAgICBpZiAocGxheWVyQm9hcmQuaXNBbGxTdW5rKCkpIHtcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdZb3UgTG9zdCDwn5iiJywgZ2FtZUZpbmlzaGVkOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiB7IGdhbWVGaW5pc2hlZDogZmFsc2UgfTtcbiAgfTtcblxuICBjb25zdCBhcnJhbmdlQmxvY2tzID0gKG1vdXNlUG9zaXRpb24sIGN1cnJlbnRSb3RhdGlvbikgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm9hcmRPYmplY3RzID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIGNvbnN0IHNoaXBUeXBlT2JqZWN0ID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRUeXBlT2ZQbGFjZWRTaGlwKFxuICAgICAgY2hlY2tib2FyZE9iamVjdHMuY3VycmVudFNoaXBzXG4gICAgKTtcblxuICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgbW91c2VQb3NpdGlvbixcbiAgICAgIHNoaXBUeXBlT2JqZWN0LnNoaXBMZW5ndGgsXG4gICAgICBjdXJyZW50Um90YXRpb25cbiAgICApO1xuICAgIHJldHVybiBjdXJyZW50U2hpcDtcbiAgfTtcblxuICBjb25zdCBnZXRHYW1lVmFsdWVzID0gKCkgPT4gKHtcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBjb21wdXRlckJvYXJkLFxuICAgIHBsYXllckNoZWNrQm9hcmQsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgY2hlY2tTZXR1cCxcbiAgICBhdHRhY2tCb2F0cyxcbiAgICBzZXR1cEdhbWUsXG4gICAgZ2FtZUlzT3ZlcixcbiAgICBzZXR1cFNoaXAsXG4gICAgZ2V0R2FtZVZhbHVlcyxcbiAgICBhcnJhbmdlQmxvY2tzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImNvbnN0IFBvc2l0aW9uID0gKCkgPT4ge1xuICBjb25zdCBjcmVhdGVQb3NpdGlvbiA9ICh4Q29vcmQsIHlDb29yZCkgPT4gKHsgeENvb3JkLCB5Q29vcmQgfSk7XG5cbiAgY29uc3QgY2hlY2tPdXRPZkJvdW5jZSA9IChuZXdQb3NpdGlvbikgPT4ge1xuICAgIGlmIChuZXdQb3NpdGlvbi54Q29vcmQgPiA5IHx8IG5ld1Bvc2l0aW9uLnlDb29yZCA+IDkpIHJldHVybiB0cnVlO1xuICAgIGlmIChuZXdQb3NpdGlvbi54Q29vcmQgPCAwIHx8IG5ld1Bvc2l0aW9uLnlDb29yZCA8IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBhZGRQb3NpdGlvbiA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMikgPT4ge1xuICAgIGlmIChwb3NpdGlvbjEgPT09IGZhbHNlIHx8IHBvc2l0aW9uMiA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gY3JlYXRlUG9zaXRpb24ocG9zaXRpb24xLnhDb29yZCwgcG9zaXRpb24xLnlDb29yZCk7XG4gICAgbmV3UG9zaXRpb24ueENvb3JkICs9IHBvc2l0aW9uMi54Q29vcmQ7XG4gICAgbmV3UG9zaXRpb24ueUNvb3JkICs9IHBvc2l0aW9uMi55Q29vcmQ7XG5cbiAgICBpZiAoY2hlY2tPdXRPZkJvdW5jZShuZXdQb3NpdGlvbikpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBuZXdQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBtdWx0aXBseVBvc2l0aW9uID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uMSA9PT0gZmFsc2UgfHwgcG9zaXRpb24yID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBjcmVhdGVQb3NpdGlvbihwb3NpdGlvbjEueENvb3JkLCBwb3NpdGlvbjEueUNvb3JkKTtcbiAgICBuZXdQb3NpdGlvbi54Q29vcmQgKj0gcG9zaXRpb24yLnhDb29yZDtcbiAgICBuZXdQb3NpdGlvbi55Q29vcmQgKj0gcG9zaXRpb24yLnlDb29yZDtcblxuICAgIGlmIChjaGVja091dE9mQm91bmNlKG5ld1Bvc2l0aW9uKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwgPSAocG9zaXRpb24xLCBwb3NpdGlvbjIsIGF4aXMpID0+IHtcbiAgICBpZiAocG9zaXRpb24xW2F4aXNdID09PSBwb3NpdGlvbjJbYXhpc10gKyAxKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAocG9zaXRpb24xW2F4aXNdID09PSBwb3NpdGlvbjJbYXhpc10pIHJldHVybiB0cnVlO1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSAtIDEpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBjb21wYXJlUG9zaXRpb24gPSAocG9zaXRpb24xLCBwb3NpdGlvbjIpID0+IHtcbiAgICBpZiAoIWNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwocG9zaXRpb24xLCBwb3NpdGlvbjIsICd4Q29vcmQnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwocG9zaXRpb24xLCBwb3NpdGlvbjIsICd5Q29vcmQnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVBvc2l0aW9uLFxuICAgIGFkZFBvc2l0aW9uLFxuICAgIG11bHRpcGx5UG9zaXRpb24sXG4gICAgY29tcGFyZVBvc2l0aW9uLFxuICAgIGNoZWNrT3V0T2ZCb3VuY2UsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3NpdGlvbjtcbiIsImNvbnN0IFByYWN0aWNhbCA9ICgpID0+IHtcbiAgY29uc3QgY29weUFycmF5ID0gKGFycmF5KSA9PiB7XG4gICAgY29uc3QgbmV3QXJyYXkgPSBbXTtcblxuICAgIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIG5ld0FycmF5LnB1c2goaXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3QXJyYXk7XG4gIH07XG5cbiAgY29uc3QgaXNPYmplY3QgPSAoY3VycmVudE9iamVjdCkgPT4ge1xuICAgIGlmICh0eXBlb2YgY3VycmVudE9iamVjdCA9PT0gJ29iamVjdCcgJiYgY3VycmVudE9iamVjdCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBjaGVja09iamVjdCA9IChvYmplY3QxLCBvYmplY3QyKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgc2Vjb25kSW5kZXggPSAwO1xuXG4gICAgbGV0IG9iamVjdElzRXF1YWwgPSB0cnVlO1xuXG4gICAgY29uc3QgY3VycmVudE9iamVjdCA9IG9iamVjdDE7XG4gICAgY29uc3QgY3VycmVudE9iamVjdDIgPSBvYmplY3QyO1xuXG4gICAgY29uc3QgY3VycmVudE9iamVjdFZhbHVlcyA9IE9iamVjdC52YWx1ZXMoY3VycmVudE9iamVjdCk7XG4gICAgY29uc3QgY3VycmVudE9iamVjdDJWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGN1cnJlbnRPYmplY3QyKTtcblxuICAgIGNvbnN0IG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyhjdXJyZW50T2JqZWN0KTtcbiAgICBjb25zdCBvYmplY3RLZXlzMiA9IE9iamVjdC5rZXlzKGN1cnJlbnRPYmplY3QyKTtcblxuICAgIG9iamVjdEtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoa2V5ICE9PSBvYmplY3RLZXlzMltpbmRleF0pIG9iamVjdElzRXF1YWwgPSBmYWxzZTtcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgfSk7XG5cbiAgICBpZiAoIW9iamVjdElzRXF1YWwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAob2JqZWN0S2V5cy5sZW5ndGggIT09IG9iamVjdEtleXMyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY3VycmVudE9iamVjdFZhbHVlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBpdGVtMiA9IGN1cnJlbnRPYmplY3QyVmFsdWVzW3NlY29uZEluZGV4XTtcblxuICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pICYmIGlzT2JqZWN0KGl0ZW0yKSkge1xuICAgICAgICBjb25zdCBjaGVja09iamVjdEJvb2wgPSBjaGVja09iamVjdChpdGVtLCBpdGVtMik7XG5cbiAgICAgICAgaWYgKCFjaGVja09iamVjdEJvb2wpIG9iamVjdElzRXF1YWwgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbSAhPT0gaXRlbTIpIHtcbiAgICAgICAgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBzZWNvbmRJbmRleCArPSAxO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iamVjdElzRXF1YWw7XG4gIH07XG5cbiAgcmV0dXJuIHsgY29weUFycmF5LCBjaGVja09iamVjdCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJhY3RpY2FsO1xuIiwiaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuXG5jb25zdCBTaGlwID0gKCkgPT4ge1xuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG5cbiAgY29uc3QgZ2V0QWRkZWRQb3NpdGlvbiA9IChheGlzKSA9PiB7XG4gICAgbGV0IGFkZGVkUG9zaXRpb247XG5cbiAgICBpZiAoYXhpcyA9PT0gJ3gnKSBhZGRlZFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oMSwgMCk7XG4gICAgZWxzZSBhZGRlZFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oMCwgMSk7XG5cbiAgICByZXR1cm4gYWRkZWRQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVTaGlwID0gKHBvc2l0aW9uMSwgbGVuZ3RoMSwgYXhpcykgPT4ge1xuICAgIGlmIChsZW5ndGgxID09PSAwIHx8IGxlbmd0aDEgPiA1KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHBvc2l0aW9uLmNoZWNrT3V0T2ZCb3VuY2UocG9zaXRpb24xKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgcG9wdWxhdGVTaGlwcyA9IChjdXJyZW50UG9zaXRpb24sIGxhdGVzdExlbmd0aCwgbGF0ZXN0QXJyYXkpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRBcnJheSA9IGxhdGVzdEFycmF5O1xuICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uO1xuXG4gICAgICBpZiAoY3VycmVudFBvc2l0aW9uID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKGxhdGVzdExlbmd0aCA9PT0gMCkgcmV0dXJuIGN1cnJlbnRBcnJheTtcbiAgICAgIGlmIChsYXRlc3RMZW5ndGggPT09IGxlbmd0aDEpIHtcbiAgICAgICAgY3VycmVudEFycmF5LnB1c2goY3VycmVudFBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIHBvcHVsYXRlU2hpcHMoY3VycmVudFBvc2l0aW9uLCBsYXRlc3RMZW5ndGggLSAxLCBjdXJyZW50QXJyYXkpO1xuICAgICAgfVxuICAgICAgY29uc3QgYWRkZWRQb3NpdGlvbiA9IGdldEFkZGVkUG9zaXRpb24oYXhpcyk7XG4gICAgICBuZXdQb3NpdGlvbiA9IHBvc2l0aW9uLmFkZFBvc2l0aW9uKG5ld1Bvc2l0aW9uLCBhZGRlZFBvc2l0aW9uKTtcblxuICAgICAgaWYgKCFuZXdQb3NpdGlvbikgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICAgICAgY3VycmVudEFycmF5LnB1c2gobmV3UG9zaXRpb24pO1xuXG4gICAgICBjb25zdCBhcnJheUxlbmd0aCA9IGN1cnJlbnRBcnJheS5sZW5ndGggLSAxO1xuXG4gICAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhcbiAgICAgICAgY3VycmVudEFycmF5W2FycmF5TGVuZ3RoXSxcbiAgICAgICAgbGF0ZXN0TGVuZ3RoIC0gMSxcbiAgICAgICAgY3VycmVudEFycmF5XG4gICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhwb3NpdGlvbjEsIGxlbmd0aDEsIFtdLCBmYWxzZSk7XG4gIH07XG5cblxuXG4gIGNvbnN0IGlzU3VuayA9IChzaGlwQXJyYXkpID0+IHtcbiAgICBpZiAoc2hpcEFycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGhpdCA9IChwb3NpdGlvbnNBcnJheSwgcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBoaXRBcnJheSA9IHBvc2l0aW9uc0FycmF5LmZpbHRlcigocG9zKSA9PiB7XG4gICAgICBpZiAocG9zLnhDb29yZCA9PT0gcG9zaXRpb24ueENvb3JkICYmIHBvcy55Q29vcmQgPT09IHBvc2l0aW9uLnlDb29yZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBjb25zdCBzaGlwQXJyYXlzID0gcG9zaXRpb25zQXJyYXkuZmlsdGVyKChwb3MpID0+IHtcbiAgICAgIGlmIChwb3MueENvb3JkID09PSBwb3NpdGlvbi54Q29vcmQgJiYgcG9zLnlDb29yZCA9PT0gcG9zaXRpb24ueUNvb3JkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgaGl0QXJyYXksIHNoaXBBcnJheXMgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVNoaXAsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJpbXBvcnQgRG9tIGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL21haW4uanMnO1xuXG5jb25zdCBVaSA9ICgpID0+IHtcbiAgY29uc3QgZG9tID0gRG9tKCk7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcblxuICBjb25zdCByZW5kZXJTcGVlZCA9IDE7XG5cbiAgbGV0IGJsb2NrU2l6ZSA9IDQyO1xuICBsZXQgYWN0aXZlR2FtZSA9IEdhbWUoKTtcbiAgbGV0IHBsYWNlZFNoaXAgPSBmYWxzZTtcbiAgbGV0IGF4aXMgPSAneSc7XG4gIGxldCBtb3VzZUJsb2NrTG9jYXRpb24gPSBmYWxzZTtcblxuICBjb25zdCBjcmVhdGVEb21FbGVtZW50ID0gKGVsZW1lbnROYW1lKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcblxuICBjb25zdCBnZXRNb3VzZVBvc2l0aW9uID0gKG9mZnNldFgsIG9mZnNldFkpID0+IHtcbiAgICBjb25zdCB4Q29vcmQgPSBNYXRoLmZsb29yKG9mZnNldFggLyBibG9ja1NpemUpO1xuICAgIGNvbnN0IHlDb29yZCA9IE1hdGguZmxvb3Iob2Zmc2V0WSAvIGJsb2NrU2l6ZSk7XG5cbiAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oeENvb3JkLCB5Q29vcmQpO1xuXG4gICAgY29uc3Qgb3V0T2ZCb3VuY2UgPSBwb3NpdGlvbi5jaGVja091dE9mQm91bmNlKG1vdXNlUG9zaXRpb24pO1xuXG4gICAgaWYgKG91dE9mQm91bmNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gbW91c2VQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBmaW5kTW91c2VQb3NpdGlvbiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRNb3VzZVBvc2l0aW9uID0gZ2V0TW91c2VQb3NpdGlvbihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcblxuICAgIG1vdXNlQmxvY2tMb2NhdGlvbiA9IGN1cnJlbnRNb3VzZVBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGZpbmRUb3VjaFBvc2l0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB0b3VjaE9mZnNldFggPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFggLSByZWN0Lng7XG4gICAgY29uc3QgdG91Y2hPZmZzZXRZID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZIC0gcmVjdC55O1xuXG4gICAgY29uc3QgdG91Y2hQb3NpdGlvbiA9IGdldE1vdXNlUG9zaXRpb24odG91Y2hPZmZzZXRYLCB0b3VjaE9mZnNldFkpO1xuICAgIG1vdXNlQmxvY2tMb2NhdGlvbiA9IHRvdWNoUG9zaXRpb247XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VCbG9ja1NpemUgPSAobWF0Y2hNZWRpYSkgPT4ge1xuICAgIGJsb2NrU2l6ZSA9IDQyO1xuICAgIGlmIChtYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA5NjBweCknKS5tYXRjaGVzKSBibG9ja1NpemUgPSAzMDtcbiAgICBpZiAobWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNDcwcHgpJykubWF0Y2hlcykgYmxvY2tTaXplID0gMjE7XG4gICAgaWYgKG1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDMyMHB4KScpLm1hdGNoZXMpIGJsb2NrU2l6ZSA9IDE1O1xuICAgIHJldHVybiBibG9ja1NpemU7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQmxvY2tFbGVtZW50ID0gKGJsb2NrQ2xhc3MsIGNyZWF0ZUJsb2NrKSA9PiB7XG4gICAgbGV0IGxhdGVzdENsYXNzID0gYmxvY2tDbGFzcztcblxuICAgIGlmIChcbiAgICAgIGxhdGVzdENsYXNzICE9PSAnaGl0QmxvY2snICYmXG4gICAgICBsYXRlc3RDbGFzcyAhPT0gJ21pc3NCbG9jaycgJiZcbiAgICAgIGxhdGVzdENsYXNzICE9PSAnY3Vyc29yQmxvY2snXG4gICAgKSB7XG4gICAgICBsYXRlc3RDbGFzcyA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrRWxlbWVudCA9IGNyZWF0ZUJsb2NrKCdkaXYnKTtcbiAgICBibG9ja0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcbiAgICBpZiAobGF0ZXN0Q2xhc3MgIT09ICcnKSBibG9ja0VsZW1lbnQuY2xhc3NMaXN0LmFkZChsYXRlc3RDbGFzcyk7XG5cbiAgICByZXR1cm4gYmxvY2tFbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGRpc2FibGVTdGFydGVyVWkgPSAoKSA9PiB0cnVlO1xuXG4gIGNvbnN0IGNyZWF0ZVNoaXBCbG9jayA9IChzaGlwUG9zaXRpb24sIGxhdGVzdEJsb2NrU2l6ZSwgc2hpcFR5cGUpID0+IHtcbiAgICBjb25zdCBzaGlwQmxvY2sgPSBjcmVhdGVCbG9ja0VsZW1lbnQoc2hpcFR5cGUsIGNyZWF0ZURvbUVsZW1lbnQpO1xuXG4gICAgY29uc3QgcmVhbFBvc2l0aW9uWCA9IE1hdGguZmxvb3Ioc2hpcFBvc2l0aW9uLnhDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgY29uc3QgcmVhbFBvc2l0aW9uWSA9IE1hdGguZmxvb3Ioc2hpcFBvc2l0aW9uLnlDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgc2hpcEJsb2NrLnN0eWxlLmxlZnQgPSBgJHtyZWFsUG9zaXRpb25YfXB4YDtcbiAgICBzaGlwQmxvY2suc3R5bGUudG9wID0gYCR7cmVhbFBvc2l0aW9uWX1weGA7XG5cbiAgICByZXR1cm4gc2hpcEJsb2NrO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckFscmVhZHlQbGFjZWRTaGlwcyA9IChzaGlwR3JpZCwgbGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgY29uc3QgZ2FtZVZhbHVlcyA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuICAgIGNvbnN0IGNoZWNrQm9hcmRTaGlwcyA9XG4gICAgICBnYW1lVmFsdWVzLnBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCkuY3VycmVudFNoaXBzO1xuXG4gICAgY2hlY2tCb2FyZFNoaXBzLmZvckVhY2goKHBsYXllckNoZWNrU2hpcHMpID0+IHtcbiAgICAgIHBsYXllckNoZWNrU2hpcHMuZm9yRWFjaCgoYm9hdCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwQmxvY2sgPSBjcmVhdGVTaGlwQmxvY2soYm9hdCwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgICAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQoc2hpcEJsb2NrKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclBsYWNlZFNoaXAgPSAobGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuICAgIGNvbnN0IHsgc2hpcEdyaWQgfSA9IGVsZW1lbnQ7XG5cbiAgICBpZiAoIXBsYWNlZFNoaXApIHJldHVybiBwbGFjZWRTaGlwO1xuXG4gICAgc2hpcEdyaWQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBwbGFjZWRTaGlwLmZvckVhY2goKHNoaXBQb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc2hpcEJsb2NrID0gY3JlYXRlU2hpcEJsb2NrKHNoaXBQb3NpdGlvbiwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgIHNoaXBHcmlkLmFwcGVuZENoaWxkKHNoaXBCbG9jayk7XG4gICAgfSk7XG5cbiAgICByZW5kZXJBbHJlYWR5UGxhY2VkU2hpcHMoc2hpcEdyaWQsIGxhdGVzdEJsb2NrU2l6ZSk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlQXhpcyA9ICgpID0+IHtcbiAgICBpZiAoYXhpcyA9PT0gJ3knKSBheGlzID0gJ3gnO1xuICAgIGVsc2UgYXhpcyA9ICd5JztcbiAgfTtcblxuICBjb25zdCBtb3ZlU2hpcEJ5RGlyZWN0aW9uID0gKG1vdXNlTG9jYXRpb24sIGN1cnJlbnRTaGlwLCBjdXJyZW50QXhpcykgPT4ge1xuICAgIGxldCBsYXRlc3RTaGlwID0gZmFsc2U7XG5cbiAgICBpZiAocG9zaXRpb24uY2hlY2tPdXRPZkJvdW5jZShjdXJyZW50U2hpcFswXSkpIHJldHVybiBsYXRlc3RTaGlwO1xuXG4gICAgY29uc3QgbmV3WFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICBtb3VzZUxvY2F0aW9uLnhDb29yZCxcbiAgICAgIDBcbiAgICApLnhDb29yZDtcblxuICAgIGNvbnN0IG5ld1lQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKFxuICAgICAgMCxcbiAgICAgIG1vdXNlTG9jYXRpb24ueUNvb3JkXG4gICAgKS55Q29vcmQ7XG5cbiAgICBsZXQgbmV3U2hpcFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICBuZXdYUG9zaXRpb24sXG4gICAgICBjdXJyZW50U2hpcFswXS55Q29vcmRcbiAgICApO1xuXG4gICAgaWYgKGN1cnJlbnRBeGlzID09PSAneCcpIHtcbiAgICAgIG5ld1NoaXBQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKFxuICAgICAgICBjdXJyZW50U2hpcFswXS54Q29vcmQsXG4gICAgICAgIG5ld1lQb3NpdGlvblxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsYXRlc3RTaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgbmV3U2hpcFBvc2l0aW9uLFxuICAgICAgY3VycmVudFNoaXAubGVuZ3RoLFxuICAgICAgY3VycmVudEF4aXNcbiAgICApO1xuXG4gICAgcmV0dXJuIGxhdGVzdFNoaXA7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VQbGF5ZXJTaGlwID0gKGxhdGVzdFNoaXAsIGxhdGVzdEF4aXMsIGxhdGVzdEdhbWUpID0+IHtcbiAgICBpZiAobGF0ZXN0U2hpcCkgbGF0ZXN0R2FtZS5zZXR1cFNoaXAobGF0ZXN0U2hpcFswXSwgbGF0ZXN0QXhpcyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUGxheWVyU2hpcEV2ZW50ID0gKCkgPT4ge1xuICAgIHBsYWNlUGxheWVyU2hpcChwbGFjZWRTaGlwLCBheGlzLCBhY3RpdmVHYW1lKTtcbiAgfTtcblxuICBjb25zdCByZXNldEdhbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgZWxlbWVudC5jb21wdXRlckdyaWQuaW5uZXJIVE1MID0gJyc7XG4gICAgZWxlbWVudC5wbGF5ZXJHcmlkLmlubmVySFRNTCA9ICcnO1xuXG4gICAgZWxlbWVudC5zZWN0aW9uU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZWxlbWVudC5zaGlwU2VsZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZWxlbWVudC5nYW1lRmluaXNoZWRTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZWxlbWVudC5nYW1lT3ZlclRleHQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICByZXN0YXJ0R2FtZSgpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFVpRXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmaW5kTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5zaGlwTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZmluZFRvdWNoUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VQbGF5ZXJTaGlwRXZlbnQpO1xuXG4gICAgZWxlbWVudC5yb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VBeGlzKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVVaUV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBlbGVtZW50LnNoaXBMYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmaW5kTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5zaGlwTGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZmluZFRvdWNoUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VQbGF5ZXJTaGlwRXZlbnQpO1xuXG4gICAgZWxlbWVudC5yb3RhdGVCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VBeGlzKTtcbiAgfTtcblxuICBjb25zdCBhZGRFbmRpbmdFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuICAgIGVsZW1lbnQucmVzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0R2FtZSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlRW5kaW5nRXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICBlbGVtZW50LnJlc3RhcnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbGVtZW50LnJlc3RhcnQpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUdhbWVFdmVudHMgPSAoKSA9PiB7XG4gICAgYWRkRW5kaW5nRXZlbnRzKCk7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGNoYW5nZU1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuY29tcHV0ZXJHcmlkTGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICdtb3VzZW1vdmUnLFxuICAgICAgZmluZE1vdXNlUG9zaXRpb25cbiAgICApO1xuICAgIGVsZW1lbnQuY29tcHV0ZXJHcmlkTGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhdHRhY2tTaGlwcyk7XG4gIH07XG5cbiAgY29uc3QgYWRkR2FtZUV2ZW50cyA9ICgpID0+IHtcbiAgICByZW1vdmVVaUV2ZW50cygpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgY2hhbmdlTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5jb21wdXRlckdyaWRMYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmaW5kTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5jb21wdXRlckdyaWRMYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGF0dGFja1NoaXBzKTtcbiAgfTtcblxuICBjb25zdCBjaGVja01vdXNlVGFyZ2V0ID0gKGVsZW1lbnRDbGFzcykgPT4ge1xuICAgIGlmIChlbGVtZW50Q2xhc3MgIT09ICdncmlkT3ZlcmxheSBjb21wdXRlckdyaWRPdmVybGF5JykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZU1vdXNlUG9zaXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZVRhcmdldCA9IGNoZWNrTW91c2VUYXJnZXQoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSk7XG4gICAgaWYgKCFtb3VzZVRhcmdldCkgbW91c2VCbG9ja0xvY2F0aW9uID0gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrU2hpcHMgPSAoKSA9PiB7XG4gICAgYWN0aXZlR2FtZS5hdHRhY2tCb2F0cyhtb3VzZUJsb2NrTG9jYXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclNoaXBzID0gKHNoaXBzLCBncmlkLCBsYXRlc3RCbG9ja1NpemUpID0+IHtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwR3JvdXApID0+IHtcbiAgICAgIHNoaXBHcm91cC5mb3JFYWNoKChib2F0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBFbGVtZW50ID0gY3JlYXRlU2hpcEJsb2NrKGJvYXQsIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoc2hpcEVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVySGl0cyA9IChzaGlwcywgc2hpcFR5cGUsIGdyaWQsIGxhdGVzdEJsb2NrU2l6ZSkgPT4ge1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXBQb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc2hpcEVsZW1lbnQgPSBjcmVhdGVTaGlwQmxvY2soXG4gICAgICAgIHNoaXBQb3NpdGlvbixcbiAgICAgICAgbGF0ZXN0QmxvY2tTaXplLFxuICAgICAgICBzaGlwVHlwZVxuICAgICAgKTtcbiAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoc2hpcEVsZW1lbnQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckdyaWRzID0gKGJsb2NrU2l6ZTIsIG1vdXNlUG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBnYW1lVmFsdWVzID0gYWN0aXZlR2FtZS5nZXRHYW1lVmFsdWVzKCk7XG5cbiAgICBjb25zdCB7IHBsYXllckdyaWQgfSA9IGRvbS5nZXRFbGVtZW50cygpO1xuICAgIGNvbnN0IHsgY29tcHV0ZXJHcmlkIH0gPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAgIHBsYXllckdyaWQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29tcHV0ZXJHcmlkLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgcGxheWVyQm9hcmRWYWx1ZXMgPSBnYW1lVmFsdWVzLnBsYXllckJvYXJkLmdldFZhbHVlcygpO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmRWYWx1ZXMgPSBnYW1lVmFsdWVzLmNvbXB1dGVyQm9hcmQuZ2V0VmFsdWVzKCk7XG4gICAgcmVuZGVyU2hpcHMocGxheWVyQm9hcmRWYWx1ZXMuY3VycmVudFNoaXBzLCBwbGF5ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgICByZW5kZXJIaXRzKHBsYXllckJvYXJkVmFsdWVzLmhpdHMsICdoaXRCbG9jaycsIHBsYXllckdyaWQsIGJsb2NrU2l6ZTIpO1xuICAgIHJlbmRlckhpdHMocGxheWVyQm9hcmRWYWx1ZXMubWlzc2VzLCAnbWlzc0Jsb2NrJywgcGxheWVyR3JpZCwgYmxvY2tTaXplMik7XG5cbiAgICByZW5kZXJIaXRzKGNvbXB1dGVyQm9hcmRWYWx1ZXMuaGl0cywgJ2hpdEJsb2NrJywgY29tcHV0ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgICByZW5kZXJIaXRzKFxuICAgICAgY29tcHV0ZXJCb2FyZFZhbHVlcy5taXNzZXMsXG4gICAgICAnbWlzc0Jsb2NrJyxcbiAgICAgIGNvbXB1dGVyR3JpZCxcbiAgICAgIGJsb2NrU2l6ZTJcbiAgICApO1xuXG4gICAgY29uc3QgbW91c2VTaGlwID0gc2hpcC5jcmVhdGVTaGlwKG1vdXNlUG9zaXRpb24sIDEsICd4Jyk7XG5cbiAgICBpZiAobW91c2VTaGlwKSB7XG4gICAgICByZW5kZXJIaXRzKG1vdXNlU2hpcCwgJ2N1cnNvckJsb2NrJywgY29tcHV0ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU3RhdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2FtZVZhbHVlcyA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuXG4gICAgY29uc3QgeyBwbGF5ZXJIaXRzLCBwbGF5ZXJNaXNzZXMgfSA9IGRvbS5nZXRFbGVtZW50cygpO1xuICAgIGNvbnN0IHsgY29tcHV0ZXJIaXRzLCBjb21wdXRlck1pc3NlcyB9ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBjb25zdCBwbGF5ZXJCb2FyZFZhbHVlcyA9IGdhbWVWYWx1ZXMucGxheWVyQm9hcmQuZ2V0VmFsdWVzKCk7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZFZhbHVlcyA9IGdhbWVWYWx1ZXMuY29tcHV0ZXJCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIHBsYXllckhpdHMudGV4dENvbnRlbnQgPSBgSGl0cyAtICR7cGxheWVyQm9hcmRWYWx1ZXMuaGl0cy5sZW5ndGh9YDtcbiAgICBwbGF5ZXJNaXNzZXMudGV4dENvbnRlbnQgPSBgTWlzc2VzIC0gJHtwbGF5ZXJCb2FyZFZhbHVlcy5taXNzZXMubGVuZ3RofWA7XG5cbiAgICBjb21wdXRlckhpdHMudGV4dENvbnRlbnQgPSBgSGl0cyAtICR7Y29tcHV0ZXJCb2FyZFZhbHVlcy5oaXRzLmxlbmd0aH1gO1xuICAgIGNvbXB1dGVyTWlzc2VzLnRleHRDb250ZW50ID0gYE1pc3NlcyAtICR7Y29tcHV0ZXJCb2FyZFZhbHVlcy5taXNzZXMubGVuZ3RofWA7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUdhbWVPdmVyVWkgPSAoc3RhdHVzKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAgIGVsZW1lbnRzLmNvbXB1dGVyR3JpZC5pbm5lckhUTUwgPSAnJztcbiAgICBlbGVtZW50cy5wbGF5ZXJHcmlkLmlubmVySFRNTCA9ICcnO1xuXG4gICAgcmVtb3ZlR2FtZUV2ZW50cygpO1xuICAgIGFkZEVuZGluZ0V2ZW50cygpO1xuICAgIGVsZW1lbnRzLmdhbWVPdmVyVGV4dC5pbm5lckhUTUwgPSBzdGF0dXMubWVzc2FnZTtcblxuICAgIGVsZW1lbnRzLnNoaXBTZWxlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbGVtZW50cy5zZWN0aW9uU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZWxlbWVudHMuZ2FtZUZpbmlzaGVkU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgZWxlbWVudHMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfTtcblxuICBjb25zdCByZW5kZXJHYW1lID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZ2FtZVN0YXR1cyA9IGFjdGl2ZUdhbWUuZ2FtZUlzT3ZlcigpO1xuXG4gICAgICBjb25zdCBsYXRlc3RCbG9ja1NpemUgPSBjaGFuZ2VCbG9ja1NpemUod2luZG93Lm1hdGNoTWVkaWEpO1xuICAgICAgcmVuZGVyR3JpZHMobGF0ZXN0QmxvY2tTaXplLCBtb3VzZUJsb2NrTG9jYXRpb24pO1xuICAgICAgcmVuZGVyU3RhdHMoKTtcblxuICAgICAgaWYgKCFnYW1lU3RhdHVzLmdhbWVGaW5pc2hlZCkgcmVuZGVyR2FtZShsYXRlc3RCbG9ja1NpemUpO1xuICAgICAgZWxzZSBkaXNwbGF5R2FtZU92ZXJVaShnYW1lU3RhdHVzKTtcbiAgICB9LCByZW5kZXJTcGVlZCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlU2hpcFNlY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAgIGVsZW1lbnRzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbGVtZW50cy5zZWN0aW9uU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZWxlbWVudHMuc2hpcEdyaWQuaW5uZXJIVE1MID0gJyc7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIHJlbW92ZVNoaXBTZWN0aW9uKCk7XG5cbiAgICBhY3RpdmVHYW1lLnNldHVwR2FtZSgpO1xuICAgIGFkZEdhbWVFdmVudHMoKTtcblxuICAgIHJlbmRlckdhbWUoKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJTZWxlY3Rpb25HcmlkID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZ2FtZVZhbHVlID0gYWN0aXZlR2FtZS5nZXRHYW1lVmFsdWVzKCk7XG4gICAgICBjb25zdCBjaGVja0JvYXJkU2hpcHMgPVxuICAgICAgICBnYW1lVmFsdWUucGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKS5jdXJyZW50U2hpcHM7XG5cbiAgICAgIGNoYW5nZUJsb2NrU2l6ZSh3aW5kb3cubWF0Y2hNZWRpYSk7XG5cbiAgICAgIGlmIChhY3RpdmVHYW1lLmNoZWNrU2V0dXAoZ2FtZVZhbHVlLnBsYXllckNoZWNrQm9hcmQpKSBkaXNhYmxlU3RhcnRlclVpKCk7XG5cbiAgICAgIGlmIChtb3VzZUJsb2NrTG9jYXRpb24pIHtcbiAgICAgICAgbGV0IGN1cnJlbnRTaGlwID0gYWN0aXZlR2FtZS5hcnJhbmdlQmxvY2tzKG1vdXNlQmxvY2tMb2NhdGlvbiwgYXhpcyk7XG4gICAgICAgIGlmICghY3VycmVudFNoaXAgJiYgcGxhY2VkU2hpcCkge1xuICAgICAgICAgIGN1cnJlbnRTaGlwID0gbW92ZVNoaXBCeURpcmVjdGlvbihcbiAgICAgICAgICAgIG1vdXNlQmxvY2tMb2NhdGlvbixcbiAgICAgICAgICAgIHBsYWNlZFNoaXAsXG4gICAgICAgICAgICBheGlzXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50U2hpcCkgcGxhY2VkU2hpcCA9IGN1cnJlbnRTaGlwO1xuXG4gICAgICAgIGlmIChwbGFjZWRTaGlwKSByZW5kZXJQbGFjZWRTaGlwKGJsb2NrU2l6ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghYWN0aXZlR2FtZS5jaGVja1NldHVwKGNoZWNrQm9hcmRTaGlwcykpIHJlbmRlclNlbGVjdGlvbkdyaWQoKTtcbiAgICAgIGVsc2Ugc3RhcnRHYW1lKGJsb2NrU2l6ZSk7XG4gICAgfSwgcmVuZGVyU3BlZWQpO1xuICB9O1xuXG4gIGNvbnN0IGdldFZhbHVlcyA9ICgpID0+ICh7XG4gICAgYmxvY2tTaXplLFxuICAgIHBsYWNlZFNoaXAsXG4gICAgYXhpcyxcbiAgICBtb3VzZUJsb2NrTG9jYXRpb24sXG4gIH0pO1xuXG4gIGNvbnN0IHJlc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIHJlbW92ZUVuZGluZ0V2ZW50cygpO1xuXG4gICAgcmVuZGVyU2VsZWN0aW9uR3JpZCgpO1xuXG4gICAgYmxvY2tTaXplID0gNDI7XG4gICAgYWN0aXZlR2FtZSA9IEdhbWUoKTtcbiAgICBwbGFjZWRTaGlwID0gZmFsc2U7XG4gICAgYXhpcyA9ICd5JztcbiAgICBtb3VzZUJsb2NrTG9jYXRpb24gPSBmYWxzZTtcblxuICAgIGFkZFVpRXZlbnRzKCk7XG4gIH07XG5cbiAgY29uc3QgYWN0aXZhdGVVaSA9ICgpID0+IHtcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvbS5nZXRQYWdlKCk7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBwYWdlQ29udGVudDtcbiAgICByZXN0YXJ0R2FtZSgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWN0aXZhdGVVaSxcbiAgICBjcmVhdGVCbG9ja0VsZW1lbnQsXG4gICAgZ2V0TW91c2VQb3NpdGlvbixcbiAgICBtb3ZlU2hpcEJ5RGlyZWN0aW9uLFxuICAgIGNoYW5nZUJsb2NrU2l6ZSxcbiAgICBjaGFuZ2VBeGlzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVWk7XG4iXSwibmFtZXMiOlsicmVmcmVzaGluZ0xvZ28iLCJEb20iLCJnZXRFbGVtZW50cyIsIm92ZXJsYXkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWN0aW9uU2NyZWVuIiwic2hpcFRleHQiLCJzaGlwR3JpZCIsInNoaXBMYXllciIsInJvdGF0ZUJ1dHRvbiIsImdyaWRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImhpdHMiLCJtaXNzZXMiLCJwbGF5ZXJHcmlkIiwicGxheWVySGl0cyIsInBsYXllck1pc3NlcyIsImNvbXB1dGVyR3JpZCIsImNvbXB1dGVySGl0cyIsInNoaXBTZWxlY3Rpb24iLCJjb21wdXRlck1pc3NlcyIsImNvbnRlbnQiLCJjb21wdXRlckdyaWRMYXllciIsInJlc3RhcnQiLCJnYW1lT3ZlclRleHQiLCJnYW1lRmluaXNoZWRTZWN0aW9uIiwiZ2V0UGFnZSIsIlBvc2l0aW9uIiwiU2hpcCIsIlByYWN0aWNhbCIsIkdhbWVib2FyZCIsInBvc2l0aW9uIiwic2hpcCIsInByYWN0aWNhbCIsImN1cnJlbnRTaGlwcyIsInJhbmRvbWl6ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbUF4aXMiLCJheGllcyIsImxlbmd0aCIsInBsYWNlQWxsU2hpcHMiLCJzaGlwc0FycmF5IiwiY29tcGFyZVNoaXBzQXJyYXkiLCJsYXRlc3RTaGlwc0FycmF5Iiwic2hpcHMiLCJzaGlwc0RvQ29sbGlkZSIsImZvckVhY2giLCJsYXRlc3RTaGlwcyIsImJvYXQiLCJsYXRlc3RCb2F0IiwiY29tcGFyZVBvc2l0aW9uIiwiZ2V0VHlwZU9mUGxhY2VkU2hpcCIsInNoaXBBcnJheSIsInNoaXBUeXBlcyIsInNoaXBUeXBlIiwic2hpcExlbmd0aCIsInBsYXllclBsYWNlU2hpcCIsImxvY2F0aW9uIiwiYXhpcyIsImN1cnJlbnRBcnJheSIsImNvcHlBcnJheSIsImxhdGVzdFNoaXAiLCJjcmVhdGVTaGlwIiwiaXNDb2xsaWRlZCIsInB1c2giLCJwbGFjZVJhbmRvbVNoaXBzIiwicmFuZG9taXplciIsInJhbmRvbUF4aWVzIiwicmFuZG9tUG9zaXRpb24iLCJjcmVhdGVQb3NpdGlvbiIsImxhdGVzdExlbmd0aCIsInJhbmRvbVNoaXAiLCJzaGlwQ29sbGlkZXMiLCJwbGFjZVNoaXBzUmFuZG9tbHkiLCJmaWx0ZXJBdHRhY2siLCJhcnJheSIsImN1cnJlbnRBdHRhY2siLCJjdXJyZW50QXR0YWNrQXJyYXkiLCJmaWx0ZXIiLCJpdGVtIiwieENvb3JkIiwieUNvb3JkIiwiaGFzSGl0U2hpcCIsImhpdFBvc2l0aW9uIiwibGF0ZXN0SGl0cyIsImxhdGVzdE1pc3NlcyIsImhhc0JlZW5IaXQiLCJoYXNCZWVuTWlzcyIsImF0dGFja1NoaXAiLCJsYXRlc3RQb3NpdGlvbiIsImN1cnJlbnRIaXRzIiwiY3VycmVudE1pc3NlcyIsImlzSGl0IiwicG9zaXRpb25zQXJyYXkiLCJoaXQiLCJoaXRBcnJheSIsInNoaXBBcnJheXMiLCJmaW5hbE9iamVjdCIsInJlY2lldmVBdHRhY2siLCJyZXN1bHQiLCJjcmVhdGVSYW5kb21Db29yZHMiLCJpc01vY2tSYW5kb20iLCJjYWxsUmFuZG9taXplciIsInJhbmRvbVgiLCJyYW5kb21ZIiwicmVjaWV2ZVJhbmRvbUF0dGFjayIsImhhc0hpdCIsImlzQWxsU3VuayIsImhhc1N1bmtlZCIsImlzU3VuayIsImdldFZhbHVlcyIsIkdhbWUiLCJwbGF5ZXJCb2FyZCIsImNvbXB1dGVyQm9hcmQiLCJwbGF5ZXJDaGVja0JvYXJkIiwiY2hlY2tTZXR1cCIsInBsYXllckNoZWNrU2hpcHMiLCJzZXR1cEdhbWUiLCJwbGF5ZXJDaGVja1ZhbHVlcyIsImF0dGFja0JvYXRzIiwiY29vcmRzIiwic2V0dXBTaGlwIiwiZ2FtZUlzT3ZlciIsIm1lc3NhZ2UiLCJnYW1lRmluaXNoZWQiLCJhcnJhbmdlQmxvY2tzIiwibW91c2VQb3NpdGlvbiIsImN1cnJlbnRSb3RhdGlvbiIsImNoZWNrYm9hcmRPYmplY3RzIiwic2hpcFR5cGVPYmplY3QiLCJjdXJyZW50U2hpcCIsImdldEdhbWVWYWx1ZXMiLCJjaGVja091dE9mQm91bmNlIiwibmV3UG9zaXRpb24iLCJhZGRQb3NpdGlvbiIsInBvc2l0aW9uMSIsInBvc2l0aW9uMiIsIm11bHRpcGx5UG9zaXRpb24iLCJjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsIiwibmV3QXJyYXkiLCJpc09iamVjdCIsImN1cnJlbnRPYmplY3QiLCJjaGVja09iamVjdCIsIm9iamVjdDEiLCJvYmplY3QyIiwiaW5kZXgiLCJzZWNvbmRJbmRleCIsIm9iamVjdElzRXF1YWwiLCJjdXJyZW50T2JqZWN0MiIsImN1cnJlbnRPYmplY3RWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjdXJyZW50T2JqZWN0MlZhbHVlcyIsIm9iamVjdEtleXMiLCJrZXlzIiwib2JqZWN0S2V5czIiLCJrZXkiLCJpdGVtMiIsImNoZWNrT2JqZWN0Qm9vbCIsImdldEFkZGVkUG9zaXRpb24iLCJhZGRlZFBvc2l0aW9uIiwibGVuZ3RoMSIsInBvcHVsYXRlU2hpcHMiLCJjdXJyZW50UG9zaXRpb24iLCJsYXRlc3RBcnJheSIsImFycmF5TGVuZ3RoIiwicG9zIiwiVWkiLCJkb20iLCJyZW5kZXJTcGVlZCIsImJsb2NrU2l6ZSIsImFjdGl2ZUdhbWUiLCJwbGFjZWRTaGlwIiwibW91c2VCbG9ja0xvY2F0aW9uIiwiY3JlYXRlRG9tRWxlbWVudCIsImVsZW1lbnROYW1lIiwiY3JlYXRlRWxlbWVudCIsImdldE1vdXNlUG9zaXRpb24iLCJvZmZzZXRYIiwib2Zmc2V0WSIsIm91dE9mQm91bmNlIiwiZmluZE1vdXNlUG9zaXRpb24iLCJldmVudCIsImN1cnJlbnRNb3VzZVBvc2l0aW9uIiwiZmluZFRvdWNoUG9zaXRpb24iLCJyZWN0IiwidGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG91Y2hPZmZzZXRYIiwidGFyZ2V0VG91Y2hlcyIsImNsaWVudFgiLCJ4IiwidG91Y2hPZmZzZXRZIiwiY2xpZW50WSIsInkiLCJ0b3VjaFBvc2l0aW9uIiwicHJldmVudERlZmF1bHQiLCJjaGFuZ2VCbG9ja1NpemUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImNyZWF0ZUJsb2NrRWxlbWVudCIsImJsb2NrQ2xhc3MiLCJjcmVhdGVCbG9jayIsImxhdGVzdENsYXNzIiwiYmxvY2tFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlzYWJsZVN0YXJ0ZXJVaSIsImNyZWF0ZVNoaXBCbG9jayIsInNoaXBQb3NpdGlvbiIsImxhdGVzdEJsb2NrU2l6ZSIsInNoaXBCbG9jayIsInJlYWxQb3NpdGlvblgiLCJyZWFsUG9zaXRpb25ZIiwic3R5bGUiLCJsZWZ0IiwidG9wIiwicmVuZGVyQWxyZWFkeVBsYWNlZFNoaXBzIiwiZ2FtZVZhbHVlcyIsImNoZWNrQm9hcmRTaGlwcyIsImFwcGVuZENoaWxkIiwicmVuZGVyUGxhY2VkU2hpcCIsImVsZW1lbnQiLCJpbm5lckhUTUwiLCJjaGFuZ2VBeGlzIiwibW92ZVNoaXBCeURpcmVjdGlvbiIsIm1vdXNlTG9jYXRpb24iLCJjdXJyZW50QXhpcyIsIm5ld1hQb3NpdGlvbiIsIm5ld1lQb3NpdGlvbiIsIm5ld1NoaXBQb3NpdGlvbiIsInBsYWNlUGxheWVyU2hpcCIsImxhdGVzdEF4aXMiLCJsYXRlc3RHYW1lIiwicGxhY2VQbGF5ZXJTaGlwRXZlbnQiLCJyZXNldEdhbWUiLCJkaXNwbGF5IiwicmVzdGFydEdhbWUiLCJhZGRVaUV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVVaUV2ZW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFbmRpbmdFdmVudHMiLCJyZW1vdmVFbmRpbmdFdmVudHMiLCJyZW1vdmVHYW1lRXZlbnRzIiwid2luZG93IiwiY2hhbmdlTW91c2VQb3NpdGlvbiIsImF0dGFja1NoaXBzIiwiYWRkR2FtZUV2ZW50cyIsImNoZWNrTW91c2VUYXJnZXQiLCJlbGVtZW50Q2xhc3MiLCJtb3VzZVRhcmdldCIsImNsYXNzTmFtZSIsInJlbmRlclNoaXBzIiwiZ3JpZCIsInNoaXBHcm91cCIsInNoaXBFbGVtZW50IiwicmVuZGVySGl0cyIsInJlbmRlckdyaWRzIiwiYmxvY2tTaXplMiIsInBsYXllckJvYXJkVmFsdWVzIiwiY29tcHV0ZXJCb2FyZFZhbHVlcyIsIm1vdXNlU2hpcCIsInJlbmRlclN0YXRzIiwidGV4dENvbnRlbnQiLCJkaXNwbGF5R2FtZU92ZXJVaSIsInN0YXR1cyIsImVsZW1lbnRzIiwicmVuZGVyR2FtZSIsInNldFRpbWVvdXQiLCJnYW1lU3RhdHVzIiwicmVtb3ZlU2hpcFNlY3Rpb24iLCJzdGFydEdhbWUiLCJyZW5kZXJTZWxlY3Rpb25HcmlkIiwiZ2FtZVZhbHVlIiwiYWN0aXZhdGVVaSIsInBhZ2VDb250ZW50IiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=