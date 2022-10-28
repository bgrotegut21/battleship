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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3NjcmlwdHMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3Bvc2l0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wcmFjdGljYWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWZyZXNoaW5nTG9nbyBmcm9tICcuLi9pbWFnZXMvcmVmcmVzaExvZ28uc3ZnJztcblxuY29uc3QgRG9tID0gKCkgPT4ge1xuICBjb25zdCBnZXRFbGVtZW50cyA9ICgpID0+ICh7XG4gICAgb3ZlcmxheTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKSxcbiAgICBzZWN0aW9uU2NyZWVuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvblNjcmVlbicpLFxuICAgIHNoaXBUZXh0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcFRleHQnKSxcbiAgICBzaGlwR3JpZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBHcmlkJyksXG4gICAgc2hpcExheWVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcExheWVyJyksXG4gICAgcm90YXRlQnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlQnV0dG9uJyksXG4gICAgZ3JpZHM6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQnKSksXG4gICAgaGl0czogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGl0cycpKSxcbiAgICBtaXNzZXM6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1pc3NlcycpKSxcbiAgICBwbGF5ZXJHcmlkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyR3JpZCcpLFxuICAgIHBsYXllckhpdHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJIaXRzJyksXG4gICAgcGxheWVyTWlzc2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyTWlzc2VzJyksXG4gICAgY29tcHV0ZXJHcmlkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXJHcmlkJyksXG4gICAgY29tcHV0ZXJIaXRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXJIaXRzJyksXG4gICAgc2hpcFNlbGVjdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBTZWxlY3Rpb24nKSxcbiAgICBjb21wdXRlck1pc3NlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyTWlzc2VzJyksXG4gICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKSxcbiAgICBjb21wdXRlckdyaWRMYXllcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyR3JpZExheWVyJyksXG4gICAgcmVzdGFydDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQnKSxcbiAgICBnYW1lT3ZlclRleHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lT3ZlclRleHQnKSxcbiAgICBnYW1lRmluaXNoZWRTZWN0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZUZpbmlzaGVkU2VjdGlvbicpLFxuICB9KTtcblxuICBjb25zdCBnZXRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lRmluaXNoZWRTZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiZ2FtZU92ZXJUZXh0XCI+WW91IFdpbiDwn5iDPC9oMT5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZXN0YXJ0XCI+UmVzdGFydDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBTZWxlY3Rpb25cIj5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwic2hpcFRpdGxlXCI+QkFUVExFU0hJUDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInNoaXBUZXh0XCI+UGxhY2UgeW91ciBzaGlwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBMYXllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwT3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwR3JpZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3RhdGVCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdGF0ZUltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIiR7cmVmcmVzaGluZ0xvZ299XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlJvdGF0ZSBJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzPVwibWFpblNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluVGl0bGVcIj48aDE+QkFUVExFU0hJUDwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyQm9hcmQgYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJib2FyZFRpdGxlXCI+UGxheWVyIEJvYXJkPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZExheWVyIHBsYXllckdyaWRMYXllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRPdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyR3JpZCBncmlkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllclN0YXRzIHN0YXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwbGF5ZXJIaXRzIGhpdHNcIj5IaXRzIDA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicGxheWVyTWlzc2VzIG1pc3Nlc1wiPk1pc3NlcyAwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXB1dGVyQm9hcmQgYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJib2FyZFRpdGxlXCI+Q29tcHV0ZXIgQm9hcmQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkTGF5ZXIgY29tcHV0ZXJHcmlkTGF5ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkT3ZlcmxheSBjb21wdXRlckdyaWRPdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcHV0ZXJHcmlkIGdyaWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcHV0ZXJTdGF0cyBzdGF0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY29tcHV0ZXJIaXRzIGhpdHNcIj5IaXRzIDA8L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjb21wdXRlck1pc3NlcyBtaXNzZXNcIj5NaXNzZXMgMDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvcHlyaWdodE1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Vic2l0ZSBhbmQgY29kZSBhcmUgbWFkZSBieSBCcmF5ZGVuIEdyb3RlZ3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgIHJldHVybiBjb250ZW50O1xuICB9O1xuXG4gIHJldHVybiB7IGdldFBhZ2UsIGdldEVsZW1lbnRzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb207XG4iLCJpbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IFByYWN0aWNhbCBmcm9tICcuL3ByYWN0aWNhbC5qcyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuICBjb25zdCBzaGlwID0gU2hpcCgpO1xuICBjb25zdCBwcmFjdGljYWwgPSBQcmFjdGljYWwoKTtcblxuICBsZXQgY3VycmVudFNoaXBzID0gW107XG4gIGxldCBoaXRzID0gW107XG4gIGxldCBtaXNzZXMgPSBbXTtcblxuICBjb25zdCByYW5kb21pemUgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgY29uc3QgcmFuZG9tQXhpcyA9ICgpID0+IHtcbiAgICBjb25zdCBheGllcyA9IFsneCcsICd5J107XG4gICAgcmV0dXJuIGF4aWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF4aWVzLmxlbmd0aCldO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlQWxsU2hpcHMgPSAoc2hpcHNBcnJheSkgPT4ge1xuICAgIGN1cnJlbnRTaGlwcyA9IHNoaXBzQXJyYXk7XG4gICAgcmV0dXJuIGN1cnJlbnRTaGlwcztcbiAgfTtcblxuICBjb25zdCBjb21wYXJlU2hpcHNBcnJheSA9IChsYXRlc3RTaGlwc0FycmF5LCBzaGlwcykgPT4ge1xuICAgIGxldCBzaGlwc0RvQ29sbGlkZSA9IGZhbHNlO1xuICAgIGlmICghc2hpcHMpIHJldHVybiBzaGlwc0RvQ29sbGlkZTtcblxuICAgIGxhdGVzdFNoaXBzQXJyYXkuZm9yRWFjaCgobGF0ZXN0U2hpcHMpID0+IHtcbiAgICAgIGxhdGVzdFNoaXBzLmZvckVhY2goKGJvYXQpID0+IHtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgobGF0ZXN0Qm9hdCkgPT4ge1xuICAgICAgICAgIGlmIChwb3NpdGlvbi5jb21wYXJlUG9zaXRpb24oYm9hdCwgbGF0ZXN0Qm9hdCkpIHtcbiAgICAgICAgICAgIHNoaXBzRG9Db2xsaWRlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2hpcHNEb0NvbGxpZGU7XG4gIH07XG5cbiAgY29uc3QgZ2V0VHlwZU9mUGxhY2VkU2hpcCA9IChzaGlwQXJyYXkpID0+IHtcbiAgICBpZiAoc2hpcEFycmF5Lmxlbmd0aCA9PT0gNSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3Qgc2hpcFR5cGVzID0gW1xuICAgICAgeyBzaGlwVHlwZTogJ2NhcnJpZXInLCBzaGlwTGVuZ3RoOiA1IH0sXG4gICAgICB7IHNoaXBUeXBlOiAnYmF0dGxlc2hpcCcsIHNoaXBMZW5ndGg6IDQgfSxcbiAgICAgIHsgc2hpcFR5cGU6ICdkZXN0b3llcicsIHNoaXBMZW5ndGg6IDMgfSxcbiAgICAgIHsgc2hpcFR5cGU6ICdzdWJtYXJpbmUnLCBzaGlwTGVuZ3RoOiAzIH0sXG4gICAgICB7IHNoaXBUeXBlOiAnZ3VuYm9hdCcsIHNoaXBMZW5ndGg6IDIgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIHNoaXBUeXBlc1tzaGlwQXJyYXkubGVuZ3RoXTtcbiAgfTtcblxuICBjb25zdCBwbGF5ZXJQbGFjZVNoaXAgPSAobG9jYXRpb24sIGF4aXMpID0+IHtcbiAgICBjb25zdCBjdXJyZW50QXJyYXkgPSBwcmFjdGljYWwuY29weUFycmF5KGN1cnJlbnRTaGlwcyk7XG5cbiAgICBjb25zdCBzaGlwVHlwZSA9IGdldFR5cGVPZlBsYWNlZFNoaXAoY3VycmVudEFycmF5KTtcblxuICAgIGNvbnN0IGxhdGVzdFNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAobG9jYXRpb24sIHNoaXBUeXBlLnNoaXBMZW5ndGgsIGF4aXMpO1xuXG4gICAgY29uc3QgaXNDb2xsaWRlZCA9IGNvbXBhcmVTaGlwc0FycmF5KGN1cnJlbnRBcnJheSwgbGF0ZXN0U2hpcCk7XG5cbiAgICBpZiAoc2hpcFR5cGUgJiYgbGF0ZXN0U2hpcCAmJiAhaXNDb2xsaWRlZCkge1xuICAgICAgY3VycmVudEFycmF5LnB1c2gobGF0ZXN0U2hpcCk7XG4gICAgfVxuXG4gICAgY3VycmVudFNoaXBzID0gY3VycmVudEFycmF5O1xuICAgIHJldHVybiBjdXJyZW50QXJyYXk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VSYW5kb21TaGlwcyA9IChzaGlwc0FycmF5LCByYW5kb21pemVyLCByYW5kb21BeGllcykgPT4ge1xuICAgIGNvbnN0IGxhdGVzdFNoaXBzQXJyYXkgPSBzaGlwc0FycmF5O1xuICAgIGNvbnN0IHJhbmRvbVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24ocmFuZG9taXplcigpLCByYW5kb21pemVyKCkpO1xuICAgIGNvbnN0IHNoaXBUeXBlID0gZ2V0VHlwZU9mUGxhY2VkU2hpcChsYXRlc3RTaGlwc0FycmF5KTtcbiAgICBpZiAoIXNoaXBUeXBlKSByZXR1cm4gbGF0ZXN0U2hpcHNBcnJheTtcblxuICAgIGNvbnN0IGxhdGVzdExlbmd0aCA9IHNoaXBUeXBlLnNoaXBMZW5ndGg7XG5cbiAgICBjb25zdCByYW5kb21TaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgcmFuZG9tUG9zaXRpb24sXG4gICAgICBsYXRlc3RMZW5ndGgsXG4gICAgICByYW5kb21BeGllcygpXG4gICAgKTtcblxuICAgIGNvbnN0IHNoaXBDb2xsaWRlcyA9IGNvbXBhcmVTaGlwc0FycmF5KGxhdGVzdFNoaXBzQXJyYXksIHJhbmRvbVNoaXApO1xuICAgIGlmIChyYW5kb21TaGlwICYmICFzaGlwQ29sbGlkZXMpIGxhdGVzdFNoaXBzQXJyYXkucHVzaChyYW5kb21TaGlwKTtcblxuICAgIHJldHVybiBwbGFjZVJhbmRvbVNoaXBzKGxhdGVzdFNoaXBzQXJyYXksIHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXBzUmFuZG9tbHkgPSAocmFuZG9taXplciwgcmFuZG9tQXhpZXMpID0+IHtcbiAgICBjb25zdCBzaGlwc0FycmF5ID0gcGxhY2VSYW5kb21TaGlwcyhbXSwgcmFuZG9taXplciwgcmFuZG9tQXhpZXMpO1xuICAgIGN1cnJlbnRTaGlwcyA9IHNoaXBzQXJyYXk7XG5cbiAgICByZXR1cm4gc2hpcHNBcnJheTtcbiAgfTtcbiAgY29uc3QgZmlsdGVyQXR0YWNrID0gKGFycmF5LCBjdXJyZW50QXR0YWNrKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEF0dGFja0FycmF5ID0gYXJyYXkuZmlsdGVyKFxuICAgICAgKGl0ZW0pID0+XG4gICAgICAgIGl0ZW0ueENvb3JkID09PSBjdXJyZW50QXR0YWNrLnhDb29yZCAmJlxuICAgICAgICBpdGVtLnlDb29yZCA9PT0gY3VycmVudEF0dGFjay55Q29vcmRcbiAgICApO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRBdHRhY2tBcnJheTtcbiAgfTtcblxuICBjb25zdCBoYXNIaXRTaGlwID0gKGhpdFBvc2l0aW9uLCBsYXRlc3RIaXRzLCBsYXRlc3RNaXNzZXMpID0+IHtcbiAgICBjb25zdCBoYXNCZWVuSGl0ID0gZmlsdGVyQXR0YWNrKGxhdGVzdEhpdHMsIGhpdFBvc2l0aW9uKTtcbiAgICBjb25zdCBoYXNCZWVuTWlzcyA9IGZpbHRlckF0dGFjayhsYXRlc3RNaXNzZXMsIGhpdFBvc2l0aW9uKTtcblxuICAgIGlmIChoYXNCZWVuSGl0Lmxlbmd0aCA+IDAgfHwgaGFzQmVlbk1pc3MubGVuZ3RoID4gMCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja1NoaXAgPSAobGF0ZXN0UG9zaXRpb24sIHNoaXBzLCBjdXJyZW50SGl0cywgY3VycmVudE1pc3NlcykgPT4ge1xuICAgIGxldCBpc0hpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGxhdGVzdFNoaXBzQXJyYXkgPSBbXTtcbiAgICBjb25zdCBsYXRlc3RIaXRzID0gY3VycmVudEhpdHM7XG4gICAgY29uc3QgbGF0ZXN0TWlzc2VzID0gY3VycmVudE1pc3NlcztcblxuICAgIGlmICghbGF0ZXN0UG9zaXRpb24pIHJldHVybiBmYWxzZTtcbiAgICBpZiAoaGFzSGl0U2hpcChsYXRlc3RQb3NpdGlvbiwgY3VycmVudEhpdHMsIGN1cnJlbnRNaXNzZXMpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwQXJyYXkpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbnNBcnJheSA9IHByYWN0aWNhbC5jb3B5QXJyYXkoc2hpcEFycmF5KTtcbiAgICAgIGNvbnN0IGhpdCA9IHNoaXAuaGl0KHBvc2l0aW9uc0FycmF5LCBsYXRlc3RQb3NpdGlvbik7XG5cbiAgICAgIGlmIChoaXQuaGl0QXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgcG9zaXRpb25zQXJyYXkgPSBoaXQuc2hpcEFycmF5cztcbiAgICAgICAgbGF0ZXN0SGl0cy5wdXNoKGhpdC5oaXRBcnJheVswXSk7XG4gICAgICB9XG4gICAgICBsYXRlc3RTaGlwc0FycmF5LnB1c2gocG9zaXRpb25zQXJyYXkpO1xuICAgIH0pO1xuICAgIGlmICghaXNIaXQpIGxhdGVzdE1pc3Nlcy5wdXNoKGxhdGVzdFBvc2l0aW9uKTtcblxuICAgIGNvbnN0IGZpbmFsT2JqZWN0ID0ge1xuICAgICAgaXNIaXQsXG4gICAgICBsYXRlc3RTaGlwc0FycmF5LFxuICAgICAgbGF0ZXN0SGl0cyxcbiAgICAgIGxhdGVzdE1pc3NlcyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZpbmFsT2JqZWN0O1xuICB9O1xuXG4gIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAobGF0ZXN0UG9zaXRpb24pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhdHRhY2tTaGlwKGxhdGVzdFBvc2l0aW9uLCBjdXJyZW50U2hpcHMsIGhpdHMsIG1pc3Nlcyk7XG4gICAgaWYgKCFyZXN1bHQpIHJldHVybiBmYWxzZTtcblxuICAgIGN1cnJlbnRTaGlwcyA9IHJlc3VsdC5sYXRlc3RTaGlwc0FycmF5O1xuICAgIGhpdHMgPSByZXN1bHQubGF0ZXN0SGl0cztcbiAgICBtaXNzZXMgPSByZXN1bHQubGF0ZXN0TWlzc2VzO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVSYW5kb21Db29yZHMgPSAocmFuZG9taXplcikgPT4ge1xuICAgIGxldCByYW5kb21Qb3NpdGlvbjtcblxuICAgIGlmIChyYW5kb21pemVyLmlzTW9ja1JhbmRvbSkge1xuICAgICAgcmFuZG9tUG9zaXRpb24gPSByYW5kb21pemVyLmNhbGxSYW5kb21pemVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJhbmRvbVggPSByYW5kb21pemVyKCk7XG4gICAgICBjb25zdCByYW5kb21ZID0gcmFuZG9taXplcigpO1xuICAgICAgcmFuZG9tUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihyYW5kb21YLCByYW5kb21ZKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZG9tUG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgcmVjaWV2ZVJhbmRvbUF0dGFjayA9IChyYW5kb21pemVyKSA9PiB7XG4gICAgY29uc3QgcmFuZG9tUG9zaXRpb24gPSBjcmVhdGVSYW5kb21Db29yZHMocmFuZG9taXplcik7XG4gICAgY29uc3QgaGFzSGl0ID0gaGFzSGl0U2hpcChyYW5kb21Qb3NpdGlvbiwgaGl0cywgbWlzc2VzKTtcblxuICAgIGlmIChoYXNIaXQpIHJldHVybiByZWNpZXZlUmFuZG9tQXR0YWNrKHJhbmRvbWl6ZXIpO1xuXG4gICAgcmV0dXJuIHJlY2lldmVBdHRhY2socmFuZG9tUG9zaXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IGlzQWxsU3VuayA9ICgpID0+IHtcbiAgICBsZXQgaGFzU3Vua2VkID0gdHJ1ZTtcbiAgICBjdXJyZW50U2hpcHMuZm9yRWFjaCgoc2hpcHMpID0+IHtcbiAgICAgIGlmICghc2hpcC5pc1N1bmsoc2hpcHMpKSB7XG4gICAgICAgIGhhc1N1bmtlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhhc1N1bmtlZDtcbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZXMgPSAoKSA9PiAoe1xuICAgIGN1cnJlbnRTaGlwcyxcbiAgICBoaXRzLFxuICAgIG1pc3NlcyxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhdHRhY2tTaGlwLFxuICAgIHJlY2lldmVBdHRhY2ssXG4gICAgaXNBbGxTdW5rLFxuICAgIHBsYWNlU2hpcHNSYW5kb21seSxcbiAgICBwbGF5ZXJQbGFjZVNoaXAsXG4gICAgcGxhY2VBbGxTaGlwcyxcbiAgICByYW5kb21pemUsXG4gICAgcmVjaWV2ZVJhbmRvbUF0dGFjayxcbiAgICByYW5kb21BeGlzLFxuICAgIGdldFZhbHVlcyxcbiAgICBnZXRUeXBlT2ZQbGFjZWRTaGlwLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuXG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5cbmNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgcGxheWVyQ2hlY2tCb2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcblxuICBjb25zdCBzaGlwID0gU2hpcCgpO1xuXG4gIGNvbnN0IHJhbmRvbWl6ZXIgPSBjb21wdXRlckJvYXJkLnJhbmRvbWl6ZTtcbiAgY29uc3QgcmFuZG9tQXhpZXMgPSBjb21wdXRlckJvYXJkLnJhbmRvbUF4aXM7XG5cbiAgY29uc3QgY2hlY2tTZXR1cCA9IChwbGF5ZXJDaGVja1NoaXBzKSA9PiB7XG4gICAgaWYgKHBsYXllckNoZWNrU2hpcHMubGVuZ3RoID09PSA1KSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBHYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllckNoZWNrVmFsdWVzID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIGlmICghY2hlY2tTZXR1cChwbGF5ZXJDaGVja1ZhbHVlcy5jdXJyZW50U2hpcHMpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBwbGF5ZXJCb2FyZC5wbGFjZUFsbFNoaXBzKHBsYXllckNoZWNrVmFsdWVzLmN1cnJlbnRTaGlwcyk7XG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXBzUmFuZG9tbHkocmFuZG9taXplciwgcmFuZG9tQXhpZXMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja0JvYXRzID0gKGNvb3JkcykgPT4ge1xuICAgIGNvbnN0IHBsYXllckNoZWNrVmFsdWVzID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIGlmICghY2hlY2tTZXR1cChwbGF5ZXJDaGVja1ZhbHVlcy5jdXJyZW50U2hpcHMpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBjdXJyZW50QXR0YWNrID0gY29tcHV0ZXJCb2FyZC5yZWNpZXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgaWYgKCFjdXJyZW50QXR0YWNrKSByZXR1cm4gZmFsc2U7XG4gICAgcGxheWVyQm9hcmQucmVjaWV2ZVJhbmRvbUF0dGFjayhyYW5kb21pemVyKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwU2hpcCA9IChsb2NhdGlvbiwgYXhpcykgPT5cbiAgICBwbGF5ZXJDaGVja0JvYXJkLnBsYXllclBsYWNlU2hpcChsb2NhdGlvbiwgYXhpcyk7XG5cbiAgY29uc3QgZ2FtZUlzT3ZlciA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJDaGVja1NoaXBzID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKS5jdXJyZW50U2hpcHM7XG4gICAgaWYgKCFjaGVja1NldHVwKHBsYXllckNoZWNrU2hpcHMpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAoY29tcHV0ZXJCb2FyZC5pc0FsbFN1bmsoKSkge1xuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ1lvdSBXb24g8J+YgycsIGdhbWVGaW5pc2hlZDogdHJ1ZSB9O1xuICAgIH1cblxuICAgIGlmIChwbGF5ZXJCb2FyZC5pc0FsbFN1bmsoKSkge1xuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ1lvdSBMb3N0IPCfmKInLCBnYW1lRmluaXNoZWQ6IHRydWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZ2FtZUZpbmlzaGVkOiBmYWxzZSB9O1xuICB9O1xuXG4gIGNvbnN0IGFycmFuZ2VCbG9ja3MgPSAobW91c2VQb3NpdGlvbiwgY3VycmVudFJvdGF0aW9uKSA9PiB7XG4gICAgY29uc3QgY2hlY2tib2FyZE9iamVjdHMgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpO1xuXG4gICAgY29uc3Qgc2hpcFR5cGVPYmplY3QgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFR5cGVPZlBsYWNlZFNoaXAoXG4gICAgICBjaGVja2JvYXJkT2JqZWN0cy5jdXJyZW50U2hpcHNcbiAgICApO1xuXG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAoXG4gICAgICBtb3VzZVBvc2l0aW9uLFxuICAgICAgc2hpcFR5cGVPYmplY3Quc2hpcExlbmd0aCxcbiAgICAgIGN1cnJlbnRSb3RhdGlvblxuICAgICk7XG4gICAgcmV0dXJuIGN1cnJlbnRTaGlwO1xuICB9O1xuXG4gIGNvbnN0IGdldEdhbWVWYWx1ZXMgPSAoKSA9PiAoe1xuICAgIHBsYXllckJvYXJkLFxuICAgIGNvbXB1dGVyQm9hcmQsXG4gICAgcGxheWVyQ2hlY2tCb2FyZCxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjaGVja1NldHVwLFxuICAgIGF0dGFja0JvYXRzLFxuICAgIHNldHVwR2FtZSxcbiAgICBnYW1lSXNPdmVyLFxuICAgIHNldHVwU2hpcCxcbiAgICBnZXRHYW1lVmFsdWVzLFxuICAgIGFycmFuZ2VCbG9ja3MsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiY29uc3QgUG9zaXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVBvc2l0aW9uID0gKHhDb29yZCwgeUNvb3JkKSA9PiAoeyB4Q29vcmQsIHlDb29yZCB9KTtcblxuICBjb25zdCBjaGVja091dE9mQm91bmNlID0gKG5ld1Bvc2l0aW9uKSA9PiB7XG4gICAgaWYgKG5ld1Bvc2l0aW9uLnhDb29yZCA+IDkgfHwgbmV3UG9zaXRpb24ueUNvb3JkID4gOSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKG5ld1Bvc2l0aW9uLnhDb29yZCA8IDAgfHwgbmV3UG9zaXRpb24ueUNvb3JkIDwgMCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGFkZFBvc2l0aW9uID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uMSA9PT0gZmFsc2UgfHwgcG9zaXRpb24yID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBjcmVhdGVQb3NpdGlvbihwb3NpdGlvbjEueENvb3JkLCBwb3NpdGlvbjEueUNvb3JkKTtcbiAgICBuZXdQb3NpdGlvbi54Q29vcmQgKz0gcG9zaXRpb24yLnhDb29yZDtcbiAgICBuZXdQb3NpdGlvbi55Q29vcmQgKz0gcG9zaXRpb24yLnlDb29yZDtcblxuICAgIGlmIChjaGVja091dE9mQm91bmNlKG5ld1Bvc2l0aW9uKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IG11bHRpcGx5UG9zaXRpb24gPSAocG9zaXRpb24xLCBwb3NpdGlvbjIpID0+IHtcbiAgICBpZiAocG9zaXRpb24xID09PSBmYWxzZSB8fCBwb3NpdGlvbjIgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGNyZWF0ZVBvc2l0aW9uKHBvc2l0aW9uMS54Q29vcmQsIHBvc2l0aW9uMS55Q29vcmQpO1xuICAgIG5ld1Bvc2l0aW9uLnhDb29yZCAqPSBwb3NpdGlvbjIueENvb3JkO1xuICAgIG5ld1Bvc2l0aW9uLnlDb29yZCAqPSBwb3NpdGlvbjIueUNvb3JkO1xuXG4gICAgaWYgKGNoZWNrT3V0T2ZCb3VuY2UobmV3UG9zaXRpb24pKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gbmV3UG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbCA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgYXhpcykgPT4ge1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSArIDEpIHJldHVybiB0cnVlO1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHBvc2l0aW9uMVtheGlzXSA9PT0gcG9zaXRpb24yW2F4aXNdIC0gMSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmVQb3NpdGlvbiA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMikgPT4ge1xuICAgIGlmICghY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgJ3hDb29yZCcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgJ3lDb29yZCcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlUG9zaXRpb24sXG4gICAgYWRkUG9zaXRpb24sXG4gICAgbXVsdGlwbHlQb3NpdGlvbixcbiAgICBjb21wYXJlUG9zaXRpb24sXG4gICAgY2hlY2tPdXRPZkJvdW5jZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc2l0aW9uO1xuIiwiY29uc3QgUHJhY3RpY2FsID0gKCkgPT4ge1xuICBjb25zdCBjb3B5QXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgICBjb25zdCBuZXdBcnJheSA9IFtdO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgbmV3QXJyYXkucHVzaChpdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdBcnJheTtcbiAgfTtcblxuICBjb25zdCBpc09iamVjdCA9IChjdXJyZW50T2JqZWN0KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50T2JqZWN0ID09PSAnb2JqZWN0JyAmJiBjdXJyZW50T2JqZWN0ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrT2JqZWN0ID0gKG9iamVjdDEsIG9iamVjdDIpID0+IHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBzZWNvbmRJbmRleCA9IDA7XG5cbiAgICBsZXQgb2JqZWN0SXNFcXVhbCA9IHRydWU7XG5cbiAgICBjb25zdCBjdXJyZW50T2JqZWN0ID0gb2JqZWN0MTtcbiAgICBjb25zdCBjdXJyZW50T2JqZWN0MiA9IG9iamVjdDI7XG5cbiAgICBjb25zdCBjdXJyZW50T2JqZWN0VmFsdWVzID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50T2JqZWN0KTtcbiAgICBjb25zdCBjdXJyZW50T2JqZWN0MlZhbHVlcyA9IE9iamVjdC52YWx1ZXMoY3VycmVudE9iamVjdDIpO1xuXG4gICAgY29uc3Qgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKGN1cnJlbnRPYmplY3QpO1xuICAgIGNvbnN0IG9iamVjdEtleXMyID0gT2JqZWN0LmtleXMoY3VycmVudE9iamVjdDIpO1xuXG4gICAgb2JqZWN0S2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChrZXkgIT09IG9iamVjdEtleXMyW2luZGV4XSkgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgaW5kZXggKz0gMTtcbiAgICB9KTtcblxuICAgIGlmICghb2JqZWN0SXNFcXVhbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChvYmplY3RLZXlzLmxlbmd0aCAhPT0gb2JqZWN0S2V5czIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjdXJyZW50T2JqZWN0VmFsdWVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0yID0gY3VycmVudE9iamVjdDJWYWx1ZXNbc2Vjb25kSW5kZXhdO1xuXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkgJiYgaXNPYmplY3QoaXRlbTIpKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrT2JqZWN0Qm9vbCA9IGNoZWNrT2JqZWN0KGl0ZW0sIGl0ZW0yKTtcblxuICAgICAgICBpZiAoIWNoZWNrT2JqZWN0Qm9vbCkgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChpdGVtICE9PSBpdGVtMikge1xuICAgICAgICBvYmplY3RJc0VxdWFsID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHNlY29uZEluZGV4ICs9IDE7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqZWN0SXNFcXVhbDtcbiAgfTtcblxuICByZXR1cm4geyBjb3B5QXJyYXksIGNoZWNrT2JqZWN0IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmFjdGljYWw7XG4iLCJpbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5cbmNvbnN0IFNoaXAgPSAoKSA9PiB7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcblxuICBjb25zdCBnZXRBZGRlZFBvc2l0aW9uID0gKGF4aXMpID0+IHtcbiAgICBsZXQgYWRkZWRQb3NpdGlvbjtcblxuICAgIGlmIChheGlzID09PSAneCcpIGFkZGVkUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbigxLCAwKTtcbiAgICBlbHNlIGFkZGVkUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbigwLCAxKTtcblxuICAgIHJldHVybiBhZGRlZFBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVNoaXAgPSAocG9zaXRpb24xLCBsZW5ndGgxLCBheGlzKSA9PiB7XG4gICAgaWYgKGxlbmd0aDEgPT09IDAgfHwgbGVuZ3RoMSA+IDUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocG9zaXRpb24uY2hlY2tPdXRPZkJvdW5jZShwb3NpdGlvbjEpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBwb3B1bGF0ZVNoaXBzID0gKGN1cnJlbnRQb3NpdGlvbiwgbGF0ZXN0TGVuZ3RoLCBsYXRlc3RBcnJheSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudEFycmF5ID0gbGF0ZXN0QXJyYXk7XG4gICAgICBsZXQgbmV3UG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb247XG5cbiAgICAgIGlmIChjdXJyZW50UG9zaXRpb24gPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAobGF0ZXN0TGVuZ3RoID09PSAwKSByZXR1cm4gY3VycmVudEFycmF5O1xuICAgICAgaWYgKGxhdGVzdExlbmd0aCA9PT0gbGVuZ3RoMSkge1xuICAgICAgICBjdXJyZW50QXJyYXkucHVzaChjdXJyZW50UG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhjdXJyZW50UG9zaXRpb24sIGxhdGVzdExlbmd0aCAtIDEsIGN1cnJlbnRBcnJheSk7XG4gICAgICB9XG4gICAgICBjb25zdCBhZGRlZFBvc2l0aW9uID0gZ2V0QWRkZWRQb3NpdGlvbihheGlzKTtcbiAgICAgIG5ld1Bvc2l0aW9uID0gcG9zaXRpb24uYWRkUG9zaXRpb24obmV3UG9zaXRpb24sIGFkZGVkUG9zaXRpb24pO1xuXG4gICAgICBpZiAoIW5ld1Bvc2l0aW9uKSByZXR1cm4gbmV3UG9zaXRpb247XG4gICAgICBjdXJyZW50QXJyYXkucHVzaChuZXdQb3NpdGlvbik7XG5cbiAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gY3VycmVudEFycmF5Lmxlbmd0aCAtIDE7XG5cbiAgICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKFxuICAgICAgICBjdXJyZW50QXJyYXlbYXJyYXlMZW5ndGhdLFxuICAgICAgICBsYXRlc3RMZW5ndGggLSAxLFxuICAgICAgICBjdXJyZW50QXJyYXlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKHBvc2l0aW9uMSwgbGVuZ3RoMSwgW10sIGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoc2hpcEFycmF5KSA9PiB7XG4gICAgaWYgKHNoaXBBcnJheS5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBoaXQgPSAocG9zaXRpb25zQXJyYXksIHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgaGl0QXJyYXkgPSBwb3NpdGlvbnNBcnJheS5maWx0ZXIoKHBvcykgPT4ge1xuICAgICAgaWYgKHBvcy54Q29vcmQgPT09IHBvc2l0aW9uLnhDb29yZCAmJiBwb3MueUNvb3JkID09PSBwb3NpdGlvbi55Q29vcmQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgY29uc3Qgc2hpcEFycmF5cyA9IHBvc2l0aW9uc0FycmF5LmZpbHRlcigocG9zKSA9PiB7XG4gICAgICBpZiAocG9zLnhDb29yZCA9PT0gcG9zaXRpb24ueENvb3JkICYmIHBvcy55Q29vcmQgPT09IHBvc2l0aW9uLnlDb29yZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IGhpdEFycmF5LCBzaGlwQXJyYXlzIH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVTaGlwLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0IERvbSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9tYWluLmpzJztcblxuY29uc3QgVWkgPSAoKSA9PiB7XG4gIGNvbnN0IGRvbSA9IERvbSgpO1xuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG4gIGNvbnN0IHNoaXAgPSBTaGlwKCk7XG5cbiAgY29uc3QgcmVuZGVyU3BlZWQgPSAxO1xuXG4gIGxldCBibG9ja1NpemUgPSA0MjtcbiAgbGV0IGFjdGl2ZUdhbWUgPSBHYW1lKCk7XG4gIGxldCBwbGFjZWRTaGlwID0gZmFsc2U7XG4gIGxldCBheGlzID0gJ3knO1xuICBsZXQgbW91c2VCbG9ja0xvY2F0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgY3JlYXRlRG9tRWxlbWVudCA9IChlbGVtZW50TmFtZSkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XG5cbiAgY29uc3QgZ2V0TW91c2VQb3NpdGlvbiA9IChvZmZzZXRYLCBvZmZzZXRZKSA9PiB7XG4gICAgY29uc3QgeENvb3JkID0gTWF0aC5mbG9vcihvZmZzZXRYIC8gYmxvY2tTaXplKTtcbiAgICBjb25zdCB5Q29vcmQgPSBNYXRoLmZsb29yKG9mZnNldFkgLyBibG9ja1NpemUpO1xuXG4gICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHhDb29yZCwgeUNvb3JkKTtcblxuICAgIGNvbnN0IG91dE9mQm91bmNlID0gcG9zaXRpb24uY2hlY2tPdXRPZkJvdW5jZShtb3VzZVBvc2l0aW9uKTtcblxuICAgIGlmIChvdXRPZkJvdW5jZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIG1vdXNlUG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgZmluZE1vdXNlUG9zaXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50TW91c2VQb3NpdGlvbiA9IGdldE1vdXNlUG9zaXRpb24oZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG5cbiAgICBtb3VzZUJsb2NrTG9jYXRpb24gPSBjdXJyZW50TW91c2VQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBmaW5kVG91Y2hQb3NpdGlvbiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgdG91Y2hPZmZzZXRYID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYIC0gcmVjdC54O1xuICAgIGNvbnN0IHRvdWNoT2Zmc2V0WSA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSAtIHJlY3QueTtcblxuICAgIGNvbnN0IHRvdWNoUG9zaXRpb24gPSBnZXRNb3VzZVBvc2l0aW9uKHRvdWNoT2Zmc2V0WCwgdG91Y2hPZmZzZXRZKTtcbiAgICBtb3VzZUJsb2NrTG9jYXRpb24gPSB0b3VjaFBvc2l0aW9uO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlQmxvY2tTaXplID0gKG1hdGNoTWVkaWEpID0+IHtcbiAgICBibG9ja1NpemUgPSA0MjtcbiAgICBpZiAobWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTYwcHgpJykubWF0Y2hlcykgYmxvY2tTaXplID0gMzA7XG4gICAgaWYgKG1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDQ3MHB4KScpLm1hdGNoZXMpIGJsb2NrU2l6ZSA9IDIxO1xuICAgIGlmIChtYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAzMjBweCknKS5tYXRjaGVzKSBibG9ja1NpemUgPSAxNTtcbiAgICByZXR1cm4gYmxvY2tTaXplO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUJsb2NrRWxlbWVudCA9IChibG9ja0NsYXNzLCBjcmVhdGVCbG9jaykgPT4ge1xuICAgIGxldCBsYXRlc3RDbGFzcyA9IGJsb2NrQ2xhc3M7XG5cbiAgICBpZiAoXG4gICAgICBsYXRlc3RDbGFzcyAhPT0gJ2hpdEJsb2NrJyAmJlxuICAgICAgbGF0ZXN0Q2xhc3MgIT09ICdtaXNzQmxvY2snICYmXG4gICAgICBsYXRlc3RDbGFzcyAhPT0gJ2N1cnNvckJsb2NrJ1xuICAgICkge1xuICAgICAgbGF0ZXN0Q2xhc3MgPSAnJztcbiAgICB9XG5cbiAgICBjb25zdCBibG9ja0VsZW1lbnQgPSBjcmVhdGVCbG9jaygnZGl2Jyk7XG4gICAgYmxvY2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrJyk7XG4gICAgaWYgKGxhdGVzdENsYXNzICE9PSAnJykgYmxvY2tFbGVtZW50LmNsYXNzTGlzdC5hZGQobGF0ZXN0Q2xhc3MpO1xuXG4gICAgcmV0dXJuIGJsb2NrRWxlbWVudDtcbiAgfTtcblxuICBjb25zdCBkaXNhYmxlU3RhcnRlclVpID0gKCkgPT4gdHJ1ZTtcblxuICBjb25zdCBjcmVhdGVTaGlwQmxvY2sgPSAoc2hpcFBvc2l0aW9uLCBsYXRlc3RCbG9ja1NpemUsIHNoaXBUeXBlKSA9PiB7XG4gICAgY29uc3Qgc2hpcEJsb2NrID0gY3JlYXRlQmxvY2tFbGVtZW50KHNoaXBUeXBlLCBjcmVhdGVEb21FbGVtZW50KTtcblxuICAgIGNvbnN0IHJlYWxQb3NpdGlvblggPSBNYXRoLmZsb29yKHNoaXBQb3NpdGlvbi54Q29vcmQgKiBsYXRlc3RCbG9ja1NpemUpO1xuICAgIGNvbnN0IHJlYWxQb3NpdGlvblkgPSBNYXRoLmZsb29yKHNoaXBQb3NpdGlvbi55Q29vcmQgKiBsYXRlc3RCbG9ja1NpemUpO1xuICAgIHNoaXBCbG9jay5zdHlsZS5sZWZ0ID0gYCR7cmVhbFBvc2l0aW9uWH1weGA7XG4gICAgc2hpcEJsb2NrLnN0eWxlLnRvcCA9IGAke3JlYWxQb3NpdGlvbll9cHhgO1xuXG4gICAgcmV0dXJuIHNoaXBCbG9jaztcbiAgfTtcblxuICBjb25zdCByZW5kZXJBbHJlYWR5UGxhY2VkU2hpcHMgPSAoc2hpcEdyaWQsIGxhdGVzdEJsb2NrU2l6ZSkgPT4ge1xuICAgIGNvbnN0IGdhbWVWYWx1ZXMgPSBhY3RpdmVHYW1lLmdldEdhbWVWYWx1ZXMoKTtcbiAgICBjb25zdCBjaGVja0JvYXJkU2hpcHMgPVxuICAgICAgZ2FtZVZhbHVlcy5wbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpLmN1cnJlbnRTaGlwcztcblxuICAgIGNoZWNrQm9hcmRTaGlwcy5mb3JFYWNoKChwbGF5ZXJDaGVja1NoaXBzKSA9PiB7XG4gICAgICBwbGF5ZXJDaGVja1NoaXBzLmZvckVhY2goKGJvYXQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcEJsb2NrID0gY3JlYXRlU2hpcEJsb2NrKGJvYXQsIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgICAgIHNoaXBHcmlkLmFwcGVuZENoaWxkKHNoaXBCbG9jayk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJQbGFjZWRTaGlwID0gKGxhdGVzdEJsb2NrU2l6ZSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICBjb25zdCB7IHNoaXBHcmlkIH0gPSBlbGVtZW50O1xuXG4gICAgaWYgKCFwbGFjZWRTaGlwKSByZXR1cm4gcGxhY2VkU2hpcDtcblxuICAgIHNoaXBHcmlkLmlubmVySFRNTCA9ICcnO1xuXG4gICAgcGxhY2VkU2hpcC5mb3JFYWNoKChzaGlwUG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHNoaXBCbG9jayA9IGNyZWF0ZVNoaXBCbG9jayhzaGlwUG9zaXRpb24sIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgICBzaGlwR3JpZC5hcHBlbmRDaGlsZChzaGlwQmxvY2spO1xuICAgIH0pO1xuXG4gICAgcmVuZGVyQWxyZWFkeVBsYWNlZFNoaXBzKHNoaXBHcmlkLCBsYXRlc3RCbG9ja1NpemUpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUF4aXMgPSAoKSA9PiB7XG4gICAgaWYgKGF4aXMgPT09ICd5JykgYXhpcyA9ICd4JztcbiAgICBlbHNlIGF4aXMgPSAneSc7XG4gIH07XG5cbiAgY29uc3QgbW92ZVNoaXBCeURpcmVjdGlvbiA9IChtb3VzZUxvY2F0aW9uLCBjdXJyZW50U2hpcCwgY3VycmVudEF4aXMpID0+IHtcbiAgICBsZXQgbGF0ZXN0U2hpcCA9IGZhbHNlO1xuXG4gICAgaWYgKHBvc2l0aW9uLmNoZWNrT3V0T2ZCb3VuY2UoY3VycmVudFNoaXBbMF0pKSByZXR1cm4gbGF0ZXN0U2hpcDtcblxuICAgIGNvbnN0IG5ld1hQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKFxuICAgICAgbW91c2VMb2NhdGlvbi54Q29vcmQsXG4gICAgICAwXG4gICAgKS54Q29vcmQ7XG5cbiAgICBjb25zdCBuZXdZUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihcbiAgICAgIDAsXG4gICAgICBtb3VzZUxvY2F0aW9uLnlDb29yZFxuICAgICkueUNvb3JkO1xuXG4gICAgbGV0IG5ld1NoaXBQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKFxuICAgICAgbmV3WFBvc2l0aW9uLFxuICAgICAgY3VycmVudFNoaXBbMF0ueUNvb3JkXG4gICAgKTtcblxuICAgIGlmIChjdXJyZW50QXhpcyA9PT0gJ3gnKSB7XG4gICAgICBuZXdTaGlwUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihcbiAgICAgICAgY3VycmVudFNoaXBbMF0ueENvb3JkLFxuICAgICAgICBuZXdZUG9zaXRpb25cbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGF0ZXN0U2hpcCA9IHNoaXAuY3JlYXRlU2hpcChcbiAgICAgIG5ld1NoaXBQb3NpdGlvbixcbiAgICAgIGN1cnJlbnRTaGlwLmxlbmd0aCxcbiAgICAgIGN1cnJlbnRBeGlzXG4gICAgKTtcblxuICAgIHJldHVybiBsYXRlc3RTaGlwO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUGxheWVyU2hpcCA9IChsYXRlc3RTaGlwLCBsYXRlc3RBeGlzLCBsYXRlc3RHYW1lKSA9PiB7XG4gICAgaWYgKGxhdGVzdFNoaXApIGxhdGVzdEdhbWUuc2V0dXBTaGlwKGxhdGVzdFNoaXBbMF0sIGxhdGVzdEF4aXMpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVBsYXllclNoaXBFdmVudCA9ICgpID0+IHtcbiAgICBwbGFjZVBsYXllclNoaXAocGxhY2VkU2hpcCwgYXhpcywgYWN0aXZlR2FtZSk7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAgIGVsZW1lbnQuY29tcHV0ZXJHcmlkLmlubmVySFRNTCA9ICcnO1xuICAgIGVsZW1lbnQucGxheWVyR3JpZC5pbm5lckhUTUwgPSAnJztcblxuICAgIGVsZW1lbnQuc2VjdGlvblNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGVsZW1lbnQuc2hpcFNlbGVjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGVsZW1lbnQuZ2FtZUZpbmlzaGVkU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGVsZW1lbnQuZ2FtZU92ZXJUZXh0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgcmVzdGFydEdhbWUoKTtcbiAgfTtcblxuICBjb25zdCBhZGRVaUV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgZWxlbWVudC5zaGlwTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmluZE1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZpbmRUb3VjaFBvc2l0aW9uKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcEV2ZW50KTtcblxuICAgIGVsZW1lbnQucm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQXhpcyk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVWlFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgZWxlbWVudC5zaGlwTGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmluZE1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZpbmRUb3VjaFBvc2l0aW9uKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcEV2ZW50KTtcblxuICAgIGVsZW1lbnQucm90YXRlQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQXhpcyk7XG4gIH07XG5cbiAgY29uc3QgYWRkRW5kaW5nRXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICBlbGVtZW50LnJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEdhbWUpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUVuZGluZ0V2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgZWxlbWVudC5yZXN0YXJ0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWxlbWVudC5yZXN0YXJ0KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVHYW1lRXZlbnRzID0gKCkgPT4ge1xuICAgIGFkZEVuZGluZ0V2ZW50cygpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBjaGFuZ2VNb3VzZVBvc2l0aW9uKTtcbiAgICBlbGVtZW50LmNvbXB1dGVyR3JpZExheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAnbW91c2Vtb3ZlJyxcbiAgICAgIGZpbmRNb3VzZVBvc2l0aW9uXG4gICAgKTtcbiAgICBlbGVtZW50LmNvbXB1dGVyR3JpZExheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXR0YWNrU2hpcHMpO1xuICB9O1xuXG4gIGNvbnN0IGFkZEdhbWVFdmVudHMgPSAoKSA9PiB7XG4gICAgcmVtb3ZlVWlFdmVudHMoKTtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGNoYW5nZU1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuY29tcHV0ZXJHcmlkTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmluZE1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuY29tcHV0ZXJHcmlkTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhdHRhY2tTaGlwcyk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tNb3VzZVRhcmdldCA9IChlbGVtZW50Q2xhc3MpID0+IHtcbiAgICBpZiAoZWxlbWVudENsYXNzICE9PSAnZ3JpZE92ZXJsYXkgY29tcHV0ZXJHcmlkT3ZlcmxheScpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VNb3VzZVBvc2l0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbW91c2VUYXJnZXQgPSBjaGVja01vdXNlVGFyZ2V0KGV2ZW50LnRhcmdldC5jbGFzc05hbWUpO1xuICAgIGlmICghbW91c2VUYXJnZXQpIG1vdXNlQmxvY2tMb2NhdGlvbiA9IGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja1NoaXBzID0gKCkgPT4ge1xuICAgIGFjdGl2ZUdhbWUuYXR0YWNrQm9hdHMobW91c2VCbG9ja0xvY2F0aW9uKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJTaGlwcyA9IChzaGlwcywgZ3JpZCwgbGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcEdyb3VwKSA9PiB7XG4gICAgICBzaGlwR3JvdXAuZm9yRWFjaCgoYm9hdCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwRWxlbWVudCA9IGNyZWF0ZVNoaXBCbG9jayhib2F0LCBsYXRlc3RCbG9ja1NpemUpO1xuICAgICAgICBncmlkLmFwcGVuZENoaWxkKHNoaXBFbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckhpdHMgPSAoc2hpcHMsIHNoaXBUeXBlLCBncmlkLCBsYXRlc3RCbG9ja1NpemUpID0+IHtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwUG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHNoaXBFbGVtZW50ID0gY3JlYXRlU2hpcEJsb2NrKFxuICAgICAgICBzaGlwUG9zaXRpb24sXG4gICAgICAgIGxhdGVzdEJsb2NrU2l6ZSxcbiAgICAgICAgc2hpcFR5cGVcbiAgICAgICk7XG4gICAgICBncmlkLmFwcGVuZENoaWxkKHNoaXBFbGVtZW50KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJHcmlkcyA9IChibG9ja1NpemUyLCBtb3VzZVBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgZ2FtZVZhbHVlcyA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuXG4gICAgY29uc3QgeyBwbGF5ZXJHcmlkIH0gPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICBjb25zdCB7IGNvbXB1dGVyR3JpZCB9ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBwbGF5ZXJHcmlkLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbXB1dGVyR3JpZC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IHBsYXllckJvYXJkVmFsdWVzID0gZ2FtZVZhbHVlcy5wbGF5ZXJCb2FyZC5nZXRWYWx1ZXMoKTtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkVmFsdWVzID0gZ2FtZVZhbHVlcy5jb21wdXRlckJvYXJkLmdldFZhbHVlcygpO1xuICAgIHJlbmRlclNoaXBzKHBsYXllckJvYXJkVmFsdWVzLmN1cnJlbnRTaGlwcywgcGxheWVyR3JpZCwgYmxvY2tTaXplMik7XG4gICAgcmVuZGVySGl0cyhwbGF5ZXJCb2FyZFZhbHVlcy5oaXRzLCAnaGl0QmxvY2snLCBwbGF5ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgICByZW5kZXJIaXRzKHBsYXllckJvYXJkVmFsdWVzLm1pc3NlcywgJ21pc3NCbG9jaycsIHBsYXllckdyaWQsIGJsb2NrU2l6ZTIpO1xuXG4gICAgcmVuZGVySGl0cyhjb21wdXRlckJvYXJkVmFsdWVzLmhpdHMsICdoaXRCbG9jaycsIGNvbXB1dGVyR3JpZCwgYmxvY2tTaXplMik7XG4gICAgcmVuZGVySGl0cyhcbiAgICAgIGNvbXB1dGVyQm9hcmRWYWx1ZXMubWlzc2VzLFxuICAgICAgJ21pc3NCbG9jaycsXG4gICAgICBjb21wdXRlckdyaWQsXG4gICAgICBibG9ja1NpemUyXG4gICAgKTtcblxuICAgIGNvbnN0IG1vdXNlU2hpcCA9IHNoaXAuY3JlYXRlU2hpcChtb3VzZVBvc2l0aW9uLCAxLCAneCcpO1xuXG4gICAgaWYgKG1vdXNlU2hpcCkge1xuICAgICAgcmVuZGVySGl0cyhtb3VzZVNoaXAsICdjdXJzb3JCbG9jaycsIGNvbXB1dGVyR3JpZCwgYmxvY2tTaXplMik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclN0YXRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGdhbWVWYWx1ZXMgPSBhY3RpdmVHYW1lLmdldEdhbWVWYWx1ZXMoKTtcblxuICAgIGNvbnN0IHsgcGxheWVySGl0cywgcGxheWVyTWlzc2VzIH0gPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICBjb25zdCB7IGNvbXB1dGVySGl0cywgY29tcHV0ZXJNaXNzZXMgfSA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgY29uc3QgcGxheWVyQm9hcmRWYWx1ZXMgPSBnYW1lVmFsdWVzLnBsYXllckJvYXJkLmdldFZhbHVlcygpO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmRWYWx1ZXMgPSBnYW1lVmFsdWVzLmNvbXB1dGVyQm9hcmQuZ2V0VmFsdWVzKCk7XG5cbiAgICBwbGF5ZXJIaXRzLnRleHRDb250ZW50ID0gYEhpdHMgLSAke3BsYXllckJvYXJkVmFsdWVzLmhpdHMubGVuZ3RofWA7XG4gICAgcGxheWVyTWlzc2VzLnRleHRDb250ZW50ID0gYE1pc3NlcyAtICR7cGxheWVyQm9hcmRWYWx1ZXMubWlzc2VzLmxlbmd0aH1gO1xuXG4gICAgY29tcHV0ZXJIaXRzLnRleHRDb250ZW50ID0gYEhpdHMgLSAke2NvbXB1dGVyQm9hcmRWYWx1ZXMuaGl0cy5sZW5ndGh9YDtcbiAgICBjb21wdXRlck1pc3Nlcy50ZXh0Q29udGVudCA9IGBNaXNzZXMgLSAke2NvbXB1dGVyQm9hcmRWYWx1ZXMubWlzc2VzLmxlbmd0aH1gO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlHYW1lT3ZlclVpID0gKHN0YXR1cykgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBlbGVtZW50cy5jb21wdXRlckdyaWQuaW5uZXJIVE1MID0gJyc7XG4gICAgZWxlbWVudHMucGxheWVyR3JpZC5pbm5lckhUTUwgPSAnJztcblxuICAgIHJlbW92ZUdhbWVFdmVudHMoKTtcbiAgICBhZGRFbmRpbmdFdmVudHMoKTtcbiAgICBlbGVtZW50cy5nYW1lT3ZlclRleHQuaW5uZXJIVE1MID0gc3RhdHVzLm1lc3NhZ2U7XG5cbiAgICBlbGVtZW50cy5zaGlwU2VsZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZWxlbWVudHMuc2VjdGlvblNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGVsZW1lbnRzLmdhbWVGaW5pc2hlZFNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICAgIGVsZW1lbnRzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyR2FtZSA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGdhbWVTdGF0dXMgPSBhY3RpdmVHYW1lLmdhbWVJc092ZXIoKTtcblxuICAgICAgY29uc3QgbGF0ZXN0QmxvY2tTaXplID0gY2hhbmdlQmxvY2tTaXplKHdpbmRvdy5tYXRjaE1lZGlhKTtcbiAgICAgIHJlbmRlckdyaWRzKGxhdGVzdEJsb2NrU2l6ZSwgbW91c2VCbG9ja0xvY2F0aW9uKTtcbiAgICAgIHJlbmRlclN0YXRzKCk7XG5cbiAgICAgIGlmICghZ2FtZVN0YXR1cy5nYW1lRmluaXNoZWQpIHJlbmRlckdhbWUobGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgIGVsc2UgZGlzcGxheUdhbWVPdmVyVWkoZ2FtZVN0YXR1cyk7XG4gICAgfSwgcmVuZGVyU3BlZWQpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVNoaXBTZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBlbGVtZW50cy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZWxlbWVudHMuc2VjdGlvblNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGVsZW1lbnRzLnNoaXBHcmlkLmlubmVySFRNTCA9ICcnO1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICByZW1vdmVTaGlwU2VjdGlvbigpO1xuXG4gICAgYWN0aXZlR2FtZS5zZXR1cEdhbWUoKTtcbiAgICBhZGRHYW1lRXZlbnRzKCk7XG5cbiAgICByZW5kZXJHYW1lKCk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU2VsZWN0aW9uR3JpZCA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGdhbWVWYWx1ZSA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuICAgICAgY29uc3QgY2hlY2tCb2FyZFNoaXBzID1cbiAgICAgICAgZ2FtZVZhbHVlLnBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCkuY3VycmVudFNoaXBzO1xuXG4gICAgICBjaGFuZ2VCbG9ja1NpemUod2luZG93Lm1hdGNoTWVkaWEpO1xuXG4gICAgICBpZiAoYWN0aXZlR2FtZS5jaGVja1NldHVwKGdhbWVWYWx1ZS5wbGF5ZXJDaGVja0JvYXJkKSkgZGlzYWJsZVN0YXJ0ZXJVaSgpO1xuXG4gICAgICBpZiAobW91c2VCbG9ja0xvY2F0aW9uKSB7XG4gICAgICAgIGxldCBjdXJyZW50U2hpcCA9IGFjdGl2ZUdhbWUuYXJyYW5nZUJsb2Nrcyhtb3VzZUJsb2NrTG9jYXRpb24sIGF4aXMpO1xuICAgICAgICBpZiAoIWN1cnJlbnRTaGlwICYmIHBsYWNlZFNoaXApIHtcbiAgICAgICAgICBjdXJyZW50U2hpcCA9IG1vdmVTaGlwQnlEaXJlY3Rpb24oXG4gICAgICAgICAgICBtb3VzZUJsb2NrTG9jYXRpb24sXG4gICAgICAgICAgICBwbGFjZWRTaGlwLFxuICAgICAgICAgICAgYXhpc1xuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFNoaXApIHBsYWNlZFNoaXAgPSBjdXJyZW50U2hpcDtcblxuICAgICAgICBpZiAocGxhY2VkU2hpcCkgcmVuZGVyUGxhY2VkU2hpcChibG9ja1NpemUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2ZUdhbWUuY2hlY2tTZXR1cChjaGVja0JvYXJkU2hpcHMpKSByZW5kZXJTZWxlY3Rpb25HcmlkKCk7XG4gICAgICBlbHNlIHN0YXJ0R2FtZShibG9ja1NpemUpO1xuICAgIH0sIHJlbmRlclNwZWVkKTtcbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZXMgPSAoKSA9PiAoe1xuICAgIGJsb2NrU2l6ZSxcbiAgICBwbGFjZWRTaGlwLFxuICAgIGF4aXMsXG4gICAgbW91c2VCbG9ja0xvY2F0aW9uLFxuICB9KTtcblxuICBjb25zdCByZXN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICByZW1vdmVFbmRpbmdFdmVudHMoKTtcblxuICAgIHJlbmRlclNlbGVjdGlvbkdyaWQoKTtcblxuICAgIGJsb2NrU2l6ZSA9IDQyO1xuICAgIGFjdGl2ZUdhbWUgPSBHYW1lKCk7XG4gICAgcGxhY2VkU2hpcCA9IGZhbHNlO1xuICAgIGF4aXMgPSAneSc7XG4gICAgbW91c2VCbG9ja0xvY2F0aW9uID0gZmFsc2U7XG5cbiAgICBhZGRVaUV2ZW50cygpO1xuICB9O1xuXG4gIGNvbnN0IGFjdGl2YXRlVWkgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnZUNvbnRlbnQgPSBkb20uZ2V0UGFnZSgpO1xuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gcGFnZUNvbnRlbnQ7XG4gICAgcmVzdGFydEdhbWUoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFjdGl2YXRlVWksXG4gICAgY3JlYXRlQmxvY2tFbGVtZW50LFxuICAgIGdldE1vdXNlUG9zaXRpb24sXG4gICAgbW92ZVNoaXBCeURpcmVjdGlvbixcbiAgICBjaGFuZ2VCbG9ja1NpemUsXG4gICAgY2hhbmdlQXhpcyxcbiAgICBnZXRWYWx1ZXMsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVaTtcbiJdLCJuYW1lcyI6WyJyZWZyZXNoaW5nTG9nbyIsIkRvbSIsImdldEVsZW1lbnRzIiwib3ZlcmxheSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlY3Rpb25TY3JlZW4iLCJzaGlwVGV4dCIsInNoaXBHcmlkIiwic2hpcExheWVyIiwicm90YXRlQnV0dG9uIiwiZ3JpZHMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGl0cyIsIm1pc3NlcyIsInBsYXllckdyaWQiLCJwbGF5ZXJIaXRzIiwicGxheWVyTWlzc2VzIiwiY29tcHV0ZXJHcmlkIiwiY29tcHV0ZXJIaXRzIiwic2hpcFNlbGVjdGlvbiIsImNvbXB1dGVyTWlzc2VzIiwiY29udGVudCIsImNvbXB1dGVyR3JpZExheWVyIiwicmVzdGFydCIsImdhbWVPdmVyVGV4dCIsImdhbWVGaW5pc2hlZFNlY3Rpb24iLCJnZXRQYWdlIiwiUG9zaXRpb24iLCJTaGlwIiwiUHJhY3RpY2FsIiwiR2FtZWJvYXJkIiwicG9zaXRpb24iLCJzaGlwIiwicHJhY3RpY2FsIiwiY3VycmVudFNoaXBzIiwicmFuZG9taXplIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tQXhpcyIsImF4aWVzIiwibGVuZ3RoIiwicGxhY2VBbGxTaGlwcyIsInNoaXBzQXJyYXkiLCJjb21wYXJlU2hpcHNBcnJheSIsImxhdGVzdFNoaXBzQXJyYXkiLCJzaGlwcyIsInNoaXBzRG9Db2xsaWRlIiwiZm9yRWFjaCIsImxhdGVzdFNoaXBzIiwiYm9hdCIsImxhdGVzdEJvYXQiLCJjb21wYXJlUG9zaXRpb24iLCJnZXRUeXBlT2ZQbGFjZWRTaGlwIiwic2hpcEFycmF5Iiwic2hpcFR5cGVzIiwic2hpcFR5cGUiLCJzaGlwTGVuZ3RoIiwicGxheWVyUGxhY2VTaGlwIiwibG9jYXRpb24iLCJheGlzIiwiY3VycmVudEFycmF5IiwiY29weUFycmF5IiwibGF0ZXN0U2hpcCIsImNyZWF0ZVNoaXAiLCJpc0NvbGxpZGVkIiwicHVzaCIsInBsYWNlUmFuZG9tU2hpcHMiLCJyYW5kb21pemVyIiwicmFuZG9tQXhpZXMiLCJyYW5kb21Qb3NpdGlvbiIsImNyZWF0ZVBvc2l0aW9uIiwibGF0ZXN0TGVuZ3RoIiwicmFuZG9tU2hpcCIsInNoaXBDb2xsaWRlcyIsInBsYWNlU2hpcHNSYW5kb21seSIsImZpbHRlckF0dGFjayIsImFycmF5IiwiY3VycmVudEF0dGFjayIsImN1cnJlbnRBdHRhY2tBcnJheSIsImZpbHRlciIsIml0ZW0iLCJ4Q29vcmQiLCJ5Q29vcmQiLCJoYXNIaXRTaGlwIiwiaGl0UG9zaXRpb24iLCJsYXRlc3RIaXRzIiwibGF0ZXN0TWlzc2VzIiwiaGFzQmVlbkhpdCIsImhhc0JlZW5NaXNzIiwiYXR0YWNrU2hpcCIsImxhdGVzdFBvc2l0aW9uIiwiY3VycmVudEhpdHMiLCJjdXJyZW50TWlzc2VzIiwiaXNIaXQiLCJwb3NpdGlvbnNBcnJheSIsImhpdCIsImhpdEFycmF5Iiwic2hpcEFycmF5cyIsImZpbmFsT2JqZWN0IiwicmVjaWV2ZUF0dGFjayIsInJlc3VsdCIsImNyZWF0ZVJhbmRvbUNvb3JkcyIsImlzTW9ja1JhbmRvbSIsImNhbGxSYW5kb21pemVyIiwicmFuZG9tWCIsInJhbmRvbVkiLCJyZWNpZXZlUmFuZG9tQXR0YWNrIiwiaGFzSGl0IiwiaXNBbGxTdW5rIiwiaGFzU3Vua2VkIiwiaXNTdW5rIiwiZ2V0VmFsdWVzIiwiR2FtZSIsInBsYXllckJvYXJkIiwiY29tcHV0ZXJCb2FyZCIsInBsYXllckNoZWNrQm9hcmQiLCJjaGVja1NldHVwIiwicGxheWVyQ2hlY2tTaGlwcyIsInNldHVwR2FtZSIsInBsYXllckNoZWNrVmFsdWVzIiwiYXR0YWNrQm9hdHMiLCJjb29yZHMiLCJzZXR1cFNoaXAiLCJnYW1lSXNPdmVyIiwibWVzc2FnZSIsImdhbWVGaW5pc2hlZCIsImFycmFuZ2VCbG9ja3MiLCJtb3VzZVBvc2l0aW9uIiwiY3VycmVudFJvdGF0aW9uIiwiY2hlY2tib2FyZE9iamVjdHMiLCJzaGlwVHlwZU9iamVjdCIsImN1cnJlbnRTaGlwIiwiZ2V0R2FtZVZhbHVlcyIsImNoZWNrT3V0T2ZCb3VuY2UiLCJuZXdQb3NpdGlvbiIsImFkZFBvc2l0aW9uIiwicG9zaXRpb24xIiwicG9zaXRpb24yIiwibXVsdGlwbHlQb3NpdGlvbiIsImNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwiLCJuZXdBcnJheSIsImlzT2JqZWN0IiwiY3VycmVudE9iamVjdCIsImNoZWNrT2JqZWN0Iiwib2JqZWN0MSIsIm9iamVjdDIiLCJpbmRleCIsInNlY29uZEluZGV4Iiwib2JqZWN0SXNFcXVhbCIsImN1cnJlbnRPYmplY3QyIiwiY3VycmVudE9iamVjdFZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsImN1cnJlbnRPYmplY3QyVmFsdWVzIiwib2JqZWN0S2V5cyIsImtleXMiLCJvYmplY3RLZXlzMiIsImtleSIsIml0ZW0yIiwiY2hlY2tPYmplY3RCb29sIiwiZ2V0QWRkZWRQb3NpdGlvbiIsImFkZGVkUG9zaXRpb24iLCJsZW5ndGgxIiwicG9wdWxhdGVTaGlwcyIsImN1cnJlbnRQb3NpdGlvbiIsImxhdGVzdEFycmF5IiwiYXJyYXlMZW5ndGgiLCJwb3MiLCJVaSIsImRvbSIsInJlbmRlclNwZWVkIiwiYmxvY2tTaXplIiwiYWN0aXZlR2FtZSIsInBsYWNlZFNoaXAiLCJtb3VzZUJsb2NrTG9jYXRpb24iLCJjcmVhdGVEb21FbGVtZW50IiwiZWxlbWVudE5hbWUiLCJjcmVhdGVFbGVtZW50IiwiZ2V0TW91c2VQb3NpdGlvbiIsIm9mZnNldFgiLCJvZmZzZXRZIiwib3V0T2ZCb3VuY2UiLCJmaW5kTW91c2VQb3NpdGlvbiIsImV2ZW50IiwiY3VycmVudE1vdXNlUG9zaXRpb24iLCJmaW5kVG91Y2hQb3NpdGlvbiIsInJlY3QiLCJ0YXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3VjaE9mZnNldFgiLCJ0YXJnZXRUb3VjaGVzIiwiY2xpZW50WCIsIngiLCJ0b3VjaE9mZnNldFkiLCJjbGllbnRZIiwieSIsInRvdWNoUG9zaXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZUJsb2NrU2l6ZSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiY3JlYXRlQmxvY2tFbGVtZW50IiwiYmxvY2tDbGFzcyIsImNyZWF0ZUJsb2NrIiwibGF0ZXN0Q2xhc3MiLCJibG9ja0VsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXNhYmxlU3RhcnRlclVpIiwiY3JlYXRlU2hpcEJsb2NrIiwic2hpcFBvc2l0aW9uIiwibGF0ZXN0QmxvY2tTaXplIiwic2hpcEJsb2NrIiwicmVhbFBvc2l0aW9uWCIsInJlYWxQb3NpdGlvblkiLCJzdHlsZSIsImxlZnQiLCJ0b3AiLCJyZW5kZXJBbHJlYWR5UGxhY2VkU2hpcHMiLCJnYW1lVmFsdWVzIiwiY2hlY2tCb2FyZFNoaXBzIiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJQbGFjZWRTaGlwIiwiZWxlbWVudCIsImlubmVySFRNTCIsImNoYW5nZUF4aXMiLCJtb3ZlU2hpcEJ5RGlyZWN0aW9uIiwibW91c2VMb2NhdGlvbiIsImN1cnJlbnRBeGlzIiwibmV3WFBvc2l0aW9uIiwibmV3WVBvc2l0aW9uIiwibmV3U2hpcFBvc2l0aW9uIiwicGxhY2VQbGF5ZXJTaGlwIiwibGF0ZXN0QXhpcyIsImxhdGVzdEdhbWUiLCJwbGFjZVBsYXllclNoaXBFdmVudCIsInJlc2V0R2FtZSIsImRpc3BsYXkiLCJyZXN0YXJ0R2FtZSIsImFkZFVpRXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZVVpRXZlbnRzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEVuZGluZ0V2ZW50cyIsInJlbW92ZUVuZGluZ0V2ZW50cyIsInJlbW92ZUdhbWVFdmVudHMiLCJ3aW5kb3ciLCJjaGFuZ2VNb3VzZVBvc2l0aW9uIiwiYXR0YWNrU2hpcHMiLCJhZGRHYW1lRXZlbnRzIiwiY2hlY2tNb3VzZVRhcmdldCIsImVsZW1lbnRDbGFzcyIsIm1vdXNlVGFyZ2V0IiwiY2xhc3NOYW1lIiwicmVuZGVyU2hpcHMiLCJncmlkIiwic2hpcEdyb3VwIiwic2hpcEVsZW1lbnQiLCJyZW5kZXJIaXRzIiwicmVuZGVyR3JpZHMiLCJibG9ja1NpemUyIiwicGxheWVyQm9hcmRWYWx1ZXMiLCJjb21wdXRlckJvYXJkVmFsdWVzIiwibW91c2VTaGlwIiwicmVuZGVyU3RhdHMiLCJ0ZXh0Q29udGVudCIsImRpc3BsYXlHYW1lT3ZlclVpIiwic3RhdHVzIiwiZWxlbWVudHMiLCJyZW5kZXJHYW1lIiwic2V0VGltZW91dCIsImdhbWVTdGF0dXMiLCJyZW1vdmVTaGlwU2VjdGlvbiIsInN0YXJ0R2FtZSIsInJlbmRlclNlbGVjdGlvbkdyaWQiLCJnYW1lVmFsdWUiLCJhY3RpdmF0ZVVpIiwicGFnZUNvbnRlbnQiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==