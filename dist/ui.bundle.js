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
      content: document.querySelector('.content'),
      computerGridLayer: document.querySelector('.computerGridLayer'),
      restart: document.querySelector('.restart'),
      gameOverText: document.querySelector('.gameOverText'),
      gameFinishedSection: document.querySelector('.gameFinishedSection')
    };
  };

  var getPage = function getPage() {
    var content = "    <div class=\"content\">\n                            <div class=\"overlay\"></div>\n                            <div class=\"sectionScreen\">\n                              <div class=\"shipSelection\">\n\n                              <div class=\"gameFinishedSection\">\n                              <h1 class=\"gameOverText\">You Win \uD83D\uDE03</h1>\n                    \n                              <button class=\"restart\">Restart</button>\n                            </div>\n\n                                <h1 class=\"shipTitle\">BATTLESHIP</h1>\n                                <h2 class=\"shipText\">Place your Battleship</h2>\n                                <div class=\"shipLayer\">\n                                  <div class=\"shipOverlay\"></div>\n                                  <div class=\"shipGrid\"></div>\n                              </div>\n                                <div class=\"rotateButton\">\n                                  <img\n                                    class=\"rotateImage\"\n                                    src=\"".concat(_images_refreshLogo_svg__WEBPACK_IMPORTED_MODULE_0__, "\"\n                                    alt=\"Rotate Image\"\n                                  />\n                                </div>\n                              </div>\n                            </div>\n\n                            <main class=\"mainSection\">\n                              <div class=\"mainTitle\"><h1>BATTLESHIP</h1></div>\n                              <div class=\"centerSection\">\n                                <div class=\"playerBoard board\">\n                                  <h2 class=\"boardTitle\">Player Board</h2>\n                                  <div class=\"gridLayer playerGridLayer\">\n                                    <div class=\"gridOverlay\"></div>\n                                    <div class=\"playerGrid grid\"></div>\n                                  </div>\n                                  <div class=\"playerStats stats\">\n                                    <h2 class=\"playerHits hits\">Hits 0</h2>\n                                    <h2 class=\"playerMisses misses\">Misses 0</h2>\n                                  </div>\n                                </div>\n\n                                <div class=\"computerBoard board\">\n                                  <h2 class=\"boardTitle\">Computer Board</h2>\n                                  <div class=\"gridLayer computerGridLayer\">\n                                    <div class=\"gridOverlay computerGridOverlay\"></div>\n                                    <div class=\"computerGrid grid\"></div>\n                                  </div>\n                                  <div class=\"computerStats stats\">\n                                    <h2 class=\"computerHits hits\">Hits 0</h2>\n\n                                    <h2 class=\"computerMisses misses\">Misses 0</h2>\n                                  </div>\n                                </div>\n                              </div>\n                            </main>\n                            <div class=\"footer\">\n                              <h2 class=\"copyrightMessage\">\n                                Website and code are made by Brayden Grotegut\n                              </h2>\n                            </div>\n                          </div>");
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
    if (!ships) return shipsDoCollide; // console.log(latestShipsArray, 'the curreent ships array');
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

    if (!shipType) {
      // console.log(shipType);
      // console.log(latestShipsArray, 'the latest ships array');
      return latestShipsArray;
    }

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
    var checkboardObjects = playerCheckBoard.getValues();
    var shipTypeObject = playerCheckBoard.getTypeOfPlacedShip(checkboardObjects.currentShips); // console.log(shipTypeObject, 'the ship type object');
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



 // you win  😃
// you lost 😢

var Ui = function Ui() {
  var dom = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var position = (0,_position_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var renderSpeed = 1;
  var blockSize = 42;
  var activeGame;
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
    var outOfBounce = position.checkOutOfBounce(mousePosition);
    if (outOfBounce) return false; // console.log(mousePosition, 'the current mouse position');

    return mousePosition;
  };

  var findMousePosition = function findMousePosition(event) {
    var currentMousePosition = getMousePosition(event.offsetX, event.offsetY);
    mouseBlockLocation = currentMousePosition; // console.log(currentMousePosition, 'the current mouse position');
  }; // wotk on this function


  var findTouchPosition = function findTouchPosition(event) {
    var rect = event.target.getBoundingClientRect();
    var touchOffsetX = event.targetTouches[0].clientX - rect.x;
    var touchOffsetY = event.targetTouches[0].clientY - rect.y;
    var touchPosition = getMousePosition(touchOffsetX, touchOffsetY);
    mouseBlockLocation = touchPosition;
    console.log(mouseBlockLocation, 'the mouse block location');
    event.preventDefault();
  }; // block size matches the size gridsize of the media query divided by 10


  var changeBlockSize = function changeBlockSize(matchMedia) {
    blockSize = 42;
    if (matchMedia('(max-width: 960px)').matches) blockSize = 30;
    if (matchMedia('(max-width: 470px)').matches) blockSize = 21;
    if (matchMedia('(max-width: 320px)').matches) blockSize = 15;
    return blockSize; // console.log(matchMedia('(max-width: 320px)'), 'the current match media');
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
    element.shipSelection.style.display = 'flex';
    element.gameFinishedSection.style.display = 'none';
    element.gameOverText.innerHTML = '';
    activateUi();
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
    element.restart.addEventListener('click', restart);
  };

  var removeEndingEvents = function removeEndingEvents() {
    var element = dom.getElements();
    element.restart.removeEventListener('click', element.restart);
  };

  var removeGameEvents = function removeGameEvents() {
    addEndingEvents();
    var element = dom.getElements();
    window.removeEventListener('mousemove', changeMousePosition);
    element.removeEventListener('touchmove', change).addEventListener('mousemove', findMousePosition);
    element.removeEventListener('click', attackShips);
  };

  var getMessage = function getMessage() {};

  var addGameEvents = function addGameEvents() {
    removeUiEvents();
    var element = dom.getElements();
    window.addEventListener('mousemove', changeMousePosition);
    element.computerGridLayer.addEventListener('mousemove', findMousePosition);
    element.computerGridLayer.addEventListener('click', attackShips);
  };

  var checkMouseTarget = function checkMouseTarget(elementClass) {
    // console.log(elementClass, 'the element calss');
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

  var removeCursorElement = function removeCursorElement() {
    var _dom$getElements = dom.getElements(),
        computerGrid = _dom$getElements.computerGrid;

    console.log(computerGrid.innerHTML);
  };

  var renderGrids = function renderGrids(blockSize2, mousePosition) {
    var gameValues = activeGame.getGameValues();

    var _dom$getElements2 = dom.getElements(),
        playerGrid = _dom$getElements2.playerGrid;

    var _dom$getElements3 = dom.getElements(),
        computerGrid = _dom$getElements3.computerGrid;

    playerGrid.innerHTML = '';
    computerGrid.innerHTML = '';
    var playerBoardValues = gameValues.playerBoard.getValues();
    var computerBoardValues = gameValues.computerBoard.getValues(); // console.log(playerBoardValues, 'playerBoardValues');
    // console.log(computerBoardValues, 'computerBoardValues');
    // console.log(playerBoardValues, 'the player board values');

    renderShips(playerBoardValues.currentShips, playerGrid, blockSize2);
    renderHits(playerBoardValues.hits, 'hitBlock', playerGrid, blockSize2);
    renderHits(playerBoardValues.misses, 'missBlock', playerGrid, blockSize2);
    renderShips(computerBoardValues.currentShips, computerGrid, blockSize2);
    renderHits(computerBoardValues.hits, 'hitBlock', computerGrid, blockSize2);
    renderHits(computerBoardValues.misses, 'missBlock', computerGrid, blockSize2);
    var mouseShip = ship.createShip(mousePosition, 1, 'x');

    if (mouseShip) {
      renderHits(mouseShip, 'cursorBlock', computerGrid, blockSize2);
    }
  };

  var renderStats = function renderStats() {
    var gameValues = activeGame.getGameValues();

    var _dom$getElements4 = dom.getElements(),
        playerHits = _dom$getElements4.playerHits,
        playerMisses = _dom$getElements4.playerMisses;

    var _dom$getElements5 = dom.getElements(),
        computerHits = _dom$getElements5.computerHits,
        computerMisses = _dom$getElements5.computerMisses;

    var playerBoardValues = gameValues.playerBoard.getValues();
    var computerBoardValues = gameValues.computerBoard.getValues();
    playerHits.textContent = "Hits - ".concat(playerBoardValues.hits.length);
    playerMisses.textContent = "Misses - ".concat(playerBoardValues.misses.length);
    computerHits.textContent = "Hits - ".concat(computerBoardValues.hits.length);
    computerMisses.textContent = "Misses - ".concat(computerBoardValues.misses.length);
  };

  var renderGame = function renderGame() {
    setTimeout(function () {
      var gameStatus = activeGame.gameIsOver();
      var latestBlockSize = changeBlockSize(window.matchMedia);
      renderGrids(latestBlockSize, mouseBlockLocation);
      renderStats();
      if (!gameStatus.gameFinished) renderGame(latestBlockSize);else renderGame();
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

        if (currentShip) placedShip = currentShip; // console.log(placedShip, 'the current placed ship');

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

  var activateUi = function activateUi() {
    var pageContent = dom.getPage();
    document.body.innerHTML = pageContent;
    activeGame = (0,_main_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    addUiEvents();
    removeEndingEvents();
    renderSelectionGrid();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QlMsRUE0QlBELFdBNUJPLENBQVY7RUE2QkQsQ0E5QkQ7O0VBZ0NBLElBQU01RCxTQUFTLEdBQUcsU0FBWkEsU0FBWTtJQUFBLE9BQU87TUFDdkI2RCxTQUFTLEVBQVRBLFNBRHVCO01BRXZCQyxVQUFVLEVBQVZBLFVBRnVCO01BR3ZCbEgsSUFBSSxFQUFKQSxJQUh1QjtNQUl2Qm1ILGtCQUFrQixFQUFsQkE7SUFKdUIsQ0FBUDtFQUFBLENBQWxCOztFQU9BLElBQU1tRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0lBQ3ZCLElBQU11QyxXQUFXLEdBQUc5RyxHQUFHLENBQUNqSixPQUFKLEVBQXBCO0lBQ0F4QixRQUFRLENBQUN3UixJQUFULENBQWN2RCxTQUFkLEdBQTBCc0QsV0FBMUI7SUFDQW5KLFVBQVUsR0FBR3JCLG9EQUFJLEVBQWpCO0lBQ0FrSSxXQUFXO0lBQ1hLLGtCQUFrQjtJQUNsQitCLG1CQUFtQjtFQUNwQixDQVBEOztFQVNBLE9BQU87SUFDTHJDLFVBQVUsRUFBVkEsVUFESztJQUVMdEMsa0JBQWtCLEVBQWxCQSxrQkFGSztJQUdMekIsZ0JBQWdCLEVBQWhCQSxnQkFISztJQUlMa0QsbUJBQW1CLEVBQW5CQSxtQkFKSztJQUtMNUIsZUFBZSxFQUFmQSxlQUxLO0lBTUwyQixVQUFVLEVBQVZBLFVBTks7SUFPTHBILFNBQVMsRUFBVEE7RUFQSyxDQUFQO0FBU0QsQ0F2YkQ7O0FBeWJBLGlFQUFlMEQsRUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3ByYWN0aWNhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZnJlc2hpbmdMb2dvIGZyb20gJy4uL2ltYWdlcy9yZWZyZXNoTG9nby5zdmcnO1xuXG5jb25zdCBEb20gPSAoKSA9PiB7XG4gIGNvbnN0IGdldEVsZW1lbnRzID0gKCkgPT4gKHtcbiAgICBvdmVybGF5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpLFxuICAgIHNlY3Rpb25TY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uU2NyZWVuJyksXG4gICAgc2hpcFRleHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwVGV4dCcpLFxuICAgIHNoaXBHcmlkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcEdyaWQnKSxcbiAgICBzaGlwTGF5ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwTGF5ZXInKSxcbiAgICByb3RhdGVCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGVCdXR0b24nKSxcbiAgICBncmlkczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZCcpKSxcbiAgICBoaXRzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaXRzJykpLFxuICAgIG1pc3NlczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWlzc2VzJykpLFxuICAgIHBsYXllckdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJHcmlkJyksXG4gICAgcGxheWVySGl0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckhpdHMnKSxcbiAgICBwbGF5ZXJNaXNzZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJNaXNzZXMnKSxcbiAgICBjb21wdXRlckdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlckdyaWQnKSxcbiAgICBjb21wdXRlckhpdHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlckhpdHMnKSxcbiAgICBjb21wdXRlck1pc3NlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyTWlzc2VzJyksXG4gICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKSxcbiAgICBjb21wdXRlckdyaWRMYXllcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyR3JpZExheWVyJyksXG4gICAgcmVzdGFydDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQnKSxcbiAgICBnYW1lT3ZlclRleHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lT3ZlclRleHQnKSxcbiAgICBnYW1lRmluaXNoZWRTZWN0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZUZpbmlzaGVkU2VjdGlvbicpLFxuICB9KTtcblxuICBjb25zdCBnZXRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBTZWxlY3Rpb25cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWVGaW5pc2hlZFNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImdhbWVPdmVyVGV4dFwiPllvdSBXaW4g8J+YgzwvaDE+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlc3RhcnRcIj5SZXN0YXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwic2hpcFRpdGxlXCI+QkFUVExFU0hJUDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInNoaXBUZXh0XCI+UGxhY2UgeW91ciBCYXR0bGVzaGlwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBMYXllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwT3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwR3JpZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3RhdGVCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdGF0ZUltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIiR7cmVmcmVzaGluZ0xvZ299XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlJvdGF0ZSBJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzPVwibWFpblNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluVGl0bGVcIj48aDE+QkFUVExFU0hJUDwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyQm9hcmQgYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJib2FyZFRpdGxlXCI+UGxheWVyIEJvYXJkPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZExheWVyIHBsYXllckdyaWRMYXllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRPdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyR3JpZCBncmlkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllclN0YXRzIHN0YXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwbGF5ZXJIaXRzIGhpdHNcIj5IaXRzIDA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicGxheWVyTWlzc2VzIG1pc3Nlc1wiPk1pc3NlcyAwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXB1dGVyQm9hcmQgYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJib2FyZFRpdGxlXCI+Q29tcHV0ZXIgQm9hcmQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkTGF5ZXIgY29tcHV0ZXJHcmlkTGF5ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkT3ZlcmxheSBjb21wdXRlckdyaWRPdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcHV0ZXJHcmlkIGdyaWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcHV0ZXJTdGF0cyBzdGF0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY29tcHV0ZXJIaXRzIGhpdHNcIj5IaXRzIDA8L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjb21wdXRlck1pc3NlcyBtaXNzZXNcIj5NaXNzZXMgMDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvcHlyaWdodE1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Vic2l0ZSBhbmQgY29kZSBhcmUgbWFkZSBieSBCcmF5ZGVuIEdyb3RlZ3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgIHJldHVybiBjb250ZW50O1xuICB9O1xuXG4gIHJldHVybiB7IGdldFBhZ2UsIGdldEVsZW1lbnRzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb207XG4iLCJpbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IFByYWN0aWNhbCBmcm9tICcuL3ByYWN0aWNhbC5qcyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuICBjb25zdCBzaGlwID0gU2hpcCgpO1xuICBjb25zdCBwcmFjdGljYWwgPSBQcmFjdGljYWwoKTtcblxuICBsZXQgY3VycmVudFNoaXBzID0gW107XG4gIGxldCBoaXRzID0gW107XG4gIGxldCBtaXNzZXMgPSBbXTtcblxuICBjb25zdCByYW5kb21pemUgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgY29uc3QgcmFuZG9tQXhpcyA9ICgpID0+IHtcbiAgICBjb25zdCBheGllcyA9IFsneCcsICd5J107XG4gICAgcmV0dXJuIGF4aWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF4aWVzLmxlbmd0aCldO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlQWxsU2hpcHMgPSAoc2hpcHNBcnJheSkgPT4ge1xuICAgIGN1cnJlbnRTaGlwcyA9IHNoaXBzQXJyYXk7XG4gICAgcmV0dXJuIGN1cnJlbnRTaGlwcztcbiAgfTtcblxuICBjb25zdCBjb21wYXJlU2hpcHNBcnJheSA9IChsYXRlc3RTaGlwc0FycmF5LCBzaGlwcykgPT4ge1xuICAgIGxldCBzaGlwc0RvQ29sbGlkZSA9IGZhbHNlO1xuICAgIGlmICghc2hpcHMpIHJldHVybiBzaGlwc0RvQ29sbGlkZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGxhdGVzdFNoaXBzQXJyYXksICd0aGUgY3VycmVlbnQgc2hpcHMgYXJyYXknKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwcywgJ3RoZSBjdXJyZW50IHNoaXBzJyk7XG5cbiAgICBsYXRlc3RTaGlwc0FycmF5LmZvckVhY2goKGxhdGVzdFNoaXBzKSA9PiB7XG4gICAgICBsYXRlc3RTaGlwcy5mb3JFYWNoKChib2F0KSA9PiB7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKGxhdGVzdEJvYXQpID0+IHtcbiAgICAgICAgICBpZiAocG9zaXRpb24uY29tcGFyZVBvc2l0aW9uKGJvYXQsIGxhdGVzdEJvYXQpKSB7XG4gICAgICAgICAgICBzaGlwc0RvQ29sbGlkZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBzRG9Db2xsaWRlO1xuICB9O1xuXG4gIGNvbnN0IGdldFR5cGVPZlBsYWNlZFNoaXAgPSAoc2hpcEFycmF5KSA9PiB7XG4gICAgaWYgKHNoaXBBcnJheS5sZW5ndGggPT09IDUpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHNoaXBUeXBlcyA9IFtcbiAgICAgIHsgc2hpcFR5cGU6ICdjYXJyaWVyJywgc2hpcExlbmd0aDogNSB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2JhdHRsZXNoaXAnLCBzaGlwTGVuZ3RoOiA0IH0sXG4gICAgICB7IHNoaXBUeXBlOiAnZGVzdG95ZXInLCBzaGlwTGVuZ3RoOiAzIH0sXG4gICAgICB7IHNoaXBUeXBlOiAnc3VibWFyaW5lJywgc2hpcExlbmd0aDogMyB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2d1bmJvYXQnLCBzaGlwTGVuZ3RoOiAyIH0sXG4gICAgXTtcblxuICAgIHJldHVybiBzaGlwVHlwZXNbc2hpcEFycmF5Lmxlbmd0aF07XG4gIH07XG5cbiAgY29uc3QgcGxheWVyUGxhY2VTaGlwID0gKGxvY2F0aW9uLCBheGlzKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEFycmF5ID0gcHJhY3RpY2FsLmNvcHlBcnJheShjdXJyZW50U2hpcHMpO1xuXG4gICAgY29uc3Qgc2hpcFR5cGUgPSBnZXRUeXBlT2ZQbGFjZWRTaGlwKGN1cnJlbnRBcnJheSk7XG5cbiAgICBjb25zdCBsYXRlc3RTaGlwID0gc2hpcC5jcmVhdGVTaGlwKGxvY2F0aW9uLCBzaGlwVHlwZS5zaGlwTGVuZ3RoLCBheGlzKTtcblxuICAgIGNvbnN0IGlzQ29sbGlkZWQgPSBjb21wYXJlU2hpcHNBcnJheShjdXJyZW50QXJyYXksIGxhdGVzdFNoaXApO1xuXG4gICAgaWYgKHNoaXBUeXBlICYmIGxhdGVzdFNoaXAgJiYgIWlzQ29sbGlkZWQpIHtcbiAgICAgIGN1cnJlbnRBcnJheS5wdXNoKGxhdGVzdFNoaXApO1xuICAgIH1cblxuICAgIGN1cnJlbnRTaGlwcyA9IGN1cnJlbnRBcnJheTtcbiAgICByZXR1cm4gY3VycmVudEFycmF5O1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUmFuZG9tU2hpcHMgPSAoc2hpcHNBcnJheSwgcmFuZG9taXplciwgcmFuZG9tQXhpZXMpID0+IHtcbiAgICBjb25zdCBsYXRlc3RTaGlwc0FycmF5ID0gc2hpcHNBcnJheTtcbiAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHJhbmRvbWl6ZXIoKSwgcmFuZG9taXplcigpKTtcbiAgICBjb25zdCBzaGlwVHlwZSA9IGdldFR5cGVPZlBsYWNlZFNoaXAobGF0ZXN0U2hpcHNBcnJheSk7XG4gICAgaWYgKCFzaGlwVHlwZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coc2hpcFR5cGUpO1xuICAgICAgLy8gY29uc29sZS5sb2cobGF0ZXN0U2hpcHNBcnJheSwgJ3RoZSBsYXRlc3Qgc2hpcHMgYXJyYXknKTtcblxuICAgICAgcmV0dXJuIGxhdGVzdFNoaXBzQXJyYXk7XG4gICAgfVxuXG4gICAgY29uc3QgbGF0ZXN0TGVuZ3RoID0gc2hpcFR5cGUuc2hpcExlbmd0aDtcblxuICAgIGNvbnN0IHJhbmRvbVNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAoXG4gICAgICByYW5kb21Qb3NpdGlvbixcbiAgICAgIGxhdGVzdExlbmd0aCxcbiAgICAgIHJhbmRvbUF4aWVzKClcbiAgICApO1xuXG4gICAgY29uc3Qgc2hpcENvbGxpZGVzID0gY29tcGFyZVNoaXBzQXJyYXkobGF0ZXN0U2hpcHNBcnJheSwgcmFuZG9tU2hpcCk7XG4gICAgaWYgKHJhbmRvbVNoaXAgJiYgIXNoaXBDb2xsaWRlcykgbGF0ZXN0U2hpcHNBcnJheS5wdXNoKHJhbmRvbVNoaXApO1xuXG4gICAgcmV0dXJuIHBsYWNlUmFuZG9tU2hpcHMobGF0ZXN0U2hpcHNBcnJheSwgcmFuZG9taXplciwgcmFuZG9tQXhpZXMpO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcHNSYW5kb21seSA9IChyYW5kb21pemVyLCByYW5kb21BeGllcykgPT4ge1xuICAgIGNvbnN0IHNoaXBzQXJyYXkgPSBwbGFjZVJhbmRvbVNoaXBzKFtdLCByYW5kb21pemVyLCByYW5kb21BeGllcyk7XG4gICAgY3VycmVudFNoaXBzID0gc2hpcHNBcnJheTtcblxuICAgIHJldHVybiBzaGlwc0FycmF5O1xuICB9O1xuICBjb25zdCBmaWx0ZXJBdHRhY2sgPSAoYXJyYXksIGN1cnJlbnRBdHRhY2spID0+IHtcbiAgICBjb25zdCBjdXJyZW50QXR0YWNrQXJyYXkgPSBhcnJheS5maWx0ZXIoXG4gICAgICAoaXRlbSkgPT5cbiAgICAgICAgaXRlbS54Q29vcmQgPT09IGN1cnJlbnRBdHRhY2sueENvb3JkICYmXG4gICAgICAgIGl0ZW0ueUNvb3JkID09PSBjdXJyZW50QXR0YWNrLnlDb29yZFxuICAgICk7XG5cbiAgICByZXR1cm4gY3VycmVudEF0dGFja0FycmF5O1xuICB9O1xuXG4gIGNvbnN0IGhhc0hpdFNoaXAgPSAoaGl0UG9zaXRpb24sIGxhdGVzdEhpdHMsIGxhdGVzdE1pc3NlcykgPT4ge1xuICAgIGNvbnN0IGhhc0JlZW5IaXQgPSBmaWx0ZXJBdHRhY2sobGF0ZXN0SGl0cywgaGl0UG9zaXRpb24pO1xuICAgIGNvbnN0IGhhc0JlZW5NaXNzID0gZmlsdGVyQXR0YWNrKGxhdGVzdE1pc3NlcywgaGl0UG9zaXRpb24pO1xuXG4gICAgaWYgKGhhc0JlZW5IaXQubGVuZ3RoID4gMCB8fCBoYXNCZWVuTWlzcy5sZW5ndGggPiAwKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrU2hpcCA9IChsYXRlc3RQb3NpdGlvbiwgc2hpcHMsIGN1cnJlbnRIaXRzLCBjdXJyZW50TWlzc2VzKSA9PiB7XG4gICAgbGV0IGlzSGl0ID0gZmFsc2U7XG4gICAgY29uc3QgbGF0ZXN0U2hpcHNBcnJheSA9IFtdO1xuICAgIGNvbnN0IGxhdGVzdEhpdHMgPSBjdXJyZW50SGl0cztcbiAgICBjb25zdCBsYXRlc3RNaXNzZXMgPSBjdXJyZW50TWlzc2VzO1xuXG4gICAgaWYgKCFsYXRlc3RQb3NpdGlvbikgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChoYXNIaXRTaGlwKGxhdGVzdFBvc2l0aW9uLCBjdXJyZW50SGl0cywgY3VycmVudE1pc3NlcykpIHJldHVybiBmYWxzZTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXBBcnJheSkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uc0FycmF5ID0gcHJhY3RpY2FsLmNvcHlBcnJheShzaGlwQXJyYXkpO1xuICAgICAgY29uc3QgaGl0ID0gc2hpcC5oaXQocG9zaXRpb25zQXJyYXksIGxhdGVzdFBvc2l0aW9uKTtcblxuICAgICAgaWYgKGhpdC5oaXRBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaXNIaXQgPSB0cnVlO1xuICAgICAgICBwb3NpdGlvbnNBcnJheSA9IGhpdC5zaGlwQXJyYXlzO1xuICAgICAgICBsYXRlc3RIaXRzLnB1c2goaGl0LmhpdEFycmF5WzBdKTtcbiAgICAgIH1cbiAgICAgIGxhdGVzdFNoaXBzQXJyYXkucHVzaChwb3NpdGlvbnNBcnJheSk7XG4gICAgfSk7XG4gICAgaWYgKCFpc0hpdCkgbGF0ZXN0TWlzc2VzLnB1c2gobGF0ZXN0UG9zaXRpb24pO1xuXG4gICAgY29uc3QgZmluYWxPYmplY3QgPSB7XG4gICAgICBpc0hpdCxcbiAgICAgIGxhdGVzdFNoaXBzQXJyYXksXG4gICAgICBsYXRlc3RIaXRzLFxuICAgICAgbGF0ZXN0TWlzc2VzLFxuICAgIH07XG5cbiAgICByZXR1cm4gZmluYWxPYmplY3Q7XG4gIH07XG5cbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChsYXRlc3RQb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF0dGFja1NoaXAobGF0ZXN0UG9zaXRpb24sIGN1cnJlbnRTaGlwcywgaGl0cywgbWlzc2VzKTtcbiAgICBpZiAoIXJlc3VsdCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY3VycmVudFNoaXBzID0gcmVzdWx0LmxhdGVzdFNoaXBzQXJyYXk7XG4gICAgaGl0cyA9IHJlc3VsdC5sYXRlc3RIaXRzO1xuICAgIG1pc3NlcyA9IHJlc3VsdC5sYXRlc3RNaXNzZXM7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVJhbmRvbUNvb3JkcyA9IChyYW5kb21pemVyKSA9PiB7XG4gICAgbGV0IHJhbmRvbVBvc2l0aW9uO1xuXG4gICAgaWYgKHJhbmRvbWl6ZXIuaXNNb2NrUmFuZG9tKSB7XG4gICAgICByYW5kb21Qb3NpdGlvbiA9IHJhbmRvbWl6ZXIuY2FsbFJhbmRvbWl6ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmFuZG9tWCA9IHJhbmRvbWl6ZXIoKTtcbiAgICAgIGNvbnN0IHJhbmRvbVkgPSByYW5kb21pemVyKCk7XG4gICAgICByYW5kb21Qb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHJhbmRvbVgsIHJhbmRvbVkpO1xuICAgIH1cblxuICAgIHJldHVybiByYW5kb21Qb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCByZWNpZXZlUmFuZG9tQXR0YWNrID0gKHJhbmRvbWl6ZXIpID0+IHtcbiAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IGNyZWF0ZVJhbmRvbUNvb3JkcyhyYW5kb21pemVyKTtcbiAgICBjb25zdCBoYXNIaXQgPSBoYXNIaXRTaGlwKHJhbmRvbVBvc2l0aW9uLCBoaXRzLCBtaXNzZXMpO1xuXG4gICAgaWYgKGhhc0hpdCkgcmV0dXJuIHJlY2lldmVSYW5kb21BdHRhY2socmFuZG9taXplcik7XG5cbiAgICByZXR1cm4gcmVjaWV2ZUF0dGFjayhyYW5kb21Qb3NpdGlvbik7XG4gIH07XG5cbiAgY29uc3QgaXNBbGxTdW5rID0gKCkgPT4ge1xuICAgIGxldCBoYXNTdW5rZWQgPSB0cnVlO1xuICAgIGN1cnJlbnRTaGlwcy5mb3JFYWNoKChzaGlwcykgPT4ge1xuICAgICAgaWYgKCFzaGlwLmlzU3VuayhzaGlwcykpIHtcbiAgICAgICAgaGFzU3Vua2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaGFzU3Vua2VkO1xuICB9O1xuXG4gIGNvbnN0IGdldFZhbHVlcyA9ICgpID0+ICh7XG4gICAgY3VycmVudFNoaXBzLFxuICAgIGhpdHMsXG4gICAgbWlzc2VzLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGF0dGFja1NoaXAsXG4gICAgcmVjaWV2ZUF0dGFjayxcbiAgICBpc0FsbFN1bmssXG4gICAgcGxhY2VTaGlwc1JhbmRvbWx5LFxuICAgIHBsYXllclBsYWNlU2hpcCxcbiAgICBwbGFjZUFsbFNoaXBzLFxuICAgIHJhbmRvbWl6ZSxcbiAgICByZWNpZXZlUmFuZG9tQXR0YWNrLFxuICAgIHJhbmRvbUF4aXMsXG4gICAgZ2V0VmFsdWVzLFxuICAgIGdldFR5cGVPZlBsYWNlZFNoaXAsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5cbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uLmpzJztcblxuY29uc3QgR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBwbGF5ZXJDaGVja0JvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuXG4gIGNvbnN0IHNoaXAgPSBTaGlwKCk7XG5cbiAgY29uc3QgcmFuZG9taXplciA9IGNvbXB1dGVyQm9hcmQucmFuZG9taXplO1xuICBjb25zdCByYW5kb21BeGllcyA9IGNvbXB1dGVyQm9hcmQucmFuZG9tQXhpcztcblxuICBjb25zdCBjaGVja1NldHVwID0gKHBsYXllckNoZWNrU2hpcHMpID0+IHtcbiAgICBpZiAocGxheWVyQ2hlY2tTaGlwcy5sZW5ndGggPT09IDUpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBzZXR1cEdhbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQ2hlY2tWYWx1ZXMgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpO1xuXG4gICAgaWYgKCFjaGVja1NldHVwKHBsYXllckNoZWNrVmFsdWVzLmN1cnJlbnRTaGlwcykpIHJldHVybiBmYWxzZTtcblxuICAgIHBsYXllckJvYXJkLnBsYWNlQWxsU2hpcHMocGxheWVyQ2hlY2tWYWx1ZXMuY3VycmVudFNoaXBzKTtcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcHNSYW5kb21seShyYW5kb21pemVyLCByYW5kb21BeGllcyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrQm9hdHMgPSAoY29vcmRzKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQ2hlY2tWYWx1ZXMgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpO1xuXG4gICAgaWYgKCFjaGVja1NldHVwKHBsYXllckNoZWNrVmFsdWVzLmN1cnJlbnRTaGlwcykpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IGN1cnJlbnRBdHRhY2sgPSBjb21wdXRlckJvYXJkLnJlY2lldmVBdHRhY2soY29vcmRzKTtcbiAgICBpZiAoIWN1cnJlbnRBdHRhY2spIHJldHVybiBmYWxzZTtcbiAgICBwbGF5ZXJCb2FyZC5yZWNpZXZlUmFuZG9tQXR0YWNrKHJhbmRvbWl6ZXIpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBTaGlwID0gKGxvY2F0aW9uLCBheGlzKSA9PlxuICAgIHBsYXllckNoZWNrQm9hcmQucGxheWVyUGxhY2VTaGlwKGxvY2F0aW9uLCBheGlzKTtcblxuICBjb25zdCBnYW1lSXNPdmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllckNoZWNrU2hpcHMgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpLmN1cnJlbnRTaGlwcztcbiAgICBpZiAoIWNoZWNrU2V0dXAocGxheWVyQ2hlY2tTaGlwcykpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChjb21wdXRlckJvYXJkLmlzQWxsU3VuaygpKSB7XG4gICAgICByZXR1cm4geyBtZXNzYWdlOiAnWW91IFdvbicsIGdhbWVGaW5pc2hlZDogdHJ1ZSB9O1xuICAgIH1cblxuICAgIGlmIChwbGF5ZXJCb2FyZC5pc0FsbFN1bmsoKSkge1xuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ1lvdSBMb3N0JywgZ2FtZUZpbmlzaGVkOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiB7IGdhbWVGaW5pc2hlZDogZmFsc2UgfTtcbiAgfTtcblxuICBjb25zdCBhcnJhbmdlQmxvY2tzID0gKG1vdXNlUG9zaXRpb24sIGN1cnJlbnRSb3RhdGlvbikgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm9hcmRPYmplY3RzID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIGNvbnN0IHNoaXBUeXBlT2JqZWN0ID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRUeXBlT2ZQbGFjZWRTaGlwKFxuICAgICAgY2hlY2tib2FyZE9iamVjdHMuY3VycmVudFNoaXBzXG4gICAgKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHNoaXBUeXBlT2JqZWN0LCAndGhlIHNoaXAgdHlwZSBvYmplY3QnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhtb3VzZVBvc2l0aW9uLCAndGhlIG1vdXNlIHBvc2l0aW9uJyk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFJvdGF0aW9uLCAndGhlIGN1cnJlbnQgcm90YXRpb24nKTtcblxuICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgbW91c2VQb3NpdGlvbixcbiAgICAgIHNoaXBUeXBlT2JqZWN0LnNoaXBMZW5ndGgsXG4gICAgICBjdXJyZW50Um90YXRpb25cbiAgICApO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRTaGlwLCAndGhlIG1vc3QgdXAgdG8gZGF0ZSBzaGlwcycpO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRTaGlwO1xuICB9O1xuXG4gIGNvbnN0IGdldEdhbWVWYWx1ZXMgPSAoKSA9PiAoe1xuICAgIHBsYXllckJvYXJkLFxuICAgIGNvbXB1dGVyQm9hcmQsXG4gICAgcGxheWVyQ2hlY2tCb2FyZCxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjaGVja1NldHVwLFxuICAgIGF0dGFja0JvYXRzLFxuICAgIHNldHVwR2FtZSxcbiAgICBnYW1lSXNPdmVyLFxuICAgIHNldHVwU2hpcCxcbiAgICBnZXRHYW1lVmFsdWVzLFxuICAgIGFycmFuZ2VCbG9ja3MsXG4gIH07XG59O1xuXG5jb25zdCBhY3RpdmVHYW1lID0gR2FtZSgpO1xuXG5leHBvcnQgeyBHYW1lLCBhY3RpdmVHYW1lIH07XG4iLCJjb25zdCBQb3NpdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgY3JlYXRlUG9zaXRpb24gPSAoeENvb3JkLCB5Q29vcmQpID0+ICh7IHhDb29yZCwgeUNvb3JkIH0pO1xuXG4gIGNvbnN0IGNoZWNrT3V0T2ZCb3VuY2UgPSAobmV3UG9zaXRpb24pID0+IHtcbiAgICBpZiAobmV3UG9zaXRpb24ueENvb3JkID4gOSB8fCBuZXdQb3NpdGlvbi55Q29vcmQgPiA5KSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAobmV3UG9zaXRpb24ueENvb3JkIDwgMCB8fCBuZXdQb3NpdGlvbi55Q29vcmQgPCAwKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYWRkUG9zaXRpb24gPSAocG9zaXRpb24xLCBwb3NpdGlvbjIpID0+IHtcbiAgICBpZiAocG9zaXRpb24xID09PSBmYWxzZSB8fCBwb3NpdGlvbjIgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGNyZWF0ZVBvc2l0aW9uKHBvc2l0aW9uMS54Q29vcmQsIHBvc2l0aW9uMS55Q29vcmQpO1xuICAgIG5ld1Bvc2l0aW9uLnhDb29yZCArPSBwb3NpdGlvbjIueENvb3JkO1xuICAgIG5ld1Bvc2l0aW9uLnlDb29yZCArPSBwb3NpdGlvbjIueUNvb3JkO1xuXG4gICAgaWYgKGNoZWNrT3V0T2ZCb3VuY2UobmV3UG9zaXRpb24pKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gbmV3UG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgbXVsdGlwbHlQb3NpdGlvbiA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMikgPT4ge1xuICAgIGlmIChwb3NpdGlvbjEgPT09IGZhbHNlIHx8IHBvc2l0aW9uMiA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gY3JlYXRlUG9zaXRpb24ocG9zaXRpb24xLnhDb29yZCwgcG9zaXRpb24xLnlDb29yZCk7XG4gICAgbmV3UG9zaXRpb24ueENvb3JkICo9IHBvc2l0aW9uMi54Q29vcmQ7XG4gICAgbmV3UG9zaXRpb24ueUNvb3JkICo9IHBvc2l0aW9uMi55Q29vcmQ7XG5cbiAgICBpZiAoY2hlY2tPdXRPZkJvdW5jZShuZXdQb3NpdGlvbikpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBuZXdQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yLCBheGlzKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uMVtheGlzXSA9PT0gcG9zaXRpb24yW2F4aXNdICsgMSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHBvc2l0aW9uMVtheGlzXSA9PT0gcG9zaXRpb24yW2F4aXNdKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAocG9zaXRpb24xW2F4aXNdID09PSBwb3NpdGlvbjJbYXhpc10gLSAxKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgY29tcGFyZVBvc2l0aW9uID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yKSA9PiB7XG4gICAgaWYgKCFjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsKHBvc2l0aW9uMSwgcG9zaXRpb24yLCAneENvb3JkJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsKHBvc2l0aW9uMSwgcG9zaXRpb24yLCAneUNvb3JkJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVQb3NpdGlvbixcbiAgICBhZGRQb3NpdGlvbixcbiAgICBtdWx0aXBseVBvc2l0aW9uLFxuICAgIGNvbXBhcmVQb3NpdGlvbixcbiAgICBjaGVja091dE9mQm91bmNlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zaXRpb247XG4iLCJjb25zdCBQcmFjdGljYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNvcHlBcnJheSA9IChhcnJheSkgPT4ge1xuICAgIGNvbnN0IG5ld0FycmF5ID0gW107XG5cbiAgICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBuZXdBcnJheS5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld0FycmF5O1xuICB9O1xuXG4gIGNvbnN0IGlzT2JqZWN0ID0gKGN1cnJlbnRPYmplY3QpID0+IHtcbiAgICBpZiAodHlwZW9mIGN1cnJlbnRPYmplY3QgPT09ICdvYmplY3QnICYmIGN1cnJlbnRPYmplY3QgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tPYmplY3QgPSAob2JqZWN0MSwgb2JqZWN0MikgPT4ge1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IHNlY29uZEluZGV4ID0gMDtcblxuICAgIGxldCBvYmplY3RJc0VxdWFsID0gdHJ1ZTtcblxuICAgIGNvbnN0IGN1cnJlbnRPYmplY3QgPSBvYmplY3QxO1xuICAgIGNvbnN0IGN1cnJlbnRPYmplY3QyID0gb2JqZWN0MjtcblxuICAgIGNvbnN0IGN1cnJlbnRPYmplY3RWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGN1cnJlbnRPYmplY3QpO1xuICAgIGNvbnN0IGN1cnJlbnRPYmplY3QyVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50T2JqZWN0Mik7XG5cbiAgICBjb25zdCBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMoY3VycmVudE9iamVjdCk7XG4gICAgY29uc3Qgb2JqZWN0S2V5czIgPSBPYmplY3Qua2V5cyhjdXJyZW50T2JqZWN0Mik7XG5cbiAgICBvYmplY3RLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGtleSAhPT0gb2JqZWN0S2V5czJbaW5kZXhdKSBvYmplY3RJc0VxdWFsID0gZmFsc2U7XG4gICAgICBpbmRleCArPSAxO1xuICAgIH0pO1xuXG4gICAgaWYgKCFvYmplY3RJc0VxdWFsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG9iamVjdEtleXMubGVuZ3RoICE9PSBvYmplY3RLZXlzMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRPYmplY3QsICd0aGUgY3VycmVudCBvYmplY3QnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50T2JqZWN0MiwgJ3RoZSBjdXJyZW50IG9iamVjdDInKTtcblxuICAgIGN1cnJlbnRPYmplY3RWYWx1ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgaXRlbTIgPSBjdXJyZW50T2JqZWN0MlZhbHVlc1tzZWNvbmRJbmRleF07XG5cbiAgICAgIGlmIChpc09iamVjdChpdGVtKSAmJiBpc09iamVjdChpdGVtMikpIHtcbiAgICAgICAgY29uc3QgY2hlY2tPYmplY3RCb29sID0gY2hlY2tPYmplY3QoaXRlbSwgaXRlbTIpO1xuXG4gICAgICAgIGlmICghY2hlY2tPYmplY3RCb29sKSBvYmplY3RJc0VxdWFsID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0gIT09IGl0ZW0yKSB7XG4gICAgICAgIG9iamVjdElzRXF1YWwgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgc2Vjb25kSW5kZXggKz0gMTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmplY3RJc0VxdWFsO1xuICB9O1xuXG4gIHJldHVybiB7IGNvcHlBcnJheSwgY2hlY2tPYmplY3QgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByYWN0aWNhbDtcbiIsImltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uLmpzJztcblxuY29uc3QgU2hpcCA9ICgpID0+IHtcbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuXG4gIGNvbnN0IGdldEFkZGVkUG9zaXRpb24gPSAoYXhpcykgPT4ge1xuICAgIGxldCBhZGRlZFBvc2l0aW9uO1xuXG4gICAgaWYgKGF4aXMgPT09ICd4JykgYWRkZWRQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKDEsIDApO1xuICAgIGVsc2UgYWRkZWRQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKDAsIDEpO1xuXG4gICAgcmV0dXJuIGFkZGVkUG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlU2hpcCA9IChwb3NpdGlvbjEsIGxlbmd0aDEsIGF4aXMpID0+IHtcbiAgICBpZiAobGVuZ3RoMSA9PT0gMCB8fCBsZW5ndGgxID4gNSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwb3NpdGlvbi5jaGVja091dE9mQm91bmNlKHBvc2l0aW9uMSkpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHBvcHVsYXRlU2hpcHMgPSAoY3VycmVudFBvc2l0aW9uLCBsYXRlc3RMZW5ndGgsIGxhdGVzdEFycmF5KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50QXJyYXkgPSBsYXRlc3RBcnJheTtcbiAgICAgIGxldCBuZXdQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbjtcblxuICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbiA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmIChsYXRlc3RMZW5ndGggPT09IDApIHJldHVybiBjdXJyZW50QXJyYXk7XG4gICAgICBpZiAobGF0ZXN0TGVuZ3RoID09PSBsZW5ndGgxKSB7XG4gICAgICAgIGN1cnJlbnRBcnJheS5wdXNoKGN1cnJlbnRQb3NpdGlvbik7XG4gICAgICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKGN1cnJlbnRQb3NpdGlvbiwgbGF0ZXN0TGVuZ3RoIC0gMSwgY3VycmVudEFycmF5KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFkZGVkUG9zaXRpb24gPSBnZXRBZGRlZFBvc2l0aW9uKGF4aXMpO1xuICAgICAgbmV3UG9zaXRpb24gPSBwb3NpdGlvbi5hZGRQb3NpdGlvbihuZXdQb3NpdGlvbiwgYWRkZWRQb3NpdGlvbik7XG5cbiAgICAgIGlmICghbmV3UG9zaXRpb24pIHJldHVybiBuZXdQb3NpdGlvbjtcbiAgICAgIGN1cnJlbnRBcnJheS5wdXNoKG5ld1Bvc2l0aW9uKTtcblxuICAgICAgY29uc3QgYXJyYXlMZW5ndGggPSBjdXJyZW50QXJyYXkubGVuZ3RoIC0gMTtcblxuICAgICAgcmV0dXJuIHBvcHVsYXRlU2hpcHMoXG4gICAgICAgIGN1cnJlbnRBcnJheVthcnJheUxlbmd0aF0sXG4gICAgICAgIGxhdGVzdExlbmd0aCAtIDEsXG4gICAgICAgIGN1cnJlbnRBcnJheVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHBvcHVsYXRlU2hpcHMocG9zaXRpb24xLCBsZW5ndGgxLCBbXSwgZmFsc2UpO1xuICB9O1xuXG5cblxuICBjb25zdCBpc1N1bmsgPSAoc2hpcEFycmF5KSA9PiB7XG4gICAgaWYgKHNoaXBBcnJheS5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBoaXQgPSAocG9zaXRpb25zQXJyYXksIHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgaGl0QXJyYXkgPSBwb3NpdGlvbnNBcnJheS5maWx0ZXIoKHBvcykgPT4ge1xuICAgICAgaWYgKHBvcy54Q29vcmQgPT09IHBvc2l0aW9uLnhDb29yZCAmJiBwb3MueUNvb3JkID09PSBwb3NpdGlvbi55Q29vcmQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgY29uc3Qgc2hpcEFycmF5cyA9IHBvc2l0aW9uc0FycmF5LmZpbHRlcigocG9zKSA9PiB7XG4gICAgICBpZiAocG9zLnhDb29yZCA9PT0gcG9zaXRpb24ueENvb3JkICYmIHBvcy55Q29vcmQgPT09IHBvc2l0aW9uLnlDb29yZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IGhpdEFycmF5LCBzaGlwQXJyYXlzIH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVTaGlwLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0IERvbSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9tYWluLmpzJztcbi8vIHlvdSB3aW4gIPCfmINcblxuLy8geW91IGxvc3Qg8J+YolxuXG5jb25zdCBVaSA9ICgpID0+IHtcbiAgY29uc3QgZG9tID0gRG9tKCk7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcblxuICBjb25zdCByZW5kZXJTcGVlZCA9IDE7XG5cbiAgbGV0IGJsb2NrU2l6ZSA9IDQyO1xuXG4gIGxldCBhY3RpdmVHYW1lO1xuXG4gIGxldCBwbGFjZWRTaGlwID0gZmFsc2U7XG4gIGxldCBheGlzID0gJ3knO1xuXG4gIGxldCBtb3VzZUJsb2NrTG9jYXRpb24gPSBmYWxzZTtcblxuICBjb25zdCBjcmVhdGVEb21FbGVtZW50ID0gKGVsZW1lbnROYW1lKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcblxuICBjb25zdCBnZXRNb3VzZVBvc2l0aW9uID0gKG9mZnNldFgsIG9mZnNldFkpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhvZmZzZXRYLCBvZmZzZXRZLCAnb2Zmc2V0IHggYW5kIG9mZnNldCB5Jyk7XG5cbiAgICBjb25zdCB4Q29vcmQgPSBNYXRoLmZsb29yKG9mZnNldFggLyBibG9ja1NpemUpO1xuICAgIGNvbnN0IHlDb29yZCA9IE1hdGguZmxvb3Iob2Zmc2V0WSAvIGJsb2NrU2l6ZSk7XG5cbiAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oeENvb3JkLCB5Q29vcmQpO1xuXG4gICAgY29uc3Qgb3V0T2ZCb3VuY2UgPSBwb3NpdGlvbi5jaGVja091dE9mQm91bmNlKG1vdXNlUG9zaXRpb24pO1xuXG4gICAgaWYgKG91dE9mQm91bmNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhtb3VzZVBvc2l0aW9uLCAndGhlIGN1cnJlbnQgbW91c2UgcG9zaXRpb24nKTtcblxuICAgIHJldHVybiBtb3VzZVBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGZpbmRNb3VzZVBvc2l0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY3VycmVudE1vdXNlUG9zaXRpb24gPSBnZXRNb3VzZVBvc2l0aW9uKGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuXG4gICAgbW91c2VCbG9ja0xvY2F0aW9uID0gY3VycmVudE1vdXNlUG9zaXRpb247XG5cbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50TW91c2VQb3NpdGlvbiwgJ3RoZSBjdXJyZW50IG1vdXNlIHBvc2l0aW9uJyk7XG4gIH07XG5cbiAgLy8gd290ayBvbiB0aGlzIGZ1bmN0aW9uXG4gIGNvbnN0IGZpbmRUb3VjaFBvc2l0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB0b3VjaE9mZnNldFggPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFggLSByZWN0Lng7XG4gICAgY29uc3QgdG91Y2hPZmZzZXRZID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZIC0gcmVjdC55O1xuXG4gICAgY29uc3QgdG91Y2hQb3NpdGlvbiA9IGdldE1vdXNlUG9zaXRpb24odG91Y2hPZmZzZXRYLCB0b3VjaE9mZnNldFkpO1xuICAgIG1vdXNlQmxvY2tMb2NhdGlvbiA9IHRvdWNoUG9zaXRpb247XG5cbiAgICBjb25zb2xlLmxvZyhtb3VzZUJsb2NrTG9jYXRpb24sICd0aGUgbW91c2UgYmxvY2sgbG9jYXRpb24nKTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgLy8gYmxvY2sgc2l6ZSBtYXRjaGVzIHRoZSBzaXplIGdyaWRzaXplIG9mIHRoZSBtZWRpYSBxdWVyeSBkaXZpZGVkIGJ5IDEwXG4gIGNvbnN0IGNoYW5nZUJsb2NrU2l6ZSA9IChtYXRjaE1lZGlhKSA9PiB7XG4gICAgYmxvY2tTaXplID0gNDI7XG4gICAgaWYgKG1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDk2MHB4KScpLm1hdGNoZXMpIGJsb2NrU2l6ZSA9IDMwO1xuICAgIGlmIChtYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA0NzBweCknKS5tYXRjaGVzKSBibG9ja1NpemUgPSAyMTtcbiAgICBpZiAobWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMzIwcHgpJykubWF0Y2hlcykgYmxvY2tTaXplID0gMTU7XG4gICAgcmV0dXJuIGJsb2NrU2l6ZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDMyMHB4KScpLCAndGhlIGN1cnJlbnQgbWF0Y2ggbWVkaWEnKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVCbG9ja0VsZW1lbnQgPSAoYmxvY2tDbGFzcywgY3JlYXRlQmxvY2spID0+IHtcbiAgICBsZXQgbGF0ZXN0Q2xhc3MgPSBibG9ja0NsYXNzO1xuXG4gICAgaWYgKFxuICAgICAgbGF0ZXN0Q2xhc3MgIT09ICdoaXRCbG9jaycgJiZcbiAgICAgIGxhdGVzdENsYXNzICE9PSAnbWlzc0Jsb2NrJyAmJlxuICAgICAgbGF0ZXN0Q2xhc3MgIT09ICdjdXJzb3JCbG9jaydcbiAgICApIHtcbiAgICAgIGxhdGVzdENsYXNzID0gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgYmxvY2tFbGVtZW50ID0gY3JlYXRlQmxvY2soJ2RpdicpO1xuICAgIGJsb2NrRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdibG9jaycpO1xuICAgIGlmIChsYXRlc3RDbGFzcyAhPT0gJycpIGJsb2NrRWxlbWVudC5jbGFzc0xpc3QuYWRkKGxhdGVzdENsYXNzKTtcblxuICAgIHJldHVybiBibG9ja0VsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgZGlzYWJsZVN0YXJ0ZXJVaSA9ICgpID0+IHRydWU7XG5cbiAgLy8gY29uc3QgcmVuZGVyU2VsZWN0aW9uQmxvY2tzID0gKG1vdXNlUG9zaXRpb24sIGxhdGVzdEJsb2NrU2l6ZSkgPT4ge1xuICAvLyAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAvLyAgIGNvbnN0IGN1cnJlbnRTbmFrZUJsb2NrID0gY3JlYXRlQmxvY2tFbGVtZW50KCk7XG4gIC8vICAgY29uc3QgcmVhbFBvc2l0aW9uWCA9IE1hdGguZmxvb3IobW91c2VQb3NpdGlvbi54Q29vcmQgKiBsYXRlc3RCbG9ja1NpemUpO1xuICAvLyAgIGNvbnN0IHJlYWxQb3NpdGlvblkgPSBNYXRoLmZsb29yKG1vdXNlUG9zaXRpb24ueUNvb3JkICogbGF0ZXN0QmxvY2tTaXplKTtcblxuICAvLyAgIGNvbnNvbGUubG9nKG1vdXNlUG9zaXRpb24sICdUSEUgQ1VSUkVOVCBNT1VTRSBQT1NJVElPTicpO1xuXG4gIC8vICAgY29uc29sZS5sb2cocmVhbFBvc2l0aW9uWCwgJ3RoZSByZWFsIHBvc2l0aW9uIHgnKTtcbiAgLy8gICBjb25zb2xlLmxvZyhyZWFsUG9zaXRpb25ZLCAndGhlIHJlYWwgcG9zaXRpb24geScpO1xuXG4gIC8vICAgY3VycmVudFNuYWtlQmxvY2suc3R5bGUubGVmdCA9IGAke3JlYWxQb3NpdGlvblh9cHhgO1xuICAvLyAgIGN1cnJlbnRTbmFrZUJsb2NrLnN0eWxlLnRvcCA9IGAke3JlYWxQb3NpdGlvbll9cHhgO1xuXG4gIC8vICAgZWxlbWVudC5zaGlwR3JpZC5hcHBlbmRDaGlsZChjdXJyZW50U25ha2VCbG9jayk7XG4gIC8vIH07XG5cbiAgY29uc3QgY3JlYXRlU2hpcEJsb2NrID0gKHNoaXBQb3NpdGlvbiwgbGF0ZXN0QmxvY2tTaXplLCBzaGlwVHlwZSkgPT4ge1xuICAgIGNvbnN0IHNoaXBCbG9jayA9IGNyZWF0ZUJsb2NrRWxlbWVudChzaGlwVHlwZSwgY3JlYXRlRG9tRWxlbWVudCk7XG5cbiAgICBjb25zdCByZWFsUG9zaXRpb25YID0gTWF0aC5mbG9vcihzaGlwUG9zaXRpb24ueENvb3JkICogbGF0ZXN0QmxvY2tTaXplKTtcbiAgICBjb25zdCByZWFsUG9zaXRpb25ZID0gTWF0aC5mbG9vcihzaGlwUG9zaXRpb24ueUNvb3JkICogbGF0ZXN0QmxvY2tTaXplKTtcbiAgICBzaGlwQmxvY2suc3R5bGUubGVmdCA9IGAke3JlYWxQb3NpdGlvblh9cHhgO1xuICAgIHNoaXBCbG9jay5zdHlsZS50b3AgPSBgJHtyZWFsUG9zaXRpb25ZfXB4YDtcblxuICAgIHJldHVybiBzaGlwQmxvY2s7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQWxyZWFkeVBsYWNlZFNoaXBzID0gKHNoaXBHcmlkLCBsYXRlc3RCbG9ja1NpemUpID0+IHtcbiAgICBjb25zdCBnYW1lVmFsdWVzID0gYWN0aXZlR2FtZS5nZXRHYW1lVmFsdWVzKCk7XG4gICAgY29uc3QgY2hlY2tCb2FyZFNoaXBzID1cbiAgICAgIGdhbWVWYWx1ZXMucGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKS5jdXJyZW50U2hpcHM7XG5cbiAgICBjaGVja0JvYXJkU2hpcHMuZm9yRWFjaCgocGxheWVyQ2hlY2tTaGlwcykgPT4ge1xuICAgICAgcGxheWVyQ2hlY2tTaGlwcy5mb3JFYWNoKChib2F0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBCbG9jayA9IGNyZWF0ZVNoaXBCbG9jayhib2F0LCBsYXRlc3RCbG9ja1NpemUpO1xuICAgICAgICBzaGlwR3JpZC5hcHBlbmRDaGlsZChzaGlwQmxvY2spO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUGxhY2VkU2hpcCA9IChsYXRlc3RCbG9ja1NpemUpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgY29uc3QgeyBzaGlwR3JpZCB9ID0gZWxlbWVudDtcblxuICAgIGlmICghcGxhY2VkU2hpcCkgcmV0dXJuIHBsYWNlZFNoaXA7XG5cbiAgICBzaGlwR3JpZC5pbm5lckhUTUwgPSAnJztcblxuICAgIHBsYWNlZFNoaXAuZm9yRWFjaCgoc2hpcFBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzaGlwQmxvY2sgPSBjcmVhdGVTaGlwQmxvY2soc2hpcFBvc2l0aW9uLCBsYXRlc3RCbG9ja1NpemUpO1xuICAgICAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQoc2hpcEJsb2NrKTtcbiAgICB9KTtcblxuICAgIHJlbmRlckFscmVhZHlQbGFjZWRTaGlwcyhzaGlwR3JpZCwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VBeGlzID0gKCkgPT4ge1xuICAgIGlmIChheGlzID09PSAneScpIGF4aXMgPSAneCc7XG4gICAgZWxzZSBheGlzID0gJ3knO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVTaGlwQnlEaXJlY3Rpb24gPSAobW91c2VMb2NhdGlvbiwgY3VycmVudFNoaXAsIGN1cnJlbnRBeGlzKSA9PiB7XG4gICAgbGV0IGxhdGVzdFNoaXAgPSBmYWxzZTtcblxuICAgIGlmIChwb3NpdGlvbi5jaGVja091dE9mQm91bmNlKGN1cnJlbnRTaGlwWzBdKSkgcmV0dXJuIGxhdGVzdFNoaXA7XG5cbiAgICBjb25zdCBuZXdYUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihcbiAgICAgIG1vdXNlTG9jYXRpb24ueENvb3JkLFxuICAgICAgMFxuICAgICkueENvb3JkO1xuXG4gICAgY29uc3QgbmV3WVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICAwLFxuICAgICAgbW91c2VMb2NhdGlvbi55Q29vcmRcbiAgICApLnlDb29yZDtcblxuICAgIGxldCBuZXdTaGlwUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihcbiAgICAgIG5ld1hQb3NpdGlvbixcbiAgICAgIGN1cnJlbnRTaGlwWzBdLnlDb29yZFxuICAgICk7XG5cbiAgICBpZiAoY3VycmVudEF4aXMgPT09ICd4Jykge1xuICAgICAgbmV3U2hpcFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICAgIGN1cnJlbnRTaGlwWzBdLnhDb29yZCxcbiAgICAgICAgbmV3WVBvc2l0aW9uXG4gICAgICApO1xuICAgIH1cblxuICAgIGxhdGVzdFNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAoXG4gICAgICBuZXdTaGlwUG9zaXRpb24sXG4gICAgICBjdXJyZW50U2hpcC5sZW5ndGgsXG4gICAgICBjdXJyZW50QXhpc1xuICAgICk7XG5cbiAgICByZXR1cm4gbGF0ZXN0U2hpcDtcbiAgfTtcblxuICBjb25zdCBwbGFjZVBsYXllclNoaXAgPSAobGF0ZXN0U2hpcCwgbGF0ZXN0QXhpcywgbGF0ZXN0R2FtZSkgPT4ge1xuICAgIGlmIChsYXRlc3RTaGlwKSBsYXRlc3RHYW1lLnNldHVwU2hpcChsYXRlc3RTaGlwWzBdLCBsYXRlc3RBeGlzKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VQbGF5ZXJTaGlwRXZlbnQgPSAoKSA9PiB7XG4gICAgcGxhY2VQbGF5ZXJTaGlwKHBsYWNlZFNoaXAsIGF4aXMsIGFjdGl2ZUdhbWUpO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBlbGVtZW50LmNvbXB1dGVyR3JpZC5pbm5lckhUTUwgPSAnJztcbiAgICBlbGVtZW50LnBsYXllckdyaWQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBlbGVtZW50LnNoaXBTZWxlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBlbGVtZW50LmdhbWVGaW5pc2hlZFNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbGVtZW50LmdhbWVPdmVyVGV4dC5pbm5lckhUTUwgPSAnJztcblxuICAgIGFjdGl2YXRlVWkoKTtcbiAgfTtcblxuICBjb25zdCBhZGRVaUV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgZWxlbWVudC5zaGlwTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmluZE1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZpbmRUb3VjaFBvc2l0aW9uKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcEV2ZW50KTtcblxuICAgIGVsZW1lbnQucm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQXhpcyk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVWlFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgZWxlbWVudC5zaGlwTGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmluZE1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZpbmRUb3VjaFBvc2l0aW9uKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcEV2ZW50KTtcblxuICAgIGVsZW1lbnQucm90YXRlQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQXhpcyk7XG4gIH07XG5cbiAgY29uc3QgYWRkRW5kaW5nRXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICBlbGVtZW50LnJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVFbmRpbmdFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuICAgIGVsZW1lbnQucmVzdGFydC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGVsZW1lbnQucmVzdGFydCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlR2FtZUV2ZW50cyA9ICgpID0+IHtcbiAgICBhZGRFbmRpbmdFdmVudHMoKTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgY2hhbmdlTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudFxuICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGNoYW5nZSlcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmaW5kTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGF0dGFja1NoaXBzKTtcbiAgfTtcblxuICBjb25zdCBnZXRNZXNzYWdlID0gKCkgPT4ge307XG5cbiAgY29uc3QgYWRkR2FtZUV2ZW50cyA9ICgpID0+IHtcbiAgICByZW1vdmVVaUV2ZW50cygpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgY2hhbmdlTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5jb21wdXRlckdyaWRMYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmaW5kTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5jb21wdXRlckdyaWRMYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGF0dGFja1NoaXBzKTtcbiAgfTtcblxuICBjb25zdCBjaGVja01vdXNlVGFyZ2V0ID0gKGVsZW1lbnRDbGFzcykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnRDbGFzcywgJ3RoZSBlbGVtZW50IGNhbHNzJyk7XG4gICAgaWYgKGVsZW1lbnRDbGFzcyAhPT0gJ2dyaWRPdmVybGF5IGNvbXB1dGVyR3JpZE92ZXJsYXknKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlTW91c2VQb3NpdGlvbiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlVGFyZ2V0ID0gY2hlY2tNb3VzZVRhcmdldChldmVudC50YXJnZXQuY2xhc3NOYW1lKTtcbiAgICBpZiAoIW1vdXNlVGFyZ2V0KSBtb3VzZUJsb2NrTG9jYXRpb24gPSBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tTaGlwcyA9ICgpID0+IHtcbiAgICBhY3RpdmVHYW1lLmF0dGFja0JvYXRzKG1vdXNlQmxvY2tMb2NhdGlvbik7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU2hpcHMgPSAoc2hpcHMsIGdyaWQsIGxhdGVzdEJsb2NrU2l6ZSkgPT4ge1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXBHcm91cCkgPT4ge1xuICAgICAgc2hpcEdyb3VwLmZvckVhY2goKGJvYXQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcEVsZW1lbnQgPSBjcmVhdGVTaGlwQmxvY2soYm9hdCwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChzaGlwRWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJIaXRzID0gKHNoaXBzLCBzaGlwVHlwZSwgZ3JpZCwgbGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcFBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzaGlwRWxlbWVudCA9IGNyZWF0ZVNoaXBCbG9jayhcbiAgICAgICAgc2hpcFBvc2l0aW9uLFxuICAgICAgICBsYXRlc3RCbG9ja1NpemUsXG4gICAgICAgIHNoaXBUeXBlXG4gICAgICApO1xuICAgICAgZ3JpZC5hcHBlbmRDaGlsZChzaGlwRWxlbWVudCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlQ3Vyc29yRWxlbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbXB1dGVyR3JpZCB9ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBjb25zb2xlLmxvZyhjb21wdXRlckdyaWQuaW5uZXJIVE1MKTtcbiAgfTtcbiAgY29uc3QgcmVuZGVyR3JpZHMgPSAoYmxvY2tTaXplMiwgbW91c2VQb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGdhbWVWYWx1ZXMgPSBhY3RpdmVHYW1lLmdldEdhbWVWYWx1ZXMoKTtcblxuICAgIGNvbnN0IHsgcGxheWVyR3JpZCB9ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgY29uc3QgeyBjb21wdXRlckdyaWQgfSA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgcGxheWVyR3JpZC5pbm5lckhUTUwgPSAnJztcbiAgICBjb21wdXRlckdyaWQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBwbGF5ZXJCb2FyZFZhbHVlcyA9IGdhbWVWYWx1ZXMucGxheWVyQm9hcmQuZ2V0VmFsdWVzKCk7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZFZhbHVlcyA9IGdhbWVWYWx1ZXMuY29tcHV0ZXJCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHBsYXllckJvYXJkVmFsdWVzLCAncGxheWVyQm9hcmRWYWx1ZXMnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjb21wdXRlckJvYXJkVmFsdWVzLCAnY29tcHV0ZXJCb2FyZFZhbHVlcycpO1xuICAgIC8vIGNvbnNvbGUubG9nKHBsYXllckJvYXJkVmFsdWVzLCAndGhlIHBsYXllciBib2FyZCB2YWx1ZXMnKTtcblxuICAgIHJlbmRlclNoaXBzKHBsYXllckJvYXJkVmFsdWVzLmN1cnJlbnRTaGlwcywgcGxheWVyR3JpZCwgYmxvY2tTaXplMik7XG4gICAgcmVuZGVySGl0cyhwbGF5ZXJCb2FyZFZhbHVlcy5oaXRzLCAnaGl0QmxvY2snLCBwbGF5ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgICByZW5kZXJIaXRzKHBsYXllckJvYXJkVmFsdWVzLm1pc3NlcywgJ21pc3NCbG9jaycsIHBsYXllckdyaWQsIGJsb2NrU2l6ZTIpO1xuXG4gICAgcmVuZGVyU2hpcHMoY29tcHV0ZXJCb2FyZFZhbHVlcy5jdXJyZW50U2hpcHMsIGNvbXB1dGVyR3JpZCwgYmxvY2tTaXplMik7XG5cbiAgICByZW5kZXJIaXRzKGNvbXB1dGVyQm9hcmRWYWx1ZXMuaGl0cywgJ2hpdEJsb2NrJywgY29tcHV0ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgICByZW5kZXJIaXRzKFxuICAgICAgY29tcHV0ZXJCb2FyZFZhbHVlcy5taXNzZXMsXG4gICAgICAnbWlzc0Jsb2NrJyxcbiAgICAgIGNvbXB1dGVyR3JpZCxcbiAgICAgIGJsb2NrU2l6ZTJcbiAgICApO1xuXG4gICAgY29uc3QgbW91c2VTaGlwID0gc2hpcC5jcmVhdGVTaGlwKG1vdXNlUG9zaXRpb24sIDEsICd4Jyk7XG5cbiAgICBpZiAobW91c2VTaGlwKSB7XG4gICAgICByZW5kZXJIaXRzKG1vdXNlU2hpcCwgJ2N1cnNvckJsb2NrJywgY29tcHV0ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU3RhdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2FtZVZhbHVlcyA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuXG4gICAgY29uc3QgeyBwbGF5ZXJIaXRzLCBwbGF5ZXJNaXNzZXMgfSA9IGRvbS5nZXRFbGVtZW50cygpO1xuICAgIGNvbnN0IHsgY29tcHV0ZXJIaXRzLCBjb21wdXRlck1pc3NlcyB9ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBjb25zdCBwbGF5ZXJCb2FyZFZhbHVlcyA9IGdhbWVWYWx1ZXMucGxheWVyQm9hcmQuZ2V0VmFsdWVzKCk7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZFZhbHVlcyA9IGdhbWVWYWx1ZXMuY29tcHV0ZXJCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIHBsYXllckhpdHMudGV4dENvbnRlbnQgPSBgSGl0cyAtICR7cGxheWVyQm9hcmRWYWx1ZXMuaGl0cy5sZW5ndGh9YDtcbiAgICBwbGF5ZXJNaXNzZXMudGV4dENvbnRlbnQgPSBgTWlzc2VzIC0gJHtwbGF5ZXJCb2FyZFZhbHVlcy5taXNzZXMubGVuZ3RofWA7XG5cbiAgICBjb21wdXRlckhpdHMudGV4dENvbnRlbnQgPSBgSGl0cyAtICR7Y29tcHV0ZXJCb2FyZFZhbHVlcy5oaXRzLmxlbmd0aH1gO1xuICAgIGNvbXB1dGVyTWlzc2VzLnRleHRDb250ZW50ID0gYE1pc3NlcyAtICR7Y29tcHV0ZXJCb2FyZFZhbHVlcy5taXNzZXMubGVuZ3RofWA7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyR2FtZSA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGdhbWVTdGF0dXMgPSBhY3RpdmVHYW1lLmdhbWVJc092ZXIoKTtcblxuICAgICAgY29uc3QgbGF0ZXN0QmxvY2tTaXplID0gY2hhbmdlQmxvY2tTaXplKHdpbmRvdy5tYXRjaE1lZGlhKTtcbiAgICAgIHJlbmRlckdyaWRzKGxhdGVzdEJsb2NrU2l6ZSwgbW91c2VCbG9ja0xvY2F0aW9uKTtcbiAgICAgIHJlbmRlclN0YXRzKCk7XG5cbiAgICAgIGlmICghZ2FtZVN0YXR1cy5nYW1lRmluaXNoZWQpIHJlbmRlckdhbWUobGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgIGVsc2UgcmVuZGVyR2FtZSgpO1xuICAgIH0sIHJlbmRlclNwZWVkKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgZWxlbWVudHMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGVsZW1lbnRzLnNlY3Rpb25TY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbGVtZW50cy5zaGlwR3JpZC5pbm5lckhUTUwgPSAnJztcbiAgfTtcblxuICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgcmVtb3ZlU2hpcFNlY3Rpb24oKTtcblxuICAgIGFjdGl2ZUdhbWUuc2V0dXBHYW1lKCk7XG4gICAgYWRkR2FtZUV2ZW50cygpO1xuXG4gICAgcmVuZGVyR2FtZSgpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclNlbGVjdGlvbkdyaWQgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBnYW1lVmFsdWUgPSBhY3RpdmVHYW1lLmdldEdhbWVWYWx1ZXMoKTtcbiAgICAgIGNvbnN0IGNoZWNrQm9hcmRTaGlwcyA9XG4gICAgICAgIGdhbWVWYWx1ZS5wbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpLmN1cnJlbnRTaGlwcztcblxuICAgICAgY2hhbmdlQmxvY2tTaXplKHdpbmRvdy5tYXRjaE1lZGlhKTtcblxuICAgICAgaWYgKGFjdGl2ZUdhbWUuY2hlY2tTZXR1cChnYW1lVmFsdWUucGxheWVyQ2hlY2tCb2FyZCkpIGRpc2FibGVTdGFydGVyVWkoKTtcblxuICAgICAgaWYgKG1vdXNlQmxvY2tMb2NhdGlvbikge1xuICAgICAgICBsZXQgY3VycmVudFNoaXAgPSBhY3RpdmVHYW1lLmFycmFuZ2VCbG9ja3MobW91c2VCbG9ja0xvY2F0aW9uLCBheGlzKTtcbiAgICAgICAgaWYgKCFjdXJyZW50U2hpcCAmJiBwbGFjZWRTaGlwKSB7XG4gICAgICAgICAgY3VycmVudFNoaXAgPSBtb3ZlU2hpcEJ5RGlyZWN0aW9uKFxuICAgICAgICAgICAgbW91c2VCbG9ja0xvY2F0aW9uLFxuICAgICAgICAgICAgcGxhY2VkU2hpcCxcbiAgICAgICAgICAgIGF4aXNcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRTaGlwKSBwbGFjZWRTaGlwID0gY3VycmVudFNoaXA7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cocGxhY2VkU2hpcCwgJ3RoZSBjdXJyZW50IHBsYWNlZCBzaGlwJyk7XG5cbiAgICAgICAgaWYgKHBsYWNlZFNoaXApIHJlbmRlclBsYWNlZFNoaXAoYmxvY2tTaXplKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhY3RpdmVHYW1lLmNoZWNrU2V0dXAoY2hlY2tCb2FyZFNoaXBzKSkgcmVuZGVyU2VsZWN0aW9uR3JpZCgpO1xuICAgICAgZWxzZSBzdGFydEdhbWUoYmxvY2tTaXplKTtcbiAgICB9LCByZW5kZXJTcGVlZCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsdWVzID0gKCkgPT4gKHtcbiAgICBibG9ja1NpemUsXG4gICAgcGxhY2VkU2hpcCxcbiAgICBheGlzLFxuICAgIG1vdXNlQmxvY2tMb2NhdGlvbixcbiAgfSk7XG5cbiAgY29uc3QgYWN0aXZhdGVVaSA9ICgpID0+IHtcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvbS5nZXRQYWdlKCk7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBwYWdlQ29udGVudDtcbiAgICBhY3RpdmVHYW1lID0gR2FtZSgpO1xuICAgIGFkZFVpRXZlbnRzKCk7XG4gICAgcmVtb3ZlRW5kaW5nRXZlbnRzKCk7XG4gICAgcmVuZGVyU2VsZWN0aW9uR3JpZCgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWN0aXZhdGVVaSxcbiAgICBjcmVhdGVCbG9ja0VsZW1lbnQsXG4gICAgZ2V0TW91c2VQb3NpdGlvbixcbiAgICBtb3ZlU2hpcEJ5RGlyZWN0aW9uLFxuICAgIGNoYW5nZUJsb2NrU2l6ZSxcbiAgICBjaGFuZ2VBeGlzLFxuICAgIGdldFZhbHVlcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVpO1xuIl0sIm5hbWVzIjpbInJlZnJlc2hpbmdMb2dvIiwiRG9tIiwiZ2V0RWxlbWVudHMiLCJvdmVybGF5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VjdGlvblNjcmVlbiIsInNoaXBUZXh0Iiwic2hpcEdyaWQiLCJzaGlwTGF5ZXIiLCJyb3RhdGVCdXR0b24iLCJncmlkcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoaXRzIiwibWlzc2VzIiwicGxheWVyR3JpZCIsInBsYXllckhpdHMiLCJwbGF5ZXJNaXNzZXMiLCJjb21wdXRlckdyaWQiLCJjb21wdXRlckhpdHMiLCJjb21wdXRlck1pc3NlcyIsImNvbnRlbnQiLCJjb21wdXRlckdyaWRMYXllciIsInJlc3RhcnQiLCJnYW1lT3ZlclRleHQiLCJnYW1lRmluaXNoZWRTZWN0aW9uIiwiZ2V0UGFnZSIsIlBvc2l0aW9uIiwiU2hpcCIsIlByYWN0aWNhbCIsIkdhbWVib2FyZCIsInBvc2l0aW9uIiwic2hpcCIsInByYWN0aWNhbCIsImN1cnJlbnRTaGlwcyIsInJhbmRvbWl6ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbUF4aXMiLCJheGllcyIsImxlbmd0aCIsInBsYWNlQWxsU2hpcHMiLCJzaGlwc0FycmF5IiwiY29tcGFyZVNoaXBzQXJyYXkiLCJsYXRlc3RTaGlwc0FycmF5Iiwic2hpcHMiLCJzaGlwc0RvQ29sbGlkZSIsImZvckVhY2giLCJsYXRlc3RTaGlwcyIsImJvYXQiLCJsYXRlc3RCb2F0IiwiY29tcGFyZVBvc2l0aW9uIiwiZ2V0VHlwZU9mUGxhY2VkU2hpcCIsInNoaXBBcnJheSIsInNoaXBUeXBlcyIsInNoaXBUeXBlIiwic2hpcExlbmd0aCIsInBsYXllclBsYWNlU2hpcCIsImxvY2F0aW9uIiwiYXhpcyIsImN1cnJlbnRBcnJheSIsImNvcHlBcnJheSIsImxhdGVzdFNoaXAiLCJjcmVhdGVTaGlwIiwiaXNDb2xsaWRlZCIsInB1c2giLCJwbGFjZVJhbmRvbVNoaXBzIiwicmFuZG9taXplciIsInJhbmRvbUF4aWVzIiwicmFuZG9tUG9zaXRpb24iLCJjcmVhdGVQb3NpdGlvbiIsImxhdGVzdExlbmd0aCIsInJhbmRvbVNoaXAiLCJzaGlwQ29sbGlkZXMiLCJwbGFjZVNoaXBzUmFuZG9tbHkiLCJmaWx0ZXJBdHRhY2siLCJhcnJheSIsImN1cnJlbnRBdHRhY2siLCJjdXJyZW50QXR0YWNrQXJyYXkiLCJmaWx0ZXIiLCJpdGVtIiwieENvb3JkIiwieUNvb3JkIiwiaGFzSGl0U2hpcCIsImhpdFBvc2l0aW9uIiwibGF0ZXN0SGl0cyIsImxhdGVzdE1pc3NlcyIsImhhc0JlZW5IaXQiLCJoYXNCZWVuTWlzcyIsImF0dGFja1NoaXAiLCJsYXRlc3RQb3NpdGlvbiIsImN1cnJlbnRIaXRzIiwiY3VycmVudE1pc3NlcyIsImlzSGl0IiwicG9zaXRpb25zQXJyYXkiLCJoaXQiLCJoaXRBcnJheSIsInNoaXBBcnJheXMiLCJmaW5hbE9iamVjdCIsInJlY2lldmVBdHRhY2siLCJyZXN1bHQiLCJjcmVhdGVSYW5kb21Db29yZHMiLCJpc01vY2tSYW5kb20iLCJjYWxsUmFuZG9taXplciIsInJhbmRvbVgiLCJyYW5kb21ZIiwicmVjaWV2ZVJhbmRvbUF0dGFjayIsImhhc0hpdCIsImlzQWxsU3VuayIsImhhc1N1bmtlZCIsImlzU3VuayIsImdldFZhbHVlcyIsIkdhbWUiLCJwbGF5ZXJCb2FyZCIsImNvbXB1dGVyQm9hcmQiLCJwbGF5ZXJDaGVja0JvYXJkIiwiY2hlY2tTZXR1cCIsInBsYXllckNoZWNrU2hpcHMiLCJzZXR1cEdhbWUiLCJwbGF5ZXJDaGVja1ZhbHVlcyIsImF0dGFja0JvYXRzIiwiY29vcmRzIiwic2V0dXBTaGlwIiwiZ2FtZUlzT3ZlciIsIm1lc3NhZ2UiLCJnYW1lRmluaXNoZWQiLCJhcnJhbmdlQmxvY2tzIiwibW91c2VQb3NpdGlvbiIsImN1cnJlbnRSb3RhdGlvbiIsImNoZWNrYm9hcmRPYmplY3RzIiwic2hpcFR5cGVPYmplY3QiLCJjdXJyZW50U2hpcCIsImdldEdhbWVWYWx1ZXMiLCJhY3RpdmVHYW1lIiwiY2hlY2tPdXRPZkJvdW5jZSIsIm5ld1Bvc2l0aW9uIiwiYWRkUG9zaXRpb24iLCJwb3NpdGlvbjEiLCJwb3NpdGlvbjIiLCJtdWx0aXBseVBvc2l0aW9uIiwiY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbCIsIm5ld0FycmF5IiwiaXNPYmplY3QiLCJjdXJyZW50T2JqZWN0IiwiY2hlY2tPYmplY3QiLCJvYmplY3QxIiwib2JqZWN0MiIsImluZGV4Iiwic2Vjb25kSW5kZXgiLCJvYmplY3RJc0VxdWFsIiwiY3VycmVudE9iamVjdDIiLCJjdXJyZW50T2JqZWN0VmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY3VycmVudE9iamVjdDJWYWx1ZXMiLCJvYmplY3RLZXlzIiwia2V5cyIsIm9iamVjdEtleXMyIiwia2V5IiwiaXRlbTIiLCJjaGVja09iamVjdEJvb2wiLCJnZXRBZGRlZFBvc2l0aW9uIiwiYWRkZWRQb3NpdGlvbiIsImxlbmd0aDEiLCJwb3B1bGF0ZVNoaXBzIiwiY3VycmVudFBvc2l0aW9uIiwibGF0ZXN0QXJyYXkiLCJhcnJheUxlbmd0aCIsInBvcyIsIlVpIiwiZG9tIiwicmVuZGVyU3BlZWQiLCJibG9ja1NpemUiLCJwbGFjZWRTaGlwIiwibW91c2VCbG9ja0xvY2F0aW9uIiwiY3JlYXRlRG9tRWxlbWVudCIsImVsZW1lbnROYW1lIiwiY3JlYXRlRWxlbWVudCIsImdldE1vdXNlUG9zaXRpb24iLCJvZmZzZXRYIiwib2Zmc2V0WSIsIm91dE9mQm91bmNlIiwiZmluZE1vdXNlUG9zaXRpb24iLCJldmVudCIsImN1cnJlbnRNb3VzZVBvc2l0aW9uIiwiZmluZFRvdWNoUG9zaXRpb24iLCJyZWN0IiwidGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG91Y2hPZmZzZXRYIiwidGFyZ2V0VG91Y2hlcyIsImNsaWVudFgiLCJ4IiwidG91Y2hPZmZzZXRZIiwiY2xpZW50WSIsInkiLCJ0b3VjaFBvc2l0aW9uIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiY2hhbmdlQmxvY2tTaXplIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJjcmVhdGVCbG9ja0VsZW1lbnQiLCJibG9ja0NsYXNzIiwiY3JlYXRlQmxvY2siLCJsYXRlc3RDbGFzcyIsImJsb2NrRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRpc2FibGVTdGFydGVyVWkiLCJjcmVhdGVTaGlwQmxvY2siLCJzaGlwUG9zaXRpb24iLCJsYXRlc3RCbG9ja1NpemUiLCJzaGlwQmxvY2siLCJyZWFsUG9zaXRpb25YIiwicmVhbFBvc2l0aW9uWSIsInN0eWxlIiwibGVmdCIsInRvcCIsInJlbmRlckFscmVhZHlQbGFjZWRTaGlwcyIsImdhbWVWYWx1ZXMiLCJjaGVja0JvYXJkU2hpcHMiLCJhcHBlbmRDaGlsZCIsInJlbmRlclBsYWNlZFNoaXAiLCJlbGVtZW50IiwiaW5uZXJIVE1MIiwiY2hhbmdlQXhpcyIsIm1vdmVTaGlwQnlEaXJlY3Rpb24iLCJtb3VzZUxvY2F0aW9uIiwiY3VycmVudEF4aXMiLCJuZXdYUG9zaXRpb24iLCJuZXdZUG9zaXRpb24iLCJuZXdTaGlwUG9zaXRpb24iLCJwbGFjZVBsYXllclNoaXAiLCJsYXRlc3RBeGlzIiwibGF0ZXN0R2FtZSIsInBsYWNlUGxheWVyU2hpcEV2ZW50IiwicmVzZXRHYW1lIiwic2hpcFNlbGVjdGlvbiIsImRpc3BsYXkiLCJhY3RpdmF0ZVVpIiwiYWRkVWlFdmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlVWlFdmVudHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRW5kaW5nRXZlbnRzIiwicmVtb3ZlRW5kaW5nRXZlbnRzIiwicmVtb3ZlR2FtZUV2ZW50cyIsIndpbmRvdyIsImNoYW5nZU1vdXNlUG9zaXRpb24iLCJjaGFuZ2UiLCJhdHRhY2tTaGlwcyIsImdldE1lc3NhZ2UiLCJhZGRHYW1lRXZlbnRzIiwiY2hlY2tNb3VzZVRhcmdldCIsImVsZW1lbnRDbGFzcyIsIm1vdXNlVGFyZ2V0IiwiY2xhc3NOYW1lIiwicmVuZGVyU2hpcHMiLCJncmlkIiwic2hpcEdyb3VwIiwic2hpcEVsZW1lbnQiLCJyZW5kZXJIaXRzIiwicmVtb3ZlQ3Vyc29yRWxlbWVudCIsInJlbmRlckdyaWRzIiwiYmxvY2tTaXplMiIsInBsYXllckJvYXJkVmFsdWVzIiwiY29tcHV0ZXJCb2FyZFZhbHVlcyIsIm1vdXNlU2hpcCIsInJlbmRlclN0YXRzIiwidGV4dENvbnRlbnQiLCJyZW5kZXJHYW1lIiwic2V0VGltZW91dCIsImdhbWVTdGF0dXMiLCJyZW1vdmVTaGlwU2VjdGlvbiIsImVsZW1lbnRzIiwic3RhcnRHYW1lIiwicmVuZGVyU2VsZWN0aW9uR3JpZCIsImdhbWVWYWx1ZSIsInBhZ2VDb250ZW50IiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=