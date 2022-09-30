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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --darkBlack: rgb(2, 4, 8);\n  --darkGray: rgb(22, 27, 34);\n  --missBlue: rgb(76, 84, 191);\n}\n\n/*credit to https://google-webfonts-helper.herokuapp.com/ for allowing me to import these fonts automatically*/\n/* azeret-mono-regular - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")\n      format('woff2'),\n    /* Super Modern Browsers */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg'); /* Legacy iOS */\n}\n/* azeret-mono-700 - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 700;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ")\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ")\n      format('woff2'),\n    /* Super Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ")\n      format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format('svg'); /* Legacy iOS */\n}\n\n/* roboto-300 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format('woff2'),\n    /* Super Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ")\n      format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */ url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ")\n      format('svg'); /* Legacy iOS */\n}\n/* roboto-regular - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ")\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ") format('woff2'),\n    /* Super Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ")\n      format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ") format('svg'); /* Legacy iOS */\n}\n\nhtml {\n  min-height: 100%;\n}\n\nbody {\n  min-height: 100%;\n}\n\n.content {\n  min-height: 100%;\n  font-family: 'Roboto', sans-serif;\n}\n\n.shipGrid {\n  position: relative;\n}\n\n.block {\n  background: white;\n  width: 42px;\n  height: 42px;\n  border: none;\n  position: absolute;\n}\n\n.hitBlock {\n  background: pink;\n}\n\n.cursotBlock {\n  background: green;\n}\n\n.missBlock {\n  background: var(--missBlue);\n}\n\n.sectionScreen {\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n\n  position: fixed;\n\n  display: flex;\n\n  justify-content: center;\n  align-items: center;\n}\n\n.shipTitle {\n  font-family: 'Azeret Mono', monospace;\n}\n\n.shipText {\n  margin: 10px;\n}\n\n.shipSelection {\n  padding: 10px;\n  color: white;\n  background: var(--darkBlack);\n  display: flex;\n  width: 440px;\n  flex-direction: column;\n  align-items: center;\n}\n\n.rotateImage {\n  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(87deg)\n    brightness(100%);\n}\n\n.rotateButton:hover {\n  background: var(--darkBlack);\n  cursor: pointer;\n}\n\n.rotateButton {\n  background: var(--darkGray);\n  border: 1px solid white;\n  margin: 10px;\n  height: 50px;\n  width: 50px;\n  line-height: 50px;\n  text-align: center;\n}\n\n.shipGrid {\n  width: 420px;\n  height: 420px;\n  background: var(--darkGray);\n  border: 1px solid;\n  padding: 0;\n  margin: 0;\n}\n\n.overlay {\n  background: rgba(39, 39, 39, 0.574);\n  z-index: 1;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n}\n\n.content {\n  background: rgb(2, 4, 8);\n}\n\n.mainSection {\n  min-height: 90vh;\n  color: white;\n  position: relative;\n}\n\n.mainTitle {\n  text-align: center;\n  height: 10vh;\n  line-height: 10vh;\n  background: var(--darkGray);\n}\n\n.centerSection {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n\n  justify-content: center;\n\n  align-items: center;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px;\n}\n\n.grid {\n  width: 420px;\n  height: 420px;\n  position: relative;\n  background: var(--darkGray);\n  border: 1px solid white;\n}\n.shipOverlay {\n  width: 420px;\n  height: 420px;\n\n  border: 1px solid blue;\n\n  position: fixed;\n  z-index: 3;\n}\n\n.stats {\n  display: flex;\n  width: 420px;\n  justify-content: space-around;\n  margin: 20px;\n}\n\n.footer {\n  background: var(--darkGray);\n  height: 10vh;\n  color: white;\n  word-wrap: break-word;\n  font-size: small;\n  line-height: 10vh;\n  text-align: center;\n}\n\n.mainTitle h1 {\n  font-family: 'Azeret Mono', monospace;\n}\n\n@media only screen and (max-width: 600px) {\n  .footer {\n    font-size: small;\n  }\n}\n\n@media only screen and (max-width: 960px) {\n  .grid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipGrid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipOverlay {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipSelection {\n    width: 310px;\n  }\n\n  .footer {\n    font-size: x-small;\n  }\n\n  .block {\n    width: 30px;\n    height: 30px;\n  }\n\n  .stats {\n    width: 300px;\n  }\n}\n\n@media only screen and (max-width: 470px) {\n  .grid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipGrid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipOverlay {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipSelection {\n    width: 220px;\n  }\n\n  .shipText {\n    font-size: medium;\n  }\n\n  .boardTitle {\n    font-size: medium;\n  }\n\n  .block {\n    width: 21px;\n    height: 21px;\n  }\n  .footer {\n    font-size: x-small;\n  }\n\n  .stats {\n    width: 210px;\n  }\n}\n\n@media only screen and (max-width: 365px) {\n  .footer {\n    font-size: xx-small;\n  }\n  .footer {\n    font-size: 8px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .grid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .footer {\n    font-size: 6px;\n  }\n\n  .shipOverlay {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipGrid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipSelection {\n    width: 160px;\n  }\n\n  .block {\n    width: 15px;\n    height: 15px;\n  }\n\n  .shipText {\n    font-size: small;\n  }\n\n  .shipTitle {\n    font-size: medium;\n  }\n\n  .stats {\n    width: 150px;\n    font-size: 12px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --darkBlack: rgb(2, 4, 8);\n  --darkGray: rgb(22, 27, 34);\n  --missBlue: rgb(76, 84, 191);\n}\n\n/*credit to https://google-webfonts-helper.herokuapp.com/ for allowing me to import these fonts automatically*/\n/* azeret-mono-regular - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url('../fonts/azeret-mono-v11-latin-regular.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/azeret-mono-v11-latin-regular.eot?#iefix')\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/azeret-mono-v11-latin-regular.woff2')\n      format('woff2'),\n    /* Super Modern Browsers */\n      url('../fonts/azeret-mono-v11-latin-regular.woff') format('woff'),\n    /* Modern Browsers */ url('../fonts/azeret-mono-v11-latin-regular.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url('../fonts/azeret-mono-v11-latin-regular.svg#AzeretMono') format('svg'); /* Legacy iOS */\n}\n/* azeret-mono-700 - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 700;\n  src: url('../fonts/azeret-mono-v11-latin-700.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/azeret-mono-v11-latin-700.eot?#iefix')\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/azeret-mono-v11-latin-700.woff2')\n      format('woff2'),\n    /* Super Modern Browsers */ url('../fonts/azeret-mono-v11-latin-700.woff')\n      format('woff'),\n    /* Modern Browsers */ url('../fonts/azeret-mono-v11-latin-700.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url('../fonts/azeret-mono-v11-latin-700.svg#AzeretMono') format('svg'); /* Legacy iOS */\n}\n\n/* roboto-300 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url('../fonts/roboto-v30-latin-300.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/roboto-v30-latin-300.eot?#iefix') format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/roboto-v30-latin-300.woff2') format('woff2'),\n    /* Super Modern Browsers */ url('../fonts/roboto-v30-latin-300.woff')\n      format('woff'),\n    /* Modern Browsers */ url('../fonts/roboto-v30-latin-300.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */ url('../fonts/roboto-v30-latin-300.svg#Roboto')\n      format('svg'); /* Legacy iOS */\n}\n/* roboto-regular - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url('../fonts/roboto-v30-latin-regular.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/roboto-v30-latin-regular.eot?#iefix')\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/roboto-v30-latin-regular.woff2') format('woff2'),\n    /* Super Modern Browsers */ url('../fonts/roboto-v30-latin-regular.woff')\n      format('woff'),\n    /* Modern Browsers */ url('../fonts/roboto-v30-latin-regular.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url('../fonts/roboto-v30-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */\n}\n\nhtml {\n  min-height: 100%;\n}\n\nbody {\n  min-height: 100%;\n}\n\n.content {\n  min-height: 100%;\n  font-family: 'Roboto', sans-serif;\n}\n\n.shipGrid {\n  position: relative;\n}\n\n.block {\n  background: white;\n  width: 42px;\n  height: 42px;\n  border: none;\n  position: absolute;\n}\n\n.hitBlock {\n  background: pink;\n}\n\n.cursotBlock {\n  background: green;\n}\n\n.missBlock {\n  background: var(--missBlue);\n}\n\n.sectionScreen {\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n\n  position: fixed;\n\n  display: flex;\n\n  justify-content: center;\n  align-items: center;\n}\n\n.shipTitle {\n  font-family: 'Azeret Mono', monospace;\n}\n\n.shipText {\n  margin: 10px;\n}\n\n.shipSelection {\n  padding: 10px;\n  color: white;\n  background: var(--darkBlack);\n  display: flex;\n  width: 440px;\n  flex-direction: column;\n  align-items: center;\n}\n\n.rotateImage {\n  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(87deg)\n    brightness(100%);\n}\n\n.rotateButton:hover {\n  background: var(--darkBlack);\n  cursor: pointer;\n}\n\n.rotateButton {\n  background: var(--darkGray);\n  border: 1px solid white;\n  margin: 10px;\n  height: 50px;\n  width: 50px;\n  line-height: 50px;\n  text-align: center;\n}\n\n.shipGrid {\n  width: 420px;\n  height: 420px;\n  background: var(--darkGray);\n  border: 1px solid;\n  padding: 0;\n  margin: 0;\n}\n\n.overlay {\n  background: rgba(39, 39, 39, 0.574);\n  z-index: 1;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n}\n\n.content {\n  background: rgb(2, 4, 8);\n}\n\n.mainSection {\n  min-height: 90vh;\n  color: white;\n  position: relative;\n}\n\n.mainTitle {\n  text-align: center;\n  height: 10vh;\n  line-height: 10vh;\n  background: var(--darkGray);\n}\n\n.centerSection {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n\n  justify-content: center;\n\n  align-items: center;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px;\n}\n\n.grid {\n  width: 420px;\n  height: 420px;\n  position: relative;\n  background: var(--darkGray);\n  border: 1px solid white;\n}\n.shipOverlay {\n  width: 420px;\n  height: 420px;\n\n  border: 1px solid blue;\n\n  position: fixed;\n  z-index: 3;\n}\n\n.stats {\n  display: flex;\n  width: 420px;\n  justify-content: space-around;\n  margin: 20px;\n}\n\n.footer {\n  background: var(--darkGray);\n  height: 10vh;\n  color: white;\n  word-wrap: break-word;\n  font-size: small;\n  line-height: 10vh;\n  text-align: center;\n}\n\n.mainTitle h1 {\n  font-family: 'Azeret Mono', monospace;\n}\n\n@media only screen and (max-width: 600px) {\n  .footer {\n    font-size: small;\n  }\n}\n\n@media only screen and (max-width: 960px) {\n  .grid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipGrid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipOverlay {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipSelection {\n    width: 310px;\n  }\n\n  .footer {\n    font-size: x-small;\n  }\n\n  .block {\n    width: 30px;\n    height: 30px;\n  }\n\n  .stats {\n    width: 300px;\n  }\n}\n\n@media only screen and (max-width: 470px) {\n  .grid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipGrid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipOverlay {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipSelection {\n    width: 220px;\n  }\n\n  .shipText {\n    font-size: medium;\n  }\n\n  .boardTitle {\n    font-size: medium;\n  }\n\n  .block {\n    width: 21px;\n    height: 21px;\n  }\n  .footer {\n    font-size: x-small;\n  }\n\n  .stats {\n    width: 210px;\n  }\n}\n\n@media only screen and (max-width: 365px) {\n  .footer {\n    font-size: xx-small;\n  }\n  .footer {\n    font-size: 8px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .grid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .footer {\n    font-size: 6px;\n  }\n\n  .shipOverlay {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipGrid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipSelection {\n    width: 160px;\n  }\n\n  .block {\n    width: 15px;\n    height: 15px;\n  }\n\n  .shipText {\n    font-size: small;\n  }\n\n  .shipTitle {\n    font-size: medium;\n  }\n\n  .stats {\n    width: 150px;\n    font-size: 12px;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFdBQVcsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0s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QUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3Bvc2l0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wcmFjdGljYWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3VpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZXMvc3R5bGVzLmNzcyc7XG5cbmltcG9ydCBVaSBmcm9tICcuL3NjcmlwdHMvdWkuanMnO1xuXG5jb25zdCBjdXJyZW50VWkgPSBVaSgpO1xuXG5jdXJyZW50VWkuYWN0aXZhdGVVaSgpO1xuIiwiaW1wb3J0IHJlZnJlc2hpbmdMb2dvIGZyb20gJy4uL2ltYWdlcy9yZWZyZXNoTG9nby5zdmcnO1xuXG5jb25zdCBEb20gPSAoKSA9PiB7XG4gIGNvbnN0IGdldEVsZW1lbnRzID0gKCkgPT4gKHtcbiAgICBvdmVybGF5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpLFxuICAgIHNlY3Rpb25TY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uU2NyZWVuJyksXG4gICAgc2hpcFRleHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwVGV4dCcpLFxuICAgIHNoaXBHcmlkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcEdyaWQnKSxcbiAgICBzaGlwTGF5ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwTGF5ZXInKSxcbiAgICByb3RhdGVCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGVCdXR0b24nKSxcbiAgICBncmlkczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZCcpKSxcbiAgICBoaXRzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaXRzJykpLFxuICAgIG1pc3NlczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWlzc2VzJykpLFxuICAgIHBsYXllckdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJHcmlkJyksXG4gICAgcGxheWVySGl0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckhpdHMnKSxcbiAgICBwbGF5ZXJNaXNzZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJNaXNzZXMnKSxcbiAgICBjb21wdXRlckdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlckdyaWQnKSxcbiAgICBjb21wdXRlckhpdHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlckhpdHMnKSxcbiAgICBjb21wdXRlck1pc3NlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyTWlzc2VzJyksXG4gICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKSxcbiAgfSk7XG5cbiAgY29uc3QgZ2V0UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gYCAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25TY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwU2VsZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInNoaXBUaXRsZVwiPkJBVFRMRVNISVA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJzaGlwVGV4dFwiPlBsYWNlIHlvdXIgQmF0dGxlc2hpcDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwTGF5ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcE92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcEdyaWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm90YXRlQnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3RhdGVJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIke3JlZnJlc2hpbmdMb2dvfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJSb3RhdGUgSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWFpbiBjbGFzcz1cIm1haW5TZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblRpdGxlXCI+PGgxPkJBVFRMRVNISVA8L2gxPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlclNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllckJvYXJkIGJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYm9hcmRUaXRsZVwiPlBsYXllciBCb2FyZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllckdyaWQgZ3JpZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXJTdGF0cyBzdGF0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicGxheWVySGl0cyBoaXRzXCI+SGl0cyAwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInBsYXllck1pc3NlcyBtaXNzZXNcIj5NaXNzZXMgMDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wdXRlckJvYXJkIGJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYm9hcmRUaXRsZVwiPkNvbXB1dGVyIEJvYXJkPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wdXRlckdyaWQgZ3JpZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wdXRlclN0YXRzIHN0YXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjb21wdXRlckhpdHMgaGl0c1wiPkhpdHMgMDwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvbXB1dGVyTWlzc2VzIG1pc3Nlc1wiPk1pc3NlcyAwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY29weXJpZ2h0TWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJzaXRlIGFuZCBjb2RlIGFyZSBtYWRlIGJ5IEJyYXlkZW4gR3JvdGVndXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0UGFnZSwgZ2V0RWxlbWVudHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvbTtcbiIsImltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5pbXBvcnQgUHJhY3RpY2FsIGZyb20gJy4vcHJhY3RpY2FsLmpzJztcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG4gIGNvbnN0IHNoaXAgPSBTaGlwKCk7XG4gIGNvbnN0IHByYWN0aWNhbCA9IFByYWN0aWNhbCgpO1xuXG4gIGxldCBjdXJyZW50U2hpcHMgPSBbXTtcbiAgbGV0IGhpdHMgPSBbXTtcbiAgbGV0IG1pc3NlcyA9IFtdO1xuXG4gIGNvbnN0IHJhbmRvbWl6ZSA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICBjb25zdCByYW5kb21BeGlzID0gKCkgPT4ge1xuICAgIGNvbnN0IGF4aWVzID0gWyd4JywgJ3knXTtcbiAgICByZXR1cm4gYXhpZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXhpZXMubGVuZ3RoKV07XG4gIH07XG5cbiAgY29uc3QgcGxhY2VBbGxTaGlwcyA9IChzaGlwc0FycmF5KSA9PiB7XG4gICAgY3VycmVudFNoaXBzID0gc2hpcHNBcnJheTtcbiAgICByZXR1cm4gY3VycmVudFNoaXBzO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmVTaGlwc0FycmF5ID0gKGxhdGVzdFNoaXBzQXJyYXksIHNoaXBzKSA9PiB7XG4gICAgbGV0IHNoaXBzRG9Db2xsaWRlID0gZmFsc2U7XG4gICAgLy8gY29uc29sZS5sb2cobGF0ZXN0U2hpcHNBcnJheSwgJ3RoZSBjdXJyZWVudCBzaGlwcyBhcnJheScpO1xuICAgIC8vIGNvbnNvbGUubG9nKHNoaXBzLCAndGhlIGN1cnJlbnQgc2hpcHMnKTtcblxuICAgIGxhdGVzdFNoaXBzQXJyYXkuZm9yRWFjaCgobGF0ZXN0U2hpcHMpID0+IHtcbiAgICAgIGxhdGVzdFNoaXBzLmZvckVhY2goKGJvYXQpID0+IHtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgobGF0ZXN0Qm9hdCkgPT4ge1xuICAgICAgICAgIGlmIChwb3NpdGlvbi5jb21wYXJlUG9zaXRpb24oYm9hdCwgbGF0ZXN0Qm9hdCkpIHtcbiAgICAgICAgICAgIHNoaXBzRG9Db2xsaWRlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2hpcHNEb0NvbGxpZGU7XG4gIH07XG5cbiAgY29uc3QgcGxheWVyUGxhY2VTaGlwID0gKGxvY2F0aW9uLCBheGlzKSA9PiB7XG4gICAgY29uc3QgbGF0ZXN0UG9zaXRpb24gPSBsb2NhdGlvbjtcbiAgICBjb25zdCBjdXJyZW50QXJyYXkgPSBwcmFjdGljYWwuY29weUFycmF5KGN1cnJlbnRTaGlwcyk7XG5cbiAgICBsZXQgc2hpcGxlbmd0aCA9IDUgLSBjdXJyZW50QXJyYXkubGVuZ3RoO1xuXG4gICAgaWYgKHNoaXBsZW5ndGggPT09IDIpIHNoaXBsZW5ndGggPSAzO1xuICAgIGlmIChzaGlwbGVuZ3RoID09PSAxKSBzaGlwbGVuZ3RoID0gMjtcblxuICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gc2hpcC5jcmVhdGVTaGlwKGxhdGVzdFBvc2l0aW9uLCBzaGlwbGVuZ3RoLCBheGlzKTtcblxuICAgIGNvbnN0IGlzQ29sbGlkZWQgPSBjb21wYXJlU2hpcHNBcnJheShjdXJyZW50QXJyYXksIGN1cnJlbnRTaGlwKTtcblxuICAgIGlmICghaXNDb2xsaWRlZCAmJiAhY3VycmVudEFycmF5Lmxlbmd0aCA9PT0gNSAmJiAhY3VycmVudFNoaXApIHtcbiAgICAgIGN1cnJlbnRBcnJheS5wdXNoKGN1cnJlbnRTaGlwKTtcbiAgICAgIGN1cnJlbnRTaGlwcyA9IGN1cnJlbnRBcnJheTtcbiAgICAgIHJldHVybiBjdXJyZW50QXJyYXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRBcnJheTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVJhbmRvbVNoaXBzID0gKGxlbmd0aCwgc2hpcHNBcnJheSwgcmFuZG9taXplciwgcmFuZG9tQXhpZXMpID0+IHtcbiAgICBjb25zdCBsYXRlc3RTaGlwc0FycmF5ID0gc2hpcHNBcnJheTtcbiAgICBsZXQgbGF0ZXN0TGVuZ3RoID0gbGVuZ3RoO1xuICAgIGNvbnN0IHJhbmRvbVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24ocmFuZG9taXplcigpLCByYW5kb21pemVyKCkpO1xuICAgIGNvbnN0IHJhbmRvbVNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAoXG4gICAgICByYW5kb21Qb3NpdGlvbixcbiAgICAgIGxhdGVzdExlbmd0aCxcbiAgICAgIHJhbmRvbUF4aWVzKClcbiAgICApO1xuXG4gICAgaWYgKHJhbmRvbVNoaXApIHtcbiAgICAgIGNvbnN0IHNoaXBDb2xsaWRlcyA9IGNvbXBhcmVTaGlwc0FycmF5KGxhdGVzdFNoaXBzQXJyYXksIHJhbmRvbVNoaXApO1xuICAgICAgaWYgKCFzaGlwQ29sbGlkZXMpIHtcbiAgICAgICAgaWYgKGxhdGVzdExlbmd0aCA+IDIpIGxhdGVzdExlbmd0aCAtPSAxO1xuICAgICAgICBpZiAoc2hpcHNBcnJheS5sZW5ndGggPCA1KSBsYXRlc3RTaGlwc0FycmF5LnB1c2gocmFuZG9tU2hpcCk7XG5cbiAgICAgICAgaWYgKHNoaXBzQXJyYXkubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgcmV0dXJuIGxhdGVzdFNoaXBzQXJyYXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGxhY2VSYW5kb21TaGlwcyhcbiAgICAgIGxhdGVzdExlbmd0aCxcbiAgICAgIGxhdGVzdFNoaXBzQXJyYXksXG4gICAgICByYW5kb21pemVyLFxuICAgICAgcmFuZG9tQXhpZXNcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcHNSYW5kb21seSA9IChyYW5kb21pemVyLCByYW5kb21BeGllcykgPT4ge1xuICAgIGNvbnN0IHNoaXBzQXJyYXkgPSBwbGFjZVJhbmRvbVNoaXBzKDUsIFtdLCByYW5kb21pemVyLCByYW5kb21BeGllcyk7XG4gICAgY3VycmVudFNoaXBzID0gc2hpcHNBcnJheTtcblxuICAgIHJldHVybiBzaGlwc0FycmF5O1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja1NoaXAgPSAobGF0ZXN0UG9zaXRpb24sIHNoaXBzLCBjdXJyZW50SGl0cywgY3VycmVudE1pc3NlcykgPT4ge1xuICAgIGxldCBpc0hpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGxhdGVzdFNoaXBzQXJyYXkgPSBbXTtcbiAgICBjb25zdCBsYXRlc3RIaXRzID0gY3VycmVudEhpdHM7XG4gICAgY29uc3QgbGF0ZXN0TWlzc2VzID0gY3VycmVudE1pc3NlcztcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXBBcnJheSkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uc0FycmF5ID0gcHJhY3RpY2FsLmNvcHlBcnJheShzaGlwQXJyYXkpO1xuICAgICAgY29uc3QgaGl0ID0gc2hpcC5oaXQocG9zaXRpb25zQXJyYXksIGxhdGVzdFBvc2l0aW9uKTtcblxuICAgICAgaWYgKGhpdC5oaXRBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaXNIaXQgPSB0cnVlO1xuICAgICAgICBwb3NpdGlvbnNBcnJheSA9IGhpdC5zaGlwQXJyYXlzO1xuICAgICAgICBsYXRlc3RIaXRzLnB1c2goaGl0LmhpdEFycmF5WzBdKTtcbiAgICAgIH1cbiAgICAgIGxhdGVzdFNoaXBzQXJyYXkucHVzaChwb3NpdGlvbnNBcnJheSk7XG4gICAgfSk7XG4gICAgaWYgKCFpc0hpdCkgbGF0ZXN0TWlzc2VzLnB1c2gobGF0ZXN0UG9zaXRpb24pO1xuXG4gICAgY29uc3QgZmluYWxPYmplY3QgPSB7XG4gICAgICBpc0hpdCxcbiAgICAgIGxhdGVzdFNoaXBzQXJyYXksXG4gICAgICBsYXRlc3RIaXRzLFxuICAgICAgbGF0ZXN0TWlzc2VzLFxuICAgIH07XG5cbiAgICByZXR1cm4gZmluYWxPYmplY3Q7XG4gIH07XG5cbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChsYXRlc3RQb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF0dGFja1NoaXAobGF0ZXN0UG9zaXRpb24sIGN1cnJlbnRTaGlwcywgaGl0cywgbWlzc2VzKTtcblxuICAgIGN1cnJlbnRTaGlwcyA9IHJlc3VsdC5sYXRlc3RTaGlwc0FycmF5O1xuICAgIGhpdHMgPSByZXN1bHQubGF0ZXN0SGl0cztcbiAgICBtaXNzZXMgPSByZXN1bHQubGF0ZXN0TWlzc2VzO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVSYW5kb21Db29yZHMgPSAocmFuZG9taXplcikgPT4ge1xuICAgIGxldCByYW5kb21Qb3NpdGlvbjtcblxuICAgIGlmIChyYW5kb21pemVyLmlzTW9ja1JhbmRvbSkge1xuICAgICAgcmFuZG9tUG9zaXRpb24gPSByYW5kb21pemVyLmNhbGxSYW5kb21pemVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJhbmRvbVggPSByYW5kb21pemVyKCk7XG4gICAgICBjb25zdCByYW5kb21ZID0gcmFuZG9taXplcigpO1xuICAgICAgcmFuZG9tUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihyYW5kb21YLCByYW5kb21ZKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZG9tUG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyQXR0YWNrID0gKGFycmF5LCBjdXJyZW50QXR0YWNrKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEF0dGFja0FycmF5ID0gYXJyYXkuZmlsdGVyKFxuICAgICAgKGl0ZW0pID0+XG4gICAgICAgIGl0ZW0ueENvb3JkID09PSBjdXJyZW50QXR0YWNrLnhDb29yZCAmJlxuICAgICAgICBpdGVtLnlDb29yZCA9PT0gY3VycmVudEF0dGFjay55Q29vcmRcbiAgICApO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRBdHRhY2tBcnJheTtcbiAgfTtcblxuICBjb25zdCBnZXRUeXBlT2ZQbGFjZWRTaGlwID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50U2hpcHMubGVuZ3RoID09PSA1KSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBzaGlwVHlwZXMgPSBbXG4gICAgICB7IHNoaXBUeXBlOiAnY2FycmllcicsIHNoaXBMZW5ndGg6IDUgfSxcbiAgICAgIHsgc2hpcFR5cGU6ICdiYXR0bGVzaGlwJywgc2hpcExlbmd0aDogNCB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2Rlc3RveWVyJywgc2hpcExlbmd0aDogMyB9LFxuICAgICAgeyBzaGlwVHlwZTogJ3N1Ym1hcmluZScsIHNoaXBMZW5ndGg6IDMgfSxcbiAgICAgIHsgc2hpcFR5cGU6ICdndW5ib2F0Jywgc2hpcExlbmd0aDogMiB9LFxuICAgIF07XG5cbiAgICByZXR1cm4gc2hpcFR5cGVzW2N1cnJlbnRTaGlwcy5sZW5ndGhdO1xuICB9O1xuXG4gIGNvbnN0IHJlY2lldmVSYW5kb21BdHRhY2sgPSAocmFuZG9taXplcikgPT4ge1xuICAgIGNvbnN0IHJhbmRvbVBvc2l0aW9uID0gY3JlYXRlUmFuZG9tQ29vcmRzKHJhbmRvbWl6ZXIpO1xuXG4gICAgY29uc3QgaGFzQmVlbkhpdCA9IGZpbHRlckF0dGFjayhoaXRzLCByYW5kb21Qb3NpdGlvbik7XG4gICAgY29uc3QgaGFzQmVlbk1pc3MgPSBmaWx0ZXJBdHRhY2sobWlzc2VzLCByYW5kb21Qb3NpdGlvbik7XG5cbiAgICBpZiAoaGFzQmVlbkhpdC5sZW5ndGggPiAwIHx8IGhhc0JlZW5NaXNzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiByZWNpZXZlUmFuZG9tQXR0YWNrKHJhbmRvbWl6ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVjaWV2ZUF0dGFjayhyYW5kb21Qb3NpdGlvbik7XG4gIH07XG5cbiAgY29uc3QgaXNBbGxTdW5rID0gKCkgPT4ge1xuICAgIGxldCBoYXNTdW5rZWQgPSB0cnVlO1xuICAgIGN1cnJlbnRTaGlwcy5mb3JFYWNoKChzaGlwcykgPT4ge1xuICAgICAgaWYgKCFzaGlwLmlzU3VuayhzaGlwcykpIHtcbiAgICAgICAgaGFzU3Vua2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaGFzU3Vua2VkO1xuICB9O1xuXG4gIGNvbnN0IGdldFZhbHVlcyA9ICgpID0+ICh7XG4gICAgY3VycmVudFNoaXBzLFxuICAgIGhpdHMsXG4gICAgbWlzc2VzLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGF0dGFja1NoaXAsXG4gICAgcmVjaWV2ZUF0dGFjayxcbiAgICBpc0FsbFN1bmssXG4gICAgcGxhY2VTaGlwc1JhbmRvbWx5LFxuICAgIHBsYXllclBsYWNlU2hpcCxcbiAgICBwbGFjZUFsbFNoaXBzLFxuICAgIHJhbmRvbWl6ZSxcbiAgICByZWNpZXZlUmFuZG9tQXR0YWNrLFxuICAgIHJhbmRvbUF4aXMsXG4gICAgZ2V0VmFsdWVzLFxuICAgIGdldFR5cGVPZlBsYWNlZFNoaXAsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5cbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uLmpzJztcblxuY29uc3QgR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBwbGF5ZXJDaGVja0JvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuXG4gIGNvbnN0IHNoaXAgPSBTaGlwKCk7XG5cbiAgY29uc3QgcmFuZG9taXplciA9IGNvbXB1dGVyQm9hcmQucmFuZG9taXplO1xuICBjb25zdCByYW5kb21BeGllcyA9IGNvbXB1dGVyQm9hcmQucmFuZG9tQXhpcztcblxuICBjb25zdCBjaGVja1NldHVwID0gKHBsYXllckNoZWNrU2hpcHMpID0+IHtcbiAgICBpZiAocGxheWVyQ2hlY2tTaGlwcy5sZW5ndGggPT09IDUpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBzZXR1cEdhbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQ2hlY2tWYWx1ZXMgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpO1xuXG4gICAgaWYgKCFjaGVja1NldHVwKHBsYXllckNoZWNrVmFsdWVzLmN1cnJlbnRTaGlwcykpIHJldHVybiBmYWxzZTtcblxuICAgIHBsYXllckJvYXJkLnBsYWNlQWxsU2hpcHMocGxheWVyQ2hlY2tWYWx1ZXMuY3VycmVudFNoaXBzKTtcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcHNSYW5kb21seShyYW5kb21pemVyLCByYW5kb21BeGllcyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrQm9hdHMgPSAoY29vcmRzKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQ2hlY2tWYWx1ZXMgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpO1xuXG4gICAgaWYgKCFjaGVja1NldHVwKHBsYXllckNoZWNrVmFsdWVzLmN1cnJlbnRTaGlwcykpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbXB1dGVyQm9hcmQucmVjaWV2ZUF0dGFjayhjb29yZHMpO1xuICAgIHBsYXllckJvYXJkLnJlY2lldmVSYW5kb21BdHRhY2socmFuZG9taXplcik7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBzZXR1cFNoaXAgPSAobG9jYXRpb24sIGF4aXMpID0+XG4gICAgcGxheWVyQ2hlY2tCb2FyZC5wbGF5ZXJQbGFjZVNoaXAobG9jYXRpb24sIGF4aXMpO1xuXG4gIGNvbnN0IGdhbWVJc092ZXIgPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyQm9hcmRWYWx1ZXMuY3VycmVudFNoaXBzLCAndGhlIGN1cnJlbnQgc2hpcHMnKTtcblxuICAgIGlmIChjb21wdXRlckJvYXJkLmlzQWxsU3VuaygpKSB7XG4gICAgICByZXR1cm4geyBtZXNzYWdlOiAnWW91IFdvbicsIGdhbWVGaW5pc2hlZDogdHJ1ZSB9O1xuICAgIH1cblxuICAgIGlmIChwbGF5ZXJCb2FyZC5pc0FsbFN1bmsoKSkge1xuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ1lvdSBMb3N0JywgZ2FtZUZpbmlzaGVkOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiB7IGdhbWVGaW5pc2hlZDogZmFsc2UgfTtcbiAgfTtcblxuICBjb25zdCBhcnJhbmdlQmxvY2tzID0gKG1vdXNlUG9zaXRpb24sIGN1cnJlbnRSb3RhdGlvbikgPT4ge1xuICAgIGNvbnN0IHNoaXBUeXBlT2JqZWN0ID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRUeXBlT2ZQbGFjZWRTaGlwKCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwVHlwZU9iamVjdCwgJ3RoZSBzaGlwIHR5cGUgb2JqZWN0Jyk7XG4gICAgLy8gY29uc29sZS5sb2cobW91c2VQb3NpdGlvbiwgJ3RoZSBtb3VzZSBwb3NpdGlvbicpO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRSb3RhdGlvbiwgJ3RoZSBjdXJyZW50IHJvdGF0aW9uJyk7XG5cbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXAuY3JlYXRlU2hpcChcbiAgICAgIG1vdXNlUG9zaXRpb24sXG4gICAgICBzaGlwVHlwZU9iamVjdC5zaGlwTGVuZ3RoLFxuICAgICAgY3VycmVudFJvdGF0aW9uXG4gICAgKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50U2hpcCwgJ3RoZSBtb3N0IHVwIHRvIGRhdGUgc2hpcHMnKTtcblxuICAgIHJldHVybiBjdXJyZW50U2hpcDtcbiAgfTtcblxuICBjb25zdCBnZXRHYW1lVmFsdWVzID0gKCkgPT4gKHtcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBjb21wdXRlckJvYXJkLFxuICAgIHBsYXllckNoZWNrQm9hcmQsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgY2hlY2tTZXR1cCxcbiAgICBhdHRhY2tCb2F0cyxcbiAgICBzZXR1cEdhbWUsXG4gICAgZ2FtZUlzT3ZlcixcbiAgICBzZXR1cFNoaXAsXG4gICAgZ2V0R2FtZVZhbHVlcyxcbiAgICBhcnJhbmdlQmxvY2tzLFxuICB9O1xufTtcblxuY29uc3QgYWN0aXZlR2FtZSA9IEdhbWUoKTtcblxuZXhwb3J0IHsgR2FtZSwgYWN0aXZlR2FtZSB9O1xuIiwiY29uc3QgUG9zaXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVBvc2l0aW9uID0gKHhDb29yZCwgeUNvb3JkKSA9PiAoeyB4Q29vcmQsIHlDb29yZCB9KTtcblxuICBjb25zdCBjaGVja091dE9mQm91bmNlID0gKG5ld1Bvc2l0aW9uKSA9PiB7XG4gICAgaWYgKG5ld1Bvc2l0aW9uLnhDb29yZCA+IDkgfHwgbmV3UG9zaXRpb24ueUNvb3JkID4gOSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKG5ld1Bvc2l0aW9uLnhDb29yZCA8IDAgfHwgbmV3UG9zaXRpb24ueUNvb3JkIDwgMCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGFkZFBvc2l0aW9uID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uMSA9PT0gZmFsc2UgfHwgcG9zaXRpb24yID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBjcmVhdGVQb3NpdGlvbihwb3NpdGlvbjEueENvb3JkLCBwb3NpdGlvbjEueUNvb3JkKTtcbiAgICBuZXdQb3NpdGlvbi54Q29vcmQgKz0gcG9zaXRpb24yLnhDb29yZDtcbiAgICBuZXdQb3NpdGlvbi55Q29vcmQgKz0gcG9zaXRpb24yLnlDb29yZDtcblxuICAgIGlmIChjaGVja091dE9mQm91bmNlKG5ld1Bvc2l0aW9uKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IG11bHRpcGx5UG9zaXRpb24gPSAocG9zaXRpb24xLCBwb3NpdGlvbjIpID0+IHtcbiAgICBpZiAocG9zaXRpb24xID09PSBmYWxzZSB8fCBwb3NpdGlvbjIgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGNyZWF0ZVBvc2l0aW9uKHBvc2l0aW9uMS54Q29vcmQsIHBvc2l0aW9uMS55Q29vcmQpO1xuICAgIG5ld1Bvc2l0aW9uLnhDb29yZCAqPSBwb3NpdGlvbjIueENvb3JkO1xuICAgIG5ld1Bvc2l0aW9uLnlDb29yZCAqPSBwb3NpdGlvbjIueUNvb3JkO1xuXG4gICAgaWYgKGNoZWNrT3V0T2ZCb3VuY2UobmV3UG9zaXRpb24pKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gbmV3UG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbCA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgYXhpcykgPT4ge1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSArIDEpIHJldHVybiB0cnVlO1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHBvc2l0aW9uMVtheGlzXSA9PT0gcG9zaXRpb24yW2F4aXNdIC0gMSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmVQb3NpdGlvbiA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMikgPT4ge1xuICAgIGlmICghY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgJ3hDb29yZCcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgJ3lDb29yZCcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlUG9zaXRpb24sXG4gICAgYWRkUG9zaXRpb24sXG4gICAgbXVsdGlwbHlQb3NpdGlvbixcbiAgICBjb21wYXJlUG9zaXRpb24sXG4gICAgY2hlY2tPdXRPZkJvdW5jZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc2l0aW9uO1xuIiwiY29uc3QgUHJhY3RpY2FsID0gKCkgPT4ge1xuICBjb25zdCBjb3B5QXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgICBjb25zdCBuZXdBcnJheSA9IFtdO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgbmV3QXJyYXkucHVzaChpdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdBcnJheTtcbiAgfTtcblxuICBjb25zdCBpc09iamVjdCA9IChjdXJyZW50T2JqZWN0KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50T2JqZWN0ID09PSAnb2JqZWN0JyAmJiBjdXJyZW50T2JqZWN0ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrT2JqZWN0ID0gKG9iamVjdDEsIG9iamVjdDIpID0+IHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBzZWNvbmRJbmRleCA9IDA7XG5cbiAgICBsZXQgb2JqZWN0SXNFcXVhbCA9IHRydWU7XG5cbiAgICBjb25zdCBjdXJyZW50T2JqZWN0ID0gb2JqZWN0MTtcbiAgICBjb25zdCBjdXJyZW50T2JqZWN0MiA9IG9iamVjdDI7XG5cbiAgICBjb25zdCBjdXJyZW50T2JqZWN0VmFsdWVzID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50T2JqZWN0KTtcbiAgICBjb25zdCBjdXJyZW50T2JqZWN0MlZhbHVlcyA9IE9iamVjdC52YWx1ZXMoY3VycmVudE9iamVjdDIpO1xuXG4gICAgY29uc3Qgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKGN1cnJlbnRPYmplY3QpO1xuICAgIGNvbnN0IG9iamVjdEtleXMyID0gT2JqZWN0LmtleXMoY3VycmVudE9iamVjdDIpO1xuXG4gICAgb2JqZWN0S2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChrZXkgIT09IG9iamVjdEtleXMyW2luZGV4XSkgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgaW5kZXggKz0gMTtcbiAgICB9KTtcblxuICAgIGlmICghb2JqZWN0SXNFcXVhbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChvYmplY3RLZXlzLmxlbmd0aCAhPT0gb2JqZWN0S2V5czIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50T2JqZWN0LCAndGhlIGN1cnJlbnQgb2JqZWN0Jyk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudE9iamVjdDIsICd0aGUgY3VycmVudCBvYmplY3QyJyk7XG5cbiAgICBjdXJyZW50T2JqZWN0VmFsdWVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0yID0gY3VycmVudE9iamVjdDJWYWx1ZXNbc2Vjb25kSW5kZXhdO1xuXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkgJiYgaXNPYmplY3QoaXRlbTIpKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrT2JqZWN0Qm9vbCA9IGNoZWNrT2JqZWN0KGl0ZW0sIGl0ZW0yKTtcblxuICAgICAgICBpZiAoIWNoZWNrT2JqZWN0Qm9vbCkgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChpdGVtICE9PSBpdGVtMikge1xuICAgICAgICBvYmplY3RJc0VxdWFsID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHNlY29uZEluZGV4ICs9IDE7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqZWN0SXNFcXVhbDtcbiAgfTtcblxuICByZXR1cm4geyBjb3B5QXJyYXksIGNoZWNrT2JqZWN0IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmFjdGljYWw7XG4iLCJpbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5cbmNvbnN0IFNoaXAgPSAoKSA9PiB7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcblxuICBjb25zdCBnZXRBZGRlZFBvc2l0aW9uID0gKGF4aXMpID0+IHtcbiAgICBsZXQgYWRkZWRQb3NpdGlvbjtcblxuICAgIGlmIChheGlzID09PSAneCcpIGFkZGVkUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbigxLCAwKTtcbiAgICBlbHNlIGFkZGVkUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbigwLCAxKTtcblxuICAgIHJldHVybiBhZGRlZFBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVNoaXAgPSAocG9zaXRpb24xLCBsZW5ndGgxLCBheGlzKSA9PiB7XG4gICAgaWYgKGxlbmd0aDEgPT09IDAgfHwgbGVuZ3RoMSA+IDUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocG9zaXRpb24uY2hlY2tPdXRPZkJvdW5jZShwb3NpdGlvbjEpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBwb3B1bGF0ZVNoaXBzID0gKGN1cnJlbnRQb3NpdGlvbiwgbGF0ZXN0TGVuZ3RoLCBsYXRlc3RBcnJheSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudEFycmF5ID0gbGF0ZXN0QXJyYXk7XG4gICAgICBsZXQgbmV3UG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb247XG5cbiAgICAgIGlmIChjdXJyZW50UG9zaXRpb24gPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAobGF0ZXN0TGVuZ3RoID09PSAwKSByZXR1cm4gY3VycmVudEFycmF5O1xuICAgICAgaWYgKGxhdGVzdExlbmd0aCA9PT0gbGVuZ3RoMSkge1xuICAgICAgICBjdXJyZW50QXJyYXkucHVzaChjdXJyZW50UG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhjdXJyZW50UG9zaXRpb24sIGxhdGVzdExlbmd0aCAtIDEsIGN1cnJlbnRBcnJheSk7XG4gICAgICB9XG4gICAgICBjb25zdCBhZGRlZFBvc2l0aW9uID0gZ2V0QWRkZWRQb3NpdGlvbihheGlzKTtcbiAgICAgIG5ld1Bvc2l0aW9uID0gcG9zaXRpb24uYWRkUG9zaXRpb24obmV3UG9zaXRpb24sIGFkZGVkUG9zaXRpb24pO1xuXG4gICAgICBpZiAoIW5ld1Bvc2l0aW9uKSByZXR1cm4gbmV3UG9zaXRpb247XG4gICAgICBjdXJyZW50QXJyYXkucHVzaChuZXdQb3NpdGlvbik7XG5cbiAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gY3VycmVudEFycmF5Lmxlbmd0aCAtIDE7XG5cbiAgICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKFxuICAgICAgICBjdXJyZW50QXJyYXlbYXJyYXlMZW5ndGhdLFxuICAgICAgICBsYXRlc3RMZW5ndGggLSAxLFxuICAgICAgICBjdXJyZW50QXJyYXlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKHBvc2l0aW9uMSwgbGVuZ3RoMSwgW10sIGZhbHNlKTtcbiAgfTtcblxuXG5cbiAgY29uc3QgaXNTdW5rID0gKHNoaXBBcnJheSkgPT4ge1xuICAgIGlmIChzaGlwQXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaGl0ID0gKHBvc2l0aW9uc0FycmF5LCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGhpdEFycmF5ID0gcG9zaXRpb25zQXJyYXkuZmlsdGVyKChwb3MpID0+IHtcbiAgICAgIGlmIChwb3MueENvb3JkID09PSBwb3NpdGlvbi54Q29vcmQgJiYgcG9zLnlDb29yZCA9PT0gcG9zaXRpb24ueUNvb3JkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGNvbnN0IHNoaXBBcnJheXMgPSBwb3NpdGlvbnNBcnJheS5maWx0ZXIoKHBvcykgPT4ge1xuICAgICAgaWYgKHBvcy54Q29vcmQgPT09IHBvc2l0aW9uLnhDb29yZCAmJiBwb3MueUNvb3JkID09PSBwb3NpdGlvbi55Q29vcmQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBoaXRBcnJheSwgc2hpcEFycmF5cyB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlU2hpcCxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCBEb20gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCB7IGFjdGl2ZUdhbWUgfSBmcm9tICcuL21haW4uanMnO1xuXG5jb25zdCBVaSA9ICgpID0+IHtcbiAgY29uc3QgZG9tID0gRG9tKCk7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcblxuICBjb25zdCByZW5kZXJTcGVlZCA9IDE7XG5cbiAgY29uc3QgYmxvY2tTaXplID0gNDI7XG5cbiAgbGV0IHBsYWNlZFNoaXAgPSBmYWxzZTtcbiAgbGV0IGF4aXMgPSAneSc7XG5cbiAgbGV0IG1vdXNlQmxvY2tMb2NhdGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IGNyZWF0ZURvbUVsZW1lbnQgPSAoZWxlbWVudE5hbWUpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xuXG4gIGNvbnN0IGdldE1vdXNlUG9zaXRpb24gPSAob2Zmc2V0WCwgb2Zmc2V0WSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKG9mZnNldFgsIG9mZnNldFksICdvZmZzZXQgeCBhbmQgb2Zmc2V0IHknKTtcblxuICAgIGNvbnN0IHhDb29yZCA9IE1hdGguZmxvb3Iob2Zmc2V0WCAvIGJsb2NrU2l6ZSk7XG4gICAgY29uc3QgeUNvb3JkID0gTWF0aC5mbG9vcihvZmZzZXRZIC8gYmxvY2tTaXplKTtcblxuICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbih4Q29vcmQsIHlDb29yZCk7XG5cbiAgICBpZiAoeENvb3JkIDwgMCB8fCB5Q29vcmQgPCAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gbW91c2VQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBmaW5kTW91c2VQb3NpdGlvbiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRNb3VzZVBvc2l0aW9uID0gZ2V0TW91c2VQb3NpdGlvbihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcblxuICAgIG1vdXNlQmxvY2tMb2NhdGlvbiA9IGN1cnJlbnRNb3VzZVBvc2l0aW9uO1xuXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudE1vdXNlUG9zaXRpb24sICd0aGUgY3VycmVudCBtb3VzZSBwb3NpdGlvbicpO1xuICB9O1xuXG4gIC8vIHdvdGsgb24gdGhpcyBmdW5jdGlvblxuICBjb25zdCBmaW5kVG91Y2hQb3NpdGlvbiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgdG91Y2hPZmZzZXRYID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICBjb25zdCB0b3VjaE9mZnNldFkgPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIC0gcmVjdC50b3A7XG5cbiAgICBjb25zdCB0b3VjaFBvc2l0aW9uID0gZ2V0TW91c2VQb3NpdGlvbih0b3VjaE9mZnNldFgsIHRvdWNoT2Zmc2V0WSk7XG4gICAgbW91c2VCbG9ja0xvY2F0aW9uID0gdG91Y2hQb3NpdGlvbjtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgLy8gYmxvY2sgc2l6ZSBtYXRjaGVzIHRoZSBzaXplIGdyaWRzaXplIG9mIHRoZSBtZWRpYSBxdWVyeSBkaXZpZGVkIGJ5IDEwXG4gIGNvbnN0IGNoYW5nZUJsb2NrU2l6ZSA9IChtYXRjaE1lZGlhKSA9PiB7XG4gICAgbGV0IGJsb2NrU2l6ZSA9IDQyO1xuICAgIGlmIChtYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA5NjBweCknKS5tYXRjaGVzKSBibG9ja1NpemUgPSAzMDtcbiAgICBpZiAobWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNDcwcHgpJykubWF0Y2hlcykgYmxvY2tTaXplID0gMjE7XG4gICAgaWYgKG1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDMyMHB4KScpLm1hdGNoZXMpIGJsb2NrU2l6ZSA9IDE1O1xuICAgIHJldHVybiBibG9ja1NpemU7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhtYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAzMjBweCknKSwgJ3RoZSBjdXJyZW50IG1hdGNoIG1lZGlhJyk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQmxvY2tFbGVtZW50ID0gKGJsb2NrQ2xhc3MsIGNyZWF0ZUJsb2NrKSA9PiB7XG4gICAgbGV0IGxhdGVzdENsYXNzID0gYmxvY2tDbGFzcztcblxuICAgIGlmIChsYXRlc3RDbGFzcyAhPT0gJ2hpdEJsb2NrJyAmJiBsYXRlc3RDbGFzcyAhPT0gJ21pc3NCbG9jaycpIHtcbiAgICAgIGxhdGVzdENsYXNzID0gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgYmxvY2tFbGVtZW50ID0gY3JlYXRlQmxvY2soJ2RpdicpO1xuICAgIGJsb2NrRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdibG9jaycpO1xuICAgIGlmIChsYXRlc3RDbGFzcyAhPT0gJycpIGJsb2NrRWxlbWVudC5jbGFzc0xpc3QuYWRkKGxhdGVzdENsYXNzKTtcblxuICAgIHJldHVybiBibG9ja0VsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgZGlzYWJsZVN0YXJ0ZXJVaSA9ICgpID0+IHRydWU7XG5cbiAgLy8gY29uc3QgcmVuZGVyU2VsZWN0aW9uQmxvY2tzID0gKG1vdXNlUG9zaXRpb24sIGxhdGVzdEJsb2NrU2l6ZSkgPT4ge1xuICAvLyAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAvLyAgIGNvbnN0IGN1cnJlbnRTbmFrZUJsb2NrID0gY3JlYXRlQmxvY2tFbGVtZW50KCk7XG4gIC8vICAgY29uc3QgcmVhbFBvc2l0aW9uWCA9IE1hdGguZmxvb3IobW91c2VQb3NpdGlvbi54Q29vcmQgKiBsYXRlc3RCbG9ja1NpemUpO1xuICAvLyAgIGNvbnN0IHJlYWxQb3NpdGlvblkgPSBNYXRoLmZsb29yKG1vdXNlUG9zaXRpb24ueUNvb3JkICogbGF0ZXN0QmxvY2tTaXplKTtcblxuICAvLyAgIGNvbnNvbGUubG9nKG1vdXNlUG9zaXRpb24sICdUSEUgQ1VSUkVOVCBNT1VTRSBQT1NJVElPTicpO1xuXG4gIC8vICAgY29uc29sZS5sb2cocmVhbFBvc2l0aW9uWCwgJ3RoZSByZWFsIHBvc2l0aW9uIHgnKTtcbiAgLy8gICBjb25zb2xlLmxvZyhyZWFsUG9zaXRpb25ZLCAndGhlIHJlYWwgcG9zaXRpb24geScpO1xuXG4gIC8vICAgY3VycmVudFNuYWtlQmxvY2suc3R5bGUubGVmdCA9IGAke3JlYWxQb3NpdGlvblh9cHhgO1xuICAvLyAgIGN1cnJlbnRTbmFrZUJsb2NrLnN0eWxlLnRvcCA9IGAke3JlYWxQb3NpdGlvbll9cHhgO1xuXG4gIC8vICAgZWxlbWVudC5zaGlwR3JpZC5hcHBlbmRDaGlsZChjdXJyZW50U25ha2VCbG9jayk7XG4gIC8vIH07XG5cbiAgY29uc3QgY3JlYXRlU2hpcEJsb2NrID0gKHNoaXBQb3NpdGlvbiwgbGF0ZXN0QmxvY2tTaXplLCBzaGlwVHlwZSkgPT4ge1xuICAgIGNvbnN0IHNoaXBCbG9jayA9IGNyZWF0ZUJsb2NrRWxlbWVudChzaGlwVHlwZSwgY3JlYXRlRG9tRWxlbWVudCk7XG5cbiAgICBjb25zdCByZWFsUG9zaXRpb25YID0gTWF0aC5mbG9vcihzaGlwUG9zaXRpb24ueENvb3JkICogbGF0ZXN0QmxvY2tTaXplKTtcbiAgICBjb25zdCByZWFsUG9zaXRpb25ZID0gTWF0aC5mbG9vcihzaGlwUG9zaXRpb24ueUNvb3JkICogbGF0ZXN0QmxvY2tTaXplKTtcbiAgICBzaGlwQmxvY2suc3R5bGUubGVmdCA9IGAke3JlYWxQb3NpdGlvblh9cHhgO1xuICAgIHNoaXBCbG9jay5zdHlsZS50b3AgPSBgJHtyZWFsUG9zaXRpb25ZfXB4YDtcblxuICAgIHJldHVybiBzaGlwQmxvY2s7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQWxyZWFkeVBsYWNlZFNoaXBzID0gKHNoaXBHcmlkLCBsYXRlc3RCbG9ja1NpemUpID0+IHtcbiAgICBjb25zdCBnYW1lVmFsdWVzID0gYWN0aXZlR2FtZS5nZXRHYW1lVmFsdWVzKCk7XG4gICAgY29uc3QgY2hlY2tCb2FyZFNoaXBzID1cbiAgICAgIGdhbWVWYWx1ZXMucGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKS5jdXJyZW50U2hpcHM7XG5cbiAgICBjaGVja0JvYXJkU2hpcHMuZm9yRWFjaCgocGxheWVyQ2hlY2tTaGlwcykgPT4ge1xuICAgICAgcGxheWVyQ2hlY2tTaGlwcy5mb3JFYWNoKChib2F0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBCbG9jayA9IGNyZWF0ZVNoaXBCbG9jayhib2F0LCBsYXRlc3RCbG9ja1NpemUpO1xuICAgICAgICBzaGlwR3JpZC5hcHBlbmRDaGlsZChzaGlwQmxvY2spO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUGxhY2VkU2hpcCA9IChsYXRlc3RCbG9ja1NpemUpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgY29uc3QgeyBzaGlwR3JpZCB9ID0gZWxlbWVudDtcblxuICAgIGlmICghcGxhY2VkU2hpcCkgcmV0dXJuIHBsYWNlZFNoaXA7XG5cbiAgICBzaGlwR3JpZC5pbm5lckhUTUwgPSAnJztcblxuICAgIHBsYWNlZFNoaXAuZm9yRWFjaCgoc2hpcFBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzaGlwQmxvY2sgPSBjcmVhdGVTaGlwQmxvY2soc2hpcFBvc2l0aW9uLCBsYXRlc3RCbG9ja1NpemUpO1xuICAgICAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQoc2hpcEJsb2NrKTtcbiAgICB9KTtcblxuICAgIHJlbmRlckFscmVhZHlQbGFjZWRTaGlwcyhzaGlwR3JpZCwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VBeGlzID0gKCkgPT4ge1xuICAgIGlmIChheGlzID09PSAneScpIGF4aXMgPSAneCc7XG4gICAgZWxzZSBheGlzID0gJ3knO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVTaGlwQnlEaXJlY3Rpb24gPSAobW91c2VMb2NhdGlvbiwgY3VycmVudFNoaXAsIGN1cnJlbnRBeGlzKSA9PiB7XG4gICAgbGV0IGxhdGVzdFNoaXAgPSBmYWxzZTtcblxuICAgIGlmIChwb3NpdGlvbi5jaGVja091dE9mQm91bmNlKGN1cnJlbnRTaGlwWzBdKSkgcmV0dXJuIGxhdGVzdFNoaXA7XG5cbiAgICBjb25zdCBuZXdYUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihcbiAgICAgIG1vdXNlTG9jYXRpb24ueENvb3JkLFxuICAgICAgMFxuICAgICkueENvb3JkO1xuXG4gICAgY29uc3QgbmV3WVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICAwLFxuICAgICAgbW91c2VMb2NhdGlvbi55Q29vcmRcbiAgICApLnlDb29yZDtcblxuICAgIGxldCBuZXdTaGlwUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihcbiAgICAgIG5ld1hQb3NpdGlvbixcbiAgICAgIGN1cnJlbnRTaGlwWzBdLnlDb29yZFxuICAgICk7XG5cbiAgICBpZiAoY3VycmVudEF4aXMgPT09ICd4Jykge1xuICAgICAgbmV3U2hpcFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICAgIGN1cnJlbnRTaGlwWzBdLnhDb29yZCxcbiAgICAgICAgbmV3WVBvc2l0aW9uXG4gICAgICApO1xuICAgIH1cblxuICAgIGxhdGVzdFNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAoXG4gICAgICBuZXdTaGlwUG9zaXRpb24sXG4gICAgICBjdXJyZW50U2hpcC5sZW5ndGgsXG4gICAgICBjdXJyZW50QXhpc1xuICAgICk7XG5cbiAgICByZXR1cm4gbGF0ZXN0U2hpcDtcbiAgfTtcblxuICBjb25zdCBwbGFjZVBsYXllclNoaXAgPSAobGF0ZXN0U2hpcCwgbGF0ZXN0QXhpcywgbGF0ZXN0R2FtZSkgPT4ge1xuICAgIGlmIChsYXRlc3RTaGlwKSBsYXRlc3RHYW1lLnNldHVwU2hpcChsYXRlc3RTaGlwWzBdLCBsYXRlc3RBeGlzKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VQbGF5ZXJTaGlwRXZlbnQgPSAoKSA9PiB7XG4gICAgcGxhY2VQbGF5ZXJTaGlwKHBsYWNlZFNoaXAsIGF4aXMsIGFjdGl2ZUdhbWUpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFNoaXBzID0gKHNoaXBzLCBzaGlwVHlwZSwgZ3JpZCwgbGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcEdyb3VwKSA9PiB7XG4gICAgICBzaGlwR3JvdXAuZm9yRWFjaCgoYm9hdCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwRWxlbWVudCA9IGNyZWF0ZVNoaXBCbG9jayhib2F0LCBsYXRlc3RCbG9ja1NpemUsIHNoaXBUeXBlKTtcbiAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChzaGlwRWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJHcmlkcyA9IChibG9ja1NpemUyKSA9PiB7XG4gICAgY29uc3QgZ2FtZVZhbHVlcyA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuXG4gICAgY29uc3QgeyBwbGF5ZXJHcmlkIH0gPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICBjb25zdCB7IGNvbXB1dGVyR3JpZCB9ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBwbGF5ZXJHcmlkLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbXB1dGVyR3JpZC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IHBsYXllckJvYXJkVmFsdWVzID0gZ2FtZVZhbHVlcy5wbGF5ZXJCb2FyZC5nZXRWYWx1ZXMoKTtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkVmFsdWVzID0gZ2FtZVZhbHVlcy5jb21wdXRlckJvYXJkLmdldFZhbHVlcygpO1xuXG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyQm9hcmRWYWx1ZXMsICdwbGF5ZXJCb2FyZFZhbHVlcycpO1xuICAgIC8vIGNvbnNvbGUubG9nKGNvbXB1dGVyQm9hcmRWYWx1ZXMsICdjb21wdXRlckJvYXJkVmFsdWVzJyk7XG5cbiAgICBhZGRTaGlwcyhwbGF5ZXJCb2FyZFZhbHVlcy5jdXJyZW50U2hpcHMsIGZhbHNlLCBwbGF5ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgICBhZGRTaGlwcyhwbGF5ZXJCb2FyZFZhbHVlcy5oaXRzLCAnaGl0QmxvY2snLCBwbGF5ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgICBhZGRTaGlwcyhwbGF5ZXJCb2FyZFZhbHVlcy5taXNzZXMsICdtaXNzQmxvY2snLCBwbGF5ZXJHcmlkLCBibG9ja1NpemUpO1xuXG4gICAgYWRkU2hpcHMoY29tcHV0ZXJCb2FyZFZhbHVlcy5oaXRzLCAnaGl0QmxvY2snLCBjb21wdXRlckdyaWQsIGJsb2NrU2l6ZTIpO1xuICAgIGFkZFNoaXBzKGNvbXB1dGVyQm9hcmRWYWx1ZXMubWlzc2VzLCAnbWlzc0Jsb2NrJywgY29tcHV0ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJHYW1lID0gKGxhdGVzdEJsb2NrU2l6ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZ2FtZVN0YXR1cyA9IGFjdGl2ZUdhbWUuZ2FtZUlzT3ZlcigpO1xuXG4gICAgICByZW5kZXJHcmlkcyhsYXRlc3RCbG9ja1NpemUpO1xuXG4gICAgICBpZiAoIWdhbWVTdGF0dXMuZ2FtZUZpbmlzaGVkKSByZW5kZXJHYW1lKGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgfSwgcmVuZGVyU3BlZWQpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVNoaXBTZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBlbGVtZW50cy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZWxlbWVudHMuc2VjdGlvblNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGVsZW1lbnRzLnNoaXBHcmlkLmlubmVySFRNTCA9ICcnO1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0R2FtZSA9IChsYXRlc3RCbG9ja1NpemUpID0+IHtcbiAgICByZW1vdmVTaGlwU2VjdGlvbigpO1xuICAgIGFjdGl2ZUdhbWUuc2V0dXBHYW1lKCk7XG4gICAgcmVuZGVyR2FtZShsYXRlc3RCbG9ja1NpemUpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclNlbGVjdGlvbkdyaWQgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBnYW1lVmFsdWUgPSBhY3RpdmVHYW1lLmdldEdhbWVWYWx1ZXMoKTtcbiAgICAgIGNvbnN0IGNoZWNrQm9hcmRTaGlwcyA9XG4gICAgICAgIGdhbWVWYWx1ZS5wbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpLmN1cnJlbnRTaGlwcztcblxuICAgICAgY2hhbmdlQmxvY2tTaXplKHdpbmRvdy5tYXRjaE1lZGlhKTtcblxuICAgICAgaWYgKGFjdGl2ZUdhbWUuY2hlY2tTZXR1cChnYW1lVmFsdWUucGxheWVyQ2hlY2tCb2FyZCkpIGRpc2FibGVTdGFydGVyVWkoKTtcblxuICAgICAgaWYgKG1vdXNlQmxvY2tMb2NhdGlvbikge1xuICAgICAgICBsZXQgY3VycmVudFNoaXAgPSBhY3RpdmVHYW1lLmFycmFuZ2VCbG9ja3MobW91c2VCbG9ja0xvY2F0aW9uLCBheGlzKTtcbiAgICAgICAgaWYgKCFjdXJyZW50U2hpcCAmJiBwbGFjZWRTaGlwKSB7XG4gICAgICAgICAgY3VycmVudFNoaXAgPSBtb3ZlU2hpcEJ5RGlyZWN0aW9uKFxuICAgICAgICAgICAgbW91c2VCbG9ja0xvY2F0aW9uLFxuICAgICAgICAgICAgcGxhY2VkU2hpcCxcbiAgICAgICAgICAgIGF4aXNcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRTaGlwKSBwbGFjZWRTaGlwID0gY3VycmVudFNoaXA7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cocGxhY2VkU2hpcCwgJ3RoZSBjdXJyZW50IHBsYWNlZCBzaGlwJyk7XG5cbiAgICAgICAgaWYgKHBsYWNlZFNoaXApIHJlbmRlclBsYWNlZFNoaXAoYmxvY2tTaXplKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhY3RpdmVHYW1lLmNoZWNrU2V0dXAoY2hlY2tCb2FyZFNoaXBzKSkgcmVuZGVyU2VsZWN0aW9uR3JpZCgpO1xuICAgICAgZWxzZSBzdGFydEdhbWUoYmxvY2tTaXplKTtcbiAgICB9LCByZW5kZXJTcGVlZCk7XG4gIH07XG5cbiAgY29uc3QgYWN0aXZhdGVVaSA9ICgpID0+IHtcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvbS5nZXRQYWdlKCk7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBwYWdlQ29udGVudDtcblxuICAgIGFkZFVpRXZlbnRzKCk7XG4gICAgcmVuZGVyU2VsZWN0aW9uR3JpZCgpO1xuICB9O1xuXG4gIGNvbnN0IGdldFZhbHVlcyA9ICgpID0+ICh7XG4gICAgYmxvY2tTaXplLFxuICAgIHBsYWNlZFNoaXAsXG4gICAgYXhpcyxcbiAgICBtb3VzZUJsb2NrTG9jYXRpb24sXG4gIH0pO1xuXG4gIGNvbnN0IGFkZFVpRXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmaW5kTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5zaGlwTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZmluZFRvdWNoUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VQbGF5ZXJTaGlwRXZlbnQpO1xuXG4gICAgZWxlbWVudC5yb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VBeGlzKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVVaUV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBlbGVtZW50LnNoaXBMYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmaW5kTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5zaGlwTGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZmluZFRvdWNoUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VQbGF5ZXJTaGlwRXZlbnQpO1xuXG4gICAgZWxlbWVudC5yb3RhdGVCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VBeGlzKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFjdGl2YXRlVWksXG4gICAgY3JlYXRlQmxvY2tFbGVtZW50LFxuICAgIGdldE1vdXNlUG9zaXRpb24sXG4gICAgbW92ZVNoaXBCeURpcmVjdGlvbixcbiAgICBjaGFuZ2VCbG9ja1NpemUsXG4gICAgY2hhbmdlQXhpcyxcbiAgICBnZXRWYWx1ZXMsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVaTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tcmVndWxhci5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tcmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tcmVndWxhci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tNzAwLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi03MDAud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tNzAwLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tNzAwLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi03MDAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tMzAwLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tMzAwLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMThfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fLCB7IGhhc2g6IFwiI0F6ZXJldE1vbm9cIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXywgeyBoYXNoOiBcIiNBemVyZXRNb25vXCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fLCB7IGhhc2g6IFwiI1JvYm90b1wiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOV9fXywgeyBoYXNoOiBcIiNSb2JvdG9cIiB9KTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1kYXJrQmxhY2s6IHJnYigyLCA0LCA4KTtcXG4gIC0tZGFya0dyYXk6IHJnYigyMiwgMjcsIDM0KTtcXG4gIC0tbWlzc0JsdWU6IHJnYig3NiwgODQsIDE5MSk7XFxufVxcblxcbi8qY3JlZGl0IHRvIGh0dHBzOi8vZ29vZ2xlLXdlYmZvbnRzLWhlbHBlci5oZXJva3VhcHAuY29tLyBmb3IgYWxsb3dpbmcgbWUgdG8gaW1wb3J0IHRoZXNlIGZvbnRzIGF1dG9tYXRpY2FsbHkqL1xcbi8qIGF6ZXJldC1tb25vLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdBemVyZXQgTW9ubyc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgLyogSUU2LUlFOCAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpXFxuICAgICAgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAvKiBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG59XFxuLyogYXplcmV0LW1vbm8tNzAwIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXplcmV0IE1vbm8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgc3JjOiBsb2NhbCgnJyksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgIC8qIElFNi1JRTggKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgnd29mZjInKSxcXG4gICAgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgLyogTW9kZXJuIEJyb3dzZXJzICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fICsgXCIpXFxuICAgICAgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fICsgXCIpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG59XFxuXFxuLyogcm9ib3RvLTMwMCAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyArIFwiKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgc3JjOiBsb2NhbCgnJyksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgLyogSUU2LUlFOCAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNV9fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgnd29mZicpLFxcbiAgICAvKiBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTZfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE3X19fICsgXCIpXFxuICAgICAgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbn1cXG4vKiByb2JvdG8tcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fXyArIFwiKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgc3JjOiBsb2NhbCgnJyksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE5X19fICsgXCIpXFxuICAgICAgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAvKiBJRTYtSUU4ICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIwX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIxX19fICsgXCIpXFxuICAgICAgZm9ybWF0KCd3b2ZmJyksXFxuICAgIC8qIE1vZGVybiBCcm93c2VycyAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMl9fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yM19fXyArIFwiKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxufVxcblxcbmh0bWwge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc2hpcEdyaWQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYmxvY2sge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB3aWR0aDogNDJweDtcXG4gIGhlaWdodDogNDJweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmhpdEJsb2NrIHtcXG4gIGJhY2tncm91bmQ6IHBpbms7XFxufVxcblxcbi5jdXJzb3RCbG9jayB7XFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXG59XFxuXFxuLm1pc3NCbG9jayB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1taXNzQmx1ZSk7XFxufVxcblxcbi5zZWN0aW9uU2NyZWVuIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMjtcXG5cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaGlwVGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdBemVyZXQgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuLnNoaXBUZXh0IHtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnNoaXBTZWxlY3Rpb24ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtCbGFjayk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDQ0MHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3RhdGVJbWFnZSB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSg4N2RlZylcXG4gICAgYnJpZ2h0bmVzcygxMDAlKTtcXG59XFxuXFxuLnJvdGF0ZUJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrQmxhY2spO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucm90YXRlQnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtHcmF5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBsaW5lLWhlaWdodDogNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNoaXBHcmlkIHtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogNDIwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzksIDM5LCAzOSwgMC41NzQpO1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMiwgNCwgOCk7XFxufVxcblxcbi5tYWluU2VjdGlvbiB7XFxuICBtaW4taGVpZ2h0OiA5MHZoO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubWFpblRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGxpbmUtaGVpZ2h0OiAxMHZoO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbn1cXG5cXG4uY2VudGVyU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmdyaWQge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtHcmF5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uc2hpcE92ZXJsYXkge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG5cXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uc3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtHcmF5KTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBsaW5lLWhlaWdodDogMTB2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW5UaXRsZSBoMSB7XFxuICBmb250LWZhbWlseTogJ0F6ZXJldCBNb25vJywgbW9ub3NwYWNlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgLmdyaWQge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICB9XFxuXFxuICAuc2hpcEdyaWQge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICB9XFxuXFxuICAuc2hpcE92ZXJsYXkge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICB9XFxuXFxuICAuc2hpcFNlbGVjdGlvbiB7XFxuICAgIHdpZHRoOiAzMTBweDtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICB9XFxuXFxuICAuYmxvY2sge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgfVxcblxcbiAgLnN0YXRzIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3MHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gICAgaGVpZ2h0OiAyMTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwR3JpZCB7XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gICAgaGVpZ2h0OiAyMTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwT3ZlcmxheSB7XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gICAgaGVpZ2h0OiAyMTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwU2VsZWN0aW9uIHtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBUZXh0IHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICB9XFxuXFxuICAuYm9hcmRUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgfVxcblxcbiAgLmJsb2NrIHtcXG4gICAgd2lkdGg6IDIxcHg7XFxuICAgIGhlaWdodDogMjFweDtcXG4gIH1cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICB9XFxuXFxuICAuc3RhdHMge1xcbiAgICB3aWR0aDogMjEwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzY1cHgpIHtcXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcbiAgfVxcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IDZweDtcXG4gIH1cXG5cXG4gIC5zaGlwT3ZlcmxheSB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwR3JpZCB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwU2VsZWN0aW9uIHtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgfVxcblxcbiAgLmJsb2NrIHtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gIH1cXG5cXG4gIC5zaGlwVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICB9XFxuXFxuICAuc2hpcFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICB9XFxuXFxuICAuc3RhdHMge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBLDhHQUE4RztBQUM5RyxnQ0FBZ0M7QUFDaEM7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0Q0FBc0QsRUFBRSxxQkFBcUI7RUFDN0U7Ozs7Ozs7Ozs7MkRBVThFLEVBQUUsZUFB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RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1kYXJrQmxhY2s6IHJnYigyLCA0LCA4KTtcXG4gIC0tZGFya0dyYXk6IHJnYigyMiwgMjcsIDM0KTtcXG4gIC0tbWlzc0JsdWU6IHJnYig3NiwgODQsIDE5MSk7XFxufVxcblxcbi8qY3JlZGl0IHRvIGh0dHBzOi8vZ29vZ2xlLXdlYmZvbnRzLWhlbHBlci5oZXJva3VhcHAuY29tLyBmb3IgYWxsb3dpbmcgbWUgdG8gaW1wb3J0IHRoZXNlIGZvbnRzIGF1dG9tYXRpY2FsbHkqL1xcbi8qIGF6ZXJldC1tb25vLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdBemVyZXQgTW9ubyc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLmVvdCcpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tcmVndWxhci5lb3Q/I2llZml4JylcXG4gICAgICBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgIC8qIElFNi1JRTggKi8gdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tcmVndWxhci53b2ZmMicpXFxuICAgICAgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgLyogTW9kZXJuIEJyb3dzZXJzICovIHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIudHRmJylcXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tcmVndWxhci5zdmcjQXplcmV0TW9ubycpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG59XFxuLyogYXplcmV0LW1vbm8tNzAwIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXplcmV0IE1vbm8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHNyYzogdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tNzAwLmVvdCcpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tNzAwLmVvdD8jaWVmaXgnKVxcbiAgICAgIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgLyogSUU2LUlFOCAqLyB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi03MDAud29mZjInKVxcbiAgICAgIGZvcm1hdCgnd29mZjInKSxcXG4gICAgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovIHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC53b2ZmJylcXG4gICAgICBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgLyogTW9kZXJuIEJyb3dzZXJzICovIHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC50dGYnKVxcbiAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi03MDAuc3ZnI0F6ZXJldE1vbm8nKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxufVxcblxcbi8qIHJvYm90by0zMDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHNyYzogdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC5lb3QnKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgc3JjOiBsb2NhbCgnJyksXFxuICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgLyogSUU2LUlFOCAqLyB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tMzAwLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC53b2ZmJylcXG4gICAgICBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgLyogTW9kZXJuIEJyb3dzZXJzICovIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAudHRmJylcXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAuc3ZnI1JvYm90bycpXFxuICAgICAgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbn1cXG4vKiByb2JvdG8tcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci5lb3QnKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgc3JjOiBsb2NhbCgnJyksXFxuICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLmVvdD8jaWVmaXgnKVxcbiAgICAgIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgLyogSUU2LUlFOCAqLyB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLndvZmYnKVxcbiAgICAgIGZvcm1hdCgnd29mZicpLFxcbiAgICAvKiBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIudHRmJylcXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIuc3ZnI1JvYm90bycpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG59XFxuXFxuaHRtbCB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zaGlwR3JpZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ibG9jayB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHdpZHRoOiA0MnB4O1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uaGl0QmxvY2sge1xcbiAgYmFja2dyb3VuZDogcGluaztcXG59XFxuXFxuLmN1cnNvdEJsb2NrIHtcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcbn1cXG5cXG4ubWlzc0Jsb2NrIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW1pc3NCbHVlKTtcXG59XFxuXFxuLnNlY3Rpb25TY3JlZW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAyO1xcblxcbiAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG5cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXBUaXRsZSB7XFxuICBmb250LWZhbWlseTogJ0F6ZXJldCBNb25vJywgbW9ub3NwYWNlO1xcbn1cXG5cXG4uc2hpcFRleHQge1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uc2hpcFNlbGVjdGlvbiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0JsYWNrKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNDQwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJvdGF0ZUltYWdlIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDg3ZGVnKVxcbiAgICBicmlnaHRuZXNzKDEwMCUpO1xcbn1cXG5cXG4ucm90YXRlQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtCbGFjayk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yb3RhdGVCdXR0b24ge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBtYXJnaW46IDEwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2hpcEdyaWQge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtHcmF5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgYmFja2dyb3VuZDogcmdiYSgzOSwgMzksIDM5LCAwLjU3NCk7XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGJhY2tncm91bmQ6IHJnYigyLCA0LCA4KTtcXG59XFxuXFxuLm1haW5TZWN0aW9uIHtcXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tYWluVGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgbGluZS1oZWlnaHQ6IDEwdmg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxufVxcblxcbi5jZW50ZXJTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcbi5zaGlwT3ZlcmxheSB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG5cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5zdGF0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG4gIGxpbmUtaGVpZ2h0OiAxMHZoO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWFpblRpdGxlIGgxIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXplcmV0IE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG5cXG4gIC5zaGlwR3JpZCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG5cXG4gIC5zaGlwT3ZlcmxheSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG5cXG4gIC5zaGlwU2VsZWN0aW9uIHtcXG4gICAgd2lkdGg6IDMxMHB4O1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gIH1cXG5cXG4gIC5ibG9jayB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICB9XFxuXFxuICAuc3RhdHMge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDcwcHgpIHtcXG4gIC5ncmlkIHtcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgICBoZWlnaHQ6IDIxMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBHcmlkIHtcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgICBoZWlnaHQ6IDIxMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBPdmVybGF5IHtcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgICBoZWlnaHQ6IDIxMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBTZWxlY3Rpb24ge1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICB9XFxuXFxuICAuc2hpcFRleHQge1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gIH1cXG5cXG4gIC5ib2FyZFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICB9XFxuXFxuICAuYmxvY2sge1xcbiAgICB3aWR0aDogMjFweDtcXG4gICAgaGVpZ2h0OiAyMXB4O1xcbiAgfVxcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gIH1cXG5cXG4gIC5zdGF0cyB7XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjVweCkge1xcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxuICB9XFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiA4cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcXG4gIC5ncmlkIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogNnB4O1xcbiAgfVxcblxcbiAgLnNoaXBPdmVybGF5IHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgfVxcblxcbiAgLnNoaXBHcmlkIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgfVxcblxcbiAgLnNoaXBTZWxlY3Rpb24ge1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICB9XFxuXFxuICAuYmxvY2sge1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgfVxcblxcbiAgLnNoaXBUZXh0IHtcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG4gIH1cXG5cXG4gIC5zaGlwVGl0bGUge1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gIH1cXG5cXG4gIC5zdGF0cyB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiVWkiLCJjdXJyZW50VWkiLCJhY3RpdmF0ZVVpIiwicmVmcmVzaGluZ0xvZ28iLCJEb20iLCJnZXRFbGVtZW50cyIsIm92ZXJsYXkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWN0aW9uU2NyZWVuIiwic2hpcFRleHQiLCJzaGlwR3JpZCIsInNoaXBMYXllciIsInJvdGF0ZUJ1dHRvbiIsImdyaWRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImhpdHMiLCJtaXNzZXMiLCJwbGF5ZXJHcmlkIiwicGxheWVySGl0cyIsInBsYXllck1pc3NlcyIsImNvbXB1dGVyR3JpZCIsImNvbXB1dGVySGl0cyIsImNvbXB1dGVyTWlzc2VzIiwiY29udGVudCIsImdldFBhZ2UiLCJQb3NpdGlvbiIsIlNoaXAiLCJQcmFjdGljYWwiLCJHYW1lYm9hcmQiLCJwb3NpdGlvbiIsInNoaXAiLCJwcmFjdGljYWwiLCJjdXJyZW50U2hpcHMiLCJyYW5kb21pemUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21BeGlzIiwiYXhpZXMiLCJsZW5ndGgiLCJwbGFjZUFsbFNoaXBzIiwic2hpcHNBcnJheSIsImNvbXBhcmVTaGlwc0FycmF5IiwibGF0ZXN0U2hpcHNBcnJheSIsInNoaXBzIiwic2hpcHNEb0NvbGxpZGUiLCJmb3JFYWNoIiwibGF0ZXN0U2hpcHMiLCJib2F0IiwibGF0ZXN0Qm9hdCIsImNvbXBhcmVQb3NpdGlvbiIsInBsYXllclBsYWNlU2hpcCIsImxvY2F0aW9uIiwiYXhpcyIsImxhdGVzdFBvc2l0aW9uIiwiY3VycmVudEFycmF5IiwiY29weUFycmF5Iiwic2hpcGxlbmd0aCIsImN1cnJlbnRTaGlwIiwiY3JlYXRlU2hpcCIsImlzQ29sbGlkZWQiLCJwdXNoIiwicGxhY2VSYW5kb21TaGlwcyIsInJhbmRvbWl6ZXIiLCJyYW5kb21BeGllcyIsImxhdGVzdExlbmd0aCIsInJhbmRvbVBvc2l0aW9uIiwiY3JlYXRlUG9zaXRpb24iLCJyYW5kb21TaGlwIiwic2hpcENvbGxpZGVzIiwicGxhY2VTaGlwc1JhbmRvbWx5IiwiYXR0YWNrU2hpcCIsImN1cnJlbnRIaXRzIiwiY3VycmVudE1pc3NlcyIsImlzSGl0IiwibGF0ZXN0SGl0cyIsImxhdGVzdE1pc3NlcyIsInNoaXBBcnJheSIsInBvc2l0aW9uc0FycmF5IiwiaGl0IiwiaGl0QXJyYXkiLCJzaGlwQXJyYXlzIiwiZmluYWxPYmplY3QiLCJyZWNpZXZlQXR0YWNrIiwicmVzdWx0IiwiY3JlYXRlUmFuZG9tQ29vcmRzIiwiaXNNb2NrUmFuZG9tIiwiY2FsbFJhbmRvbWl6ZXIiLCJyYW5kb21YIiwicmFuZG9tWSIsImZpbHRlckF0dGFjayIsImFycmF5IiwiY3VycmVudEF0dGFjayIsImN1cnJlbnRBdHRhY2tBcnJheSIsImZpbHRlciIsIml0ZW0iLCJ4Q29vcmQiLCJ5Q29vcmQiLCJnZXRUeXBlT2ZQbGFjZWRTaGlwIiwic2hpcFR5cGVzIiwic2hpcFR5cGUiLCJzaGlwTGVuZ3RoIiwicmVjaWV2ZVJhbmRvbUF0dGFjayIsImhhc0JlZW5IaXQiLCJoYXNCZWVuTWlzcyIsImlzQWxsU3VuayIsImhhc1N1bmtlZCIsImlzU3VuayIsImdldFZhbHVlcyIsIkdhbWUiLCJwbGF5ZXJCb2FyZCIsImNvbXB1dGVyQm9hcmQiLCJwbGF5ZXJDaGVja0JvYXJkIiwiY2hlY2tTZXR1cCIsInBsYXllckNoZWNrU2hpcHMiLCJzZXR1cEdhbWUiLCJwbGF5ZXJDaGVja1ZhbHVlcyIsImF0dGFja0JvYXRzIiwiY29vcmRzIiwic2V0dXBTaGlwIiwiZ2FtZUlzT3ZlciIsIm1lc3NhZ2UiLCJnYW1lRmluaXNoZWQiLCJhcnJhbmdlQmxvY2tzIiwibW91c2VQb3NpdGlvbiIsImN1cnJlbnRSb3RhdGlvbiIsInNoaXBUeXBlT2JqZWN0IiwiZ2V0R2FtZVZhbHVlcyIsImFjdGl2ZUdhbWUiLCJjaGVja091dE9mQm91bmNlIiwibmV3UG9zaXRpb24iLCJhZGRQb3NpdGlvbiIsInBvc2l0aW9uMSIsInBvc2l0aW9uMiIsIm11bHRpcGx5UG9zaXRpb24iLCJjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsIiwibmV3QXJyYXkiLCJpc09iamVjdCIsImN1cnJlbnRPYmplY3QiLCJjaGVja09iamVjdCIsIm9iamVjdDEiLCJvYmplY3QyIiwiaW5kZXgiLCJzZWNvbmRJbmRleCIsIm9iamVjdElzRXF1YWwiLCJjdXJyZW50T2JqZWN0MiIsImN1cnJlbnRPYmplY3RWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjdXJyZW50T2JqZWN0MlZhbHVlcyIsIm9iamVjdEtleXMiLCJrZXlzIiwib2JqZWN0S2V5czIiLCJrZXkiLCJpdGVtMiIsImNoZWNrT2JqZWN0Qm9vbCIsImdldEFkZGVkUG9zaXRpb24iLCJhZGRlZFBvc2l0aW9uIiwibGVuZ3RoMSIsInBvcHVsYXRlU2hpcHMiLCJjdXJyZW50UG9zaXRpb24iLCJsYXRlc3RBcnJheSIsImFycmF5TGVuZ3RoIiwicG9zIiwiZG9tIiwicmVuZGVyU3BlZWQiLCJibG9ja1NpemUiLCJwbGFjZWRTaGlwIiwibW91c2VCbG9ja0xvY2F0aW9uIiwiY3JlYXRlRG9tRWxlbWVudCIsImVsZW1lbnROYW1lIiwiY3JlYXRlRWxlbWVudCIsImdldE1vdXNlUG9zaXRpb24iLCJvZmZzZXRYIiwib2Zmc2V0WSIsImZpbmRNb3VzZVBvc2l0aW9uIiwiZXZlbnQiLCJjdXJyZW50TW91c2VQb3NpdGlvbiIsImZpbmRUb3VjaFBvc2l0aW9uIiwicmVjdCIsInRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvdWNoT2Zmc2V0WCIsInRhcmdldFRvdWNoZXMiLCJwYWdlWCIsImxlZnQiLCJ0b3VjaE9mZnNldFkiLCJwYWdlWSIsInRvcCIsInRvdWNoUG9zaXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZUJsb2NrU2l6ZSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiY3JlYXRlQmxvY2tFbGVtZW50IiwiYmxvY2tDbGFzcyIsImNyZWF0ZUJsb2NrIiwibGF0ZXN0Q2xhc3MiLCJibG9ja0VsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXNhYmxlU3RhcnRlclVpIiwiY3JlYXRlU2hpcEJsb2NrIiwic2hpcFBvc2l0aW9uIiwibGF0ZXN0QmxvY2tTaXplIiwic2hpcEJsb2NrIiwicmVhbFBvc2l0aW9uWCIsInJlYWxQb3NpdGlvblkiLCJzdHlsZSIsInJlbmRlckFscmVhZHlQbGFjZWRTaGlwcyIsImdhbWVWYWx1ZXMiLCJjaGVja0JvYXJkU2hpcHMiLCJhcHBlbmRDaGlsZCIsInJlbmRlclBsYWNlZFNoaXAiLCJlbGVtZW50IiwiaW5uZXJIVE1MIiwiY2hhbmdlQXhpcyIsIm1vdmVTaGlwQnlEaXJlY3Rpb24iLCJtb3VzZUxvY2F0aW9uIiwiY3VycmVudEF4aXMiLCJsYXRlc3RTaGlwIiwibmV3WFBvc2l0aW9uIiwibmV3WVBvc2l0aW9uIiwibmV3U2hpcFBvc2l0aW9uIiwicGxhY2VQbGF5ZXJTaGlwIiwibGF0ZXN0QXhpcyIsImxhdGVzdEdhbWUiLCJwbGFjZVBsYXllclNoaXBFdmVudCIsImFkZFNoaXBzIiwiZ3JpZCIsInNoaXBHcm91cCIsInNoaXBFbGVtZW50IiwicmVuZGVyR3JpZHMiLCJibG9ja1NpemUyIiwicGxheWVyQm9hcmRWYWx1ZXMiLCJjb21wdXRlckJvYXJkVmFsdWVzIiwicmVuZGVyR2FtZSIsInNldFRpbWVvdXQiLCJnYW1lU3RhdHVzIiwicmVtb3ZlU2hpcFNlY3Rpb24iLCJlbGVtZW50cyIsImRpc3BsYXkiLCJzdGFydEdhbWUiLCJyZW5kZXJTZWxlY3Rpb25HcmlkIiwiZ2FtZVZhbHVlIiwid2luZG93IiwicGFnZUNvbnRlbnQiLCJib2R5IiwiYWRkVWlFdmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlVWlFdmVudHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==