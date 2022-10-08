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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --darkBlack: rgb(2, 4, 8);\n  --darkGray: rgb(22, 27, 34);\n  --missBlue: rgb(76, 84, 191);\n}\n\n/*credit to https://google-webfonts-helper.herokuapp.com/ for allowing me to import these fonts automatically*/\n/* azeret-mono-regular - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")\n      format('woff2'),\n    /* Super Modern Browsers */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg'); /* Legacy iOS */\n}\n/* azeret-mono-700 - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 700;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ")\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ")\n      format('woff2'),\n    /* Super Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ")\n      format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format('svg'); /* Legacy iOS */\n}\n\n/* roboto-300 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format('woff2'),\n    /* Super Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ")\n      format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */ url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ")\n      format('svg'); /* Legacy iOS */\n}\n/* roboto-regular - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ")\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ") format('woff2'),\n    /* Super Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ")\n      format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ") format('svg'); /* Legacy iOS */\n}\n\nhtml {\n  min-height: 100%;\n}\n\nbody {\n  min-height: 100%;\n}\n\n.content {\n  min-height: 100%;\n  font-family: 'Roboto', sans-serif;\n}\n\n.shipGrid {\n  position: relative;\n}\n\n.block {\n  background: white;\n  width: 42px;\n  height: 42px;\n  border: none;\n  position: absolute;\n}\n\n.hitBlock {\n  background: pink;\n}\n\n.cursorBlock {\n  background: blue;\n}\n\n.missBlock {\n  background: var(--missBlue);\n}\n\n.sectionScreen {\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n\n  position: fixed;\n\n  display: flex;\n\n  justify-content: center;\n  align-items: center;\n}\n\n.shipTitle {\n  font-family: 'Azeret Mono', monospace;\n}\n\n.shipText {\n  margin: 10px;\n}\n\n.shipSelection {\n  padding: 10px;\n  color: white;\n  background: var(--darkBlack);\n  display: flex;\n  width: 440px;\n  flex-direction: column;\n  align-items: center;\n}\n\n.rotateImage {\n  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(87deg)\n    brightness(100%);\n}\n\n.rotateButton:hover {\n  background: var(--darkBlack);\n  cursor: pointer;\n}\n\n.rotateButton {\n  background: var(--darkGray);\n  border: 1px solid white;\n  margin: 10px;\n  height: 50px;\n  width: 50px;\n  line-height: 50px;\n  text-align: center;\n}\n\n.shipGrid {\n  width: 420px;\n  height: 420px;\n  background: var(--darkGray);\n  border: 1px solid;\n  padding: 0;\n  margin: 0;\n}\n\n.boardTitle {\n  margin: 10px;\n}\n\n.overlay {\n  background: rgba(39, 39, 39, 0.574);\n  z-index: 2;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.content {\n  background: rgb(2, 4, 8);\n}\n\n.mainSection {\n  min-height: 90vh;\n  color: white;\n  position: relative;\n}\n\n.mainTitle {\n  text-align: center;\n  height: 10vh;\n  line-height: 10vh;\n  background: var(--darkGray);\n}\n\n.centerSection {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n\n  justify-content: center;\n\n  align-items: center;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px;\n}\n\n.grid {\n  width: 420px;\n  height: 420px;\n  position: relative;\n  background: var(--darkGray);\n  border: 1px solid white;\n}\n.shipOverlay {\n  width: 420px;\n  height: 420px;\n  border: 1px solid blue;\n\n  position: fixed;\n}\n\n.gridLayer {\n  width: 420px;\n  height: 420px;\n  position: relative;\n}\n\n.gridOverlay {\n  width: 420px;\n  height: 420px;\n  border: 1px solid blue;\n}\n\n.shipOverlay {\n  position: fixed;\n  z-index: 3;\n}\n\n.gridOverlay {\n  position: absolute;\n\n  z-index: 1;\n}\n\n.stats {\n  display: flex;\n  width: 420px;\n  justify-content: space-around;\n  margin: 20px;\n}\n\n.footer {\n  background: var(--darkGray);\n  height: 10vh;\n  color: white;\n  word-wrap: break-word;\n  font-size: small;\n  line-height: 10vh;\n  text-align: center;\n}\n\n.mainTitle h1 {\n  font-family: 'Azeret Mono', monospace;\n}\n\n@media only screen and (max-width: 600px) {\n  .footer {\n    font-size: small;\n  }\n}\n\n@media only screen and (max-width: 960px) {\n  .grid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipGrid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipSelection {\n    width: 310px;\n  }\n\n  .footer {\n    font-size: x-small;\n  }\n\n  .block {\n    width: 30px;\n    height: 30px;\n  }\n\n  .stats {\n    width: 300px;\n  }\n}\n\n@media only screen and (max-width: 470px) {\n  .grid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipGrid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipSelection {\n    width: 220px;\n  }\n\n  .shipText {\n    font-size: medium;\n  }\n\n  .boardTitle {\n    font-size: medium;\n  }\n\n  .block {\n    width: 21px;\n    height: 21px;\n  }\n  .footer {\n    font-size: x-small;\n  }\n\n  .stats {\n    width: 210px;\n  }\n}\n\n@media only screen and (max-width: 365px) {\n  .footer {\n    font-size: xx-small;\n  }\n  .footer {\n    font-size: 8px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .grid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .footer {\n    font-size: 6px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipGrid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipSelection {\n    width: 160px;\n  }\n\n  .block {\n    width: 15px;\n    height: 15px;\n  }\n\n  .shipText {\n    font-size: small;\n  }\n\n  .shipTitle {\n    font-size: medium;\n  }\n\n  .stats {\n    width: 150px;\n    font-size: 12px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --darkBlack: rgb(2, 4, 8);\n  --darkGray: rgb(22, 27, 34);\n  --missBlue: rgb(76, 84, 191);\n}\n\n/*credit to https://google-webfonts-helper.herokuapp.com/ for allowing me to import these fonts automatically*/\n/* azeret-mono-regular - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url('../fonts/azeret-mono-v11-latin-regular.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/azeret-mono-v11-latin-regular.eot?#iefix')\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/azeret-mono-v11-latin-regular.woff2')\n      format('woff2'),\n    /* Super Modern Browsers */\n      url('../fonts/azeret-mono-v11-latin-regular.woff') format('woff'),\n    /* Modern Browsers */ url('../fonts/azeret-mono-v11-latin-regular.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url('../fonts/azeret-mono-v11-latin-regular.svg#AzeretMono') format('svg'); /* Legacy iOS */\n}\n/* azeret-mono-700 - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 700;\n  src: url('../fonts/azeret-mono-v11-latin-700.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/azeret-mono-v11-latin-700.eot?#iefix')\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/azeret-mono-v11-latin-700.woff2')\n      format('woff2'),\n    /* Super Modern Browsers */ url('../fonts/azeret-mono-v11-latin-700.woff')\n      format('woff'),\n    /* Modern Browsers */ url('../fonts/azeret-mono-v11-latin-700.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url('../fonts/azeret-mono-v11-latin-700.svg#AzeretMono') format('svg'); /* Legacy iOS */\n}\n\n/* roboto-300 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url('../fonts/roboto-v30-latin-300.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/roboto-v30-latin-300.eot?#iefix') format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/roboto-v30-latin-300.woff2') format('woff2'),\n    /* Super Modern Browsers */ url('../fonts/roboto-v30-latin-300.woff')\n      format('woff'),\n    /* Modern Browsers */ url('../fonts/roboto-v30-latin-300.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */ url('../fonts/roboto-v30-latin-300.svg#Roboto')\n      format('svg'); /* Legacy iOS */\n}\n/* roboto-regular - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url('../fonts/roboto-v30-latin-regular.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/roboto-v30-latin-regular.eot?#iefix')\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/roboto-v30-latin-regular.woff2') format('woff2'),\n    /* Super Modern Browsers */ url('../fonts/roboto-v30-latin-regular.woff')\n      format('woff'),\n    /* Modern Browsers */ url('../fonts/roboto-v30-latin-regular.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url('../fonts/roboto-v30-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */\n}\n\nhtml {\n  min-height: 100%;\n}\n\nbody {\n  min-height: 100%;\n}\n\n.content {\n  min-height: 100%;\n  font-family: 'Roboto', sans-serif;\n}\n\n.shipGrid {\n  position: relative;\n}\n\n.block {\n  background: white;\n  width: 42px;\n  height: 42px;\n  border: none;\n  position: absolute;\n}\n\n.hitBlock {\n  background: pink;\n}\n\n.cursorBlock {\n  background: blue;\n}\n\n.missBlock {\n  background: var(--missBlue);\n}\n\n.sectionScreen {\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n\n  position: fixed;\n\n  display: flex;\n\n  justify-content: center;\n  align-items: center;\n}\n\n.shipTitle {\n  font-family: 'Azeret Mono', monospace;\n}\n\n.shipText {\n  margin: 10px;\n}\n\n.shipSelection {\n  padding: 10px;\n  color: white;\n  background: var(--darkBlack);\n  display: flex;\n  width: 440px;\n  flex-direction: column;\n  align-items: center;\n}\n\n.rotateImage {\n  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(87deg)\n    brightness(100%);\n}\n\n.rotateButton:hover {\n  background: var(--darkBlack);\n  cursor: pointer;\n}\n\n.rotateButton {\n  background: var(--darkGray);\n  border: 1px solid white;\n  margin: 10px;\n  height: 50px;\n  width: 50px;\n  line-height: 50px;\n  text-align: center;\n}\n\n.shipGrid {\n  width: 420px;\n  height: 420px;\n  background: var(--darkGray);\n  border: 1px solid;\n  padding: 0;\n  margin: 0;\n}\n\n.boardTitle {\n  margin: 10px;\n}\n\n.overlay {\n  background: rgba(39, 39, 39, 0.574);\n  z-index: 2;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.content {\n  background: rgb(2, 4, 8);\n}\n\n.mainSection {\n  min-height: 90vh;\n  color: white;\n  position: relative;\n}\n\n.mainTitle {\n  text-align: center;\n  height: 10vh;\n  line-height: 10vh;\n  background: var(--darkGray);\n}\n\n.centerSection {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n\n  justify-content: center;\n\n  align-items: center;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px;\n}\n\n.grid {\n  width: 420px;\n  height: 420px;\n  position: relative;\n  background: var(--darkGray);\n  border: 1px solid white;\n}\n.shipOverlay {\n  width: 420px;\n  height: 420px;\n  border: 1px solid blue;\n\n  position: fixed;\n}\n\n.gridLayer {\n  width: 420px;\n  height: 420px;\n  position: relative;\n}\n\n.gridOverlay {\n  width: 420px;\n  height: 420px;\n  border: 1px solid blue;\n}\n\n.shipOverlay {\n  position: fixed;\n  z-index: 3;\n}\n\n.gridOverlay {\n  position: absolute;\n\n  z-index: 1;\n}\n\n.stats {\n  display: flex;\n  width: 420px;\n  justify-content: space-around;\n  margin: 20px;\n}\n\n.footer {\n  background: var(--darkGray);\n  height: 10vh;\n  color: white;\n  word-wrap: break-word;\n  font-size: small;\n  line-height: 10vh;\n  text-align: center;\n}\n\n.mainTitle h1 {\n  font-family: 'Azeret Mono', monospace;\n}\n\n@media only screen and (max-width: 600px) {\n  .footer {\n    font-size: small;\n  }\n}\n\n@media only screen and (max-width: 960px) {\n  .grid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipGrid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipSelection {\n    width: 310px;\n  }\n\n  .footer {\n    font-size: x-small;\n  }\n\n  .block {\n    width: 30px;\n    height: 30px;\n  }\n\n  .stats {\n    width: 300px;\n  }\n}\n\n@media only screen and (max-width: 470px) {\n  .grid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipGrid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipSelection {\n    width: 220px;\n  }\n\n  .shipText {\n    font-size: medium;\n  }\n\n  .boardTitle {\n    font-size: medium;\n  }\n\n  .block {\n    width: 21px;\n    height: 21px;\n  }\n  .footer {\n    font-size: x-small;\n  }\n\n  .stats {\n    width: 210px;\n  }\n}\n\n@media only screen and (max-width: 365px) {\n  .footer {\n    font-size: xx-small;\n  }\n  .footer {\n    font-size: 8px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .grid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .footer {\n    font-size: 6px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipGrid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipSelection {\n    width: 160px;\n  }\n\n  .block {\n    width: 15px;\n    height: 15px;\n  }\n\n  .shipText {\n    font-size: small;\n  }\n\n  .shipTitle {\n    font-size: medium;\n  }\n\n  .stats {\n    width: 150px;\n    font-size: 12px;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEseUJBQXlCLGVBQWUsaUJBQWlCLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLHlCQUF5QixlQUFlLGlCQUFpQixPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSx5QkFBeUIsYUFBYSxpQkFBaUIsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEseUJBQXlCLGNBQWMsaUJBQWlCLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVB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OztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3Bvc2l0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wcmFjdGljYWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3VpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZXMvc3R5bGVzLmNzcyc7XG5cbmltcG9ydCBVaSBmcm9tICcuL3NjcmlwdHMvdWkuanMnO1xuXG5jb25zdCBjdXJyZW50VWkgPSBVaSgpO1xuXG5jdXJyZW50VWkuYWN0aXZhdGVVaSgpO1xuIiwiaW1wb3J0IHJlZnJlc2hpbmdMb2dvIGZyb20gJy4uL2ltYWdlcy9yZWZyZXNoTG9nby5zdmcnO1xuXG5jb25zdCBEb20gPSAoKSA9PiB7XG4gIGNvbnN0IGdldEVsZW1lbnRzID0gKCkgPT4gKHtcbiAgICBvdmVybGF5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpLFxuICAgIHNlY3Rpb25TY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uU2NyZWVuJyksXG4gICAgc2hpcFRleHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwVGV4dCcpLFxuICAgIHNoaXBHcmlkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcEdyaWQnKSxcbiAgICBzaGlwTGF5ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwTGF5ZXInKSxcbiAgICByb3RhdGVCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGVCdXR0b24nKSxcbiAgICBncmlkczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZCcpKSxcbiAgICBoaXRzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaXRzJykpLFxuICAgIG1pc3NlczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWlzc2VzJykpLFxuICAgIHBsYXllckdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJHcmlkJyksXG4gICAgcGxheWVySGl0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckhpdHMnKSxcbiAgICBwbGF5ZXJNaXNzZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJNaXNzZXMnKSxcbiAgICBjb21wdXRlckdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlckdyaWQnKSxcbiAgICBjb21wdXRlckhpdHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlckhpdHMnKSxcbiAgICBjb21wdXRlck1pc3NlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyTWlzc2VzJyksXG4gICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKSxcbiAgICBjb21wdXRlckdyaWRMYXllcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyR3JpZExheWVyJyksXG4gIH0pO1xuXG4gIGNvbnN0IGdldFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uU2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcFNlbGVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJzaGlwVGl0bGVcIj5CQVRUTEVTSElQPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwic2hpcFRleHRcIj5QbGFjZSB5b3VyIEJhdHRsZXNoaXA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcExheWVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBPdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBHcmlkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdGF0ZUJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm90YXRlSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJHtyZWZyZXNoaW5nTG9nb31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUm90YXRlIEltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1haW4gY2xhc3M9XCJtYWluU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5UaXRsZVwiPjxoMT5CQVRUTEVTSElQPC9oMT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJTZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXJCb2FyZCBib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImJvYXJkVGl0bGVcIj5QbGF5ZXIgQm9hcmQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkTGF5ZXIgcGxheWVyR3JpZExheWVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZE92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXJHcmlkIGdyaWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyU3RhdHMgc3RhdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInBsYXllckhpdHMgaGl0c1wiPkhpdHMgMDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwbGF5ZXJNaXNzZXMgbWlzc2VzXCI+TWlzc2VzIDA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcHV0ZXJCb2FyZCBib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImJvYXJkVGl0bGVcIj5Db21wdXRlciBCb2FyZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRMYXllciBjb21wdXRlckdyaWRMYXllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRPdmVybGF5IGNvbXB1dGVyR3JpZE92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wdXRlckdyaWQgZ3JpZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wdXRlclN0YXRzIHN0YXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjb21wdXRlckhpdHMgaGl0c1wiPkhpdHMgMDwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvbXB1dGVyTWlzc2VzIG1pc3Nlc1wiPk1pc3NlcyAwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY29weXJpZ2h0TWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJzaXRlIGFuZCBjb2RlIGFyZSBtYWRlIGJ5IEJyYXlkZW4gR3JvdGVndXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0UGFnZSwgZ2V0RWxlbWVudHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvbTtcbiIsImltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5pbXBvcnQgUHJhY3RpY2FsIGZyb20gJy4vcHJhY3RpY2FsLmpzJztcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG4gIGNvbnN0IHNoaXAgPSBTaGlwKCk7XG4gIGNvbnN0IHByYWN0aWNhbCA9IFByYWN0aWNhbCgpO1xuXG4gIGxldCBjdXJyZW50U2hpcHMgPSBbXTtcbiAgbGV0IGhpdHMgPSBbXTtcbiAgbGV0IG1pc3NlcyA9IFtdO1xuXG4gIGNvbnN0IHJhbmRvbWl6ZSA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICBjb25zdCByYW5kb21BeGlzID0gKCkgPT4ge1xuICAgIGNvbnN0IGF4aWVzID0gWyd4JywgJ3knXTtcbiAgICByZXR1cm4gYXhpZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXhpZXMubGVuZ3RoKV07XG4gIH07XG5cbiAgY29uc3QgcGxhY2VBbGxTaGlwcyA9IChzaGlwc0FycmF5KSA9PiB7XG4gICAgY3VycmVudFNoaXBzID0gc2hpcHNBcnJheTtcbiAgICByZXR1cm4gY3VycmVudFNoaXBzO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmVTaGlwc0FycmF5ID0gKGxhdGVzdFNoaXBzQXJyYXksIHNoaXBzKSA9PiB7XG4gICAgbGV0IHNoaXBzRG9Db2xsaWRlID0gZmFsc2U7XG4gICAgaWYgKCFzaGlwcykgcmV0dXJuIHNoaXBzRG9Db2xsaWRlO1xuXG4gICAgLy8gY29uc29sZS5sb2cobGF0ZXN0U2hpcHNBcnJheSwgJ3RoZSBjdXJyZWVudCBzaGlwcyBhcnJheScpO1xuICAgIC8vIGNvbnNvbGUubG9nKHNoaXBzLCAndGhlIGN1cnJlbnQgc2hpcHMnKTtcblxuICAgIGxhdGVzdFNoaXBzQXJyYXkuZm9yRWFjaCgobGF0ZXN0U2hpcHMpID0+IHtcbiAgICAgIGxhdGVzdFNoaXBzLmZvckVhY2goKGJvYXQpID0+IHtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgobGF0ZXN0Qm9hdCkgPT4ge1xuICAgICAgICAgIGlmIChwb3NpdGlvbi5jb21wYXJlUG9zaXRpb24oYm9hdCwgbGF0ZXN0Qm9hdCkpIHtcbiAgICAgICAgICAgIHNoaXBzRG9Db2xsaWRlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2hpcHNEb0NvbGxpZGU7XG4gIH07XG5cbiAgY29uc3QgcGxheWVyUGxhY2VTaGlwID0gKGxvY2F0aW9uLCBheGlzKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEFycmF5ID0gcHJhY3RpY2FsLmNvcHlBcnJheShjdXJyZW50U2hpcHMpO1xuXG4gICAgbGV0IHNoaXBsZW5ndGggPSA1IC0gY3VycmVudEFycmF5Lmxlbmd0aDtcblxuICAgIGlmIChzaGlwbGVuZ3RoID09PSAyKSBzaGlwbGVuZ3RoID0gMztcbiAgICBpZiAoc2hpcGxlbmd0aCA9PT0gMSkgc2hpcGxlbmd0aCA9IDI7XG5cbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXAuY3JlYXRlU2hpcChsb2NhdGlvbiwgc2hpcGxlbmd0aCwgYXhpcyk7XG5cbiAgICBjb25zdCBpc0NvbGxpZGVkID0gY29tcGFyZVNoaXBzQXJyYXkoY3VycmVudEFycmF5LCBjdXJyZW50U2hpcCk7XG5cbiAgICBpZiAoY3VycmVudEFycmF5Lmxlbmd0aCA9PT0gNSB8fCAhY3VycmVudFNoaXAgfHwgaXNDb2xsaWRlZCkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRBcnJheTtcbiAgICB9XG5cbiAgICBjdXJyZW50QXJyYXkucHVzaChjdXJyZW50U2hpcCk7XG4gICAgY3VycmVudFNoaXBzID0gY3VycmVudEFycmF5O1xuICAgIHJldHVybiBjdXJyZW50QXJyYXk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VSYW5kb21TaGlwcyA9IChsZW5ndGgsIHNoaXBzQXJyYXksIHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKSA9PiB7XG4gICAgY29uc3QgbGF0ZXN0U2hpcHNBcnJheSA9IHNoaXBzQXJyYXk7XG4gICAgbGV0IGxhdGVzdExlbmd0aCA9IGxlbmd0aDtcbiAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHJhbmRvbWl6ZXIoKSwgcmFuZG9taXplcigpKTtcbiAgICBjb25zdCByYW5kb21TaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgcmFuZG9tUG9zaXRpb24sXG4gICAgICBsYXRlc3RMZW5ndGgsXG4gICAgICByYW5kb21BeGllcygpXG4gICAgKTtcblxuICAgIGlmIChyYW5kb21TaGlwKSB7XG4gICAgICBjb25zdCBzaGlwQ29sbGlkZXMgPSBjb21wYXJlU2hpcHNBcnJheShsYXRlc3RTaGlwc0FycmF5LCByYW5kb21TaGlwKTtcbiAgICAgIGlmICghc2hpcENvbGxpZGVzKSB7XG4gICAgICAgIGlmIChsYXRlc3RMZW5ndGggPiAyKSBsYXRlc3RMZW5ndGggLT0gMTtcbiAgICAgICAgaWYgKHNoaXBzQXJyYXkubGVuZ3RoIDwgNSkgbGF0ZXN0U2hpcHNBcnJheS5wdXNoKHJhbmRvbVNoaXApO1xuXG4gICAgICAgIGlmIChzaGlwc0FycmF5Lmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgIHJldHVybiBsYXRlc3RTaGlwc0FycmF5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWNlUmFuZG9tU2hpcHMoXG4gICAgICBsYXRlc3RMZW5ndGgsXG4gICAgICBsYXRlc3RTaGlwc0FycmF5LFxuICAgICAgcmFuZG9taXplcixcbiAgICAgIHJhbmRvbUF4aWVzXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXBzUmFuZG9tbHkgPSAocmFuZG9taXplciwgcmFuZG9tQXhpZXMpID0+IHtcbiAgICBjb25zdCBzaGlwc0FycmF5ID0gcGxhY2VSYW5kb21TaGlwcyg1LCBbXSwgcmFuZG9taXplciwgcmFuZG9tQXhpZXMpO1xuICAgIGN1cnJlbnRTaGlwcyA9IHNoaXBzQXJyYXk7XG5cbiAgICByZXR1cm4gc2hpcHNBcnJheTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tTaGlwID0gKGxhdGVzdFBvc2l0aW9uLCBzaGlwcywgY3VycmVudEhpdHMsIGN1cnJlbnRNaXNzZXMpID0+IHtcbiAgICBsZXQgaXNIaXQgPSBmYWxzZTtcbiAgICBjb25zdCBsYXRlc3RTaGlwc0FycmF5ID0gW107XG4gICAgY29uc3QgbGF0ZXN0SGl0cyA9IGN1cnJlbnRIaXRzO1xuICAgIGNvbnN0IGxhdGVzdE1pc3NlcyA9IGN1cnJlbnRNaXNzZXM7XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwQXJyYXkpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbnNBcnJheSA9IHByYWN0aWNhbC5jb3B5QXJyYXkoc2hpcEFycmF5KTtcbiAgICAgIGNvbnN0IGhpdCA9IHNoaXAuaGl0KHBvc2l0aW9uc0FycmF5LCBsYXRlc3RQb3NpdGlvbik7XG5cbiAgICAgIGlmIChoaXQuaGl0QXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgcG9zaXRpb25zQXJyYXkgPSBoaXQuc2hpcEFycmF5cztcbiAgICAgICAgbGF0ZXN0SGl0cy5wdXNoKGhpdC5oaXRBcnJheVswXSk7XG4gICAgICB9XG4gICAgICBsYXRlc3RTaGlwc0FycmF5LnB1c2gocG9zaXRpb25zQXJyYXkpO1xuICAgIH0pO1xuICAgIGlmICghaXNIaXQpIGxhdGVzdE1pc3Nlcy5wdXNoKGxhdGVzdFBvc2l0aW9uKTtcblxuICAgIGNvbnN0IGZpbmFsT2JqZWN0ID0ge1xuICAgICAgaXNIaXQsXG4gICAgICBsYXRlc3RTaGlwc0FycmF5LFxuICAgICAgbGF0ZXN0SGl0cyxcbiAgICAgIGxhdGVzdE1pc3NlcyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZpbmFsT2JqZWN0O1xuICB9O1xuXG4gIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAobGF0ZXN0UG9zaXRpb24pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhdHRhY2tTaGlwKGxhdGVzdFBvc2l0aW9uLCBjdXJyZW50U2hpcHMsIGhpdHMsIG1pc3Nlcyk7XG5cbiAgICBjdXJyZW50U2hpcHMgPSByZXN1bHQubGF0ZXN0U2hpcHNBcnJheTtcbiAgICBoaXRzID0gcmVzdWx0LmxhdGVzdEhpdHM7XG4gICAgbWlzc2VzID0gcmVzdWx0LmxhdGVzdE1pc3NlcztcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUmFuZG9tQ29vcmRzID0gKHJhbmRvbWl6ZXIpID0+IHtcbiAgICBsZXQgcmFuZG9tUG9zaXRpb247XG5cbiAgICBpZiAocmFuZG9taXplci5pc01vY2tSYW5kb20pIHtcbiAgICAgIHJhbmRvbVBvc2l0aW9uID0gcmFuZG9taXplci5jYWxsUmFuZG9taXplcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByYW5kb21YID0gcmFuZG9taXplcigpO1xuICAgICAgY29uc3QgcmFuZG9tWSA9IHJhbmRvbWl6ZXIoKTtcbiAgICAgIHJhbmRvbVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24ocmFuZG9tWCwgcmFuZG9tWSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmRvbVBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlckF0dGFjayA9IChhcnJheSwgY3VycmVudEF0dGFjaykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRBdHRhY2tBcnJheSA9IGFycmF5LmZpbHRlcihcbiAgICAgIChpdGVtKSA9PlxuICAgICAgICBpdGVtLnhDb29yZCA9PT0gY3VycmVudEF0dGFjay54Q29vcmQgJiZcbiAgICAgICAgaXRlbS55Q29vcmQgPT09IGN1cnJlbnRBdHRhY2sueUNvb3JkXG4gICAgKTtcblxuICAgIHJldHVybiBjdXJyZW50QXR0YWNrQXJyYXk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VHlwZU9mUGxhY2VkU2hpcCA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFNoaXBzLmxlbmd0aCA9PT0gNSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3Qgc2hpcFR5cGVzID0gW1xuICAgICAgeyBzaGlwVHlwZTogJ2NhcnJpZXInLCBzaGlwTGVuZ3RoOiA1IH0sXG4gICAgICB7IHNoaXBUeXBlOiAnYmF0dGxlc2hpcCcsIHNoaXBMZW5ndGg6IDQgfSxcbiAgICAgIHsgc2hpcFR5cGU6ICdkZXN0b3llcicsIHNoaXBMZW5ndGg6IDMgfSxcbiAgICAgIHsgc2hpcFR5cGU6ICdzdWJtYXJpbmUnLCBzaGlwTGVuZ3RoOiAzIH0sXG4gICAgICB7IHNoaXBUeXBlOiAnZ3VuYm9hdCcsIHNoaXBMZW5ndGg6IDIgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIHNoaXBUeXBlc1tjdXJyZW50U2hpcHMubGVuZ3RoXTtcbiAgfTtcblxuICBjb25zdCByZWNpZXZlUmFuZG9tQXR0YWNrID0gKHJhbmRvbWl6ZXIpID0+IHtcbiAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IGNyZWF0ZVJhbmRvbUNvb3JkcyhyYW5kb21pemVyKTtcblxuICAgIGNvbnN0IGhhc0JlZW5IaXQgPSBmaWx0ZXJBdHRhY2soaGl0cywgcmFuZG9tUG9zaXRpb24pO1xuICAgIGNvbnN0IGhhc0JlZW5NaXNzID0gZmlsdGVyQXR0YWNrKG1pc3NlcywgcmFuZG9tUG9zaXRpb24pO1xuXG4gICAgaWYgKGhhc0JlZW5IaXQubGVuZ3RoID4gMCB8fCBoYXNCZWVuTWlzcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gcmVjaWV2ZVJhbmRvbUF0dGFjayhyYW5kb21pemVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlY2lldmVBdHRhY2socmFuZG9tUG9zaXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IGlzQWxsU3VuayA9ICgpID0+IHtcbiAgICBsZXQgaGFzU3Vua2VkID0gdHJ1ZTtcbiAgICBjdXJyZW50U2hpcHMuZm9yRWFjaCgoc2hpcHMpID0+IHtcbiAgICAgIGlmICghc2hpcC5pc1N1bmsoc2hpcHMpKSB7XG4gICAgICAgIGhhc1N1bmtlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhhc1N1bmtlZDtcbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZXMgPSAoKSA9PiAoe1xuICAgIGN1cnJlbnRTaGlwcyxcbiAgICBoaXRzLFxuICAgIG1pc3NlcyxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhdHRhY2tTaGlwLFxuICAgIHJlY2lldmVBdHRhY2ssXG4gICAgaXNBbGxTdW5rLFxuICAgIHBsYWNlU2hpcHNSYW5kb21seSxcbiAgICBwbGF5ZXJQbGFjZVNoaXAsXG4gICAgcGxhY2VBbGxTaGlwcyxcbiAgICByYW5kb21pemUsXG4gICAgcmVjaWV2ZVJhbmRvbUF0dGFjayxcbiAgICByYW5kb21BeGlzLFxuICAgIGdldFZhbHVlcyxcbiAgICBnZXRUeXBlT2ZQbGFjZWRTaGlwLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuXG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5cbmNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgcGxheWVyQ2hlY2tCb2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcblxuICBjb25zdCBzaGlwID0gU2hpcCgpO1xuXG4gIGNvbnN0IHJhbmRvbWl6ZXIgPSBjb21wdXRlckJvYXJkLnJhbmRvbWl6ZTtcbiAgY29uc3QgcmFuZG9tQXhpZXMgPSBjb21wdXRlckJvYXJkLnJhbmRvbUF4aXM7XG5cbiAgY29uc3QgY2hlY2tTZXR1cCA9IChwbGF5ZXJDaGVja1NoaXBzKSA9PiB7XG4gICAgaWYgKHBsYXllckNoZWNrU2hpcHMubGVuZ3RoID09PSA1KSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBHYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllckNoZWNrVmFsdWVzID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIGlmICghY2hlY2tTZXR1cChwbGF5ZXJDaGVja1ZhbHVlcy5jdXJyZW50U2hpcHMpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBwbGF5ZXJCb2FyZC5wbGFjZUFsbFNoaXBzKHBsYXllckNoZWNrVmFsdWVzLmN1cnJlbnRTaGlwcyk7XG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXBzUmFuZG9tbHkocmFuZG9taXplciwgcmFuZG9tQXhpZXMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja0JvYXRzID0gKGNvb3JkcykgPT4ge1xuICAgIGNvbnN0IHBsYXllckNoZWNrVmFsdWVzID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIGlmICghY2hlY2tTZXR1cChwbGF5ZXJDaGVja1ZhbHVlcy5jdXJyZW50U2hpcHMpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb21wdXRlckJvYXJkLnJlY2lldmVBdHRhY2soY29vcmRzKTtcbiAgICBwbGF5ZXJCb2FyZC5yZWNpZXZlUmFuZG9tQXR0YWNrKHJhbmRvbWl6ZXIpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBTaGlwID0gKGxvY2F0aW9uLCBheGlzKSA9PlxuICAgIHBsYXllckNoZWNrQm9hcmQucGxheWVyUGxhY2VTaGlwKGxvY2F0aW9uLCBheGlzKTtcblxuICBjb25zdCBnYW1lSXNPdmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllckNoZWNrU2hpcHMgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpLmN1cnJlbnRTaGlwcztcbiAgICBpZiAoIWNoZWNrU2V0dXAocGxheWVyQ2hlY2tTaGlwcykpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChjb21wdXRlckJvYXJkLmlzQWxsU3VuaygpKSB7XG4gICAgICByZXR1cm4geyBtZXNzYWdlOiAnWW91IFdvbicsIGdhbWVGaW5pc2hlZDogdHJ1ZSB9O1xuICAgIH1cblxuICAgIGlmIChwbGF5ZXJCb2FyZC5pc0FsbFN1bmsoKSkge1xuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ1lvdSBMb3N0JywgZ2FtZUZpbmlzaGVkOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiB7IGdhbWVGaW5pc2hlZDogZmFsc2UgfTtcbiAgfTtcblxuICBjb25zdCBhcnJhbmdlQmxvY2tzID0gKG1vdXNlUG9zaXRpb24sIGN1cnJlbnRSb3RhdGlvbikgPT4ge1xuICAgIGNvbnN0IHNoaXBUeXBlT2JqZWN0ID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRUeXBlT2ZQbGFjZWRTaGlwKCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwVHlwZU9iamVjdCwgJ3RoZSBzaGlwIHR5cGUgb2JqZWN0Jyk7XG4gICAgLy8gY29uc29sZS5sb2cobW91c2VQb3NpdGlvbiwgJ3RoZSBtb3VzZSBwb3NpdGlvbicpO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRSb3RhdGlvbiwgJ3RoZSBjdXJyZW50IHJvdGF0aW9uJyk7XG5cbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXAuY3JlYXRlU2hpcChcbiAgICAgIG1vdXNlUG9zaXRpb24sXG4gICAgICBzaGlwVHlwZU9iamVjdC5zaGlwTGVuZ3RoLFxuICAgICAgY3VycmVudFJvdGF0aW9uXG4gICAgKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50U2hpcCwgJ3RoZSBtb3N0IHVwIHRvIGRhdGUgc2hpcHMnKTtcblxuICAgIHJldHVybiBjdXJyZW50U2hpcDtcbiAgfTtcblxuICBjb25zdCBnZXRHYW1lVmFsdWVzID0gKCkgPT4gKHtcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBjb21wdXRlckJvYXJkLFxuICAgIHBsYXllckNoZWNrQm9hcmQsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgY2hlY2tTZXR1cCxcbiAgICBhdHRhY2tCb2F0cyxcbiAgICBzZXR1cEdhbWUsXG4gICAgZ2FtZUlzT3ZlcixcbiAgICBzZXR1cFNoaXAsXG4gICAgZ2V0R2FtZVZhbHVlcyxcbiAgICBhcnJhbmdlQmxvY2tzLFxuICB9O1xufTtcblxuY29uc3QgYWN0aXZlR2FtZSA9IEdhbWUoKTtcblxuZXhwb3J0IHsgR2FtZSwgYWN0aXZlR2FtZSB9O1xuIiwiY29uc3QgUG9zaXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVBvc2l0aW9uID0gKHhDb29yZCwgeUNvb3JkKSA9PiAoeyB4Q29vcmQsIHlDb29yZCB9KTtcblxuICBjb25zdCBjaGVja091dE9mQm91bmNlID0gKG5ld1Bvc2l0aW9uKSA9PiB7XG4gICAgaWYgKG5ld1Bvc2l0aW9uLnhDb29yZCA+IDkgfHwgbmV3UG9zaXRpb24ueUNvb3JkID4gOSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKG5ld1Bvc2l0aW9uLnhDb29yZCA8IDAgfHwgbmV3UG9zaXRpb24ueUNvb3JkIDwgMCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGFkZFBvc2l0aW9uID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uMSA9PT0gZmFsc2UgfHwgcG9zaXRpb24yID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBjcmVhdGVQb3NpdGlvbihwb3NpdGlvbjEueENvb3JkLCBwb3NpdGlvbjEueUNvb3JkKTtcbiAgICBuZXdQb3NpdGlvbi54Q29vcmQgKz0gcG9zaXRpb24yLnhDb29yZDtcbiAgICBuZXdQb3NpdGlvbi55Q29vcmQgKz0gcG9zaXRpb24yLnlDb29yZDtcblxuICAgIGlmIChjaGVja091dE9mQm91bmNlKG5ld1Bvc2l0aW9uKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IG11bHRpcGx5UG9zaXRpb24gPSAocG9zaXRpb24xLCBwb3NpdGlvbjIpID0+IHtcbiAgICBpZiAocG9zaXRpb24xID09PSBmYWxzZSB8fCBwb3NpdGlvbjIgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGNyZWF0ZVBvc2l0aW9uKHBvc2l0aW9uMS54Q29vcmQsIHBvc2l0aW9uMS55Q29vcmQpO1xuICAgIG5ld1Bvc2l0aW9uLnhDb29yZCAqPSBwb3NpdGlvbjIueENvb3JkO1xuICAgIG5ld1Bvc2l0aW9uLnlDb29yZCAqPSBwb3NpdGlvbjIueUNvb3JkO1xuXG4gICAgaWYgKGNoZWNrT3V0T2ZCb3VuY2UobmV3UG9zaXRpb24pKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gbmV3UG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbCA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgYXhpcykgPT4ge1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSArIDEpIHJldHVybiB0cnVlO1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHBvc2l0aW9uMVtheGlzXSA9PT0gcG9zaXRpb24yW2F4aXNdIC0gMSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmVQb3NpdGlvbiA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMikgPT4ge1xuICAgIGlmICghY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgJ3hDb29yZCcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgJ3lDb29yZCcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlUG9zaXRpb24sXG4gICAgYWRkUG9zaXRpb24sXG4gICAgbXVsdGlwbHlQb3NpdGlvbixcbiAgICBjb21wYXJlUG9zaXRpb24sXG4gICAgY2hlY2tPdXRPZkJvdW5jZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc2l0aW9uO1xuIiwiY29uc3QgUHJhY3RpY2FsID0gKCkgPT4ge1xuICBjb25zdCBjb3B5QXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgICBjb25zdCBuZXdBcnJheSA9IFtdO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgbmV3QXJyYXkucHVzaChpdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdBcnJheTtcbiAgfTtcblxuICBjb25zdCBpc09iamVjdCA9IChjdXJyZW50T2JqZWN0KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50T2JqZWN0ID09PSAnb2JqZWN0JyAmJiBjdXJyZW50T2JqZWN0ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrT2JqZWN0ID0gKG9iamVjdDEsIG9iamVjdDIpID0+IHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBzZWNvbmRJbmRleCA9IDA7XG5cbiAgICBsZXQgb2JqZWN0SXNFcXVhbCA9IHRydWU7XG5cbiAgICBjb25zdCBjdXJyZW50T2JqZWN0ID0gb2JqZWN0MTtcbiAgICBjb25zdCBjdXJyZW50T2JqZWN0MiA9IG9iamVjdDI7XG5cbiAgICBjb25zdCBjdXJyZW50T2JqZWN0VmFsdWVzID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50T2JqZWN0KTtcbiAgICBjb25zdCBjdXJyZW50T2JqZWN0MlZhbHVlcyA9IE9iamVjdC52YWx1ZXMoY3VycmVudE9iamVjdDIpO1xuXG4gICAgY29uc3Qgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKGN1cnJlbnRPYmplY3QpO1xuICAgIGNvbnN0IG9iamVjdEtleXMyID0gT2JqZWN0LmtleXMoY3VycmVudE9iamVjdDIpO1xuXG4gICAgb2JqZWN0S2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChrZXkgIT09IG9iamVjdEtleXMyW2luZGV4XSkgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgaW5kZXggKz0gMTtcbiAgICB9KTtcblxuICAgIGlmICghb2JqZWN0SXNFcXVhbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChvYmplY3RLZXlzLmxlbmd0aCAhPT0gb2JqZWN0S2V5czIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50T2JqZWN0LCAndGhlIGN1cnJlbnQgb2JqZWN0Jyk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudE9iamVjdDIsICd0aGUgY3VycmVudCBvYmplY3QyJyk7XG5cbiAgICBjdXJyZW50T2JqZWN0VmFsdWVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0yID0gY3VycmVudE9iamVjdDJWYWx1ZXNbc2Vjb25kSW5kZXhdO1xuXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkgJiYgaXNPYmplY3QoaXRlbTIpKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrT2JqZWN0Qm9vbCA9IGNoZWNrT2JqZWN0KGl0ZW0sIGl0ZW0yKTtcblxuICAgICAgICBpZiAoIWNoZWNrT2JqZWN0Qm9vbCkgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChpdGVtICE9PSBpdGVtMikge1xuICAgICAgICBvYmplY3RJc0VxdWFsID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHNlY29uZEluZGV4ICs9IDE7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqZWN0SXNFcXVhbDtcbiAgfTtcblxuICByZXR1cm4geyBjb3B5QXJyYXksIGNoZWNrT2JqZWN0IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmFjdGljYWw7XG4iLCJpbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5cbmNvbnN0IFNoaXAgPSAoKSA9PiB7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcblxuICBjb25zdCBnZXRBZGRlZFBvc2l0aW9uID0gKGF4aXMpID0+IHtcbiAgICBsZXQgYWRkZWRQb3NpdGlvbjtcblxuICAgIGlmIChheGlzID09PSAneCcpIGFkZGVkUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbigxLCAwKTtcbiAgICBlbHNlIGFkZGVkUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbigwLCAxKTtcblxuICAgIHJldHVybiBhZGRlZFBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVNoaXAgPSAocG9zaXRpb24xLCBsZW5ndGgxLCBheGlzKSA9PiB7XG4gICAgaWYgKGxlbmd0aDEgPT09IDAgfHwgbGVuZ3RoMSA+IDUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocG9zaXRpb24uY2hlY2tPdXRPZkJvdW5jZShwb3NpdGlvbjEpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBwb3B1bGF0ZVNoaXBzID0gKGN1cnJlbnRQb3NpdGlvbiwgbGF0ZXN0TGVuZ3RoLCBsYXRlc3RBcnJheSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudEFycmF5ID0gbGF0ZXN0QXJyYXk7XG4gICAgICBsZXQgbmV3UG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb247XG5cbiAgICAgIGlmIChjdXJyZW50UG9zaXRpb24gPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAobGF0ZXN0TGVuZ3RoID09PSAwKSByZXR1cm4gY3VycmVudEFycmF5O1xuICAgICAgaWYgKGxhdGVzdExlbmd0aCA9PT0gbGVuZ3RoMSkge1xuICAgICAgICBjdXJyZW50QXJyYXkucHVzaChjdXJyZW50UG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhjdXJyZW50UG9zaXRpb24sIGxhdGVzdExlbmd0aCAtIDEsIGN1cnJlbnRBcnJheSk7XG4gICAgICB9XG4gICAgICBjb25zdCBhZGRlZFBvc2l0aW9uID0gZ2V0QWRkZWRQb3NpdGlvbihheGlzKTtcbiAgICAgIG5ld1Bvc2l0aW9uID0gcG9zaXRpb24uYWRkUG9zaXRpb24obmV3UG9zaXRpb24sIGFkZGVkUG9zaXRpb24pO1xuXG4gICAgICBpZiAoIW5ld1Bvc2l0aW9uKSByZXR1cm4gbmV3UG9zaXRpb247XG4gICAgICBjdXJyZW50QXJyYXkucHVzaChuZXdQb3NpdGlvbik7XG5cbiAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gY3VycmVudEFycmF5Lmxlbmd0aCAtIDE7XG5cbiAgICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKFxuICAgICAgICBjdXJyZW50QXJyYXlbYXJyYXlMZW5ndGhdLFxuICAgICAgICBsYXRlc3RMZW5ndGggLSAxLFxuICAgICAgICBjdXJyZW50QXJyYXlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKHBvc2l0aW9uMSwgbGVuZ3RoMSwgW10sIGZhbHNlKTtcbiAgfTtcblxuXG5cbiAgY29uc3QgaXNTdW5rID0gKHNoaXBBcnJheSkgPT4ge1xuICAgIGlmIChzaGlwQXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaGl0ID0gKHBvc2l0aW9uc0FycmF5LCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGhpdEFycmF5ID0gcG9zaXRpb25zQXJyYXkuZmlsdGVyKChwb3MpID0+IHtcbiAgICAgIGlmIChwb3MueENvb3JkID09PSBwb3NpdGlvbi54Q29vcmQgJiYgcG9zLnlDb29yZCA9PT0gcG9zaXRpb24ueUNvb3JkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGNvbnN0IHNoaXBBcnJheXMgPSBwb3NpdGlvbnNBcnJheS5maWx0ZXIoKHBvcykgPT4ge1xuICAgICAgaWYgKHBvcy54Q29vcmQgPT09IHBvc2l0aW9uLnhDb29yZCAmJiBwb3MueUNvb3JkID09PSBwb3NpdGlvbi55Q29vcmQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBoaXRBcnJheSwgc2hpcEFycmF5cyB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlU2hpcCxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCBEb20gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCB7IGFjdGl2ZUdhbWUgfSBmcm9tICcuL21haW4uanMnO1xuXG5jb25zdCBVaSA9ICgpID0+IHtcbiAgY29uc3QgZG9tID0gRG9tKCk7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcblxuICBjb25zdCByZW5kZXJTcGVlZCA9IDE7XG5cbiAgbGV0IGJsb2NrU2l6ZSA9IDQyO1xuXG4gIGxldCBwbGFjZWRTaGlwID0gZmFsc2U7XG4gIGxldCBheGlzID0gJ3knO1xuXG4gIGxldCBtb3VzZUJsb2NrTG9jYXRpb24gPSBmYWxzZTtcblxuICBjb25zdCBjcmVhdGVEb21FbGVtZW50ID0gKGVsZW1lbnROYW1lKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcblxuICBjb25zdCBnZXRNb3VzZVBvc2l0aW9uID0gKG9mZnNldFgsIG9mZnNldFkpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhvZmZzZXRYLCBvZmZzZXRZLCAnb2Zmc2V0IHggYW5kIG9mZnNldCB5Jyk7XG5cbiAgICBjb25zdCB4Q29vcmQgPSBNYXRoLmZsb29yKG9mZnNldFggLyBibG9ja1NpemUpO1xuICAgIGNvbnN0IHlDb29yZCA9IE1hdGguZmxvb3Iob2Zmc2V0WSAvIGJsb2NrU2l6ZSk7XG5cbiAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oeENvb3JkLCB5Q29vcmQpO1xuXG4gICAgaWYgKHhDb29yZCA8IDAgfHwgeUNvb3JkIDwgMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIG1vdXNlUG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgZmluZE1vdXNlUG9zaXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50TW91c2VQb3NpdGlvbiA9IGdldE1vdXNlUG9zaXRpb24oZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG5cbiAgICBtb3VzZUJsb2NrTG9jYXRpb24gPSBjdXJyZW50TW91c2VQb3NpdGlvbjtcblxuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRNb3VzZVBvc2l0aW9uLCAndGhlIGN1cnJlbnQgbW91c2UgcG9zaXRpb24nKTtcbiAgfTtcblxuICAvLyB3b3RrIG9uIHRoaXMgZnVuY3Rpb25cbiAgY29uc3QgZmluZFRvdWNoUG9zaXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCByZWN0ID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHRvdWNoT2Zmc2V0WCA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgY29uc3QgdG91Y2hPZmZzZXRZID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSAtIHJlY3QudG9wO1xuXG4gICAgY29uc3QgdG91Y2hQb3NpdGlvbiA9IGdldE1vdXNlUG9zaXRpb24odG91Y2hPZmZzZXRYLCB0b3VjaE9mZnNldFkpO1xuICAgIG1vdXNlQmxvY2tMb2NhdGlvbiA9IHRvdWNoUG9zaXRpb247XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIC8vIGJsb2NrIHNpemUgbWF0Y2hlcyB0aGUgc2l6ZSBncmlkc2l6ZSBvZiB0aGUgbWVkaWEgcXVlcnkgZGl2aWRlZCBieSAxMFxuICBjb25zdCBjaGFuZ2VCbG9ja1NpemUgPSAobWF0Y2hNZWRpYSkgPT4ge1xuICAgIGJsb2NrU2l6ZSA9IDQyO1xuICAgIGlmIChtYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA5NjBweCknKS5tYXRjaGVzKSBibG9ja1NpemUgPSAzMDtcbiAgICBpZiAobWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNDcwcHgpJykubWF0Y2hlcykgYmxvY2tTaXplID0gMjE7XG4gICAgaWYgKG1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDMyMHB4KScpLm1hdGNoZXMpIGJsb2NrU2l6ZSA9IDE1O1xuICAgIHJldHVybiBibG9ja1NpemU7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhtYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAzMjBweCknKSwgJ3RoZSBjdXJyZW50IG1hdGNoIG1lZGlhJyk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQmxvY2tFbGVtZW50ID0gKGJsb2NrQ2xhc3MsIGNyZWF0ZUJsb2NrKSA9PiB7XG4gICAgbGV0IGxhdGVzdENsYXNzID0gYmxvY2tDbGFzcztcblxuICAgIGlmIChcbiAgICAgIGxhdGVzdENsYXNzICE9PSAnaGl0QmxvY2snICYmXG4gICAgICBsYXRlc3RDbGFzcyAhPT0gJ21pc3NCbG9jaycgJiZcbiAgICAgIGxhdGVzdENsYXNzICE9PSAnY3Vyc29yQmxvY2snXG4gICAgKSB7XG4gICAgICBsYXRlc3RDbGFzcyA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrRWxlbWVudCA9IGNyZWF0ZUJsb2NrKCdkaXYnKTtcbiAgICBibG9ja0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcbiAgICBpZiAobGF0ZXN0Q2xhc3MgIT09ICcnKSBibG9ja0VsZW1lbnQuY2xhc3NMaXN0LmFkZChsYXRlc3RDbGFzcyk7XG5cbiAgICByZXR1cm4gYmxvY2tFbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGRpc2FibGVTdGFydGVyVWkgPSAoKSA9PiB0cnVlO1xuXG4gIC8vIGNvbnN0IHJlbmRlclNlbGVjdGlvbkJsb2NrcyA9IChtb3VzZVBvc2l0aW9uLCBsYXRlc3RCbG9ja1NpemUpID0+IHtcbiAgLy8gICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgLy8gICBjb25zdCBjdXJyZW50U25ha2VCbG9jayA9IGNyZWF0ZUJsb2NrRWxlbWVudCgpO1xuICAvLyAgIGNvbnN0IHJlYWxQb3NpdGlvblggPSBNYXRoLmZsb29yKG1vdXNlUG9zaXRpb24ueENvb3JkICogbGF0ZXN0QmxvY2tTaXplKTtcbiAgLy8gICBjb25zdCByZWFsUG9zaXRpb25ZID0gTWF0aC5mbG9vcihtb3VzZVBvc2l0aW9uLnlDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG5cbiAgLy8gICBjb25zb2xlLmxvZyhtb3VzZVBvc2l0aW9uLCAnVEhFIENVUlJFTlQgTU9VU0UgUE9TSVRJT04nKTtcblxuICAvLyAgIGNvbnNvbGUubG9nKHJlYWxQb3NpdGlvblgsICd0aGUgcmVhbCBwb3NpdGlvbiB4Jyk7XG4gIC8vICAgY29uc29sZS5sb2cocmVhbFBvc2l0aW9uWSwgJ3RoZSByZWFsIHBvc2l0aW9uIHknKTtcblxuICAvLyAgIGN1cnJlbnRTbmFrZUJsb2NrLnN0eWxlLmxlZnQgPSBgJHtyZWFsUG9zaXRpb25YfXB4YDtcbiAgLy8gICBjdXJyZW50U25ha2VCbG9jay5zdHlsZS50b3AgPSBgJHtyZWFsUG9zaXRpb25ZfXB4YDtcblxuICAvLyAgIGVsZW1lbnQuc2hpcEdyaWQuYXBwZW5kQ2hpbGQoY3VycmVudFNuYWtlQmxvY2spO1xuICAvLyB9O1xuXG4gIGNvbnN0IGNyZWF0ZVNoaXBCbG9jayA9IChzaGlwUG9zaXRpb24sIGxhdGVzdEJsb2NrU2l6ZSwgc2hpcFR5cGUpID0+IHtcbiAgICBjb25zdCBzaGlwQmxvY2sgPSBjcmVhdGVCbG9ja0VsZW1lbnQoc2hpcFR5cGUsIGNyZWF0ZURvbUVsZW1lbnQpO1xuXG4gICAgY29uc3QgcmVhbFBvc2l0aW9uWCA9IE1hdGguZmxvb3Ioc2hpcFBvc2l0aW9uLnhDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgY29uc3QgcmVhbFBvc2l0aW9uWSA9IE1hdGguZmxvb3Ioc2hpcFBvc2l0aW9uLnlDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgc2hpcEJsb2NrLnN0eWxlLmxlZnQgPSBgJHtyZWFsUG9zaXRpb25YfXB4YDtcbiAgICBzaGlwQmxvY2suc3R5bGUudG9wID0gYCR7cmVhbFBvc2l0aW9uWX1weGA7XG5cbiAgICByZXR1cm4gc2hpcEJsb2NrO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckFscmVhZHlQbGFjZWRTaGlwcyA9IChzaGlwR3JpZCwgbGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgY29uc3QgZ2FtZVZhbHVlcyA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuICAgIGNvbnN0IGNoZWNrQm9hcmRTaGlwcyA9XG4gICAgICBnYW1lVmFsdWVzLnBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCkuY3VycmVudFNoaXBzO1xuXG4gICAgY2hlY2tCb2FyZFNoaXBzLmZvckVhY2goKHBsYXllckNoZWNrU2hpcHMpID0+IHtcbiAgICAgIHBsYXllckNoZWNrU2hpcHMuZm9yRWFjaCgoYm9hdCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwQmxvY2sgPSBjcmVhdGVTaGlwQmxvY2soYm9hdCwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgICAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQoc2hpcEJsb2NrKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclBsYWNlZFNoaXAgPSAobGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuICAgIGNvbnN0IHsgc2hpcEdyaWQgfSA9IGVsZW1lbnQ7XG5cbiAgICBpZiAoIXBsYWNlZFNoaXApIHJldHVybiBwbGFjZWRTaGlwO1xuXG4gICAgc2hpcEdyaWQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBwbGFjZWRTaGlwLmZvckVhY2goKHNoaXBQb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc2hpcEJsb2NrID0gY3JlYXRlU2hpcEJsb2NrKHNoaXBQb3NpdGlvbiwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgIHNoaXBHcmlkLmFwcGVuZENoaWxkKHNoaXBCbG9jayk7XG4gICAgfSk7XG5cbiAgICByZW5kZXJBbHJlYWR5UGxhY2VkU2hpcHMoc2hpcEdyaWQsIGxhdGVzdEJsb2NrU2l6ZSk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlQXhpcyA9ICgpID0+IHtcbiAgICBpZiAoYXhpcyA9PT0gJ3knKSBheGlzID0gJ3gnO1xuICAgIGVsc2UgYXhpcyA9ICd5JztcbiAgfTtcblxuICBjb25zdCBtb3ZlU2hpcEJ5RGlyZWN0aW9uID0gKG1vdXNlTG9jYXRpb24sIGN1cnJlbnRTaGlwLCBjdXJyZW50QXhpcykgPT4ge1xuICAgIGxldCBsYXRlc3RTaGlwID0gZmFsc2U7XG5cbiAgICBpZiAocG9zaXRpb24uY2hlY2tPdXRPZkJvdW5jZShjdXJyZW50U2hpcFswXSkpIHJldHVybiBsYXRlc3RTaGlwO1xuXG4gICAgY29uc3QgbmV3WFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICBtb3VzZUxvY2F0aW9uLnhDb29yZCxcbiAgICAgIDBcbiAgICApLnhDb29yZDtcblxuICAgIGNvbnN0IG5ld1lQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKFxuICAgICAgMCxcbiAgICAgIG1vdXNlTG9jYXRpb24ueUNvb3JkXG4gICAgKS55Q29vcmQ7XG5cbiAgICBsZXQgbmV3U2hpcFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICBuZXdYUG9zaXRpb24sXG4gICAgICBjdXJyZW50U2hpcFswXS55Q29vcmRcbiAgICApO1xuXG4gICAgaWYgKGN1cnJlbnRBeGlzID09PSAneCcpIHtcbiAgICAgIG5ld1NoaXBQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKFxuICAgICAgICBjdXJyZW50U2hpcFswXS54Q29vcmQsXG4gICAgICAgIG5ld1lQb3NpdGlvblxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsYXRlc3RTaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgbmV3U2hpcFBvc2l0aW9uLFxuICAgICAgY3VycmVudFNoaXAubGVuZ3RoLFxuICAgICAgY3VycmVudEF4aXNcbiAgICApO1xuXG4gICAgcmV0dXJuIGxhdGVzdFNoaXA7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VQbGF5ZXJTaGlwID0gKGxhdGVzdFNoaXAsIGxhdGVzdEF4aXMsIGxhdGVzdEdhbWUpID0+IHtcbiAgICBpZiAobGF0ZXN0U2hpcCkgbGF0ZXN0R2FtZS5zZXR1cFNoaXAobGF0ZXN0U2hpcFswXSwgbGF0ZXN0QXhpcyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUGxheWVyU2hpcEV2ZW50ID0gKCkgPT4ge1xuICAgIHBsYWNlUGxheWVyU2hpcChwbGFjZWRTaGlwLCBheGlzLCBhY3RpdmVHYW1lKTtcbiAgfTtcblxuICBjb25zdCBhZGRVaUV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgZWxlbWVudC5zaGlwTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmluZE1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZpbmRUb3VjaFBvc2l0aW9uKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcEV2ZW50KTtcblxuICAgIGVsZW1lbnQucm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQXhpcyk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVWlFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgZWxlbWVudC5zaGlwTGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmluZE1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZpbmRUb3VjaFBvc2l0aW9uKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcEV2ZW50KTtcblxuICAgIGVsZW1lbnQucm90YXRlQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQXhpcyk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tNb3VzZVRhcmdldCA9IChlbGVtZW50Q2xhc3MpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50Q2xhc3MsICd0aGUgZWxlbWVudCBjYWxzcycpO1xuICAgIGlmIChlbGVtZW50Q2xhc3MgIT09ICdncmlkT3ZlcmxheSBjb21wdXRlckdyaWRPdmVybGF5JykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZU1vdXNlUG9zaXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZVRhcmdldCA9IGNoZWNrTW91c2VUYXJnZXQoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSk7XG4gICAgaWYgKCFtb3VzZVRhcmdldCkgbW91c2VCbG9ja0xvY2F0aW9uID0gbW91c2VUYXJnZXQ7XG4gIH07XG5cbiAgY29uc3QgYWRkR2FtZUV2ZW50cyA9ICgpID0+IHtcbiAgICByZW1vdmVVaUV2ZW50cygpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgY2hhbmdlTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5jb21wdXRlckdyaWRMYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmaW5kTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5jb21wdXRlckdyaWRMYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmaW5kVG91Y2hQb3NpdGlvbik7XG4gIH07XG5cbiAgY29uc3QgYWRkU2hpcHMgPSAoXG4gICAgc2hpcHMsXG4gICAgc2hpcFR5cGUsXG4gICAgZ3JpZCxcbiAgICBsYXRlc3RCbG9ja1NpemUsXG4gICAgaXNNb3VzZVBvc2l0aW9uXG4gICkgPT4ge1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXBHcm91cCkgPT4ge1xuICAgICAgc2hpcEdyb3VwLmZvckVhY2goKGJvYXQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcEVsZW1lbnQgPSBjcmVhdGVTaGlwQmxvY2soYm9hdCwgbGF0ZXN0QmxvY2tTaXplLCBzaGlwVHlwZSk7XG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoc2hpcEVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyR3JpZHMgPSAoYmxvY2tTaXplMiwgbW91c2VQb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGdhbWVWYWx1ZXMgPSBhY3RpdmVHYW1lLmdldEdhbWVWYWx1ZXMoKTtcblxuICAgIGNvbnN0IHsgcGxheWVyR3JpZCB9ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgY29uc3QgeyBjb21wdXRlckdyaWQgfSA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgcGxheWVyR3JpZC5pbm5lckhUTUwgPSAnJztcbiAgICBjb21wdXRlckdyaWQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBwbGF5ZXJCb2FyZFZhbHVlcyA9IGdhbWVWYWx1ZXMucGxheWVyQm9hcmQuZ2V0VmFsdWVzKCk7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZFZhbHVlcyA9IGdhbWVWYWx1ZXMuY29tcHV0ZXJCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHBsYXllckJvYXJkVmFsdWVzLCAncGxheWVyQm9hcmRWYWx1ZXMnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjb21wdXRlckJvYXJkVmFsdWVzLCAnY29tcHV0ZXJCb2FyZFZhbHVlcycpO1xuXG4gICAgYWRkU2hpcHMocGxheWVyQm9hcmRWYWx1ZXMuY3VycmVudFNoaXBzLCBmYWxzZSwgcGxheWVyR3JpZCwgYmxvY2tTaXplMik7XG4gICAgYWRkU2hpcHMocGxheWVyQm9hcmRWYWx1ZXMuaGl0cywgJ2hpdEJsb2NrJywgcGxheWVyR3JpZCwgYmxvY2tTaXplMik7XG4gICAgYWRkU2hpcHMocGxheWVyQm9hcmRWYWx1ZXMubWlzc2VzLCAnbWlzc0Jsb2NrJywgcGxheWVyR3JpZCwgYmxvY2tTaXplKTtcblxuICAgIGFkZFNoaXBzKGNvbXB1dGVyQm9hcmRWYWx1ZXMuaGl0cywgJ2hpdEJsb2NrJywgY29tcHV0ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgICBhZGRTaGlwcyhjb21wdXRlckJvYXJkVmFsdWVzLm1pc3NlcywgJ21pc3NCbG9jaycsIGNvbXB1dGVyR3JpZCwgYmxvY2tTaXplMik7XG5cbiAgICBjb25zdCBtb3VzZVNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAobW91c2VQb3NpdGlvbiwgMSwgJ3gnKTtcblxuICAgIGlmICghbW91c2VTaGlwKSBjb21wdXRlckdyaWQuaW5uZXJIVE1MID0gJyc7XG4gICAgZWxzZSBhZGRTaGlwcyhbbW91c2VTaGlwXSwgJ2N1cnNvckJsb2NrJywgY29tcHV0ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJHYW1lID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZ2FtZVN0YXR1cyA9IGFjdGl2ZUdhbWUuZ2FtZUlzT3ZlcigpO1xuXG4gICAgICBjb25zdCBsYXRlc3RCbG9ja1NpemUgPSBjaGFuZ2VCbG9ja1NpemUod2luZG93Lm1hdGNoTWVkaWEpO1xuICAgICAgcmVuZGVyR3JpZHMobGF0ZXN0QmxvY2tTaXplLCBtb3VzZUJsb2NrTG9jYXRpb24pO1xuXG4gICAgICBpZiAoIWdhbWVTdGF0dXMuZ2FtZUZpbmlzaGVkKSByZW5kZXJHYW1lKGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgfSwgcmVuZGVyU3BlZWQpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVNoaXBTZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBlbGVtZW50cy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZWxlbWVudHMuc2VjdGlvblNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGVsZW1lbnRzLnNoaXBHcmlkLmlubmVySFRNTCA9ICcnO1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICByZW1vdmVTaGlwU2VjdGlvbigpO1xuXG4gICAgYWN0aXZlR2FtZS5zZXR1cEdhbWUoKTtcbiAgICBhZGRHYW1lRXZlbnRzKCk7XG5cbiAgICByZW5kZXJHYW1lKCk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU2VsZWN0aW9uR3JpZCA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGdhbWVWYWx1ZSA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuICAgICAgY29uc3QgY2hlY2tCb2FyZFNoaXBzID1cbiAgICAgICAgZ2FtZVZhbHVlLnBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCkuY3VycmVudFNoaXBzO1xuXG4gICAgICBjaGFuZ2VCbG9ja1NpemUod2luZG93Lm1hdGNoTWVkaWEpO1xuXG4gICAgICBpZiAoYWN0aXZlR2FtZS5jaGVja1NldHVwKGdhbWVWYWx1ZS5wbGF5ZXJDaGVja0JvYXJkKSkgZGlzYWJsZVN0YXJ0ZXJVaSgpO1xuXG4gICAgICBpZiAobW91c2VCbG9ja0xvY2F0aW9uKSB7XG4gICAgICAgIGxldCBjdXJyZW50U2hpcCA9IGFjdGl2ZUdhbWUuYXJyYW5nZUJsb2Nrcyhtb3VzZUJsb2NrTG9jYXRpb24sIGF4aXMpO1xuICAgICAgICBpZiAoIWN1cnJlbnRTaGlwICYmIHBsYWNlZFNoaXApIHtcbiAgICAgICAgICBjdXJyZW50U2hpcCA9IG1vdmVTaGlwQnlEaXJlY3Rpb24oXG4gICAgICAgICAgICBtb3VzZUJsb2NrTG9jYXRpb24sXG4gICAgICAgICAgICBwbGFjZWRTaGlwLFxuICAgICAgICAgICAgYXhpc1xuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFNoaXApIHBsYWNlZFNoaXAgPSBjdXJyZW50U2hpcDtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGFjZWRTaGlwLCAndGhlIGN1cnJlbnQgcGxhY2VkIHNoaXAnKTtcblxuICAgICAgICBpZiAocGxhY2VkU2hpcCkgcmVuZGVyUGxhY2VkU2hpcChibG9ja1NpemUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2ZUdhbWUuY2hlY2tTZXR1cChjaGVja0JvYXJkU2hpcHMpKSByZW5kZXJTZWxlY3Rpb25HcmlkKCk7XG4gICAgICBlbHNlIHN0YXJ0R2FtZShibG9ja1NpemUpO1xuICAgIH0sIHJlbmRlclNwZWVkKTtcbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZXMgPSAoKSA9PiAoe1xuICAgIGJsb2NrU2l6ZSxcbiAgICBwbGFjZWRTaGlwLFxuICAgIGF4aXMsXG4gICAgbW91c2VCbG9ja0xvY2F0aW9uLFxuICB9KTtcblxuICBjb25zdCBhY3RpdmF0ZVVpID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9tLmdldFBhZ2UoKTtcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IHBhZ2VDb250ZW50O1xuXG4gICAgYWRkVWlFdmVudHMoKTtcbiAgICByZW5kZXJTZWxlY3Rpb25HcmlkKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhY3RpdmF0ZVVpLFxuICAgIGNyZWF0ZUJsb2NrRWxlbWVudCxcbiAgICBnZXRNb3VzZVBvc2l0aW9uLFxuICAgIG1vdmVTaGlwQnlEaXJlY3Rpb24sXG4gICAgY2hhbmdlQmxvY2tTaXplLFxuICAgIGNoYW5nZUF4aXMsXG4gICAgZ2V0VmFsdWVzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVWk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tcmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tNzAwLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tNzAwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXywgeyBoYXNoOiBcIiNBemVyZXRNb25vXCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18sIHsgaGFzaDogXCIjQXplcmV0TW9ub1wiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNF9fXywgeyBoYXNoOiBcIiNSb2JvdG9cIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMThfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18sIHsgaGFzaDogXCIjUm9ib3RvXCIgfSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tZGFya0JsYWNrOiByZ2IoMiwgNCwgOCk7XFxuICAtLWRhcmtHcmF5OiByZ2IoMjIsIDI3LCAzNCk7XFxuICAtLW1pc3NCbHVlOiByZ2IoNzYsIDg0LCAxOTEpO1xcbn1cXG5cXG4vKmNyZWRpdCB0byBodHRwczovL2dvb2dsZS13ZWJmb250cy1oZWxwZXIuaGVyb2t1YXBwLmNvbS8gZm9yIGFsbG93aW5nIG1lIHRvIGltcG9ydCB0aGVzZSBmb250cyBhdXRvbWF0aWNhbGx5Ki9cXG4vKiBhemVyZXQtbW9uby1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXplcmV0IE1vbm8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgc3JjOiBsb2NhbCgnJyksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgIC8qIElFNi1JRTggKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgnd29mZjInKSxcXG4gICAgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgLyogTW9kZXJuIEJyb3dzZXJzICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxufVxcbi8qIGF6ZXJldC1tb25vLTcwMCAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0F6ZXJldCBNb25vJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gIHNyYzogbG9jYWwoJycpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpXFxuICAgICAgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAvKiBJRTYtSUU4ICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpXFxuICAgICAgZm9ybWF0KCd3b2ZmJyksXFxuICAgIC8qIE1vZGVybiBCcm93c2VycyAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyArIFwiKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxufVxcblxcbi8qIHJvYm90by0zMDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gKyBcIik7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gIHNyYzogbG9jYWwoJycpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgIC8qIElFNi1JRTggKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgLyogTW9kZXJuIEJyb3dzZXJzICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19fICsgXCIpXFxuICAgICAgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG59XFxuLyogcm9ib3RvLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX18gKyBcIik7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gIHNyYzogbG9jYWwoJycpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgLyogSUU2LUlFOCAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMV9fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgnd29mZicpLFxcbiAgICAvKiBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjJfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjNfX18gKyBcIikgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbn1cXG5cXG5odG1sIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnNoaXBHcmlkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJsb2NrIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgd2lkdGg6IDQycHg7XFxuICBoZWlnaHQ6IDQycHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5oaXRCbG9jayB7XFxuICBiYWNrZ3JvdW5kOiBwaW5rO1xcbn1cXG5cXG4uY3Vyc29yQmxvY2sge1xcbiAgYmFja2dyb3VuZDogYmx1ZTtcXG59XFxuXFxuLm1pc3NCbG9jayB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1taXNzQmx1ZSk7XFxufVxcblxcbi5zZWN0aW9uU2NyZWVuIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMjtcXG5cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaGlwVGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdBemVyZXQgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuLnNoaXBUZXh0IHtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnNoaXBTZWxlY3Rpb24ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtCbGFjayk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDQ0MHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3RhdGVJbWFnZSB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSg4N2RlZylcXG4gICAgYnJpZ2h0bmVzcygxMDAlKTtcXG59XFxuXFxuLnJvdGF0ZUJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrQmxhY2spO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucm90YXRlQnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtHcmF5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBsaW5lLWhlaWdodDogNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNoaXBHcmlkIHtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogNDIwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5ib2FyZFRpdGxlIHtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgYmFja2dyb3VuZDogcmdiYSgzOSwgMzksIDM5LCAwLjU3NCk7XFxuICB6LWluZGV4OiAyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogcmdiKDIsIDQsIDgpO1xcbn1cXG5cXG4ubWFpblNlY3Rpb24ge1xcbiAgbWluLWhlaWdodDogOTB2aDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1haW5UaXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBsaW5lLWhlaWdodDogMTB2aDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtHcmF5KTtcXG59XFxuXFxuLmNlbnRlclNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5ncmlkIHtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogNDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLnNoaXBPdmVybGF5IHtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogNDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcblxcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4uZ3JpZExheWVyIHtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogNDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ncmlkT3ZlcmxheSB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG59XFxuXFxuLnNoaXBPdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5ncmlkT3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uc3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtHcmF5KTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBsaW5lLWhlaWdodDogMTB2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW5UaXRsZSBoMSB7XFxuICBmb250LWZhbWlseTogJ0F6ZXJldCBNb25vJywgbW9ub3NwYWNlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgLmdyaWQge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICB9XFxuXFxuICAuc2hpcEdyaWQge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICB9XFxuXFxuICAuc2hpcE92ZXJsYXksXFxuICAuZ3JpZE92ZXJsYXksXFxuICAuZ3JpZExheWVyIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBTZWxlY3Rpb24ge1xcbiAgICB3aWR0aDogMzEwcHg7XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgfVxcblxcbiAgLmJsb2NrIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gIH1cXG5cXG4gIC5zdGF0cyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzBweCkge1xcbiAgLmdyaWQge1xcbiAgICB3aWR0aDogMjEwcHg7XFxuICAgIGhlaWdodDogMjEwcHg7XFxuICB9XFxuXFxuICAuc2hpcEdyaWQge1xcbiAgICB3aWR0aDogMjEwcHg7XFxuICAgIGhlaWdodDogMjEwcHg7XFxuICB9XFxuXFxuICAuc2hpcE92ZXJsYXksXFxuICAuZ3JpZE92ZXJsYXksXFxuICAuZ3JpZExheWVyIHtcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgICBoZWlnaHQ6IDIxMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBTZWxlY3Rpb24ge1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICB9XFxuXFxuICAuc2hpcFRleHQge1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gIH1cXG5cXG4gIC5ib2FyZFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICB9XFxuXFxuICAuYmxvY2sge1xcbiAgICB3aWR0aDogMjFweDtcXG4gICAgaGVpZ2h0OiAyMXB4O1xcbiAgfVxcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gIH1cXG5cXG4gIC5zdGF0cyB7XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjVweCkge1xcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxuICB9XFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiA4cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcXG4gIC5ncmlkIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogNnB4O1xcbiAgfVxcblxcbiAgLnNoaXBPdmVybGF5LFxcbiAgLmdyaWRPdmVybGF5LFxcbiAgLmdyaWRMYXllciB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwR3JpZCB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwU2VsZWN0aW9uIHtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgfVxcblxcbiAgLmJsb2NrIHtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gIH1cXG5cXG4gIC5zaGlwVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICB9XFxuXFxuICAuc2hpcFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICB9XFxuXFxuICAuc3RhdHMge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBLDhHQUE4RztBQUM5RyxnQ0FBZ0M7QUFDaEM7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0Q0FBc0QsRUFBRSxxQkFBcUI7RUFDN0U7Ozs7Ozs7Ozs7MkRBVThFLEVBQUUsZUFBZTtBQUNqRztBQUNBLDRCQUE0QjtBQUM1QjtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hC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QUN2Qzs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBOzs7SUFHRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTs7O0lBR0UsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7OztJQUdFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWRhcmtCbGFjazogcmdiKDIsIDQsIDgpO1xcbiAgLS1kYXJrR3JheTogcmdiKDIyLCAyNywgMzQpO1xcbiAgLS1taXNzQmx1ZTogcmdiKDc2LCA4NCwgMTkxKTtcXG59XFxuXFxuLypjcmVkaXQgdG8gaHR0cHM6Ly9nb29nbGUtd2ViZm9udHMtaGVscGVyLmhlcm9rdWFwcC5jb20vIGZvciBhbGxvd2luZyBtZSB0byBpbXBvcnQgdGhlc2UgZm9udHMgYXV0b21hdGljYWxseSovXFxuLyogYXplcmV0LW1vbm8tcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0F6ZXJldCBNb25vJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIuZW90Jyk7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gIHNyYzogbG9jYWwoJycpLFxcbiAgICB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLmVvdD8jaWVmaXgnKVxcbiAgICAgIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgLyogSUU2LUlFOCAqLyB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLndvZmYyJylcXG4gICAgICBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgIHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAvKiBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tcmVndWxhci50dGYnKVxcbiAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLnN2ZyNBemVyZXRNb25vJykgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbn1cXG4vKiBhemVyZXQtbW9uby03MDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdBemVyZXQgTW9ubyc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi03MDAuZW90Jyk7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gIHNyYzogbG9jYWwoJycpLFxcbiAgICB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi03MDAuZW90PyNpZWZpeCcpXFxuICAgICAgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAvKiBJRTYtSUU4ICovIHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC53b2ZmMicpXFxuICAgICAgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tNzAwLndvZmYnKVxcbiAgICAgIGZvcm1hdCgnd29mZicpLFxcbiAgICAvKiBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tNzAwLnR0ZicpXFxuICAgICAgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgIHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC5zdmcjQXplcmV0TW9ubycpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG59XFxuXFxuLyogcm9ib3RvLTMwMCAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tMzAwLmVvdCcpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAvKiBJRTYtSUU4ICovIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqLyB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tMzAwLndvZmYnKVxcbiAgICAgIGZvcm1hdCgnd29mZicpLFxcbiAgICAvKiBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC50dGYnKVxcbiAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi8gdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC5zdmcjUm9ib3RvJylcXG4gICAgICBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxufVxcbi8qIHJvYm90by1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLmVvdCcpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIuZW90PyNpZWZpeCcpXFxuICAgICAgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAvKiBJRTYtSUU4ICovIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIud29mZicpXFxuICAgICAgZm9ybWF0KCd3b2ZmJyksXFxuICAgIC8qIE1vZGVybiBCcm93c2VycyAqLyB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci50dGYnKVxcbiAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci5zdmcjUm9ib3RvJykgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbn1cXG5cXG5odG1sIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnNoaXBHcmlkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJsb2NrIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgd2lkdGg6IDQycHg7XFxuICBoZWlnaHQ6IDQycHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5oaXRCbG9jayB7XFxuICBiYWNrZ3JvdW5kOiBwaW5rO1xcbn1cXG5cXG4uY3Vyc29yQmxvY2sge1xcbiAgYmFja2dyb3VuZDogYmx1ZTtcXG59XFxuXFxuLm1pc3NCbG9jayB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1taXNzQmx1ZSk7XFxufVxcblxcbi5zZWN0aW9uU2NyZWVuIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMjtcXG5cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaGlwVGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdBemVyZXQgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuLnNoaXBUZXh0IHtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnNoaXBTZWxlY3Rpb24ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtCbGFjayk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDQ0MHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3RhdGVJbWFnZSB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSg4N2RlZylcXG4gICAgYnJpZ2h0bmVzcygxMDAlKTtcXG59XFxuXFxuLnJvdGF0ZUJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrQmxhY2spO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucm90YXRlQnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtHcmF5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBsaW5lLWhlaWdodDogNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNoaXBHcmlkIHtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogNDIwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5ib2FyZFRpdGxlIHtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgYmFja2dyb3VuZDogcmdiYSgzOSwgMzksIDM5LCAwLjU3NCk7XFxuICB6LWluZGV4OiAyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogcmdiKDIsIDQsIDgpO1xcbn1cXG5cXG4ubWFpblNlY3Rpb24ge1xcbiAgbWluLWhlaWdodDogOTB2aDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1haW5UaXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBsaW5lLWhlaWdodDogMTB2aDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtHcmF5KTtcXG59XFxuXFxuLmNlbnRlclNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5ncmlkIHtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogNDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLnNoaXBPdmVybGF5IHtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogNDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcblxcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4uZ3JpZExheWVyIHtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogNDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ncmlkT3ZlcmxheSB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG59XFxuXFxuLnNoaXBPdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5ncmlkT3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uc3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtHcmF5KTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBsaW5lLWhlaWdodDogMTB2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW5UaXRsZSBoMSB7XFxuICBmb250LWZhbWlseTogJ0F6ZXJldCBNb25vJywgbW9ub3NwYWNlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgLmdyaWQge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICB9XFxuXFxuICAuc2hpcEdyaWQge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICB9XFxuXFxuICAuc2hpcE92ZXJsYXksXFxuICAuZ3JpZE92ZXJsYXksXFxuICAuZ3JpZExheWVyIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBTZWxlY3Rpb24ge1xcbiAgICB3aWR0aDogMzEwcHg7XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgfVxcblxcbiAgLmJsb2NrIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gIH1cXG5cXG4gIC5zdGF0cyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzBweCkge1xcbiAgLmdyaWQge1xcbiAgICB3aWR0aDogMjEwcHg7XFxuICAgIGhlaWdodDogMjEwcHg7XFxuICB9XFxuXFxuICAuc2hpcEdyaWQge1xcbiAgICB3aWR0aDogMjEwcHg7XFxuICAgIGhlaWdodDogMjEwcHg7XFxuICB9XFxuXFxuICAuc2hpcE92ZXJsYXksXFxuICAuZ3JpZE92ZXJsYXksXFxuICAuZ3JpZExheWVyIHtcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgICBoZWlnaHQ6IDIxMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBTZWxlY3Rpb24ge1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICB9XFxuXFxuICAuc2hpcFRleHQge1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gIH1cXG5cXG4gIC5ib2FyZFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICB9XFxuXFxuICAuYmxvY2sge1xcbiAgICB3aWR0aDogMjFweDtcXG4gICAgaGVpZ2h0OiAyMXB4O1xcbiAgfVxcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gIH1cXG5cXG4gIC5zdGF0cyB7XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjVweCkge1xcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxuICB9XFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiA4cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcXG4gIC5ncmlkIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogNnB4O1xcbiAgfVxcblxcbiAgLnNoaXBPdmVybGF5LFxcbiAgLmdyaWRPdmVybGF5LFxcbiAgLmdyaWRMYXllciB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwR3JpZCB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwU2VsZWN0aW9uIHtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgfVxcblxcbiAgLmJsb2NrIHtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gIH1cXG5cXG4gIC5zaGlwVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICB9XFxuXFxuICAuc2hpcFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICB9XFxuXFxuICAuc3RhdHMge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIlVpIiwiY3VycmVudFVpIiwiYWN0aXZhdGVVaSIsInJlZnJlc2hpbmdMb2dvIiwiRG9tIiwiZ2V0RWxlbWVudHMiLCJvdmVybGF5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VjdGlvblNjcmVlbiIsInNoaXBUZXh0Iiwic2hpcEdyaWQiLCJzaGlwTGF5ZXIiLCJyb3RhdGVCdXR0b24iLCJncmlkcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoaXRzIiwibWlzc2VzIiwicGxheWVyR3JpZCIsInBsYXllckhpdHMiLCJwbGF5ZXJNaXNzZXMiLCJjb21wdXRlckdyaWQiLCJjb21wdXRlckhpdHMiLCJjb21wdXRlck1pc3NlcyIsImNvbnRlbnQiLCJjb21wdXRlckdyaWRMYXllciIsImdldFBhZ2UiLCJQb3NpdGlvbiIsIlNoaXAiLCJQcmFjdGljYWwiLCJHYW1lYm9hcmQiLCJwb3NpdGlvbiIsInNoaXAiLCJwcmFjdGljYWwiLCJjdXJyZW50U2hpcHMiLCJyYW5kb21pemUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21BeGlzIiwiYXhpZXMiLCJsZW5ndGgiLCJwbGFjZUFsbFNoaXBzIiwic2hpcHNBcnJheSIsImNvbXBhcmVTaGlwc0FycmF5IiwibGF0ZXN0U2hpcHNBcnJheSIsInNoaXBzIiwic2hpcHNEb0NvbGxpZGUiLCJmb3JFYWNoIiwibGF0ZXN0U2hpcHMiLCJib2F0IiwibGF0ZXN0Qm9hdCIsImNvbXBhcmVQb3NpdGlvbiIsInBsYXllclBsYWNlU2hpcCIsImxvY2F0aW9uIiwiYXhpcyIsImN1cnJlbnRBcnJheSIsImNvcHlBcnJheSIsInNoaXBsZW5ndGgiLCJjdXJyZW50U2hpcCIsImNyZWF0ZVNoaXAiLCJpc0NvbGxpZGVkIiwicHVzaCIsInBsYWNlUmFuZG9tU2hpcHMiLCJyYW5kb21pemVyIiwicmFuZG9tQXhpZXMiLCJsYXRlc3RMZW5ndGgiLCJyYW5kb21Qb3NpdGlvbiIsImNyZWF0ZVBvc2l0aW9uIiwicmFuZG9tU2hpcCIsInNoaXBDb2xsaWRlcyIsInBsYWNlU2hpcHNSYW5kb21seSIsImF0dGFja1NoaXAiLCJsYXRlc3RQb3NpdGlvbiIsImN1cnJlbnRIaXRzIiwiY3VycmVudE1pc3NlcyIsImlzSGl0IiwibGF0ZXN0SGl0cyIsImxhdGVzdE1pc3NlcyIsInNoaXBBcnJheSIsInBvc2l0aW9uc0FycmF5IiwiaGl0IiwiaGl0QXJyYXkiLCJzaGlwQXJyYXlzIiwiZmluYWxPYmplY3QiLCJyZWNpZXZlQXR0YWNrIiwicmVzdWx0IiwiY3JlYXRlUmFuZG9tQ29vcmRzIiwiaXNNb2NrUmFuZG9tIiwiY2FsbFJhbmRvbWl6ZXIiLCJyYW5kb21YIiwicmFuZG9tWSIsImZpbHRlckF0dGFjayIsImFycmF5IiwiY3VycmVudEF0dGFjayIsImN1cnJlbnRBdHRhY2tBcnJheSIsImZpbHRlciIsIml0ZW0iLCJ4Q29vcmQiLCJ5Q29vcmQiLCJnZXRUeXBlT2ZQbGFjZWRTaGlwIiwic2hpcFR5cGVzIiwic2hpcFR5cGUiLCJzaGlwTGVuZ3RoIiwicmVjaWV2ZVJhbmRvbUF0dGFjayIsImhhc0JlZW5IaXQiLCJoYXNCZWVuTWlzcyIsImlzQWxsU3VuayIsImhhc1N1bmtlZCIsImlzU3VuayIsImdldFZhbHVlcyIsIkdhbWUiLCJwbGF5ZXJCb2FyZCIsImNvbXB1dGVyQm9hcmQiLCJwbGF5ZXJDaGVja0JvYXJkIiwiY2hlY2tTZXR1cCIsInBsYXllckNoZWNrU2hpcHMiLCJzZXR1cEdhbWUiLCJwbGF5ZXJDaGVja1ZhbHVlcyIsImF0dGFja0JvYXRzIiwiY29vcmRzIiwic2V0dXBTaGlwIiwiZ2FtZUlzT3ZlciIsIm1lc3NhZ2UiLCJnYW1lRmluaXNoZWQiLCJhcnJhbmdlQmxvY2tzIiwibW91c2VQb3NpdGlvbiIsImN1cnJlbnRSb3RhdGlvbiIsInNoaXBUeXBlT2JqZWN0IiwiZ2V0R2FtZVZhbHVlcyIsImFjdGl2ZUdhbWUiLCJjaGVja091dE9mQm91bmNlIiwibmV3UG9zaXRpb24iLCJhZGRQb3NpdGlvbiIsInBvc2l0aW9uMSIsInBvc2l0aW9uMiIsIm11bHRpcGx5UG9zaXRpb24iLCJjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsIiwibmV3QXJyYXkiLCJpc09iamVjdCIsImN1cnJlbnRPYmplY3QiLCJjaGVja09iamVjdCIsIm9iamVjdDEiLCJvYmplY3QyIiwiaW5kZXgiLCJzZWNvbmRJbmRleCIsIm9iamVjdElzRXF1YWwiLCJjdXJyZW50T2JqZWN0MiIsImN1cnJlbnRPYmplY3RWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjdXJyZW50T2JqZWN0MlZhbHVlcyIsIm9iamVjdEtleXMiLCJrZXlzIiwib2JqZWN0S2V5czIiLCJrZXkiLCJpdGVtMiIsImNoZWNrT2JqZWN0Qm9vbCIsImdldEFkZGVkUG9zaXRpb24iLCJhZGRlZFBvc2l0aW9uIiwibGVuZ3RoMSIsInBvcHVsYXRlU2hpcHMiLCJjdXJyZW50UG9zaXRpb24iLCJsYXRlc3RBcnJheSIsImFycmF5TGVuZ3RoIiwicG9zIiwiZG9tIiwicmVuZGVyU3BlZWQiLCJibG9ja1NpemUiLCJwbGFjZWRTaGlwIiwibW91c2VCbG9ja0xvY2F0aW9uIiwiY3JlYXRlRG9tRWxlbWVudCIsImVsZW1lbnROYW1lIiwiY3JlYXRlRWxlbWVudCIsImdldE1vdXNlUG9zaXRpb24iLCJvZmZzZXRYIiwib2Zmc2V0WSIsImZpbmRNb3VzZVBvc2l0aW9uIiwiZXZlbnQiLCJjdXJyZW50TW91c2VQb3NpdGlvbiIsImZpbmRUb3VjaFBvc2l0aW9uIiwicmVjdCIsInRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvdWNoT2Zmc2V0WCIsInRhcmdldFRvdWNoZXMiLCJwYWdlWCIsImxlZnQiLCJ0b3VjaE9mZnNldFkiLCJwYWdlWSIsInRvcCIsInRvdWNoUG9zaXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZUJsb2NrU2l6ZSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiY3JlYXRlQmxvY2tFbGVtZW50IiwiYmxvY2tDbGFzcyIsImNyZWF0ZUJsb2NrIiwibGF0ZXN0Q2xhc3MiLCJibG9ja0VsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXNhYmxlU3RhcnRlclVpIiwiY3JlYXRlU2hpcEJsb2NrIiwic2hpcFBvc2l0aW9uIiwibGF0ZXN0QmxvY2tTaXplIiwic2hpcEJsb2NrIiwicmVhbFBvc2l0aW9uWCIsInJlYWxQb3NpdGlvblkiLCJzdHlsZSIsInJlbmRlckFscmVhZHlQbGFjZWRTaGlwcyIsImdhbWVWYWx1ZXMiLCJjaGVja0JvYXJkU2hpcHMiLCJhcHBlbmRDaGlsZCIsInJlbmRlclBsYWNlZFNoaXAiLCJlbGVtZW50IiwiaW5uZXJIVE1MIiwiY2hhbmdlQXhpcyIsIm1vdmVTaGlwQnlEaXJlY3Rpb24iLCJtb3VzZUxvY2F0aW9uIiwiY3VycmVudEF4aXMiLCJsYXRlc3RTaGlwIiwibmV3WFBvc2l0aW9uIiwibmV3WVBvc2l0aW9uIiwibmV3U2hpcFBvc2l0aW9uIiwicGxhY2VQbGF5ZXJTaGlwIiwibGF0ZXN0QXhpcyIsImxhdGVzdEdhbWUiLCJwbGFjZVBsYXllclNoaXBFdmVudCIsImFkZFVpRXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZVVpRXZlbnRzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNoZWNrTW91c2VUYXJnZXQiLCJlbGVtZW50Q2xhc3MiLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlTW91c2VQb3NpdGlvbiIsIm1vdXNlVGFyZ2V0IiwiY2xhc3NOYW1lIiwiYWRkR2FtZUV2ZW50cyIsIndpbmRvdyIsImFkZFNoaXBzIiwiZ3JpZCIsImlzTW91c2VQb3NpdGlvbiIsInNoaXBHcm91cCIsInNoaXBFbGVtZW50IiwicmVuZGVyR3JpZHMiLCJibG9ja1NpemUyIiwicGxheWVyQm9hcmRWYWx1ZXMiLCJjb21wdXRlckJvYXJkVmFsdWVzIiwibW91c2VTaGlwIiwicmVuZGVyR2FtZSIsInNldFRpbWVvdXQiLCJnYW1lU3RhdHVzIiwicmVtb3ZlU2hpcFNlY3Rpb24iLCJlbGVtZW50cyIsImRpc3BsYXkiLCJzdGFydEdhbWUiLCJyZW5kZXJTZWxlY3Rpb25HcmlkIiwiZ2FtZVZhbHVlIiwicGFnZUNvbnRlbnQiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==