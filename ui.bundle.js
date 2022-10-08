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
    console.log(elementClass, 'the element calss');
    if (elementClass !== 'gridOverlay computerGridOverlay') return false;
    return true;
  };

  var changeMousePosition = function changeMousePosition(event) {
    var mouseTarget = checkMouseTarget(event.target.className);
    if (!mouseTarget) mouseBlockLocation = mouseTarget;
  };

  var addGameEvents = function addGameEvents() {
    removeUiEvents();
    var element = dom.getElements();
    window.addEventListener('mousemove', changeMousePosition);
    element.computerGridLayer.addEventListener('mousemove', findMousePosition);
    element.computerGridLayer.addEventListener('touchmove', findTouchPosition);
  };

  var addShips = function addShips(ships, shipType, grid, latestBlockSize, isMousePosition) {
    ships.forEach(function (shipGroup) {
      shipGroup.forEach(function (boat) {
        var shipElement = createShipBlock(boat, latestBlockSize, shipType);
        grid.appendChild(shipElement);
      });
    });
  };

  var renderGrids = function renderGrids(blockSize2, mousePosition) {
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
    var mouseShip = ship.createShip(mousePosition, 1, 'x');
    if (!mouseShip) computerGrid.innerHTML = '';else addShips([mouseShip], 'cursorBlock', computerGrid, blockSize2);
  };

  var renderGame = function renderGame() {
    setTimeout(function () {
      var gameStatus = _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.gameIsOver();
      var latestBlockSize = changeBlockSize(window.matchMedia);
      renderGrids(latestBlockSize, mouseBlockLocation);
      if (!gameStatus.gameFinished) renderGame(latestBlockSize);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0JBQWtCLEVBQWxCQTtJQUp1QixDQUFQO0VBQUEsQ0FBbEI7O0VBT0EsSUFBTTRGLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07SUFDdkIsSUFBTUMsV0FBVyxHQUFHakcsR0FBRyxDQUFDN0ksT0FBSixFQUFwQjtJQUNBckIsUUFBUSxDQUFDb1EsSUFBVCxDQUFjL0MsU0FBZCxHQUEwQjhDLFdBQTFCO0lBRUFqQyxXQUFXO0lBQ1g4QixtQkFBbUI7RUFDcEIsQ0FORDs7RUFRQSxPQUFPO0lBQ0xFLFVBQVUsRUFBVkEsVUFESztJQUVMbEUsa0JBQWtCLEVBQWxCQSxrQkFGSztJQUdMdEIsZ0JBQWdCLEVBQWhCQSxnQkFISztJQUlMNkMsbUJBQW1CLEVBQW5CQSxtQkFKSztJQUtMMUIsZUFBZSxFQUFmQSxlQUxLO0lBTUx5QixVQUFVLEVBQVZBLFVBTks7SUFPTDdHLFNBQVMsRUFBVEE7RUFQSyxDQUFQO0FBU0QsQ0FqV0Q7O0FBbVdBLGlFQUFld0QsRUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3ByYWN0aWNhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZnJlc2hpbmdMb2dvIGZyb20gJy4uL2ltYWdlcy9yZWZyZXNoTG9nby5zdmcnO1xuXG5jb25zdCBEb20gPSAoKSA9PiB7XG4gIGNvbnN0IGdldEVsZW1lbnRzID0gKCkgPT4gKHtcbiAgICBvdmVybGF5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpLFxuICAgIHNlY3Rpb25TY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uU2NyZWVuJyksXG4gICAgc2hpcFRleHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwVGV4dCcpLFxuICAgIHNoaXBHcmlkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcEdyaWQnKSxcbiAgICBzaGlwTGF5ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwTGF5ZXInKSxcbiAgICByb3RhdGVCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGVCdXR0b24nKSxcbiAgICBncmlkczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZCcpKSxcbiAgICBoaXRzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaXRzJykpLFxuICAgIG1pc3NlczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWlzc2VzJykpLFxuICAgIHBsYXllckdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJHcmlkJyksXG4gICAgcGxheWVySGl0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckhpdHMnKSxcbiAgICBwbGF5ZXJNaXNzZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJNaXNzZXMnKSxcbiAgICBjb21wdXRlckdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlckdyaWQnKSxcbiAgICBjb21wdXRlckhpdHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlckhpdHMnKSxcbiAgICBjb21wdXRlck1pc3NlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyTWlzc2VzJyksXG4gICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKSxcbiAgICBjb21wdXRlckdyaWRMYXllcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyR3JpZExheWVyJyksXG4gIH0pO1xuXG4gIGNvbnN0IGdldFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uU2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcFNlbGVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJzaGlwVGl0bGVcIj5CQVRUTEVTSElQPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwic2hpcFRleHRcIj5QbGFjZSB5b3VyIEJhdHRsZXNoaXA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcExheWVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBPdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBHcmlkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdGF0ZUJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm90YXRlSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJHtyZWZyZXNoaW5nTG9nb31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUm90YXRlIEltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1haW4gY2xhc3M9XCJtYWluU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5UaXRsZVwiPjxoMT5CQVRUTEVTSElQPC9oMT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJTZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXJCb2FyZCBib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImJvYXJkVGl0bGVcIj5QbGF5ZXIgQm9hcmQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkTGF5ZXIgcGxheWVyR3JpZExheWVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZE92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXJHcmlkIGdyaWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyU3RhdHMgc3RhdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInBsYXllckhpdHMgaGl0c1wiPkhpdHMgMDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwbGF5ZXJNaXNzZXMgbWlzc2VzXCI+TWlzc2VzIDA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcHV0ZXJCb2FyZCBib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImJvYXJkVGl0bGVcIj5Db21wdXRlciBCb2FyZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRMYXllciBjb21wdXRlckdyaWRMYXllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRPdmVybGF5IGNvbXB1dGVyR3JpZE92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wdXRlckdyaWQgZ3JpZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wdXRlclN0YXRzIHN0YXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjb21wdXRlckhpdHMgaGl0c1wiPkhpdHMgMDwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvbXB1dGVyTWlzc2VzIG1pc3Nlc1wiPk1pc3NlcyAwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY29weXJpZ2h0TWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJzaXRlIGFuZCBjb2RlIGFyZSBtYWRlIGJ5IEJyYXlkZW4gR3JvdGVndXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0UGFnZSwgZ2V0RWxlbWVudHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvbTtcbiIsImltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5pbXBvcnQgUHJhY3RpY2FsIGZyb20gJy4vcHJhY3RpY2FsLmpzJztcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG4gIGNvbnN0IHNoaXAgPSBTaGlwKCk7XG4gIGNvbnN0IHByYWN0aWNhbCA9IFByYWN0aWNhbCgpO1xuXG4gIGxldCBjdXJyZW50U2hpcHMgPSBbXTtcbiAgbGV0IGhpdHMgPSBbXTtcbiAgbGV0IG1pc3NlcyA9IFtdO1xuXG4gIGNvbnN0IHJhbmRvbWl6ZSA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICBjb25zdCByYW5kb21BeGlzID0gKCkgPT4ge1xuICAgIGNvbnN0IGF4aWVzID0gWyd4JywgJ3knXTtcbiAgICByZXR1cm4gYXhpZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXhpZXMubGVuZ3RoKV07XG4gIH07XG5cbiAgY29uc3QgcGxhY2VBbGxTaGlwcyA9IChzaGlwc0FycmF5KSA9PiB7XG4gICAgY3VycmVudFNoaXBzID0gc2hpcHNBcnJheTtcbiAgICByZXR1cm4gY3VycmVudFNoaXBzO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmVTaGlwc0FycmF5ID0gKGxhdGVzdFNoaXBzQXJyYXksIHNoaXBzKSA9PiB7XG4gICAgbGV0IHNoaXBzRG9Db2xsaWRlID0gZmFsc2U7XG4gICAgaWYgKCFzaGlwcykgcmV0dXJuIHNoaXBzRG9Db2xsaWRlO1xuXG4gICAgLy8gY29uc29sZS5sb2cobGF0ZXN0U2hpcHNBcnJheSwgJ3RoZSBjdXJyZWVudCBzaGlwcyBhcnJheScpO1xuICAgIC8vIGNvbnNvbGUubG9nKHNoaXBzLCAndGhlIGN1cnJlbnQgc2hpcHMnKTtcblxuICAgIGxhdGVzdFNoaXBzQXJyYXkuZm9yRWFjaCgobGF0ZXN0U2hpcHMpID0+IHtcbiAgICAgIGxhdGVzdFNoaXBzLmZvckVhY2goKGJvYXQpID0+IHtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgobGF0ZXN0Qm9hdCkgPT4ge1xuICAgICAgICAgIGlmIChwb3NpdGlvbi5jb21wYXJlUG9zaXRpb24oYm9hdCwgbGF0ZXN0Qm9hdCkpIHtcbiAgICAgICAgICAgIHNoaXBzRG9Db2xsaWRlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2hpcHNEb0NvbGxpZGU7XG4gIH07XG5cbiAgY29uc3QgcGxheWVyUGxhY2VTaGlwID0gKGxvY2F0aW9uLCBheGlzKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEFycmF5ID0gcHJhY3RpY2FsLmNvcHlBcnJheShjdXJyZW50U2hpcHMpO1xuXG4gICAgbGV0IHNoaXBsZW5ndGggPSA1IC0gY3VycmVudEFycmF5Lmxlbmd0aDtcblxuICAgIGlmIChzaGlwbGVuZ3RoID09PSAyKSBzaGlwbGVuZ3RoID0gMztcbiAgICBpZiAoc2hpcGxlbmd0aCA9PT0gMSkgc2hpcGxlbmd0aCA9IDI7XG5cbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXAuY3JlYXRlU2hpcChsb2NhdGlvbiwgc2hpcGxlbmd0aCwgYXhpcyk7XG5cbiAgICBjb25zdCBpc0NvbGxpZGVkID0gY29tcGFyZVNoaXBzQXJyYXkoY3VycmVudEFycmF5LCBjdXJyZW50U2hpcCk7XG5cbiAgICBpZiAoY3VycmVudEFycmF5Lmxlbmd0aCA9PT0gNSB8fCAhY3VycmVudFNoaXAgfHwgaXNDb2xsaWRlZCkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRBcnJheTtcbiAgICB9XG5cbiAgICBjdXJyZW50QXJyYXkucHVzaChjdXJyZW50U2hpcCk7XG4gICAgY3VycmVudFNoaXBzID0gY3VycmVudEFycmF5O1xuICAgIHJldHVybiBjdXJyZW50QXJyYXk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VSYW5kb21TaGlwcyA9IChsZW5ndGgsIHNoaXBzQXJyYXksIHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKSA9PiB7XG4gICAgY29uc3QgbGF0ZXN0U2hpcHNBcnJheSA9IHNoaXBzQXJyYXk7XG4gICAgbGV0IGxhdGVzdExlbmd0aCA9IGxlbmd0aDtcbiAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHJhbmRvbWl6ZXIoKSwgcmFuZG9taXplcigpKTtcbiAgICBjb25zdCByYW5kb21TaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgcmFuZG9tUG9zaXRpb24sXG4gICAgICBsYXRlc3RMZW5ndGgsXG4gICAgICByYW5kb21BeGllcygpXG4gICAgKTtcblxuICAgIGlmIChyYW5kb21TaGlwKSB7XG4gICAgICBjb25zdCBzaGlwQ29sbGlkZXMgPSBjb21wYXJlU2hpcHNBcnJheShsYXRlc3RTaGlwc0FycmF5LCByYW5kb21TaGlwKTtcbiAgICAgIGlmICghc2hpcENvbGxpZGVzKSB7XG4gICAgICAgIGlmIChsYXRlc3RMZW5ndGggPiAyKSBsYXRlc3RMZW5ndGggLT0gMTtcbiAgICAgICAgaWYgKHNoaXBzQXJyYXkubGVuZ3RoIDwgNSkgbGF0ZXN0U2hpcHNBcnJheS5wdXNoKHJhbmRvbVNoaXApO1xuXG4gICAgICAgIGlmIChzaGlwc0FycmF5Lmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgIHJldHVybiBsYXRlc3RTaGlwc0FycmF5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWNlUmFuZG9tU2hpcHMoXG4gICAgICBsYXRlc3RMZW5ndGgsXG4gICAgICBsYXRlc3RTaGlwc0FycmF5LFxuICAgICAgcmFuZG9taXplcixcbiAgICAgIHJhbmRvbUF4aWVzXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXBzUmFuZG9tbHkgPSAocmFuZG9taXplciwgcmFuZG9tQXhpZXMpID0+IHtcbiAgICBjb25zdCBzaGlwc0FycmF5ID0gcGxhY2VSYW5kb21TaGlwcyg1LCBbXSwgcmFuZG9taXplciwgcmFuZG9tQXhpZXMpO1xuICAgIGN1cnJlbnRTaGlwcyA9IHNoaXBzQXJyYXk7XG5cbiAgICByZXR1cm4gc2hpcHNBcnJheTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tTaGlwID0gKGxhdGVzdFBvc2l0aW9uLCBzaGlwcywgY3VycmVudEhpdHMsIGN1cnJlbnRNaXNzZXMpID0+IHtcbiAgICBsZXQgaXNIaXQgPSBmYWxzZTtcbiAgICBjb25zdCBsYXRlc3RTaGlwc0FycmF5ID0gW107XG4gICAgY29uc3QgbGF0ZXN0SGl0cyA9IGN1cnJlbnRIaXRzO1xuICAgIGNvbnN0IGxhdGVzdE1pc3NlcyA9IGN1cnJlbnRNaXNzZXM7XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwQXJyYXkpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbnNBcnJheSA9IHByYWN0aWNhbC5jb3B5QXJyYXkoc2hpcEFycmF5KTtcbiAgICAgIGNvbnN0IGhpdCA9IHNoaXAuaGl0KHBvc2l0aW9uc0FycmF5LCBsYXRlc3RQb3NpdGlvbik7XG5cbiAgICAgIGlmIChoaXQuaGl0QXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgcG9zaXRpb25zQXJyYXkgPSBoaXQuc2hpcEFycmF5cztcbiAgICAgICAgbGF0ZXN0SGl0cy5wdXNoKGhpdC5oaXRBcnJheVswXSk7XG4gICAgICB9XG4gICAgICBsYXRlc3RTaGlwc0FycmF5LnB1c2gocG9zaXRpb25zQXJyYXkpO1xuICAgIH0pO1xuICAgIGlmICghaXNIaXQpIGxhdGVzdE1pc3Nlcy5wdXNoKGxhdGVzdFBvc2l0aW9uKTtcblxuICAgIGNvbnN0IGZpbmFsT2JqZWN0ID0ge1xuICAgICAgaXNIaXQsXG4gICAgICBsYXRlc3RTaGlwc0FycmF5LFxuICAgICAgbGF0ZXN0SGl0cyxcbiAgICAgIGxhdGVzdE1pc3NlcyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZpbmFsT2JqZWN0O1xuICB9O1xuXG4gIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAobGF0ZXN0UG9zaXRpb24pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhdHRhY2tTaGlwKGxhdGVzdFBvc2l0aW9uLCBjdXJyZW50U2hpcHMsIGhpdHMsIG1pc3Nlcyk7XG5cbiAgICBjdXJyZW50U2hpcHMgPSByZXN1bHQubGF0ZXN0U2hpcHNBcnJheTtcbiAgICBoaXRzID0gcmVzdWx0LmxhdGVzdEhpdHM7XG4gICAgbWlzc2VzID0gcmVzdWx0LmxhdGVzdE1pc3NlcztcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUmFuZG9tQ29vcmRzID0gKHJhbmRvbWl6ZXIpID0+IHtcbiAgICBsZXQgcmFuZG9tUG9zaXRpb247XG5cbiAgICBpZiAocmFuZG9taXplci5pc01vY2tSYW5kb20pIHtcbiAgICAgIHJhbmRvbVBvc2l0aW9uID0gcmFuZG9taXplci5jYWxsUmFuZG9taXplcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByYW5kb21YID0gcmFuZG9taXplcigpO1xuICAgICAgY29uc3QgcmFuZG9tWSA9IHJhbmRvbWl6ZXIoKTtcbiAgICAgIHJhbmRvbVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24ocmFuZG9tWCwgcmFuZG9tWSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmRvbVBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlckF0dGFjayA9IChhcnJheSwgY3VycmVudEF0dGFjaykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRBdHRhY2tBcnJheSA9IGFycmF5LmZpbHRlcihcbiAgICAgIChpdGVtKSA9PlxuICAgICAgICBpdGVtLnhDb29yZCA9PT0gY3VycmVudEF0dGFjay54Q29vcmQgJiZcbiAgICAgICAgaXRlbS55Q29vcmQgPT09IGN1cnJlbnRBdHRhY2sueUNvb3JkXG4gICAgKTtcblxuICAgIHJldHVybiBjdXJyZW50QXR0YWNrQXJyYXk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VHlwZU9mUGxhY2VkU2hpcCA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFNoaXBzLmxlbmd0aCA9PT0gNSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3Qgc2hpcFR5cGVzID0gW1xuICAgICAgeyBzaGlwVHlwZTogJ2NhcnJpZXInLCBzaGlwTGVuZ3RoOiA1IH0sXG4gICAgICB7IHNoaXBUeXBlOiAnYmF0dGxlc2hpcCcsIHNoaXBMZW5ndGg6IDQgfSxcbiAgICAgIHsgc2hpcFR5cGU6ICdkZXN0b3llcicsIHNoaXBMZW5ndGg6IDMgfSxcbiAgICAgIHsgc2hpcFR5cGU6ICdzdWJtYXJpbmUnLCBzaGlwTGVuZ3RoOiAzIH0sXG4gICAgICB7IHNoaXBUeXBlOiAnZ3VuYm9hdCcsIHNoaXBMZW5ndGg6IDIgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIHNoaXBUeXBlc1tjdXJyZW50U2hpcHMubGVuZ3RoXTtcbiAgfTtcblxuICBjb25zdCByZWNpZXZlUmFuZG9tQXR0YWNrID0gKHJhbmRvbWl6ZXIpID0+IHtcbiAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IGNyZWF0ZVJhbmRvbUNvb3JkcyhyYW5kb21pemVyKTtcblxuICAgIGNvbnN0IGhhc0JlZW5IaXQgPSBmaWx0ZXJBdHRhY2soaGl0cywgcmFuZG9tUG9zaXRpb24pO1xuICAgIGNvbnN0IGhhc0JlZW5NaXNzID0gZmlsdGVyQXR0YWNrKG1pc3NlcywgcmFuZG9tUG9zaXRpb24pO1xuXG4gICAgaWYgKGhhc0JlZW5IaXQubGVuZ3RoID4gMCB8fCBoYXNCZWVuTWlzcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gcmVjaWV2ZVJhbmRvbUF0dGFjayhyYW5kb21pemVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlY2lldmVBdHRhY2socmFuZG9tUG9zaXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IGlzQWxsU3VuayA9ICgpID0+IHtcbiAgICBsZXQgaGFzU3Vua2VkID0gdHJ1ZTtcbiAgICBjdXJyZW50U2hpcHMuZm9yRWFjaCgoc2hpcHMpID0+IHtcbiAgICAgIGlmICghc2hpcC5pc1N1bmsoc2hpcHMpKSB7XG4gICAgICAgIGhhc1N1bmtlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhhc1N1bmtlZDtcbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZXMgPSAoKSA9PiAoe1xuICAgIGN1cnJlbnRTaGlwcyxcbiAgICBoaXRzLFxuICAgIG1pc3NlcyxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhdHRhY2tTaGlwLFxuICAgIHJlY2lldmVBdHRhY2ssXG4gICAgaXNBbGxTdW5rLFxuICAgIHBsYWNlU2hpcHNSYW5kb21seSxcbiAgICBwbGF5ZXJQbGFjZVNoaXAsXG4gICAgcGxhY2VBbGxTaGlwcyxcbiAgICByYW5kb21pemUsXG4gICAgcmVjaWV2ZVJhbmRvbUF0dGFjayxcbiAgICByYW5kb21BeGlzLFxuICAgIGdldFZhbHVlcyxcbiAgICBnZXRUeXBlT2ZQbGFjZWRTaGlwLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuXG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5cbmNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgcGxheWVyQ2hlY2tCb2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcblxuICBjb25zdCBzaGlwID0gU2hpcCgpO1xuXG4gIGNvbnN0IHJhbmRvbWl6ZXIgPSBjb21wdXRlckJvYXJkLnJhbmRvbWl6ZTtcbiAgY29uc3QgcmFuZG9tQXhpZXMgPSBjb21wdXRlckJvYXJkLnJhbmRvbUF4aXM7XG5cbiAgY29uc3QgY2hlY2tTZXR1cCA9IChwbGF5ZXJDaGVja1NoaXBzKSA9PiB7XG4gICAgaWYgKHBsYXllckNoZWNrU2hpcHMubGVuZ3RoID09PSA1KSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBHYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllckNoZWNrVmFsdWVzID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIGlmICghY2hlY2tTZXR1cChwbGF5ZXJDaGVja1ZhbHVlcy5jdXJyZW50U2hpcHMpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBwbGF5ZXJCb2FyZC5wbGFjZUFsbFNoaXBzKHBsYXllckNoZWNrVmFsdWVzLmN1cnJlbnRTaGlwcyk7XG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXBzUmFuZG9tbHkocmFuZG9taXplciwgcmFuZG9tQXhpZXMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja0JvYXRzID0gKGNvb3JkcykgPT4ge1xuICAgIGNvbnN0IHBsYXllckNoZWNrVmFsdWVzID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIGlmICghY2hlY2tTZXR1cChwbGF5ZXJDaGVja1ZhbHVlcy5jdXJyZW50U2hpcHMpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb21wdXRlckJvYXJkLnJlY2lldmVBdHRhY2soY29vcmRzKTtcbiAgICBwbGF5ZXJCb2FyZC5yZWNpZXZlUmFuZG9tQXR0YWNrKHJhbmRvbWl6ZXIpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBTaGlwID0gKGxvY2F0aW9uLCBheGlzKSA9PlxuICAgIHBsYXllckNoZWNrQm9hcmQucGxheWVyUGxhY2VTaGlwKGxvY2F0aW9uLCBheGlzKTtcblxuICBjb25zdCBnYW1lSXNPdmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllckNoZWNrU2hpcHMgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpLmN1cnJlbnRTaGlwcztcbiAgICBpZiAoIWNoZWNrU2V0dXAocGxheWVyQ2hlY2tTaGlwcykpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChjb21wdXRlckJvYXJkLmlzQWxsU3VuaygpKSB7XG4gICAgICByZXR1cm4geyBtZXNzYWdlOiAnWW91IFdvbicsIGdhbWVGaW5pc2hlZDogdHJ1ZSB9O1xuICAgIH1cblxuICAgIGlmIChwbGF5ZXJCb2FyZC5pc0FsbFN1bmsoKSkge1xuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ1lvdSBMb3N0JywgZ2FtZUZpbmlzaGVkOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiB7IGdhbWVGaW5pc2hlZDogZmFsc2UgfTtcbiAgfTtcblxuICBjb25zdCBhcnJhbmdlQmxvY2tzID0gKG1vdXNlUG9zaXRpb24sIGN1cnJlbnRSb3RhdGlvbikgPT4ge1xuICAgIGNvbnN0IHNoaXBUeXBlT2JqZWN0ID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRUeXBlT2ZQbGFjZWRTaGlwKCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwVHlwZU9iamVjdCwgJ3RoZSBzaGlwIHR5cGUgb2JqZWN0Jyk7XG4gICAgLy8gY29uc29sZS5sb2cobW91c2VQb3NpdGlvbiwgJ3RoZSBtb3VzZSBwb3NpdGlvbicpO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRSb3RhdGlvbiwgJ3RoZSBjdXJyZW50IHJvdGF0aW9uJyk7XG5cbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXAuY3JlYXRlU2hpcChcbiAgICAgIG1vdXNlUG9zaXRpb24sXG4gICAgICBzaGlwVHlwZU9iamVjdC5zaGlwTGVuZ3RoLFxuICAgICAgY3VycmVudFJvdGF0aW9uXG4gICAgKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50U2hpcCwgJ3RoZSBtb3N0IHVwIHRvIGRhdGUgc2hpcHMnKTtcblxuICAgIHJldHVybiBjdXJyZW50U2hpcDtcbiAgfTtcblxuICBjb25zdCBnZXRHYW1lVmFsdWVzID0gKCkgPT4gKHtcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBjb21wdXRlckJvYXJkLFxuICAgIHBsYXllckNoZWNrQm9hcmQsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgY2hlY2tTZXR1cCxcbiAgICBhdHRhY2tCb2F0cyxcbiAgICBzZXR1cEdhbWUsXG4gICAgZ2FtZUlzT3ZlcixcbiAgICBzZXR1cFNoaXAsXG4gICAgZ2V0R2FtZVZhbHVlcyxcbiAgICBhcnJhbmdlQmxvY2tzLFxuICB9O1xufTtcblxuY29uc3QgYWN0aXZlR2FtZSA9IEdhbWUoKTtcblxuZXhwb3J0IHsgR2FtZSwgYWN0aXZlR2FtZSB9O1xuIiwiY29uc3QgUG9zaXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVBvc2l0aW9uID0gKHhDb29yZCwgeUNvb3JkKSA9PiAoeyB4Q29vcmQsIHlDb29yZCB9KTtcblxuICBjb25zdCBjaGVja091dE9mQm91bmNlID0gKG5ld1Bvc2l0aW9uKSA9PiB7XG4gICAgaWYgKG5ld1Bvc2l0aW9uLnhDb29yZCA+IDkgfHwgbmV3UG9zaXRpb24ueUNvb3JkID4gOSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKG5ld1Bvc2l0aW9uLnhDb29yZCA8IDAgfHwgbmV3UG9zaXRpb24ueUNvb3JkIDwgMCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGFkZFBvc2l0aW9uID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uMSA9PT0gZmFsc2UgfHwgcG9zaXRpb24yID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBjcmVhdGVQb3NpdGlvbihwb3NpdGlvbjEueENvb3JkLCBwb3NpdGlvbjEueUNvb3JkKTtcbiAgICBuZXdQb3NpdGlvbi54Q29vcmQgKz0gcG9zaXRpb24yLnhDb29yZDtcbiAgICBuZXdQb3NpdGlvbi55Q29vcmQgKz0gcG9zaXRpb24yLnlDb29yZDtcblxuICAgIGlmIChjaGVja091dE9mQm91bmNlKG5ld1Bvc2l0aW9uKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IG11bHRpcGx5UG9zaXRpb24gPSAocG9zaXRpb24xLCBwb3NpdGlvbjIpID0+IHtcbiAgICBpZiAocG9zaXRpb24xID09PSBmYWxzZSB8fCBwb3NpdGlvbjIgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGNyZWF0ZVBvc2l0aW9uKHBvc2l0aW9uMS54Q29vcmQsIHBvc2l0aW9uMS55Q29vcmQpO1xuICAgIG5ld1Bvc2l0aW9uLnhDb29yZCAqPSBwb3NpdGlvbjIueENvb3JkO1xuICAgIG5ld1Bvc2l0aW9uLnlDb29yZCAqPSBwb3NpdGlvbjIueUNvb3JkO1xuXG4gICAgaWYgKGNoZWNrT3V0T2ZCb3VuY2UobmV3UG9zaXRpb24pKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gbmV3UG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbCA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgYXhpcykgPT4ge1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSArIDEpIHJldHVybiB0cnVlO1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHBvc2l0aW9uMVtheGlzXSA9PT0gcG9zaXRpb24yW2F4aXNdIC0gMSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmVQb3NpdGlvbiA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMikgPT4ge1xuICAgIGlmICghY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgJ3hDb29yZCcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgJ3lDb29yZCcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlUG9zaXRpb24sXG4gICAgYWRkUG9zaXRpb24sXG4gICAgbXVsdGlwbHlQb3NpdGlvbixcbiAgICBjb21wYXJlUG9zaXRpb24sXG4gICAgY2hlY2tPdXRPZkJvdW5jZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc2l0aW9uO1xuIiwiY29uc3QgUHJhY3RpY2FsID0gKCkgPT4ge1xuICBjb25zdCBjb3B5QXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgICBjb25zdCBuZXdBcnJheSA9IFtdO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgbmV3QXJyYXkucHVzaChpdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdBcnJheTtcbiAgfTtcblxuICBjb25zdCBpc09iamVjdCA9IChjdXJyZW50T2JqZWN0KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50T2JqZWN0ID09PSAnb2JqZWN0JyAmJiBjdXJyZW50T2JqZWN0ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrT2JqZWN0ID0gKG9iamVjdDEsIG9iamVjdDIpID0+IHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBzZWNvbmRJbmRleCA9IDA7XG5cbiAgICBsZXQgb2JqZWN0SXNFcXVhbCA9IHRydWU7XG5cbiAgICBjb25zdCBjdXJyZW50T2JqZWN0ID0gb2JqZWN0MTtcbiAgICBjb25zdCBjdXJyZW50T2JqZWN0MiA9IG9iamVjdDI7XG5cbiAgICBjb25zdCBjdXJyZW50T2JqZWN0VmFsdWVzID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50T2JqZWN0KTtcbiAgICBjb25zdCBjdXJyZW50T2JqZWN0MlZhbHVlcyA9IE9iamVjdC52YWx1ZXMoY3VycmVudE9iamVjdDIpO1xuXG4gICAgY29uc3Qgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKGN1cnJlbnRPYmplY3QpO1xuICAgIGNvbnN0IG9iamVjdEtleXMyID0gT2JqZWN0LmtleXMoY3VycmVudE9iamVjdDIpO1xuXG4gICAgb2JqZWN0S2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChrZXkgIT09IG9iamVjdEtleXMyW2luZGV4XSkgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgaW5kZXggKz0gMTtcbiAgICB9KTtcblxuICAgIGlmICghb2JqZWN0SXNFcXVhbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChvYmplY3RLZXlzLmxlbmd0aCAhPT0gb2JqZWN0S2V5czIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50T2JqZWN0LCAndGhlIGN1cnJlbnQgb2JqZWN0Jyk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudE9iamVjdDIsICd0aGUgY3VycmVudCBvYmplY3QyJyk7XG5cbiAgICBjdXJyZW50T2JqZWN0VmFsdWVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0yID0gY3VycmVudE9iamVjdDJWYWx1ZXNbc2Vjb25kSW5kZXhdO1xuXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkgJiYgaXNPYmplY3QoaXRlbTIpKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrT2JqZWN0Qm9vbCA9IGNoZWNrT2JqZWN0KGl0ZW0sIGl0ZW0yKTtcblxuICAgICAgICBpZiAoIWNoZWNrT2JqZWN0Qm9vbCkgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChpdGVtICE9PSBpdGVtMikge1xuICAgICAgICBvYmplY3RJc0VxdWFsID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHNlY29uZEluZGV4ICs9IDE7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqZWN0SXNFcXVhbDtcbiAgfTtcblxuICByZXR1cm4geyBjb3B5QXJyYXksIGNoZWNrT2JqZWN0IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmFjdGljYWw7XG4iLCJpbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5cbmNvbnN0IFNoaXAgPSAoKSA9PiB7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcblxuICBjb25zdCBnZXRBZGRlZFBvc2l0aW9uID0gKGF4aXMpID0+IHtcbiAgICBsZXQgYWRkZWRQb3NpdGlvbjtcblxuICAgIGlmIChheGlzID09PSAneCcpIGFkZGVkUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbigxLCAwKTtcbiAgICBlbHNlIGFkZGVkUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbigwLCAxKTtcblxuICAgIHJldHVybiBhZGRlZFBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVNoaXAgPSAocG9zaXRpb24xLCBsZW5ndGgxLCBheGlzKSA9PiB7XG4gICAgaWYgKGxlbmd0aDEgPT09IDAgfHwgbGVuZ3RoMSA+IDUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocG9zaXRpb24uY2hlY2tPdXRPZkJvdW5jZShwb3NpdGlvbjEpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBwb3B1bGF0ZVNoaXBzID0gKGN1cnJlbnRQb3NpdGlvbiwgbGF0ZXN0TGVuZ3RoLCBsYXRlc3RBcnJheSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudEFycmF5ID0gbGF0ZXN0QXJyYXk7XG4gICAgICBsZXQgbmV3UG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb247XG5cbiAgICAgIGlmIChjdXJyZW50UG9zaXRpb24gPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAobGF0ZXN0TGVuZ3RoID09PSAwKSByZXR1cm4gY3VycmVudEFycmF5O1xuICAgICAgaWYgKGxhdGVzdExlbmd0aCA9PT0gbGVuZ3RoMSkge1xuICAgICAgICBjdXJyZW50QXJyYXkucHVzaChjdXJyZW50UG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhjdXJyZW50UG9zaXRpb24sIGxhdGVzdExlbmd0aCAtIDEsIGN1cnJlbnRBcnJheSk7XG4gICAgICB9XG4gICAgICBjb25zdCBhZGRlZFBvc2l0aW9uID0gZ2V0QWRkZWRQb3NpdGlvbihheGlzKTtcbiAgICAgIG5ld1Bvc2l0aW9uID0gcG9zaXRpb24uYWRkUG9zaXRpb24obmV3UG9zaXRpb24sIGFkZGVkUG9zaXRpb24pO1xuXG4gICAgICBpZiAoIW5ld1Bvc2l0aW9uKSByZXR1cm4gbmV3UG9zaXRpb247XG4gICAgICBjdXJyZW50QXJyYXkucHVzaChuZXdQb3NpdGlvbik7XG5cbiAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gY3VycmVudEFycmF5Lmxlbmd0aCAtIDE7XG5cbiAgICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKFxuICAgICAgICBjdXJyZW50QXJyYXlbYXJyYXlMZW5ndGhdLFxuICAgICAgICBsYXRlc3RMZW5ndGggLSAxLFxuICAgICAgICBjdXJyZW50QXJyYXlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKHBvc2l0aW9uMSwgbGVuZ3RoMSwgW10sIGZhbHNlKTtcbiAgfTtcblxuXG5cbiAgY29uc3QgaXNTdW5rID0gKHNoaXBBcnJheSkgPT4ge1xuICAgIGlmIChzaGlwQXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaGl0ID0gKHBvc2l0aW9uc0FycmF5LCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGhpdEFycmF5ID0gcG9zaXRpb25zQXJyYXkuZmlsdGVyKChwb3MpID0+IHtcbiAgICAgIGlmIChwb3MueENvb3JkID09PSBwb3NpdGlvbi54Q29vcmQgJiYgcG9zLnlDb29yZCA9PT0gcG9zaXRpb24ueUNvb3JkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGNvbnN0IHNoaXBBcnJheXMgPSBwb3NpdGlvbnNBcnJheS5maWx0ZXIoKHBvcykgPT4ge1xuICAgICAgaWYgKHBvcy54Q29vcmQgPT09IHBvc2l0aW9uLnhDb29yZCAmJiBwb3MueUNvb3JkID09PSBwb3NpdGlvbi55Q29vcmQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBoaXRBcnJheSwgc2hpcEFycmF5cyB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlU2hpcCxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCBEb20gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCB7IGFjdGl2ZUdhbWUgfSBmcm9tICcuL21haW4uanMnO1xuXG5jb25zdCBVaSA9ICgpID0+IHtcbiAgY29uc3QgZG9tID0gRG9tKCk7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcblxuICBjb25zdCByZW5kZXJTcGVlZCA9IDE7XG5cbiAgbGV0IGJsb2NrU2l6ZSA9IDQyO1xuXG4gIGxldCBwbGFjZWRTaGlwID0gZmFsc2U7XG4gIGxldCBheGlzID0gJ3knO1xuXG4gIGxldCBtb3VzZUJsb2NrTG9jYXRpb24gPSBmYWxzZTtcblxuICBjb25zdCBjcmVhdGVEb21FbGVtZW50ID0gKGVsZW1lbnROYW1lKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcblxuICBjb25zdCBnZXRNb3VzZVBvc2l0aW9uID0gKG9mZnNldFgsIG9mZnNldFkpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhvZmZzZXRYLCBvZmZzZXRZLCAnb2Zmc2V0IHggYW5kIG9mZnNldCB5Jyk7XG5cbiAgICBjb25zdCB4Q29vcmQgPSBNYXRoLmZsb29yKG9mZnNldFggLyBibG9ja1NpemUpO1xuICAgIGNvbnN0IHlDb29yZCA9IE1hdGguZmxvb3Iob2Zmc2V0WSAvIGJsb2NrU2l6ZSk7XG5cbiAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oeENvb3JkLCB5Q29vcmQpO1xuXG4gICAgaWYgKHhDb29yZCA8IDAgfHwgeUNvb3JkIDwgMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIG1vdXNlUG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgZmluZE1vdXNlUG9zaXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50TW91c2VQb3NpdGlvbiA9IGdldE1vdXNlUG9zaXRpb24oZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG5cbiAgICBtb3VzZUJsb2NrTG9jYXRpb24gPSBjdXJyZW50TW91c2VQb3NpdGlvbjtcblxuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRNb3VzZVBvc2l0aW9uLCAndGhlIGN1cnJlbnQgbW91c2UgcG9zaXRpb24nKTtcbiAgfTtcblxuICAvLyB3b3RrIG9uIHRoaXMgZnVuY3Rpb25cbiAgY29uc3QgZmluZFRvdWNoUG9zaXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCByZWN0ID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHRvdWNoT2Zmc2V0WCA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgY29uc3QgdG91Y2hPZmZzZXRZID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSAtIHJlY3QudG9wO1xuXG4gICAgY29uc3QgdG91Y2hQb3NpdGlvbiA9IGdldE1vdXNlUG9zaXRpb24odG91Y2hPZmZzZXRYLCB0b3VjaE9mZnNldFkpO1xuICAgIG1vdXNlQmxvY2tMb2NhdGlvbiA9IHRvdWNoUG9zaXRpb247XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIC8vIGJsb2NrIHNpemUgbWF0Y2hlcyB0aGUgc2l6ZSBncmlkc2l6ZSBvZiB0aGUgbWVkaWEgcXVlcnkgZGl2aWRlZCBieSAxMFxuICBjb25zdCBjaGFuZ2VCbG9ja1NpemUgPSAobWF0Y2hNZWRpYSkgPT4ge1xuICAgIGJsb2NrU2l6ZSA9IDQyO1xuICAgIGlmIChtYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA5NjBweCknKS5tYXRjaGVzKSBibG9ja1NpemUgPSAzMDtcbiAgICBpZiAobWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNDcwcHgpJykubWF0Y2hlcykgYmxvY2tTaXplID0gMjE7XG4gICAgaWYgKG1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDMyMHB4KScpLm1hdGNoZXMpIGJsb2NrU2l6ZSA9IDE1O1xuICAgIHJldHVybiBibG9ja1NpemU7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhtYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAzMjBweCknKSwgJ3RoZSBjdXJyZW50IG1hdGNoIG1lZGlhJyk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQmxvY2tFbGVtZW50ID0gKGJsb2NrQ2xhc3MsIGNyZWF0ZUJsb2NrKSA9PiB7XG4gICAgbGV0IGxhdGVzdENsYXNzID0gYmxvY2tDbGFzcztcblxuICAgIGlmIChcbiAgICAgIGxhdGVzdENsYXNzICE9PSAnaGl0QmxvY2snICYmXG4gICAgICBsYXRlc3RDbGFzcyAhPT0gJ21pc3NCbG9jaycgJiZcbiAgICAgIGxhdGVzdENsYXNzICE9PSAnY3Vyc29yQmxvY2snXG4gICAgKSB7XG4gICAgICBsYXRlc3RDbGFzcyA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrRWxlbWVudCA9IGNyZWF0ZUJsb2NrKCdkaXYnKTtcbiAgICBibG9ja0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcbiAgICBpZiAobGF0ZXN0Q2xhc3MgIT09ICcnKSBibG9ja0VsZW1lbnQuY2xhc3NMaXN0LmFkZChsYXRlc3RDbGFzcyk7XG5cbiAgICByZXR1cm4gYmxvY2tFbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGRpc2FibGVTdGFydGVyVWkgPSAoKSA9PiB0cnVlO1xuXG4gIC8vIGNvbnN0IHJlbmRlclNlbGVjdGlvbkJsb2NrcyA9IChtb3VzZVBvc2l0aW9uLCBsYXRlc3RCbG9ja1NpemUpID0+IHtcbiAgLy8gICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgLy8gICBjb25zdCBjdXJyZW50U25ha2VCbG9jayA9IGNyZWF0ZUJsb2NrRWxlbWVudCgpO1xuICAvLyAgIGNvbnN0IHJlYWxQb3NpdGlvblggPSBNYXRoLmZsb29yKG1vdXNlUG9zaXRpb24ueENvb3JkICogbGF0ZXN0QmxvY2tTaXplKTtcbiAgLy8gICBjb25zdCByZWFsUG9zaXRpb25ZID0gTWF0aC5mbG9vcihtb3VzZVBvc2l0aW9uLnlDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG5cbiAgLy8gICBjb25zb2xlLmxvZyhtb3VzZVBvc2l0aW9uLCAnVEhFIENVUlJFTlQgTU9VU0UgUE9TSVRJT04nKTtcblxuICAvLyAgIGNvbnNvbGUubG9nKHJlYWxQb3NpdGlvblgsICd0aGUgcmVhbCBwb3NpdGlvbiB4Jyk7XG4gIC8vICAgY29uc29sZS5sb2cocmVhbFBvc2l0aW9uWSwgJ3RoZSByZWFsIHBvc2l0aW9uIHknKTtcblxuICAvLyAgIGN1cnJlbnRTbmFrZUJsb2NrLnN0eWxlLmxlZnQgPSBgJHtyZWFsUG9zaXRpb25YfXB4YDtcbiAgLy8gICBjdXJyZW50U25ha2VCbG9jay5zdHlsZS50b3AgPSBgJHtyZWFsUG9zaXRpb25ZfXB4YDtcblxuICAvLyAgIGVsZW1lbnQuc2hpcEdyaWQuYXBwZW5kQ2hpbGQoY3VycmVudFNuYWtlQmxvY2spO1xuICAvLyB9O1xuXG4gIGNvbnN0IGNyZWF0ZVNoaXBCbG9jayA9IChzaGlwUG9zaXRpb24sIGxhdGVzdEJsb2NrU2l6ZSwgc2hpcFR5cGUpID0+IHtcbiAgICBjb25zdCBzaGlwQmxvY2sgPSBjcmVhdGVCbG9ja0VsZW1lbnQoc2hpcFR5cGUsIGNyZWF0ZURvbUVsZW1lbnQpO1xuXG4gICAgY29uc3QgcmVhbFBvc2l0aW9uWCA9IE1hdGguZmxvb3Ioc2hpcFBvc2l0aW9uLnhDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgY29uc3QgcmVhbFBvc2l0aW9uWSA9IE1hdGguZmxvb3Ioc2hpcFBvc2l0aW9uLnlDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgc2hpcEJsb2NrLnN0eWxlLmxlZnQgPSBgJHtyZWFsUG9zaXRpb25YfXB4YDtcbiAgICBzaGlwQmxvY2suc3R5bGUudG9wID0gYCR7cmVhbFBvc2l0aW9uWX1weGA7XG5cbiAgICByZXR1cm4gc2hpcEJsb2NrO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckFscmVhZHlQbGFjZWRTaGlwcyA9IChzaGlwR3JpZCwgbGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgY29uc3QgZ2FtZVZhbHVlcyA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuICAgIGNvbnN0IGNoZWNrQm9hcmRTaGlwcyA9XG4gICAgICBnYW1lVmFsdWVzLnBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCkuY3VycmVudFNoaXBzO1xuXG4gICAgY2hlY2tCb2FyZFNoaXBzLmZvckVhY2goKHBsYXllckNoZWNrU2hpcHMpID0+IHtcbiAgICAgIHBsYXllckNoZWNrU2hpcHMuZm9yRWFjaCgoYm9hdCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwQmxvY2sgPSBjcmVhdGVTaGlwQmxvY2soYm9hdCwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgICAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQoc2hpcEJsb2NrKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclBsYWNlZFNoaXAgPSAobGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuICAgIGNvbnN0IHsgc2hpcEdyaWQgfSA9IGVsZW1lbnQ7XG5cbiAgICBpZiAoIXBsYWNlZFNoaXApIHJldHVybiBwbGFjZWRTaGlwO1xuXG4gICAgc2hpcEdyaWQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBwbGFjZWRTaGlwLmZvckVhY2goKHNoaXBQb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc2hpcEJsb2NrID0gY3JlYXRlU2hpcEJsb2NrKHNoaXBQb3NpdGlvbiwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgIHNoaXBHcmlkLmFwcGVuZENoaWxkKHNoaXBCbG9jayk7XG4gICAgfSk7XG5cbiAgICByZW5kZXJBbHJlYWR5UGxhY2VkU2hpcHMoc2hpcEdyaWQsIGxhdGVzdEJsb2NrU2l6ZSk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlQXhpcyA9ICgpID0+IHtcbiAgICBpZiAoYXhpcyA9PT0gJ3knKSBheGlzID0gJ3gnO1xuICAgIGVsc2UgYXhpcyA9ICd5JztcbiAgfTtcblxuICBjb25zdCBtb3ZlU2hpcEJ5RGlyZWN0aW9uID0gKG1vdXNlTG9jYXRpb24sIGN1cnJlbnRTaGlwLCBjdXJyZW50QXhpcykgPT4ge1xuICAgIGxldCBsYXRlc3RTaGlwID0gZmFsc2U7XG5cbiAgICBpZiAocG9zaXRpb24uY2hlY2tPdXRPZkJvdW5jZShjdXJyZW50U2hpcFswXSkpIHJldHVybiBsYXRlc3RTaGlwO1xuXG4gICAgY29uc3QgbmV3WFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICBtb3VzZUxvY2F0aW9uLnhDb29yZCxcbiAgICAgIDBcbiAgICApLnhDb29yZDtcblxuICAgIGNvbnN0IG5ld1lQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKFxuICAgICAgMCxcbiAgICAgIG1vdXNlTG9jYXRpb24ueUNvb3JkXG4gICAgKS55Q29vcmQ7XG5cbiAgICBsZXQgbmV3U2hpcFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICBuZXdYUG9zaXRpb24sXG4gICAgICBjdXJyZW50U2hpcFswXS55Q29vcmRcbiAgICApO1xuXG4gICAgaWYgKGN1cnJlbnRBeGlzID09PSAneCcpIHtcbiAgICAgIG5ld1NoaXBQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKFxuICAgICAgICBjdXJyZW50U2hpcFswXS54Q29vcmQsXG4gICAgICAgIG5ld1lQb3NpdGlvblxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsYXRlc3RTaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgbmV3U2hpcFBvc2l0aW9uLFxuICAgICAgY3VycmVudFNoaXAubGVuZ3RoLFxuICAgICAgY3VycmVudEF4aXNcbiAgICApO1xuXG4gICAgcmV0dXJuIGxhdGVzdFNoaXA7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VQbGF5ZXJTaGlwID0gKGxhdGVzdFNoaXAsIGxhdGVzdEF4aXMsIGxhdGVzdEdhbWUpID0+IHtcbiAgICBpZiAobGF0ZXN0U2hpcCkgbGF0ZXN0R2FtZS5zZXR1cFNoaXAobGF0ZXN0U2hpcFswXSwgbGF0ZXN0QXhpcyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUGxheWVyU2hpcEV2ZW50ID0gKCkgPT4ge1xuICAgIHBsYWNlUGxheWVyU2hpcChwbGFjZWRTaGlwLCBheGlzLCBhY3RpdmVHYW1lKTtcbiAgfTtcblxuICBjb25zdCBhZGRVaUV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgZWxlbWVudC5zaGlwTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmluZE1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZpbmRUb3VjaFBvc2l0aW9uKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcEV2ZW50KTtcblxuICAgIGVsZW1lbnQucm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQXhpcyk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVWlFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgZWxlbWVudC5zaGlwTGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmluZE1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZpbmRUb3VjaFBvc2l0aW9uKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcEV2ZW50KTtcblxuICAgIGVsZW1lbnQucm90YXRlQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQXhpcyk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tNb3VzZVRhcmdldCA9IChlbGVtZW50Q2xhc3MpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50Q2xhc3MsICd0aGUgZWxlbWVudCBjYWxzcycpO1xuICAgIGlmIChlbGVtZW50Q2xhc3MgIT09ICdncmlkT3ZlcmxheSBjb21wdXRlckdyaWRPdmVybGF5JykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZU1vdXNlUG9zaXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZVRhcmdldCA9IGNoZWNrTW91c2VUYXJnZXQoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSk7XG4gICAgaWYgKCFtb3VzZVRhcmdldCkgbW91c2VCbG9ja0xvY2F0aW9uID0gbW91c2VUYXJnZXQ7XG4gIH07XG5cbiAgY29uc3QgYWRkR2FtZUV2ZW50cyA9ICgpID0+IHtcbiAgICByZW1vdmVVaUV2ZW50cygpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgY2hhbmdlTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5jb21wdXRlckdyaWRMYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmaW5kTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5jb21wdXRlckdyaWRMYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmaW5kVG91Y2hQb3NpdGlvbik7XG4gIH07XG5cbiAgY29uc3QgYWRkU2hpcHMgPSAoXG4gICAgc2hpcHMsXG4gICAgc2hpcFR5cGUsXG4gICAgZ3JpZCxcbiAgICBsYXRlc3RCbG9ja1NpemUsXG4gICAgaXNNb3VzZVBvc2l0aW9uXG4gICkgPT4ge1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXBHcm91cCkgPT4ge1xuICAgICAgc2hpcEdyb3VwLmZvckVhY2goKGJvYXQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcEVsZW1lbnQgPSBjcmVhdGVTaGlwQmxvY2soYm9hdCwgbGF0ZXN0QmxvY2tTaXplLCBzaGlwVHlwZSk7XG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoc2hpcEVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyR3JpZHMgPSAoYmxvY2tTaXplMiwgbW91c2VQb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGdhbWVWYWx1ZXMgPSBhY3RpdmVHYW1lLmdldEdhbWVWYWx1ZXMoKTtcblxuICAgIGNvbnN0IHsgcGxheWVyR3JpZCB9ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgY29uc3QgeyBjb21wdXRlckdyaWQgfSA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgcGxheWVyR3JpZC5pbm5lckhUTUwgPSAnJztcbiAgICBjb21wdXRlckdyaWQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBwbGF5ZXJCb2FyZFZhbHVlcyA9IGdhbWVWYWx1ZXMucGxheWVyQm9hcmQuZ2V0VmFsdWVzKCk7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZFZhbHVlcyA9IGdhbWVWYWx1ZXMuY29tcHV0ZXJCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHBsYXllckJvYXJkVmFsdWVzLCAncGxheWVyQm9hcmRWYWx1ZXMnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjb21wdXRlckJvYXJkVmFsdWVzLCAnY29tcHV0ZXJCb2FyZFZhbHVlcycpO1xuXG4gICAgYWRkU2hpcHMocGxheWVyQm9hcmRWYWx1ZXMuY3VycmVudFNoaXBzLCBmYWxzZSwgcGxheWVyR3JpZCwgYmxvY2tTaXplMik7XG4gICAgYWRkU2hpcHMocGxheWVyQm9hcmRWYWx1ZXMuaGl0cywgJ2hpdEJsb2NrJywgcGxheWVyR3JpZCwgYmxvY2tTaXplMik7XG4gICAgYWRkU2hpcHMocGxheWVyQm9hcmRWYWx1ZXMubWlzc2VzLCAnbWlzc0Jsb2NrJywgcGxheWVyR3JpZCwgYmxvY2tTaXplKTtcblxuICAgIGFkZFNoaXBzKGNvbXB1dGVyQm9hcmRWYWx1ZXMuaGl0cywgJ2hpdEJsb2NrJywgY29tcHV0ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgICBhZGRTaGlwcyhjb21wdXRlckJvYXJkVmFsdWVzLm1pc3NlcywgJ21pc3NCbG9jaycsIGNvbXB1dGVyR3JpZCwgYmxvY2tTaXplMik7XG5cbiAgICBjb25zdCBtb3VzZVNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAobW91c2VQb3NpdGlvbiwgMSwgJ3gnKTtcblxuICAgIGlmICghbW91c2VTaGlwKSBjb21wdXRlckdyaWQuaW5uZXJIVE1MID0gJyc7XG4gICAgZWxzZSBhZGRTaGlwcyhbbW91c2VTaGlwXSwgJ2N1cnNvckJsb2NrJywgY29tcHV0ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJHYW1lID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZ2FtZVN0YXR1cyA9IGFjdGl2ZUdhbWUuZ2FtZUlzT3ZlcigpO1xuXG4gICAgICBjb25zdCBsYXRlc3RCbG9ja1NpemUgPSBjaGFuZ2VCbG9ja1NpemUod2luZG93Lm1hdGNoTWVkaWEpO1xuICAgICAgcmVuZGVyR3JpZHMobGF0ZXN0QmxvY2tTaXplLCBtb3VzZUJsb2NrTG9jYXRpb24pO1xuXG4gICAgICBpZiAoIWdhbWVTdGF0dXMuZ2FtZUZpbmlzaGVkKSByZW5kZXJHYW1lKGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgfSwgcmVuZGVyU3BlZWQpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVNoaXBTZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBlbGVtZW50cy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZWxlbWVudHMuc2VjdGlvblNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGVsZW1lbnRzLnNoaXBHcmlkLmlubmVySFRNTCA9ICcnO1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICByZW1vdmVTaGlwU2VjdGlvbigpO1xuXG4gICAgYWN0aXZlR2FtZS5zZXR1cEdhbWUoKTtcbiAgICBhZGRHYW1lRXZlbnRzKCk7XG5cbiAgICByZW5kZXJHYW1lKCk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU2VsZWN0aW9uR3JpZCA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGdhbWVWYWx1ZSA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuICAgICAgY29uc3QgY2hlY2tCb2FyZFNoaXBzID1cbiAgICAgICAgZ2FtZVZhbHVlLnBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCkuY3VycmVudFNoaXBzO1xuXG4gICAgICBjaGFuZ2VCbG9ja1NpemUod2luZG93Lm1hdGNoTWVkaWEpO1xuXG4gICAgICBpZiAoYWN0aXZlR2FtZS5jaGVja1NldHVwKGdhbWVWYWx1ZS5wbGF5ZXJDaGVja0JvYXJkKSkgZGlzYWJsZVN0YXJ0ZXJVaSgpO1xuXG4gICAgICBpZiAobW91c2VCbG9ja0xvY2F0aW9uKSB7XG4gICAgICAgIGxldCBjdXJyZW50U2hpcCA9IGFjdGl2ZUdhbWUuYXJyYW5nZUJsb2Nrcyhtb3VzZUJsb2NrTG9jYXRpb24sIGF4aXMpO1xuICAgICAgICBpZiAoIWN1cnJlbnRTaGlwICYmIHBsYWNlZFNoaXApIHtcbiAgICAgICAgICBjdXJyZW50U2hpcCA9IG1vdmVTaGlwQnlEaXJlY3Rpb24oXG4gICAgICAgICAgICBtb3VzZUJsb2NrTG9jYXRpb24sXG4gICAgICAgICAgICBwbGFjZWRTaGlwLFxuICAgICAgICAgICAgYXhpc1xuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFNoaXApIHBsYWNlZFNoaXAgPSBjdXJyZW50U2hpcDtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGFjZWRTaGlwLCAndGhlIGN1cnJlbnQgcGxhY2VkIHNoaXAnKTtcblxuICAgICAgICBpZiAocGxhY2VkU2hpcCkgcmVuZGVyUGxhY2VkU2hpcChibG9ja1NpemUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2ZUdhbWUuY2hlY2tTZXR1cChjaGVja0JvYXJkU2hpcHMpKSByZW5kZXJTZWxlY3Rpb25HcmlkKCk7XG4gICAgICBlbHNlIHN0YXJ0R2FtZShibG9ja1NpemUpO1xuICAgIH0sIHJlbmRlclNwZWVkKTtcbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZXMgPSAoKSA9PiAoe1xuICAgIGJsb2NrU2l6ZSxcbiAgICBwbGFjZWRTaGlwLFxuICAgIGF4aXMsXG4gICAgbW91c2VCbG9ja0xvY2F0aW9uLFxuICB9KTtcblxuICBjb25zdCBhY3RpdmF0ZVVpID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9tLmdldFBhZ2UoKTtcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IHBhZ2VDb250ZW50O1xuXG4gICAgYWRkVWlFdmVudHMoKTtcbiAgICByZW5kZXJTZWxlY3Rpb25HcmlkKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhY3RpdmF0ZVVpLFxuICAgIGNyZWF0ZUJsb2NrRWxlbWVudCxcbiAgICBnZXRNb3VzZVBvc2l0aW9uLFxuICAgIG1vdmVTaGlwQnlEaXJlY3Rpb24sXG4gICAgY2hhbmdlQmxvY2tTaXplLFxuICAgIGNoYW5nZUF4aXMsXG4gICAgZ2V0VmFsdWVzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVWk7XG4iXSwibmFtZXMiOlsicmVmcmVzaGluZ0xvZ28iLCJEb20iLCJnZXRFbGVtZW50cyIsIm92ZXJsYXkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWN0aW9uU2NyZWVuIiwic2hpcFRleHQiLCJzaGlwR3JpZCIsInNoaXBMYXllciIsInJvdGF0ZUJ1dHRvbiIsImdyaWRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImhpdHMiLCJtaXNzZXMiLCJwbGF5ZXJHcmlkIiwicGxheWVySGl0cyIsInBsYXllck1pc3NlcyIsImNvbXB1dGVyR3JpZCIsImNvbXB1dGVySGl0cyIsImNvbXB1dGVyTWlzc2VzIiwiY29udGVudCIsImNvbXB1dGVyR3JpZExheWVyIiwiZ2V0UGFnZSIsIlBvc2l0aW9uIiwiU2hpcCIsIlByYWN0aWNhbCIsIkdhbWVib2FyZCIsInBvc2l0aW9uIiwic2hpcCIsInByYWN0aWNhbCIsImN1cnJlbnRTaGlwcyIsInJhbmRvbWl6ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbUF4aXMiLCJheGllcyIsImxlbmd0aCIsInBsYWNlQWxsU2hpcHMiLCJzaGlwc0FycmF5IiwiY29tcGFyZVNoaXBzQXJyYXkiLCJsYXRlc3RTaGlwc0FycmF5Iiwic2hpcHMiLCJzaGlwc0RvQ29sbGlkZSIsImZvckVhY2giLCJsYXRlc3RTaGlwcyIsImJvYXQiLCJsYXRlc3RCb2F0IiwiY29tcGFyZVBvc2l0aW9uIiwicGxheWVyUGxhY2VTaGlwIiwibG9jYXRpb24iLCJheGlzIiwiY3VycmVudEFycmF5IiwiY29weUFycmF5Iiwic2hpcGxlbmd0aCIsImN1cnJlbnRTaGlwIiwiY3JlYXRlU2hpcCIsImlzQ29sbGlkZWQiLCJwdXNoIiwicGxhY2VSYW5kb21TaGlwcyIsInJhbmRvbWl6ZXIiLCJyYW5kb21BeGllcyIsImxhdGVzdExlbmd0aCIsInJhbmRvbVBvc2l0aW9uIiwiY3JlYXRlUG9zaXRpb24iLCJyYW5kb21TaGlwIiwic2hpcENvbGxpZGVzIiwicGxhY2VTaGlwc1JhbmRvbWx5IiwiYXR0YWNrU2hpcCIsImxhdGVzdFBvc2l0aW9uIiwiY3VycmVudEhpdHMiLCJjdXJyZW50TWlzc2VzIiwiaXNIaXQiLCJsYXRlc3RIaXRzIiwibGF0ZXN0TWlzc2VzIiwic2hpcEFycmF5IiwicG9zaXRpb25zQXJyYXkiLCJoaXQiLCJoaXRBcnJheSIsInNoaXBBcnJheXMiLCJmaW5hbE9iamVjdCIsInJlY2lldmVBdHRhY2siLCJyZXN1bHQiLCJjcmVhdGVSYW5kb21Db29yZHMiLCJpc01vY2tSYW5kb20iLCJjYWxsUmFuZG9taXplciIsInJhbmRvbVgiLCJyYW5kb21ZIiwiZmlsdGVyQXR0YWNrIiwiYXJyYXkiLCJjdXJyZW50QXR0YWNrIiwiY3VycmVudEF0dGFja0FycmF5IiwiZmlsdGVyIiwiaXRlbSIsInhDb29yZCIsInlDb29yZCIsImdldFR5cGVPZlBsYWNlZFNoaXAiLCJzaGlwVHlwZXMiLCJzaGlwVHlwZSIsInNoaXBMZW5ndGgiLCJyZWNpZXZlUmFuZG9tQXR0YWNrIiwiaGFzQmVlbkhpdCIsImhhc0JlZW5NaXNzIiwiaXNBbGxTdW5rIiwiaGFzU3Vua2VkIiwiaXNTdW5rIiwiZ2V0VmFsdWVzIiwiR2FtZSIsInBsYXllckJvYXJkIiwiY29tcHV0ZXJCb2FyZCIsInBsYXllckNoZWNrQm9hcmQiLCJjaGVja1NldHVwIiwicGxheWVyQ2hlY2tTaGlwcyIsInNldHVwR2FtZSIsInBsYXllckNoZWNrVmFsdWVzIiwiYXR0YWNrQm9hdHMiLCJjb29yZHMiLCJzZXR1cFNoaXAiLCJnYW1lSXNPdmVyIiwibWVzc2FnZSIsImdhbWVGaW5pc2hlZCIsImFycmFuZ2VCbG9ja3MiLCJtb3VzZVBvc2l0aW9uIiwiY3VycmVudFJvdGF0aW9uIiwic2hpcFR5cGVPYmplY3QiLCJnZXRHYW1lVmFsdWVzIiwiYWN0aXZlR2FtZSIsImNoZWNrT3V0T2ZCb3VuY2UiLCJuZXdQb3NpdGlvbiIsImFkZFBvc2l0aW9uIiwicG9zaXRpb24xIiwicG9zaXRpb24yIiwibXVsdGlwbHlQb3NpdGlvbiIsImNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwiLCJuZXdBcnJheSIsImlzT2JqZWN0IiwiY3VycmVudE9iamVjdCIsImNoZWNrT2JqZWN0Iiwib2JqZWN0MSIsIm9iamVjdDIiLCJpbmRleCIsInNlY29uZEluZGV4Iiwib2JqZWN0SXNFcXVhbCIsImN1cnJlbnRPYmplY3QyIiwiY3VycmVudE9iamVjdFZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsImN1cnJlbnRPYmplY3QyVmFsdWVzIiwib2JqZWN0S2V5cyIsImtleXMiLCJvYmplY3RLZXlzMiIsImtleSIsIml0ZW0yIiwiY2hlY2tPYmplY3RCb29sIiwiZ2V0QWRkZWRQb3NpdGlvbiIsImFkZGVkUG9zaXRpb24iLCJsZW5ndGgxIiwicG9wdWxhdGVTaGlwcyIsImN1cnJlbnRQb3NpdGlvbiIsImxhdGVzdEFycmF5IiwiYXJyYXlMZW5ndGgiLCJwb3MiLCJVaSIsImRvbSIsInJlbmRlclNwZWVkIiwiYmxvY2tTaXplIiwicGxhY2VkU2hpcCIsIm1vdXNlQmxvY2tMb2NhdGlvbiIsImNyZWF0ZURvbUVsZW1lbnQiLCJlbGVtZW50TmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJnZXRNb3VzZVBvc2l0aW9uIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJmaW5kTW91c2VQb3NpdGlvbiIsImV2ZW50IiwiY3VycmVudE1vdXNlUG9zaXRpb24iLCJmaW5kVG91Y2hQb3NpdGlvbiIsInJlY3QiLCJ0YXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3VjaE9mZnNldFgiLCJ0YXJnZXRUb3VjaGVzIiwicGFnZVgiLCJsZWZ0IiwidG91Y2hPZmZzZXRZIiwicGFnZVkiLCJ0b3AiLCJ0b3VjaFBvc2l0aW9uIiwicHJldmVudERlZmF1bHQiLCJjaGFuZ2VCbG9ja1NpemUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImNyZWF0ZUJsb2NrRWxlbWVudCIsImJsb2NrQ2xhc3MiLCJjcmVhdGVCbG9jayIsImxhdGVzdENsYXNzIiwiYmxvY2tFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlzYWJsZVN0YXJ0ZXJVaSIsImNyZWF0ZVNoaXBCbG9jayIsInNoaXBQb3NpdGlvbiIsImxhdGVzdEJsb2NrU2l6ZSIsInNoaXBCbG9jayIsInJlYWxQb3NpdGlvblgiLCJyZWFsUG9zaXRpb25ZIiwic3R5bGUiLCJyZW5kZXJBbHJlYWR5UGxhY2VkU2hpcHMiLCJnYW1lVmFsdWVzIiwiY2hlY2tCb2FyZFNoaXBzIiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJQbGFjZWRTaGlwIiwiZWxlbWVudCIsImlubmVySFRNTCIsImNoYW5nZUF4aXMiLCJtb3ZlU2hpcEJ5RGlyZWN0aW9uIiwibW91c2VMb2NhdGlvbiIsImN1cnJlbnRBeGlzIiwibGF0ZXN0U2hpcCIsIm5ld1hQb3NpdGlvbiIsIm5ld1lQb3NpdGlvbiIsIm5ld1NoaXBQb3NpdGlvbiIsInBsYWNlUGxheWVyU2hpcCIsImxhdGVzdEF4aXMiLCJsYXRlc3RHYW1lIiwicGxhY2VQbGF5ZXJTaGlwRXZlbnQiLCJhZGRVaUV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVVaUV2ZW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGVja01vdXNlVGFyZ2V0IiwiZWxlbWVudENsYXNzIiwiY29uc29sZSIsImxvZyIsImNoYW5nZU1vdXNlUG9zaXRpb24iLCJtb3VzZVRhcmdldCIsImNsYXNzTmFtZSIsImFkZEdhbWVFdmVudHMiLCJ3aW5kb3ciLCJhZGRTaGlwcyIsImdyaWQiLCJpc01vdXNlUG9zaXRpb24iLCJzaGlwR3JvdXAiLCJzaGlwRWxlbWVudCIsInJlbmRlckdyaWRzIiwiYmxvY2tTaXplMiIsInBsYXllckJvYXJkVmFsdWVzIiwiY29tcHV0ZXJCb2FyZFZhbHVlcyIsIm1vdXNlU2hpcCIsInJlbmRlckdhbWUiLCJzZXRUaW1lb3V0IiwiZ2FtZVN0YXR1cyIsInJlbW92ZVNoaXBTZWN0aW9uIiwiZWxlbWVudHMiLCJkaXNwbGF5Iiwic3RhcnRHYW1lIiwicmVuZGVyU2VsZWN0aW9uR3JpZCIsImdhbWVWYWx1ZSIsImFjdGl2YXRlVWkiLCJwYWdlQ29udGVudCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9