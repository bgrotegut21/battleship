"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _scripts_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/ui.js */ "./src/scripts/ui.js");


var currentUi = (0,_scripts_ui_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
currentUi.activateUi();

/***/ }),

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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/azeret-mono-v11-latin-regular.eot */ "./src/fonts/azeret-mono-v11-latin-regular.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/azeret-mono-v11-latin-regular.woff2 */ "./src/fonts/azeret-mono-v11-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/azeret-mono-v11-latin-regular.woff */ "./src/fonts/azeret-mono-v11-latin-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/azeret-mono-v11-latin-regular.ttf */ "./src/fonts/azeret-mono-v11-latin-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/azeret-mono-v11-latin-regular.svg */ "./src/fonts/azeret-mono-v11-latin-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/azeret-mono-v11-latin-700.eot */ "./src/fonts/azeret-mono-v11-latin-700.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/azeret-mono-v11-latin-700.woff2 */ "./src/fonts/azeret-mono-v11-latin-700.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/azeret-mono-v11-latin-700.woff */ "./src/fonts/azeret-mono-v11-latin-700.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/azeret-mono-v11-latin-700.ttf */ "./src/fonts/azeret-mono-v11-latin-700.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/azeret-mono-v11-latin-700.svg */ "./src/fonts/azeret-mono-v11-latin-700.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v30-latin-300.eot */ "./src/fonts/roboto-v30-latin-300.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v30-latin-300.woff2 */ "./src/fonts/roboto-v30-latin-300.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v30-latin-300.woff */ "./src/fonts/roboto-v30-latin-300.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v30-latin-300.ttf */ "./src/fonts/roboto-v30-latin-300.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v30-latin-300.svg */ "./src/fonts/roboto-v30-latin-300.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v30-latin-regular.eot */ "./src/fonts/roboto-v30-latin-regular.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v30-latin-regular.woff2 */ "./src/fonts/roboto-v30-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v30-latin-regular.woff */ "./src/fonts/roboto-v30-latin-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v30-latin-regular.ttf */ "./src/fonts/roboto-v30-latin-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v30-latin-regular.svg */ "./src/fonts/roboto-v30-latin-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___, { hash: "#AzeretMono" });
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___, { hash: "#AzeretMono" });
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___, { hash: "#Roboto" });
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___, { hash: "#Roboto" });
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --darkBlack: rgb(2, 4, 8);\n  --darkGray: rgb(22, 27, 34);\n  --missBlue: rgb(76, 84, 191);\n}\n\n/*credit to https://google-webfonts-helper.herokuapp.com/ for allowing me to import these fonts automatically*/\n/* azeret-mono-regular - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")\n      format('woff2'),\n    /* Super Modern Browsers */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg'); /* Legacy iOS */\n}\n/* azeret-mono-700 - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 700;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ")\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ")\n      format('woff2'),\n    /* Super Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ")\n      format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format('svg'); /* Legacy iOS */\n}\n\n/* roboto-300 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format('woff2'),\n    /* Super Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ")\n      format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */ url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ")\n      format('svg'); /* Legacy iOS */\n}\n/* roboto-regular - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ")\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ") format('woff2'),\n    /* Super Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ")\n      format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ") format('svg'); /* Legacy iOS */\n}\n\nhtml {\n  min-height: 100%;\n}\n\nbody {\n  min-height: 100%;\n}\n\n.content {\n  min-height: 100%;\n  font-family: 'Roboto', sans-serif;\n}\n\n.shipGrid {\n  position: relative;\n}\n\n.block {\n  background: white;\n  width: 42px;\n  height: 42px;\n  border: none;\n  position: absolute;\n}\n\n.hitBlock {\n  background: pink;\n}\n\n.cursorBlock {\n  background: blue;\n}\n\n.missBlock {\n  background: var(--missBlue);\n}\n\n.sectionScreen {\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n\n  position: fixed;\n\n  display: flex;\n\n  justify-content: center;\n  align-items: center;\n}\n\n.gameFinishedSection {\n  width: 250px;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 150px;\n  font-size: medium;\n\n  background: var(--darkBlack);\n\n  color: white;\n}\n\n.restart {\n  width: 100px;\n  height: 30px;\n  background: var(--darkGray);\n  margin-top: 12px;\n\n  border: 1px solid white;\n  color: white;\n}\n\n.shipTitle {\n  font-family: 'Azeret Mono', monospace;\n}\n\n.shipText {\n  margin: 10px;\n}\n\n.shipSelection {\n  padding: 10px;\n  color: white;\n  background: var(--darkBlack);\n  display: flex;\n  width: 440px;\n  flex-direction: column;\n  align-items: center;\n}\n\n.rotateImage {\n  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(87deg)\n    brightness(100%);\n}\n\n.rotateButton:hover,\n.restart:hover {\n  background: var(--darkBlack);\n  cursor: pointer;\n}\n\n.rotateButton {\n  background: var(--darkGray);\n  border: 1px solid white;\n  margin: 10px;\n  height: 50px;\n  width: 50px;\n  line-height: 50px;\n  text-align: center;\n}\n\n.shipGrid {\n  width: 420px;\n  height: 420px;\n  background: var(--darkGray);\n  border: 1px solid;\n  padding: 0;\n  margin: 0;\n}\n\n.boardTitle {\n  margin: 10px;\n}\n\n.overlay {\n  background: rgba(39, 39, 39, 0.574);\n  z-index: 2;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.content {\n  background: rgb(2, 4, 8);\n}\n\n.mainSection {\n  min-height: 90vh;\n  color: white;\n  position: relative;\n}\n\n.mainTitle {\n  text-align: center;\n  height: 10vh;\n  line-height: 10vh;\n  background: var(--darkGray);\n}\n\n.centerSection {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n\n  justify-content: center;\n\n  align-items: center;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px;\n}\n\n.grid {\n  width: 420px;\n  height: 420px;\n  position: relative;\n  background: var(--darkGray);\n  border: 1px solid white;\n}\n.shipOverlay {\n  width: 420px;\n  height: 420px;\n  border: 1px solid blue;\n\n  position: fixed;\n}\n\n.gridLayer {\n  width: 420px;\n  height: 420px;\n  position: relative;\n}\n\n.gridOverlay {\n  width: 420px;\n  height: 420px;\n  border: 1px solid blue;\n}\n\n.shipOverlay {\n  position: fixed;\n  z-index: 3;\n}\n\n.gridOverlay {\n  position: absolute;\n\n  z-index: 1;\n}\n\n.stats {\n  display: flex;\n  width: 420px;\n  justify-content: space-around;\n  margin: 20px;\n}\n\n.footer {\n  background: var(--darkGray);\n  height: 10vh;\n  color: white;\n  word-wrap: break-word;\n  font-size: small;\n  line-height: 10vh;\n  text-align: center;\n}\n\n.mainTitle h1 {\n  font-family: 'Azeret Mono', monospace;\n}\n\n@media only screen and (max-width: 600px) {\n  .footer {\n    font-size: small;\n  }\n}\n\n@media only screen and (max-width: 960px) {\n  .grid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipGrid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipSelection {\n    width: 310px;\n  }\n\n  .footer {\n    font-size: x-small;\n  }\n\n  .block {\n    width: 30px;\n    height: 30px;\n  }\n\n  .stats {\n    width: 300px;\n  }\n}\n\n@media only screen and (max-width: 470px) {\n  .grid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipGrid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipSelection {\n    width: 220px;\n  }\n\n  .shipText {\n    font-size: medium;\n  }\n\n  .boardTitle {\n    font-size: medium;\n  }\n\n  .block {\n    width: 21px;\n    height: 21px;\n  }\n  .footer {\n    font-size: x-small;\n  }\n\n  .stats {\n    width: 210px;\n  }\n}\n\n@media only screen and (max-width: 365px) {\n  .footer {\n    font-size: xx-small;\n  }\n  .footer {\n    font-size: 8px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .grid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .footer {\n    font-size: 6px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipGrid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipSelection {\n    width: 160px;\n  }\n\n  .block {\n    width: 15px;\n    height: 15px;\n  }\n\n  .shipText {\n    font-size: small;\n  }\n\n  .shipTitle {\n    font-size: medium;\n  }\n\n  .stats {\n    width: 150px;\n    font-size: 12px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --darkBlack: rgb(2, 4, 8);\n  --darkGray: rgb(22, 27, 34);\n  --missBlue: rgb(76, 84, 191);\n}\n\n/*credit to https://google-webfonts-helper.herokuapp.com/ for allowing me to import these fonts automatically*/\n/* azeret-mono-regular - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url('../fonts/azeret-mono-v11-latin-regular.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/azeret-mono-v11-latin-regular.eot?#iefix')\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/azeret-mono-v11-latin-regular.woff2')\n      format('woff2'),\n    /* Super Modern Browsers */\n      url('../fonts/azeret-mono-v11-latin-regular.woff') format('woff'),\n    /* Modern Browsers */ url('../fonts/azeret-mono-v11-latin-regular.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url('../fonts/azeret-mono-v11-latin-regular.svg#AzeretMono') format('svg'); /* Legacy iOS */\n}\n/* azeret-mono-700 - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 700;\n  src: url('../fonts/azeret-mono-v11-latin-700.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/azeret-mono-v11-latin-700.eot?#iefix')\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/azeret-mono-v11-latin-700.woff2')\n      format('woff2'),\n    /* Super Modern Browsers */ url('../fonts/azeret-mono-v11-latin-700.woff')\n      format('woff'),\n    /* Modern Browsers */ url('../fonts/azeret-mono-v11-latin-700.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url('../fonts/azeret-mono-v11-latin-700.svg#AzeretMono') format('svg'); /* Legacy iOS */\n}\n\n/* roboto-300 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url('../fonts/roboto-v30-latin-300.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/roboto-v30-latin-300.eot?#iefix') format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/roboto-v30-latin-300.woff2') format('woff2'),\n    /* Super Modern Browsers */ url('../fonts/roboto-v30-latin-300.woff')\n      format('woff'),\n    /* Modern Browsers */ url('../fonts/roboto-v30-latin-300.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */ url('../fonts/roboto-v30-latin-300.svg#Roboto')\n      format('svg'); /* Legacy iOS */\n}\n/* roboto-regular - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url('../fonts/roboto-v30-latin-regular.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/roboto-v30-latin-regular.eot?#iefix')\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/roboto-v30-latin-regular.woff2') format('woff2'),\n    /* Super Modern Browsers */ url('../fonts/roboto-v30-latin-regular.woff')\n      format('woff'),\n    /* Modern Browsers */ url('../fonts/roboto-v30-latin-regular.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url('../fonts/roboto-v30-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */\n}\n\nhtml {\n  min-height: 100%;\n}\n\nbody {\n  min-height: 100%;\n}\n\n.content {\n  min-height: 100%;\n  font-family: 'Roboto', sans-serif;\n}\n\n.shipGrid {\n  position: relative;\n}\n\n.block {\n  background: white;\n  width: 42px;\n  height: 42px;\n  border: none;\n  position: absolute;\n}\n\n.hitBlock {\n  background: pink;\n}\n\n.cursorBlock {\n  background: blue;\n}\n\n.missBlock {\n  background: var(--missBlue);\n}\n\n.sectionScreen {\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n\n  position: fixed;\n\n  display: flex;\n\n  justify-content: center;\n  align-items: center;\n}\n\n.gameFinishedSection {\n  width: 250px;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 150px;\n  font-size: medium;\n\n  background: var(--darkBlack);\n\n  color: white;\n}\n\n.restart {\n  width: 100px;\n  height: 30px;\n  background: var(--darkGray);\n  margin-top: 12px;\n\n  border: 1px solid white;\n  color: white;\n}\n\n.shipTitle {\n  font-family: 'Azeret Mono', monospace;\n}\n\n.shipText {\n  margin: 10px;\n}\n\n.shipSelection {\n  padding: 10px;\n  color: white;\n  background: var(--darkBlack);\n  display: flex;\n  width: 440px;\n  flex-direction: column;\n  align-items: center;\n}\n\n.rotateImage {\n  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(87deg)\n    brightness(100%);\n}\n\n.rotateButton:hover,\n.restart:hover {\n  background: var(--darkBlack);\n  cursor: pointer;\n}\n\n.rotateButton {\n  background: var(--darkGray);\n  border: 1px solid white;\n  margin: 10px;\n  height: 50px;\n  width: 50px;\n  line-height: 50px;\n  text-align: center;\n}\n\n.shipGrid {\n  width: 420px;\n  height: 420px;\n  background: var(--darkGray);\n  border: 1px solid;\n  padding: 0;\n  margin: 0;\n}\n\n.boardTitle {\n  margin: 10px;\n}\n\n.overlay {\n  background: rgba(39, 39, 39, 0.574);\n  z-index: 2;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.content {\n  background: rgb(2, 4, 8);\n}\n\n.mainSection {\n  min-height: 90vh;\n  color: white;\n  position: relative;\n}\n\n.mainTitle {\n  text-align: center;\n  height: 10vh;\n  line-height: 10vh;\n  background: var(--darkGray);\n}\n\n.centerSection {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n\n  justify-content: center;\n\n  align-items: center;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px;\n}\n\n.grid {\n  width: 420px;\n  height: 420px;\n  position: relative;\n  background: var(--darkGray);\n  border: 1px solid white;\n}\n.shipOverlay {\n  width: 420px;\n  height: 420px;\n  border: 1px solid blue;\n\n  position: fixed;\n}\n\n.gridLayer {\n  width: 420px;\n  height: 420px;\n  position: relative;\n}\n\n.gridOverlay {\n  width: 420px;\n  height: 420px;\n  border: 1px solid blue;\n}\n\n.shipOverlay {\n  position: fixed;\n  z-index: 3;\n}\n\n.gridOverlay {\n  position: absolute;\n\n  z-index: 1;\n}\n\n.stats {\n  display: flex;\n  width: 420px;\n  justify-content: space-around;\n  margin: 20px;\n}\n\n.footer {\n  background: var(--darkGray);\n  height: 10vh;\n  color: white;\n  word-wrap: break-word;\n  font-size: small;\n  line-height: 10vh;\n  text-align: center;\n}\n\n.mainTitle h1 {\n  font-family: 'Azeret Mono', monospace;\n}\n\n@media only screen and (max-width: 600px) {\n  .footer {\n    font-size: small;\n  }\n}\n\n@media only screen and (max-width: 960px) {\n  .grid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipGrid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipSelection {\n    width: 310px;\n  }\n\n  .footer {\n    font-size: x-small;\n  }\n\n  .block {\n    width: 30px;\n    height: 30px;\n  }\n\n  .stats {\n    width: 300px;\n  }\n}\n\n@media only screen and (max-width: 470px) {\n  .grid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipGrid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipSelection {\n    width: 220px;\n  }\n\n  .shipText {\n    font-size: medium;\n  }\n\n  .boardTitle {\n    font-size: medium;\n  }\n\n  .block {\n    width: 21px;\n    height: 21px;\n  }\n  .footer {\n    font-size: x-small;\n  }\n\n  .stats {\n    width: 210px;\n  }\n}\n\n@media only screen and (max-width: 365px) {\n  .footer {\n    font-size: xx-small;\n  }\n  .footer {\n    font-size: 8px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .grid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .footer {\n    font-size: 6px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipGrid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipSelection {\n    width: 160px;\n  }\n\n  .block {\n    width: 15px;\n    height: 15px;\n  }\n\n  .shipText {\n    font-size: small;\n  }\n\n  .shipTitle {\n    font-size: medium;\n  }\n\n  .stats {\n    width: 150px;\n    font-size: 12px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/azeret-mono-v11-latin-700.eot":
/*!*************************************************!*\
  !*** ./src/fonts/azeret-mono-v11-latin-700.eot ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c91a0c641b82c3a0a71a.eot";

/***/ }),

/***/ "./src/fonts/azeret-mono-v11-latin-700.svg":
/*!*************************************************!*\
  !*** ./src/fonts/azeret-mono-v11-latin-700.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2051817878041e61b07d.svg";

/***/ }),

/***/ "./src/fonts/azeret-mono-v11-latin-700.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/azeret-mono-v11-latin-700.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fc4a41cac7f074212d1.ttf";

/***/ }),

/***/ "./src/fonts/azeret-mono-v11-latin-700.woff":
/*!**************************************************!*\
  !*** ./src/fonts/azeret-mono-v11-latin-700.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7925b75636dd3b7483d4.woff";

/***/ }),

/***/ "./src/fonts/azeret-mono-v11-latin-700.woff2":
/*!***************************************************!*\
  !*** ./src/fonts/azeret-mono-v11-latin-700.woff2 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31ba6ce1cb92e6dd35ad.woff2";

/***/ }),

/***/ "./src/fonts/azeret-mono-v11-latin-regular.eot":
/*!*****************************************************!*\
  !*** ./src/fonts/azeret-mono-v11-latin-regular.eot ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e4cc7c589820783dbd4.eot";

/***/ }),

/***/ "./src/fonts/azeret-mono-v11-latin-regular.svg":
/*!*****************************************************!*\
  !*** ./src/fonts/azeret-mono-v11-latin-regular.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbd7f6f9335fe58bacbe.svg";

/***/ }),

/***/ "./src/fonts/azeret-mono-v11-latin-regular.ttf":
/*!*****************************************************!*\
  !*** ./src/fonts/azeret-mono-v11-latin-regular.ttf ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "631ef83a819cf9823d58.ttf";

/***/ }),

/***/ "./src/fonts/azeret-mono-v11-latin-regular.woff":
/*!******************************************************!*\
  !*** ./src/fonts/azeret-mono-v11-latin-regular.woff ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1321246eff360836f88.woff";

/***/ }),

/***/ "./src/fonts/azeret-mono-v11-latin-regular.woff2":
/*!*******************************************************!*\
  !*** ./src/fonts/azeret-mono-v11-latin-regular.woff2 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1f46e8be2215a5290d2.woff2";

/***/ }),

/***/ "./src/fonts/roboto-v30-latin-300.eot":
/*!********************************************!*\
  !*** ./src/fonts/roboto-v30-latin-300.eot ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76fc10943a0d75471e44.eot";

/***/ }),

/***/ "./src/fonts/roboto-v30-latin-300.svg":
/*!********************************************!*\
  !*** ./src/fonts/roboto-v30-latin-300.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "991f795de66ec216a1f8.svg";

/***/ }),

/***/ "./src/fonts/roboto-v30-latin-300.ttf":
/*!********************************************!*\
  !*** ./src/fonts/roboto-v30-latin-300.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "beded7bd0c00bf9099af.ttf";

/***/ }),

/***/ "./src/fonts/roboto-v30-latin-300.woff":
/*!*********************************************!*\
  !*** ./src/fonts/roboto-v30-latin-300.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2f7ab22cb9cbd074c3a.woff";

/***/ }),

/***/ "./src/fonts/roboto-v30-latin-300.woff2":
/*!**********************************************!*\
  !*** ./src/fonts/roboto-v30-latin-300.woff2 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c48fb6765a9fcb00b330.woff2";

/***/ }),

/***/ "./src/fonts/roboto-v30-latin-regular.eot":
/*!************************************************!*\
  !*** ./src/fonts/roboto-v30-latin-regular.eot ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2f36b803fec4bdcd1bc.eot";

/***/ }),

/***/ "./src/fonts/roboto-v30-latin-regular.svg":
/*!************************************************!*\
  !*** ./src/fonts/roboto-v30-latin-regular.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f862c8ba4ed785461ee.svg";

/***/ }),

/***/ "./src/fonts/roboto-v30-latin-regular.ttf":
/*!************************************************!*\
  !*** ./src/fonts/roboto-v30-latin-regular.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b1ef4e4ab8eafee13c1.ttf";

/***/ }),

/***/ "./src/fonts/roboto-v30-latin-regular.woff":
/*!*************************************************!*\
  !*** ./src/fonts/roboto-v30-latin-regular.woff ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1e2a76794cb86b2aa8e.woff";

/***/ }),

/***/ "./src/fonts/roboto-v30-latin-regular.woff2":
/*!**************************************************!*\
  !*** ./src/fonts/roboto-v30-latin-regular.woff2 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b009a76ad6afe4ebd301.woff2";

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxhQUFhLGNBQWMsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxV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akY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3ByYWN0aWNhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuY3NzJztcblxuaW1wb3J0IFVpIGZyb20gJy4vc2NyaXB0cy91aS5qcyc7XG5cbmNvbnN0IGN1cnJlbnRVaSA9IFVpKCk7XG5cbmN1cnJlbnRVaS5hY3RpdmF0ZVVpKCk7XG4iLCJpbXBvcnQgcmVmcmVzaGluZ0xvZ28gZnJvbSAnLi4vaW1hZ2VzL3JlZnJlc2hMb2dvLnN2Zyc7XG5cbmNvbnN0IERvbSA9ICgpID0+IHtcbiAgY29uc3QgZ2V0RWxlbWVudHMgPSAoKSA9PiAoe1xuICAgIG92ZXJsYXk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JyksXG4gICAgc2VjdGlvblNjcmVlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25TY3JlZW4nKSxcbiAgICBzaGlwVGV4dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBUZXh0JyksXG4gICAgc2hpcEdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwR3JpZCcpLFxuICAgIHNoaXBMYXllcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBMYXllcicpLFxuICAgIHJvdGF0ZUJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZUJ1dHRvbicpLFxuICAgIGdyaWRzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkJykpLFxuICAgIGhpdHM6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpdHMnKSksXG4gICAgbWlzc2VzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5taXNzZXMnKSksXG4gICAgcGxheWVyR3JpZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckdyaWQnKSxcbiAgICBwbGF5ZXJIaXRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVySGl0cycpLFxuICAgIHBsYXllck1pc3NlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllck1pc3NlcycpLFxuICAgIGNvbXB1dGVyR3JpZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyR3JpZCcpLFxuICAgIGNvbXB1dGVySGl0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVySGl0cycpLFxuICAgIHNoaXBTZWxlY3Rpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwU2VsZWN0aW9uJyksXG4gICAgY29tcHV0ZXJNaXNzZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlck1pc3NlcycpLFxuICAgIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JyksXG4gICAgY29tcHV0ZXJHcmlkTGF5ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlckdyaWRMYXllcicpLFxuICAgIHJlc3RhcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXJ0JyksXG4gICAgZ2FtZU92ZXJUZXh0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZU92ZXJUZXh0JyksXG4gICAgZ2FtZUZpbmlzaGVkU2VjdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVGaW5pc2hlZFNlY3Rpb24nKSxcbiAgfSk7XG5cbiAgY29uc3QgZ2V0UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gYCAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25TY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZUZpbmlzaGVkU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImdhbWVPdmVyVGV4dFwiPllvdSBXaW4g8J+YgzwvaDE+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVzdGFydFwiPlJlc3RhcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwU2VsZWN0aW9uXCI+XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInNoaXBUaXRsZVwiPkJBVFRMRVNISVA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJzaGlwVGV4dFwiPlBsYWNlIHlvdXIgc2hpcDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwTGF5ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcE92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcEdyaWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm90YXRlQnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3RhdGVJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIke3JlZnJlc2hpbmdMb2dvfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJSb3RhdGUgSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWFpbiBjbGFzcz1cIm1haW5TZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblRpdGxlXCI+PGgxPkJBVFRMRVNISVA8L2gxPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlclNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllckJvYXJkIGJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYm9hcmRUaXRsZVwiPlBsYXllciBCb2FyZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRMYXllciBwbGF5ZXJHcmlkTGF5ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkT3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllckdyaWQgZ3JpZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXJTdGF0cyBzdGF0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicGxheWVySGl0cyBoaXRzXCI+SGl0cyAwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInBsYXllck1pc3NlcyBtaXNzZXNcIj5NaXNzZXMgMDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wdXRlckJvYXJkIGJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYm9hcmRUaXRsZVwiPkNvbXB1dGVyIEJvYXJkPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZExheWVyIGNvbXB1dGVyR3JpZExheWVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZE92ZXJsYXkgY29tcHV0ZXJHcmlkT3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXB1dGVyR3JpZCBncmlkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXB1dGVyU3RhdHMgc3RhdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvbXB1dGVySGl0cyBoaXRzXCI+SGl0cyAwPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY29tcHV0ZXJNaXNzZXMgbWlzc2VzXCI+TWlzc2VzIDA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjb3B5cmlnaHRNZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlYnNpdGUgYW5kIGNvZGUgYXJlIG1hZGUgYnkgQnJheWRlbiBHcm90ZWd1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfTtcblxuICByZXR1cm4geyBnZXRQYWdlLCBnZXRFbGVtZW50cyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9tO1xuIiwiaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCBQcmFjdGljYWwgZnJvbSAnLi9wcmFjdGljYWwuanMnO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcbiAgY29uc3QgcHJhY3RpY2FsID0gUHJhY3RpY2FsKCk7XG5cbiAgbGV0IGN1cnJlbnRTaGlwcyA9IFtdO1xuICBsZXQgaGl0cyA9IFtdO1xuICBsZXQgbWlzc2VzID0gW107XG5cbiAgY29uc3QgcmFuZG9taXplID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gIGNvbnN0IHJhbmRvbUF4aXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXhpZXMgPSBbJ3gnLCAneSddO1xuICAgIHJldHVybiBheGllc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBheGllcy5sZW5ndGgpXTtcbiAgfTtcblxuICBjb25zdCBwbGFjZUFsbFNoaXBzID0gKHNoaXBzQXJyYXkpID0+IHtcbiAgICBjdXJyZW50U2hpcHMgPSBzaGlwc0FycmF5O1xuICAgIHJldHVybiBjdXJyZW50U2hpcHM7XG4gIH07XG5cbiAgY29uc3QgY29tcGFyZVNoaXBzQXJyYXkgPSAobGF0ZXN0U2hpcHNBcnJheSwgc2hpcHMpID0+IHtcbiAgICBsZXQgc2hpcHNEb0NvbGxpZGUgPSBmYWxzZTtcbiAgICBpZiAoIXNoaXBzKSByZXR1cm4gc2hpcHNEb0NvbGxpZGU7XG5cbiAgICBsYXRlc3RTaGlwc0FycmF5LmZvckVhY2goKGxhdGVzdFNoaXBzKSA9PiB7XG4gICAgICBsYXRlc3RTaGlwcy5mb3JFYWNoKChib2F0KSA9PiB7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKGxhdGVzdEJvYXQpID0+IHtcbiAgICAgICAgICBpZiAocG9zaXRpb24uY29tcGFyZVBvc2l0aW9uKGJvYXQsIGxhdGVzdEJvYXQpKSB7XG4gICAgICAgICAgICBzaGlwc0RvQ29sbGlkZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBzRG9Db2xsaWRlO1xuICB9O1xuXG4gIGNvbnN0IGdldFR5cGVPZlBsYWNlZFNoaXAgPSAoc2hpcEFycmF5KSA9PiB7XG4gICAgaWYgKHNoaXBBcnJheS5sZW5ndGggPT09IDUpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHNoaXBUeXBlcyA9IFtcbiAgICAgIHsgc2hpcFR5cGU6ICdjYXJyaWVyJywgc2hpcExlbmd0aDogNSB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2JhdHRsZXNoaXAnLCBzaGlwTGVuZ3RoOiA0IH0sXG4gICAgICB7IHNoaXBUeXBlOiAnZGVzdG95ZXInLCBzaGlwTGVuZ3RoOiAzIH0sXG4gICAgICB7IHNoaXBUeXBlOiAnc3VibWFyaW5lJywgc2hpcExlbmd0aDogMyB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2d1bmJvYXQnLCBzaGlwTGVuZ3RoOiAyIH0sXG4gICAgXTtcblxuICAgIHJldHVybiBzaGlwVHlwZXNbc2hpcEFycmF5Lmxlbmd0aF07XG4gIH07XG5cbiAgY29uc3QgcGxheWVyUGxhY2VTaGlwID0gKGxvY2F0aW9uLCBheGlzKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEFycmF5ID0gcHJhY3RpY2FsLmNvcHlBcnJheShjdXJyZW50U2hpcHMpO1xuXG4gICAgY29uc3Qgc2hpcFR5cGUgPSBnZXRUeXBlT2ZQbGFjZWRTaGlwKGN1cnJlbnRBcnJheSk7XG5cbiAgICBjb25zdCBsYXRlc3RTaGlwID0gc2hpcC5jcmVhdGVTaGlwKGxvY2F0aW9uLCBzaGlwVHlwZS5zaGlwTGVuZ3RoLCBheGlzKTtcblxuICAgIGNvbnN0IGlzQ29sbGlkZWQgPSBjb21wYXJlU2hpcHNBcnJheShjdXJyZW50QXJyYXksIGxhdGVzdFNoaXApO1xuXG4gICAgaWYgKHNoaXBUeXBlICYmIGxhdGVzdFNoaXAgJiYgIWlzQ29sbGlkZWQpIHtcbiAgICAgIGN1cnJlbnRBcnJheS5wdXNoKGxhdGVzdFNoaXApO1xuICAgIH1cblxuICAgIGN1cnJlbnRTaGlwcyA9IGN1cnJlbnRBcnJheTtcbiAgICByZXR1cm4gY3VycmVudEFycmF5O1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUmFuZG9tU2hpcHMgPSAoc2hpcHNBcnJheSwgcmFuZG9taXplciwgcmFuZG9tQXhpZXMpID0+IHtcbiAgICBjb25zdCBsYXRlc3RTaGlwc0FycmF5ID0gc2hpcHNBcnJheTtcbiAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHJhbmRvbWl6ZXIoKSwgcmFuZG9taXplcigpKTtcbiAgICBjb25zdCBzaGlwVHlwZSA9IGdldFR5cGVPZlBsYWNlZFNoaXAobGF0ZXN0U2hpcHNBcnJheSk7XG4gICAgaWYgKCFzaGlwVHlwZSkgcmV0dXJuIGxhdGVzdFNoaXBzQXJyYXk7XG5cbiAgICBjb25zdCBsYXRlc3RMZW5ndGggPSBzaGlwVHlwZS5zaGlwTGVuZ3RoO1xuXG4gICAgY29uc3QgcmFuZG9tU2hpcCA9IHNoaXAuY3JlYXRlU2hpcChcbiAgICAgIHJhbmRvbVBvc2l0aW9uLFxuICAgICAgbGF0ZXN0TGVuZ3RoLFxuICAgICAgcmFuZG9tQXhpZXMoKVxuICAgICk7XG5cbiAgICBjb25zdCBzaGlwQ29sbGlkZXMgPSBjb21wYXJlU2hpcHNBcnJheShsYXRlc3RTaGlwc0FycmF5LCByYW5kb21TaGlwKTtcbiAgICBpZiAocmFuZG9tU2hpcCAmJiAhc2hpcENvbGxpZGVzKSBsYXRlc3RTaGlwc0FycmF5LnB1c2gocmFuZG9tU2hpcCk7XG5cbiAgICByZXR1cm4gcGxhY2VSYW5kb21TaGlwcyhsYXRlc3RTaGlwc0FycmF5LCByYW5kb21pemVyLCByYW5kb21BeGllcyk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwc1JhbmRvbWx5ID0gKHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKSA9PiB7XG4gICAgY29uc3Qgc2hpcHNBcnJheSA9IHBsYWNlUmFuZG9tU2hpcHMoW10sIHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKTtcbiAgICBjdXJyZW50U2hpcHMgPSBzaGlwc0FycmF5O1xuXG4gICAgcmV0dXJuIHNoaXBzQXJyYXk7XG4gIH07XG4gIGNvbnN0IGZpbHRlckF0dGFjayA9IChhcnJheSwgY3VycmVudEF0dGFjaykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRBdHRhY2tBcnJheSA9IGFycmF5LmZpbHRlcihcbiAgICAgIChpdGVtKSA9PlxuICAgICAgICBpdGVtLnhDb29yZCA9PT0gY3VycmVudEF0dGFjay54Q29vcmQgJiZcbiAgICAgICAgaXRlbS55Q29vcmQgPT09IGN1cnJlbnRBdHRhY2sueUNvb3JkXG4gICAgKTtcblxuICAgIHJldHVybiBjdXJyZW50QXR0YWNrQXJyYXk7XG4gIH07XG5cbiAgY29uc3QgaGFzSGl0U2hpcCA9IChoaXRQb3NpdGlvbiwgbGF0ZXN0SGl0cywgbGF0ZXN0TWlzc2VzKSA9PiB7XG4gICAgY29uc3QgaGFzQmVlbkhpdCA9IGZpbHRlckF0dGFjayhsYXRlc3RIaXRzLCBoaXRQb3NpdGlvbik7XG4gICAgY29uc3QgaGFzQmVlbk1pc3MgPSBmaWx0ZXJBdHRhY2sobGF0ZXN0TWlzc2VzLCBoaXRQb3NpdGlvbik7XG5cbiAgICBpZiAoaGFzQmVlbkhpdC5sZW5ndGggPiAwIHx8IGhhc0JlZW5NaXNzLmxlbmd0aCA+IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tTaGlwID0gKGxhdGVzdFBvc2l0aW9uLCBzaGlwcywgY3VycmVudEhpdHMsIGN1cnJlbnRNaXNzZXMpID0+IHtcbiAgICBsZXQgaXNIaXQgPSBmYWxzZTtcbiAgICBjb25zdCBsYXRlc3RTaGlwc0FycmF5ID0gW107XG4gICAgY29uc3QgbGF0ZXN0SGl0cyA9IGN1cnJlbnRIaXRzO1xuICAgIGNvbnN0IGxhdGVzdE1pc3NlcyA9IGN1cnJlbnRNaXNzZXM7XG5cbiAgICBpZiAoIWxhdGVzdFBvc2l0aW9uKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGhhc0hpdFNoaXAobGF0ZXN0UG9zaXRpb24sIGN1cnJlbnRIaXRzLCBjdXJyZW50TWlzc2VzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcEFycmF5KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb25zQXJyYXkgPSBwcmFjdGljYWwuY29weUFycmF5KHNoaXBBcnJheSk7XG4gICAgICBjb25zdCBoaXQgPSBzaGlwLmhpdChwb3NpdGlvbnNBcnJheSwgbGF0ZXN0UG9zaXRpb24pO1xuXG4gICAgICBpZiAoaGl0LmhpdEFycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpc0hpdCA9IHRydWU7XG4gICAgICAgIHBvc2l0aW9uc0FycmF5ID0gaGl0LnNoaXBBcnJheXM7XG4gICAgICAgIGxhdGVzdEhpdHMucHVzaChoaXQuaGl0QXJyYXlbMF0pO1xuICAgICAgfVxuICAgICAgbGF0ZXN0U2hpcHNBcnJheS5wdXNoKHBvc2l0aW9uc0FycmF5KTtcbiAgICB9KTtcbiAgICBpZiAoIWlzSGl0KSBsYXRlc3RNaXNzZXMucHVzaChsYXRlc3RQb3NpdGlvbik7XG5cbiAgICBjb25zdCBmaW5hbE9iamVjdCA9IHtcbiAgICAgIGlzSGl0LFxuICAgICAgbGF0ZXN0U2hpcHNBcnJheSxcbiAgICAgIGxhdGVzdEhpdHMsXG4gICAgICBsYXRlc3RNaXNzZXMsXG4gICAgfTtcblxuICAgIHJldHVybiBmaW5hbE9iamVjdDtcbiAgfTtcblxuICBjb25zdCByZWNpZXZlQXR0YWNrID0gKGxhdGVzdFBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXR0YWNrU2hpcChsYXRlc3RQb3NpdGlvbiwgY3VycmVudFNoaXBzLCBoaXRzLCBtaXNzZXMpO1xuICAgIGlmICghcmVzdWx0KSByZXR1cm4gZmFsc2U7XG5cbiAgICBjdXJyZW50U2hpcHMgPSByZXN1bHQubGF0ZXN0U2hpcHNBcnJheTtcbiAgICBoaXRzID0gcmVzdWx0LmxhdGVzdEhpdHM7XG4gICAgbWlzc2VzID0gcmVzdWx0LmxhdGVzdE1pc3NlcztcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUmFuZG9tQ29vcmRzID0gKHJhbmRvbWl6ZXIpID0+IHtcbiAgICBsZXQgcmFuZG9tUG9zaXRpb247XG5cbiAgICBpZiAocmFuZG9taXplci5pc01vY2tSYW5kb20pIHtcbiAgICAgIHJhbmRvbVBvc2l0aW9uID0gcmFuZG9taXplci5jYWxsUmFuZG9taXplcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByYW5kb21YID0gcmFuZG9taXplcigpO1xuICAgICAgY29uc3QgcmFuZG9tWSA9IHJhbmRvbWl6ZXIoKTtcbiAgICAgIHJhbmRvbVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24ocmFuZG9tWCwgcmFuZG9tWSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmRvbVBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IHJlY2lldmVSYW5kb21BdHRhY2sgPSAocmFuZG9taXplcikgPT4ge1xuICAgIGNvbnN0IHJhbmRvbVBvc2l0aW9uID0gY3JlYXRlUmFuZG9tQ29vcmRzKHJhbmRvbWl6ZXIpO1xuICAgIGNvbnN0IGhhc0hpdCA9IGhhc0hpdFNoaXAocmFuZG9tUG9zaXRpb24sIGhpdHMsIG1pc3Nlcyk7XG5cbiAgICBpZiAoaGFzSGl0KSByZXR1cm4gcmVjaWV2ZVJhbmRvbUF0dGFjayhyYW5kb21pemVyKTtcblxuICAgIHJldHVybiByZWNpZXZlQXR0YWNrKHJhbmRvbVBvc2l0aW9uKTtcbiAgfTtcblxuICBjb25zdCBpc0FsbFN1bmsgPSAoKSA9PiB7XG4gICAgbGV0IGhhc1N1bmtlZCA9IHRydWU7XG4gICAgY3VycmVudFNoaXBzLmZvckVhY2goKHNoaXBzKSA9PiB7XG4gICAgICBpZiAoIXNoaXAuaXNTdW5rKHNoaXBzKSkge1xuICAgICAgICBoYXNTdW5rZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBoYXNTdW5rZWQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsdWVzID0gKCkgPT4gKHtcbiAgICBjdXJyZW50U2hpcHMsXG4gICAgaGl0cyxcbiAgICBtaXNzZXMsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgYXR0YWNrU2hpcCxcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIGlzQWxsU3VuayxcbiAgICBwbGFjZVNoaXBzUmFuZG9tbHksXG4gICAgcGxheWVyUGxhY2VTaGlwLFxuICAgIHBsYWNlQWxsU2hpcHMsXG4gICAgcmFuZG9taXplLFxuICAgIHJlY2lldmVSYW5kb21BdHRhY2ssXG4gICAgcmFuZG9tQXhpcyxcbiAgICBnZXRWYWx1ZXMsXG4gICAgZ2V0VHlwZU9mUGxhY2VkU2hpcCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcblxuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuXG5jb25zdCBHYW1lID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IHBsYXllckNoZWNrQm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG5cbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcblxuICBjb25zdCByYW5kb21pemVyID0gY29tcHV0ZXJCb2FyZC5yYW5kb21pemU7XG4gIGNvbnN0IHJhbmRvbUF4aWVzID0gY29tcHV0ZXJCb2FyZC5yYW5kb21BeGlzO1xuXG4gIGNvbnN0IGNoZWNrU2V0dXAgPSAocGxheWVyQ2hlY2tTaGlwcykgPT4ge1xuICAgIGlmIChwbGF5ZXJDaGVja1NoaXBzLmxlbmd0aCA9PT0gNSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwR2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJDaGVja1ZhbHVlcyA9IHBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCk7XG5cbiAgICBpZiAoIWNoZWNrU2V0dXAocGxheWVyQ2hlY2tWYWx1ZXMuY3VycmVudFNoaXBzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcGxheWVyQm9hcmQucGxhY2VBbGxTaGlwcyhwbGF5ZXJDaGVja1ZhbHVlcy5jdXJyZW50U2hpcHMpO1xuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tCb2F0cyA9IChjb29yZHMpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJDaGVja1ZhbHVlcyA9IHBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCk7XG5cbiAgICBpZiAoIWNoZWNrU2V0dXAocGxheWVyQ2hlY2tWYWx1ZXMuY3VycmVudFNoaXBzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgY3VycmVudEF0dGFjayA9IGNvbXB1dGVyQm9hcmQucmVjaWV2ZUF0dGFjayhjb29yZHMpO1xuICAgIGlmICghY3VycmVudEF0dGFjaykgcmV0dXJuIGZhbHNlO1xuICAgIHBsYXllckJvYXJkLnJlY2lldmVSYW5kb21BdHRhY2socmFuZG9taXplcik7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBzZXR1cFNoaXAgPSAobG9jYXRpb24sIGF4aXMpID0+XG4gICAgcGxheWVyQ2hlY2tCb2FyZC5wbGF5ZXJQbGFjZVNoaXAobG9jYXRpb24sIGF4aXMpO1xuXG4gIGNvbnN0IGdhbWVJc092ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQ2hlY2tTaGlwcyA9IHBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCkuY3VycmVudFNoaXBzO1xuICAgIGlmICghY2hlY2tTZXR1cChwbGF5ZXJDaGVja1NoaXBzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKGNvbXB1dGVyQm9hcmQuaXNBbGxTdW5rKCkpIHtcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdZb3UgV29uIPCfmIMnLCBnYW1lRmluaXNoZWQ6IHRydWUgfTtcbiAgICB9XG5cbiAgICBpZiAocGxheWVyQm9hcmQuaXNBbGxTdW5rKCkpIHtcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdZb3UgTG9zdCDwn5iiJywgZ2FtZUZpbmlzaGVkOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiB7IGdhbWVGaW5pc2hlZDogZmFsc2UgfTtcbiAgfTtcblxuICBjb25zdCBhcnJhbmdlQmxvY2tzID0gKG1vdXNlUG9zaXRpb24sIGN1cnJlbnRSb3RhdGlvbikgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm9hcmRPYmplY3RzID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIGNvbnN0IHNoaXBUeXBlT2JqZWN0ID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRUeXBlT2ZQbGFjZWRTaGlwKFxuICAgICAgY2hlY2tib2FyZE9iamVjdHMuY3VycmVudFNoaXBzXG4gICAgKTtcblxuICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgbW91c2VQb3NpdGlvbixcbiAgICAgIHNoaXBUeXBlT2JqZWN0LnNoaXBMZW5ndGgsXG4gICAgICBjdXJyZW50Um90YXRpb25cbiAgICApO1xuICAgIHJldHVybiBjdXJyZW50U2hpcDtcbiAgfTtcblxuICBjb25zdCBnZXRHYW1lVmFsdWVzID0gKCkgPT4gKHtcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBjb21wdXRlckJvYXJkLFxuICAgIHBsYXllckNoZWNrQm9hcmQsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgY2hlY2tTZXR1cCxcbiAgICBhdHRhY2tCb2F0cyxcbiAgICBzZXR1cEdhbWUsXG4gICAgZ2FtZUlzT3ZlcixcbiAgICBzZXR1cFNoaXAsXG4gICAgZ2V0R2FtZVZhbHVlcyxcbiAgICBhcnJhbmdlQmxvY2tzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImNvbnN0IFBvc2l0aW9uID0gKCkgPT4ge1xuICBjb25zdCBjcmVhdGVQb3NpdGlvbiA9ICh4Q29vcmQsIHlDb29yZCkgPT4gKHsgeENvb3JkLCB5Q29vcmQgfSk7XG5cbiAgY29uc3QgY2hlY2tPdXRPZkJvdW5jZSA9IChuZXdQb3NpdGlvbikgPT4ge1xuICAgIGlmIChuZXdQb3NpdGlvbi54Q29vcmQgPiA5IHx8IG5ld1Bvc2l0aW9uLnlDb29yZCA+IDkpIHJldHVybiB0cnVlO1xuICAgIGlmIChuZXdQb3NpdGlvbi54Q29vcmQgPCAwIHx8IG5ld1Bvc2l0aW9uLnlDb29yZCA8IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBhZGRQb3NpdGlvbiA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMikgPT4ge1xuICAgIGlmIChwb3NpdGlvbjEgPT09IGZhbHNlIHx8IHBvc2l0aW9uMiA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gY3JlYXRlUG9zaXRpb24ocG9zaXRpb24xLnhDb29yZCwgcG9zaXRpb24xLnlDb29yZCk7XG4gICAgbmV3UG9zaXRpb24ueENvb3JkICs9IHBvc2l0aW9uMi54Q29vcmQ7XG4gICAgbmV3UG9zaXRpb24ueUNvb3JkICs9IHBvc2l0aW9uMi55Q29vcmQ7XG5cbiAgICBpZiAoY2hlY2tPdXRPZkJvdW5jZShuZXdQb3NpdGlvbikpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBuZXdQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBtdWx0aXBseVBvc2l0aW9uID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uMSA9PT0gZmFsc2UgfHwgcG9zaXRpb24yID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBjcmVhdGVQb3NpdGlvbihwb3NpdGlvbjEueENvb3JkLCBwb3NpdGlvbjEueUNvb3JkKTtcbiAgICBuZXdQb3NpdGlvbi54Q29vcmQgKj0gcG9zaXRpb24yLnhDb29yZDtcbiAgICBuZXdQb3NpdGlvbi55Q29vcmQgKj0gcG9zaXRpb24yLnlDb29yZDtcblxuICAgIGlmIChjaGVja091dE9mQm91bmNlKG5ld1Bvc2l0aW9uKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwgPSAocG9zaXRpb24xLCBwb3NpdGlvbjIsIGF4aXMpID0+IHtcbiAgICBpZiAocG9zaXRpb24xW2F4aXNdID09PSBwb3NpdGlvbjJbYXhpc10gKyAxKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAocG9zaXRpb24xW2F4aXNdID09PSBwb3NpdGlvbjJbYXhpc10pIHJldHVybiB0cnVlO1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSAtIDEpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBjb21wYXJlUG9zaXRpb24gPSAocG9zaXRpb24xLCBwb3NpdGlvbjIpID0+IHtcbiAgICBpZiAoIWNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwocG9zaXRpb24xLCBwb3NpdGlvbjIsICd4Q29vcmQnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwocG9zaXRpb24xLCBwb3NpdGlvbjIsICd5Q29vcmQnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVBvc2l0aW9uLFxuICAgIGFkZFBvc2l0aW9uLFxuICAgIG11bHRpcGx5UG9zaXRpb24sXG4gICAgY29tcGFyZVBvc2l0aW9uLFxuICAgIGNoZWNrT3V0T2ZCb3VuY2UsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3NpdGlvbjtcbiIsImNvbnN0IFByYWN0aWNhbCA9ICgpID0+IHtcbiAgY29uc3QgY29weUFycmF5ID0gKGFycmF5KSA9PiB7XG4gICAgY29uc3QgbmV3QXJyYXkgPSBbXTtcblxuICAgIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIG5ld0FycmF5LnB1c2goaXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3QXJyYXk7XG4gIH07XG5cbiAgY29uc3QgaXNPYmplY3QgPSAoY3VycmVudE9iamVjdCkgPT4ge1xuICAgIGlmICh0eXBlb2YgY3VycmVudE9iamVjdCA9PT0gJ29iamVjdCcgJiYgY3VycmVudE9iamVjdCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBjaGVja09iamVjdCA9IChvYmplY3QxLCBvYmplY3QyKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgc2Vjb25kSW5kZXggPSAwO1xuXG4gICAgbGV0IG9iamVjdElzRXF1YWwgPSB0cnVlO1xuXG4gICAgY29uc3QgY3VycmVudE9iamVjdCA9IG9iamVjdDE7XG4gICAgY29uc3QgY3VycmVudE9iamVjdDIgPSBvYmplY3QyO1xuXG4gICAgY29uc3QgY3VycmVudE9iamVjdFZhbHVlcyA9IE9iamVjdC52YWx1ZXMoY3VycmVudE9iamVjdCk7XG4gICAgY29uc3QgY3VycmVudE9iamVjdDJWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGN1cnJlbnRPYmplY3QyKTtcblxuICAgIGNvbnN0IG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyhjdXJyZW50T2JqZWN0KTtcbiAgICBjb25zdCBvYmplY3RLZXlzMiA9IE9iamVjdC5rZXlzKGN1cnJlbnRPYmplY3QyKTtcblxuICAgIG9iamVjdEtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoa2V5ICE9PSBvYmplY3RLZXlzMltpbmRleF0pIG9iamVjdElzRXF1YWwgPSBmYWxzZTtcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgfSk7XG5cbiAgICBpZiAoIW9iamVjdElzRXF1YWwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAob2JqZWN0S2V5cy5sZW5ndGggIT09IG9iamVjdEtleXMyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY3VycmVudE9iamVjdFZhbHVlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBpdGVtMiA9IGN1cnJlbnRPYmplY3QyVmFsdWVzW3NlY29uZEluZGV4XTtcblxuICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pICYmIGlzT2JqZWN0KGl0ZW0yKSkge1xuICAgICAgICBjb25zdCBjaGVja09iamVjdEJvb2wgPSBjaGVja09iamVjdChpdGVtLCBpdGVtMik7XG5cbiAgICAgICAgaWYgKCFjaGVja09iamVjdEJvb2wpIG9iamVjdElzRXF1YWwgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbSAhPT0gaXRlbTIpIHtcbiAgICAgICAgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBzZWNvbmRJbmRleCArPSAxO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iamVjdElzRXF1YWw7XG4gIH07XG5cbiAgcmV0dXJuIHsgY29weUFycmF5LCBjaGVja09iamVjdCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJhY3RpY2FsO1xuIiwiaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuXG5jb25zdCBTaGlwID0gKCkgPT4ge1xuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG5cbiAgY29uc3QgZ2V0QWRkZWRQb3NpdGlvbiA9IChheGlzKSA9PiB7XG4gICAgbGV0IGFkZGVkUG9zaXRpb247XG5cbiAgICBpZiAoYXhpcyA9PT0gJ3gnKSBhZGRlZFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oMSwgMCk7XG4gICAgZWxzZSBhZGRlZFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oMCwgMSk7XG5cbiAgICByZXR1cm4gYWRkZWRQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVTaGlwID0gKHBvc2l0aW9uMSwgbGVuZ3RoMSwgYXhpcykgPT4ge1xuICAgIGlmIChsZW5ndGgxID09PSAwIHx8IGxlbmd0aDEgPiA1KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHBvc2l0aW9uLmNoZWNrT3V0T2ZCb3VuY2UocG9zaXRpb24xKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgcG9wdWxhdGVTaGlwcyA9IChjdXJyZW50UG9zaXRpb24sIGxhdGVzdExlbmd0aCwgbGF0ZXN0QXJyYXkpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRBcnJheSA9IGxhdGVzdEFycmF5O1xuICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uO1xuXG4gICAgICBpZiAoY3VycmVudFBvc2l0aW9uID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKGxhdGVzdExlbmd0aCA9PT0gMCkgcmV0dXJuIGN1cnJlbnRBcnJheTtcbiAgICAgIGlmIChsYXRlc3RMZW5ndGggPT09IGxlbmd0aDEpIHtcbiAgICAgICAgY3VycmVudEFycmF5LnB1c2goY3VycmVudFBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIHBvcHVsYXRlU2hpcHMoY3VycmVudFBvc2l0aW9uLCBsYXRlc3RMZW5ndGggLSAxLCBjdXJyZW50QXJyYXkpO1xuICAgICAgfVxuICAgICAgY29uc3QgYWRkZWRQb3NpdGlvbiA9IGdldEFkZGVkUG9zaXRpb24oYXhpcyk7XG4gICAgICBuZXdQb3NpdGlvbiA9IHBvc2l0aW9uLmFkZFBvc2l0aW9uKG5ld1Bvc2l0aW9uLCBhZGRlZFBvc2l0aW9uKTtcblxuICAgICAgaWYgKCFuZXdQb3NpdGlvbikgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICAgICAgY3VycmVudEFycmF5LnB1c2gobmV3UG9zaXRpb24pO1xuXG4gICAgICBjb25zdCBhcnJheUxlbmd0aCA9IGN1cnJlbnRBcnJheS5sZW5ndGggLSAxO1xuXG4gICAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhcbiAgICAgICAgY3VycmVudEFycmF5W2FycmF5TGVuZ3RoXSxcbiAgICAgICAgbGF0ZXN0TGVuZ3RoIC0gMSxcbiAgICAgICAgY3VycmVudEFycmF5XG4gICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhwb3NpdGlvbjEsIGxlbmd0aDEsIFtdLCBmYWxzZSk7XG4gIH07XG5cblxuXG4gIGNvbnN0IGlzU3VuayA9IChzaGlwQXJyYXkpID0+IHtcbiAgICBpZiAoc2hpcEFycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGhpdCA9IChwb3NpdGlvbnNBcnJheSwgcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBoaXRBcnJheSA9IHBvc2l0aW9uc0FycmF5LmZpbHRlcigocG9zKSA9PiB7XG4gICAgICBpZiAocG9zLnhDb29yZCA9PT0gcG9zaXRpb24ueENvb3JkICYmIHBvcy55Q29vcmQgPT09IHBvc2l0aW9uLnlDb29yZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBjb25zdCBzaGlwQXJyYXlzID0gcG9zaXRpb25zQXJyYXkuZmlsdGVyKChwb3MpID0+IHtcbiAgICAgIGlmIChwb3MueENvb3JkID09PSBwb3NpdGlvbi54Q29vcmQgJiYgcG9zLnlDb29yZCA9PT0gcG9zaXRpb24ueUNvb3JkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgaGl0QXJyYXksIHNoaXBBcnJheXMgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVNoaXAsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJpbXBvcnQgRG9tIGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL21haW4uanMnO1xuXG5jb25zdCBVaSA9ICgpID0+IHtcbiAgY29uc3QgZG9tID0gRG9tKCk7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcblxuICBjb25zdCByZW5kZXJTcGVlZCA9IDE7XG5cbiAgbGV0IGJsb2NrU2l6ZSA9IDQyO1xuICBsZXQgYWN0aXZlR2FtZSA9IEdhbWUoKTtcbiAgbGV0IHBsYWNlZFNoaXAgPSBmYWxzZTtcbiAgbGV0IGF4aXMgPSAneSc7XG4gIGxldCBtb3VzZUJsb2NrTG9jYXRpb24gPSBmYWxzZTtcblxuICBjb25zdCBjcmVhdGVEb21FbGVtZW50ID0gKGVsZW1lbnROYW1lKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcblxuICBjb25zdCBnZXRNb3VzZVBvc2l0aW9uID0gKG9mZnNldFgsIG9mZnNldFkpID0+IHtcbiAgICBjb25zdCB4Q29vcmQgPSBNYXRoLmZsb29yKG9mZnNldFggLyBibG9ja1NpemUpO1xuICAgIGNvbnN0IHlDb29yZCA9IE1hdGguZmxvb3Iob2Zmc2V0WSAvIGJsb2NrU2l6ZSk7XG5cbiAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oeENvb3JkLCB5Q29vcmQpO1xuXG4gICAgY29uc3Qgb3V0T2ZCb3VuY2UgPSBwb3NpdGlvbi5jaGVja091dE9mQm91bmNlKG1vdXNlUG9zaXRpb24pO1xuXG4gICAgaWYgKG91dE9mQm91bmNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gbW91c2VQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBmaW5kTW91c2VQb3NpdGlvbiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRNb3VzZVBvc2l0aW9uID0gZ2V0TW91c2VQb3NpdGlvbihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcblxuICAgIG1vdXNlQmxvY2tMb2NhdGlvbiA9IGN1cnJlbnRNb3VzZVBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGZpbmRUb3VjaFBvc2l0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB0b3VjaE9mZnNldFggPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFggLSByZWN0Lng7XG4gICAgY29uc3QgdG91Y2hPZmZzZXRZID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZIC0gcmVjdC55O1xuXG4gICAgY29uc3QgdG91Y2hQb3NpdGlvbiA9IGdldE1vdXNlUG9zaXRpb24odG91Y2hPZmZzZXRYLCB0b3VjaE9mZnNldFkpO1xuICAgIG1vdXNlQmxvY2tMb2NhdGlvbiA9IHRvdWNoUG9zaXRpb247XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VCbG9ja1NpemUgPSAobWF0Y2hNZWRpYSkgPT4ge1xuICAgIGJsb2NrU2l6ZSA9IDQyO1xuICAgIGlmIChtYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA5NjBweCknKS5tYXRjaGVzKSBibG9ja1NpemUgPSAzMDtcbiAgICBpZiAobWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNDcwcHgpJykubWF0Y2hlcykgYmxvY2tTaXplID0gMjE7XG4gICAgaWYgKG1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDMyMHB4KScpLm1hdGNoZXMpIGJsb2NrU2l6ZSA9IDE1O1xuICAgIHJldHVybiBibG9ja1NpemU7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQmxvY2tFbGVtZW50ID0gKGJsb2NrQ2xhc3MsIGNyZWF0ZUJsb2NrKSA9PiB7XG4gICAgbGV0IGxhdGVzdENsYXNzID0gYmxvY2tDbGFzcztcblxuICAgIGlmIChcbiAgICAgIGxhdGVzdENsYXNzICE9PSAnaGl0QmxvY2snICYmXG4gICAgICBsYXRlc3RDbGFzcyAhPT0gJ21pc3NCbG9jaycgJiZcbiAgICAgIGxhdGVzdENsYXNzICE9PSAnY3Vyc29yQmxvY2snXG4gICAgKSB7XG4gICAgICBsYXRlc3RDbGFzcyA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrRWxlbWVudCA9IGNyZWF0ZUJsb2NrKCdkaXYnKTtcbiAgICBibG9ja0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcbiAgICBpZiAobGF0ZXN0Q2xhc3MgIT09ICcnKSBibG9ja0VsZW1lbnQuY2xhc3NMaXN0LmFkZChsYXRlc3RDbGFzcyk7XG5cbiAgICByZXR1cm4gYmxvY2tFbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGRpc2FibGVTdGFydGVyVWkgPSAoKSA9PiB0cnVlO1xuXG4gIGNvbnN0IGNyZWF0ZVNoaXBCbG9jayA9IChzaGlwUG9zaXRpb24sIGxhdGVzdEJsb2NrU2l6ZSwgc2hpcFR5cGUpID0+IHtcbiAgICBjb25zdCBzaGlwQmxvY2sgPSBjcmVhdGVCbG9ja0VsZW1lbnQoc2hpcFR5cGUsIGNyZWF0ZURvbUVsZW1lbnQpO1xuXG4gICAgY29uc3QgcmVhbFBvc2l0aW9uWCA9IE1hdGguZmxvb3Ioc2hpcFBvc2l0aW9uLnhDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgY29uc3QgcmVhbFBvc2l0aW9uWSA9IE1hdGguZmxvb3Ioc2hpcFBvc2l0aW9uLnlDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgc2hpcEJsb2NrLnN0eWxlLmxlZnQgPSBgJHtyZWFsUG9zaXRpb25YfXB4YDtcbiAgICBzaGlwQmxvY2suc3R5bGUudG9wID0gYCR7cmVhbFBvc2l0aW9uWX1weGA7XG5cbiAgICByZXR1cm4gc2hpcEJsb2NrO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckFscmVhZHlQbGFjZWRTaGlwcyA9IChzaGlwR3JpZCwgbGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgY29uc3QgZ2FtZVZhbHVlcyA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuICAgIGNvbnN0IGNoZWNrQm9hcmRTaGlwcyA9XG4gICAgICBnYW1lVmFsdWVzLnBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCkuY3VycmVudFNoaXBzO1xuXG4gICAgY2hlY2tCb2FyZFNoaXBzLmZvckVhY2goKHBsYXllckNoZWNrU2hpcHMpID0+IHtcbiAgICAgIHBsYXllckNoZWNrU2hpcHMuZm9yRWFjaCgoYm9hdCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwQmxvY2sgPSBjcmVhdGVTaGlwQmxvY2soYm9hdCwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgICAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQoc2hpcEJsb2NrKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclBsYWNlZFNoaXAgPSAobGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuICAgIGNvbnN0IHsgc2hpcEdyaWQgfSA9IGVsZW1lbnQ7XG5cbiAgICBpZiAoIXBsYWNlZFNoaXApIHJldHVybiBwbGFjZWRTaGlwO1xuXG4gICAgc2hpcEdyaWQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBwbGFjZWRTaGlwLmZvckVhY2goKHNoaXBQb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc2hpcEJsb2NrID0gY3JlYXRlU2hpcEJsb2NrKHNoaXBQb3NpdGlvbiwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgIHNoaXBHcmlkLmFwcGVuZENoaWxkKHNoaXBCbG9jayk7XG4gICAgfSk7XG5cbiAgICByZW5kZXJBbHJlYWR5UGxhY2VkU2hpcHMoc2hpcEdyaWQsIGxhdGVzdEJsb2NrU2l6ZSk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlQXhpcyA9ICgpID0+IHtcbiAgICBpZiAoYXhpcyA9PT0gJ3knKSBheGlzID0gJ3gnO1xuICAgIGVsc2UgYXhpcyA9ICd5JztcbiAgfTtcblxuICBjb25zdCBtb3ZlU2hpcEJ5RGlyZWN0aW9uID0gKG1vdXNlTG9jYXRpb24sIGN1cnJlbnRTaGlwLCBjdXJyZW50QXhpcykgPT4ge1xuICAgIGxldCBsYXRlc3RTaGlwID0gZmFsc2U7XG5cbiAgICBpZiAocG9zaXRpb24uY2hlY2tPdXRPZkJvdW5jZShjdXJyZW50U2hpcFswXSkpIHJldHVybiBsYXRlc3RTaGlwO1xuXG4gICAgY29uc3QgbmV3WFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICBtb3VzZUxvY2F0aW9uLnhDb29yZCxcbiAgICAgIDBcbiAgICApLnhDb29yZDtcblxuICAgIGNvbnN0IG5ld1lQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKFxuICAgICAgMCxcbiAgICAgIG1vdXNlTG9jYXRpb24ueUNvb3JkXG4gICAgKS55Q29vcmQ7XG5cbiAgICBsZXQgbmV3U2hpcFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICBuZXdYUG9zaXRpb24sXG4gICAgICBjdXJyZW50U2hpcFswXS55Q29vcmRcbiAgICApO1xuXG4gICAgaWYgKGN1cnJlbnRBeGlzID09PSAneCcpIHtcbiAgICAgIG5ld1NoaXBQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKFxuICAgICAgICBjdXJyZW50U2hpcFswXS54Q29vcmQsXG4gICAgICAgIG5ld1lQb3NpdGlvblxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsYXRlc3RTaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgbmV3U2hpcFBvc2l0aW9uLFxuICAgICAgY3VycmVudFNoaXAubGVuZ3RoLFxuICAgICAgY3VycmVudEF4aXNcbiAgICApO1xuXG4gICAgcmV0dXJuIGxhdGVzdFNoaXA7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VQbGF5ZXJTaGlwID0gKGxhdGVzdFNoaXAsIGxhdGVzdEF4aXMsIGxhdGVzdEdhbWUpID0+IHtcbiAgICBpZiAobGF0ZXN0U2hpcCkgbGF0ZXN0R2FtZS5zZXR1cFNoaXAobGF0ZXN0U2hpcFswXSwgbGF0ZXN0QXhpcyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUGxheWVyU2hpcEV2ZW50ID0gKCkgPT4ge1xuICAgIHBsYWNlUGxheWVyU2hpcChwbGFjZWRTaGlwLCBheGlzLCBhY3RpdmVHYW1lKTtcbiAgfTtcblxuICBjb25zdCByZXNldEdhbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgZWxlbWVudC5jb21wdXRlckdyaWQuaW5uZXJIVE1MID0gJyc7XG4gICAgZWxlbWVudC5wbGF5ZXJHcmlkLmlubmVySFRNTCA9ICcnO1xuXG4gICAgZWxlbWVudC5zZWN0aW9uU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZWxlbWVudC5zaGlwU2VsZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZWxlbWVudC5nYW1lRmluaXNoZWRTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZWxlbWVudC5nYW1lT3ZlclRleHQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICByZXN0YXJ0R2FtZSgpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFVpRXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmaW5kTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5zaGlwTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZmluZFRvdWNoUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VQbGF5ZXJTaGlwRXZlbnQpO1xuXG4gICAgZWxlbWVudC5yb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VBeGlzKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVVaUV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBlbGVtZW50LnNoaXBMYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmaW5kTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5zaGlwTGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZmluZFRvdWNoUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VQbGF5ZXJTaGlwRXZlbnQpO1xuXG4gICAgZWxlbWVudC5yb3RhdGVCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VBeGlzKTtcbiAgfTtcblxuICBjb25zdCBhZGRFbmRpbmdFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuICAgIGVsZW1lbnQucmVzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0R2FtZSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlRW5kaW5nRXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICBlbGVtZW50LnJlc3RhcnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbGVtZW50LnJlc3RhcnQpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUdhbWVFdmVudHMgPSAoKSA9PiB7XG4gICAgYWRkRW5kaW5nRXZlbnRzKCk7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGNoYW5nZU1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuY29tcHV0ZXJHcmlkTGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICdtb3VzZW1vdmUnLFxuICAgICAgZmluZE1vdXNlUG9zaXRpb25cbiAgICApO1xuICAgIGVsZW1lbnQuY29tcHV0ZXJHcmlkTGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhdHRhY2tTaGlwcyk7XG4gIH07XG5cbiAgY29uc3QgYWRkR2FtZUV2ZW50cyA9ICgpID0+IHtcbiAgICByZW1vdmVVaUV2ZW50cygpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgY2hhbmdlTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5jb21wdXRlckdyaWRMYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmaW5kTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5jb21wdXRlckdyaWRMYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGF0dGFja1NoaXBzKTtcbiAgfTtcblxuICBjb25zdCBjaGVja01vdXNlVGFyZ2V0ID0gKGVsZW1lbnRDbGFzcykgPT4ge1xuICAgIGlmIChlbGVtZW50Q2xhc3MgIT09ICdncmlkT3ZlcmxheSBjb21wdXRlckdyaWRPdmVybGF5JykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZU1vdXNlUG9zaXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZVRhcmdldCA9IGNoZWNrTW91c2VUYXJnZXQoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSk7XG4gICAgaWYgKCFtb3VzZVRhcmdldCkgbW91c2VCbG9ja0xvY2F0aW9uID0gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrU2hpcHMgPSAoKSA9PiB7XG4gICAgYWN0aXZlR2FtZS5hdHRhY2tCb2F0cyhtb3VzZUJsb2NrTG9jYXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclNoaXBzID0gKHNoaXBzLCBncmlkLCBsYXRlc3RCbG9ja1NpemUpID0+IHtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwR3JvdXApID0+IHtcbiAgICAgIHNoaXBHcm91cC5mb3JFYWNoKChib2F0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBFbGVtZW50ID0gY3JlYXRlU2hpcEJsb2NrKGJvYXQsIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoc2hpcEVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVySGl0cyA9IChzaGlwcywgc2hpcFR5cGUsIGdyaWQsIGxhdGVzdEJsb2NrU2l6ZSkgPT4ge1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXBQb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc2hpcEVsZW1lbnQgPSBjcmVhdGVTaGlwQmxvY2soXG4gICAgICAgIHNoaXBQb3NpdGlvbixcbiAgICAgICAgbGF0ZXN0QmxvY2tTaXplLFxuICAgICAgICBzaGlwVHlwZVxuICAgICAgKTtcbiAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoc2hpcEVsZW1lbnQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckdyaWRzID0gKGJsb2NrU2l6ZTIsIG1vdXNlUG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBnYW1lVmFsdWVzID0gYWN0aXZlR2FtZS5nZXRHYW1lVmFsdWVzKCk7XG5cbiAgICBjb25zdCB7IHBsYXllckdyaWQgfSA9IGRvbS5nZXRFbGVtZW50cygpO1xuICAgIGNvbnN0IHsgY29tcHV0ZXJHcmlkIH0gPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAgIHBsYXllckdyaWQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29tcHV0ZXJHcmlkLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgcGxheWVyQm9hcmRWYWx1ZXMgPSBnYW1lVmFsdWVzLnBsYXllckJvYXJkLmdldFZhbHVlcygpO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmRWYWx1ZXMgPSBnYW1lVmFsdWVzLmNvbXB1dGVyQm9hcmQuZ2V0VmFsdWVzKCk7XG4gICAgcmVuZGVyU2hpcHMocGxheWVyQm9hcmRWYWx1ZXMuY3VycmVudFNoaXBzLCBwbGF5ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgICByZW5kZXJIaXRzKHBsYXllckJvYXJkVmFsdWVzLmhpdHMsICdoaXRCbG9jaycsIHBsYXllckdyaWQsIGJsb2NrU2l6ZTIpO1xuICAgIHJlbmRlckhpdHMocGxheWVyQm9hcmRWYWx1ZXMubWlzc2VzLCAnbWlzc0Jsb2NrJywgcGxheWVyR3JpZCwgYmxvY2tTaXplMik7XG5cbiAgICByZW5kZXJIaXRzKGNvbXB1dGVyQm9hcmRWYWx1ZXMuaGl0cywgJ2hpdEJsb2NrJywgY29tcHV0ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgICByZW5kZXJIaXRzKFxuICAgICAgY29tcHV0ZXJCb2FyZFZhbHVlcy5taXNzZXMsXG4gICAgICAnbWlzc0Jsb2NrJyxcbiAgICAgIGNvbXB1dGVyR3JpZCxcbiAgICAgIGJsb2NrU2l6ZTJcbiAgICApO1xuXG4gICAgY29uc3QgbW91c2VTaGlwID0gc2hpcC5jcmVhdGVTaGlwKG1vdXNlUG9zaXRpb24sIDEsICd4Jyk7XG5cbiAgICBpZiAobW91c2VTaGlwKSB7XG4gICAgICByZW5kZXJIaXRzKG1vdXNlU2hpcCwgJ2N1cnNvckJsb2NrJywgY29tcHV0ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU3RhdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2FtZVZhbHVlcyA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuXG4gICAgY29uc3QgeyBwbGF5ZXJIaXRzLCBwbGF5ZXJNaXNzZXMgfSA9IGRvbS5nZXRFbGVtZW50cygpO1xuICAgIGNvbnN0IHsgY29tcHV0ZXJIaXRzLCBjb21wdXRlck1pc3NlcyB9ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBjb25zdCBwbGF5ZXJCb2FyZFZhbHVlcyA9IGdhbWVWYWx1ZXMucGxheWVyQm9hcmQuZ2V0VmFsdWVzKCk7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZFZhbHVlcyA9IGdhbWVWYWx1ZXMuY29tcHV0ZXJCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIHBsYXllckhpdHMudGV4dENvbnRlbnQgPSBgSGl0cyAtICR7cGxheWVyQm9hcmRWYWx1ZXMuaGl0cy5sZW5ndGh9YDtcbiAgICBwbGF5ZXJNaXNzZXMudGV4dENvbnRlbnQgPSBgTWlzc2VzIC0gJHtwbGF5ZXJCb2FyZFZhbHVlcy5taXNzZXMubGVuZ3RofWA7XG5cbiAgICBjb21wdXRlckhpdHMudGV4dENvbnRlbnQgPSBgSGl0cyAtICR7Y29tcHV0ZXJCb2FyZFZhbHVlcy5oaXRzLmxlbmd0aH1gO1xuICAgIGNvbXB1dGVyTWlzc2VzLnRleHRDb250ZW50ID0gYE1pc3NlcyAtICR7Y29tcHV0ZXJCb2FyZFZhbHVlcy5taXNzZXMubGVuZ3RofWA7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUdhbWVPdmVyVWkgPSAoc3RhdHVzKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAgIGVsZW1lbnRzLmNvbXB1dGVyR3JpZC5pbm5lckhUTUwgPSAnJztcbiAgICBlbGVtZW50cy5wbGF5ZXJHcmlkLmlubmVySFRNTCA9ICcnO1xuXG4gICAgcmVtb3ZlR2FtZUV2ZW50cygpO1xuICAgIGFkZEVuZGluZ0V2ZW50cygpO1xuICAgIGVsZW1lbnRzLmdhbWVPdmVyVGV4dC5pbm5lckhUTUwgPSBzdGF0dXMubWVzc2FnZTtcblxuICAgIGVsZW1lbnRzLnNoaXBTZWxlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbGVtZW50cy5zZWN0aW9uU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZWxlbWVudHMuZ2FtZUZpbmlzaGVkU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgZWxlbWVudHMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfTtcblxuICBjb25zdCByZW5kZXJHYW1lID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZ2FtZVN0YXR1cyA9IGFjdGl2ZUdhbWUuZ2FtZUlzT3ZlcigpO1xuXG4gICAgICBjb25zdCBsYXRlc3RCbG9ja1NpemUgPSBjaGFuZ2VCbG9ja1NpemUod2luZG93Lm1hdGNoTWVkaWEpO1xuICAgICAgcmVuZGVyR3JpZHMobGF0ZXN0QmxvY2tTaXplLCBtb3VzZUJsb2NrTG9jYXRpb24pO1xuICAgICAgcmVuZGVyU3RhdHMoKTtcblxuICAgICAgaWYgKCFnYW1lU3RhdHVzLmdhbWVGaW5pc2hlZCkgcmVuZGVyR2FtZShsYXRlc3RCbG9ja1NpemUpO1xuICAgICAgZWxzZSBkaXNwbGF5R2FtZU92ZXJVaShnYW1lU3RhdHVzKTtcbiAgICB9LCByZW5kZXJTcGVlZCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlU2hpcFNlY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAgIGVsZW1lbnRzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbGVtZW50cy5zZWN0aW9uU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZWxlbWVudHMuc2hpcEdyaWQuaW5uZXJIVE1MID0gJyc7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIHJlbW92ZVNoaXBTZWN0aW9uKCk7XG5cbiAgICBhY3RpdmVHYW1lLnNldHVwR2FtZSgpO1xuICAgIGFkZEdhbWVFdmVudHMoKTtcblxuICAgIHJlbmRlckdhbWUoKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJTZWxlY3Rpb25HcmlkID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZ2FtZVZhbHVlID0gYWN0aXZlR2FtZS5nZXRHYW1lVmFsdWVzKCk7XG4gICAgICBjb25zdCBjaGVja0JvYXJkU2hpcHMgPVxuICAgICAgICBnYW1lVmFsdWUucGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKS5jdXJyZW50U2hpcHM7XG5cbiAgICAgIGNoYW5nZUJsb2NrU2l6ZSh3aW5kb3cubWF0Y2hNZWRpYSk7XG5cbiAgICAgIGlmIChhY3RpdmVHYW1lLmNoZWNrU2V0dXAoZ2FtZVZhbHVlLnBsYXllckNoZWNrQm9hcmQpKSBkaXNhYmxlU3RhcnRlclVpKCk7XG5cbiAgICAgIGlmIChtb3VzZUJsb2NrTG9jYXRpb24pIHtcbiAgICAgICAgbGV0IGN1cnJlbnRTaGlwID0gYWN0aXZlR2FtZS5hcnJhbmdlQmxvY2tzKG1vdXNlQmxvY2tMb2NhdGlvbiwgYXhpcyk7XG4gICAgICAgIGlmICghY3VycmVudFNoaXAgJiYgcGxhY2VkU2hpcCkge1xuICAgICAgICAgIGN1cnJlbnRTaGlwID0gbW92ZVNoaXBCeURpcmVjdGlvbihcbiAgICAgICAgICAgIG1vdXNlQmxvY2tMb2NhdGlvbixcbiAgICAgICAgICAgIHBsYWNlZFNoaXAsXG4gICAgICAgICAgICBheGlzXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50U2hpcCkgcGxhY2VkU2hpcCA9IGN1cnJlbnRTaGlwO1xuXG4gICAgICAgIGlmIChwbGFjZWRTaGlwKSByZW5kZXJQbGFjZWRTaGlwKGJsb2NrU2l6ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghYWN0aXZlR2FtZS5jaGVja1NldHVwKGNoZWNrQm9hcmRTaGlwcykpIHJlbmRlclNlbGVjdGlvbkdyaWQoKTtcbiAgICAgIGVsc2Ugc3RhcnRHYW1lKGJsb2NrU2l6ZSk7XG4gICAgfSwgcmVuZGVyU3BlZWQpO1xuICB9O1xuXG4gIGNvbnN0IGdldFZhbHVlcyA9ICgpID0+ICh7XG4gICAgYmxvY2tTaXplLFxuICAgIHBsYWNlZFNoaXAsXG4gICAgYXhpcyxcbiAgICBtb3VzZUJsb2NrTG9jYXRpb24sXG4gIH0pO1xuXG4gIGNvbnN0IHJlc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIHJlbW92ZUVuZGluZ0V2ZW50cygpO1xuXG4gICAgcmVuZGVyU2VsZWN0aW9uR3JpZCgpO1xuXG4gICAgYmxvY2tTaXplID0gNDI7XG4gICAgYWN0aXZlR2FtZSA9IEdhbWUoKTtcbiAgICBwbGFjZWRTaGlwID0gZmFsc2U7XG4gICAgYXhpcyA9ICd5JztcbiAgICBtb3VzZUJsb2NrTG9jYXRpb24gPSBmYWxzZTtcblxuICAgIGFkZFVpRXZlbnRzKCk7XG4gIH07XG5cbiAgY29uc3QgYWN0aXZhdGVVaSA9ICgpID0+IHtcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvbS5nZXRQYWdlKCk7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBwYWdlQ29udGVudDtcbiAgICByZXN0YXJ0R2FtZSgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWN0aXZhdGVVaSxcbiAgICBjcmVhdGVCbG9ja0VsZW1lbnQsXG4gICAgZ2V0TW91c2VQb3NpdGlvbixcbiAgICBtb3ZlU2hpcEJ5RGlyZWN0aW9uLFxuICAgIGNoYW5nZUJsb2NrU2l6ZSxcbiAgICBjaGFuZ2VBeGlzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVWk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tcmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tNzAwLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tNzAwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXywgeyBoYXNoOiBcIiNBemVyZXRNb25vXCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18sIHsgaGFzaDogXCIjQXplcmV0TW9ub1wiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNF9fXywgeyBoYXNoOiBcIiNSb2JvdG9cIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMThfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18sIHsgaGFzaDogXCIjUm9ib3RvXCIgfSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tZGFya0JsYWNrOiByZ2IoMiwgNCwgOCk7XFxuICAtLWRhcmtHcmF5OiByZ2IoMjIsIDI3LCAzNCk7XFxuICAtLW1pc3NCbHVlOiByZ2IoNzYsIDg0LCAxOTEpO1xcbn1cXG5cXG4vKmNyZWRpdCB0byBodHRwczovL2dvb2dsZS13ZWJmb250cy1oZWxwZXIuaGVyb2t1YXBwLmNvbS8gZm9yIGFsbG93aW5nIG1lIHRvIGltcG9ydCB0aGVzZSBmb250cyBhdXRvbWF0aWNhbGx5Ki9cXG4vKiBhemVyZXQtbW9uby1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXplcmV0IE1vbm8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgc3JjOiBsb2NhbCgnJyksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgIC8qIElFNi1JRTggKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgnd29mZjInKSxcXG4gICAgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgLyogTW9kZXJuIEJyb3dzZXJzICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxufVxcbi8qIGF6ZXJldC1tb25vLTcwMCAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0F6ZXJldCBNb25vJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gIHNyYzogbG9jYWwoJycpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpXFxuICAgICAgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAvKiBJRTYtSUU4ICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpXFxuICAgICAgZm9ybWF0KCd3b2ZmJyksXFxuICAgIC8qIE1vZGVybiBCcm93c2VycyAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyArIFwiKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxufVxcblxcbi8qIHJvYm90by0zMDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gKyBcIik7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gIHNyYzogbG9jYWwoJycpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgIC8qIElFNi1JRTggKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgLyogTW9kZXJuIEJyb3dzZXJzICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19fICsgXCIpXFxuICAgICAgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG59XFxuLyogcm9ib3RvLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX18gKyBcIik7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gIHNyYzogbG9jYWwoJycpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgLyogSUU2LUlFOCAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMV9fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgnd29mZicpLFxcbiAgICAvKiBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjJfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjNfX18gKyBcIikgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbn1cXG5cXG5odG1sIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnNoaXBHcmlkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJsb2NrIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgd2lkdGg6IDQycHg7XFxuICBoZWlnaHQ6IDQycHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5oaXRCbG9jayB7XFxuICBiYWNrZ3JvdW5kOiBwaW5rO1xcbn1cXG5cXG4uY3Vyc29yQmxvY2sge1xcbiAgYmFja2dyb3VuZDogYmx1ZTtcXG59XFxuXFxuLm1pc3NCbG9jayB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1taXNzQmx1ZSk7XFxufVxcblxcbi5zZWN0aW9uU2NyZWVuIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMjtcXG5cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lRmluaXNoZWRTZWN0aW9uIHtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcblxcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0JsYWNrKTtcXG5cXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnJlc3RhcnQge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG5cXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2hpcFRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXplcmV0IE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbi5zaGlwVGV4dCB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5zaGlwU2VsZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrQmxhY2spO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA0NDBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucm90YXRlSW1hZ2Uge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoODdkZWcpXFxuICAgIGJyaWdodG5lc3MoMTAwJSk7XFxufVxcblxcbi5yb3RhdGVCdXR0b246aG92ZXIsXFxuLnJlc3RhcnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0JsYWNrKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJvdGF0ZUJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zaGlwR3JpZCB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYm9hcmRUaXRsZSB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzksIDM5LCAzOSwgMC41NzQpO1xcbiAgei1pbmRleDogMjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGJhY2tncm91bmQ6IHJnYigyLCA0LCA4KTtcXG59XFxuXFxuLm1haW5TZWN0aW9uIHtcXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tYWluVGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgbGluZS1oZWlnaHQ6IDEwdmg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxufVxcblxcbi5jZW50ZXJTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcbi5zaGlwT3ZlcmxheSB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG5cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuLmdyaWRMYXllciB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZ3JpZE92ZXJsYXkge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxufVxcblxcbi5zaGlwT3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uZ3JpZE92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnN0YXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbiAgbGluZS1oZWlnaHQ6IDEwdmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluVGl0bGUgaDEge1xcbiAgZm9udC1mYW1pbHk6ICdBemVyZXQgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG4gIC5ncmlkIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBHcmlkIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBPdmVybGF5LFxcbiAgLmdyaWRPdmVybGF5LFxcbiAgLmdyaWRMYXllciB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG5cXG4gIC5zaGlwU2VsZWN0aW9uIHtcXG4gICAgd2lkdGg6IDMxMHB4O1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gIH1cXG5cXG4gIC5ibG9jayB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICB9XFxuXFxuICAuc3RhdHMge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDcwcHgpIHtcXG4gIC5ncmlkIHtcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgICBoZWlnaHQ6IDIxMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBHcmlkIHtcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgICBoZWlnaHQ6IDIxMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBPdmVybGF5LFxcbiAgLmdyaWRPdmVybGF5LFxcbiAgLmdyaWRMYXllciB7XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gICAgaGVpZ2h0OiAyMTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwU2VsZWN0aW9uIHtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBUZXh0IHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICB9XFxuXFxuICAuYm9hcmRUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgfVxcblxcbiAgLmJsb2NrIHtcXG4gICAgd2lkdGg6IDIxcHg7XFxuICAgIGhlaWdodDogMjFweDtcXG4gIH1cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICB9XFxuXFxuICAuc3RhdHMge1xcbiAgICB3aWR0aDogMjEwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzY1cHgpIHtcXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcbiAgfVxcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IDZweDtcXG4gIH1cXG5cXG4gIC5zaGlwT3ZlcmxheSxcXG4gIC5ncmlkT3ZlcmxheSxcXG4gIC5ncmlkTGF5ZXIge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICB9XFxuXFxuICAuc2hpcEdyaWQge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICB9XFxuXFxuICAuc2hpcFNlbGVjdGlvbiB7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gIH1cXG5cXG4gIC5ibG9jayB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICB9XFxuXFxuICAuc2hpcFRleHQge1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgfVxcblxcbiAgLnNoaXBUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgfVxcblxcbiAgLnN0YXRzIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQSw4R0FBOEc7QUFDOUcsZ0NBQWdDO0FBQ2hDO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNENBQXNELEVBQUUscUJBQXFCO0VBQzdFOzs7Ozs7Ozs7OzJEQVU4RSxFQUFFLGVBQWU7QUFDakc7QUFDQSw0QkFBNEI7QUFDNUI7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0Q0FBa0QsRUFBRSxxQkFBcUI7RUFDekU7Ozs7Ozs7Ozs7NERBVTBFLEVBQUUsZUFBZTtBQUM3Rjs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw2Q0FBNkMsRUFBRSxxQkFBcUI7RUFDcEU7Ozs7Ozs7O21CQVFpQixFQUFFLGVBQWU7QUFDcEM7QUFDQSwyQkFBMkI7QUFDM0I7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw2Q0FBaUQsRUFBRSxxQkFBcUI7RUFDeEU7Ozs7Ozs7Ozs0REFTcUUsRUFBRSxlQUFlO0FBQ3hGOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7O0VBRVYsZUFBZTs7RUFFZixhQUFhOztFQUViLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixpQkFBaUI7O0VBRWpCLDRCQUE0Qjs7RUFFNUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsZ0JBQWdCOztFQUVoQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7b0JBQ2tCO0FBQ3BCOztBQUVBOztFQUVFLDRCQUE0QjtFQUM1QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsVUFBVTtFQUNWLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1COztFQUVuQix1QkFBdUI7O0VBRXZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7O0VBRWxCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBOzs7SUFHRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTs7O0lBR0UsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7OztJQUdFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWRhcmtCbGFjazogcmdiKDIsIDQsIDgpO1xcbiAgLS1kYXJrR3JheTogcmdiKDIyLCAyNywgMzQpO1xcbiAgLS1taXNzQmx1ZTogcmdiKDc2LCA4NCwgMTkxKTtcXG59XFxuXFxuLypjcmVkaXQgdG8gaHR0cHM6Ly9nb29nbGUtd2ViZm9udHMtaGVscGVyLmhlcm9rdWFwcC5jb20vIGZvciBhbGxvd2luZyBtZSB0byBpbXBvcnQgdGhlc2UgZm9udHMgYXV0b21hdGljYWxseSovXFxuLyogYXplcmV0LW1vbm8tcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0F6ZXJldCBNb25vJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIuZW90Jyk7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gIHNyYzogbG9jYWwoJycpLFxcbiAgICB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLmVvdD8jaWVmaXgnKVxcbiAgICAgIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgLyogSUU2LUlFOCAqLyB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLndvZmYyJylcXG4gICAgICBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgIHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAvKiBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tcmVndWxhci50dGYnKVxcbiAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLnN2ZyNBemVyZXRNb25vJykgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbn1cXG4vKiBhemVyZXQtbW9uby03MDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdBemVyZXQgTW9ubyc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi03MDAuZW90Jyk7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gIHNyYzogbG9jYWwoJycpLFxcbiAgICB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi03MDAuZW90PyNpZWZpeCcpXFxuICAgICAgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAvKiBJRTYtSUU4ICovIHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC53b2ZmMicpXFxuICAgICAgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tNzAwLndvZmYnKVxcbiAgICAgIGZvcm1hdCgnd29mZicpLFxcbiAgICAvKiBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tNzAwLnR0ZicpXFxuICAgICAgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgIHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC5zdmcjQXplcmV0TW9ubycpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG59XFxuXFxuLyogcm9ib3RvLTMwMCAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tMzAwLmVvdCcpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAvKiBJRTYtSUU4ICovIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqLyB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tMzAwLndvZmYnKVxcbiAgICAgIGZvcm1hdCgnd29mZicpLFxcbiAgICAvKiBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC50dGYnKVxcbiAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi8gdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC5zdmcjUm9ib3RvJylcXG4gICAgICBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxufVxcbi8qIHJvYm90by1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLmVvdCcpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIuZW90PyNpZWZpeCcpXFxuICAgICAgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAvKiBJRTYtSUU4ICovIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIud29mZicpXFxuICAgICAgZm9ybWF0KCd3b2ZmJyksXFxuICAgIC8qIE1vZGVybiBCcm93c2VycyAqLyB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci50dGYnKVxcbiAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci5zdmcjUm9ib3RvJykgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbn1cXG5cXG5odG1sIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnNoaXBHcmlkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJsb2NrIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgd2lkdGg6IDQycHg7XFxuICBoZWlnaHQ6IDQycHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5oaXRCbG9jayB7XFxuICBiYWNrZ3JvdW5kOiBwaW5rO1xcbn1cXG5cXG4uY3Vyc29yQmxvY2sge1xcbiAgYmFja2dyb3VuZDogYmx1ZTtcXG59XFxuXFxuLm1pc3NCbG9jayB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1taXNzQmx1ZSk7XFxufVxcblxcbi5zZWN0aW9uU2NyZWVuIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMjtcXG5cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lRmluaXNoZWRTZWN0aW9uIHtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcblxcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0JsYWNrKTtcXG5cXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnJlc3RhcnQge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG5cXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2hpcFRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXplcmV0IE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbi5zaGlwVGV4dCB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5zaGlwU2VsZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrQmxhY2spO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA0NDBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucm90YXRlSW1hZ2Uge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoODdkZWcpXFxuICAgIGJyaWdodG5lc3MoMTAwJSk7XFxufVxcblxcbi5yb3RhdGVCdXR0b246aG92ZXIsXFxuLnJlc3RhcnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0JsYWNrKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJvdGF0ZUJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zaGlwR3JpZCB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYm9hcmRUaXRsZSB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzksIDM5LCAzOSwgMC41NzQpO1xcbiAgei1pbmRleDogMjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGJhY2tncm91bmQ6IHJnYigyLCA0LCA4KTtcXG59XFxuXFxuLm1haW5TZWN0aW9uIHtcXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tYWluVGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgbGluZS1oZWlnaHQ6IDEwdmg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxufVxcblxcbi5jZW50ZXJTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcbi5zaGlwT3ZlcmxheSB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG5cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuLmdyaWRMYXllciB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZ3JpZE92ZXJsYXkge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxufVxcblxcbi5zaGlwT3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uZ3JpZE92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnN0YXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbiAgbGluZS1oZWlnaHQ6IDEwdmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluVGl0bGUgaDEge1xcbiAgZm9udC1mYW1pbHk6ICdBemVyZXQgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG4gIC5ncmlkIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBHcmlkIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBPdmVybGF5LFxcbiAgLmdyaWRPdmVybGF5LFxcbiAgLmdyaWRMYXllciB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG5cXG4gIC5zaGlwU2VsZWN0aW9uIHtcXG4gICAgd2lkdGg6IDMxMHB4O1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gIH1cXG5cXG4gIC5ibG9jayB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICB9XFxuXFxuICAuc3RhdHMge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDcwcHgpIHtcXG4gIC5ncmlkIHtcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgICBoZWlnaHQ6IDIxMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBHcmlkIHtcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgICBoZWlnaHQ6IDIxMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBPdmVybGF5LFxcbiAgLmdyaWRPdmVybGF5LFxcbiAgLmdyaWRMYXllciB7XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gICAgaGVpZ2h0OiAyMTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwU2VsZWN0aW9uIHtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBUZXh0IHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICB9XFxuXFxuICAuYm9hcmRUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgfVxcblxcbiAgLmJsb2NrIHtcXG4gICAgd2lkdGg6IDIxcHg7XFxuICAgIGhlaWdodDogMjFweDtcXG4gIH1cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICB9XFxuXFxuICAuc3RhdHMge1xcbiAgICB3aWR0aDogMjEwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzY1cHgpIHtcXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcbiAgfVxcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IDZweDtcXG4gIH1cXG5cXG4gIC5zaGlwT3ZlcmxheSxcXG4gIC5ncmlkT3ZlcmxheSxcXG4gIC5ncmlkTGF5ZXIge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICB9XFxuXFxuICAuc2hpcEdyaWQge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICB9XFxuXFxuICAuc2hpcFNlbGVjdGlvbiB7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gIH1cXG5cXG4gIC5ibG9jayB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICB9XFxuXFxuICAuc2hpcFRleHQge1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgfVxcblxcbiAgLnNoaXBUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgfVxcblxcbiAgLnN0YXRzIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJVaSIsImN1cnJlbnRVaSIsImFjdGl2YXRlVWkiLCJyZWZyZXNoaW5nTG9nbyIsIkRvbSIsImdldEVsZW1lbnRzIiwib3ZlcmxheSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlY3Rpb25TY3JlZW4iLCJzaGlwVGV4dCIsInNoaXBHcmlkIiwic2hpcExheWVyIiwicm90YXRlQnV0dG9uIiwiZ3JpZHMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGl0cyIsIm1pc3NlcyIsInBsYXllckdyaWQiLCJwbGF5ZXJIaXRzIiwicGxheWVyTWlzc2VzIiwiY29tcHV0ZXJHcmlkIiwiY29tcHV0ZXJIaXRzIiwic2hpcFNlbGVjdGlvbiIsImNvbXB1dGVyTWlzc2VzIiwiY29udGVudCIsImNvbXB1dGVyR3JpZExheWVyIiwicmVzdGFydCIsImdhbWVPdmVyVGV4dCIsImdhbWVGaW5pc2hlZFNlY3Rpb24iLCJnZXRQYWdlIiwiUG9zaXRpb24iLCJTaGlwIiwiUHJhY3RpY2FsIiwiR2FtZWJvYXJkIiwicG9zaXRpb24iLCJzaGlwIiwicHJhY3RpY2FsIiwiY3VycmVudFNoaXBzIiwicmFuZG9taXplIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tQXhpcyIsImF4aWVzIiwibGVuZ3RoIiwicGxhY2VBbGxTaGlwcyIsInNoaXBzQXJyYXkiLCJjb21wYXJlU2hpcHNBcnJheSIsImxhdGVzdFNoaXBzQXJyYXkiLCJzaGlwcyIsInNoaXBzRG9Db2xsaWRlIiwiZm9yRWFjaCIsImxhdGVzdFNoaXBzIiwiYm9hdCIsImxhdGVzdEJvYXQiLCJjb21wYXJlUG9zaXRpb24iLCJnZXRUeXBlT2ZQbGFjZWRTaGlwIiwic2hpcEFycmF5Iiwic2hpcFR5cGVzIiwic2hpcFR5cGUiLCJzaGlwTGVuZ3RoIiwicGxheWVyUGxhY2VTaGlwIiwibG9jYXRpb24iLCJheGlzIiwiY3VycmVudEFycmF5IiwiY29weUFycmF5IiwibGF0ZXN0U2hpcCIsImNyZWF0ZVNoaXAiLCJpc0NvbGxpZGVkIiwicHVzaCIsInBsYWNlUmFuZG9tU2hpcHMiLCJyYW5kb21pemVyIiwicmFuZG9tQXhpZXMiLCJyYW5kb21Qb3NpdGlvbiIsImNyZWF0ZVBvc2l0aW9uIiwibGF0ZXN0TGVuZ3RoIiwicmFuZG9tU2hpcCIsInNoaXBDb2xsaWRlcyIsInBsYWNlU2hpcHNSYW5kb21seSIsImZpbHRlckF0dGFjayIsImFycmF5IiwiY3VycmVudEF0dGFjayIsImN1cnJlbnRBdHRhY2tBcnJheSIsImZpbHRlciIsIml0ZW0iLCJ4Q29vcmQiLCJ5Q29vcmQiLCJoYXNIaXRTaGlwIiwiaGl0UG9zaXRpb24iLCJsYXRlc3RIaXRzIiwibGF0ZXN0TWlzc2VzIiwiaGFzQmVlbkhpdCIsImhhc0JlZW5NaXNzIiwiYXR0YWNrU2hpcCIsImxhdGVzdFBvc2l0aW9uIiwiY3VycmVudEhpdHMiLCJjdXJyZW50TWlzc2VzIiwiaXNIaXQiLCJwb3NpdGlvbnNBcnJheSIsImhpdCIsImhpdEFycmF5Iiwic2hpcEFycmF5cyIsImZpbmFsT2JqZWN0IiwicmVjaWV2ZUF0dGFjayIsInJlc3VsdCIsImNyZWF0ZVJhbmRvbUNvb3JkcyIsImlzTW9ja1JhbmRvbSIsImNhbGxSYW5kb21pemVyIiwicmFuZG9tWCIsInJhbmRvbVkiLCJyZWNpZXZlUmFuZG9tQXR0YWNrIiwiaGFzSGl0IiwiaXNBbGxTdW5rIiwiaGFzU3Vua2VkIiwiaXNTdW5rIiwiZ2V0VmFsdWVzIiwiR2FtZSIsInBsYXllckJvYXJkIiwiY29tcHV0ZXJCb2FyZCIsInBsYXllckNoZWNrQm9hcmQiLCJjaGVja1NldHVwIiwicGxheWVyQ2hlY2tTaGlwcyIsInNldHVwR2FtZSIsInBsYXllckNoZWNrVmFsdWVzIiwiYXR0YWNrQm9hdHMiLCJjb29yZHMiLCJzZXR1cFNoaXAiLCJnYW1lSXNPdmVyIiwibWVzc2FnZSIsImdhbWVGaW5pc2hlZCIsImFycmFuZ2VCbG9ja3MiLCJtb3VzZVBvc2l0aW9uIiwiY3VycmVudFJvdGF0aW9uIiwiY2hlY2tib2FyZE9iamVjdHMiLCJzaGlwVHlwZU9iamVjdCIsImN1cnJlbnRTaGlwIiwiZ2V0R2FtZVZhbHVlcyIsImNoZWNrT3V0T2ZCb3VuY2UiLCJuZXdQb3NpdGlvbiIsImFkZFBvc2l0aW9uIiwicG9zaXRpb24xIiwicG9zaXRpb24yIiwibXVsdGlwbHlQb3NpdGlvbiIsImNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwiLCJuZXdBcnJheSIsImlzT2JqZWN0IiwiY3VycmVudE9iamVjdCIsImNoZWNrT2JqZWN0Iiwib2JqZWN0MSIsIm9iamVjdDIiLCJpbmRleCIsInNlY29uZEluZGV4Iiwib2JqZWN0SXNFcXVhbCIsImN1cnJlbnRPYmplY3QyIiwiY3VycmVudE9iamVjdFZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsImN1cnJlbnRPYmplY3QyVmFsdWVzIiwib2JqZWN0S2V5cyIsImtleXMiLCJvYmplY3RLZXlzMiIsImtleSIsIml0ZW0yIiwiY2hlY2tPYmplY3RCb29sIiwiZ2V0QWRkZWRQb3NpdGlvbiIsImFkZGVkUG9zaXRpb24iLCJsZW5ndGgxIiwicG9wdWxhdGVTaGlwcyIsImN1cnJlbnRQb3NpdGlvbiIsImxhdGVzdEFycmF5IiwiYXJyYXlMZW5ndGgiLCJwb3MiLCJkb20iLCJyZW5kZXJTcGVlZCIsImJsb2NrU2l6ZSIsImFjdGl2ZUdhbWUiLCJwbGFjZWRTaGlwIiwibW91c2VCbG9ja0xvY2F0aW9uIiwiY3JlYXRlRG9tRWxlbWVudCIsImVsZW1lbnROYW1lIiwiY3JlYXRlRWxlbWVudCIsImdldE1vdXNlUG9zaXRpb24iLCJvZmZzZXRYIiwib2Zmc2V0WSIsIm91dE9mQm91bmNlIiwiZmluZE1vdXNlUG9zaXRpb24iLCJldmVudCIsImN1cnJlbnRNb3VzZVBvc2l0aW9uIiwiZmluZFRvdWNoUG9zaXRpb24iLCJyZWN0IiwidGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG91Y2hPZmZzZXRYIiwidGFyZ2V0VG91Y2hlcyIsImNsaWVudFgiLCJ4IiwidG91Y2hPZmZzZXRZIiwiY2xpZW50WSIsInkiLCJ0b3VjaFBvc2l0aW9uIiwicHJldmVudERlZmF1bHQiLCJjaGFuZ2VCbG9ja1NpemUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImNyZWF0ZUJsb2NrRWxlbWVudCIsImJsb2NrQ2xhc3MiLCJjcmVhdGVCbG9jayIsImxhdGVzdENsYXNzIiwiYmxvY2tFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlzYWJsZVN0YXJ0ZXJVaSIsImNyZWF0ZVNoaXBCbG9jayIsInNoaXBQb3NpdGlvbiIsImxhdGVzdEJsb2NrU2l6ZSIsInNoaXBCbG9jayIsInJlYWxQb3NpdGlvblgiLCJyZWFsUG9zaXRpb25ZIiwic3R5bGUiLCJsZWZ0IiwidG9wIiwicmVuZGVyQWxyZWFkeVBsYWNlZFNoaXBzIiwiZ2FtZVZhbHVlcyIsImNoZWNrQm9hcmRTaGlwcyIsImFwcGVuZENoaWxkIiwicmVuZGVyUGxhY2VkU2hpcCIsImVsZW1lbnQiLCJpbm5lckhUTUwiLCJjaGFuZ2VBeGlzIiwibW92ZVNoaXBCeURpcmVjdGlvbiIsIm1vdXNlTG9jYXRpb24iLCJjdXJyZW50QXhpcyIsIm5ld1hQb3NpdGlvbiIsIm5ld1lQb3NpdGlvbiIsIm5ld1NoaXBQb3NpdGlvbiIsInBsYWNlUGxheWVyU2hpcCIsImxhdGVzdEF4aXMiLCJsYXRlc3RHYW1lIiwicGxhY2VQbGF5ZXJTaGlwRXZlbnQiLCJyZXNldEdhbWUiLCJkaXNwbGF5IiwicmVzdGFydEdhbWUiLCJhZGRVaUV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVVaUV2ZW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFbmRpbmdFdmVudHMiLCJyZW1vdmVFbmRpbmdFdmVudHMiLCJyZW1vdmVHYW1lRXZlbnRzIiwid2luZG93IiwiY2hhbmdlTW91c2VQb3NpdGlvbiIsImF0dGFja1NoaXBzIiwiYWRkR2FtZUV2ZW50cyIsImNoZWNrTW91c2VUYXJnZXQiLCJlbGVtZW50Q2xhc3MiLCJtb3VzZVRhcmdldCIsImNsYXNzTmFtZSIsInJlbmRlclNoaXBzIiwiZ3JpZCIsInNoaXBHcm91cCIsInNoaXBFbGVtZW50IiwicmVuZGVySGl0cyIsInJlbmRlckdyaWRzIiwiYmxvY2tTaXplMiIsInBsYXllckJvYXJkVmFsdWVzIiwiY29tcHV0ZXJCb2FyZFZhbHVlcyIsIm1vdXNlU2hpcCIsInJlbmRlclN0YXRzIiwidGV4dENvbnRlbnQiLCJkaXNwbGF5R2FtZU92ZXJVaSIsInN0YXR1cyIsImVsZW1lbnRzIiwicmVuZGVyR2FtZSIsInNldFRpbWVvdXQiLCJnYW1lU3RhdHVzIiwicmVtb3ZlU2hpcFNlY3Rpb24iLCJzdGFydEdhbWUiLCJyZW5kZXJTZWxlY3Rpb25HcmlkIiwiZ2FtZVZhbHVlIiwicGFnZUNvbnRlbnQiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==