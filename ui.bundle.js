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
      playerStats: document.querySelector('.playerStats'),
      computerGrid: document.querySelector('.computerGrid'),
      computerHits: document.querySelector('.computerHits'),
      computerMisses: document.querySelector('.computerMisses'),
      computerStats: document.querySelector('.computerStats'),
      content: document.querySelector('.content'),
      computerGridLayer: document.querySelector('.computerGridLayer')
    };
  };

  var getPage = function getPage() {
    var content = "    <div class=\"content\">\n                            <div class=\"overlay\"></div>\n                            <div class=\"sectionScreen\">\n                              <div class=\"shipSelection\">\n                                <h1 class=\"shipTitle\">BATTLESHIP</h1>\n                                <h2 class=\"shipText\">Place your Battleship</h2>\n                                <div class=\"shipLayer\">\n                                  <div class=\"shipOverlay\"></div>\n                                  <div class=\"shipGrid\"></div>\n                              </div>\n                                <div class=\"rotateButton\">\n                                  <img\n                                    class=\"rotateImage\"\n                                    src=\"".concat(_images_refreshLogo_svg__WEBPACK_IMPORTED_MODULE_0__, "\"\n                                    alt=\"Rotate Image\"\n                                  />\n                                </div>\n                              </div>\n                            </div>\n\n                            <main class=\"mainSection\">\n                              <div class=\"mainTitle\"><h1>BATTLESHIP</h1></div>\n                              <div class=\"centerSection\">\n                                <div class=\"playerBoard board\">\n                                  <h2 class=\"boardTitle\">Player Board</h2>\n                                  <div class=\"gridLayer playerGridLayer\">\n                                    <div class=\"gridOverlay\"></div>\n                                    <div class=\"playerGrid grid\"></div>\n                                  </div>\n                                  <div class=\"playerStats stats\">\n                                    <h2 class=\"playerHits hits\">Hits 0</h2>\n                                    <h2 class=\"playerMisses misses\">Misses 0</h2>\n                                  </div>\n                                </div>\n\n                                <div class=\"computerBoard board\">\n                                  <h2 class=\"boardTitle\">Computer Board</h2>\n                                  <div class=\"gridLayer computerGridLayer\">\n                                    <div class=\"gridOverlay computerGridOverlay\"></div>\n                                    <div class=\"computerGrid grid\"></div>\n                                  </div>\n                                  <div class=\"computerStats stats\">\n                                    <h2 class=\"computerHits hits\">Hits 0</h2>\n\n                                    <h2 class=\"computerMisses misses\">Misses 0</h2>\n                                  </div>\n                                </div>\n                              </div>\n                            </main>\n                            <div class=\"footer\">\n                              <h2 class=\"copyrightMessage\">\n                                Website and code are made by Brayden Grotegut\n                              </h2>\n                            </div>\n                          </div>");
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

  var playerPlaceShip = function playerPlaceShip(location, axis) {
    var currentArray = practical.copyArray(currentShips);
    var shiplength = 5 - currentArray.length;
    if (shiplength === 2) shiplength = 3;
    if (shiplength === 1) shiplength = 2;
    var currentShip = ship.createShip(location, shiplength, axis);
    var isCollided = compareShipsArray(currentArray, currentShip);

    if (currentArray.length === 5 || !currentShip || isCollided) {
      return currentArray;
    }

    currentArray.push(currentShip);
    currentShips = currentArray;
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
    _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.attackBoats(mouseBlockLocation);
  };

  var addGameEvents = function addGameEvents() {
    removeUiEvents();
    var element = dom.getElements();
    window.addEventListener('mousemove', changeMousePosition);
    element.computerGridLayer.addEventListener('mousemove', findMousePosition);
    element.computerGridLayer.addEventListener('click', attackShips);
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
    var gameValues = _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.getGameValues();

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
    renderHits(computerBoardValues.hits, 'hitBlock', computerGrid, blockSize2);
    renderHits(computerBoardValues.misses, 'missBlock', computerGrid, blockSize2);
    var mouseShip = ship.createShip(mousePosition, 1, 'x');

    if (mouseShip) {
      renderHits(mouseShip, 'cursorBlock', computerGrid, blockSize2);
    }
  };

  var renderStats = function renderStats() {
    var gameValues = _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.getGameValues();

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
      var gameStatus = _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.gameIsOver();
      var latestBlockSize = changeBlockSize(window.matchMedia);
      renderGrids(latestBlockSize, mouseBlockLocation);
      renderStats();
      if (!gameStatus.gameFinished) renderGame(latestBlockSize);
      renderGame(latestBlockSize);
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
    _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.setupGame();
    addGameEvents();
    renderGame();
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
    addUiEvents();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixFQUFwQjtJQUNBdkIsUUFBUSxDQUFDZ1IsSUFBVCxDQUFjakQsU0FBZCxHQUEwQmdELFdBQTFCO0lBRUFuQyxXQUFXO0lBQ1hnQyxtQkFBbUI7RUFDcEIsQ0FORDs7RUFRQSxPQUFPO0lBQ0xFLFVBQVUsRUFBVkEsVUFESztJQUVMdEUsa0JBQWtCLEVBQWxCQSxrQkFGSztJQUdMekIsZ0JBQWdCLEVBQWhCQSxnQkFISztJQUlMa0QsbUJBQW1CLEVBQW5CQSxtQkFKSztJQUtMNUIsZUFBZSxFQUFmQSxlQUxLO0lBTUwyQixVQUFVLEVBQVZBLFVBTks7SUFPTGxILFNBQVMsRUFBVEE7RUFQSyxDQUFQO0FBU0QsQ0EvWUQ7O0FBaVpBLGlFQUFld0QsRUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3ByYWN0aWNhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZnJlc2hpbmdMb2dvIGZyb20gJy4uL2ltYWdlcy9yZWZyZXNoTG9nby5zdmcnO1xuXG5jb25zdCBEb20gPSAoKSA9PiB7XG4gIGNvbnN0IGdldEVsZW1lbnRzID0gKCkgPT4gKHtcbiAgICBvdmVybGF5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpLFxuICAgIHNlY3Rpb25TY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uU2NyZWVuJyksXG4gICAgc2hpcFRleHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwVGV4dCcpLFxuICAgIHNoaXBHcmlkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcEdyaWQnKSxcbiAgICBzaGlwTGF5ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwTGF5ZXInKSxcbiAgICByb3RhdGVCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGVCdXR0b24nKSxcbiAgICBncmlkczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZCcpKSxcbiAgICBoaXRzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaXRzJykpLFxuICAgIG1pc3NlczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWlzc2VzJykpLFxuICAgIHBsYXllckdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJHcmlkJyksXG4gICAgcGxheWVySGl0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckhpdHMnKSxcbiAgICBwbGF5ZXJNaXNzZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJNaXNzZXMnKSxcbiAgICBwbGF5ZXJTdGF0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllclN0YXRzJyksXG4gICAgY29tcHV0ZXJHcmlkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXJHcmlkJyksXG4gICAgY29tcHV0ZXJIaXRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXJIaXRzJyksXG4gICAgY29tcHV0ZXJNaXNzZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlck1pc3NlcycpLFxuICAgIGNvbXB1dGVyU3RhdHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlclN0YXRzJyksXG4gICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKSxcbiAgICBjb21wdXRlckdyaWRMYXllcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyR3JpZExheWVyJyksXG4gIH0pO1xuXG4gIGNvbnN0IGdldFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uU2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcFNlbGVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJzaGlwVGl0bGVcIj5CQVRUTEVTSElQPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwic2hpcFRleHRcIj5QbGFjZSB5b3VyIEJhdHRsZXNoaXA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcExheWVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBPdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBHcmlkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdGF0ZUJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm90YXRlSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJHtyZWZyZXNoaW5nTG9nb31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUm90YXRlIEltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1haW4gY2xhc3M9XCJtYWluU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5UaXRsZVwiPjxoMT5CQVRUTEVTSElQPC9oMT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJTZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXJCb2FyZCBib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImJvYXJkVGl0bGVcIj5QbGF5ZXIgQm9hcmQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkTGF5ZXIgcGxheWVyR3JpZExheWVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZE92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXJHcmlkIGdyaWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyU3RhdHMgc3RhdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInBsYXllckhpdHMgaGl0c1wiPkhpdHMgMDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwbGF5ZXJNaXNzZXMgbWlzc2VzXCI+TWlzc2VzIDA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcHV0ZXJCb2FyZCBib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImJvYXJkVGl0bGVcIj5Db21wdXRlciBCb2FyZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRMYXllciBjb21wdXRlckdyaWRMYXllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRPdmVybGF5IGNvbXB1dGVyR3JpZE92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wdXRlckdyaWQgZ3JpZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wdXRlclN0YXRzIHN0YXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjb21wdXRlckhpdHMgaGl0c1wiPkhpdHMgMDwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvbXB1dGVyTWlzc2VzIG1pc3Nlc1wiPk1pc3NlcyAwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY29weXJpZ2h0TWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJzaXRlIGFuZCBjb2RlIGFyZSBtYWRlIGJ5IEJyYXlkZW4gR3JvdGVndXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0UGFnZSwgZ2V0RWxlbWVudHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvbTtcbiIsImltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5pbXBvcnQgUHJhY3RpY2FsIGZyb20gJy4vcHJhY3RpY2FsLmpzJztcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG4gIGNvbnN0IHNoaXAgPSBTaGlwKCk7XG4gIGNvbnN0IHByYWN0aWNhbCA9IFByYWN0aWNhbCgpO1xuXG4gIGxldCBjdXJyZW50U2hpcHMgPSBbXTtcbiAgbGV0IGhpdHMgPSBbXTtcbiAgbGV0IG1pc3NlcyA9IFtdO1xuXG4gIGNvbnN0IHJhbmRvbWl6ZSA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICBjb25zdCByYW5kb21BeGlzID0gKCkgPT4ge1xuICAgIGNvbnN0IGF4aWVzID0gWyd4JywgJ3knXTtcbiAgICByZXR1cm4gYXhpZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXhpZXMubGVuZ3RoKV07XG4gIH07XG5cbiAgY29uc3QgcGxhY2VBbGxTaGlwcyA9IChzaGlwc0FycmF5KSA9PiB7XG4gICAgY3VycmVudFNoaXBzID0gc2hpcHNBcnJheTtcbiAgICByZXR1cm4gY3VycmVudFNoaXBzO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmVTaGlwc0FycmF5ID0gKGxhdGVzdFNoaXBzQXJyYXksIHNoaXBzKSA9PiB7XG4gICAgbGV0IHNoaXBzRG9Db2xsaWRlID0gZmFsc2U7XG4gICAgaWYgKCFzaGlwcykgcmV0dXJuIHNoaXBzRG9Db2xsaWRlO1xuXG4gICAgLy8gY29uc29sZS5sb2cobGF0ZXN0U2hpcHNBcnJheSwgJ3RoZSBjdXJyZWVudCBzaGlwcyBhcnJheScpO1xuICAgIC8vIGNvbnNvbGUubG9nKHNoaXBzLCAndGhlIGN1cnJlbnQgc2hpcHMnKTtcblxuICAgIGxhdGVzdFNoaXBzQXJyYXkuZm9yRWFjaCgobGF0ZXN0U2hpcHMpID0+IHtcbiAgICAgIGxhdGVzdFNoaXBzLmZvckVhY2goKGJvYXQpID0+IHtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgobGF0ZXN0Qm9hdCkgPT4ge1xuICAgICAgICAgIGlmIChwb3NpdGlvbi5jb21wYXJlUG9zaXRpb24oYm9hdCwgbGF0ZXN0Qm9hdCkpIHtcbiAgICAgICAgICAgIHNoaXBzRG9Db2xsaWRlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2hpcHNEb0NvbGxpZGU7XG4gIH07XG5cbiAgY29uc3QgcGxheWVyUGxhY2VTaGlwID0gKGxvY2F0aW9uLCBheGlzKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEFycmF5ID0gcHJhY3RpY2FsLmNvcHlBcnJheShjdXJyZW50U2hpcHMpO1xuXG4gICAgbGV0IHNoaXBsZW5ndGggPSA1IC0gY3VycmVudEFycmF5Lmxlbmd0aDtcblxuICAgIGlmIChzaGlwbGVuZ3RoID09PSAyKSBzaGlwbGVuZ3RoID0gMztcbiAgICBpZiAoc2hpcGxlbmd0aCA9PT0gMSkgc2hpcGxlbmd0aCA9IDI7XG5cbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXAuY3JlYXRlU2hpcChsb2NhdGlvbiwgc2hpcGxlbmd0aCwgYXhpcyk7XG5cbiAgICBjb25zdCBpc0NvbGxpZGVkID0gY29tcGFyZVNoaXBzQXJyYXkoY3VycmVudEFycmF5LCBjdXJyZW50U2hpcCk7XG5cbiAgICBpZiAoY3VycmVudEFycmF5Lmxlbmd0aCA9PT0gNSB8fCAhY3VycmVudFNoaXAgfHwgaXNDb2xsaWRlZCkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRBcnJheTtcbiAgICB9XG5cbiAgICBjdXJyZW50QXJyYXkucHVzaChjdXJyZW50U2hpcCk7XG4gICAgY3VycmVudFNoaXBzID0gY3VycmVudEFycmF5O1xuICAgIHJldHVybiBjdXJyZW50QXJyYXk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VSYW5kb21TaGlwcyA9IChsZW5ndGgsIHNoaXBzQXJyYXksIHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKSA9PiB7XG4gICAgY29uc3QgbGF0ZXN0U2hpcHNBcnJheSA9IHNoaXBzQXJyYXk7XG4gICAgbGV0IGxhdGVzdExlbmd0aCA9IGxlbmd0aDtcbiAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHJhbmRvbWl6ZXIoKSwgcmFuZG9taXplcigpKTtcbiAgICBjb25zdCByYW5kb21TaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgcmFuZG9tUG9zaXRpb24sXG4gICAgICBsYXRlc3RMZW5ndGgsXG4gICAgICByYW5kb21BeGllcygpXG4gICAgKTtcblxuICAgIGlmIChyYW5kb21TaGlwKSB7XG4gICAgICBjb25zdCBzaGlwQ29sbGlkZXMgPSBjb21wYXJlU2hpcHNBcnJheShsYXRlc3RTaGlwc0FycmF5LCByYW5kb21TaGlwKTtcbiAgICAgIGlmICghc2hpcENvbGxpZGVzKSB7XG4gICAgICAgIGlmIChsYXRlc3RMZW5ndGggPiAyKSBsYXRlc3RMZW5ndGggLT0gMTtcbiAgICAgICAgaWYgKHNoaXBzQXJyYXkubGVuZ3RoIDwgNSkgbGF0ZXN0U2hpcHNBcnJheS5wdXNoKHJhbmRvbVNoaXApO1xuXG4gICAgICAgIGlmIChzaGlwc0FycmF5Lmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgIHJldHVybiBsYXRlc3RTaGlwc0FycmF5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWNlUmFuZG9tU2hpcHMoXG4gICAgICBsYXRlc3RMZW5ndGgsXG4gICAgICBsYXRlc3RTaGlwc0FycmF5LFxuICAgICAgcmFuZG9taXplcixcbiAgICAgIHJhbmRvbUF4aWVzXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXBzUmFuZG9tbHkgPSAocmFuZG9taXplciwgcmFuZG9tQXhpZXMpID0+IHtcbiAgICBjb25zdCBzaGlwc0FycmF5ID0gcGxhY2VSYW5kb21TaGlwcyg1LCBbXSwgcmFuZG9taXplciwgcmFuZG9tQXhpZXMpO1xuICAgIGN1cnJlbnRTaGlwcyA9IHNoaXBzQXJyYXk7XG5cbiAgICByZXR1cm4gc2hpcHNBcnJheTtcbiAgfTtcbiAgY29uc3QgZmlsdGVyQXR0YWNrID0gKGFycmF5LCBjdXJyZW50QXR0YWNrKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEF0dGFja0FycmF5ID0gYXJyYXkuZmlsdGVyKFxuICAgICAgKGl0ZW0pID0+XG4gICAgICAgIGl0ZW0ueENvb3JkID09PSBjdXJyZW50QXR0YWNrLnhDb29yZCAmJlxuICAgICAgICBpdGVtLnlDb29yZCA9PT0gY3VycmVudEF0dGFjay55Q29vcmRcbiAgICApO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRBdHRhY2tBcnJheTtcbiAgfTtcblxuICBjb25zdCBoYXNIaXRTaGlwID0gKGhpdFBvc2l0aW9uLCBsYXRlc3RIaXRzLCBsYXRlc3RNaXNzZXMpID0+IHtcbiAgICBjb25zdCBoYXNCZWVuSGl0ID0gZmlsdGVyQXR0YWNrKGxhdGVzdEhpdHMsIGhpdFBvc2l0aW9uKTtcbiAgICBjb25zdCBoYXNCZWVuTWlzcyA9IGZpbHRlckF0dGFjayhsYXRlc3RNaXNzZXMsIGhpdFBvc2l0aW9uKTtcblxuICAgIGlmIChoYXNCZWVuSGl0Lmxlbmd0aCA+IDAgfHwgaGFzQmVlbk1pc3MubGVuZ3RoID4gMCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja1NoaXAgPSAobGF0ZXN0UG9zaXRpb24sIHNoaXBzLCBjdXJyZW50SGl0cywgY3VycmVudE1pc3NlcykgPT4ge1xuICAgIGxldCBpc0hpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGxhdGVzdFNoaXBzQXJyYXkgPSBbXTtcbiAgICBjb25zdCBsYXRlc3RIaXRzID0gY3VycmVudEhpdHM7XG4gICAgY29uc3QgbGF0ZXN0TWlzc2VzID0gY3VycmVudE1pc3NlcztcblxuICAgIGlmICghbGF0ZXN0UG9zaXRpb24pIHJldHVybiBmYWxzZTtcbiAgICBpZiAoaGFzSGl0U2hpcChsYXRlc3RQb3NpdGlvbiwgY3VycmVudEhpdHMsIGN1cnJlbnRNaXNzZXMpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwQXJyYXkpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbnNBcnJheSA9IHByYWN0aWNhbC5jb3B5QXJyYXkoc2hpcEFycmF5KTtcbiAgICAgIGNvbnN0IGhpdCA9IHNoaXAuaGl0KHBvc2l0aW9uc0FycmF5LCBsYXRlc3RQb3NpdGlvbik7XG5cbiAgICAgIGlmIChoaXQuaGl0QXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgcG9zaXRpb25zQXJyYXkgPSBoaXQuc2hpcEFycmF5cztcbiAgICAgICAgbGF0ZXN0SGl0cy5wdXNoKGhpdC5oaXRBcnJheVswXSk7XG4gICAgICB9XG4gICAgICBsYXRlc3RTaGlwc0FycmF5LnB1c2gocG9zaXRpb25zQXJyYXkpO1xuICAgIH0pO1xuICAgIGlmICghaXNIaXQpIGxhdGVzdE1pc3Nlcy5wdXNoKGxhdGVzdFBvc2l0aW9uKTtcblxuICAgIGNvbnN0IGZpbmFsT2JqZWN0ID0ge1xuICAgICAgaXNIaXQsXG4gICAgICBsYXRlc3RTaGlwc0FycmF5LFxuICAgICAgbGF0ZXN0SGl0cyxcbiAgICAgIGxhdGVzdE1pc3NlcyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZpbmFsT2JqZWN0O1xuICB9O1xuXG4gIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAobGF0ZXN0UG9zaXRpb24pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhdHRhY2tTaGlwKGxhdGVzdFBvc2l0aW9uLCBjdXJyZW50U2hpcHMsIGhpdHMsIG1pc3Nlcyk7XG4gICAgaWYgKCFyZXN1bHQpIHJldHVybiBmYWxzZTtcblxuICAgIGN1cnJlbnRTaGlwcyA9IHJlc3VsdC5sYXRlc3RTaGlwc0FycmF5O1xuICAgIGhpdHMgPSByZXN1bHQubGF0ZXN0SGl0cztcbiAgICBtaXNzZXMgPSByZXN1bHQubGF0ZXN0TWlzc2VzO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVSYW5kb21Db29yZHMgPSAocmFuZG9taXplcikgPT4ge1xuICAgIGxldCByYW5kb21Qb3NpdGlvbjtcblxuICAgIGlmIChyYW5kb21pemVyLmlzTW9ja1JhbmRvbSkge1xuICAgICAgcmFuZG9tUG9zaXRpb24gPSByYW5kb21pemVyLmNhbGxSYW5kb21pemVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJhbmRvbVggPSByYW5kb21pemVyKCk7XG4gICAgICBjb25zdCByYW5kb21ZID0gcmFuZG9taXplcigpO1xuICAgICAgcmFuZG9tUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihyYW5kb21YLCByYW5kb21ZKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZG9tUG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgZ2V0VHlwZU9mUGxhY2VkU2hpcCA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFNoaXBzLmxlbmd0aCA9PT0gNSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3Qgc2hpcFR5cGVzID0gW1xuICAgICAgeyBzaGlwVHlwZTogJ2NhcnJpZXInLCBzaGlwTGVuZ3RoOiA1IH0sXG4gICAgICB7IHNoaXBUeXBlOiAnYmF0dGxlc2hpcCcsIHNoaXBMZW5ndGg6IDQgfSxcbiAgICAgIHsgc2hpcFR5cGU6ICdkZXN0b3llcicsIHNoaXBMZW5ndGg6IDMgfSxcbiAgICAgIHsgc2hpcFR5cGU6ICdzdWJtYXJpbmUnLCBzaGlwTGVuZ3RoOiAzIH0sXG4gICAgICB7IHNoaXBUeXBlOiAnZ3VuYm9hdCcsIHNoaXBMZW5ndGg6IDIgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIHNoaXBUeXBlc1tjdXJyZW50U2hpcHMubGVuZ3RoXTtcbiAgfTtcblxuICBjb25zdCByZWNpZXZlUmFuZG9tQXR0YWNrID0gKHJhbmRvbWl6ZXIpID0+IHtcbiAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IGNyZWF0ZVJhbmRvbUNvb3JkcyhyYW5kb21pemVyKTtcbiAgICBjb25zdCBoYXNIaXQgPSBoYXNIaXRTaGlwKHJhbmRvbVBvc2l0aW9uLCBoaXRzLCBtaXNzZXMpO1xuXG4gICAgaWYgKGhhc0hpdCkgcmV0dXJuIHJlY2lldmVSYW5kb21BdHRhY2socmFuZG9taXplcik7XG5cbiAgICByZXR1cm4gcmVjaWV2ZUF0dGFjayhyYW5kb21Qb3NpdGlvbik7XG4gIH07XG5cbiAgY29uc3QgaXNBbGxTdW5rID0gKCkgPT4ge1xuICAgIGxldCBoYXNTdW5rZWQgPSB0cnVlO1xuICAgIGN1cnJlbnRTaGlwcy5mb3JFYWNoKChzaGlwcykgPT4ge1xuICAgICAgaWYgKCFzaGlwLmlzU3VuayhzaGlwcykpIHtcbiAgICAgICAgaGFzU3Vua2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaGFzU3Vua2VkO1xuICB9O1xuXG4gIGNvbnN0IGdldFZhbHVlcyA9ICgpID0+ICh7XG4gICAgY3VycmVudFNoaXBzLFxuICAgIGhpdHMsXG4gICAgbWlzc2VzLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGF0dGFja1NoaXAsXG4gICAgcmVjaWV2ZUF0dGFjayxcbiAgICBpc0FsbFN1bmssXG4gICAgcGxhY2VTaGlwc1JhbmRvbWx5LFxuICAgIHBsYXllclBsYWNlU2hpcCxcbiAgICBwbGFjZUFsbFNoaXBzLFxuICAgIHJhbmRvbWl6ZSxcbiAgICByZWNpZXZlUmFuZG9tQXR0YWNrLFxuICAgIHJhbmRvbUF4aXMsXG4gICAgZ2V0VmFsdWVzLFxuICAgIGdldFR5cGVPZlBsYWNlZFNoaXAsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5cbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uLmpzJztcblxuY29uc3QgR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBwbGF5ZXJDaGVja0JvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuXG4gIGNvbnN0IHNoaXAgPSBTaGlwKCk7XG5cbiAgY29uc3QgcmFuZG9taXplciA9IGNvbXB1dGVyQm9hcmQucmFuZG9taXplO1xuICBjb25zdCByYW5kb21BeGllcyA9IGNvbXB1dGVyQm9hcmQucmFuZG9tQXhpcztcblxuICBjb25zdCBjaGVja1NldHVwID0gKHBsYXllckNoZWNrU2hpcHMpID0+IHtcbiAgICBpZiAocGxheWVyQ2hlY2tTaGlwcy5sZW5ndGggPT09IDUpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBzZXR1cEdhbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQ2hlY2tWYWx1ZXMgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpO1xuXG4gICAgaWYgKCFjaGVja1NldHVwKHBsYXllckNoZWNrVmFsdWVzLmN1cnJlbnRTaGlwcykpIHJldHVybiBmYWxzZTtcblxuICAgIHBsYXllckJvYXJkLnBsYWNlQWxsU2hpcHMocGxheWVyQ2hlY2tWYWx1ZXMuY3VycmVudFNoaXBzKTtcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcHNSYW5kb21seShyYW5kb21pemVyLCByYW5kb21BeGllcyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrQm9hdHMgPSAoY29vcmRzKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQ2hlY2tWYWx1ZXMgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpO1xuXG4gICAgaWYgKCFjaGVja1NldHVwKHBsYXllckNoZWNrVmFsdWVzLmN1cnJlbnRTaGlwcykpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IGN1cnJlbnRBdHRhY2sgPSBjb21wdXRlckJvYXJkLnJlY2lldmVBdHRhY2soY29vcmRzKTtcbiAgICBpZiAoIWN1cnJlbnRBdHRhY2spIHJldHVybiBmYWxzZTtcbiAgICBwbGF5ZXJCb2FyZC5yZWNpZXZlUmFuZG9tQXR0YWNrKHJhbmRvbWl6ZXIpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBTaGlwID0gKGxvY2F0aW9uLCBheGlzKSA9PlxuICAgIHBsYXllckNoZWNrQm9hcmQucGxheWVyUGxhY2VTaGlwKGxvY2F0aW9uLCBheGlzKTtcblxuICBjb25zdCBnYW1lSXNPdmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllckNoZWNrU2hpcHMgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpLmN1cnJlbnRTaGlwcztcbiAgICBpZiAoIWNoZWNrU2V0dXAocGxheWVyQ2hlY2tTaGlwcykpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChjb21wdXRlckJvYXJkLmlzQWxsU3VuaygpKSB7XG4gICAgICByZXR1cm4geyBtZXNzYWdlOiAnWW91IFdvbicsIGdhbWVGaW5pc2hlZDogdHJ1ZSB9O1xuICAgIH1cblxuICAgIGlmIChwbGF5ZXJCb2FyZC5pc0FsbFN1bmsoKSkge1xuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ1lvdSBMb3N0JywgZ2FtZUZpbmlzaGVkOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiB7IGdhbWVGaW5pc2hlZDogZmFsc2UgfTtcbiAgfTtcblxuICBjb25zdCBhcnJhbmdlQmxvY2tzID0gKG1vdXNlUG9zaXRpb24sIGN1cnJlbnRSb3RhdGlvbikgPT4ge1xuICAgIGNvbnN0IHNoaXBUeXBlT2JqZWN0ID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRUeXBlT2ZQbGFjZWRTaGlwKCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwVHlwZU9iamVjdCwgJ3RoZSBzaGlwIHR5cGUgb2JqZWN0Jyk7XG4gICAgLy8gY29uc29sZS5sb2cobW91c2VQb3NpdGlvbiwgJ3RoZSBtb3VzZSBwb3NpdGlvbicpO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRSb3RhdGlvbiwgJ3RoZSBjdXJyZW50IHJvdGF0aW9uJyk7XG5cbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXAuY3JlYXRlU2hpcChcbiAgICAgIG1vdXNlUG9zaXRpb24sXG4gICAgICBzaGlwVHlwZU9iamVjdC5zaGlwTGVuZ3RoLFxuICAgICAgY3VycmVudFJvdGF0aW9uXG4gICAgKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50U2hpcCwgJ3RoZSBtb3N0IHVwIHRvIGRhdGUgc2hpcHMnKTtcblxuICAgIHJldHVybiBjdXJyZW50U2hpcDtcbiAgfTtcblxuICBjb25zdCBnZXRHYW1lVmFsdWVzID0gKCkgPT4gKHtcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBjb21wdXRlckJvYXJkLFxuICAgIHBsYXllckNoZWNrQm9hcmQsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgY2hlY2tTZXR1cCxcbiAgICBhdHRhY2tCb2F0cyxcbiAgICBzZXR1cEdhbWUsXG4gICAgZ2FtZUlzT3ZlcixcbiAgICBzZXR1cFNoaXAsXG4gICAgZ2V0R2FtZVZhbHVlcyxcbiAgICBhcnJhbmdlQmxvY2tzLFxuICB9O1xufTtcblxuY29uc3QgYWN0aXZlR2FtZSA9IEdhbWUoKTtcblxuZXhwb3J0IHsgR2FtZSwgYWN0aXZlR2FtZSB9O1xuIiwiY29uc3QgUG9zaXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVBvc2l0aW9uID0gKHhDb29yZCwgeUNvb3JkKSA9PiAoeyB4Q29vcmQsIHlDb29yZCB9KTtcblxuICBjb25zdCBjaGVja091dE9mQm91bmNlID0gKG5ld1Bvc2l0aW9uKSA9PiB7XG4gICAgaWYgKG5ld1Bvc2l0aW9uLnhDb29yZCA+IDkgfHwgbmV3UG9zaXRpb24ueUNvb3JkID4gOSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKG5ld1Bvc2l0aW9uLnhDb29yZCA8IDAgfHwgbmV3UG9zaXRpb24ueUNvb3JkIDwgMCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGFkZFBvc2l0aW9uID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uMSA9PT0gZmFsc2UgfHwgcG9zaXRpb24yID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBjcmVhdGVQb3NpdGlvbihwb3NpdGlvbjEueENvb3JkLCBwb3NpdGlvbjEueUNvb3JkKTtcbiAgICBuZXdQb3NpdGlvbi54Q29vcmQgKz0gcG9zaXRpb24yLnhDb29yZDtcbiAgICBuZXdQb3NpdGlvbi55Q29vcmQgKz0gcG9zaXRpb24yLnlDb29yZDtcblxuICAgIGlmIChjaGVja091dE9mQm91bmNlKG5ld1Bvc2l0aW9uKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IG11bHRpcGx5UG9zaXRpb24gPSAocG9zaXRpb24xLCBwb3NpdGlvbjIpID0+IHtcbiAgICBpZiAocG9zaXRpb24xID09PSBmYWxzZSB8fCBwb3NpdGlvbjIgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGNyZWF0ZVBvc2l0aW9uKHBvc2l0aW9uMS54Q29vcmQsIHBvc2l0aW9uMS55Q29vcmQpO1xuICAgIG5ld1Bvc2l0aW9uLnhDb29yZCAqPSBwb3NpdGlvbjIueENvb3JkO1xuICAgIG5ld1Bvc2l0aW9uLnlDb29yZCAqPSBwb3NpdGlvbjIueUNvb3JkO1xuXG4gICAgaWYgKGNoZWNrT3V0T2ZCb3VuY2UobmV3UG9zaXRpb24pKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gbmV3UG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbCA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgYXhpcykgPT4ge1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSArIDEpIHJldHVybiB0cnVlO1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHBvc2l0aW9uMVtheGlzXSA9PT0gcG9zaXRpb24yW2F4aXNdIC0gMSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmVQb3NpdGlvbiA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMikgPT4ge1xuICAgIGlmICghY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgJ3hDb29yZCcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgJ3lDb29yZCcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlUG9zaXRpb24sXG4gICAgYWRkUG9zaXRpb24sXG4gICAgbXVsdGlwbHlQb3NpdGlvbixcbiAgICBjb21wYXJlUG9zaXRpb24sXG4gICAgY2hlY2tPdXRPZkJvdW5jZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc2l0aW9uO1xuIiwiY29uc3QgUHJhY3RpY2FsID0gKCkgPT4ge1xuICBjb25zdCBjb3B5QXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgICBjb25zdCBuZXdBcnJheSA9IFtdO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgbmV3QXJyYXkucHVzaChpdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdBcnJheTtcbiAgfTtcblxuICBjb25zdCBpc09iamVjdCA9IChjdXJyZW50T2JqZWN0KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50T2JqZWN0ID09PSAnb2JqZWN0JyAmJiBjdXJyZW50T2JqZWN0ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrT2JqZWN0ID0gKG9iamVjdDEsIG9iamVjdDIpID0+IHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBzZWNvbmRJbmRleCA9IDA7XG5cbiAgICBsZXQgb2JqZWN0SXNFcXVhbCA9IHRydWU7XG5cbiAgICBjb25zdCBjdXJyZW50T2JqZWN0ID0gb2JqZWN0MTtcbiAgICBjb25zdCBjdXJyZW50T2JqZWN0MiA9IG9iamVjdDI7XG5cbiAgICBjb25zdCBjdXJyZW50T2JqZWN0VmFsdWVzID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50T2JqZWN0KTtcbiAgICBjb25zdCBjdXJyZW50T2JqZWN0MlZhbHVlcyA9IE9iamVjdC52YWx1ZXMoY3VycmVudE9iamVjdDIpO1xuXG4gICAgY29uc3Qgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKGN1cnJlbnRPYmplY3QpO1xuICAgIGNvbnN0IG9iamVjdEtleXMyID0gT2JqZWN0LmtleXMoY3VycmVudE9iamVjdDIpO1xuXG4gICAgb2JqZWN0S2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChrZXkgIT09IG9iamVjdEtleXMyW2luZGV4XSkgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgaW5kZXggKz0gMTtcbiAgICB9KTtcblxuICAgIGlmICghb2JqZWN0SXNFcXVhbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChvYmplY3RLZXlzLmxlbmd0aCAhPT0gb2JqZWN0S2V5czIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50T2JqZWN0LCAndGhlIGN1cnJlbnQgb2JqZWN0Jyk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudE9iamVjdDIsICd0aGUgY3VycmVudCBvYmplY3QyJyk7XG5cbiAgICBjdXJyZW50T2JqZWN0VmFsdWVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0yID0gY3VycmVudE9iamVjdDJWYWx1ZXNbc2Vjb25kSW5kZXhdO1xuXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkgJiYgaXNPYmplY3QoaXRlbTIpKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrT2JqZWN0Qm9vbCA9IGNoZWNrT2JqZWN0KGl0ZW0sIGl0ZW0yKTtcblxuICAgICAgICBpZiAoIWNoZWNrT2JqZWN0Qm9vbCkgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChpdGVtICE9PSBpdGVtMikge1xuICAgICAgICBvYmplY3RJc0VxdWFsID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHNlY29uZEluZGV4ICs9IDE7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqZWN0SXNFcXVhbDtcbiAgfTtcblxuICByZXR1cm4geyBjb3B5QXJyYXksIGNoZWNrT2JqZWN0IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmFjdGljYWw7XG4iLCJpbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5cbmNvbnN0IFNoaXAgPSAoKSA9PiB7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcblxuICBjb25zdCBnZXRBZGRlZFBvc2l0aW9uID0gKGF4aXMpID0+IHtcbiAgICBsZXQgYWRkZWRQb3NpdGlvbjtcblxuICAgIGlmIChheGlzID09PSAneCcpIGFkZGVkUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbigxLCAwKTtcbiAgICBlbHNlIGFkZGVkUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbigwLCAxKTtcblxuICAgIHJldHVybiBhZGRlZFBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVNoaXAgPSAocG9zaXRpb24xLCBsZW5ndGgxLCBheGlzKSA9PiB7XG4gICAgaWYgKGxlbmd0aDEgPT09IDAgfHwgbGVuZ3RoMSA+IDUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocG9zaXRpb24uY2hlY2tPdXRPZkJvdW5jZShwb3NpdGlvbjEpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBwb3B1bGF0ZVNoaXBzID0gKGN1cnJlbnRQb3NpdGlvbiwgbGF0ZXN0TGVuZ3RoLCBsYXRlc3RBcnJheSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudEFycmF5ID0gbGF0ZXN0QXJyYXk7XG4gICAgICBsZXQgbmV3UG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb247XG5cbiAgICAgIGlmIChjdXJyZW50UG9zaXRpb24gPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAobGF0ZXN0TGVuZ3RoID09PSAwKSByZXR1cm4gY3VycmVudEFycmF5O1xuICAgICAgaWYgKGxhdGVzdExlbmd0aCA9PT0gbGVuZ3RoMSkge1xuICAgICAgICBjdXJyZW50QXJyYXkucHVzaChjdXJyZW50UG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhjdXJyZW50UG9zaXRpb24sIGxhdGVzdExlbmd0aCAtIDEsIGN1cnJlbnRBcnJheSk7XG4gICAgICB9XG4gICAgICBjb25zdCBhZGRlZFBvc2l0aW9uID0gZ2V0QWRkZWRQb3NpdGlvbihheGlzKTtcbiAgICAgIG5ld1Bvc2l0aW9uID0gcG9zaXRpb24uYWRkUG9zaXRpb24obmV3UG9zaXRpb24sIGFkZGVkUG9zaXRpb24pO1xuXG4gICAgICBpZiAoIW5ld1Bvc2l0aW9uKSByZXR1cm4gbmV3UG9zaXRpb247XG4gICAgICBjdXJyZW50QXJyYXkucHVzaChuZXdQb3NpdGlvbik7XG5cbiAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gY3VycmVudEFycmF5Lmxlbmd0aCAtIDE7XG5cbiAgICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKFxuICAgICAgICBjdXJyZW50QXJyYXlbYXJyYXlMZW5ndGhdLFxuICAgICAgICBsYXRlc3RMZW5ndGggLSAxLFxuICAgICAgICBjdXJyZW50QXJyYXlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKHBvc2l0aW9uMSwgbGVuZ3RoMSwgW10sIGZhbHNlKTtcbiAgfTtcblxuXG5cbiAgY29uc3QgaXNTdW5rID0gKHNoaXBBcnJheSkgPT4ge1xuICAgIGlmIChzaGlwQXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaGl0ID0gKHBvc2l0aW9uc0FycmF5LCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGhpdEFycmF5ID0gcG9zaXRpb25zQXJyYXkuZmlsdGVyKChwb3MpID0+IHtcbiAgICAgIGlmIChwb3MueENvb3JkID09PSBwb3NpdGlvbi54Q29vcmQgJiYgcG9zLnlDb29yZCA9PT0gcG9zaXRpb24ueUNvb3JkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGNvbnN0IHNoaXBBcnJheXMgPSBwb3NpdGlvbnNBcnJheS5maWx0ZXIoKHBvcykgPT4ge1xuICAgICAgaWYgKHBvcy54Q29vcmQgPT09IHBvc2l0aW9uLnhDb29yZCAmJiBwb3MueUNvb3JkID09PSBwb3NpdGlvbi55Q29vcmQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBoaXRBcnJheSwgc2hpcEFycmF5cyB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlU2hpcCxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCBEb20gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCB7IGFjdGl2ZUdhbWUgfSBmcm9tICcuL21haW4uanMnO1xuXG5jb25zdCBVaSA9ICgpID0+IHtcbiAgY29uc3QgZG9tID0gRG9tKCk7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcblxuICBjb25zdCByZW5kZXJTcGVlZCA9IDE7XG5cbiAgbGV0IGJsb2NrU2l6ZSA9IDQyO1xuXG4gIGxldCBwbGFjZWRTaGlwID0gZmFsc2U7XG4gIGxldCBheGlzID0gJ3knO1xuXG4gIGxldCBtb3VzZUJsb2NrTG9jYXRpb24gPSBmYWxzZTtcblxuICBjb25zdCBjcmVhdGVEb21FbGVtZW50ID0gKGVsZW1lbnROYW1lKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcblxuICBjb25zdCBnZXRNb3VzZVBvc2l0aW9uID0gKG9mZnNldFgsIG9mZnNldFkpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhvZmZzZXRYLCBvZmZzZXRZLCAnb2Zmc2V0IHggYW5kIG9mZnNldCB5Jyk7XG5cbiAgICBjb25zdCB4Q29vcmQgPSBNYXRoLmZsb29yKG9mZnNldFggLyBibG9ja1NpemUpO1xuICAgIGNvbnN0IHlDb29yZCA9IE1hdGguZmxvb3Iob2Zmc2V0WSAvIGJsb2NrU2l6ZSk7XG5cbiAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oeENvb3JkLCB5Q29vcmQpO1xuXG4gICAgY29uc3Qgb3V0T2ZCb3VuY2UgPSBwb3NpdGlvbi5jaGVja091dE9mQm91bmNlKG1vdXNlUG9zaXRpb24pO1xuXG4gICAgaWYgKG91dE9mQm91bmNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhtb3VzZVBvc2l0aW9uLCAndGhlIGN1cnJlbnQgbW91c2UgcG9zaXRpb24nKTtcblxuICAgIHJldHVybiBtb3VzZVBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGZpbmRNb3VzZVBvc2l0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY3VycmVudE1vdXNlUG9zaXRpb24gPSBnZXRNb3VzZVBvc2l0aW9uKGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuXG4gICAgbW91c2VCbG9ja0xvY2F0aW9uID0gY3VycmVudE1vdXNlUG9zaXRpb247XG5cbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50TW91c2VQb3NpdGlvbiwgJ3RoZSBjdXJyZW50IG1vdXNlIHBvc2l0aW9uJyk7XG4gIH07XG5cbiAgLy8gd290ayBvbiB0aGlzIGZ1bmN0aW9uXG4gIGNvbnN0IGZpbmRUb3VjaFBvc2l0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB0b3VjaE9mZnNldFggPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFggLSByZWN0Lng7XG4gICAgY29uc3QgdG91Y2hPZmZzZXRZID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZIC0gcmVjdC55O1xuXG4gICAgY29uc3QgdG91Y2hQb3NpdGlvbiA9IGdldE1vdXNlUG9zaXRpb24odG91Y2hPZmZzZXRYLCB0b3VjaE9mZnNldFkpO1xuICAgIG1vdXNlQmxvY2tMb2NhdGlvbiA9IHRvdWNoUG9zaXRpb247XG5cbiAgICBjb25zb2xlLmxvZyhtb3VzZUJsb2NrTG9jYXRpb24sICd0aGUgbW91c2UgYmxvY2sgbG9jYXRpb24nKTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgLy8gYmxvY2sgc2l6ZSBtYXRjaGVzIHRoZSBzaXplIGdyaWRzaXplIG9mIHRoZSBtZWRpYSBxdWVyeSBkaXZpZGVkIGJ5IDEwXG4gIGNvbnN0IGNoYW5nZUJsb2NrU2l6ZSA9IChtYXRjaE1lZGlhKSA9PiB7XG4gICAgYmxvY2tTaXplID0gNDI7XG4gICAgaWYgKG1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDk2MHB4KScpLm1hdGNoZXMpIGJsb2NrU2l6ZSA9IDMwO1xuICAgIGlmIChtYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA0NzBweCknKS5tYXRjaGVzKSBibG9ja1NpemUgPSAyMTtcbiAgICBpZiAobWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMzIwcHgpJykubWF0Y2hlcykgYmxvY2tTaXplID0gMTU7XG4gICAgcmV0dXJuIGJsb2NrU2l6ZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDMyMHB4KScpLCAndGhlIGN1cnJlbnQgbWF0Y2ggbWVkaWEnKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVCbG9ja0VsZW1lbnQgPSAoYmxvY2tDbGFzcywgY3JlYXRlQmxvY2spID0+IHtcbiAgICBsZXQgbGF0ZXN0Q2xhc3MgPSBibG9ja0NsYXNzO1xuXG4gICAgaWYgKFxuICAgICAgbGF0ZXN0Q2xhc3MgIT09ICdoaXRCbG9jaycgJiZcbiAgICAgIGxhdGVzdENsYXNzICE9PSAnbWlzc0Jsb2NrJyAmJlxuICAgICAgbGF0ZXN0Q2xhc3MgIT09ICdjdXJzb3JCbG9jaydcbiAgICApIHtcbiAgICAgIGxhdGVzdENsYXNzID0gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgYmxvY2tFbGVtZW50ID0gY3JlYXRlQmxvY2soJ2RpdicpO1xuICAgIGJsb2NrRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdibG9jaycpO1xuICAgIGlmIChsYXRlc3RDbGFzcyAhPT0gJycpIGJsb2NrRWxlbWVudC5jbGFzc0xpc3QuYWRkKGxhdGVzdENsYXNzKTtcblxuICAgIHJldHVybiBibG9ja0VsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgZGlzYWJsZVN0YXJ0ZXJVaSA9ICgpID0+IHRydWU7XG5cbiAgLy8gY29uc3QgcmVuZGVyU2VsZWN0aW9uQmxvY2tzID0gKG1vdXNlUG9zaXRpb24sIGxhdGVzdEJsb2NrU2l6ZSkgPT4ge1xuICAvLyAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAvLyAgIGNvbnN0IGN1cnJlbnRTbmFrZUJsb2NrID0gY3JlYXRlQmxvY2tFbGVtZW50KCk7XG4gIC8vICAgY29uc3QgcmVhbFBvc2l0aW9uWCA9IE1hdGguZmxvb3IobW91c2VQb3NpdGlvbi54Q29vcmQgKiBsYXRlc3RCbG9ja1NpemUpO1xuICAvLyAgIGNvbnN0IHJlYWxQb3NpdGlvblkgPSBNYXRoLmZsb29yKG1vdXNlUG9zaXRpb24ueUNvb3JkICogbGF0ZXN0QmxvY2tTaXplKTtcblxuICAvLyAgIGNvbnNvbGUubG9nKG1vdXNlUG9zaXRpb24sICdUSEUgQ1VSUkVOVCBNT1VTRSBQT1NJVElPTicpO1xuXG4gIC8vICAgY29uc29sZS5sb2cocmVhbFBvc2l0aW9uWCwgJ3RoZSByZWFsIHBvc2l0aW9uIHgnKTtcbiAgLy8gICBjb25zb2xlLmxvZyhyZWFsUG9zaXRpb25ZLCAndGhlIHJlYWwgcG9zaXRpb24geScpO1xuXG4gIC8vICAgY3VycmVudFNuYWtlQmxvY2suc3R5bGUubGVmdCA9IGAke3JlYWxQb3NpdGlvblh9cHhgO1xuICAvLyAgIGN1cnJlbnRTbmFrZUJsb2NrLnN0eWxlLnRvcCA9IGAke3JlYWxQb3NpdGlvbll9cHhgO1xuXG4gIC8vICAgZWxlbWVudC5zaGlwR3JpZC5hcHBlbmRDaGlsZChjdXJyZW50U25ha2VCbG9jayk7XG4gIC8vIH07XG5cbiAgY29uc3QgY3JlYXRlU2hpcEJsb2NrID0gKHNoaXBQb3NpdGlvbiwgbGF0ZXN0QmxvY2tTaXplLCBzaGlwVHlwZSkgPT4ge1xuICAgIGNvbnN0IHNoaXBCbG9jayA9IGNyZWF0ZUJsb2NrRWxlbWVudChzaGlwVHlwZSwgY3JlYXRlRG9tRWxlbWVudCk7XG5cbiAgICBjb25zdCByZWFsUG9zaXRpb25YID0gTWF0aC5mbG9vcihzaGlwUG9zaXRpb24ueENvb3JkICogbGF0ZXN0QmxvY2tTaXplKTtcbiAgICBjb25zdCByZWFsUG9zaXRpb25ZID0gTWF0aC5mbG9vcihzaGlwUG9zaXRpb24ueUNvb3JkICogbGF0ZXN0QmxvY2tTaXplKTtcbiAgICBzaGlwQmxvY2suc3R5bGUubGVmdCA9IGAke3JlYWxQb3NpdGlvblh9cHhgO1xuICAgIHNoaXBCbG9jay5zdHlsZS50b3AgPSBgJHtyZWFsUG9zaXRpb25ZfXB4YDtcblxuICAgIHJldHVybiBzaGlwQmxvY2s7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQWxyZWFkeVBsYWNlZFNoaXBzID0gKHNoaXBHcmlkLCBsYXRlc3RCbG9ja1NpemUpID0+IHtcbiAgICBjb25zdCBnYW1lVmFsdWVzID0gYWN0aXZlR2FtZS5nZXRHYW1lVmFsdWVzKCk7XG4gICAgY29uc3QgY2hlY2tCb2FyZFNoaXBzID1cbiAgICAgIGdhbWVWYWx1ZXMucGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKS5jdXJyZW50U2hpcHM7XG5cbiAgICBjaGVja0JvYXJkU2hpcHMuZm9yRWFjaCgocGxheWVyQ2hlY2tTaGlwcykgPT4ge1xuICAgICAgcGxheWVyQ2hlY2tTaGlwcy5mb3JFYWNoKChib2F0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBCbG9jayA9IGNyZWF0ZVNoaXBCbG9jayhib2F0LCBsYXRlc3RCbG9ja1NpemUpO1xuICAgICAgICBzaGlwR3JpZC5hcHBlbmRDaGlsZChzaGlwQmxvY2spO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUGxhY2VkU2hpcCA9IChsYXRlc3RCbG9ja1NpemUpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgY29uc3QgeyBzaGlwR3JpZCB9ID0gZWxlbWVudDtcblxuICAgIGlmICghcGxhY2VkU2hpcCkgcmV0dXJuIHBsYWNlZFNoaXA7XG5cbiAgICBzaGlwR3JpZC5pbm5lckhUTUwgPSAnJztcblxuICAgIHBsYWNlZFNoaXAuZm9yRWFjaCgoc2hpcFBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzaGlwQmxvY2sgPSBjcmVhdGVTaGlwQmxvY2soc2hpcFBvc2l0aW9uLCBsYXRlc3RCbG9ja1NpemUpO1xuICAgICAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQoc2hpcEJsb2NrKTtcbiAgICB9KTtcblxuICAgIHJlbmRlckFscmVhZHlQbGFjZWRTaGlwcyhzaGlwR3JpZCwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VBeGlzID0gKCkgPT4ge1xuICAgIGlmIChheGlzID09PSAneScpIGF4aXMgPSAneCc7XG4gICAgZWxzZSBheGlzID0gJ3knO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVTaGlwQnlEaXJlY3Rpb24gPSAobW91c2VMb2NhdGlvbiwgY3VycmVudFNoaXAsIGN1cnJlbnRBeGlzKSA9PiB7XG4gICAgbGV0IGxhdGVzdFNoaXAgPSBmYWxzZTtcblxuICAgIGlmIChwb3NpdGlvbi5jaGVja091dE9mQm91bmNlKGN1cnJlbnRTaGlwWzBdKSkgcmV0dXJuIGxhdGVzdFNoaXA7XG5cbiAgICBjb25zdCBuZXdYUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihcbiAgICAgIG1vdXNlTG9jYXRpb24ueENvb3JkLFxuICAgICAgMFxuICAgICkueENvb3JkO1xuXG4gICAgY29uc3QgbmV3WVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICAwLFxuICAgICAgbW91c2VMb2NhdGlvbi55Q29vcmRcbiAgICApLnlDb29yZDtcblxuICAgIGxldCBuZXdTaGlwUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihcbiAgICAgIG5ld1hQb3NpdGlvbixcbiAgICAgIGN1cnJlbnRTaGlwWzBdLnlDb29yZFxuICAgICk7XG5cbiAgICBpZiAoY3VycmVudEF4aXMgPT09ICd4Jykge1xuICAgICAgbmV3U2hpcFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICAgIGN1cnJlbnRTaGlwWzBdLnhDb29yZCxcbiAgICAgICAgbmV3WVBvc2l0aW9uXG4gICAgICApO1xuICAgIH1cblxuICAgIGxhdGVzdFNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAoXG4gICAgICBuZXdTaGlwUG9zaXRpb24sXG4gICAgICBjdXJyZW50U2hpcC5sZW5ndGgsXG4gICAgICBjdXJyZW50QXhpc1xuICAgICk7XG5cbiAgICByZXR1cm4gbGF0ZXN0U2hpcDtcbiAgfTtcblxuICBjb25zdCBwbGFjZVBsYXllclNoaXAgPSAobGF0ZXN0U2hpcCwgbGF0ZXN0QXhpcywgbGF0ZXN0R2FtZSkgPT4ge1xuICAgIGlmIChsYXRlc3RTaGlwKSBsYXRlc3RHYW1lLnNldHVwU2hpcChsYXRlc3RTaGlwWzBdLCBsYXRlc3RBeGlzKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VQbGF5ZXJTaGlwRXZlbnQgPSAoKSA9PiB7XG4gICAgcGxhY2VQbGF5ZXJTaGlwKHBsYWNlZFNoaXAsIGF4aXMsIGFjdGl2ZUdhbWUpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFVpRXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmaW5kTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5zaGlwTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZmluZFRvdWNoUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VQbGF5ZXJTaGlwRXZlbnQpO1xuXG4gICAgZWxlbWVudC5yb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VBeGlzKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVVaUV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBlbGVtZW50LnNoaXBMYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmaW5kTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5zaGlwTGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZmluZFRvdWNoUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VQbGF5ZXJTaGlwRXZlbnQpO1xuXG4gICAgZWxlbWVudC5yb3RhdGVCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VBeGlzKTtcbiAgfTtcblxuICBjb25zdCBjaGVja01vdXNlVGFyZ2V0ID0gKGVsZW1lbnRDbGFzcykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnRDbGFzcywgJ3RoZSBlbGVtZW50IGNhbHNzJyk7XG4gICAgaWYgKGVsZW1lbnRDbGFzcyAhPT0gJ2dyaWRPdmVybGF5IGNvbXB1dGVyR3JpZE92ZXJsYXknKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlTW91c2VQb3NpdGlvbiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlVGFyZ2V0ID0gY2hlY2tNb3VzZVRhcmdldChldmVudC50YXJnZXQuY2xhc3NOYW1lKTtcbiAgICBpZiAoIW1vdXNlVGFyZ2V0KSBtb3VzZUJsb2NrTG9jYXRpb24gPSBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tTaGlwcyA9ICgpID0+IHtcbiAgICBhY3RpdmVHYW1lLmF0dGFja0JvYXRzKG1vdXNlQmxvY2tMb2NhdGlvbik7XG4gIH07XG5cbiAgY29uc3QgYWRkR2FtZUV2ZW50cyA9ICgpID0+IHtcbiAgICByZW1vdmVVaUV2ZW50cygpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgY2hhbmdlTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5jb21wdXRlckdyaWRMYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmaW5kTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5jb21wdXRlckdyaWRMYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGF0dGFja1NoaXBzKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJTaGlwcyA9IChzaGlwcywgZ3JpZCwgbGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcEdyb3VwKSA9PiB7XG4gICAgICBzaGlwR3JvdXAuZm9yRWFjaCgoYm9hdCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwRWxlbWVudCA9IGNyZWF0ZVNoaXBCbG9jayhib2F0LCBsYXRlc3RCbG9ja1NpemUpO1xuICAgICAgICBncmlkLmFwcGVuZENoaWxkKHNoaXBFbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckhpdHMgPSAoc2hpcHMsIHNoaXBUeXBlLCBncmlkLCBsYXRlc3RCbG9ja1NpemUpID0+IHtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwUG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHNoaXBFbGVtZW50ID0gY3JlYXRlU2hpcEJsb2NrKFxuICAgICAgICBzaGlwUG9zaXRpb24sXG4gICAgICAgIGxhdGVzdEJsb2NrU2l6ZSxcbiAgICAgICAgc2hpcFR5cGVcbiAgICAgICk7XG4gICAgICBncmlkLmFwcGVuZENoaWxkKHNoaXBFbGVtZW50KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVDdXJzb3JFbGVtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY29tcHV0ZXJHcmlkIH0gPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyR3JpZC5pbm5lckhUTUwpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckdyaWRzID0gKGJsb2NrU2l6ZTIsIG1vdXNlUG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBnYW1lVmFsdWVzID0gYWN0aXZlR2FtZS5nZXRHYW1lVmFsdWVzKCk7XG5cbiAgICBjb25zdCB7IHBsYXllckdyaWQgfSA9IGRvbS5nZXRFbGVtZW50cygpO1xuICAgIGNvbnN0IHsgY29tcHV0ZXJHcmlkIH0gPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAgIHBsYXllckdyaWQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29tcHV0ZXJHcmlkLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgcGxheWVyQm9hcmRWYWx1ZXMgPSBnYW1lVmFsdWVzLnBsYXllckJvYXJkLmdldFZhbHVlcygpO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmRWYWx1ZXMgPSBnYW1lVmFsdWVzLmNvbXB1dGVyQm9hcmQuZ2V0VmFsdWVzKCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJCb2FyZFZhbHVlcywgJ3BsYXllckJvYXJkVmFsdWVzJyk7XG4gICAgLy8gY29uc29sZS5sb2coY29tcHV0ZXJCb2FyZFZhbHVlcywgJ2NvbXB1dGVyQm9hcmRWYWx1ZXMnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJCb2FyZFZhbHVlcywgJ3RoZSBwbGF5ZXIgYm9hcmQgdmFsdWVzJyk7XG5cbiAgICByZW5kZXJTaGlwcyhwbGF5ZXJCb2FyZFZhbHVlcy5jdXJyZW50U2hpcHMsIHBsYXllckdyaWQsIGJsb2NrU2l6ZTIpO1xuICAgIHJlbmRlckhpdHMocGxheWVyQm9hcmRWYWx1ZXMuaGl0cywgJ2hpdEJsb2NrJywgcGxheWVyR3JpZCwgYmxvY2tTaXplMik7XG4gICAgcmVuZGVySGl0cyhwbGF5ZXJCb2FyZFZhbHVlcy5taXNzZXMsICdtaXNzQmxvY2snLCBwbGF5ZXJHcmlkLCBibG9ja1NpemUyKTtcblxuICAgIHJlbmRlckhpdHMoY29tcHV0ZXJCb2FyZFZhbHVlcy5oaXRzLCAnaGl0QmxvY2snLCBjb21wdXRlckdyaWQsIGJsb2NrU2l6ZTIpO1xuICAgIHJlbmRlckhpdHMoXG4gICAgICBjb21wdXRlckJvYXJkVmFsdWVzLm1pc3NlcyxcbiAgICAgICdtaXNzQmxvY2snLFxuICAgICAgY29tcHV0ZXJHcmlkLFxuICAgICAgYmxvY2tTaXplMlxuICAgICk7XG5cbiAgICBjb25zdCBtb3VzZVNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAobW91c2VQb3NpdGlvbiwgMSwgJ3gnKTtcblxuICAgIGlmIChtb3VzZVNoaXApIHtcbiAgICAgIHJlbmRlckhpdHMobW91c2VTaGlwLCAnY3Vyc29yQmxvY2snLCBjb21wdXRlckdyaWQsIGJsb2NrU2l6ZTIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJTdGF0cyA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lVmFsdWVzID0gYWN0aXZlR2FtZS5nZXRHYW1lVmFsdWVzKCk7XG5cbiAgICBjb25zdCB7IHBsYXllckhpdHMsIHBsYXllck1pc3NlcyB9ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgY29uc3QgeyBjb21wdXRlckhpdHMsIGNvbXB1dGVyTWlzc2VzIH0gPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAgIGNvbnN0IHBsYXllckJvYXJkVmFsdWVzID0gZ2FtZVZhbHVlcy5wbGF5ZXJCb2FyZC5nZXRWYWx1ZXMoKTtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkVmFsdWVzID0gZ2FtZVZhbHVlcy5jb21wdXRlckJvYXJkLmdldFZhbHVlcygpO1xuXG4gICAgcGxheWVySGl0cy50ZXh0Q29udGVudCA9IGBIaXRzIC0gJHtwbGF5ZXJCb2FyZFZhbHVlcy5oaXRzLmxlbmd0aH1gO1xuICAgIHBsYXllck1pc3Nlcy50ZXh0Q29udGVudCA9IGBNaXNzZXMgLSAke3BsYXllckJvYXJkVmFsdWVzLm1pc3Nlcy5sZW5ndGh9YDtcblxuICAgIGNvbXB1dGVySGl0cy50ZXh0Q29udGVudCA9IGBIaXRzIC0gJHtjb21wdXRlckJvYXJkVmFsdWVzLmhpdHMubGVuZ3RofWA7XG4gICAgY29tcHV0ZXJNaXNzZXMudGV4dENvbnRlbnQgPSBgTWlzc2VzIC0gJHtjb21wdXRlckJvYXJkVmFsdWVzLm1pc3Nlcy5sZW5ndGh9YDtcbiAgfTtcblxuICBjb25zdCByZW5kZXJHYW1lID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZ2FtZVN0YXR1cyA9IGFjdGl2ZUdhbWUuZ2FtZUlzT3ZlcigpO1xuXG4gICAgICBjb25zdCBsYXRlc3RCbG9ja1NpemUgPSBjaGFuZ2VCbG9ja1NpemUod2luZG93Lm1hdGNoTWVkaWEpO1xuICAgICAgcmVuZGVyR3JpZHMobGF0ZXN0QmxvY2tTaXplLCBtb3VzZUJsb2NrTG9jYXRpb24pO1xuICAgICAgcmVuZGVyU3RhdHMoKTtcblxuICAgICAgaWYgKCFnYW1lU3RhdHVzLmdhbWVGaW5pc2hlZCkgcmVuZGVyR2FtZShsYXRlc3RCbG9ja1NpemUpO1xuICAgICAgcmVuZGVyR2FtZShsYXRlc3RCbG9ja1NpemUpO1xuICAgIH0sIHJlbmRlclNwZWVkKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgZWxlbWVudHMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGVsZW1lbnRzLnNlY3Rpb25TY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbGVtZW50cy5zaGlwR3JpZC5pbm5lckhUTUwgPSAnJztcbiAgfTtcblxuICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgcmVtb3ZlU2hpcFNlY3Rpb24oKTtcblxuICAgIGFjdGl2ZUdhbWUuc2V0dXBHYW1lKCk7XG4gICAgYWRkR2FtZUV2ZW50cygpO1xuXG4gICAgcmVuZGVyR2FtZSgpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclNlbGVjdGlvbkdyaWQgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBnYW1lVmFsdWUgPSBhY3RpdmVHYW1lLmdldEdhbWVWYWx1ZXMoKTtcbiAgICAgIGNvbnN0IGNoZWNrQm9hcmRTaGlwcyA9XG4gICAgICAgIGdhbWVWYWx1ZS5wbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpLmN1cnJlbnRTaGlwcztcblxuICAgICAgY2hhbmdlQmxvY2tTaXplKHdpbmRvdy5tYXRjaE1lZGlhKTtcblxuICAgICAgaWYgKGFjdGl2ZUdhbWUuY2hlY2tTZXR1cChnYW1lVmFsdWUucGxheWVyQ2hlY2tCb2FyZCkpIGRpc2FibGVTdGFydGVyVWkoKTtcblxuICAgICAgaWYgKG1vdXNlQmxvY2tMb2NhdGlvbikge1xuICAgICAgICBsZXQgY3VycmVudFNoaXAgPSBhY3RpdmVHYW1lLmFycmFuZ2VCbG9ja3MobW91c2VCbG9ja0xvY2F0aW9uLCBheGlzKTtcbiAgICAgICAgaWYgKCFjdXJyZW50U2hpcCAmJiBwbGFjZWRTaGlwKSB7XG4gICAgICAgICAgY3VycmVudFNoaXAgPSBtb3ZlU2hpcEJ5RGlyZWN0aW9uKFxuICAgICAgICAgICAgbW91c2VCbG9ja0xvY2F0aW9uLFxuICAgICAgICAgICAgcGxhY2VkU2hpcCxcbiAgICAgICAgICAgIGF4aXNcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRTaGlwKSBwbGFjZWRTaGlwID0gY3VycmVudFNoaXA7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cocGxhY2VkU2hpcCwgJ3RoZSBjdXJyZW50IHBsYWNlZCBzaGlwJyk7XG5cbiAgICAgICAgaWYgKHBsYWNlZFNoaXApIHJlbmRlclBsYWNlZFNoaXAoYmxvY2tTaXplKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhY3RpdmVHYW1lLmNoZWNrU2V0dXAoY2hlY2tCb2FyZFNoaXBzKSkgcmVuZGVyU2VsZWN0aW9uR3JpZCgpO1xuICAgICAgZWxzZSBzdGFydEdhbWUoYmxvY2tTaXplKTtcbiAgICB9LCByZW5kZXJTcGVlZCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsdWVzID0gKCkgPT4gKHtcbiAgICBibG9ja1NpemUsXG4gICAgcGxhY2VkU2hpcCxcbiAgICBheGlzLFxuICAgIG1vdXNlQmxvY2tMb2NhdGlvbixcbiAgfSk7XG5cbiAgY29uc3QgYWN0aXZhdGVVaSA9ICgpID0+IHtcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvbS5nZXRQYWdlKCk7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBwYWdlQ29udGVudDtcblxuICAgIGFkZFVpRXZlbnRzKCk7XG4gICAgcmVuZGVyU2VsZWN0aW9uR3JpZCgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWN0aXZhdGVVaSxcbiAgICBjcmVhdGVCbG9ja0VsZW1lbnQsXG4gICAgZ2V0TW91c2VQb3NpdGlvbixcbiAgICBtb3ZlU2hpcEJ5RGlyZWN0aW9uLFxuICAgIGNoYW5nZUJsb2NrU2l6ZSxcbiAgICBjaGFuZ2VBeGlzLFxuICAgIGdldFZhbHVlcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVpO1xuIl0sIm5hbWVzIjpbInJlZnJlc2hpbmdMb2dvIiwiRG9tIiwiZ2V0RWxlbWVudHMiLCJvdmVybGF5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VjdGlvblNjcmVlbiIsInNoaXBUZXh0Iiwic2hpcEdyaWQiLCJzaGlwTGF5ZXIiLCJyb3RhdGVCdXR0b24iLCJncmlkcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoaXRzIiwibWlzc2VzIiwicGxheWVyR3JpZCIsInBsYXllckhpdHMiLCJwbGF5ZXJNaXNzZXMiLCJwbGF5ZXJTdGF0cyIsImNvbXB1dGVyR3JpZCIsImNvbXB1dGVySGl0cyIsImNvbXB1dGVyTWlzc2VzIiwiY29tcHV0ZXJTdGF0cyIsImNvbnRlbnQiLCJjb21wdXRlckdyaWRMYXllciIsImdldFBhZ2UiLCJQb3NpdGlvbiIsIlNoaXAiLCJQcmFjdGljYWwiLCJHYW1lYm9hcmQiLCJwb3NpdGlvbiIsInNoaXAiLCJwcmFjdGljYWwiLCJjdXJyZW50U2hpcHMiLCJyYW5kb21pemUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21BeGlzIiwiYXhpZXMiLCJsZW5ndGgiLCJwbGFjZUFsbFNoaXBzIiwic2hpcHNBcnJheSIsImNvbXBhcmVTaGlwc0FycmF5IiwibGF0ZXN0U2hpcHNBcnJheSIsInNoaXBzIiwic2hpcHNEb0NvbGxpZGUiLCJmb3JFYWNoIiwibGF0ZXN0U2hpcHMiLCJib2F0IiwibGF0ZXN0Qm9hdCIsImNvbXBhcmVQb3NpdGlvbiIsInBsYXllclBsYWNlU2hpcCIsImxvY2F0aW9uIiwiYXhpcyIsImN1cnJlbnRBcnJheSIsImNvcHlBcnJheSIsInNoaXBsZW5ndGgiLCJjdXJyZW50U2hpcCIsImNyZWF0ZVNoaXAiLCJpc0NvbGxpZGVkIiwicHVzaCIsInBsYWNlUmFuZG9tU2hpcHMiLCJyYW5kb21pemVyIiwicmFuZG9tQXhpZXMiLCJsYXRlc3RMZW5ndGgiLCJyYW5kb21Qb3NpdGlvbiIsImNyZWF0ZVBvc2l0aW9uIiwicmFuZG9tU2hpcCIsInNoaXBDb2xsaWRlcyIsInBsYWNlU2hpcHNSYW5kb21seSIsImZpbHRlckF0dGFjayIsImFycmF5IiwiY3VycmVudEF0dGFjayIsImN1cnJlbnRBdHRhY2tBcnJheSIsImZpbHRlciIsIml0ZW0iLCJ4Q29vcmQiLCJ5Q29vcmQiLCJoYXNIaXRTaGlwIiwiaGl0UG9zaXRpb24iLCJsYXRlc3RIaXRzIiwibGF0ZXN0TWlzc2VzIiwiaGFzQmVlbkhpdCIsImhhc0JlZW5NaXNzIiwiYXR0YWNrU2hpcCIsImxhdGVzdFBvc2l0aW9uIiwiY3VycmVudEhpdHMiLCJjdXJyZW50TWlzc2VzIiwiaXNIaXQiLCJzaGlwQXJyYXkiLCJwb3NpdGlvbnNBcnJheSIsImhpdCIsImhpdEFycmF5Iiwic2hpcEFycmF5cyIsImZpbmFsT2JqZWN0IiwicmVjaWV2ZUF0dGFjayIsInJlc3VsdCIsImNyZWF0ZVJhbmRvbUNvb3JkcyIsImlzTW9ja1JhbmRvbSIsImNhbGxSYW5kb21pemVyIiwicmFuZG9tWCIsInJhbmRvbVkiLCJnZXRUeXBlT2ZQbGFjZWRTaGlwIiwic2hpcFR5cGVzIiwic2hpcFR5cGUiLCJzaGlwTGVuZ3RoIiwicmVjaWV2ZVJhbmRvbUF0dGFjayIsImhhc0hpdCIsImlzQWxsU3VuayIsImhhc1N1bmtlZCIsImlzU3VuayIsImdldFZhbHVlcyIsIkdhbWUiLCJwbGF5ZXJCb2FyZCIsImNvbXB1dGVyQm9hcmQiLCJwbGF5ZXJDaGVja0JvYXJkIiwiY2hlY2tTZXR1cCIsInBsYXllckNoZWNrU2hpcHMiLCJzZXR1cEdhbWUiLCJwbGF5ZXJDaGVja1ZhbHVlcyIsImF0dGFja0JvYXRzIiwiY29vcmRzIiwic2V0dXBTaGlwIiwiZ2FtZUlzT3ZlciIsIm1lc3NhZ2UiLCJnYW1lRmluaXNoZWQiLCJhcnJhbmdlQmxvY2tzIiwibW91c2VQb3NpdGlvbiIsImN1cnJlbnRSb3RhdGlvbiIsInNoaXBUeXBlT2JqZWN0IiwiZ2V0R2FtZVZhbHVlcyIsImFjdGl2ZUdhbWUiLCJjaGVja091dE9mQm91bmNlIiwibmV3UG9zaXRpb24iLCJhZGRQb3NpdGlvbiIsInBvc2l0aW9uMSIsInBvc2l0aW9uMiIsIm11bHRpcGx5UG9zaXRpb24iLCJjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsIiwibmV3QXJyYXkiLCJpc09iamVjdCIsImN1cnJlbnRPYmplY3QiLCJjaGVja09iamVjdCIsIm9iamVjdDEiLCJvYmplY3QyIiwiaW5kZXgiLCJzZWNvbmRJbmRleCIsIm9iamVjdElzRXF1YWwiLCJjdXJyZW50T2JqZWN0MiIsImN1cnJlbnRPYmplY3RWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjdXJyZW50T2JqZWN0MlZhbHVlcyIsIm9iamVjdEtleXMiLCJrZXlzIiwib2JqZWN0S2V5czIiLCJrZXkiLCJpdGVtMiIsImNoZWNrT2JqZWN0Qm9vbCIsImdldEFkZGVkUG9zaXRpb24iLCJhZGRlZFBvc2l0aW9uIiwibGVuZ3RoMSIsInBvcHVsYXRlU2hpcHMiLCJjdXJyZW50UG9zaXRpb24iLCJsYXRlc3RBcnJheSIsImFycmF5TGVuZ3RoIiwicG9zIiwiVWkiLCJkb20iLCJyZW5kZXJTcGVlZCIsImJsb2NrU2l6ZSIsInBsYWNlZFNoaXAiLCJtb3VzZUJsb2NrTG9jYXRpb24iLCJjcmVhdGVEb21FbGVtZW50IiwiZWxlbWVudE5hbWUiLCJjcmVhdGVFbGVtZW50IiwiZ2V0TW91c2VQb3NpdGlvbiIsIm9mZnNldFgiLCJvZmZzZXRZIiwib3V0T2ZCb3VuY2UiLCJmaW5kTW91c2VQb3NpdGlvbiIsImV2ZW50IiwiY3VycmVudE1vdXNlUG9zaXRpb24iLCJmaW5kVG91Y2hQb3NpdGlvbiIsInJlY3QiLCJ0YXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3VjaE9mZnNldFgiLCJ0YXJnZXRUb3VjaGVzIiwiY2xpZW50WCIsIngiLCJ0b3VjaE9mZnNldFkiLCJjbGllbnRZIiwieSIsInRvdWNoUG9zaXRpb24iLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJjaGFuZ2VCbG9ja1NpemUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImNyZWF0ZUJsb2NrRWxlbWVudCIsImJsb2NrQ2xhc3MiLCJjcmVhdGVCbG9jayIsImxhdGVzdENsYXNzIiwiYmxvY2tFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlzYWJsZVN0YXJ0ZXJVaSIsImNyZWF0ZVNoaXBCbG9jayIsInNoaXBQb3NpdGlvbiIsImxhdGVzdEJsb2NrU2l6ZSIsInNoaXBCbG9jayIsInJlYWxQb3NpdGlvblgiLCJyZWFsUG9zaXRpb25ZIiwic3R5bGUiLCJsZWZ0IiwidG9wIiwicmVuZGVyQWxyZWFkeVBsYWNlZFNoaXBzIiwiZ2FtZVZhbHVlcyIsImNoZWNrQm9hcmRTaGlwcyIsImFwcGVuZENoaWxkIiwicmVuZGVyUGxhY2VkU2hpcCIsImVsZW1lbnQiLCJpbm5lckhUTUwiLCJjaGFuZ2VBeGlzIiwibW92ZVNoaXBCeURpcmVjdGlvbiIsIm1vdXNlTG9jYXRpb24iLCJjdXJyZW50QXhpcyIsImxhdGVzdFNoaXAiLCJuZXdYUG9zaXRpb24iLCJuZXdZUG9zaXRpb24iLCJuZXdTaGlwUG9zaXRpb24iLCJwbGFjZVBsYXllclNoaXAiLCJsYXRlc3RBeGlzIiwibGF0ZXN0R2FtZSIsInBsYWNlUGxheWVyU2hpcEV2ZW50IiwiYWRkVWlFdmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlVWlFdmVudHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2hlY2tNb3VzZVRhcmdldCIsImVsZW1lbnRDbGFzcyIsImNoYW5nZU1vdXNlUG9zaXRpb24iLCJtb3VzZVRhcmdldCIsImNsYXNzTmFtZSIsImF0dGFja1NoaXBzIiwiYWRkR2FtZUV2ZW50cyIsIndpbmRvdyIsInJlbmRlclNoaXBzIiwiZ3JpZCIsInNoaXBHcm91cCIsInNoaXBFbGVtZW50IiwicmVuZGVySGl0cyIsInJlbW92ZUN1cnNvckVsZW1lbnQiLCJyZW5kZXJHcmlkcyIsImJsb2NrU2l6ZTIiLCJwbGF5ZXJCb2FyZFZhbHVlcyIsImNvbXB1dGVyQm9hcmRWYWx1ZXMiLCJtb3VzZVNoaXAiLCJyZW5kZXJTdGF0cyIsInRleHRDb250ZW50IiwicmVuZGVyR2FtZSIsInNldFRpbWVvdXQiLCJnYW1lU3RhdHVzIiwicmVtb3ZlU2hpcFNlY3Rpb24iLCJlbGVtZW50cyIsImRpc3BsYXkiLCJzdGFydEdhbWUiLCJyZW5kZXJTZWxlY3Rpb25HcmlkIiwiZ2FtZVZhbHVlIiwiYWN0aXZhdGVVaSIsInBhZ2VDb250ZW50IiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=