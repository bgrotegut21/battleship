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
      shipTpe: 'gunboat',
      shipLength: 2
    }];
    return shipTypes[currentShips.length];
  };

  var playerPlaceShip = function playerPlaceShip(location, axis) {
    var currentArray = practical.copyArray(currentShips);
    var shipType = getTypeOfPlacedShip(currentArray);
    var currentShip = ship.createShip(location, shipType.shipLength, axis);
    var isCollided = compareShipsArray(currentArray, currentShip);

    if (currentArray.length === 5 || !currentShip || isCollided) {
      return currentArray;
    }

    currentArray.push(currentShip);
    currentShips = currentArray;
    return currentArray;
  };

  var placeRandomShips = function placeRandomShips(shipsArray, randomizer, randomAxies) {
    var latestShipsArray = shipsArray;
    var randomPosition = position.createPosition(randomizer(), randomizer());
    var shipType = getTypeOfPlacedShip(latestShipsArray);

    if (!shipType) {
      console.log(shipType);
      console.log(latestShipsArray, 'the latest ships array');
      return latestShipsArray;
    }

    var latestLength = shipType.shipLength;
    var randomShip = ship.createShip(randomPosition, latestLength, randomAxies());

    if (randomShip.length > 0) {
      var shipCollides = compareShipsArray(latestShipsArray, randomShip);
      if (!shipCollides) latestShipsArray.push(randomShip);
    }

    2;
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
  }; // WORK ON THIS AND FIX RANDOM LENGTH


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
    renderShips(computerBoardValues.currentShips, computerGrid, blockSize2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsQ0FBQytRLElBQVQsQ0FBY2pELFNBQWQsR0FBMEJnRCxXQUExQjtJQUVBbkMsV0FBVztJQUNYZ0MsbUJBQW1CO0VBQ3BCLENBTkQ7O0VBUUEsT0FBTztJQUNMRSxVQUFVLEVBQVZBLFVBREs7SUFFTHRFLGtCQUFrQixFQUFsQkEsa0JBRks7SUFHTHZCLGdCQUFnQixFQUFoQkEsZ0JBSEs7SUFJTGdELG1CQUFtQixFQUFuQkEsbUJBSks7SUFLTDVCLGVBQWUsRUFBZkEsZUFMSztJQU1MMkIsVUFBVSxFQUFWQSxVQU5LO0lBT0xqSCxTQUFTLEVBQVRBO0VBUEssQ0FBUDtBQVNELENBalpEOztBQW1aQSxpRUFBZXlELEVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3Bvc2l0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wcmFjdGljYWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWZyZXNoaW5nTG9nbyBmcm9tICcuLi9pbWFnZXMvcmVmcmVzaExvZ28uc3ZnJztcblxuY29uc3QgRG9tID0gKCkgPT4ge1xuICBjb25zdCBnZXRFbGVtZW50cyA9ICgpID0+ICh7XG4gICAgb3ZlcmxheTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKSxcbiAgICBzZWN0aW9uU2NyZWVuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvblNjcmVlbicpLFxuICAgIHNoaXBUZXh0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcFRleHQnKSxcbiAgICBzaGlwR3JpZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBHcmlkJyksXG4gICAgc2hpcExheWVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcExheWVyJyksXG4gICAgcm90YXRlQnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlQnV0dG9uJyksXG4gICAgZ3JpZHM6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQnKSksXG4gICAgaGl0czogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGl0cycpKSxcbiAgICBtaXNzZXM6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1pc3NlcycpKSxcbiAgICBwbGF5ZXJHcmlkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyR3JpZCcpLFxuICAgIHBsYXllckhpdHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJIaXRzJyksXG4gICAgcGxheWVyTWlzc2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyTWlzc2VzJyksXG4gICAgY29tcHV0ZXJHcmlkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXJHcmlkJyksXG4gICAgY29tcHV0ZXJIaXRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXJIaXRzJyksXG4gICAgY29tcHV0ZXJNaXNzZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlck1pc3NlcycpLFxuICAgIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JyksXG4gICAgY29tcHV0ZXJHcmlkTGF5ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlckdyaWRMYXllcicpLFxuICB9KTtcblxuICBjb25zdCBnZXRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBTZWxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwic2hpcFRpdGxlXCI+QkFUVExFU0hJUDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInNoaXBUZXh0XCI+UGxhY2UgeW91ciBCYXR0bGVzaGlwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBMYXllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwT3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwR3JpZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3RhdGVCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdGF0ZUltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIiR7cmVmcmVzaGluZ0xvZ299XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlJvdGF0ZSBJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzPVwibWFpblNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluVGl0bGVcIj48aDE+QkFUVExFU0hJUDwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyQm9hcmQgYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJib2FyZFRpdGxlXCI+UGxheWVyIEJvYXJkPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZExheWVyIHBsYXllckdyaWRMYXllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRPdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyR3JpZCBncmlkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllclN0YXRzIHN0YXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwbGF5ZXJIaXRzIGhpdHNcIj5IaXRzIDA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicGxheWVyTWlzc2VzIG1pc3Nlc1wiPk1pc3NlcyAwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXB1dGVyQm9hcmQgYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJib2FyZFRpdGxlXCI+Q29tcHV0ZXIgQm9hcmQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkTGF5ZXIgY29tcHV0ZXJHcmlkTGF5ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkT3ZlcmxheSBjb21wdXRlckdyaWRPdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcHV0ZXJHcmlkIGdyaWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcHV0ZXJTdGF0cyBzdGF0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY29tcHV0ZXJIaXRzIGhpdHNcIj5IaXRzIDA8L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjb21wdXRlck1pc3NlcyBtaXNzZXNcIj5NaXNzZXMgMDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvcHlyaWdodE1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Vic2l0ZSBhbmQgY29kZSBhcmUgbWFkZSBieSBCcmF5ZGVuIEdyb3RlZ3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgIHJldHVybiBjb250ZW50O1xuICB9O1xuXG4gIHJldHVybiB7IGdldFBhZ2UsIGdldEVsZW1lbnRzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb207XG4iLCJpbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IFByYWN0aWNhbCBmcm9tICcuL3ByYWN0aWNhbC5qcyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuICBjb25zdCBzaGlwID0gU2hpcCgpO1xuICBjb25zdCBwcmFjdGljYWwgPSBQcmFjdGljYWwoKTtcblxuICBsZXQgY3VycmVudFNoaXBzID0gW107XG4gIGxldCBoaXRzID0gW107XG4gIGxldCBtaXNzZXMgPSBbXTtcblxuICBjb25zdCByYW5kb21pemUgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgY29uc3QgcmFuZG9tQXhpcyA9ICgpID0+IHtcbiAgICBjb25zdCBheGllcyA9IFsneCcsICd5J107XG4gICAgcmV0dXJuIGF4aWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF4aWVzLmxlbmd0aCldO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlQWxsU2hpcHMgPSAoc2hpcHNBcnJheSkgPT4ge1xuICAgIGN1cnJlbnRTaGlwcyA9IHNoaXBzQXJyYXk7XG4gICAgcmV0dXJuIGN1cnJlbnRTaGlwcztcbiAgfTtcblxuICBjb25zdCBjb21wYXJlU2hpcHNBcnJheSA9IChsYXRlc3RTaGlwc0FycmF5LCBzaGlwcykgPT4ge1xuICAgIGxldCBzaGlwc0RvQ29sbGlkZSA9IGZhbHNlO1xuICAgIGlmICghc2hpcHMpIHJldHVybiBzaGlwc0RvQ29sbGlkZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGxhdGVzdFNoaXBzQXJyYXksICd0aGUgY3VycmVlbnQgc2hpcHMgYXJyYXknKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwcywgJ3RoZSBjdXJyZW50IHNoaXBzJyk7XG5cbiAgICBsYXRlc3RTaGlwc0FycmF5LmZvckVhY2goKGxhdGVzdFNoaXBzKSA9PiB7XG4gICAgICBsYXRlc3RTaGlwcy5mb3JFYWNoKChib2F0KSA9PiB7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKGxhdGVzdEJvYXQpID0+IHtcbiAgICAgICAgICBpZiAocG9zaXRpb24uY29tcGFyZVBvc2l0aW9uKGJvYXQsIGxhdGVzdEJvYXQpKSB7XG4gICAgICAgICAgICBzaGlwc0RvQ29sbGlkZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBzRG9Db2xsaWRlO1xuICB9O1xuXG4gIGNvbnN0IGdldFR5cGVPZlBsYWNlZFNoaXAgPSAoc2hpcEFycmF5KSA9PiB7XG4gICAgaWYgKHNoaXBBcnJheS5sZW5ndGggPT09IDUpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHNoaXBUeXBlcyA9IFtcbiAgICAgIHsgc2hpcFR5cGU6ICdjYXJyaWVyJywgc2hpcExlbmd0aDogNSB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2JhdHRsZXNoaXAnLCBzaGlwTGVuZ3RoOiA0IH0sXG4gICAgICB7IHNoaXBUeXBlOiAnZGVzdG95ZXInLCBzaGlwTGVuZ3RoOiAzIH0sXG4gICAgICB7IHNoaXBUeXBlOiAnc3VibWFyaW5lJywgc2hpcExlbmd0aDogMyB9LFxuICAgICAgeyBzaGlwVHBlOiAnZ3VuYm9hdCcsIHNoaXBMZW5ndGg6IDIgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIHNoaXBUeXBlc1tjdXJyZW50U2hpcHMubGVuZ3RoXTtcbiAgfTtcblxuICBjb25zdCBwbGF5ZXJQbGFjZVNoaXAgPSAobG9jYXRpb24sIGF4aXMpID0+IHtcbiAgICBjb25zdCBjdXJyZW50QXJyYXkgPSBwcmFjdGljYWwuY29weUFycmF5KGN1cnJlbnRTaGlwcyk7XG5cbiAgICBjb25zdCBzaGlwVHlwZSA9IGdldFR5cGVPZlBsYWNlZFNoaXAoY3VycmVudEFycmF5KTtcblxuICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gc2hpcC5jcmVhdGVTaGlwKGxvY2F0aW9uLCBzaGlwVHlwZS5zaGlwTGVuZ3RoLCBheGlzKTtcblxuICAgIGNvbnN0IGlzQ29sbGlkZWQgPSBjb21wYXJlU2hpcHNBcnJheShjdXJyZW50QXJyYXksIGN1cnJlbnRTaGlwKTtcblxuICAgIGlmIChjdXJyZW50QXJyYXkubGVuZ3RoID09PSA1IHx8ICFjdXJyZW50U2hpcCB8fCBpc0NvbGxpZGVkKSB7XG4gICAgICByZXR1cm4gY3VycmVudEFycmF5O1xuICAgIH1cblxuICAgIGN1cnJlbnRBcnJheS5wdXNoKGN1cnJlbnRTaGlwKTtcbiAgICBjdXJyZW50U2hpcHMgPSBjdXJyZW50QXJyYXk7XG4gICAgcmV0dXJuIGN1cnJlbnRBcnJheTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVJhbmRvbVNoaXBzID0gKHNoaXBzQXJyYXksIHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKSA9PiB7XG4gICAgY29uc3QgbGF0ZXN0U2hpcHNBcnJheSA9IHNoaXBzQXJyYXk7XG4gICAgY29uc3QgcmFuZG9tUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihyYW5kb21pemVyKCksIHJhbmRvbWl6ZXIoKSk7XG4gICAgY29uc3Qgc2hpcFR5cGUgPSBnZXRUeXBlT2ZQbGFjZWRTaGlwKGxhdGVzdFNoaXBzQXJyYXkpO1xuICAgIGlmICghc2hpcFR5cGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKHNoaXBUeXBlKTtcbiAgICAgIGNvbnNvbGUubG9nKGxhdGVzdFNoaXBzQXJyYXksICd0aGUgbGF0ZXN0IHNoaXBzIGFycmF5Jyk7XG5cbiAgICAgIHJldHVybiBsYXRlc3RTaGlwc0FycmF5O1xuICAgIH1cblxuICAgIGNvbnN0IGxhdGVzdExlbmd0aCA9IHNoaXBUeXBlLnNoaXBMZW5ndGg7XG5cbiAgICBjb25zdCByYW5kb21TaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgcmFuZG9tUG9zaXRpb24sXG4gICAgICBsYXRlc3RMZW5ndGgsXG4gICAgICByYW5kb21BeGllcygpXG4gICAgKTtcblxuICAgIGlmIChyYW5kb21TaGlwLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNoaXBDb2xsaWRlcyA9IGNvbXBhcmVTaGlwc0FycmF5KGxhdGVzdFNoaXBzQXJyYXksIHJhbmRvbVNoaXApO1xuICAgICAgaWYgKCFzaGlwQ29sbGlkZXMpIGxhdGVzdFNoaXBzQXJyYXkucHVzaChyYW5kb21TaGlwKTtcbiAgICB9XG4gICAgMjtcbiAgICByZXR1cm4gcGxhY2VSYW5kb21TaGlwcyhsYXRlc3RTaGlwc0FycmF5LCByYW5kb21pemVyLCByYW5kb21BeGllcyk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwc1JhbmRvbWx5ID0gKHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKSA9PiB7XG4gICAgY29uc3Qgc2hpcHNBcnJheSA9IHBsYWNlUmFuZG9tU2hpcHMoW10sIHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKTtcbiAgICBjdXJyZW50U2hpcHMgPSBzaGlwc0FycmF5O1xuXG4gICAgcmV0dXJuIHNoaXBzQXJyYXk7XG4gIH07XG4gIGNvbnN0IGZpbHRlckF0dGFjayA9IChhcnJheSwgY3VycmVudEF0dGFjaykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRBdHRhY2tBcnJheSA9IGFycmF5LmZpbHRlcihcbiAgICAgIChpdGVtKSA9PlxuICAgICAgICBpdGVtLnhDb29yZCA9PT0gY3VycmVudEF0dGFjay54Q29vcmQgJiZcbiAgICAgICAgaXRlbS55Q29vcmQgPT09IGN1cnJlbnRBdHRhY2sueUNvb3JkXG4gICAgKTtcblxuICAgIHJldHVybiBjdXJyZW50QXR0YWNrQXJyYXk7XG4gIH07XG5cbiAgY29uc3QgaGFzSGl0U2hpcCA9IChoaXRQb3NpdGlvbiwgbGF0ZXN0SGl0cywgbGF0ZXN0TWlzc2VzKSA9PiB7XG4gICAgY29uc3QgaGFzQmVlbkhpdCA9IGZpbHRlckF0dGFjayhsYXRlc3RIaXRzLCBoaXRQb3NpdGlvbik7XG4gICAgY29uc3QgaGFzQmVlbk1pc3MgPSBmaWx0ZXJBdHRhY2sobGF0ZXN0TWlzc2VzLCBoaXRQb3NpdGlvbik7XG5cbiAgICBpZiAoaGFzQmVlbkhpdC5sZW5ndGggPiAwIHx8IGhhc0JlZW5NaXNzLmxlbmd0aCA+IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tTaGlwID0gKGxhdGVzdFBvc2l0aW9uLCBzaGlwcywgY3VycmVudEhpdHMsIGN1cnJlbnRNaXNzZXMpID0+IHtcbiAgICBsZXQgaXNIaXQgPSBmYWxzZTtcbiAgICBjb25zdCBsYXRlc3RTaGlwc0FycmF5ID0gW107XG4gICAgY29uc3QgbGF0ZXN0SGl0cyA9IGN1cnJlbnRIaXRzO1xuICAgIGNvbnN0IGxhdGVzdE1pc3NlcyA9IGN1cnJlbnRNaXNzZXM7XG5cbiAgICBpZiAoIWxhdGVzdFBvc2l0aW9uKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGhhc0hpdFNoaXAobGF0ZXN0UG9zaXRpb24sIGN1cnJlbnRIaXRzLCBjdXJyZW50TWlzc2VzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcEFycmF5KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb25zQXJyYXkgPSBwcmFjdGljYWwuY29weUFycmF5KHNoaXBBcnJheSk7XG4gICAgICBjb25zdCBoaXQgPSBzaGlwLmhpdChwb3NpdGlvbnNBcnJheSwgbGF0ZXN0UG9zaXRpb24pO1xuXG4gICAgICBpZiAoaGl0LmhpdEFycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpc0hpdCA9IHRydWU7XG4gICAgICAgIHBvc2l0aW9uc0FycmF5ID0gaGl0LnNoaXBBcnJheXM7XG4gICAgICAgIGxhdGVzdEhpdHMucHVzaChoaXQuaGl0QXJyYXlbMF0pO1xuICAgICAgfVxuICAgICAgbGF0ZXN0U2hpcHNBcnJheS5wdXNoKHBvc2l0aW9uc0FycmF5KTtcbiAgICB9KTtcbiAgICBpZiAoIWlzSGl0KSBsYXRlc3RNaXNzZXMucHVzaChsYXRlc3RQb3NpdGlvbik7XG5cbiAgICBjb25zdCBmaW5hbE9iamVjdCA9IHtcbiAgICAgIGlzSGl0LFxuICAgICAgbGF0ZXN0U2hpcHNBcnJheSxcbiAgICAgIGxhdGVzdEhpdHMsXG4gICAgICBsYXRlc3RNaXNzZXMsXG4gICAgfTtcblxuICAgIHJldHVybiBmaW5hbE9iamVjdDtcbiAgfTtcblxuICBjb25zdCByZWNpZXZlQXR0YWNrID0gKGxhdGVzdFBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXR0YWNrU2hpcChsYXRlc3RQb3NpdGlvbiwgY3VycmVudFNoaXBzLCBoaXRzLCBtaXNzZXMpO1xuICAgIGlmICghcmVzdWx0KSByZXR1cm4gZmFsc2U7XG5cbiAgICBjdXJyZW50U2hpcHMgPSByZXN1bHQubGF0ZXN0U2hpcHNBcnJheTtcbiAgICBoaXRzID0gcmVzdWx0LmxhdGVzdEhpdHM7XG4gICAgbWlzc2VzID0gcmVzdWx0LmxhdGVzdE1pc3NlcztcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUmFuZG9tQ29vcmRzID0gKHJhbmRvbWl6ZXIpID0+IHtcbiAgICBsZXQgcmFuZG9tUG9zaXRpb247XG5cbiAgICBpZiAocmFuZG9taXplci5pc01vY2tSYW5kb20pIHtcbiAgICAgIHJhbmRvbVBvc2l0aW9uID0gcmFuZG9taXplci5jYWxsUmFuZG9taXplcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByYW5kb21YID0gcmFuZG9taXplcigpO1xuICAgICAgY29uc3QgcmFuZG9tWSA9IHJhbmRvbWl6ZXIoKTtcbiAgICAgIHJhbmRvbVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24ocmFuZG9tWCwgcmFuZG9tWSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmRvbVBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IHJlY2lldmVSYW5kb21BdHRhY2sgPSAocmFuZG9taXplcikgPT4ge1xuICAgIGNvbnN0IHJhbmRvbVBvc2l0aW9uID0gY3JlYXRlUmFuZG9tQ29vcmRzKHJhbmRvbWl6ZXIpO1xuICAgIGNvbnN0IGhhc0hpdCA9IGhhc0hpdFNoaXAocmFuZG9tUG9zaXRpb24sIGhpdHMsIG1pc3Nlcyk7XG5cbiAgICBpZiAoaGFzSGl0KSByZXR1cm4gcmVjaWV2ZVJhbmRvbUF0dGFjayhyYW5kb21pemVyKTtcblxuICAgIHJldHVybiByZWNpZXZlQXR0YWNrKHJhbmRvbVBvc2l0aW9uKTtcbiAgfTtcblxuICBjb25zdCBpc0FsbFN1bmsgPSAoKSA9PiB7XG4gICAgbGV0IGhhc1N1bmtlZCA9IHRydWU7XG4gICAgY3VycmVudFNoaXBzLmZvckVhY2goKHNoaXBzKSA9PiB7XG4gICAgICBpZiAoIXNoaXAuaXNTdW5rKHNoaXBzKSkge1xuICAgICAgICBoYXNTdW5rZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBoYXNTdW5rZWQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsdWVzID0gKCkgPT4gKHtcbiAgICBjdXJyZW50U2hpcHMsXG4gICAgaGl0cyxcbiAgICBtaXNzZXMsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgYXR0YWNrU2hpcCxcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIGlzQWxsU3VuayxcbiAgICBwbGFjZVNoaXBzUmFuZG9tbHksXG4gICAgcGxheWVyUGxhY2VTaGlwLFxuICAgIHBsYWNlQWxsU2hpcHMsXG4gICAgcmFuZG9taXplLFxuICAgIHJlY2lldmVSYW5kb21BdHRhY2ssXG4gICAgcmFuZG9tQXhpcyxcbiAgICBnZXRWYWx1ZXMsXG4gICAgZ2V0VHlwZU9mUGxhY2VkU2hpcCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcblxuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuXG5jb25zdCBHYW1lID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IHBsYXllckNoZWNrQm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG5cbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcblxuICBjb25zdCByYW5kb21pemVyID0gY29tcHV0ZXJCb2FyZC5yYW5kb21pemU7XG4gIGNvbnN0IHJhbmRvbUF4aWVzID0gY29tcHV0ZXJCb2FyZC5yYW5kb21BeGlzO1xuXG4gIGNvbnN0IGNoZWNrU2V0dXAgPSAocGxheWVyQ2hlY2tTaGlwcykgPT4ge1xuICAgIGlmIChwbGF5ZXJDaGVja1NoaXBzLmxlbmd0aCA9PT0gNSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwR2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJDaGVja1ZhbHVlcyA9IHBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCk7XG5cbiAgICBpZiAoIWNoZWNrU2V0dXAocGxheWVyQ2hlY2tWYWx1ZXMuY3VycmVudFNoaXBzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcGxheWVyQm9hcmQucGxhY2VBbGxTaGlwcyhwbGF5ZXJDaGVja1ZhbHVlcy5jdXJyZW50U2hpcHMpO1xuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tCb2F0cyA9IChjb29yZHMpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJDaGVja1ZhbHVlcyA9IHBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCk7XG5cbiAgICBpZiAoIWNoZWNrU2V0dXAocGxheWVyQ2hlY2tWYWx1ZXMuY3VycmVudFNoaXBzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgY3VycmVudEF0dGFjayA9IGNvbXB1dGVyQm9hcmQucmVjaWV2ZUF0dGFjayhjb29yZHMpO1xuICAgIGlmICghY3VycmVudEF0dGFjaykgcmV0dXJuIGZhbHNlO1xuICAgIHBsYXllckJvYXJkLnJlY2lldmVSYW5kb21BdHRhY2socmFuZG9taXplcik7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBzZXR1cFNoaXAgPSAobG9jYXRpb24sIGF4aXMpID0+XG4gICAgcGxheWVyQ2hlY2tCb2FyZC5wbGF5ZXJQbGFjZVNoaXAobG9jYXRpb24sIGF4aXMpO1xuXG4gIGNvbnN0IGdhbWVJc092ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQ2hlY2tTaGlwcyA9IHBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCkuY3VycmVudFNoaXBzO1xuICAgIGlmICghY2hlY2tTZXR1cChwbGF5ZXJDaGVja1NoaXBzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKGNvbXB1dGVyQm9hcmQuaXNBbGxTdW5rKCkpIHtcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdZb3UgV29uJywgZ2FtZUZpbmlzaGVkOiB0cnVlIH07XG4gICAgfVxuXG4gICAgaWYgKHBsYXllckJvYXJkLmlzQWxsU3VuaygpKSB7XG4gICAgICByZXR1cm4geyBtZXNzYWdlOiAnWW91IExvc3QnLCBnYW1lRmluaXNoZWQ6IHRydWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZ2FtZUZpbmlzaGVkOiBmYWxzZSB9O1xuICB9O1xuXG4gIGNvbnN0IGFycmFuZ2VCbG9ja3MgPSAobW91c2VQb3NpdGlvbiwgY3VycmVudFJvdGF0aW9uKSA9PiB7XG4gICAgY29uc3QgY2hlY2tib2FyZE9iamVjdHMgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpO1xuXG4gICAgY29uc3Qgc2hpcFR5cGVPYmplY3QgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFR5cGVPZlBsYWNlZFNoaXAoXG4gICAgICBjaGVja2JvYXJkT2JqZWN0cy5jdXJyZW50U2hpcHNcbiAgICApO1xuXG4gICAgLy8gY29uc29sZS5sb2coc2hpcFR5cGVPYmplY3QsICd0aGUgc2hpcCB0eXBlIG9iamVjdCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKG1vdXNlUG9zaXRpb24sICd0aGUgbW91c2UgcG9zaXRpb24nKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50Um90YXRpb24sICd0aGUgY3VycmVudCByb3RhdGlvbicpO1xuXG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAoXG4gICAgICBtb3VzZVBvc2l0aW9uLFxuICAgICAgc2hpcFR5cGVPYmplY3Quc2hpcExlbmd0aCxcbiAgICAgIGN1cnJlbnRSb3RhdGlvblxuICAgICk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFNoaXAsICd0aGUgbW9zdCB1cCB0byBkYXRlIHNoaXBzJyk7XG5cbiAgICByZXR1cm4gY3VycmVudFNoaXA7XG4gIH07XG5cbiAgY29uc3QgZ2V0R2FtZVZhbHVlcyA9ICgpID0+ICh7XG4gICAgcGxheWVyQm9hcmQsXG4gICAgY29tcHV0ZXJCb2FyZCxcbiAgICBwbGF5ZXJDaGVja0JvYXJkLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGNoZWNrU2V0dXAsXG4gICAgYXR0YWNrQm9hdHMsXG4gICAgc2V0dXBHYW1lLFxuICAgIGdhbWVJc092ZXIsXG4gICAgc2V0dXBTaGlwLFxuICAgIGdldEdhbWVWYWx1ZXMsXG4gICAgYXJyYW5nZUJsb2NrcyxcbiAgfTtcbn07XG5cbmNvbnN0IGFjdGl2ZUdhbWUgPSBHYW1lKCk7XG5cbmV4cG9ydCB7IEdhbWUsIGFjdGl2ZUdhbWUgfTtcbiIsImNvbnN0IFBvc2l0aW9uID0gKCkgPT4ge1xuICBjb25zdCBjcmVhdGVQb3NpdGlvbiA9ICh4Q29vcmQsIHlDb29yZCkgPT4gKHsgeENvb3JkLCB5Q29vcmQgfSk7XG5cbiAgY29uc3QgY2hlY2tPdXRPZkJvdW5jZSA9IChuZXdQb3NpdGlvbikgPT4ge1xuICAgIGlmIChuZXdQb3NpdGlvbi54Q29vcmQgPiA5IHx8IG5ld1Bvc2l0aW9uLnlDb29yZCA+IDkpIHJldHVybiB0cnVlO1xuICAgIGlmIChuZXdQb3NpdGlvbi54Q29vcmQgPCAwIHx8IG5ld1Bvc2l0aW9uLnlDb29yZCA8IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBhZGRQb3NpdGlvbiA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMikgPT4ge1xuICAgIGlmIChwb3NpdGlvbjEgPT09IGZhbHNlIHx8IHBvc2l0aW9uMiA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gY3JlYXRlUG9zaXRpb24ocG9zaXRpb24xLnhDb29yZCwgcG9zaXRpb24xLnlDb29yZCk7XG4gICAgbmV3UG9zaXRpb24ueENvb3JkICs9IHBvc2l0aW9uMi54Q29vcmQ7XG4gICAgbmV3UG9zaXRpb24ueUNvb3JkICs9IHBvc2l0aW9uMi55Q29vcmQ7XG5cbiAgICBpZiAoY2hlY2tPdXRPZkJvdW5jZShuZXdQb3NpdGlvbikpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBuZXdQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBtdWx0aXBseVBvc2l0aW9uID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uMSA9PT0gZmFsc2UgfHwgcG9zaXRpb24yID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBjcmVhdGVQb3NpdGlvbihwb3NpdGlvbjEueENvb3JkLCBwb3NpdGlvbjEueUNvb3JkKTtcbiAgICBuZXdQb3NpdGlvbi54Q29vcmQgKj0gcG9zaXRpb24yLnhDb29yZDtcbiAgICBuZXdQb3NpdGlvbi55Q29vcmQgKj0gcG9zaXRpb24yLnlDb29yZDtcblxuICAgIGlmIChjaGVja091dE9mQm91bmNlKG5ld1Bvc2l0aW9uKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwgPSAocG9zaXRpb24xLCBwb3NpdGlvbjIsIGF4aXMpID0+IHtcbiAgICBpZiAocG9zaXRpb24xW2F4aXNdID09PSBwb3NpdGlvbjJbYXhpc10gKyAxKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAocG9zaXRpb24xW2F4aXNdID09PSBwb3NpdGlvbjJbYXhpc10pIHJldHVybiB0cnVlO1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSAtIDEpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBjb21wYXJlUG9zaXRpb24gPSAocG9zaXRpb24xLCBwb3NpdGlvbjIpID0+IHtcbiAgICBpZiAoIWNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwocG9zaXRpb24xLCBwb3NpdGlvbjIsICd4Q29vcmQnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwocG9zaXRpb24xLCBwb3NpdGlvbjIsICd5Q29vcmQnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVBvc2l0aW9uLFxuICAgIGFkZFBvc2l0aW9uLFxuICAgIG11bHRpcGx5UG9zaXRpb24sXG4gICAgY29tcGFyZVBvc2l0aW9uLFxuICAgIGNoZWNrT3V0T2ZCb3VuY2UsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3NpdGlvbjtcbiIsImNvbnN0IFByYWN0aWNhbCA9ICgpID0+IHtcbiAgY29uc3QgY29weUFycmF5ID0gKGFycmF5KSA9PiB7XG4gICAgY29uc3QgbmV3QXJyYXkgPSBbXTtcblxuICAgIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIG5ld0FycmF5LnB1c2goaXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3QXJyYXk7XG4gIH07XG5cbiAgY29uc3QgaXNPYmplY3QgPSAoY3VycmVudE9iamVjdCkgPT4ge1xuICAgIGlmICh0eXBlb2YgY3VycmVudE9iamVjdCA9PT0gJ29iamVjdCcgJiYgY3VycmVudE9iamVjdCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBjaGVja09iamVjdCA9IChvYmplY3QxLCBvYmplY3QyKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgc2Vjb25kSW5kZXggPSAwO1xuXG4gICAgbGV0IG9iamVjdElzRXF1YWwgPSB0cnVlO1xuXG4gICAgY29uc3QgY3VycmVudE9iamVjdCA9IG9iamVjdDE7XG4gICAgY29uc3QgY3VycmVudE9iamVjdDIgPSBvYmplY3QyO1xuXG4gICAgY29uc3QgY3VycmVudE9iamVjdFZhbHVlcyA9IE9iamVjdC52YWx1ZXMoY3VycmVudE9iamVjdCk7XG4gICAgY29uc3QgY3VycmVudE9iamVjdDJWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGN1cnJlbnRPYmplY3QyKTtcblxuICAgIGNvbnN0IG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyhjdXJyZW50T2JqZWN0KTtcbiAgICBjb25zdCBvYmplY3RLZXlzMiA9IE9iamVjdC5rZXlzKGN1cnJlbnRPYmplY3QyKTtcblxuICAgIG9iamVjdEtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoa2V5ICE9PSBvYmplY3RLZXlzMltpbmRleF0pIG9iamVjdElzRXF1YWwgPSBmYWxzZTtcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgfSk7XG5cbiAgICBpZiAoIW9iamVjdElzRXF1YWwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAob2JqZWN0S2V5cy5sZW5ndGggIT09IG9iamVjdEtleXMyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudE9iamVjdCwgJ3RoZSBjdXJyZW50IG9iamVjdCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRPYmplY3QyLCAndGhlIGN1cnJlbnQgb2JqZWN0MicpO1xuXG4gICAgY3VycmVudE9iamVjdFZhbHVlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBpdGVtMiA9IGN1cnJlbnRPYmplY3QyVmFsdWVzW3NlY29uZEluZGV4XTtcblxuICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pICYmIGlzT2JqZWN0KGl0ZW0yKSkge1xuICAgICAgICBjb25zdCBjaGVja09iamVjdEJvb2wgPSBjaGVja09iamVjdChpdGVtLCBpdGVtMik7XG5cbiAgICAgICAgaWYgKCFjaGVja09iamVjdEJvb2wpIG9iamVjdElzRXF1YWwgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbSAhPT0gaXRlbTIpIHtcbiAgICAgICAgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBzZWNvbmRJbmRleCArPSAxO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iamVjdElzRXF1YWw7XG4gIH07XG5cbiAgcmV0dXJuIHsgY29weUFycmF5LCBjaGVja09iamVjdCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJhY3RpY2FsO1xuIiwiaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuXG5jb25zdCBTaGlwID0gKCkgPT4ge1xuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG5cbiAgY29uc3QgZ2V0QWRkZWRQb3NpdGlvbiA9IChheGlzKSA9PiB7XG4gICAgbGV0IGFkZGVkUG9zaXRpb247XG5cbiAgICBpZiAoYXhpcyA9PT0gJ3gnKSBhZGRlZFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oMSwgMCk7XG4gICAgZWxzZSBhZGRlZFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oMCwgMSk7XG5cbiAgICByZXR1cm4gYWRkZWRQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVTaGlwID0gKHBvc2l0aW9uMSwgbGVuZ3RoMSwgYXhpcykgPT4ge1xuICAgIGlmIChsZW5ndGgxID09PSAwIHx8IGxlbmd0aDEgPiA1KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHBvc2l0aW9uLmNoZWNrT3V0T2ZCb3VuY2UocG9zaXRpb24xKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgcG9wdWxhdGVTaGlwcyA9IChjdXJyZW50UG9zaXRpb24sIGxhdGVzdExlbmd0aCwgbGF0ZXN0QXJyYXkpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRBcnJheSA9IGxhdGVzdEFycmF5O1xuICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uO1xuXG4gICAgICBpZiAoY3VycmVudFBvc2l0aW9uID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKGxhdGVzdExlbmd0aCA9PT0gMCkgcmV0dXJuIGN1cnJlbnRBcnJheTtcbiAgICAgIGlmIChsYXRlc3RMZW5ndGggPT09IGxlbmd0aDEpIHtcbiAgICAgICAgY3VycmVudEFycmF5LnB1c2goY3VycmVudFBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIHBvcHVsYXRlU2hpcHMoY3VycmVudFBvc2l0aW9uLCBsYXRlc3RMZW5ndGggLSAxLCBjdXJyZW50QXJyYXkpO1xuICAgICAgfVxuICAgICAgY29uc3QgYWRkZWRQb3NpdGlvbiA9IGdldEFkZGVkUG9zaXRpb24oYXhpcyk7XG4gICAgICBuZXdQb3NpdGlvbiA9IHBvc2l0aW9uLmFkZFBvc2l0aW9uKG5ld1Bvc2l0aW9uLCBhZGRlZFBvc2l0aW9uKTtcblxuICAgICAgaWYgKCFuZXdQb3NpdGlvbikgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICAgICAgY3VycmVudEFycmF5LnB1c2gobmV3UG9zaXRpb24pO1xuXG4gICAgICBjb25zdCBhcnJheUxlbmd0aCA9IGN1cnJlbnRBcnJheS5sZW5ndGggLSAxO1xuXG4gICAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhcbiAgICAgICAgY3VycmVudEFycmF5W2FycmF5TGVuZ3RoXSxcbiAgICAgICAgbGF0ZXN0TGVuZ3RoIC0gMSxcbiAgICAgICAgY3VycmVudEFycmF5XG4gICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhwb3NpdGlvbjEsIGxlbmd0aDEsIFtdLCBmYWxzZSk7XG4gIH07XG5cblxuXG4gIGNvbnN0IGlzU3VuayA9IChzaGlwQXJyYXkpID0+IHtcbiAgICBpZiAoc2hpcEFycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGhpdCA9IChwb3NpdGlvbnNBcnJheSwgcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBoaXRBcnJheSA9IHBvc2l0aW9uc0FycmF5LmZpbHRlcigocG9zKSA9PiB7XG4gICAgICBpZiAocG9zLnhDb29yZCA9PT0gcG9zaXRpb24ueENvb3JkICYmIHBvcy55Q29vcmQgPT09IHBvc2l0aW9uLnlDb29yZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBjb25zdCBzaGlwQXJyYXlzID0gcG9zaXRpb25zQXJyYXkuZmlsdGVyKChwb3MpID0+IHtcbiAgICAgIGlmIChwb3MueENvb3JkID09PSBwb3NpdGlvbi54Q29vcmQgJiYgcG9zLnlDb29yZCA9PT0gcG9zaXRpb24ueUNvb3JkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgaGl0QXJyYXksIHNoaXBBcnJheXMgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVNoaXAsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJpbXBvcnQgRG9tIGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5pbXBvcnQgeyBhY3RpdmVHYW1lIH0gZnJvbSAnLi9tYWluLmpzJztcblxuY29uc3QgVWkgPSAoKSA9PiB7XG4gIGNvbnN0IGRvbSA9IERvbSgpO1xuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG4gIGNvbnN0IHNoaXAgPSBTaGlwKCk7XG5cbiAgY29uc3QgcmVuZGVyU3BlZWQgPSAxO1xuXG4gIGxldCBibG9ja1NpemUgPSA0MjtcblxuICBsZXQgcGxhY2VkU2hpcCA9IGZhbHNlO1xuICBsZXQgYXhpcyA9ICd5JztcblxuICBsZXQgbW91c2VCbG9ja0xvY2F0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgY3JlYXRlRG9tRWxlbWVudCA9IChlbGVtZW50TmFtZSkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XG5cbiAgY29uc3QgZ2V0TW91c2VQb3NpdGlvbiA9IChvZmZzZXRYLCBvZmZzZXRZKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cob2Zmc2V0WCwgb2Zmc2V0WSwgJ29mZnNldCB4IGFuZCBvZmZzZXQgeScpO1xuXG4gICAgY29uc3QgeENvb3JkID0gTWF0aC5mbG9vcihvZmZzZXRYIC8gYmxvY2tTaXplKTtcbiAgICBjb25zdCB5Q29vcmQgPSBNYXRoLmZsb29yKG9mZnNldFkgLyBibG9ja1NpemUpO1xuXG4gICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHhDb29yZCwgeUNvb3JkKTtcblxuICAgIGNvbnN0IG91dE9mQm91bmNlID0gcG9zaXRpb24uY2hlY2tPdXRPZkJvdW5jZShtb3VzZVBvc2l0aW9uKTtcblxuICAgIGlmIChvdXRPZkJvdW5jZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gY29uc29sZS5sb2cobW91c2VQb3NpdGlvbiwgJ3RoZSBjdXJyZW50IG1vdXNlIHBvc2l0aW9uJyk7XG5cbiAgICByZXR1cm4gbW91c2VQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBmaW5kTW91c2VQb3NpdGlvbiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRNb3VzZVBvc2l0aW9uID0gZ2V0TW91c2VQb3NpdGlvbihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcblxuICAgIG1vdXNlQmxvY2tMb2NhdGlvbiA9IGN1cnJlbnRNb3VzZVBvc2l0aW9uO1xuXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudE1vdXNlUG9zaXRpb24sICd0aGUgY3VycmVudCBtb3VzZSBwb3NpdGlvbicpO1xuICB9O1xuXG4gIC8vIHdvdGsgb24gdGhpcyBmdW5jdGlvblxuICBjb25zdCBmaW5kVG91Y2hQb3NpdGlvbiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgdG91Y2hPZmZzZXRYID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYIC0gcmVjdC54O1xuICAgIGNvbnN0IHRvdWNoT2Zmc2V0WSA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSAtIHJlY3QueTtcblxuICAgIGNvbnN0IHRvdWNoUG9zaXRpb24gPSBnZXRNb3VzZVBvc2l0aW9uKHRvdWNoT2Zmc2V0WCwgdG91Y2hPZmZzZXRZKTtcbiAgICBtb3VzZUJsb2NrTG9jYXRpb24gPSB0b3VjaFBvc2l0aW9uO1xuXG4gICAgY29uc29sZS5sb2cobW91c2VCbG9ja0xvY2F0aW9uLCAndGhlIG1vdXNlIGJsb2NrIGxvY2F0aW9uJyk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIC8vIGJsb2NrIHNpemUgbWF0Y2hlcyB0aGUgc2l6ZSBncmlkc2l6ZSBvZiB0aGUgbWVkaWEgcXVlcnkgZGl2aWRlZCBieSAxMFxuICBjb25zdCBjaGFuZ2VCbG9ja1NpemUgPSAobWF0Y2hNZWRpYSkgPT4ge1xuICAgIGJsb2NrU2l6ZSA9IDQyO1xuICAgIGlmIChtYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA5NjBweCknKS5tYXRjaGVzKSBibG9ja1NpemUgPSAzMDtcbiAgICBpZiAobWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNDcwcHgpJykubWF0Y2hlcykgYmxvY2tTaXplID0gMjE7XG4gICAgaWYgKG1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDMyMHB4KScpLm1hdGNoZXMpIGJsb2NrU2l6ZSA9IDE1O1xuICAgIHJldHVybiBibG9ja1NpemU7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhtYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAzMjBweCknKSwgJ3RoZSBjdXJyZW50IG1hdGNoIG1lZGlhJyk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQmxvY2tFbGVtZW50ID0gKGJsb2NrQ2xhc3MsIGNyZWF0ZUJsb2NrKSA9PiB7XG4gICAgbGV0IGxhdGVzdENsYXNzID0gYmxvY2tDbGFzcztcblxuICAgIGlmIChcbiAgICAgIGxhdGVzdENsYXNzICE9PSAnaGl0QmxvY2snICYmXG4gICAgICBsYXRlc3RDbGFzcyAhPT0gJ21pc3NCbG9jaycgJiZcbiAgICAgIGxhdGVzdENsYXNzICE9PSAnY3Vyc29yQmxvY2snXG4gICAgKSB7XG4gICAgICBsYXRlc3RDbGFzcyA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrRWxlbWVudCA9IGNyZWF0ZUJsb2NrKCdkaXYnKTtcbiAgICBibG9ja0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcbiAgICBpZiAobGF0ZXN0Q2xhc3MgIT09ICcnKSBibG9ja0VsZW1lbnQuY2xhc3NMaXN0LmFkZChsYXRlc3RDbGFzcyk7XG5cbiAgICByZXR1cm4gYmxvY2tFbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGRpc2FibGVTdGFydGVyVWkgPSAoKSA9PiB0cnVlO1xuXG4gIC8vIGNvbnN0IHJlbmRlclNlbGVjdGlvbkJsb2NrcyA9IChtb3VzZVBvc2l0aW9uLCBsYXRlc3RCbG9ja1NpemUpID0+IHtcbiAgLy8gICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgLy8gICBjb25zdCBjdXJyZW50U25ha2VCbG9jayA9IGNyZWF0ZUJsb2NrRWxlbWVudCgpO1xuICAvLyAgIGNvbnN0IHJlYWxQb3NpdGlvblggPSBNYXRoLmZsb29yKG1vdXNlUG9zaXRpb24ueENvb3JkICogbGF0ZXN0QmxvY2tTaXplKTtcbiAgLy8gICBjb25zdCByZWFsUG9zaXRpb25ZID0gTWF0aC5mbG9vcihtb3VzZVBvc2l0aW9uLnlDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG5cbiAgLy8gICBjb25zb2xlLmxvZyhtb3VzZVBvc2l0aW9uLCAnVEhFIENVUlJFTlQgTU9VU0UgUE9TSVRJT04nKTtcblxuICAvLyAgIGNvbnNvbGUubG9nKHJlYWxQb3NpdGlvblgsICd0aGUgcmVhbCBwb3NpdGlvbiB4Jyk7XG4gIC8vICAgY29uc29sZS5sb2cocmVhbFBvc2l0aW9uWSwgJ3RoZSByZWFsIHBvc2l0aW9uIHknKTtcblxuICAvLyAgIGN1cnJlbnRTbmFrZUJsb2NrLnN0eWxlLmxlZnQgPSBgJHtyZWFsUG9zaXRpb25YfXB4YDtcbiAgLy8gICBjdXJyZW50U25ha2VCbG9jay5zdHlsZS50b3AgPSBgJHtyZWFsUG9zaXRpb25ZfXB4YDtcblxuICAvLyAgIGVsZW1lbnQuc2hpcEdyaWQuYXBwZW5kQ2hpbGQoY3VycmVudFNuYWtlQmxvY2spO1xuICAvLyB9O1xuXG4gIGNvbnN0IGNyZWF0ZVNoaXBCbG9jayA9IChzaGlwUG9zaXRpb24sIGxhdGVzdEJsb2NrU2l6ZSwgc2hpcFR5cGUpID0+IHtcbiAgICBjb25zdCBzaGlwQmxvY2sgPSBjcmVhdGVCbG9ja0VsZW1lbnQoc2hpcFR5cGUsIGNyZWF0ZURvbUVsZW1lbnQpO1xuXG4gICAgY29uc3QgcmVhbFBvc2l0aW9uWCA9IE1hdGguZmxvb3Ioc2hpcFBvc2l0aW9uLnhDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgY29uc3QgcmVhbFBvc2l0aW9uWSA9IE1hdGguZmxvb3Ioc2hpcFBvc2l0aW9uLnlDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgc2hpcEJsb2NrLnN0eWxlLmxlZnQgPSBgJHtyZWFsUG9zaXRpb25YfXB4YDtcbiAgICBzaGlwQmxvY2suc3R5bGUudG9wID0gYCR7cmVhbFBvc2l0aW9uWX1weGA7XG5cbiAgICByZXR1cm4gc2hpcEJsb2NrO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckFscmVhZHlQbGFjZWRTaGlwcyA9IChzaGlwR3JpZCwgbGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgY29uc3QgZ2FtZVZhbHVlcyA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuICAgIGNvbnN0IGNoZWNrQm9hcmRTaGlwcyA9XG4gICAgICBnYW1lVmFsdWVzLnBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCkuY3VycmVudFNoaXBzO1xuXG4gICAgY2hlY2tCb2FyZFNoaXBzLmZvckVhY2goKHBsYXllckNoZWNrU2hpcHMpID0+IHtcbiAgICAgIHBsYXllckNoZWNrU2hpcHMuZm9yRWFjaCgoYm9hdCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwQmxvY2sgPSBjcmVhdGVTaGlwQmxvY2soYm9hdCwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgICAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQoc2hpcEJsb2NrKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclBsYWNlZFNoaXAgPSAobGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuICAgIGNvbnN0IHsgc2hpcEdyaWQgfSA9IGVsZW1lbnQ7XG5cbiAgICBpZiAoIXBsYWNlZFNoaXApIHJldHVybiBwbGFjZWRTaGlwO1xuXG4gICAgc2hpcEdyaWQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBwbGFjZWRTaGlwLmZvckVhY2goKHNoaXBQb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc2hpcEJsb2NrID0gY3JlYXRlU2hpcEJsb2NrKHNoaXBQb3NpdGlvbiwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgIHNoaXBHcmlkLmFwcGVuZENoaWxkKHNoaXBCbG9jayk7XG4gICAgfSk7XG5cbiAgICByZW5kZXJBbHJlYWR5UGxhY2VkU2hpcHMoc2hpcEdyaWQsIGxhdGVzdEJsb2NrU2l6ZSk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlQXhpcyA9ICgpID0+IHtcbiAgICBpZiAoYXhpcyA9PT0gJ3knKSBheGlzID0gJ3gnO1xuICAgIGVsc2UgYXhpcyA9ICd5JztcbiAgfTtcblxuICBjb25zdCBtb3ZlU2hpcEJ5RGlyZWN0aW9uID0gKG1vdXNlTG9jYXRpb24sIGN1cnJlbnRTaGlwLCBjdXJyZW50QXhpcykgPT4ge1xuICAgIGxldCBsYXRlc3RTaGlwID0gZmFsc2U7XG5cbiAgICBpZiAocG9zaXRpb24uY2hlY2tPdXRPZkJvdW5jZShjdXJyZW50U2hpcFswXSkpIHJldHVybiBsYXRlc3RTaGlwO1xuXG4gICAgY29uc3QgbmV3WFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICBtb3VzZUxvY2F0aW9uLnhDb29yZCxcbiAgICAgIDBcbiAgICApLnhDb29yZDtcblxuICAgIGNvbnN0IG5ld1lQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKFxuICAgICAgMCxcbiAgICAgIG1vdXNlTG9jYXRpb24ueUNvb3JkXG4gICAgKS55Q29vcmQ7XG5cbiAgICBsZXQgbmV3U2hpcFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICBuZXdYUG9zaXRpb24sXG4gICAgICBjdXJyZW50U2hpcFswXS55Q29vcmRcbiAgICApO1xuXG4gICAgaWYgKGN1cnJlbnRBeGlzID09PSAneCcpIHtcbiAgICAgIG5ld1NoaXBQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKFxuICAgICAgICBjdXJyZW50U2hpcFswXS54Q29vcmQsXG4gICAgICAgIG5ld1lQb3NpdGlvblxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsYXRlc3RTaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgbmV3U2hpcFBvc2l0aW9uLFxuICAgICAgY3VycmVudFNoaXAubGVuZ3RoLFxuICAgICAgY3VycmVudEF4aXNcbiAgICApO1xuXG4gICAgcmV0dXJuIGxhdGVzdFNoaXA7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VQbGF5ZXJTaGlwID0gKGxhdGVzdFNoaXAsIGxhdGVzdEF4aXMsIGxhdGVzdEdhbWUpID0+IHtcbiAgICBpZiAobGF0ZXN0U2hpcCkgbGF0ZXN0R2FtZS5zZXR1cFNoaXAobGF0ZXN0U2hpcFswXSwgbGF0ZXN0QXhpcyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUGxheWVyU2hpcEV2ZW50ID0gKCkgPT4ge1xuICAgIHBsYWNlUGxheWVyU2hpcChwbGFjZWRTaGlwLCBheGlzLCBhY3RpdmVHYW1lKTtcbiAgfTtcblxuICBjb25zdCBhZGRVaUV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgZWxlbWVudC5zaGlwTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmluZE1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZpbmRUb3VjaFBvc2l0aW9uKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcEV2ZW50KTtcblxuICAgIGVsZW1lbnQucm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQXhpcyk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVWlFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgZWxlbWVudC5zaGlwTGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmluZE1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZpbmRUb3VjaFBvc2l0aW9uKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcEV2ZW50KTtcblxuICAgIGVsZW1lbnQucm90YXRlQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQXhpcyk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tNb3VzZVRhcmdldCA9IChlbGVtZW50Q2xhc3MpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50Q2xhc3MsICd0aGUgZWxlbWVudCBjYWxzcycpO1xuICAgIGlmIChlbGVtZW50Q2xhc3MgIT09ICdncmlkT3ZlcmxheSBjb21wdXRlckdyaWRPdmVybGF5JykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZU1vdXNlUG9zaXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZVRhcmdldCA9IGNoZWNrTW91c2VUYXJnZXQoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSk7XG4gICAgaWYgKCFtb3VzZVRhcmdldCkgbW91c2VCbG9ja0xvY2F0aW9uID0gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrU2hpcHMgPSAoKSA9PiB7XG4gICAgYWN0aXZlR2FtZS5hdHRhY2tCb2F0cyhtb3VzZUJsb2NrTG9jYXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IGFkZEdhbWVFdmVudHMgPSAoKSA9PiB7XG4gICAgcmVtb3ZlVWlFdmVudHMoKTtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGNoYW5nZU1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuY29tcHV0ZXJHcmlkTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmluZE1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuY29tcHV0ZXJHcmlkTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhdHRhY2tTaGlwcyk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU2hpcHMgPSAoc2hpcHMsIGdyaWQsIGxhdGVzdEJsb2NrU2l6ZSkgPT4ge1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXBHcm91cCkgPT4ge1xuICAgICAgc2hpcEdyb3VwLmZvckVhY2goKGJvYXQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcEVsZW1lbnQgPSBjcmVhdGVTaGlwQmxvY2soYm9hdCwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChzaGlwRWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJIaXRzID0gKHNoaXBzLCBzaGlwVHlwZSwgZ3JpZCwgbGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcFBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzaGlwRWxlbWVudCA9IGNyZWF0ZVNoaXBCbG9jayhcbiAgICAgICAgc2hpcFBvc2l0aW9uLFxuICAgICAgICBsYXRlc3RCbG9ja1NpemUsXG4gICAgICAgIHNoaXBUeXBlXG4gICAgICApO1xuICAgICAgZ3JpZC5hcHBlbmRDaGlsZChzaGlwRWxlbWVudCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlQ3Vyc29yRWxlbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbXB1dGVyR3JpZCB9ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBjb25zb2xlLmxvZyhjb21wdXRlckdyaWQuaW5uZXJIVE1MKTtcbiAgfTtcbiAgLy8gV09SSyBPTiBUSElTIEFORCBGSVggUkFORE9NIExFTkdUSFxuICBjb25zdCByZW5kZXJHcmlkcyA9IChibG9ja1NpemUyLCBtb3VzZVBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgZ2FtZVZhbHVlcyA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuXG4gICAgY29uc3QgeyBwbGF5ZXJHcmlkIH0gPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICBjb25zdCB7IGNvbXB1dGVyR3JpZCB9ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBwbGF5ZXJHcmlkLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbXB1dGVyR3JpZC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IHBsYXllckJvYXJkVmFsdWVzID0gZ2FtZVZhbHVlcy5wbGF5ZXJCb2FyZC5nZXRWYWx1ZXMoKTtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkVmFsdWVzID0gZ2FtZVZhbHVlcy5jb21wdXRlckJvYXJkLmdldFZhbHVlcygpO1xuXG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyQm9hcmRWYWx1ZXMsICdwbGF5ZXJCb2FyZFZhbHVlcycpO1xuICAgIC8vIGNvbnNvbGUubG9nKGNvbXB1dGVyQm9hcmRWYWx1ZXMsICdjb21wdXRlckJvYXJkVmFsdWVzJyk7XG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyQm9hcmRWYWx1ZXMsICd0aGUgcGxheWVyIGJvYXJkIHZhbHVlcycpO1xuXG4gICAgcmVuZGVyU2hpcHMocGxheWVyQm9hcmRWYWx1ZXMuY3VycmVudFNoaXBzLCBwbGF5ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgICByZW5kZXJIaXRzKHBsYXllckJvYXJkVmFsdWVzLmhpdHMsICdoaXRCbG9jaycsIHBsYXllckdyaWQsIGJsb2NrU2l6ZTIpO1xuICAgIHJlbmRlckhpdHMocGxheWVyQm9hcmRWYWx1ZXMubWlzc2VzLCAnbWlzc0Jsb2NrJywgcGxheWVyR3JpZCwgYmxvY2tTaXplMik7XG5cbiAgICByZW5kZXJTaGlwcyhjb21wdXRlckJvYXJkVmFsdWVzLmN1cnJlbnRTaGlwcywgY29tcHV0ZXJHcmlkLCBibG9ja1NpemUyKTtcblxuICAgIHJlbmRlckhpdHMoY29tcHV0ZXJCb2FyZFZhbHVlcy5oaXRzLCAnaGl0QmxvY2snLCBjb21wdXRlckdyaWQsIGJsb2NrU2l6ZTIpO1xuICAgIHJlbmRlckhpdHMoXG4gICAgICBjb21wdXRlckJvYXJkVmFsdWVzLm1pc3NlcyxcbiAgICAgICdtaXNzQmxvY2snLFxuICAgICAgY29tcHV0ZXJHcmlkLFxuICAgICAgYmxvY2tTaXplMlxuICAgICk7XG5cbiAgICBjb25zdCBtb3VzZVNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAobW91c2VQb3NpdGlvbiwgMSwgJ3gnKTtcblxuICAgIGlmIChtb3VzZVNoaXApIHtcbiAgICAgIHJlbmRlckhpdHMobW91c2VTaGlwLCAnY3Vyc29yQmxvY2snLCBjb21wdXRlckdyaWQsIGJsb2NrU2l6ZTIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJTdGF0cyA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lVmFsdWVzID0gYWN0aXZlR2FtZS5nZXRHYW1lVmFsdWVzKCk7XG5cbiAgICBjb25zdCB7IHBsYXllckhpdHMsIHBsYXllck1pc3NlcyB9ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgY29uc3QgeyBjb21wdXRlckhpdHMsIGNvbXB1dGVyTWlzc2VzIH0gPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAgIGNvbnN0IHBsYXllckJvYXJkVmFsdWVzID0gZ2FtZVZhbHVlcy5wbGF5ZXJCb2FyZC5nZXRWYWx1ZXMoKTtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkVmFsdWVzID0gZ2FtZVZhbHVlcy5jb21wdXRlckJvYXJkLmdldFZhbHVlcygpO1xuXG4gICAgcGxheWVySGl0cy50ZXh0Q29udGVudCA9IGBIaXRzIC0gJHtwbGF5ZXJCb2FyZFZhbHVlcy5oaXRzLmxlbmd0aH1gO1xuICAgIHBsYXllck1pc3Nlcy50ZXh0Q29udGVudCA9IGBNaXNzZXMgLSAke3BsYXllckJvYXJkVmFsdWVzLm1pc3Nlcy5sZW5ndGh9YDtcblxuICAgIGNvbXB1dGVySGl0cy50ZXh0Q29udGVudCA9IGBIaXRzIC0gJHtjb21wdXRlckJvYXJkVmFsdWVzLmhpdHMubGVuZ3RofWA7XG4gICAgY29tcHV0ZXJNaXNzZXMudGV4dENvbnRlbnQgPSBgTWlzc2VzIC0gJHtjb21wdXRlckJvYXJkVmFsdWVzLm1pc3Nlcy5sZW5ndGh9YDtcbiAgfTtcblxuICBjb25zdCByZW5kZXJHYW1lID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZ2FtZVN0YXR1cyA9IGFjdGl2ZUdhbWUuZ2FtZUlzT3ZlcigpO1xuXG4gICAgICBjb25zdCBsYXRlc3RCbG9ja1NpemUgPSBjaGFuZ2VCbG9ja1NpemUod2luZG93Lm1hdGNoTWVkaWEpO1xuICAgICAgcmVuZGVyR3JpZHMobGF0ZXN0QmxvY2tTaXplLCBtb3VzZUJsb2NrTG9jYXRpb24pO1xuICAgICAgcmVuZGVyU3RhdHMoKTtcblxuICAgICAgaWYgKCFnYW1lU3RhdHVzLmdhbWVGaW5pc2hlZCkgcmVuZGVyR2FtZShsYXRlc3RCbG9ja1NpemUpO1xuICAgICAgcmVuZGVyR2FtZShsYXRlc3RCbG9ja1NpemUpO1xuICAgIH0sIHJlbmRlclNwZWVkKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgZWxlbWVudHMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGVsZW1lbnRzLnNlY3Rpb25TY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbGVtZW50cy5zaGlwR3JpZC5pbm5lckhUTUwgPSAnJztcbiAgfTtcblxuICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgcmVtb3ZlU2hpcFNlY3Rpb24oKTtcblxuICAgIGFjdGl2ZUdhbWUuc2V0dXBHYW1lKCk7XG4gICAgYWRkR2FtZUV2ZW50cygpO1xuXG4gICAgcmVuZGVyR2FtZSgpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclNlbGVjdGlvbkdyaWQgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBnYW1lVmFsdWUgPSBhY3RpdmVHYW1lLmdldEdhbWVWYWx1ZXMoKTtcbiAgICAgIGNvbnN0IGNoZWNrQm9hcmRTaGlwcyA9XG4gICAgICAgIGdhbWVWYWx1ZS5wbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpLmN1cnJlbnRTaGlwcztcblxuICAgICAgY2hhbmdlQmxvY2tTaXplKHdpbmRvdy5tYXRjaE1lZGlhKTtcblxuICAgICAgaWYgKGFjdGl2ZUdhbWUuY2hlY2tTZXR1cChnYW1lVmFsdWUucGxheWVyQ2hlY2tCb2FyZCkpIGRpc2FibGVTdGFydGVyVWkoKTtcblxuICAgICAgaWYgKG1vdXNlQmxvY2tMb2NhdGlvbikge1xuICAgICAgICBsZXQgY3VycmVudFNoaXAgPSBhY3RpdmVHYW1lLmFycmFuZ2VCbG9ja3MobW91c2VCbG9ja0xvY2F0aW9uLCBheGlzKTtcbiAgICAgICAgaWYgKCFjdXJyZW50U2hpcCAmJiBwbGFjZWRTaGlwKSB7XG4gICAgICAgICAgY3VycmVudFNoaXAgPSBtb3ZlU2hpcEJ5RGlyZWN0aW9uKFxuICAgICAgICAgICAgbW91c2VCbG9ja0xvY2F0aW9uLFxuICAgICAgICAgICAgcGxhY2VkU2hpcCxcbiAgICAgICAgICAgIGF4aXNcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRTaGlwKSBwbGFjZWRTaGlwID0gY3VycmVudFNoaXA7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cocGxhY2VkU2hpcCwgJ3RoZSBjdXJyZW50IHBsYWNlZCBzaGlwJyk7XG5cbiAgICAgICAgaWYgKHBsYWNlZFNoaXApIHJlbmRlclBsYWNlZFNoaXAoYmxvY2tTaXplKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhY3RpdmVHYW1lLmNoZWNrU2V0dXAoY2hlY2tCb2FyZFNoaXBzKSkgcmVuZGVyU2VsZWN0aW9uR3JpZCgpO1xuICAgICAgZWxzZSBzdGFydEdhbWUoYmxvY2tTaXplKTtcbiAgICB9LCByZW5kZXJTcGVlZCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsdWVzID0gKCkgPT4gKHtcbiAgICBibG9ja1NpemUsXG4gICAgcGxhY2VkU2hpcCxcbiAgICBheGlzLFxuICAgIG1vdXNlQmxvY2tMb2NhdGlvbixcbiAgfSk7XG5cbiAgY29uc3QgYWN0aXZhdGVVaSA9ICgpID0+IHtcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvbS5nZXRQYWdlKCk7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBwYWdlQ29udGVudDtcblxuICAgIGFkZFVpRXZlbnRzKCk7XG4gICAgcmVuZGVyU2VsZWN0aW9uR3JpZCgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWN0aXZhdGVVaSxcbiAgICBjcmVhdGVCbG9ja0VsZW1lbnQsXG4gICAgZ2V0TW91c2VQb3NpdGlvbixcbiAgICBtb3ZlU2hpcEJ5RGlyZWN0aW9uLFxuICAgIGNoYW5nZUJsb2NrU2l6ZSxcbiAgICBjaGFuZ2VBeGlzLFxuICAgIGdldFZhbHVlcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVpO1xuIl0sIm5hbWVzIjpbInJlZnJlc2hpbmdMb2dvIiwiRG9tIiwiZ2V0RWxlbWVudHMiLCJvdmVybGF5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VjdGlvblNjcmVlbiIsInNoaXBUZXh0Iiwic2hpcEdyaWQiLCJzaGlwTGF5ZXIiLCJyb3RhdGVCdXR0b24iLCJncmlkcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoaXRzIiwibWlzc2VzIiwicGxheWVyR3JpZCIsInBsYXllckhpdHMiLCJwbGF5ZXJNaXNzZXMiLCJjb21wdXRlckdyaWQiLCJjb21wdXRlckhpdHMiLCJjb21wdXRlck1pc3NlcyIsImNvbnRlbnQiLCJjb21wdXRlckdyaWRMYXllciIsImdldFBhZ2UiLCJQb3NpdGlvbiIsIlNoaXAiLCJQcmFjdGljYWwiLCJHYW1lYm9hcmQiLCJwb3NpdGlvbiIsInNoaXAiLCJwcmFjdGljYWwiLCJjdXJyZW50U2hpcHMiLCJyYW5kb21pemUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21BeGlzIiwiYXhpZXMiLCJsZW5ndGgiLCJwbGFjZUFsbFNoaXBzIiwic2hpcHNBcnJheSIsImNvbXBhcmVTaGlwc0FycmF5IiwibGF0ZXN0U2hpcHNBcnJheSIsInNoaXBzIiwic2hpcHNEb0NvbGxpZGUiLCJmb3JFYWNoIiwibGF0ZXN0U2hpcHMiLCJib2F0IiwibGF0ZXN0Qm9hdCIsImNvbXBhcmVQb3NpdGlvbiIsImdldFR5cGVPZlBsYWNlZFNoaXAiLCJzaGlwQXJyYXkiLCJzaGlwVHlwZXMiLCJzaGlwVHlwZSIsInNoaXBMZW5ndGgiLCJzaGlwVHBlIiwicGxheWVyUGxhY2VTaGlwIiwibG9jYXRpb24iLCJheGlzIiwiY3VycmVudEFycmF5IiwiY29weUFycmF5IiwiY3VycmVudFNoaXAiLCJjcmVhdGVTaGlwIiwiaXNDb2xsaWRlZCIsInB1c2giLCJwbGFjZVJhbmRvbVNoaXBzIiwicmFuZG9taXplciIsInJhbmRvbUF4aWVzIiwicmFuZG9tUG9zaXRpb24iLCJjcmVhdGVQb3NpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJsYXRlc3RMZW5ndGgiLCJyYW5kb21TaGlwIiwic2hpcENvbGxpZGVzIiwicGxhY2VTaGlwc1JhbmRvbWx5IiwiZmlsdGVyQXR0YWNrIiwiYXJyYXkiLCJjdXJyZW50QXR0YWNrIiwiY3VycmVudEF0dGFja0FycmF5IiwiZmlsdGVyIiwiaXRlbSIsInhDb29yZCIsInlDb29yZCIsImhhc0hpdFNoaXAiLCJoaXRQb3NpdGlvbiIsImxhdGVzdEhpdHMiLCJsYXRlc3RNaXNzZXMiLCJoYXNCZWVuSGl0IiwiaGFzQmVlbk1pc3MiLCJhdHRhY2tTaGlwIiwibGF0ZXN0UG9zaXRpb24iLCJjdXJyZW50SGl0cyIsImN1cnJlbnRNaXNzZXMiLCJpc0hpdCIsInBvc2l0aW9uc0FycmF5IiwiaGl0IiwiaGl0QXJyYXkiLCJzaGlwQXJyYXlzIiwiZmluYWxPYmplY3QiLCJyZWNpZXZlQXR0YWNrIiwicmVzdWx0IiwiY3JlYXRlUmFuZG9tQ29vcmRzIiwiaXNNb2NrUmFuZG9tIiwiY2FsbFJhbmRvbWl6ZXIiLCJyYW5kb21YIiwicmFuZG9tWSIsInJlY2lldmVSYW5kb21BdHRhY2siLCJoYXNIaXQiLCJpc0FsbFN1bmsiLCJoYXNTdW5rZWQiLCJpc1N1bmsiLCJnZXRWYWx1ZXMiLCJHYW1lIiwicGxheWVyQm9hcmQiLCJjb21wdXRlckJvYXJkIiwicGxheWVyQ2hlY2tCb2FyZCIsImNoZWNrU2V0dXAiLCJwbGF5ZXJDaGVja1NoaXBzIiwic2V0dXBHYW1lIiwicGxheWVyQ2hlY2tWYWx1ZXMiLCJhdHRhY2tCb2F0cyIsImNvb3JkcyIsInNldHVwU2hpcCIsImdhbWVJc092ZXIiLCJtZXNzYWdlIiwiZ2FtZUZpbmlzaGVkIiwiYXJyYW5nZUJsb2NrcyIsIm1vdXNlUG9zaXRpb24iLCJjdXJyZW50Um90YXRpb24iLCJjaGVja2JvYXJkT2JqZWN0cyIsInNoaXBUeXBlT2JqZWN0IiwiZ2V0R2FtZVZhbHVlcyIsImFjdGl2ZUdhbWUiLCJjaGVja091dE9mQm91bmNlIiwibmV3UG9zaXRpb24iLCJhZGRQb3NpdGlvbiIsInBvc2l0aW9uMSIsInBvc2l0aW9uMiIsIm11bHRpcGx5UG9zaXRpb24iLCJjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsIiwibmV3QXJyYXkiLCJpc09iamVjdCIsImN1cnJlbnRPYmplY3QiLCJjaGVja09iamVjdCIsIm9iamVjdDEiLCJvYmplY3QyIiwiaW5kZXgiLCJzZWNvbmRJbmRleCIsIm9iamVjdElzRXF1YWwiLCJjdXJyZW50T2JqZWN0MiIsImN1cnJlbnRPYmplY3RWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjdXJyZW50T2JqZWN0MlZhbHVlcyIsIm9iamVjdEtleXMiLCJrZXlzIiwib2JqZWN0S2V5czIiLCJrZXkiLCJpdGVtMiIsImNoZWNrT2JqZWN0Qm9vbCIsImdldEFkZGVkUG9zaXRpb24iLCJhZGRlZFBvc2l0aW9uIiwibGVuZ3RoMSIsInBvcHVsYXRlU2hpcHMiLCJjdXJyZW50UG9zaXRpb24iLCJsYXRlc3RBcnJheSIsImFycmF5TGVuZ3RoIiwicG9zIiwiVWkiLCJkb20iLCJyZW5kZXJTcGVlZCIsImJsb2NrU2l6ZSIsInBsYWNlZFNoaXAiLCJtb3VzZUJsb2NrTG9jYXRpb24iLCJjcmVhdGVEb21FbGVtZW50IiwiZWxlbWVudE5hbWUiLCJjcmVhdGVFbGVtZW50IiwiZ2V0TW91c2VQb3NpdGlvbiIsIm9mZnNldFgiLCJvZmZzZXRZIiwib3V0T2ZCb3VuY2UiLCJmaW5kTW91c2VQb3NpdGlvbiIsImV2ZW50IiwiY3VycmVudE1vdXNlUG9zaXRpb24iLCJmaW5kVG91Y2hQb3NpdGlvbiIsInJlY3QiLCJ0YXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3VjaE9mZnNldFgiLCJ0YXJnZXRUb3VjaGVzIiwiY2xpZW50WCIsIngiLCJ0b3VjaE9mZnNldFkiLCJjbGllbnRZIiwieSIsInRvdWNoUG9zaXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZUJsb2NrU2l6ZSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiY3JlYXRlQmxvY2tFbGVtZW50IiwiYmxvY2tDbGFzcyIsImNyZWF0ZUJsb2NrIiwibGF0ZXN0Q2xhc3MiLCJibG9ja0VsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXNhYmxlU3RhcnRlclVpIiwiY3JlYXRlU2hpcEJsb2NrIiwic2hpcFBvc2l0aW9uIiwibGF0ZXN0QmxvY2tTaXplIiwic2hpcEJsb2NrIiwicmVhbFBvc2l0aW9uWCIsInJlYWxQb3NpdGlvblkiLCJzdHlsZSIsImxlZnQiLCJ0b3AiLCJyZW5kZXJBbHJlYWR5UGxhY2VkU2hpcHMiLCJnYW1lVmFsdWVzIiwiY2hlY2tCb2FyZFNoaXBzIiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJQbGFjZWRTaGlwIiwiZWxlbWVudCIsImlubmVySFRNTCIsImNoYW5nZUF4aXMiLCJtb3ZlU2hpcEJ5RGlyZWN0aW9uIiwibW91c2VMb2NhdGlvbiIsImN1cnJlbnRBeGlzIiwibGF0ZXN0U2hpcCIsIm5ld1hQb3NpdGlvbiIsIm5ld1lQb3NpdGlvbiIsIm5ld1NoaXBQb3NpdGlvbiIsInBsYWNlUGxheWVyU2hpcCIsImxhdGVzdEF4aXMiLCJsYXRlc3RHYW1lIiwicGxhY2VQbGF5ZXJTaGlwRXZlbnQiLCJhZGRVaUV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVVaUV2ZW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGVja01vdXNlVGFyZ2V0IiwiZWxlbWVudENsYXNzIiwiY2hhbmdlTW91c2VQb3NpdGlvbiIsIm1vdXNlVGFyZ2V0IiwiY2xhc3NOYW1lIiwiYXR0YWNrU2hpcHMiLCJhZGRHYW1lRXZlbnRzIiwid2luZG93IiwicmVuZGVyU2hpcHMiLCJncmlkIiwic2hpcEdyb3VwIiwic2hpcEVsZW1lbnQiLCJyZW5kZXJIaXRzIiwicmVtb3ZlQ3Vyc29yRWxlbWVudCIsInJlbmRlckdyaWRzIiwiYmxvY2tTaXplMiIsInBsYXllckJvYXJkVmFsdWVzIiwiY29tcHV0ZXJCb2FyZFZhbHVlcyIsIm1vdXNlU2hpcCIsInJlbmRlclN0YXRzIiwidGV4dENvbnRlbnQiLCJyZW5kZXJHYW1lIiwic2V0VGltZW91dCIsImdhbWVTdGF0dXMiLCJyZW1vdmVTaGlwU2VjdGlvbiIsImVsZW1lbnRzIiwiZGlzcGxheSIsInN0YXJ0R2FtZSIsInJlbmRlclNlbGVjdGlvbkdyaWQiLCJnYW1lVmFsdWUiLCJhY3RpdmF0ZVVpIiwicGFnZUNvbnRlbnQiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==